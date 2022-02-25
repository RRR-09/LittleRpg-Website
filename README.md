# LittleRpg Website
A contracted website for a Minecraft server. Design choices such as logo and font are the client's.
## General Notes
### Goals
The goals that have been met were:
1. $0 cost for frontend and backend (unless traffic increases)
2. Lowest possible transaction fees/deductions for shop (PayPal)
3. $0 overhead for eCommerce section (no eCommerce solution found meets this and above requirements)
4. Relatively configurable
### Frontend
The frontend part of this was achieved with Gatsby (React-based static site framework) and Gatsby Cloud (free tier hosting of static content, "build" system that can draw from .json configurations).
### Backend
The backend part of this was achieved with Gatsby Cloud Functions (serverless-like API with reasonable free tier limits) and PayPal IPN. Currently hijacks the form submission  from the legacy PayPal Buttons system to manage item codes and prices, without being forced to use the static/unappealing HTML provided by it. 

The backend could fulfill the customer's order, but functionality already exists in the accompanying Discord bot, so it processes/verifies the transaction and hands it off to the Discord bot for fulfillment instead.

When an order is fulfilled and logged, the monthly total is updated on the bot's side, and a rebuild trigger is sent to Gatsby. While building, Gatsby then queries a url to a FastAPI webserver on the bot's machine (URL hidden in the environment variables) to receive the current month's total donation goal. This is stored in the GQL system, acting as a form of caching for the progress bar visible on the store page, allowing it to remain a static site.

## Pages:
* https://littlerpg.net/
* https://littlerpg.net/vote
* https://littlerpg.net/store/
* https://littlerpg.net/store/premium
* https://littlerpg.net/store/purchase (Purchase data comes from state, navigating to this page directly is useless)
* https://littlerpg.net/store/success?purchased_item=... (Without a valid purchased_item id, this will display an error page with troubleshooting steps)
