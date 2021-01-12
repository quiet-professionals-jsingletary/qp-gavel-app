// Axios imports
import axios from "axios";

// Utility imports
require('dotenv').config();

/*/
  *  ┌─────────────────────────────────────┐
  *  │ |> Api Requests - Query Devices     │
  *  └─────────────────────────────────────┘
/*/

export function queryDevicesRequest(payload) {
  const queryUrl = process.env.REACT_APP_BASE_API_URL + "/api/location-data/search"

  return axios.request({
    "method": "post",
    "headers": {
      "TempSecurityToken": "0",
    },
    "url": queryUrl,
    "body": JSON.stringify(payload)
  });
}
