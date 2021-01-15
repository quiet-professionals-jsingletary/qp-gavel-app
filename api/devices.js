const fetch = require('node-fetch');
const { asyncMiddleware } = require('./middleware/async-middleware');
const { decryptedToken } = require('./security-token');

require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

/*/  
 *  ┌────────────────────────────────────┐
 *  │ |> Api Endpoint - Query Devices    │
 *  └────────────────────────────────────┘
/*/
const devices = asyncMiddleware(async (req, res, next) => {

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
    "TempSecurityToken": decryptedToken
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
  // console.log("Payload Data: ", payload1);
  // res.send(headers1);

  const fetch_res1 = await fetch(searchUrl, {
    "method": "post",
    "headers": headers1,
    "body": JSON.stringify(payload1)
  });

  const json1 = await fetch_res1.json();
  console.log('Request Data: ', req);

  //let regids = json1.registrationIDs;
  // res.json({ "resJsonData": json(json1) });
  res.status(200).json(json1);

});

exports.devices = devices;