(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[23],{776:function(n,t,e){"use strict";e.d(t,"a",(function(){return Z})),e.d(t,"b",(function(){return O})),e.d(t,"c",(function(){return w})),e.d(t,"d",(function(){return g})),e.d(t,"e",(function(){return d})),e.d(t,"f",(function(){return X})),e.d(t,"g",(function(){return N})),e.d(t,"h",(function(){return E})),e.d(t,"i",(function(){return m})),e.d(t,"j",(function(){return y})),e.d(t,"k",(function(){return U})),e.d(t,"l",(function(){return en})),e.d(t,"m",(function(){return G})),e.d(t,"n",(function(){return $})),e.d(t,"o",(function(){return rn})),e.d(t,"p",(function(){return z})),e.d(t,"q",(function(){return A})),e.d(t,"r",(function(){return J})),e.d(t,"s",(function(){return M})),e.d(t,"t",(function(){return I})),e.d(t,"u",(function(){return nn})),e.d(t,"v",(function(){return tn})),e.d(t,"w",(function(){return F})),e.d(t,"x",(function(){return K})),e.d(t,"y",(function(){return k})),e.d(t,"z",(function(){return B})),e.d(t,"A",(function(){return v})),e.d(t,"B",(function(){return T})),e.d(t,"C",(function(){return x}));e(11);var r,c=e(8),u=e.n(c),a=e(22),i=(e(48),e(182)),o=(e(86),e(395));function f(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function s(n){return n?Array.isArray(n)?n.map(s):n.toJSON?n.toJSON():n:n}function l(n){return Array.isArray(n)?n.map((function(n){return Object(i.a)(n)})):Object(i.a)(n)}function b(n,t){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(r||(r=Object(o.a)("geometryEngineWorker",{strategy:"distributed"})),r));case 1:case"end":return n.stop()}}),n)})))();case 2:return n.abrupt("return",n.sent.invoke("executeGEOperation",{operation:t,parameters:s(e)}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(n,t){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("clip",[f(t),t,e]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("cut",[f(t),t,e]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return b("contains",[f(n),n,t])}function g(n,t){return b("crosses",[f(n),n,t])}function m(n,t,e){return b("distance",[f(n),n,t,e])}function y(n,t){return b("equals",[f(n),n,t])}function A(n,t){return b("intersects",[f(n),n,t])}function v(n,t){return b("touches",[f(n),n,t])}function x(n,t){return b("within",[f(n),n,t])}function E(n,t){return b("disjoint",[f(n),n,t])}function I(n,t){return b("overlaps",[f(n),n,t])}function F(n,t,e){return b("relate",[f(n),n,t,e])}function J(n){return b("isSimple",[f(n),n])}function k(n){return R.apply(this,arguments)}function R(){return(R=Object(a.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("simplify",[f(t),t]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(n,t){return S.apply(this,arguments)}function S(){return(S=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("difference",[f(t),t,e]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function B(n,t){return L.apply(this,arguments)}function L(){return(L=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("symmetricDifference",[f(t),t,e]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n,t){return q.apply(this,arguments)}function q(){return(q=Object(a.a)(u.a.mark((function n(t,e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("intersect",[f(t),t,e]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(n){return C.apply(this,arguments)}function C(){return(C=Object(a.a)(u.a.mark((function n(t){var e,r,c=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:null,r=function(n,t){var e;return Array.isArray(n)?e=n:((e=[]).push(n),null!=t&&e.push(t)),e}(t,e),n.t0=l,n.next=5,b("union",[f(r),r]);case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(n,t,e,r,c,u){return P.apply(this,arguments)}function P(){return(P=Object(a.a)(u.a.mark((function n(t,e,r,c,a,i){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("offset",[f(t),t,e,r,c,a,i]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n,t,e){return D.apply(this,arguments)}function D(){return(D=Object(a.a)(u.a.mark((function n(t,e,r){var c,a,i=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.length>3&&void 0!==i[3]&&i[3],a=[f(t),t,e,r,c],n.t0=l,n.next=5,b("buffer",a);case 5:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function G(n,t,e,r,c,u){return W.apply(this,arguments)}function W(){return(W=Object(a.a)(u.a.mark((function n(t,e,r,c,a,i){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=[f(t),t,e,r,c,a,i],n.t0=l,n.next=4,b("geodesicBuffer",o);case 4:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function H(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}function K(n,t,e){return Q.apply(this,arguments)}function Q(){return(Q=Object(a.a)(u.a.mark((function n(t,e,r){var c,a,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=t){n.next=2;break}throw new Error("Illegal Argument Exception");case 2:return a=t.spatialReference,r=null!=(c=r)?c:H(t),n.t0=t.constructor,n.next=7,b("rotate",[a,t,e,r]);case 7:return n.t1=n.sent,i=n.t0.fromJSON.call(n.t0,n.t1),n.abrupt("return",(i.spatialReference=a,i));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function U(n,t,e,r){return V.apply(this,arguments)}function V(){return(V=Object(a.a)(u.a.mark((function n(t,e,r,c){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("generalize",[f(t),t,e,r,c]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(n,t,e){return Y.apply(this,arguments)}function Y(){return(Y=Object(a.a)(u.a.mark((function n(t,e,r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,b("densify",[f(t),t,e,r]);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function $(n,t,e){return _.apply(this,arguments)}function _(){return(_=Object(a.a)(u.a.mark((function n(t,e,r){var c,a=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a.length>3&&void 0!==a[3]?a[3]:0,n.t0=l,n.next=4,b("geodesicDensify",[f(t),t,e,r,c]);case 4:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function nn(n,t){return b("planarArea",[f(n),n,t])}function tn(n,t){return b("planarLength",[f(n),n,t])}function en(n,t,e){return b("geodesicArea",[f(n),n,t,e])}function rn(n,t,e){return b("geodesicLength",[f(n),n,t,e])}},980:function(n,t,e){"use strict";e.r(t),e.d(t,"registerFunctions",(function(){return h}));var r=e(99),c=e(48),u=e(57),a=e(141),i=e(122),o=e(121),f=e(182),s=e(88),l=e(758),b=e(910),j=e(834),O=e(776);function p(n){return 0===s.d.indexOf("4.")?i.a.fromExtent(n):new i.a({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function d(n){if(Object(l.J)(n,2,2),n[0]instanceof r.a&&n[1]instanceof r.a);else if(n[0]instanceof r.a&&null===n[1]);else if(n[1]instanceof r.a&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function h(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null===e[0]||null===e[1]||Object(O.h)(e[0],e[1])}))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.q)(e[0],e[1])}))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.A)(e[0],e[1])}))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.d)(e[0],e[1])}))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.C)(e[0],e[1])}))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.c)(e[0],e[1])}))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null!==e[1]&&Object(O.t)(e[0],e[1])}))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return Object(l.J)(e,2,2),e[0]===e[1]||(e[0]instanceof r.a&&e[1]instanceof r.a?Object(O.j)(e[0],e[1]):!(!Object(l.z)(e[0])||!Object(l.z)(e[1]))&&e[0].getTime()===e[1].getTime())}))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,3,3),e[0]instanceof r.a&&e[1]instanceof r.a)return Object(O.w)(e[0],e[1],Object(l.y)(e[2]));if(e[0]instanceof r.a&&null===e[1])return!1;if(e[1]instanceof r.a&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null===e[0]||null===e[1]?null:Object(O.p)(e[0],e[1])}))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){var u=[];if(0===(c=Object(l.j)(c)).length)throw new Error("Function called with wrong number of Parameters");if(1===c.length)if(Object(l.B)(c[0])){for(var a=Object(l.j)(c[0]),i=0;i<a.length;i++)if(null!==a[i]){if(!(a[i]instanceof r.a))throw new Error("Illegal Argument");u.push(a[i])}}else{if(!Object(l.I)(c[0])){if(c[0]instanceof r.a)return Object(l.L)(Object(j.a)(c[0]),t.spatialReference);if(null===c[0])return null;throw new Error("Illegal Argument")}for(var o=Object(l.j)(c[0].toArray()),f=0;f<o.length;f++)if(null!==o[f]){if(!(o[f]instanceof r.a))throw new Error("Illegal Argument");u.push(o[f])}}else for(var s=0;s<c.length;s++)if(null!==c[s]){if(!(c[s]instanceof r.a))throw new Error("Illegal Argument");u.push(c[s])}return 0===u.length?null:Object(O.B)(u)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null!==e[0]&&null===e[1]?Object(j.a)(e[0]):null===e[0]?null:Object(O.g)(e[0],e[1])}))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return d(e=Object(l.j)(e)),null===e[0]&&null===e[1]?null:null===e[0]?Object(j.a)(e[1]):null===e[1]?Object(j.a)(e[0]):Object(O.z)(e[0],e[1])}))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,2),!(e[1]instanceof u.a)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");return null===e[1]?null:Object(O.b)(e[0],e[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,2),!(e[1]instanceof o.a)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return[];if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");return null===e[1]?[Object(j.a)(e[0])]:Object(O.e)(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){if(Object(l.J)(c,1,2),null===(c=Object(l.j)(c))[0])return 0;if(Object(l.T)(c[0]))return c[0].sumArea(Object(j.c)(Object(l.c)(c[1],-1)),!1,t.abortSignal).then((function(n){if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Object(l.B)(c[0])||Object(l.I)(c[0])){var u=Object(l.l)(c[0],t.spatialReference);return null===u?0:Object(O.u)(u,Object(j.c)(Object(l.c)(c[1],-1)))}if(!(c[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.u)(c[0],Object(j.c)(Object(l.c)(c[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){if(Object(l.J)(c,1,2),null===(c=Object(l.j)(c))[0])return 0;if(Object(l.T)(c[0]))return c[0].sumArea(Object(j.c)(Object(l.c)(c[1],-1)),!0,t.abortSignal).then((function(n){if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Object(l.B)(c[0])||Object(l.I)(c[0])){var u=Object(l.l)(c[0],t.spatialReference);return null===u?0:Object(O.l)(u,Object(j.c)(Object(l.c)(c[1],-1)))}if(!(c[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.l)(c[0],Object(j.c)(Object(l.c)(c[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){if(Object(l.J)(c,1,2),null===(c=Object(l.j)(c))[0])return 0;if(Object(l.T)(c[0]))return c[0].sumLength(Object(j.b)(Object(l.c)(c[1],-1)),!1,t.abortSignal).then((function(n){if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Object(l.B)(c[0])||Object(l.I)(c[0])){var u=Object(l.k)(c[0],t.spatialReference);return null===u?0:Object(O.v)(u,Object(j.b)(Object(l.c)(c[1],-1)))}if(!(c[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.v)(c[0],Object(j.b)(Object(l.c)(c[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){if(Object(l.J)(c,1,2),null===(c=Object(l.j)(c))[0])return 0;if(Object(l.T)(c[0]))return c[0].sumLength(Object(j.b)(Object(l.c)(c[1],-1)),!0,t.abortSignal).then((function(n){if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(Object(l.B)(c[0])||Object(l.I)(c[0])){var u=Object(l.k)(c[0],t.spatialReference);return null===u?0:Object(O.o)(u,Object(j.b)(Object(l.c)(c[1],-1)))}if(!(c[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.o)(c[0],Object(j.b)(Object(l.c)(c[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,c){c=Object(l.j)(c),Object(l.J)(c,2,3);var u=c[0];(Object(l.B)(c[0])||Object(l.I)(c[0]))&&(u=Object(l.o)(c[0],t.spatialReference));var a=c[1];if((Object(l.B)(c[1])||Object(l.I)(c[1]))&&(a=Object(l.o)(c[1],t.spatialReference)),!(u instanceof r.a))throw new Error("Illegal Argument");if(!(a instanceof r.a))throw new Error("Illegal Argument");return Object(O.i)(u,a,Object(j.b)(Object(l.c)(c[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){e=Object(l.j)(e),Object(l.J)(e,2,3);var r=e[0],u=e[1];if(!(r instanceof c.a))throw new Error("Illegal Argument");if(!(u instanceof c.a))throw new Error("Illegal Argument");var a=new o.a({paths:[],spatialReference:r.spatialReference});return a.addPath([r,u]),Object(O.o)(a,Object(j.b)(Object(l.c)(e[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,3),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");var c=Object(l.w)(e[1]);if(isNaN(c))throw new Error("Illegal Argument");if(c<=0)throw new Error("Illegal Argument");return e[0]instanceof i.a||e[0]instanceof o.a?Object(O.f)(e[0],c,Object(j.b)(Object(l.c)(e[2],-1))):e[0]instanceof u.a?Object(O.f)(p(e[0]),c,Object(j.b)(Object(l.c)(e[2],-1))):e[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,3),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");var c=Object(l.w)(e[1]);if(isNaN(c))throw new Error("Illegal Argument");if(c<=0)throw new Error("Illegal Argument");return e[0]instanceof i.a||e[0]instanceof o.a?Object(O.n)(e[0],c,Object(j.b)(Object(l.c)(e[2],-1))):e[0]instanceof u.a?Object(O.n)(p(e[0]),c,Object(j.b)(Object(l.c)(e[2],-1))):e[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,4),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");var c=Object(l.w)(e[1]);if(isNaN(c))throw new Error("Illegal Argument");return Object(O.k)(e[0],c,Object(l.x)(Object(l.c)(e[2],!0)),Object(j.b)(Object(l.c)(e[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,3),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");var c=Object(l.w)(e[1]);if(isNaN(c))throw new Error("Illegal Argument");return 0===c?Object(j.a)(e[0]):Object(O.a)(e[0],c,Object(j.b)(Object(l.c)(e[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,3),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");var c=Object(l.w)(e[1]);if(isNaN(c))throw new Error("Illegal Argument");return 0===c?Object(j.a)(e[0]):Object(O.m)(e[0],c,Object(j.b)(Object(l.c)(e[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,2,6),null===e[0])return null;if(!(e[0]instanceof i.a||e[0]instanceof o.a))throw new Error("Illegal Argument");var r=Object(l.w)(e[1]);if(isNaN(r))throw new Error("Illegal Argument");var c=Object(l.w)(Object(l.c)(e[4],10));if(isNaN(c))throw new Error("Illegal Argument");var u=Object(l.w)(Object(l.c)(e[5],0));if(isNaN(u))throw new Error("Illegal Argument");return Object(O.s)(e[0],r,Object(j.b)(Object(l.c)(e[2],-1)),Object(l.y)(Object(l.c)(e[3],"round")).toLowerCase(),c,u)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){e=Object(l.j)(e),Object(l.J)(e,2,3);var a=e[0];if(null===a)return null;if(!(a instanceof r.a))throw new Error("Illegal Argument");a instanceof u.a&&(a=i.a.fromExtent(a));var o=Object(l.w)(e[1]);if(isNaN(o))throw new Error("Illegal Argument");var f=Object(l.c)(e[2],null);if(null===f)return Object(O.x)(a,o);if(f instanceof c.a)return Object(O.x)(a,o,f);throw new Error("Illegal Argument")}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,f){if(f=Object(l.j)(f),Object(l.J)(f,1,1),null===f[0])return null;var s=f[0];if((Object(l.B)(f[0])||Object(l.I)(f[0]))&&(s=Object(l.o)(f[0],t.spatialReference)),null===s)return null;if(!(s instanceof r.a))throw new Error("Illegal Argument");return s instanceof c.a?Object(l.L)(Object(j.a)(f[0]),t.spatialReference):s instanceof i.a?s.centroid:s instanceof o.a?Object(b.f)(s):s instanceof a.a?Object(b.e)(s):s instanceof u.a?s.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,s){s=Object(l.j)(s),Object(l.J)(s,1,1);var b=[];if(null===s[0])return null;if(!(s[0]instanceof r.a))throw new Error("Illegal Argument");return s[0]instanceof c.a||s[0]instanceof u.a?[Object(l.L)(Object(j.a)(s[0]),t.spatialReference)]:Object(O.y)(s[0]).then((function(n){if(n instanceof i.a){for(var e=[],r=[],c=0;c<n.rings.length;c++)if(n.isClockwise(n.rings[c])){var u=Object(f.a)({rings:[n.rings[c]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});e.push(u)}else r.push({ring:n.rings[c],pt:n.getPoint(c,0)});for(var O=0;O<r.length;O++)for(var p=0;p<e.length;p++)if(e[p].contains(r[O].pt)){e[p].addRing(r[O].ring);break}return e}if(n instanceof o.a){for(var d=[],h=0;h<n.paths.length;h++){var w=Object(f.a)({paths:[n.paths[h]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});d.push(w)}return d}if(s[0]instanceof a.a){for(var g=Object(l.L)(Object(j.a)(s[0]),t.spatialReference),m=0;m<g.points.length;m++)b.push(g.getPoint(m));return b}return null}))}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,1,1),null===e[0])return!0;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.r)(e[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(l.j)(e),Object(l.J)(e,1,1),null===e[0])return null;if(!(e[0]instanceof r.a))throw new Error("Illegal Argument");return Object(O.y)(e[0])}))})}}}]);
//# sourceMappingURL=23.4399a1ea.chunk.js.map