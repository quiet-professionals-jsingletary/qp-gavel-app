const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const NodeRSA = require('node-rsa');

require('dotenv').config();

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

const app = express();
const apiKey = process.env.REACT_APP_API_KEY;
const port = process.env.REACT_APP_PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: "200"
}

app.use(cors(corsOptions));

// NOTE: Use mock data when Venntel API is not accessible (whitelisting)
app.get('/api/mock-data', async (req, res) => {
  const url = 'https://my-json-server.typicode.com/Quiet-Professionals-LLC/demo/locationData';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const fetch_res = await fetch(url, { method: 'GET', headers: headers }).catch(handleErrors);
  const json = await fetch_res.json();

  return res.json(json);
});

app.get('/api/security-token', async (req, res) => {
  // const url = 'https://staging-bs-api.venntel.com/v1.5/securityToken';
  const mockUrl = 'https://my-json-server.typicode.com/Quiet-Professionals-LLC/demo/securityToken';

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': apiKey
  };

  const fetch_res = await fetch(mockUrl, { method: 'GET', headers: headers }).catch(handleErrors);
  const json = await fetch_res.json();

  // Decrypt Key - Mock Data
  return res.json(json);

  // Decrypt Key - Mock Data
  // const token = json.tempSecurityEncryptedToken;

  // keyData.setOptions({ encryptionScheme: 'pkcs1' });

  // var decrypted = keyData.decrypt(token, 'utf8');

  // return decrypted;

});

app.get('/api/security-token/decrypt', async (req, res) => {
  // const url = 'https://staging-bs-api.venntel.com/v1.5/securityToken';
  const mockUrl = 'https://my-json-server.typicode.com/Quiet-Professionals-LLC/demo/securityToken';

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': apiKey
  };

  const fetch_res = await fetch(mockUrl, { method: 'GET', headers: headers }).catch(handleErrors);
  const json = await fetch_res.json();

  // Decrypt Key
  return res.json(json);

  // res.send(mockToken);

  // //console.log(url);
  // const fetch_res = await fetch(url, { method: 'GET', headers: headers }).catch(handleErrors);
  // const json = await fetch_res.json();
  // const token = json.tempSecurityEncryptedToken;

  // keyData.setOptions({ encryptionScheme: 'pkcs1' });

  // //const encrypted = key.encrypt(keyData, 'base64');
  // //console.log(encrypted);

  // var decrypted = keyData.decrypt(token, 'utf8');

  // return decrypted;
});

app.get('/api/location-data/search', async (req, res) => {

  // Use mock-data for radius poly search
  // var payload = {
  //   'startDate': '2020-03-20T00:00:00Z',
  //   'endDate': '2020-03-25T00:00:00Z',
  //   'registrationIDs': [{
  //     'registrationID': 'ff51aefb-ab54-3274-8d59-226f66203c66'
  //   }]
  // };

  var payload = {
    "startDate": "2020-08-13T00:00:00Z",
    "endDate": "2020-08-13T23:59:59Z",
    "areas": [{
      "longitude": -82.568518,
      "latitude": 27.964489,
      "radius": 50
    }]
  };

  const searchURL = "https://staging-bs-api.venntel.com/v1.5/locationData/search";
  const theHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "995dba95-c33d-456b-a7ea-3fd512e60894",
    "TempSecurityToken": decrypted
  };
  var fetch_res1 = await fetch(searchURL, { method: 'POST', headers: theHeaders, body: JSON.stringify(payload) }).catch(handleErrors);

  const json1 = await fetch_res1.json();

  //var regids = json1.registrationIDs;

  return res.json(json1);

});

app.listen(port, () => {
  console.log(`Server started... running on localhost:${port}`);
});

// Error Handler
function handleErrors(err) {
  console.warn(err);

  return new Response(JSON.stringify({
    code: err.code,
    message: err.statusText
  }));
}
