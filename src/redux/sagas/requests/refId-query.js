// Axios imports
import axios from "axios";

// Utility imports
require('dotenv').config();

/*/
  *  ┌─────────────────────────────────────┐
  *  │ |> Api Requests - RefId Query       │
  *  └─────────────────────────────────────┘
/*/

// !! File pending deletion - 'RefId Query' is now 'Pattern of Life' !!

export function refIdQueryRequest(payload) {
  const queryUrl = process.env.REACT_APP_API_VERSION + "/location-data/uuid"

  return axios.request({
    "method": "post",
    "headers": {
      "TempSecurityToken": "0",
    },
    "url": queryUrl,
    "body": JSON.stringify(payload)
  });
}
