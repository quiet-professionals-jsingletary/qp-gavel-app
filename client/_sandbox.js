//--- Scripts ---|>
//   "scripts": {
//     "start": "set HTTPS=true&&set SSL_CRT_FILE=.cert/cert.pem&&set SSL_KEY_FILE=../.cert/key.pem&&react-scripts start",
//     "start:exjs": "node ./server.js",
//     "build": "react-scripts build",
//     "test": "react-scripts test --env=jsdom",
//     "eject": "react-scripts eject"
// }

//--- Web Hooks ---|>
// useEffect(() => {
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': apiKey
//   };

//--- API ---|>
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


// NOTE: Snippet from Jo's original demo code ---|>
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

// const queryDevices = (baseMap, view) => {

//   // const map = document.getElementById("mapViewContainer");

//   // let graphics = [];
//   // let ptLocationsLayer = new FeatureLayer();
//   ptLocationsLayer = baseMap.layers.items[0];
//   ptLocationsLayer.queryFeatures().then(function (results) {
//     //console.log(results.features.length);
//     let lString = [];
//     results.features.forEach(function (feat) {
//       console.log(feat.attributes);
//       var startDT = new Date(document.getElementById("startTime").value);
//       var formatted_startdate = startDT.getFullYear() + "-" + appendLeadingZeroes(startDT.getMonth() + 1) + "-" + appendLeadingZeroes(startDT.getDate()) + "T" + appendLeadingZeroes(startDT.getHours()) + ":" + appendLeadingZeroes(startDT.getMinutes()) + ":" + appendLeadingZeroes(startDT.getSeconds()) + "Z";
//       var endDT = new Date(document.getElementById("endTime").value);
//       var formatted_enddate = endDT.getFullYear() + "-" + appendLeadingZeroes(endDT.getMonth() + 1) + "-" + appendLeadingZeroes(endDT.getDate()) + "T" + appendLeadingZeroes(endDT.getHours()) + ":" + appendLeadingZeroes(endDT.getMinutes()) + ":" + appendLeadingZeroes(endDT.getSeconds()) + "Z";
//       //console.log(formatted_startdate);
//       var theDict = { "longitude": feat.geometry.longitude, "latitude": feat.geometry.latitude, "radius": document.getElementById("inputDistance").value, "startDate": formatted_startdate, "endDate": formatted_enddate };
//       lString.push(theDict);
//     });

//     var data = {
//       'areas': lString
//     };

//     var theQuery = JSON.stringify(data);
//     console.log('Query FeatureLayerBuilder: '.theQuery);
//     //var theURLParams = "venntel_integration?theparams=1";
//     var theURLParams = "http://localhost:5000/api/mock-data?data=" + theQuery;
//     var mockURLParams = "http://localhost:5000/api/mock-data";
//     console.log(theURLParams);

//     var theSignalCounts = [];

//     const requestHeaders = new Headers({
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       // "Authorization": "995dba95-c33d-456b-a7ea-3fd512e60894"
//     });

//     // TODO: Add Async / Await
//     esriRequest(mockURLParams, { header: requestHeaders, responseType: "json" }).then(function (response) {
//       console.log('inside request');
//       var json = response.data;
//       console.log(JSON.stringify(json));
//       var countAreas = Object.keys(json.locationData.areas).length;
//       var counter = 0;
//       console.log(JSON.stringify(json));
//       for (var y = 0; y < countAreas; y++) {
//         var countIDs = Object.keys(json.locationData.areas[y].registrationIDs).length;
//         for (var i = 0; i < countIDs; i++) {
//           //console.log("i is : " + i)
//           var countSignals = Object.keys(json.locationData.areas[y].registrationIDs[i].signals).length;
//           var theID = { "registrationID": json.locationData.areas[y].registrationIDs[i].registrationID, "signalcount": countSignals };
//           theSignalCounts.push(theID);
//           for (var x = 0; x < countSignals; x++) {
//             //console.log("x is : " + x)
//             //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].longitude));
//             //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].latitude));
//             const point = {
//               type: "point", // autocasts as new Point()
//               longitude: json.locationData.areas[y].registrationIDs[i].signals[x].longitude,
//               latitude: json.locationData.areas[y].registrationIDs[i].signals[x].latitude
//             };
//             const pointGraphic = new Graphic({
//               geometry: point,
//               attributes: {
//                 "OBJECTID": counter,
//                 "registrationID": json.locationData.areas[y].registrationIDs[i].signals[x].registrationID,
//                 "ipAddress": json.locationData.areas[y].registrationIDs[i].signals[x].ipAddress,
//                 "flags": json.locationData.areas[y].registrationIDs[i].signals[x].flags,
//                 "timestamp": json.locationData.areas[y].registrationIDs[i].signals[x].timestamp
//               }
//             });
//             graphics.push(pointGraphic)
//             counter++;
//           }

//         }
//       }
//       //console.log(theSignalCounts);
//       const resultsLayer = createLayer(graphics, "Results", 11);
//       const listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));

//       console.log(listOfIDs);

//       view.when(function () {
//         view.popup.autoOpenEnabled = true; //disable popups

//         // Create the Editor
//         var editor = new Editor({
//           view: view
//         });

//         view.ui.add(editor, "top-right");
//         view.ui.add("queryDiv", "top-right");
//         var layerList = new LayerList({
//           view: view,
//           listItemCreatedFunction: function (event) {
//             const item = event.item;
//             /* if (item.layer.type != "group") {
//               // don't show legend twice
//               item.panel = {
//                 content: "legend",
//                 open: true
//               };
//             } */
//           }
//         });
//         var llExpand = new Expand({
//           view: view,
//           content: layerList
//         });
//         // Add widget to the top right corner of the view
//         view.ui.add(llExpand, "bottom-left");
//         var legend = new Legend({
//           view: view,
//           layerInfos: [{
//             layer: patternsLayer,
//             title: "Legend"
//           }]
//         });

//         view.ui.add(legend, "bottom-right");
//       });
//       baseMap.layers.add(ptLocationsLayer);
//       baseMap.layers.add(resultsLayer);
//     });
//   });
// }

//--- CORS ---|>
// "start": "set HTTPS=true&&set SSL_CRT_FILE=./.cert/certificate.crt&& set SSL_KEY_FILE=./.cert/privateKey.key react-scripts start",


//--- Redux-Saga `actionChannel()` example ---|>
// import { take, actionChannel, call, ... } from 'redux-saga/effects'

// function* watchRequests() {
//   // 1- Create a channel for request actions
//   const requestChan = yield actionChannel('REQUEST')
//   while (true) {
//     // 2- take from the channel
//     const { payload } = yield take(requestChan)
//     // 3- Note that we're using a blocking call
//     yield call(handleRequest, payload)
//   }
// }

// function* handleRequest(payload) { ... }

//--- Context ---|>
// import React, { createContext, Component } from 'react';

// export const MapContext = createContext();

// class MapContextProvider extends Component {
//   state = {
//     isLoaded: false
//   }
//   render() {
//     return (
//       <MapContext.Provider value={{ ...this.state }}>
//         { this.props.children}
//       </MapContext.Provider>
//     );
//   }
// }

// export default MapContextProvider;
