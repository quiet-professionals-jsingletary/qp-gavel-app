const fetch = require('node-fetch');
const { asyncMiddleware } = require('./middleware/async-middleware');
const { decryptedToken } = require('./security-token');

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

  console.log('Token: ', decryptedToken);
  console.log('Request: ', req);

  let headers1 = {
    "Accept": req.get('Accept'),
    "Content-Type": req.get('Content-Type'),
    "Authorization": req.get('Authorization'),
    "TempSecurityToken": req.get('TempSecurityToken'),
  };

  const payload1 = {
    "startDate": req.query.startDate,
    "endDate": req.query.endDate,
    "areas": [{
      "longitude": req.query.longitude,
      "latitude": req.query.latitude,
      "radius": req.query.radius
    }]
  };

  console.group('Payload:>');
  console.dir("Headers: ", headers1);
  console.log("Body: ", payload1);
  console.groupEnd();

  // res.send(headers1);

  const fetch_res1 = await fetch(searchUrl, {
    "method": "POST",
    "headers": headers1,
    "body": payload1
  });

  const json1 = await fetch_res1.json();
  console.log('Request Data: ', req);

  //let regids = json1.registrationIDs;
  // res.json({ "resJsonData": json(json1) });
  res.status(200).json(json1);

});

exports.devices = devices;