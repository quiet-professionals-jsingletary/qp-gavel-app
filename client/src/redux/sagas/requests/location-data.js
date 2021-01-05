// Axios imports
import axios from "axios";

require('dotenv').config();

export function locationDataSearchRequest(securityToken) {

  // const getMockData = "http://localhost:5000/api/mock-data"
  const securityTokenUrl = "https://staging-bs-api.venntel.com/v1.5/securityToken";

  // const { geoJsonData, resJsonData } = config;

  // const mockHeaders = new Headers({
  //   "Accept": "application/json",
  //   "Content-Type": "application/json"
  // });

  // TODO: Reference Custom `api/*` Methods
  // axios.get(getMockData, { "headers": mockHeaders })
  //   .then(response => {
  //     console.log('Axios Res: ', response);
  //     const resJsonData = response.data;
  //     setJsonData({ resJsonData });
  //     dispatch(updateConfig({ resJsonData }));
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  const searchHeaders = new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "995dba95-c33d-456b-a7ea-3fd512e60894",
    "TempSecurityToken": securityToken
  });

  // axios.get(securityTokenUrl, { "headers": getTokenHeaders })
  //   .then(response => {
  //     let { resJsonData } = config;
  //     console.log('Axios Res: ', response.data);
  //     // setState({ "geoJsonData": response.data });
  //     resJsonData = response.data;
  //     dispatch(updateConfig({ resJsonData }));
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  
  return axios.request({
    method: "post",
    headers: searchHeaders,
    url: process.env.REACT_APP_BASE_API_URL + "/api/location-data/search"
  })
}
