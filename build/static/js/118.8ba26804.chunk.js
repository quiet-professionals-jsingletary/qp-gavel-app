(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[118],{1224:function(e,t,r){"use strict";r.r(t),r.d(t,"createLabelFunction",(function(){return m})),r.d(t,"formatField",(function(){return g}));var n=r(7),a=r.n(n),u=r(13),i=r(16),s=r(14),c=r(20),l=r(144),o=r(49),p=r(108),f=r(133),b=r(423),d=r(281),v=s.a.getLogger("esri.layers.support.labelFormatUtils"),y={type:"simple",evaluate:function(){return null}},x={getAttribute:function(e,t){return e.field(t)}};function m(e,t,r){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(a.a.mark((function e(t,n,u){var i,s,p,f,m,h,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.symbol){e.next=2;break}return e.abrupt("return",y);case 2:if(i=t.where,s=Object(d.b)(t),!i){e.next=10;break}return e.next=7,Promise.resolve().then(r.bind(null,895));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(p=e.t0,"arcade"!==s.type){e.next=19;break}return e.next=15,Object(l.c)(s.expression,u,n);case 15:m=e.sent,f={type:"arcade",evaluate:function(e){try{var r=m.evaluate({$feature:"attributes"in e?m.repurposeFeature(e):m.repurposeAdapter(e)});if(null!=r)return r.toString()}catch(t){v.error(new c.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:s}))}return null},needsHydrationToEvaluate:function(){return null==Object(d.e)(s.expression)}},e.next=20;break;case 19:f={type:"simple",evaluate:function(e){return s.expression.replace(/{[^}]*}/g,(function(t){var r=t.slice(1,-1),a=Object(o.q)(n,r);if(!a)return t;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":g(u,a)}))}};case 20:if(!i){e.next=30;break}e.prev=21,h=p.WhereClause.create(i,new b.a(n)),e.next=28;break;case 25:return e.prev=25,e.t1=e.catch(21),e.abrupt("return",y);case 28:j=f.evaluate,f.evaluate=function(e){var t="attributes"in e?void 0:x;return h.testFeature(e,t)?j(e):null};case 30:return e.abrupt("return",f);case 31:case"end":return e.stop()}}),e,null,[[21,25]])})))).apply(this,arguments)}function g(e,t){if(null==e)return"";var r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){var n,a=e,i=Object(u.a)(r.codedValues);try{for(i.s();!(n=i.n()).done;){var s=n.value;if(s.code===a)return s.name}}catch(v){i.e(v)}finally{i.f()}}else if("range"===r.type){var c=+e,l="range"in r?r.range[0]:r.minValue,b="range"in r?r.range[1]:r.maxValue;if(l<=c&&c<=b)return r.name}var d=e;return"date"===t.type||"esriFieldTypeDate"===t.type?d=Object(p.b)(d,Object(p.a)("short-date")):Object(o.v)(t)&&(d=Object(f.b)(+d)),d||""}}}]);
//# sourceMappingURL=118.8ba26804.chunk.js.map