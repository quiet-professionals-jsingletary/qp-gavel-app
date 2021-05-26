/*/
  *  ┌──────────────────────────────────────────────────┐
  *  │ |> API Request Configuration - Pattern of Life   │
  *  └──────────────────────────────────────────────────┘
/*/
// Axios
import axios from "axios";

require('dotenv').config();

export function patternQueryRequest(action) {
  const searchUrl = process.env.REACT_APP_API_BASE_URL +  
                    process.env.REACT_APP_API_VERSION + 
                    "/location-data/area-query";

  console.log('REQ Payload: ', action);

  // TODO: Apply payload prop values via destructuring
  const { startDate, endDate, registrationID, TempSecurityToken } = action.payload;

  // NOTE: The API is capable of accepting multiple regIDs. To keep it simple
  // -- The following `regIdArray` is designed to accept a single ID for now

  const patternQueryPayload = {
    "startDate": startDate,
    "endDate": endDate,
    "registrationIDs": [{ "registrationID": registrationID }]
  }

  console.log('REQ PAYLOAD (client-side): ', patternQueryPayload);

  return axios.request({
    "url": searchUrl,
    "method": "POST",
    "data": patternQueryPayload,
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": process.env.REACT_APP_API_KEY,
      "TempSecurityToken": TempSecurityToken.securityToken
    }

  });
  
}
