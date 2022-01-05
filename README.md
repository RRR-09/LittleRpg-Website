# LittleRpg Website
A contracted website for a Minecraft server.
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

The backend could fulfill the customer's order, but functionality already exists in the accompanying Discord bot, so it processes/verifies the transaction and hands it off to Discord for fulfillment instead.

In addition, a free tier MongoDB will be used to record and display monthly financial goals.
## Pages:

