import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { geodesicDistance, geodesicUtils, pointFromDistance } from "@arcgis/core/geometry/support/geodesicUtils";
import { Point } from '@arcgis/core/geometry';

const Calculate = props => {

  /**-------------------------------------------------------------
   *  distance()
   *  ~~Compute geodetic distance and direction between two points
   *  @param locations :Object{}
   *  @return distance :Number
  */

}

const calcDistance = (props) => {

  console.log('Locations: ', props);

  const locations = props;
  const { locationA, locationB } = locations;

  const pointFrom = {
    "latitude": locationA.latitude,
    "longitude": locationA.longitude
  };

  const pointTo = {
    "latitude": locationB.latitude,
    "longitude": locationB.longitude
  };

  // Geodetic `distance` computation
  const join = geodesicDistance(
    new Point({ longitude: pointFrom.longitude, latitude: pointFrom.latitude }),
    new Point({ longitude: pointTo.longitude, latitude: pointTo.latitude }),
    "kilometers"
  );
  console.log("Points: ", join);

  const { distance, azimuth } = join;
  console.log("Distance: ", distance, ", Direction: ", azimuth);

  return distance;
}

/**-------------------------------------------------------------
 *  radius()
 *  ~~Compute geodetic radius from two points
 *  @param   locations :Array[{}]
 *  @extends Calculate.distance()
 *  @return  distance :Number
*/
const calcRadius = (props) => {

  const distance = calcDistance(props);
  const radius = distance * 2;

  console.log("Radius: ", radius);

  return radius;
}

export default Calculate;
export { calcDistance, calcRadius }