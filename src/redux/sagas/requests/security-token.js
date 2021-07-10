/*/
 *  ┌─────────────────────────────────────┐
 *  │ |> Axios Request - Security Token   │
 *  └─────────────────────────────────────┘
/*/
// Axios
import axios from "axios";

require('dotenv').config();

//#region [http]
export function setSecurityTokenRequest() {
  return axios.request({
    method: "get",
    url:  process.env.REACT_APP_API_BASE_URL + 
          process.env.REACT_APP_API_VERSION + 
          "/securities/token"
  });
}
//#endregion
