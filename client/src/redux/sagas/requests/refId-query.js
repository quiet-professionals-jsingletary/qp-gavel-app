// Axios imports
import axios from "axios";

// Utility imports
require('dotenv').config();

/*/
  *  ┌─────────────────────────────────────┐
  *  │ |> Api Requests - RefId Query        │
  *  └─────────────────────────────────────┘
/*/

export function refIdQueryRequest(payload) {
  const queryUrl = process.env.REACT_APP_API_VERSION + "/location-data/devices"

  return axios.request({
    "method": "post",
    "headers": {
      "TempSecurityToken": "0",
    },
    "url": queryUrl,
    "body": JSON.stringify(payload)
  });
}


// // Axios imports
// import axios from "axios";

// // Utility imports
// require('dotenv').config();

// /*/
//   *  ┌─────────────────────────────────────┐
//   *  │ |> Api Requests - Area Query        │
//   *  └─────────────────────────────────────┘
// /*/

// export function areaQueryRequest(payload) {
//   const queryUrl = process.env.REACT_APP_API_VERSION + "/location-data/devices"

//   return axios.request({
//     "method": "post",
//     "headers": {
//       "TempSecurityToken": "0",
//     },
//     "url": queryUrl,
//     "body": JSON.stringify(payload)
//   });
// }