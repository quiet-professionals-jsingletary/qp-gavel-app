// const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const NodeRSA = require('node-rsa');

export function venntelApi() {
  
  // ! SECOPS: Remove Private Keys from code and store them to Key Vault 
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

  // Init Express Server
  // const app = express();
  // const port = process.env.REACT_APP_PORT || 3000;
  const apiKey = process.env.REACT_APP_API_KEY;

  console.log('apiKey: ', apiKey);

  // app.listen(port, () => {
  //   console.log(`Server started... running on localhost:${port}`);
  // });

  // Static Directory
  // app.use(express.static('../../public'));

  fetch('/api/token', async (request, response) => {
    //console.log("inside venntel integraion");
    let theQuery = JSON.parse(request.query.data);
    //console.log(JSON.stringify(theQuery));
    //console.log(request.query.data);
    const url = "https://staging-bs-api.venntel.com/v1.5/securityToken";

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': apiKey
    };

    console.log('URL: ', url);
    const fetch_response = await fetch(url, { method: 'GET', headers: headers });

    const json = await fetch_response.json();
    const token = json.tempSecurityEncryptedToken;
    console.log('tempSecurityEncryptedToken: ', token);

    keyData.setOptions({ encryptionScheme: 'pkcs1' });

    const decrypted = keyData.decrypt(token, 'utf8');
    console.log('Decrypted Token: ', decrypted);

    //var payload = request.query.data;
    //console.log(JSON.stringify(payload));

    const searchURL = "https://staging-bs-api.venntel.com/v1.5/locationData/search";
    const theHeaders = {
      'Content-Type': "application/json",
      'Accept': "application/json",
      'Authorization': apiKey,
      'TempSecurityToken': decrypted
    };

    const fetch_response1 = await fetch(searchURL, { method: 'POST', headers: theHeaders, body: JSON.stringify(theQuery) });
    console.log('Response: ', fetch_response1);

    const json1 = await fetch_response1.json();
    console.log('Venntel Dataset: ', json1);
    return response.json(json1);
  });
}

// export default Venntel;
