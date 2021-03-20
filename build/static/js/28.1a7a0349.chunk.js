(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[28],{1019:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(32),n=r(2),s=r(3),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.a)(this,e),this._options=t}return Object(s.a)(e,[{key:"toQueryParams",value:function(e){var t=this;if(!e)return null;var r=e.toJSON(),n={};return Object.keys(r).forEach((function(e){var s=t._options[e];if(s){var o="boolean"!=typeof s&&s.name?s.name:e,i="boolean"!=typeof s&&s.getter?s.getter(r):r[e];null!=i&&(n[o]=function(e){if(!Array.isArray(e))return!1;var t=Object(a.a)(e,1)[0];return"number"==typeof t||"string"==typeof t}(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else n[e]=r[e]}),this),n}}]),e}();function i(e){return new o(e)}},1020:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(13),n=r(7),s=r.n(n),o=r(16),i=r(2),u=r(3),c=r(5),p=r(6),l=r(0),f=(r(15),r(101)),b=r(4),v=(r(14),r(18),r(1),r(8)),d=r(20),y=r(12),O=(r(21),r(22),r(65)),j=r(559),m=function(e){var t=function(e){Object(c.a)(r,e);var t=Object(p.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getServiceDescription",value:function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchServiceDescription",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,r,n,i,u,c,p,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.url&&this.parsedUrl){e.next=2;break}throw new d.a("network-service:missing-url","Url to Network service is missing");case 2:return t=this.url,e.next=5,Object(O.default)(t,{query:{f:"json"}});case 5:for(r=e.sent,(n=r.data).supportedTravelModes||(n.supportedTravelModes=[]),i=0;i<n.supportedTravelModes.length;i++)n.supportedTravelModes[i].id||(n.supportedTravelModes[i].id=n.supportedTravelModes[i].itemId);return u=n.currentVersion>=10.4?function(){var e=Object(o.a)(s.a.mark((function e(t){var r,a,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.default)(t+("/"===t[t.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});case 3:return r=e.sent,a=r.data,n=a.supportedTravelModes,o=a.defaultTravelMode,e.abrupt("return",{supportedTravelModes:n,defaultTravelMode:o});case 10:throw e.prev=10,e.t0=e.catch(0),new d.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()(t):function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,o,i,u,c,p,l,b,v,d,j,m,h,g,T,k,w;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.default)(t.substring(0,t.indexOf("/rest/")+6)+"info",{query:{f:"json"}});case 2:if(r=e.sent,(n=r.data)&&n.owningSystemUrl){e.next=6;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 6:return t=n.owningSystemUrl,e.next=9,Object(O.default)(t+("/"===t[t.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}});case 9:if(o=e.sent,i=o.data,u=Object(f.b)("helperServices.routingUtilities.url",i)){e.next=14;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 14:return c=Object(y.I)(t),p=/\/solveClosestFacility$/.test(c.path)?"Route":/\/solveClosestFacility$/.test(c.path)?"ClosestFacility":"ServiceAreas",e.next=18,Object(O.default)(u+("/"===u[u.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:p}});case 18:if(l=e.sent,b=[],v=null,l&&l.data&&l.data.results&&l.data.results.length){d=l.data.results,j=Object(a.a)(d);try{for(j.s();!(m=j.n()).done;)if("supportedTravelModes"===(h=m.value).paramName){if(h.value&&h.value.features){g=Object(a.a)(h.value.features);try{for(g.s();!(T=g.n()).done;)(k=T.value.attributes)&&(w=JSON.parse(k.TravelMode),b.push(w))}catch(s){g.e(s)}finally{g.f()}}}else"defaultTravelMode"===h.paramName&&(v=h.value)}catch(s){j.e(s)}finally{j.f()}}return e.abrupt("return",{supportedTravelModes:b,defaultTravelMode:v});case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(t),e.next=12,u;case 12:return c=e.sent,p=c.defaultTravelMode,l=c.supportedTravelModes,e.abrupt("return",(n.defaultTravelMode=p,n.supportedTravelModes=l,n));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_isInputGeometryZAware",value:function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length){var s,o=Object(a.a)(n);try{for(o.s();!(s=o.n()).done;){var i=s.value;if(Object(b.h)(i)&&i.hasZ)return!0}}catch(u){o.e(u)}finally{o.f()}}}return!1}},{key:"_dropZValuesOffInputGeometry",value:function(e,t){for(var r=0;r<t.length;r++){var n=e[t[r]];if(n&&n.length){var s,o=Object(a.a)(n);try{for(o.s();!(s=o.n()).done;){s.value.z=void 0}}catch(i){o.e(i)}finally{o.f()}}}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}}]),r}(e);return t=Object(l.a)([Object(v.a)("esri.tasks.mixins.NAServiceDescription")],t),t},h=function(e){Object(c.a)(r,e);var t=Object(p.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return r}(m(j.a));h=Object(l.a)([Object(v.a)("esri.tasks.mixins.NAServiceDescription")],h)},1021:function(e,t,r){"use strict";var a=r(2),n=r(5),s=r(6),o=r(0),i=(r(15),r(14),r(18),r(1)),u=r(50),c=r(8),p=(r(12),r(21),r(22),r(993)),l=new u.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"}),f=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type=null,n}return r}(p.a);Object(o.a)([Object(i.b)({type:String,json:{read:l.read,write:l.write}})],f.prototype,"type",void 0);var b=f=Object(o.a)([Object(c.a)("esri.tasks.support.NAMessage")],f);t.a=b},1083:function(e,t,r){"use strict";var a=r(2),n=r(3),s=r(5),o=r(6),i=r(0),u=(r(15),r(4)),c=(r(14),r(18),r(1)),p=r(34),l=r(8),f=(r(12),r(21),r(22),r(48)),b=r(56),v=r(74),d=r(127),y=(r(99),r(80)),O=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).extent=null,n.features=null,n.geometryType="polyline",n.routeId=null,n.routeName=null,n.totalDriveTime=null,n.totalLength=null,n.totalTime=null,n}return Object(n.a)(r,[{key:"readFeatures",value:function(e,t){var r=this;(e||[]).forEach((function(e){r._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));var a=f.a.fromJSON(t.spatialReference);return e.map((function(e){var t=y.a.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(Object(u.n)(t.geometry).spatialReference=a),t.strings=e.strings,t.events=(e.events||[]).map((function(t){var r=new y.a({geometry:new b.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}},{key:"mergedGeometry",get:function(){if(!this.features)return null;var e=this.features.map((function(e){var t=e.geometry;return Object(u.n)(t)})),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}},{key:"strings",get:function(){return this.features.map((function(e){return e.strings}))}},{key:"_decompressFeatureGeometry",value:function(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}},{key:"_decompressGeometry",value:function(e,t){var r,a,n,s,o,i,u,c,p=0,l=0,f=0,b=0,v=[],d=0,y=0,O=0;if((o=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(o=[]),0===parseInt(o[d],32)){d=2;var j=parseInt(o[d],32);d++,i=parseInt(o[d],32),d++,1&j&&(y=o.indexOf("|")+1,u=parseInt(o[y],32),y++),2&j&&(O=o.indexOf("|",y)+1,c=parseInt(o[O],32),O++)}else i=parseInt(o[d],32),d++;for(;d<o.length&&"|"!==o[d];){r=parseInt(o[d],32)+p,d++,p=r,a=parseInt(o[d],32)+l,d++,l=a;var m=[r/i,a/i];y&&(s=parseInt(o[y],32)+f,y++,f=s,m.push(s/u)),O&&(n=parseInt(o[O],32)+b,O++,b=n,m.push(n/c)),v.push(m)}return{paths:[v],hasZ:y>0,hasM:O>0,spatialReference:t}}},{key:"_mergePolylinesToSinglePath",value:function(e,t){var r=[];(e||[]).forEach((function(e){e.paths.forEach((function(e){r=r.concat(e)}))}));var a=[],n=[0,0];return r.forEach((function(e){e[0]===n[0]&&e[1]===n[1]||(a.push(e),n=e)})),new d.a({paths:[a]},t)}}]),r}(r(287).default);Object(i.a)([Object(c.b)({type:v.a,json:{read:{source:"summary.envelope"}}})],O.prototype,"extent",void 0),Object(i.a)([Object(c.b)()],O.prototype,"features",void 0),Object(i.a)([Object(p.a)("features")],O.prototype,"readFeatures",null),Object(i.a)([Object(c.b)()],O.prototype,"geometryType",void 0),Object(i.a)([Object(c.b)({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],O.prototype,"mergedGeometry",null),Object(i.a)([Object(c.b)()],O.prototype,"routeId",void 0),Object(i.a)([Object(c.b)()],O.prototype,"routeName",void 0),Object(i.a)([Object(c.b)({value:null,readOnly:!0,dependsOn:["features"]})],O.prototype,"strings",null),Object(i.a)([Object(c.b)({json:{read:{source:"summary.totalDriveTime"}}})],O.prototype,"totalDriveTime",void 0),Object(i.a)([Object(c.b)({json:{read:{source:"summary.totalLength"}}})],O.prototype,"totalLength",void 0),Object(i.a)([Object(c.b)({json:{read:{source:"summary.totalTime"}}})],O.prototype,"totalTime",void 0);var j=O=Object(i.a)([Object(l.a)("esri.tasks.support.DirectionsFeatureSet")],O);t.a=j},1237:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r(2),s=r(3),o=r(5),i=r(6),u=r(0),c=(r(15),r(14),r(18),r(1)),p=r(8),l=(r(12),r(21),r(22),r(17)),f=r(65),b=r(427),v=r(559),d=r(1019),y=r(1020),O=r(34),j=r(27),m=r(80),h=r(287),g=r(1021),T=r(1083),k=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).directions=null,a.route=null,a.routeName=null,a.stops=null,a}return r}(j.a);Object(u.a)([Object(c.b)({type:T.a,json:{write:!0}})],k.prototype,"directions",void 0),Object(u.a)([Object(c.b)({type:m.a,json:{write:!0}})],k.prototype,"route",void 0),Object(u.a)([Object(c.b)({type:String,json:{write:!0}})],k.prototype,"routeName",void 0),Object(u.a)([Object(c.b)({type:[m.a],json:{write:!0}})],k.prototype,"stops",void 0);var w=k=Object(u.a)([Object(p.a)("esri.tasks.support.RouteResult")],k);function M(e){return e&&h.default.fromJSON(e).features.map((function(e){return e}))}var B=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).barriers=null,a.messages=null,a.pointBarriers=null,a.polylineBarriers=null,a.polygonBarriers=null,a.routeResults=null,a}return Object(s.a)(r,[{key:"readPointBarriers",value:function(e,t){return M(t.barriers||t.pointBarriers)}},{key:"readPolylineBarriers",value:function(e){return M(e)}},{key:"readPolygonBarriers",value:function(e){return M(e)}}]),r}(j.a);Object(u.a)([Object(c.b)({aliasOf:"pointBarriers"})],B.prototype,"barriers",void 0),Object(u.a)([Object(c.b)({type:[g.a]})],B.prototype,"messages",void 0),Object(u.a)([Object(c.b)({type:[m.a]})],B.prototype,"pointBarriers",void 0),Object(u.a)([Object(O.a)("pointBarriers",["barriers","pointBarriers"])],B.prototype,"readPointBarriers",null),Object(u.a)([Object(c.b)({type:[m.a]})],B.prototype,"polylineBarriers",void 0),Object(u.a)([Object(O.a)("polylineBarriers")],B.prototype,"readPolylineBarriers",null),Object(u.a)([Object(c.b)({type:[m.a]})],B.prototype,"polygonBarriers",void 0),Object(u.a)([Object(O.a)("polygonBarriers")],B.prototype,"readPolygonBarriers",null),Object(u.a)([Object(c.b)({type:[w]})],B.prototype,"routeResults",void 0);var R=B=Object(u.a)([Object(p.a)("esri.tasks.support.RouteResultsContainer")],B),S=Object(d.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0}),N=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(s.a)(r,[{key:"solve",value:function(e,t){var r=this,n=[],s=[],o={},i={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,s,"stops.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),Object(b.a)(s).then((function(e){for(var t in o){var a=o[t];n.push(t),i[t]=e.slice(a[0],a[1])}return r._isInputGeometryZAware(i,n)?r.getServiceDescription():Object(l.s)({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||r._dropZValuesOffInputGeometry(i,n);var o=function(t){i[t].forEach((function(r,a){e.get(t)[a].geometry=r}))};for(var u in i)o(u);var c={query:Object(a.a)(Object(a.a)({},r.parsedUrl.query),{},{f:"json"},S.toQueryParams(e))};(r.requestOptions||t)&&(c=Object(a.a)(Object(a.a)(Object(a.a)({},r.requestOptions),t),c));var p=r.parsedUrl.path,l="/solve",b=p.endsWith(l)?p:p+l;return Object(f.default)(b,c)})).then((function(e){return r._handleSolveResponse(e)}))}},{key:"_collectGeometries",value:function(e,t,r,a){a[r]=[t.length,t.length+e.length],e.forEach((function(e){t.push(e.geometry)}))}},{key:"_handleSolveResponse",value:function(e){var t,r,a=[],n=[],s=e.data,o=s.directions,i=void 0===o?[]:o,u=s.routes,c=(u=void 0===u?{}:u).features,p=void 0===c?[]:c,l=u.spatialReference,f=void 0===l?null:l,b=s.stops,v=(b=void 0===b?{}:b).features,d=void 0===v?[]:v,y=b.spatialReference,O=void 0===y?null:y,j=s.barriers,m=s.polygonBarriers,h=s.polylineBarriers,g=s.messages,T="esri.tasks.RouteTask.NULL_ROUTE_NAME",k=!0,w=p&&f||d&&O||j&&j.spatialReference||m&&m.spatialReference||h&&h.spatialReference;i.forEach((function(e){a.push(t=e.routeName),n[t]={directions:e}})),p.forEach((function(e){-1===a.indexOf(t=e.attributes.Name)&&(a.push(t),n[t]={}),e.geometry&&(e.geometry.spatialReference=w),n[t].route=e})),d.forEach((function(e){r=e.attributes,-1===a.indexOf(t=r.RouteName||T)&&(a.push(t),n[t]={}),t!==T&&(k=!1),e.geometry&&(e.geometry.spatialReference=w),null==n[t].stops&&(n[t].stops=[]),n[t].stops.push(e)})),d.length>0&&!0===k&&(n[a[0]].stops=n[T].stops,delete n[T],a.splice(a.indexOf(T),1));var M=a.map((function(e){return n[e].routeName=e===T?null:e,n[e]}));return R.fromJSON({routeResults:M,pointBarriers:j,polygonBarriers:m,polylineBarriers:h,messages:g})}}]),r}(Object(y.a)(v.a)),x=N=Object(u.a)([Object(p.a)("esri.tasks.RouteTask")],N);t.default=x},993:function(e,t,r){"use strict";var a=r(2),n=r(5),s=r(6),o=r(0),i=(r(15),r(14),r(18),r(1)),u=r(50),c=r(8),p=(r(12),r(21),r(22),r(27)),l=new u.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"}),f=function(e){Object(n.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).description=null,n.type=null,n}return r}(p.a);Object(o.a)([Object(i.b)({type:String,json:{write:!0}})],f.prototype,"description",void 0),Object(o.a)([Object(i.b)({type:String,json:{read:l.read,write:l.write}})],f.prototype,"type",void 0);var b=f=Object(o.a)([Object(c.a)("esri.tasks.support.GPMessage")],f);t.a=b}}]);
//# sourceMappingURL=28.1a7a0349.chunk.js.map