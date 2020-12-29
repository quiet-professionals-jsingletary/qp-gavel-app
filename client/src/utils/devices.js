import React from 'react';

const Devices = props => {

  //Query for devices based on point features on the map
  function queryDevices() {
    graphics = [];
    var ptLocationsLayer = webmapTest.layers.items[0];
    ptLocationsLayer.queryFeatures().then(function (results) {
      //console.log(results.features.length);
      lString = [];
      results.features.forEach(function (feat) {
        console.log(feat.attributes);
        var startDT = new Date(document.getElementById("startTime").value);
        var formatted_startdate = startDT.getFullYear() + "-" + appendLeadingZeroes(startDT.getMonth() + 1) + "-" + appendLeadingZeroes(startDT.getDate()) + "T" + appendLeadingZeroes(startDT.getHours()) + ":" + appendLeadingZeroes(startDT.getMinutes()) + ":" + appendLeadingZeroes(startDT.getSeconds()) + "Z";
        var endDT = new Date(document.getElementById("endTime").value);
        var formatted_enddate = endDT.getFullYear() + "-" + appendLeadingZeroes(endDT.getMonth() + 1) + "-" + appendLeadingZeroes(endDT.getDate()) + "T" + appendLeadingZeroes(endDT.getHours()) + ":" + appendLeadingZeroes(endDT.getMinutes()) + ":" + appendLeadingZeroes(endDT.getSeconds()) + "Z";
        //console.log(formatted_startdate);
        var theDict = { "longitude": feat.geometry.longitude, "latitude": feat.geometry.latitude, "radius": document.getElementById("inputDistance").value, "startDate": formatted_startdate, "endDate": formatted_enddate };
        lString.push(theDict);
      });
      var data = {
        'areas': lString
      };
      console.log(JSON.stringify(data));
      var theQuery = JSON.stringify(data);
      //var theURLParams = "venntel_integration?theparams=1";
      var theURLParams = "venntel_integration/search?data=" + theQuery;
      console.log(theURLParams);
      var theSignalCounts = []
      esriRequest(theURLParams, { responseType: "json" }).then(function (response) {
        console.log('inside request');
        var json = response.data;
        console.log(JSON.stringify(json));
        var countAreas = Object.keys(json.locationData.areas).length;
        var counter = 0;
        console.log(JSON.stringify(json));
        for (var y = 0; y < countAreas; y++) {
          var countIDs = Object.keys(json.locationData.areas[y].registrationIDs).length;
          for (var i = 0; i < countIDs; i++) {
            //console.log("i is : " + i)
            var countSignals = Object.keys(json.locationData.areas[y].registrationIDs[i].signals).length;
            var theID = { "registrationID": json.locationData.areas[y].registrationIDs[i].registrationID, "signalcount": countSignals };
            theSignalCounts.push(theID);
            for (var x = 0; x < countSignals; x++) {
              //console.log("x is : " + x)
              //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].longitude));
              //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].latitude));
              point = {
                type: "point", // autocasts as new Point()
                longitude: json.locationData.areas[y].registrationIDs[i].signals[x].longitude,
                latitude: json.locationData.areas[y].registrationIDs[i].signals[x].latitude
              };
              var pointGraphic = new Graphic({
                geometry: point,
                attributes: {
                  "OBJECTID": counter,
                  "registrationID": json.locationData.areas[y].registrationIDs[i].signals[x].registrationID,
                  "ipAddress": json.locationData.areas[y].registrationIDs[i].signals[x].ipAddress,
                  "flags": json.locationData.areas[y].registrationIDs[i].signals[x].flags,
                  "timestamp": json.locationData.areas[y].registrationIDs[i].signals[x].timestamp
                }
              });
              graphics.push(pointGraphic)
              counter++;
            }

          }
        }
        //console.log(theSignalCounts);
        resultsLayer = createLayer(graphics, "Results", 11);
        listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
        console.log(listOfIDs);
        webmapTest.add(resultsLayer);
      });
    });
  }

  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }

  function createAreasLayer() {
    return new FeatureLayer({
      title: "searchAreas",
      fields: [
        {
          name: "ObjectID",
          type: "oid"
        },
        {
          name: "distance",
          type: "integer"
        },
        {
          name: "startTime",
          type: "date"
        },
        {
          name: "endTime",
          type: "date"
        }
      ],
      objectIdField: "ObjectID",
      geometryType: "point",
      spatialReference: { wkid: 102100 },
      source: [], // adding an empty feature collection
      renderer: {
        type: "simple",
        symbol: {
          type: "web-style", // autocasts as new WebStyleSymbol()
          styleName: "Esri2DPointSymbolsStyle",
          name: "landmark"
        }
      },
      popupTemplate: {
        title: "{distance}, {startTime}, {endTime}"
      }
    });
  }
  // Creates a client-side FeatureLayer from an array of graphics
  function createLayer(graphics) {
    //console.log(graphics);
    return new FeatureLayer({
      source: graphics,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "oid"
        },
        {
          name: "registrationID",
          type: "string"
        },
        {
          name: "ipAddress",
          type: "string"
        },
        {
          name: "flags",
          type: "integer"
        },
        {
          name: "timestamp",
          type: "date"
        }
      ],
      popupTemplate: {
        // autocast as esri/PopupTemplate
        title: "{RegistrationID} at {timestamp}",
        content: "Flags are {flags} </br> ipAddress is {ipAddress}",
      },
      renderer: phoneRenderer
    });
  }

  return (
    <div>
      
    </div>
  );
};

export default Devices;