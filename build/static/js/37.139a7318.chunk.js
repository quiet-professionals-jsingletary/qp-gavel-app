(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[37],{1006:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(2),i={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,e){var r=new u(n.getPointX(t),n.getPointY(t),e),i=n.hasZ(t),a=n.hasM(t);return i&&(r.z=n.getPointZ(t)),a&&(r.m=n.getPointM(t)),r},exportPolygon:function(n,t,e){return new a(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,e){return new o(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,e){return new c(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,e){var r=n.hasZ(t),i=n.hasM(t),u=new f(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){var a=n.getZExtent(t);u.zmin=a.vmin,u.zmax=a.vmax}if(i){var o=n.getMExtent(t);u.mmin=o.vmin,u.mmax=o.vmax}return u}},u=function n(t,e,i){Object(r.a)(this,n),this.x=t,this.y=e,this.spatialReference=i,this.z=void 0,this.m=void 0},a=function n(t,e,i,u){Object(r.a)(this,n),this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),u&&(this.hasM=u)},o=function n(t,e,i,u){Object(r.a)(this,n),this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),u&&(this.hasM=u)},c=function n(t,e,i,u){Object(r.a)(this,n),this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),u&&(this.hasM=u)},f=function n(t,e,i,u,a){Object(r.a)(this,n),this.xmin=t,this.ymin=e,this.xmax=i,this.ymax=u,this.spatialReference=a,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}},1207:function(n,t,e){"use strict";e.r(t),e.d(t,"executeGEOperation",(function(){return u}));var r=e(38),i=e(975);function u(n){return i.r[n.operation].apply(void 0,Object(r.a)(n.parameters))}},975:function(n,t,e){"use strict";e.d(t,"a",(function(){return A})),e.d(t,"b",(function(){return I})),e.d(t,"c",(function(){return V})),e.d(t,"d",(function(){return q})),e.d(t,"e",(function(){return D})),e.d(t,"f",(function(){return G})),e.d(t,"g",(function(){return H})),e.d(t,"h",(function(){return S})),e.d(t,"i",(function(){return J})),e.d(t,"j",(function(){return L})),e.d(t,"k",(function(){return _})),e.d(t,"l",(function(){return o})),e.d(t,"m",(function(){return c})),e.d(t,"n",(function(){return a})),e.d(t,"o",(function(){return f})),e.d(t,"p",(function(){return u})),e.d(t,"q",(function(){return s})),e.d(t,"r",(function(){return k})),e.d(t,"s",(function(){return d})),e.d(t,"t",(function(){return h})),e.d(t,"u",(function(){return v})),e.d(t,"v",(function(){return x})),e.d(t,"w",(function(){return y})),e.d(t,"x",(function(){return w})),e.d(t,"y",(function(){return Z})),e.d(t,"z",(function(){return m})),e.d(t,"A",(function(){return b})),e.d(t,"B",(function(){return E})),e.d(t,"C",(function(){return g})),e.d(t,"D",(function(){return M})),e.d(t,"E",(function(){return l})),e.d(t,"F",(function(){return z})),e.d(t,"G",(function(){return j})),e.d(t,"H",(function(){return p})),e.d(t,"I",(function(){return P})),e.d(t,"J",(function(){return R})),e.d(t,"K",(function(){return O}));var r=e(98),i=e(1006);function u(n){return r.a.extendedSpatialReferenceInfo(n)}function a(n,t,e){return r.a.clip(i.a,n,t,e)}function o(n,t,e){return r.a.cut(i.a,n,t,e)}function c(n,t,e){return r.a.contains(i.a,n,t,e)}function f(n,t,e){return r.a.crosses(i.a,n,t,e)}function s(n,t,e,u){return r.a.distance(i.a,n,t,e,u)}function d(n,t,e){return r.a.equals(i.a,n,t,e)}function h(n,t,e){return r.a.intersects(i.a,n,t,e)}function l(n,t,e){return r.a.touches(i.a,n,t,e)}function p(n,t,e){return r.a.within(i.a,n,t,e)}function v(n,t,e){return r.a.disjoint(i.a,n,t,e)}function m(n,t,e){return r.a.overlaps(i.a,n,t,e)}function g(n,t,e,u){return r.a.relate(i.a,n,t,e,u)}function x(n,t){return r.a.isSimple(i.a,n,t)}function M(n,t){return r.a.simplify(i.a,n,t)}function y(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.a.convexHull(i.a,n,t,e)}function w(n,t,e){return r.a.difference(i.a,n,t,e)}function Z(n,t,e){return r.a.symmetricDifference(i.a,n,t,e)}function b(n,t,e){return r.a.intersect(i.a,n,t,e)}function z(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.a.union(i.a,n,t,e)}function E(n,t,e,u,a,o,c){return r.a.offset(i.a,n,t,e,u,a,o,c)}function j(n,t,e,u){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.a.buffer(i.a,n,t,e,u,a)}function P(n,t,e,u,a,o,c){return r.a.geodesicBuffer(i.a,n,t,e,u,a,o,c)}function R(n,t,e){var u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return r.a.nearestCoordinate(i.a,n,t,e,u)}function O(n,t,e){return r.a.nearestVertex(i.a,n,t,e)}function A(n,t,e,u,a){return r.a.nearestVertices(i.a,n,t,e,u,a)}function I(n,t,e,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");var u=r.a.rotate(t,e,i);return u.spatialReference=n,u}function V(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var i=r.a.flipHorizontal(t,e);return i.spatialReference=n,i}function q(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var i=r.a.flipVertical(t,e);return i.spatialReference=n,i}function D(n,t,e,u,a){return r.a.generalize(i.a,n,t,e,u,a)}function G(n,t,e,u){return r.a.densify(i.a,n,t,e,u)}function H(n,t,e,u){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r.a.geodesicDensify(i.a,n,t,e,u,a)}function S(n,t,e){return r.a.planarArea(i.a,n,t,e)}function J(n,t,e){return r.a.planarLength(i.a,n,t,e)}function L(n,t,e,u){return r.a.geodesicArea(i.a,n,t,e,u)}function _(n,t,e,u){return r.a.geodesicLength(i.a,n,t,e,u)}var k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:u,clip:a,cut:o,contains:c,crosses:f,distance:s,equals:d,intersects:h,touches:l,within:p,disjoint:v,overlaps:m,relate:g,isSimple:x,simplify:M,convexHull:y,difference:w,symmetricDifference:Z,intersect:b,union:z,offset:E,buffer:j,geodesicBuffer:P,nearestCoordinate:R,nearestVertex:O,nearestVertices:A,rotate:I,flipHorizontal:V,flipVertical:q,generalize:D,densify:G,geodesicDensify:H,planarArea:S,planarLength:J,geodesicArea:L,geodesicLength:_})}}]);
//# sourceMappingURL=37.139a7318.chunk.js.map