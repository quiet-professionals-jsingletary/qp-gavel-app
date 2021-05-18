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

  console.log('Payload: ', action);

  // TODO: Apply payload prop values via destructuring
  const patternQueryPayload = {
    "startDate": action.payload.tempStartDate,
    "endDate": action.payload.tempEndDate,
    "registrationIDs": [{
      "registrationID": action.payload.regID
    }]
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
      "TempSecurityToken": action.payload.tempToken
    }

  });
  
}
