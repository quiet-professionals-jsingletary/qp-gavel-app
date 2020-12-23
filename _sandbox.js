// useEffect(() => {
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': apiKey
//   };

//   // const theHeaders = {
//   //   'Content-Type': "application/json",
//   //   'Accept': "application/json",
//   //   'Authorization': apiKey,
//   //   'TempSecurityToken': '123'
//   // };

//   const getTokenUrl = "https://staging-bs-api.venntel.com/v1.5/securityToken";
//   const searchURL = "https://staging-bs-api.venntel.com/v1.5/locationData/search";

//   async function fetchData() {
//     //console.log(url);
//     const fetch_response = await fetch(getTokenUrl, { method: 'GET', headers: headers });
//     const json = await fetch_response.json();
//     const token = json.tempSecurityEncryptedToken;
//     console.log('token json: ', json);
//     console.log('tempSecurityEncryptedToken: ', token);

//     keyData.setOptions({ encryptionScheme: 'pkcs1' });

//     var decrypted = keyData.decrypt(token, 'utf8');
//     console.log('Decrypted Token: ', decrypted);

//     //var payload = request.query.data;
//     //console.log(JSON.stringify(payload));

//     // const searchURL = "https://staging-bs-api.venntel.com/v1.5/locationData/search";
//     const theHeaders = {
//       'Content-Type': "application/json",
//       'Accept': "application/json",
//       'Authorization': apiKey,
//       'TempSecurityToken': decrypted
//     };

//     var payload = {
//       'startDate': '2020-03-20T00:00:00Z',
//       'endDate': '2020-03-25T00:00:00Z',
//       'registrationIDs': [{
//         'registrationID': 'ff51aefb-ab54-3274-8d59-226f66203c66'
//       }]
//     };

//     var fetch_response1 = await fetch(searchURL, { method: 'POST', headers: theHeaders, body: JSON.stringify(payload) });
//     //console.log(fetch_response1);

//     const json1 = await fetch_response1.json();
//     console.log('Venntel Dataset: ', json1);
//     return json1;

//   }

//   fetch(getTokenUrl, { method: 'GET', headers: headers })
//     .then(response => response.json())
//     .then(json => {
//       console.log('token res: ', json);
//       return json;

//     });
//     //console.log("inside venntel integraion");
//     // let theQuery = JSON.parse(request.query.data);
//     //console.log(JSON.stringify(theQuery));
//     //console.log(request.query.data);
//     // const url = "https://staging-bs-api.venntel.com/v1.5/securityToken";



//     // console.log('URL: ', url);
//     // const fetch_response = await fetch(url, );

//     // const json = await fetch_response.json();
//     // const token = json.tempSecurityEncryptedToken;
//     // console.log('tempSecurityEncryptedToken: ', token);

//     // keyData.setOptions({ encryptionScheme:m'pkcs1' });

//     // const decrypted = keyData.decrypt(token, 'utf8');
//     // console.log('Decrypted Token: ', decrypted);

//     // //var payload = request.query.data;
//     // //console.log(JSON.stringify(payload));




//     // const fetch_response1 = await fetch(searchURL, { method: 'POST', headers: theHeaders, body: JSON.stringify(theQuery) });
//     // console.log('Response: ', fetch_response1);

//     // const json1 = await fetch_response1.json();
//     // console.log('Venntel Dataset: ', json1);
//     // return response.json(json1);
//   return fetchData();


// NOTE: Snippet from Jo's original demo code
// app.get('/recfuture/:theparams', async (request, response) => {
// console.log(request.params);
/* 
const latlon = request.params.latlon.split(',');
  console.log(latlon);
  const lat = latlon[0];
  const lon = latlon[1];
  console.log(lat, lon);
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();
  const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
  const aq_response = await fetch(aq_url);
  const aq_data = await aq_response.json();
  const data = {
  weather: weather_data,
  air_quality: aq_data
}; 
*/
//response.json(data);
//};

//--- CORS ----
// "start": "set HTTPS=true&&set SSL_CRT_FILE=./.cert/certificate.crt&& set SSL_KEY_FILE=./.cert/privateKey.key react-scripts start",
