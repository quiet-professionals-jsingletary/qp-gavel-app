/*/
 *  ┌───────────────────────────────────┐
 *  │ |> Scalable Calculate Utility     │
 *  └───────────────────────────────────┘
/*/
// React
import React, { Component } from 'react';

// Esri
import { geodesicUtils, geodesicLengths } from "@arcgis/core/geometry/support/geodesicUtils";
import { Point, Polyline } from '@arcgis/core/geometry';
import { webMercatorToGeographic } from '@arcgis/core/geometry/support/webMercatorUtils';
// import { json } from 'body-parser';


const Calculate = props => {

  /**-------------------------------------------------------------
   *  distance()
   *  ~~Compute geodetic distance and direction between two points
   *  @param locations :Object{}
   *  @return distance :Number
  */
  // TODO: Component cleanup
  // NOTE: Leverage the `geodesicAreas()` method when / if the time comes

}

export const calcDistance = props => {

  console.log('Locations: ', props);

  const locations = props;
  const { locationA, locationB } = locations;

  // const pointFrom = new Point({ "x": locationA.x, "y": locationA.y });
  // const pointTo = new Point({ "x": locationB.x, "y": locationB.y })
  
  let polyline = new Polyline({
    "paths": [[
      [locationA.x, locationA.y],
      [locationB.x, locationB.y]
    ]]
  });
  console.log(JSON.stringify(polyline));
  polyline = new Polyline(polyline);
  console.log(JSON.stringify(polyline));
  polyline = webMercatorToGeographic(polyline);
  console.log(JSON.stringify(polyline));
  
  let polylineLength = geodesicLengths([polyline], "meters");

  // const polylineLength = geodesicLengths([polyline], "meters")
  //   .then((res) => {
  //     // response is a polygon geometry of a 1000ft buffer around the input point
  //     console.log('Polyline Length: ', res);
  //     return res;    
  //   });

  console.log('Polyline Length: ', polylineLength[0]);

  if (polylineLength >= 2500) polylineLength = 2500;
  //output 99.93917832865446
  //process.env.REACT_APP_DEFAULT_UNITS_OF_LENGTH

  // Geodetic `distance` computation
  // const join = geodesicLengths(latLongFrom, latLongTo, "meters");
  // console.log("Points: ", join);

  // Destructure `join` object to access distance 
  // const { distance, azimuth } = join;
  // console.log('Distance: ', distance, ', Direction: ', azimuth);

  return polylineLength[0];
}

/**-------------------------------------------------------------
 *  radius()
 *  ~~Compute geodetic radius from two points
 *  @param   locations :Array[{}]
 *  @extends Calculate.distance()
 *  @return  distance :Number
*/
export const calcRadius = props => {

  const distance = calcDistance(props);
  const radius = distance * 2;

  console.log('Radius: ', radius);

  return radius;
}

// export default Calculate;
// export { calcDistance, calcRadius }