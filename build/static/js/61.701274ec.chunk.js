(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[61],{1214:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return p}));var r=n(17),a=n(157),i=n(976),s=n(1030),c=n(1021),l=n(1102),u=n(1138);function o(e){return e instanceof a.a}function f(e,t,n,f,p){return p(e,t,(function(e,t,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=Object(i.j)(p))[0]&&null===p[1])return Object(r.s)(!1);if(Object(i.T)(p[0]))return p[1]instanceof a.a?Object(r.s)(new u.a({parentfeatureset:p[0],relation:n,relationGeom:p[1]})):null===p[1]?Object(r.s)(new l.a({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){var b=null;switch(n){case"esriSpatialRelEnvelopeIntersects":b=Object(c.q)(Object(s.d)(p[0]),Object(s.d)(p[1]));break;case"esriSpatialRelIntersects":b=Object(c.q)(p[0],p[1]);break;case"esriSpatialRelContains":b=Object(c.c)(p[0],p[1]);break;case"esriSpatialRelOverlaps":b=Object(c.t)(p[0],p[1]);break;case"esriSpatialRelWithin":b=Object(c.C)(p[0],p[1]);break;case"esriSpatialRelTouches":b=Object(c.A)(p[0],p[1]);break;case"esriSpatialRelCrosses":b=Object(c.d)(p[0],p[1])}return null!==b?b:Object(r.r)(new Error("Unrecognised Relationship"))}return Object(i.T)(p[1])?Object(r.s)(new u.a({parentfeatureset:p[1],relation:n,relationGeom:p[0]})):null===p[1]?Object(r.s)(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):Object(i.T)(p[1])?Object(r.s)(new l.a({parentfeatureset:p[1]})):p[1]instanceof a.a||null===p[1]?Object(r.s)(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return f(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return f(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return f(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return f(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return f(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return f(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return f(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(i.j)(n),Object(i.J)(n,3,3),o(n[0])&&o(n[1]))return Object(c.w)(n[0],n[1],Object(i.y)(n[2]));if(n[0]instanceof a.a&&null===n[1])return!1;if(n[1]instanceof a.a&&null===n[0])return!1;if(Object(i.T)(n[0])&&null===n[1])return new l.a({parentfeatureset:n[0]});if(Object(i.T)(n[1])&&null===n[0])return new l.a({parentfeatureset:n[1]});if(Object(i.T)(n[0])&&n[1]instanceof a.a)return n[0].relate(n[1],Object(i.y)(n[2]));if(Object(i.T)(n[1])&&n[0]instanceof a.a)return n[1].relate(n[0],Object(i.y)(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=61.701274ec.chunk.js.map