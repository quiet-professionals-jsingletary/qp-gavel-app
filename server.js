/**-------------------------------------------------------------- ->
*  ┌──────────────────────────────────────┐
*  │ |> GAVEL - Client-Side Application   │
*  └──────────────────────────────────────┘
* 
*  @name:          'GAVEL - Web Application'
*  @description:   'GAVEL - Geospatial Information toolset for curating data'

*  @author:        '@quiet-professionals-jsingletary'       
*  @copyright:     'Quiet Professionals LLC'
* 
*/

// Imports
const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fetch = require('node-fetch');
const path = require('path');

require('dotenv').config();

// TODO: Determine if `react-helmet` would be useful
/*/  
 *  ┌────────────────────────┐
 *  │ |> Init Express Server │
 *  └────────────────────────┘
/*/
const app = express();
const port = process.env.REACT_APP_PORT || 3000;

// Middleware for parsing / renering data
// NOTE: Parsing middleware must run prior to `require()` routes 
// --> (All middleware will run in order as they appear in code)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require Route
const api = require('./routes/routes');

// Add API version to URI
app.use(process.env.REACT_APP_API_VERSION, api);

/*/
 *  ┌────────────────────────┐
 *  │ |> CORS Support        │
 *  └────────────────────────┘
/*/
// TODO: Dont forget to whitelist the Azure `dev` Web App URL
// const corsOptions = {
//   "origin": "http://localhost:3000",
//   "optionsSuccessStatus": 200,
// }
// app.use(cors(corsOptions));
// console.log('CORS Status: ', cors);

/*/
 *  ┌─────────────────────────────┐
 *  │ |> Middleware / Utilities   │
 *  └─────────────────────────────┘
/*/
// Middleware logs incoming requests to the server's console
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Middleware communicates to Express which files to serve up
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  console.log('Node Environment: ', process.env.NODE_ENV);
}

/*/
 *  ┌────────────────────────┐
 *  │ |> Error Handling      │
 *  └────────────────────────┘
/*/

// Configure Error Handler
// create an error with .status. we
// can then use the property in our
// custom error handler (Connect repects this prop as well)
function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Start Server & Listen to Port  │
 *  └───────────────────────────────────┘
/*/
// console.log('module: ', module);
app.listen(port, () => {
  console.log(`Express Server Running... | BACK_END_SERVICE_PORT: ${port}`);
});
