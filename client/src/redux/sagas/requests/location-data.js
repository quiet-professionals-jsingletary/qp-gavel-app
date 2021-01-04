//Axios imports
import axios from "axios";

require('dotenv').config();

export function locationDataSearchRequest() {
  return axios.request({
    method: "post",
    url: process.env.REACT_APP_BASE_API_URL + "/api/location-data/search"
  })
}
