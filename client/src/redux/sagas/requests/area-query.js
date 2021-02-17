// Axios imports
import axios from "axios";

require('dotenv').config();

export function areaQueryRequest(action) {
  const searchUrl = process.env.REACT_APP_API_VERSION + "/location-data/area-query";
  
  const areaQueryPayload = {
    "startDate": action.payload.startDate,
    "endDate": action.payload.endDate,
    "areas": [{
      "longitude": action.payload.longitude,
      "latitude": action.payload.latitude,
      "radius": action.payload.radius
    }]
  }

  console.log('REQUEST PAYLOAD: ', areaQueryPayload);

  // [0] Token: 0
  // [0] Headers Data: {
  // [0]   'Content-Type': 'application/json',
  // [0]   Accept: 'application/json',
  // [0]   Authorization: '995dba95-c33d-456b-a7ea-3fd512e60894',
  // [0]   TempSecurityToken: '0'
  // [0]
  
  return axios.request({
    "method": "POST",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_KEY,
      "TempSecurityToken": action.payload.TempSecurityToken
    },
    "body": JSON.stringify(areaQueryPayload),
    "url": searchUrl
  });
}

// export function mockDataSearchRequest() {
//   const mockUrl = process.env.REACT_APP_API_VERSION + "/mock-data";

//   return axios.request({
//     "method": "GET",
//     "headers": {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     "url": mockUrl
//   });
// }
