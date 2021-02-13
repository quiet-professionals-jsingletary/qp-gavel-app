 /**-------------------------------------------------------------- ->
 *  ┌──────────────────────────┐
 *  │ |> GAVEL - Express API   │
 *  └──────────────────────────┘
 * 
 *  @name: 'Gavel - API Server'
 *  @description: 'Express API / Server in support of GAVEL'
 *  @implements: 'Custom RESTful API'
 *  @author: '@quiet-professionals-jsingletary'       
 *  @copyright: 'Quiet Professionals LLC'
 * 
*/   

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
const port = process.env.REACT_APP_PORT || 5000;

// Require Route
const api = require('./routes/routes');

app.use('/api/v1', api);

/*/
 *  ┌────────────────────────┐
 *  │ |> CORS Support        │
 *  └────────────────────────┘
/*/
// TODO: Dont forget to whitelist the Azure `dev` Web App URL
const corsOptions = {
  "origin": "http://localhost:3000",
  "optionsSuccessStatus": 200,
}
app.use(cors(corsOptions));
console.log('CORS Status: ', cors);

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

// Middleware for parsing / renering data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Middleware communicates to Express which backend files to serve up
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} 

// later, if you want to clean up
// require('console-group').teardown();

/*/
 *  ┌────────────────────────┐
 *  │ |> Api Endpoints       │
 *  └────────────────────────┘
 *   All endpoints live in the `./api` directory 
/*/

/*/
 *  ┌──────────────────────────────┐
 *  │ |> Mock-Data Endpoints       │
 *  └──────────────────────────────┘
 *   Use mock data when Venntel API is not accessible (whitelisting)
 *   Also live in the `./api` directory
/*/

/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Error Handling - Catch All     │
 *  └───────────────────────────────────┘
/*/
// app.get('*', (req, res) => {
//   res.status(200).json({
//     msg: 'Catch All'
//   });
// });

// Configure Error Handler
const handleErrors = err => { 
  const resp = new Response(JSON.stringify({
    "code": err.code,
    "message": err.statusText
  }));

  console.warn(resp);
  return resp;
}

/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Start Server & Listen to Port  │
 *  └───────────────────────────────────┘
/*/
// console.log('module: ', module);
app.listen(port, () => {
  console.log(`ExPRESS: GaVeL API Running... | BACK_END_SERVICE_PORT: ${port}`);
});
