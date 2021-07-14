(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[62],{1144:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(5),a=n(6),r=n(14),s=n(2),u=n(3),o=n(4),l=n(132),c=n(139),d=n(1090),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,e),this.compareMinX=y,this.compareMinY=p,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}return Object(u.a)(e,[{key:"destroy",value:function(){this.clear(),F.prune(),B.prune(),O.prune(),w.prune()}},{key:"all",value:function(e){this._all(this.data,e)}},{key:"search",value:function(e,t){var n=this.data,i=this.toBBox;if(k(e,n))for(F.clear();n;){for(var a=0,r=n.children.length;a<r;a++){var s=n.children[a],u=n.leaf?i(s):s;k(e,u)&&(n.leaf?t(s):I(e,u)?this._all(s,t):F.push(s))}n=F.pop()}}},{key:"collides",value:function(e){var t=this.data,n=this.toBBox;if(!k(e,t))return!1;for(F.clear();t;){for(var i=0,a=t.children.length;i<a;i++){var r=t.children[i],s=t.leaf?n(r):r;if(k(e,s)){if(t.leaf||I(e,s))return!0;F.push(r)}}t=F.pop()}return!1}},{key:"load",value:function(e){if(!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var i=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var a=this.data;this.data=i,i=a}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}},{key:"insert",value:function(e){return e&&this._insert(e,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new N([]),this}},{key:"remove",value:function(e){if(!e)return this;var t,n=this.data,i=null,a=0,r=!1,s=this.toBBox(e);for(O.clear(),w.clear();n||O.length>0;){var u;if(n||(n=Object(o.d)(O.pop()),i=O.data[O.length-1],a=null!=(u=w.pop())?u:0,r=!0),n.leaf&&-1!==(t=Object(l.e)(n.children,e,n.children.length,n.indexHint)))return n.children.splice(t,1),O.push(n),this._condense(O),this;r||n.leaf||!I(n,s)?i?(a++,n=i.children[a],r=!1):n=null:(O.push(n),w.push(a),a=0,i=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(e){return this.data=e,this}},{key:"_all",value:function(e,t){var n=e;for(B.clear();n;){var i;if(!0===n.leaf){var a,s=Object(r.a)(n.children);try{for(s.s();!(a=s.n()).done;){t(a.value)}}catch(u){s.e(u)}finally{s.f()}}else B.pushArray(n.children);n=null!=(i=B.pop())?i:null}}},{key:"_build",value:function(e,t,n,i){var a=n-t+1,r=this._maxEntries;if(a<=r){var s=new N(e.slice(t,n+1));return f(s,this.toBBox),s}i||(i=Math.ceil(Math.log(a)/Math.log(r)),r=Math.ceil(a/Math.pow(r,i-1)));var u=new T([]);u.height=i;var o=Math.ceil(a/r),l=o*Math.ceil(Math.sqrt(r));j(e,t,n,l,this.compareMinX);for(var c=t;c<=n;c+=l){var d=Math.min(c+l-1,n);j(e,c,d,o,this.compareMinY);for(var h=c;h<=d;h+=o){var v=Math.min(h+o-1,d);u.children.push(this._build(e,h,v,i-1))}}return f(u,this.toBBox),u}},{key:"_chooseSubtree",value:function(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){for(var a=void 0,r=1/0,s=1/0,u=0,o=t.children.length;u<o;u++){var l=t.children[u],c=g(l),d=x(e,l)-c;d<s?(s=d,r=c<r?c:r,a=l):d===s&&c<r&&(r=c,a=l)}t=a||t.children[0]}return t}},{key:"_insert",value:function(e,t,n){var i=this.toBBox,a=n?e:i(e);O.clear();var r=this._chooseSubtree(a,this.data,t,O);for(r.children.push(e),m(r,a);t>=0&&O.data[t].children.length>this._maxEntries;)this._split(O,t),t--;this._adjustParentBBoxes(a,O,t)}},{key:"_split",value:function(e,t){var n=e.data[t],i=n.children.length,a=this._minEntries;this._chooseSplitAxis(n,a,i);var r=this._chooseSplitIndex(n,a,i);if(r){var s=n.children.splice(r,n.children.length-r),u=n.leaf?new N(s):new T(s);u.height=n.height,f(n,this.toBBox),f(u,this.toBBox),t?e.data[t-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(e,t){this.data=new T([e,t]),this.data.height=e.height+1,f(this.data,this.toBBox)}},{key:"_chooseSplitIndex",value:function(e,t,n){var i,a,r;i=a=1/0;for(var s=t;s<=n-t;s++){var u=v(e,0,s,this.toBBox),o=v(e,s,n,this.toBBox),l=_(u,o),c=g(u)+g(o);l<i?(i=l,r=s,a=c<a?c:a):l===i&&c<a&&(a=c,r=s)}return r}},{key:"_chooseSplitAxis",value:function(e,t,n){var i=e.leaf?this.compareMinX:y,a=e.leaf?this.compareMinY:p;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,a)&&e.children.sort(i)}},{key:"_allDistMargin",value:function(e,t,n,i){e.children.sort(i);for(var a=this.toBBox,r=v(e,0,t,a),s=v(e,n-t,n,a),u=b(r)+b(s),o=t;o<n-t;o++){var l=e.children[o];m(r,e.leaf?a(l):l),u+=b(r)}for(var c=n-t-1;c>=t;c--){var d=e.children[c];m(s,e.leaf?a(d):d),u+=b(s)}return u}},{key:"_adjustParentBBoxes",value:function(e,t,n){for(var i=n;i>=0;i--)m(t.data[i],e)}},{key:"_condense",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e.data[t];if(0===n.children.length)if(t>0){var i=e.data[t-1],a=i.children;a.splice(Object(l.e)(a,n,a.length,i.indexHint),1)}else this.clear();else f(n,this.toBBox)}}},{key:"_initFormat",value:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}]),e}();function f(e,t){v(e,0,e.children.length,t,e)}function v(e,t,n,i,a){a||(a=new N([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var r,s=t;s<n;s++)r=e.children[s],m(a,e.leaf?i(r):r);return a}function m(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function y(e,t){return e.minX-t.minX}function p(e,t){return e.minY-t.minY}function g(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function b(e){return e.maxX-e.minX+(e.maxY-e.minY)}function x(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function _(e,t){var n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),a=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,a-n)*Math.max(0,r-i)}function I(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function k(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function j(e,t,n,i,a){for(var r=[t,n];r.length;){var s=Object(o.d)(r.pop()),u=Object(o.d)(r.pop());if(!(s-u<=i)){var l=u+Math.ceil((s-u)/i/2)*i;Object(d.a)(e,l,u,s,a),r.push(u,l,l,s)}}}var F=new c.a,B=new c.a,O=new c.a,w=new c.a({deallocator:void 0}),M=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).height=1,e.indexHint=new l.a,e}return n}((function e(){Object(s.a)(this,e),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),N=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this)).children=e,i.leaf=!0,i}return n}(M),T=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this)).children=e,i.leaf=!1,i}return n}(M)},1150:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var i=n(26),a=n(10),r=n(16),s=n(22),u=n(324);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.a:"esriGeometryPolyline"===e?u.c:u.b}}}function l(e,t){if(Object(r.a)("csp-restrictions"))return function(){return Object(a.a)(Object(i.a)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(s.indexOf(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var u=new Function(n);return function(){return new u}}catch(o){return function(){return Object(a.a)(Object(i.a)({},t,null),e)}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}},1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(2),a=n(3),r=n(16),s=n(1144),u={minX:0,minY:0,maxX:0,maxY:0};var o=function(){function e(){var t=this;Object(i.a)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.a(9,Object(r.a)("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,i){e[n++]=i})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return Object(a.a)(e,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._loadIndex(),function(e,t,n){u.minX=t[0],u.minY=t[1],u.maxX=t[2],u.maxY=t[3],e.search(u,n)}(this._index,e,(function(e){return t(n._idByBounds.get(e))}))}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}()},1158:function(e,t,n){"use strict";var i=n(14),a=n(2),r=n(3),s=n(4),u=n(13),o=n(18),l=n(78),c=n(114),d=n(559),h=n(175),f=n(1151),v=n(297),m=n(191),y=n(1086),p={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new v.a(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=Object(y.a)(new m.a,e.geometry,t.hasZ,t.hasM)),e.centroid}},g=function(){function e(t){Object(a.a)(this,e),this.geometryInfo=t,this._boundsStore=new f.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new l.a,this.featureAdapter=p}return Object(r.a)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var e=this;if(!this.numFeatures)return null;var t=Object(c.i)(c.a);return this._featuresById.forEach((function(n){var i=e._boundsStore.get(n.objectId);i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))})),t}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this._add(a)}}catch(r){n.e(r)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=this._featuresById.get(a);r&&this._remove(r)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var a,r=Object(i.a)(e);try{for(r.s();!(a=r.n()).done;){var s=a.value,u=this._boundsStore.get(s.objectId);u&&t(Object(h.k)(n,u))}}catch(o){r.e(o)}finally{r.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,i){e._markedIds.has(i)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,i=this._featuresById.get(t);if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(s.k)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=Object(d.r)(n||Object(c.i)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,n),this._featuresById.set(t,e)}else u.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new o.a("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return Object(s.k)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}();t.a=g},1461:function(e,t,n){"use strict";n.r(t),n.d(t,"csvLatitudeFieldNames",(function(){return L})),n.d(t,"csvLongitudeFieldNames",(function(){return R}));var i=n(14),a=n(7),r=n.n(a),s=n(31),u=n(15),o=n(3),l=n(2),c=n(16),d=n(18),h=n(12),f=n(59),v=n(44),m=n(61),y=(n(71),n(62)),p=n(141),g=n(486),b=n(297),x=n(191),_=n(464),I=n(1084),k=n(1150),j=n(1077),F=n(1158),B=n(1170),O=r.a.mark(Y),w=r.a.mark(S),M=/^\s*"([\S\s]*)"\s*$/,N=/""/g,T=[","," ",";","|","\t"];function E(e,t){for(var n={},i=e.length,a=0;a<i;a++)n[e[a]]=t[a];return n}function Y(e,t,n){var i,a,s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:if(!(i<=e.length)){r.next=10;break}if(a=e.indexOf(t,i),s=e.substring(i,a>-1?a:void 0),i+=s.length+1,r.t0=n&&!s.trim(),r.t0){r.next=8;break}return r.next=8,s;case 8:r.next=1;break;case 10:case"end":return r.stop()}}),O)}function X(e){var t=e.includes("\r\n")?"\r\n":"\n";return Y(e,t,!0)}function S(e,t,n){var i,a,s,u,o,l,c,d,h,f;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i="",a="",s=0,u=[];case 1:if(o=e.next(),l=o.value,!o.done){r.next=4;break}return r.abrupt("return");case 4:c=Y(l,n,!1);case 5:if(d=c.next(),h=d.value,!d.done){r.next=8;break}return r.abrupt("break",24);case 8:if(i+=a+h,a="",(s+=D(h))%2!=0){r.next=21;break}if(!(s>0)){r.next=17;break}if(f=M.exec(i)){r.next=14;break}return u=[],i="",s=0,r.abrupt("continue",31);case 14:u.push(f[1].replace(N,'"')),r.next=18;break;case 17:u.push(i);case 18:i="",s=0,r.next=22;break;case 21:a=n;case 22:r.next=5;break;case 24:if(0!==s){r.next=30;break}return r.next=27,E(t,u);case 27:u=[],r.next=31;break;case 30:a="\n";case 31:r.next=1;break;case 33:case"end":return r.stop()}}),w)}function D(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var C=Object(k.c)("esriGeometryPoint"),q=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],L=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],R=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],P=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,V=["csv"],A=[0,0],G=function e(t,n){Object(l.a)(this,e),this.x=t,this.y=n},J=function(){var e=Object(g.a)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(a){var r=t.exec(a);if(e.factor=i,!r)return NaN;var s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],e.factor*=-1}return+(s=s.replace(n,"").replace(e.decimal,"."))*e.factor}}(),Q="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Z=function(){function e(){Object(l.a)(this,e),this._fieldsIndex=null,this._queryEngine=null}return Object(o.a)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}},{key:"load",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i,a,u,o,l,c,d,h=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:{},e.next=3,Promise.all([this._fetch(t.url,n),this._checkProjection(n&&t.parsing&&t.parsing.spatialReference)]);case 3:return i=e.sent,a=Object(s.a)(i,1),u=a[0],o=this._parse(u,t),this._queryEngine=this._createQueryEngine(u,o),o.layerDefinition.extent=this._queryEngine.fullExtent,o.layerDefinition.timeInfo&&(l=this._queryEngine.timeExtent,c=l.start,d=l.end,o.layerDefinition.timeInfo.timeExtent=[c,d]),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new d.a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}},{key:"queryFeatureCount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}},{key:"queryObjectIds",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}},{key:"queryExtent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}},{key:"querySnapping",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}},{key:"_fetch",value:function(){var e=Object(u.a)(r.a.mark((function e(t,n){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new d.a("csv-source:invalid-source","url not defined");case 2:return i=Object(h.J)(t),e.next=5,Object(y.default)(i.path,{query:i.query,responseType:"text",signal:n.signal});case 5:return e.abrupt("return",e.sent.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_parse",value:function(e,t){var n=t.parsing||{},a={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=X(e),s=r.next().value;if(!s)throw new d.a("csv","CSV is empty",{csv:e});if(s=s.trim(),!n.columnDelimiter){var u=function(e){var t,n=e.trim(),a=0,r="",s=Object(i.a)(T);try{for(s.s();!(t=s.n()).done;){var u=t.value,o=n.split(u).length;o>a&&(a=o,r=u)}}catch(l){s.e(l)}finally{s.f()}return""===r?null:r}(s);if(!u)throw new d.a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");a.columnDelimiter=u}var o=s.split(a.columnDelimiter),l=a.layerDefinition={name:Object(h.k)(t.url,V)||"csv",drawingInfo:C,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){var c=this._inferLocationInfo(o);if(!n.longitudeField&&!c.longitudeFieldName||!n.latitudeField&&!c.latitudeFieldName)throw new d.a("csv","Unable to identify latitudeField and/or longitudeField from CSV");a.locationInfo={longitudeFieldName:n.longitudeField||c.longitudeFieldName,latitudeFieldName:n.latitudeField||c.latitudeFieldName}}var f=this._inferFields(r,a.columnDelimiter,o,a.locationInfo);if(n.fields&&n.fields.length){var v,m=new Map,y=Object(i.a)(n.fields);try{for(y.s();!(v=y.n()).done;){var p=v.value;m.set(p.name.toLowerCase(),p)}}catch(M){y.e(M)}finally{y.f()}var g,b=Object(i.a)(f);try{for(b.s();!(g=b.n()).done;){var x=g.value,I=m.get(x.name.toLowerCase());if(I){var k=x.name;Object.assign(x,I),x.name=k}}}catch(M){b.e(M)}finally{b.f()}}if(l.fields=f,!l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))){var j={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=j.name,l.fields.unshift(j)}if(this._fieldsIndex=new _.a(l.fields),l.timeInfo){var F=l.timeInfo;if(F.startTimeField){var B=this._fieldsIndex.get(F.startTimeField);B?(F.startTimeField=B.name,B.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){var O=this._fieldsIndex.get(F.endTimeField);O?(F.endTimeField=O.name,O.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){var w=this._fieldsIndex.get(F.trackIdField);F.trackIdField=w?w.name:null}F.startTimeField||F.endTimeField||(l.timeInfo=null)}return a}},{key:"_inferLocationInfo",value:function(e){var t=null,n=null,i=function(t){return e.find((function(e){return e.toLowerCase()===t}))};return R.some((function(e){return!!(t=i(e))})),L.some((function(e){return!!(n=i(e))})),{longitudeFieldName:t,latitudeFieldName:n}}},{key:"_inferFields",value:function(e,t,n,a){var r=this,s=[],u=S(e,n,t),o=[];e:for(;o.length<10;){var l=u.next(),c=l.value;if(l.done)break e;o.push(c)}var d,h=Object(i.a)(n);try{var f=function(){var e=d.value;if(e===a.longitudeFieldName||e===a.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=o.map((function(t){return t[e]})),n=r._inferFieldType(t),i={name:e,type:null,alias:e};switch(n){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255}s.push(i)}};for(h.s();!(d=h.n()).done;)f()}catch(v){h.e(v)}finally{h.f()}return s}},{key:"_inferFieldType",value:function(e){var t=this;if(!e.length)return"string";var n=/[^+-.,0-9]/;return e.map((function(e){var i=!1;if(""!==e){if(n.test(e))i=!0;else{var a=J(e);if(!isNaN(a))return/[.,]/.test(e)||!Q(a)||a>214783647||a<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(a=Number(e),!isNaN(a))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),a=Number(e),!isNaN(a))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var r=new Date(e);return t._isValidDate(r,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}},{key:"_isValidDate",value:function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(Object(c.a)("chrome")&&/\d+\W*$/.test(t)){var i=t.match(/[a-zA-Z]{2,}/);if(i){for(var a=!1,r=0;!a&&r<=i.length;)a=!P.test(i[r]),r++;n=!a}}return n}},{key:"_createQueryEngine",value:function(e,t){var n,a=t.locationInfo,r=a.latitudeFieldName,u=a.longitudeFieldName,o=t.layerDefinition,l=o.objectIdField,c=o.fields,d=o.extent,h=o.timeInfo,y=[],g=[],_=new Set,k=new Set,j=[],O=Object(i.a)(c);try{for(O.s();!(n=O.n()).done;){var w=n.value,M=w.name,N=w.type;"esriFieldTypeDate"===N?_.add(M):q.indexOf(N)>-1&&k.add(M),M!==l&&j.push(M)}}catch(se){O.e(se)}finally{O.f()}var T=0,E=X(e);E.next();var Y=S(E,j,t.columnDelimiter);e:for(;;){var D=Y.next(),C=D.value;if(D.done)break e;var L=this._parseCoordinateValue(C[r]),R=this._parseCoordinateValue(C[u]);if(null!=R&&null!=L&&!isNaN(L)&&!isNaN(R)){for(var P in C[r]=L,C[u]=R,C)if(P!==r&&P!==u)if(_.has(P)){var V=new Date(C[P]);C[P]=this._isValidDate(V,C[P])?V.getTime():null}else if(k.has(P)){var Q=J(C[P]);isNaN(Q)?C[P]=null:C[P]=Q}C[l]=T,T++,y.push(new G(R,L)),g.push(C)}}if(!Object(f.c)({wkid:4326},d.spatialReference))if(Object(f.m)(d.spatialReference)){var Z,$=Object(i.a)(y);try{for($.s();!(Z=$.n()).done;){var z=Z.value,H=Object(m.c)(z.x,z.y,A),U=Object(s.a)(H,2);z.x=U[0],z.y=U[1]}}catch(se){$.e(se)}finally{$.f()}}else y=Object(p.l)(I.a,y,v.a.WGS84,d.spatialReference,null);for(var W=new F.a({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),K=new B.a({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:h,objectIdField:l,spatialReference:d.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:W}),ee=[],te=0;te<y.length;te++){var ne=y[te],ie=ne.x,ae=ne.y,re=g[te];re[l]=te+1,ee.push(new b.a(new x.a([],[ie,ae]),re,null,re[l]))}return W.addMany(ee),K}},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=J(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)(f.a,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new d.a("csv-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.default=Z}}]);
//# sourceMappingURL=62.180ff993.chunk.js.map