import fetch from "node-fetch";
import StoreLookupJSON from "../content/store_lookup.json";

async function discord_webhook(obj) {
  let msg = JSON.stringify(obj);

  if (msg.length >= 1750) {
    // Discord message limits
    const truncated_msg = obj.message.slice(0, 1750);
    let new_obj = { ...obj };
    new_obj.truncated = true;
    new_obj.message = truncated_msg;
    msg = JSON.stringify(new_obj);
  }

  try {
    let res = await fetch(process.env.IPN_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: msg,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(
        `Failed to send discord webhook!\n${JSON.stringify(
          res.status
        )}\n${text}`
      );
    }
  } catch (error) {
    console.error(`Failed to send discord webhook!\n${error}`);
  }
}

async function log_error(message) {
  console.error(message);
  await discord_webhook({ success: false, message: message });
}

async function send_verification_to_paypal(req_body) {
  let returnData = { success: false, message: "UNHANDLED ERROR" };
  const formUrlEncodedBody = new URLSearchParams(req_body).toString();
  let verificationBody = `cmd=_notify-validate&${formUrlEncodedBody}`;

  // For testing/sandbox: "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr"
  // For production/real money: "https://ipnpb.paypal.com/cgi-bin/webscr"
  const ipn_verification_url = "https://ipnpb.paypal.com/cgi-bin/webscr";
  try {
    let res = await fetch(ipn_verification_url, {
      method: "POST",
      body: verificationBody,
    });
    const statusCode = res.status;
    const response = await res.text();
    if (statusCode == 200) {
      if (response === "VERIFIED") {
        console.log("Verified IPN");
        returnData.success = true;
        returnData.message = "Verified";
      } else if (response === "INVALID") {
        console.error(`Invalid IPN ${req_body}`);
        returnData.success = false;
        returnData.message = "Invalid IPN";
      } else {
        returnData.success = false;
        returnData.message = `Unexpected response body:\n${response}`;
      }
    } else {
      returnData.success = false;
      returnData.message = `Statuscode not 200:\n${JSON.stringify(response)}`;
    }
  } catch (error) {
    returnData.success = false;
    returnData.message = `Exception in fetch:\n${error}`;
  }
  return returnData;
}

export default async function handler(req, res) {
  console.log("IPN Notification Event Received");

  if (req.method !== "POST") {
    console.error("Request method not allowed.");
    res.status(405).send("Method Not Allowed");
    return;
  } else {
    // Return empty 200 response to acknowledge IPN post success.
    console.log("IPN Notification Event received successfully.");
    res.status(200).end();
  }

  // JSON object of the IPN message consisting of transaction details.
  const data = req.body;

  console.log(`Verifying IPN: ${JSON.stringify(data)}`);
  const currency = data.mc_currency ?? "N/A";

  // Documentation is inconsistent; it seems 'gross' and 'fee' swap sometimes. Keeping both.
  const gross = data.mc_gross ?? -1;
  const fee = data.mc_fee ?? -1;
  const total = Math.max(gross, fee);

  const user_name = data.option_selection1 ?? "N/A";
  const item_code = data.item_number ?? "Error";

  const verification = await send_verification_to_paypal(data);

  // Datacheck
  if (
    currency === "N/A" ||
    total === -1 ||
    user_name === "N/A" ||
    item_code == "Error"
  ) {
    await log_error(
      `[DATA ERROR] One or more fields in the transaction failed to process.\n
      currency: ${currency}\n
      gross: ${gross}\n
      fee: ${fee}\n
      total: ${total}\n
      user_name: ${user_name}\n
      item_code: ${item_code}\n
      Body: \n${JSON.stringify(data)}`
    );
    return;
  }

  // Don't allow test item outside development mode
  if (process.env.NODE_ENV !== "development" && item_code === "TestItem") {
    await log_error(
      `User "${user_name}" tried to buy the test item without being a developer!`
    );
    return;
  }

  // Don't give any items if transaction couldn't be verified
  if (!verification.success) {
    await log_error(
      `[UNVERIFIED] User "${user_name}" tried to buy "${item_code}" for ${gross} (${currency}) and failed verification\n\`${verification.message}\``
    );
    return;
  }

  // Check before failing if the item bought doesn't exist in our list
  if (!(item_code in StoreLookupJSON)) {
    await log_error(
      `[UNKNOWN ITEM] User "${user_name}" bought unknown item "${item_code}" for ${gross} (${currency})`
    );
    return;
  }

  const item = StoreLookupJSON[item_code];

  await discord_webhook({
    success: true,
    item: item,
    currency: currency,
    gross: gross,
    fee: fee,
    total: total,
    user_name: user_name,
    item_code: item_code,
  });

  //TODO: Maybe move RCON code to give in-game items here? Not super neccesary, discord bot handles it

  return;
}
