# cld_node_quickstart
Example Node.js script used in the Cloudinary docs.

This GitHub repo was created from Replit: [https://replit.com/@CarolineLevison/Cloudinary-Nodejs-Quickstart](https://replit.com/@CarolineLevison/Cloudinary-Nodejs-Quickstart).

## Running the script

To run the script outside of the Replit environment:

1. Clone this repo.
1. Open a terminal in the `cld_node_quickstart` folder.
1. Set your Cloudinary API Environment variable:
   ```
   export CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
   ```
   You can find your API Environment variable in the Account Details section of your Cloudinary console.
1. Install Cloudinary:
   ```
   npm install cloudinary
   ```
1. Run the script:
   ```
   node index.js
   ```
