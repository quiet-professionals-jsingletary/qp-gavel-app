(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[208],{1452:function(e,r,t){"use strict";t.r(r);var a=t(2),i=t(3),n=t(5),o=t(6),c=t(0),s=(t(16),t(13),t(17),t(1)),l=t(8),u=(t(12),t(19),t(20),t(473)),p=t(7),b=t.n(p),y=t(10),f=t(15),O=t(62),j=t(377),v=t(106),d=t(1239),B=t(1291),m=t(4),g=t(41),h=t(28),P=t(44),k=t(43),A=t(118),S=t(108),R=t(68),q=(t(71),t(74)),w=t(1240);function J(e){return e.features.map((function(r){var t=P.a.fromJSON(e.spatialReference),a=q.a.fromJSON(r);return Object(m.q)(a.geometry).spatialReference=t,a}))}function N(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,Object(R.a)(r.geometry)}))}var C=function(e){Object(n.a)(t,e);var r=Object(o.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=r.call(this,e)).facilities=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.serviceAreaPolylines=null,i.serviceAreaPolygons=null,i}return Object(i.a)(t,[{key:"readFacilities",value:function(e){return N(e)}},{key:"readPointBarriers",value:function(e,r){return N(r.barriers)}},{key:"readPolylineBarriers",value:function(e){return N(e)}},{key:"readPolygonBarriers",value:function(e){return N(e)}},{key:"readIncidents",value:function(e,r){return J(r.saPolylines)}},{key:"readServiceAreaPolygons",value:function(e,r){return J(r.saPolygons)}}]),t}(h.a);Object(c.a)([Object(s.b)({type:[k.a]})],C.prototype,"facilities",void 0),Object(c.a)([Object(g.a)("facilities")],C.prototype,"readFacilities",null),Object(c.a)([Object(s.b)({type:[w.a]})],C.prototype,"messages",void 0),Object(c.a)([Object(s.b)({type:[k.a]})],C.prototype,"pointBarriers",void 0),Object(c.a)([Object(g.a)("pointBarriers",["barriers"])],C.prototype,"readPointBarriers",null),Object(c.a)([Object(s.b)({type:[S.a]})],C.prototype,"polylineBarriers",void 0),Object(c.a)([Object(g.a)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),Object(c.a)([Object(s.b)({type:[A.a]})],C.prototype,"polygonBarriers",void 0),Object(c.a)([Object(g.a)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),Object(c.a)([Object(s.b)({type:[q.a]})],C.prototype,"serviceAreaPolylines",void 0),Object(c.a)([Object(g.a)("serviceAreaPolylines",["saPolylines"])],C.prototype,"readIncidents",null),Object(c.a)([Object(s.b)({type:[q.a]})],C.prototype,"serviceAreaPolygons",void 0),Object(c.a)([Object(g.a)("serviceAreaPolygons",["saPolygons"])],C.prototype,"readServiceAreaPolygons",null);var F=C=Object(c.a)([Object(l.a)("esri.tasks.support.ServiceAreaSolveResult")],C),I=Object(d.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function x(){return(x=Object(f.a)(b.a.mark((function e(r,t,a){var i,n,o,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],o={},c={},s=Object(v.c)(r),e.abrupt("return",(t.facilities&&t.facilities.features&&Object(B.a)(t.facilities.features,n,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(B.a)(t.pointBarriers.features,n,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(B.a)(t.polylineBarriers.features,n,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(B.a)(t.polygonBarriers.features,n,"polygonBarriers.features",o),Object(j.a)(n).then((function(e){for(var r in o){var t=o[r];i.push(r),c[r]=e.slice(t[0],t[1])}return Object(B.e)(c,i)?Object(B.c)(s.path).catch((function(){return{dontCheck:!0}})):Promise.resolve({dontCheck:!0})})).then((function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||Object(B.b)(c,i);var r=function(e){c[e].forEach((function(r,a){t.get(e)[a].geometry=r}))};for(var n in c)r(n);var o={query:Object(y.a)(Object(y.a)({},s.query),{},{f:"json"},I.toQueryParams(t))};return a&&(o=Object(y.a)(Object(y.a)({},a),o)),Object(O.default)("".concat(s.path,"/solveServiceArea"),o)})).then((function(e){return F.fromJSON(e.data)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=t(1241),M=function(e){Object(n.a)(t,e);var r=Object(o.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=r.call(this,e)).url=null,i}return Object(i.a)(t,[{key:"solve",value:function(e,r){return function(e,r,t){return x.apply(this,arguments)}(this.url,e,r)}}]),t}(Object(E.a)(u.a));Object(c.a)([Object(s.b)()],M.prototype,"url",void 0);var Q=M=Object(c.a)([Object(l.a)("esri.tasks.ServiceAreaTask")],M);r.default=Q}}]);
//# sourceMappingURL=208.1066db76.chunk.js.map