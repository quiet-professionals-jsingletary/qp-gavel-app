(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[5],{1057:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return f})),r.d(t,"contentToBlob",(function(){return w})),r.d(t,"fetchResources",(function(){return l})),r.d(t,"getSiblingOfSameType",(function(){return y})),r.d(t,"getSiblingOfSameTypeI",(function(){return I})),r.d(t,"removeAllResources",(function(){return v})),r.d(t,"removeResource",(function(){return b})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return j}));var n=r(8),a=r.n(n),s=r(32),u=r(23),c=r(10),o=r(24),i=r(9),p=r(59);function l(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(t){var r,n,s,u,o,p,l,d,f,h,b,m,v=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.length>1&&void 0!==v[1]?v[1]:{},n=v.length>2?v[2]:void 0,e.next=4,t.load(n);case 4:return s=Object(i.x)(t.itemUrl,"resources"),u=r.start,o=void 0===u?1:u,p=r.num,l=void 0===p?10:p,d=r.sortOrder,f=void 0===d?"asc":d,h=r.sortField,b={query:{start:o,num:l,sortOrder:f,sortField:void 0===h?"created":h},signal:Object(c.e)(n,"signal")},e.next=16,t.portal._request(s,b);case 16:return m=e.sent,e.abrupt("return",{total:m.total,nextStart:m.nextStart,resources:m.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,r,n){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(a.a.mark((function e(t,r,n,u){var p,l,d,f,h,b,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new o.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return e.next=4,t.portalItem.load(u);case 4:return p=Object(i.x)(t.portalItem.userItemUrl,"add"===r?"addResources":"updateResources"),l=x(t.path),d=Object(s.a)(l,2),f=d[0],h=d[1],e.next=11,w(n);case 11:return b=e.sent,m=new FormData,f&&"."!==f&&m.append("resourcesPrefix",f),m.append("fileName",h),m.append("file",b,h),m.append("f","json"),Object(c.g)(u)&&u.access&&m.append("access",u.access),e.next=20,t.portalItem.portal._request(p,{method:"post",body:m,signal:Object(c.e)(u,"signal")});case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,r){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new o.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return s=Object(i.x)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(s,{method:"post",query:{resource:r.path},signal:Object(c.e)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=Object(i.x)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:Object(c.e)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function j(e){var t=function(e){var t=Object(i.n)(e);return Object(c.f)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(s.a)(t,2),n=r[0],a=r[1],u=x(n),o=Object(s.a)(u,2);return[o[0],o[1],a]}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(p.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(s.a)(r,3),a=n[0],u=n[2];return e.portalItem.resourceFromPath(Object(i.x)(a,t+u))}function I(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(s.a)(r,3),a=n[0],u=n[2];return e.portalItem.resourceFromPath(Object(i.x)(a,t+u))}}}]);
//# sourceMappingURL=5.755b9f56.chunk.js.map