export const PointGraphicBuilder = (resJsonData, baseMap, mapView) => {
  // TODO: Determine Result Type
  let queryType = ''
  console.log('Queried Data: ', resJsonData);
  if (resJsonData.areas.length) {
    console.log('inside request');
    console.log(JSON.stringify(resJsonData));

    var countAreas = Object.keys(resJsonData.areas[0]).length;
    var counter = 0;
    // console.log(JSON.stringify('Data: ', resJsonData));

    for (var y = 0; y < countAreas; y++) {
      var countIDs = Object.keys(resJsonData.areas[0].registrationIDs).length;
      console.log('Signal Count: ', countIDs);

      for (var i = 0; i < countIDs; i++) {
        //console.log("i is : " + i)
        var countSignals = Object.keys(resJsonData.areas[0].registrationIDs[i].signals).length;
        var theID = { "registrationID": resJsonData.areas[0].registrationIDs[i].registrationID, "signalcount": countSignals };
        theSignalCounts.push(theID);

        for (var x = 0; x < countSignals; x++) {
          //console.log("x is : " + x)
          //console.log(JSON.stringify(resJsonData.areas[y].registrationIDs[i].signals[x].longitude));
          //console.log(JSON.stringify(resJsonData.areas[y].registrationIDs[i].signals[x].latitude));
          const point = {
            type: "point", // autocasts as new Point()
            longitude: resJsonData.areas[0].registrationIDs[i].signals[x].longitude,
            latitude: resJsonData.areas[0].registrationIDs[i].signals[x].latitude
          };

          // Create a symbol for drawing the point
          const markerSymbol = {
            type: "simple-marker", // new SimpleMarkerSymbol()
            color: pointFill,
            outline: {
              // new SimpleLineSymbol()
              color: [3, 17, 30],
              width: 1
            }
          };

          const pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
            attributes: {
              "OBJECTID": counter,
              "registrationID": resJsonData.areas[0].registrationIDs[i].signals[x].registrationID,
              "ipAddress": resJsonData.areas[0].registrationIDs[i].signals[x].ipAddress,
              "flags": resJsonData.areas[0].registrationIDs[i].signals[x].flags,
              "timestamp": resJsonData.areas[0].registrationIDs[i].signals[x].timestamp
            }
          });
          mapView.graphics.add(pointGraphic);
          // graphics.push(pointGraphic)
          counter++;
        }

      }

    }

  }

}