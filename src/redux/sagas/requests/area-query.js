/*/
  *  ┌─────────────────────────────────────────────┐
  *  │ |> API Request Configuration - Area Query   │
  *  └─────────────────────────────────────────────┘
/*/
// Axios
import axios from "axios";

require('dotenv').config();

//#region [http]
export function areaQueryRequest(action) {
  const searchUrl = process.env.REACT_APP_API_BASE_URL + 
                    process.env.REACT_APP_API_VERSION + 
                    "/locations/area";
  
  // TODO: Apply payload prop values via destructuring (action.payload)
  const areaQueryPayload = {
    "startDate": action.payload.startDate,
    "endDate": action.payload.endDate,
    "areas": [{
      "longitude": action.payload.longitude,
      "latitude": action.payload.latitude,
      "radius": action.payload.radius
    }]
  }

  console.log('REQ PAYLOAD (client-side): ', areaQueryPayload);
  
  return axios.request({
    "url": searchUrl,
    "method": "POST",
    "data": areaQueryPayload,
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_KEY,
      "TempSecurityToken": action.payload.TempSecurityToken
    }

  });
  
}
//#endregion

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
