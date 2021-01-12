const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const NodeRSA = require('node-rsa');

require('dotenv').config();

//#region [infosec]
// ! TODO: Remove Private Keys from code and store them to Key Vault 
const keyData = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n' +
  'MIIEpAIBAAKCAQEAzWJEgVPNXeMVOGNxNbiR1mTw3t1yDQRn7YQ5B3Svuii3A1+8\n' +
  '7CAl0tUIJfc3WaTg8l1Rwskg7p+rnmLIDnRLUak8BiJBobnm6cDSmhWFgNXikew/\n' +
  'YY/TlLXN3tCEz0GmyJ9jQHRLYBa/PEndUVqav4QfAPi1ChEaq2GtGuhX8qZEQfgg\n' +
  'sLQCvJ/lM3n/k0DbcyZ8Gkgg7eREoHO7NE3HDVS1OrnAMIAj6AsqYguN7gol822I\n' +
  '6aur2L7mF4AW2/ylWpsPtgX6fgzjo6FmGRSCrkfkevFZxbNd2yXUN8jnF4TW5H2i\n' +
  'Tc9YEHKjDEw2osrjGC3tpaHH4E02pCgC5kgNswIDAQABAoIBAAS0NHd10OVOlyTU\n' +
  'ejpNwOFVLIMeNUeBC1RQS/IUxRWRayejoLMTxWn/wREFiXn/IbvLUV0RuDRe6dJV\n' +
  '1tkl5re3FY3aaQBoPpap+OjYh1c9DtRiwczdO25Tf6STyAbrLQO5Ss+mGjfYLYcW\n' +
  '9f+wAI1UXFVsXNEfNSopsYpFOgZvp+x3MJHVHyxDD/xlIDNsccKsLaSp+CxoPFxd\n' +
  '9vwjJN+ZZNyhlC/rfbHgeo/HJFtB8PZzF+nF01s89kdi8QBdw6lvYMiOtq6IlZRr\n' +
  '7VpopTq21Xxh9rXCPYwwd/34Ap/CjXrxesbNfdXtbPZK008vusWm5hEdzhWwchhq\n' +
  'jbS1qOECgYEA7D7ZVgIAF5dVW+S9Awpe8Qz0zcOVTVou3bf6SMyydtpOCgjv8t7z\n' +
  'vXiGHOmDT6p3l8QzzGUIs8r5QYh9CclqXYtjgE/hojxOLyofFurcxI2uYDnXNkvC\n' +
  'IWD0AuA7NIZaEP9yaQZRxMsNp2sdTKPJzSsDZcWxPZTMtpgCPsGhbDECgYEA3o7I\n' +
  'qA5vhp/g6/rOn1GvDzf8EtI+tSeCGujCjdipS/qyrZPznlTYBVQH9mcECrBVoWPq\n' +
  'tWCxyPhmC4NgcqttRAX1LYM4xTKw3vD67bzM3iFFZl7fSDFLk7omMG+Z4FB/U4ol\n' +
  'Xbq9FSk1auDV9A6ElsyljCLRdxvTxErM4yOQsyMCgYEAkpZ40tZQ6lJ7o5Zt9aoE\n' +
  'uTuZ1udKCAIyXF8hDPT+s6LHk5ByGtheky1qwhve35rdtC0JGwWB/dWvDgu70kvJ\n' +
  'FRw9dEucrMcQmFFhkx3OOKPVFF4vfMBLR9zZ68Lo2bGXxz5J5oMGT77SzRQ4zOpA\n' +
  'eG79H7QoQxbGY3I0ym3pVLECgYEA09jYOdhb4qrnH9lCuza2y2bAJG5K0IeF+fVb\n' +
  '1EfLhw5g7Icr26fpZNEDL1IJ796/8/s3HGWpdaK1B/qLYTu6q4h8RFFnRZal8+Ex\n' +
  'CgGwhTToabSfF4oM5dbIqUxiDbqyKKQUQ28Qs0bhmRXhswnqvdyZLJasCpPLdUq6\n' +
  'Uu+0uj8CgYABmSfOhv7e50y3UBEh3de7IBqHPwsCKTDn5KPKGnKUB6fZfCForXPB\n' +
  'UULVxHkfspHj8WXSCrvbvGR6Z8iuILfvgU8EDbQekUmPdzoV1IpEZxyQWaaChnzj\n' +
  'lGbxzxaxp7mt+pq5b9xYnUpw7dnXvSZTYrLsDcDbVn67+rS5zXEwvQ==\n' +
  '-----END RSA PRIVATE KEY-----');
//#endregion

/*/  
 *  ┌────────────────────────┐
 *  │ |> Init Express Server │
 *  └────────────────────────┘
/*/
const app = express();
const apiKey = process.env.REACT_APP_API_KEY;
const port = process.env.REACT_APP_PORT || 5000;

// Require Route
// const api = require('./routes/routes');
// // Configure app to use route
// app.use('/api/v1/', api);

let decrypted = "0";

/*/
 *  ┌────────────────────────┐
 *  │ |> CORS Support        │
 *  └────────────────────────┘
/*/
const cors = require('cors');
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
// Middleware logs incoming requests to the server's console.
// Useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Configure the bodyParser middleware
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

/*/  
 *  ┌───────────────────────────────────────────────────┐
 *  │ |> Utility function to handle rejected promises.  │
 *  └───────────────────────────────────────────────────┘
/*/
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

// Configure Error Handler
// const handleErrors = err => {
//   const resp = new Response(JSON.stringify({
//     "code": err.code,
//     "message": err.statusText
//   }));

//   console.warn(resp);
//   return resp;
// }

/*/
 *  ┌────────────────────────┐
 *  │ |> Api Endpoints       │
 *  └────────────────────────┘
/*/
// app.get('/users/:id', asyncMiddleware(async (req, res, next) => {
//   // If there is an error thrown in getUserFromDb, asyncMiddleware
//   // will pass it to next() and express will handle the error;
//   const user = await getUserFromDb({ id: req.params.id })
//   res.json(user);
// }));

// app.post('/users', asyncMiddleware(async (req, res, next) => {
//   const user = await makeNewUser(req.body);
//   app.json(user)
// }))

app.get("/api/security-token", asyncMiddleware(async (req, res, next) => {
  const url0 = "https://staging-bs-api.venntel.com/v1.5/securityToken";

  let headers0 = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": apiKey
  };

  const fetch_res0 = await fetch(url0, {
    "method": "GET",
    "headers": headers0,
  });

  const json0 = await fetch_res0.json();

  // Decrypt Key
  const token = json0.tempSecurityEncryptedToken;

  // TODO: Move the decryption logic into a Route Handler
  keyData.setOptions({ encryptionScheme: 'pkcs1' });

  decrypted = keyData.decrypt(token, 'utf8');

  // console.log("Decrypted Token: ", decrypted);

  res.json({ "TempSecurityToken": decrypted });

}));

app.post("/api/location-data/search", asyncMiddleware(async (req, res, next) => {
  
  const searchUrl = "https://staging-bs-api.venntel.com/v1.5/locationData/search";

  // Use mock-data for radius poly search
  // var payload = {
  //   'startDate': '2020-03-20T00:00:00Z',
  //   'endDate': '2020-03-25T00:00:00Z',
  //   'registrationIDs': [{
  //     'registrationID': 'ff51aefb-ab54-3274-8d59-226f66203c66'
  //   }]
  // };

  let headers1 = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": apiKey,
    "TempSecurityToken": decrypted
  };

  
  const payload1 = {
    "startDate": "2020-12-31T00:00:00Z",
    "endDate": "2021-01-01T23:59:59Z",
    "areas": [{
      "longitude": -82.568518,
      "latitude": 27.964489,
      "radius": 50
    }]
  };
  
  console.log("Headers Data: ", headers1);
  console.log("Payload Data: ", payload1);
  // res.send(headers1);

  const fetch_res1 = await fetch(searchUrl, { 
    "method": "POST",
    "headers": headers1,
    "body": JSON.stringify(payload1)
  });

  const json1 = await fetch_res1.json();
  // console.log("Venntel Data: ", res.json(json1));

  //let regids = json1.registrationIDs;

  // res.json({ "resJsonData": json(json1) });
  res.json(json1);
}));

/*/
 *  ┌──────────────────────────────┐
 *  │ |> Mock-Data Endpoints       │
 *  └──────────────────────────────┘
 *  Use mock data when Venntel API is not accessible (whitelisting)
/*/
app.get("/api/mock-token", asyncMiddleware(async (req, res, next) => {
  const url2 = "https://my-json-server.typicode.com/Quiet-Professionals-LLC/demo/tempSecurityToken";

  const fetch_res2 = await fetch(url2, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const json2 = await fetch_res2.json();
  res.json(json2);
}));

app.get("/api/mock-data", asyncMiddleware(async (req, res, next) => {
  const url3 = "https://my-json-server.typicode.com/Quiet-Professionals-LLC/demo/locationData";
  // let headers = {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json",
  //   "Authorization": apiKey,
  //   "TempSecurityToken": decrypted
  // };
  const fetch_res3 = await fetch(url3, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": apiKey,
      "TempSecurityToken": decrypted
    }
  });
  const json3 = await fetch_res3.json();
  res.json(json3);
}));

// Catch any bad requests
app.get('*', (req, res) => {
  res.status(200).json({
    msg: 'Catch All'
  });
});

/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Start Server & Listen to Port  │
 *  └───────────────────────────────────┘
/*/
app.listen(port, () => {
  console.log(`STABLE: CORS enabled express server... running on localhost:${port}`);
});
