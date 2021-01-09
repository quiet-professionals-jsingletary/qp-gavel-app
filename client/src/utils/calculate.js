import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { geodesicDistance, geodesicUtils, pointFromDistance } from "@arcgis/core/geometry/support/geodesicUtils";
import { Point } from '@arcgis/core/geometry';

const Calculate = props => {

  const Calulate = {}

  /**-------------------------------------------------------------
   *  distance()
   *  ~~Compute geodetic distance and direction between two points
   *  @param locations :Array[{}] 
   *  @return distance :Number
  */
  Calculate.distance = (props) => {

    const locationArray = props.locations;
    const [locationA, locationB] = locationArray;

    const pointFrom = {
      latitude: locationA.latitude,
      longitude: locationA.longitude
    };

    const pointTo = {
      latitude: locationB.latitude,
      longitude: locationB.longitude
    };

    // Geodetic `distance` computation
    const join = geodesicDistance(
      new Point({ x: pointFrom.longitude, y: pointFrom.latitude }),
      new Point({ x: pointTo.longitude, y: pointTo.latitude }),
      "kilometers"
    );

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
  Calculate.radius = (props) => {

    const distance = Calculate.distance(props);
    const radius = distance * 2;

    console.log("Radius: ", radius);

    return radius;
  }

  return Calculate;
}

export default Calculate;