const fetch = require('node-fetch');
const { asyncMiddleware } = require('./middleware/async-middleware');
const { decryptedToken, securityToken } = require('./security-token');

require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

/*/  
 *  ┌────────────────────────────────────┐
 *  │ |> Api Endpoint - Location Data    │
 *  └────────────────────────────────────┘
 *  -- Rename this file to `location-data.js` when possible
/*/
const devices = asyncMiddleware(async (req, res, next) => {

  const searchUrl = "https://staging-bs-api.venntel.com/v1.5/locationData/search";
  // const searchUrl = "https://decryptvennteltemptoken.azurewebsites.us/api/FuncDecryptVenntelTT";

  console.dir('Token: ', decryptedToken);
  console.dir('Token: ', securityToken);
  console.dir('Request: ', req.body);

  let headers1 = {
    "Accept": req.get('Accept'),
    "Content-Type": req.get('Content-Type'),
    "Authorization": apiKey,
    "TempSecurityToken": req.get('TempSecurityToken'),
  };

  // const payload1 = {
  //   "startDate": req.params.startDate,
  //   "endDate": req.params.endDate,
  //   "areas": [{
  //     "longitude": req.params.areas.longitude,
  //     "latitude": req.params.areas.latitude,
  //     "radius": req.params.areas.radius
  //   }]
  // };

  console.group('Payload:>');
  console.dir("Headers: ", headers1);
  console.dir("Body: ", req.body);
  console.groupEnd();

  // res.send(headers1);

  const fetch_res1 = await fetch(searchUrl, {
    "method": "POST",
    "headers": headers1,
    "body": req.body
  });

  const json1 = await fetch_res1.json();
  console.dir('Request Data: ', req.body);

  //let regids = json1.registrationIDs;
  // res.json({ "resJsonData": json(json1) });
  res.status(200).json(json1);

});

exports.devices = devices;