(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[3],{761:function(e,t,r){"use strict";r.d(t,"a",(function(){return B})),r.d(t,"b",(function(){return ee})),r.d(t,"c",(function(){return D})),r.d(t,"d",(function(){return K})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return H})),r.d(t,"g",(function(){return $})),r.d(t,"h",(function(){return Q})),r.d(t,"i",(function(){return L})),r.d(t,"j",(function(){return G})),r.d(t,"k",(function(){return U})),r.d(t,"l",(function(){return Y})),r.d(t,"m",(function(){return he})),r.d(t,"n",(function(){return ne})),r.d(t,"o",(function(){return ae})),r.d(t,"p",(function(){return ce})),r.d(t,"q",(function(){return te})),r.d(t,"r",(function(){return re})),r.d(t,"s",(function(){return I})),r.d(t,"t",(function(){return j})),r.d(t,"u",(function(){return ue})),r.d(t,"v",(function(){return ie}));var n=r(39),o=r(31),s=r(16),a=r(12),i=r(21),u=r(182),l=r(772),c=r(831),h=r(765);function d(e,t){return e?t?4:3:t?3:2}var f=a.a.getLogger("esri.tasks.support.optimizedFeatureSet"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},y=function(e,t,r,n,o,s){e[r]=o,e[r+1]=s},v=function(e,t,r,n,o,s){e[r]=o,e[r+1]=s,e[r+2]=t[n+2]},m=function(e,t,r,n,o,s){e[r]=o,e[r+1]=s,e[r+2]=t[n+3]},p=function(e,t,r,n,o,s){e[r]=o,e[r+1]=s,e[r+2]=t[n+2],e[r+3]=t[n+3]};function b(e,t,r,n){if(e){if(r)return t&&n?p:v;if(t&&n)return m}else if(t&&n)return v;return y}function I(e,t){var r=e.scale,n=e.translate;return Math.round((t-n[0])/r[0])}function j(e,t){var r=e.scale,n=e.translate;return Math.round((n[1]-t)/r[1])}function w(e,t){var r=e.scale,n=e.translate;return t*r[0]+n[0]}function O(e,t){var r=e.scale;return e.translate[1]-t*r[1]}function G(e,t,r){return e?t?r?P(e):M(e):r?k(e):N(e):null}function N(e){var t=e.coords;return{x:t[0],y:t[1]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function M(e){var t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function k(e){var t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function P(e){var t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function q(e,t){return e&&t?Z:e?T:t?x:F}function R(e,t,r,n,o){var a,i=q(r,n),u=Object(s.a)(t);try{for(u.s();!(a=u.n()).done;){var c=a.value,d=c.geometry,f=c.attributes,g=void 0;d&&(g=i(new h.a,d)),e.push(new l.a(g,f,null,f[o]))}}catch(y){u.e(y)}finally{u.f()}return e}function L(e,t,r){if(!e)return null;for(var n=d(t,r),o=[],s=0;s<e.coords.length;s+=n){for(var a=[],i=0;i<n;i++)a.push(e.coords[s+i]);o.push(a)}return t?r?{points:o,hasZ:t,hasM:r}:{points:o,hasZ:t}:r?{points:o,hasM:r}:{points:o}}function z(e,t,r,n,o){var a,i=d(r,n),u=Object(s.a)(t);try{for(u.s();!(a=u.n()).done;){var c=a.value,f=c.geometry,g=c.attributes,y=void 0;f&&(y=E(new h.a,f,i)),e.push(new l.a(y,g,null,g[o]))}}catch(v){u.e(v)}finally{u.f()}return e}function E(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d(t.hasZ,t.hasM);e.lengths[0]=t.points.length;var n,o=e.coords,a=0,i=Object(s.a)(t.points);try{for(i.s();!(n=i.n()).done;)for(var u=n.value,l=0;l<r;l++)o[a++]=u[l]}catch(c){i.e(c)}finally{i.f()}return e}function Y(e,t,r){if(!e)return null;var n,o=d(t,r),a=e.coords,i=e.lengths,u=[],l=0,c=Object(s.a)(i);try{for(c.s();!(n=c.n()).done;){for(var h=n.value,f=[],g=0;g<h;g++){for(var y=[],v=0;v<o;v++)y.push(a[l++]);f.push(y)}u.push(f)}}catch(m){c.e(m)}finally{c.f()}return t?r?{paths:u,hasZ:t,hasM:r}:{paths:u,hasZ:t}:r?{paths:u,hasM:r}:{paths:u}}function S(e,t,r,n,o){var a,i=d(r,n),u=Object(s.a)(t);try{for(u.s();!(a=u.n()).done;){var c=a.value,f=c.geometry,g=c.attributes,y=void 0;f&&(y=V(new h.a,f,i)),e.push(new l.a(y,g,null,g[o]))}}catch(v){u.e(v)}finally{u.f()}return e}function V(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d(t.hasZ,t.hasM),o=e.lengths,a=e.coords,i=0,u=Object(s.a)(t.paths);try{for(u.s();!(r=u.n()).done;){var l,c=r.value,h=Object(s.a)(c);try{for(h.s();!(l=h.n()).done;)for(var f=l.value,g=0;g<n;g++)a[i++]=f[g]}catch(y){h.e(y)}finally{h.f()}o.push(c.length)}}catch(y){u.e(y)}finally{u.f()}return e}function U(e,t,r){if(!e)return null;var n,o=d(t,r),a=e.coords,i=e.lengths,u=[],l=0,c=Object(s.a)(i);try{for(c.s();!(n=c.n()).done;){for(var h=n.value,f=[],g=0;g<h;g++){for(var y=[],v=0;v<o;v++)y.push(a[l++]);f.push(y)}u.push(f)}}catch(m){c.e(m)}finally{c.f()}return t?r?{rings:u,hasZ:t,hasM:r}:{rings:u,hasZ:t}:r?{rings:u,hasM:r}:{rings:u}}function _(e,t,r,n,o){var a,i=Object(s.a)(t);try{for(i.s();!(a=i.n()).done;){var u=a.value,c=u.geometry,d=u.centroid,f=u.attributes,g=void 0;c&&(g=C(new h.a,c,r,n)),d?e.push(new l.a(g,f,F(new h.a,d),f[o])):e.push(new l.a(g,f,null,f[o]))}}catch(y){i.e(y)}finally{i.f()}return e}function C(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.hasZ,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.hasM;return X(e,t.rings,r,n),e}function X(e,t,r,n){var o=d(r,n),a=e.lengths,i=e.coords,u=0;a.length=i.length=0;var l,c=Object(s.a)(t);try{for(c.s();!(l=c.n()).done;){var h,f=l.value,g=Object(s.a)(f);try{for(g.s();!(h=g.n()).done;)for(var y=h.value,v=0;v<o;v++)i[u++]=y[v]}catch(m){g.e(m)}finally{g.f()}a.push(f.length)}}catch(m){c.e(m)}finally{c.f()}return e}var A=[],J=[];function B(e,t,r,n,s){A[0]=e;var a=D(J,A,t,r,n,s),i=Object(o.a)(a,1)[0];return A.length=J.length=0,i}function D(e,t,r,n,o,a){if(e.length=0,!r){var u,c=Object(s.a)(t);try{for(c.s();!(u=c.n()).done;){var h=u.value,d=h.attributes[a];e.push(new l.a(null,h.attributes,null,d))}}catch(g){c.e(g)}finally{c.f()}return e}switch(r){case"esriGeometryPoint":return R(e,t,n,o,a);case"esriGeometryMultipoint":return z(e,t,n,o,a);case"esriGeometryPolyline":return S(e,t,n,o,a);case"esriGeometryPolygon":return _(e,t,n,o,a);default:f.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(r,"'"))),e.length=0}return e}function H(e,t,r,n){J[0]=e,W(A,J,t,r,n);var o=A[0];return A.length=J.length=0,o}function K(e,t,r){if(!e)return null;var n=new h.a;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),Object(u.f)(e)?q(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(n,e):Object(u.g)(e)?C(n,e,t,r):Object(u.h)(e)?V(n,e,d(t,r)):Object(u.e)(e)?E(n,e,d(t,r)):void f.error("convertFromGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(e,"'")))}function Q(e,t,r,n){var o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(t){case"esriGeometryPoint":var s=N;return r&&n?s=P:r?s=M:n&&(s=k),s(o);case"esriGeometryMultipoint":return L(o,r,n);case"esriGeometryPolyline":return Y(o,r,n);case"esriGeometryPolygon":return U(o,r,n);default:return void f.error("convertToGeometry:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(t,"'")))}}function W(e,t,r,n,o){switch(e.length=0,r){case"esriGeometryPoint":return function(e,t,r,n){var o=N;r&&n?o=P:r?o=M:n&&(o=k);var a,i=Object(s.a)(t);try{for(i.s();!(a=i.n()).done;){var u=a.value,l=u.geometry,c=u.attributes,h=l?o(l):null;e.push({attributes:c,geometry:h})}}catch(d){i.e(d)}finally{i.f()}return e}(e,t,n,o);case"esriGeometryMultipoint":return function(e,t,r,n){var o,a=Object(s.a)(t);try{for(a.s();!(o=a.n()).done;){var i=o.value,u=i.geometry,l=i.attributes,c=void 0;u&&(c=L(u,r,n)),e.push({attributes:l,geometry:c})}}catch(h){a.e(h)}finally{a.f()}return e}(e,t,n,o);case"esriGeometryPolyline":return function(e,t,r,n){var o,a=Object(s.a)(t);try{for(a.s();!(o=a.n()).done;){var i=o.value,u=i.geometry,l=i.attributes,c=void 0;u&&(c=Y(u,r,n)),e.push({attributes:l,geometry:c})}}catch(h){a.e(h)}finally{a.f()}return e}(e,t,n,o);case"esriGeometryPolygon":return function(e,t,r,n){var o,a=Object(s.a)(t);try{for(a.s();!(o=a.n()).done;){var i=o.value,u=i.geometry,l=i.attributes,c=i.centroid,h=void 0;if(u&&(h=U(u,r,n)),c){var d=N(c);e.push({attributes:l,centroid:d,geometry:h})}else e.push({attributes:l,geometry:h})}}catch(f){a.e(f)}finally{a.f()}return e}(e,t,n,o);default:f.error("convertToFeatureSet:unknown-geometry",new i.a("Unable to parse unknown geometry type '".concat(r,"'")))}return e}function $(e){var t=e.objectIdFieldName,r=e.spatialReference,n=e.transform,o=e.fields,s=e.hasM,a=e.hasZ,i=e.features,u=e.geometryType,l=e.exceededTransferLimit,c=e.uniqueIdField,h=e.queryGeometry,d=e.queryGeometryType,f={features:W([],i,u,a,s),fields:o,geometryType:u,objectIdFieldName:t,spatialReference:r,uniqueIdField:c,queryGeometry:Q(h,d,!1,!1)};return n&&(f.transform=n),l&&(f.exceededTransferLimit=l),s&&(f.hasM=s),a&&(f.hasZ=a),f}function ee(e,t){var r=new c.a,n=e.hasM,o=e.hasZ,s=e.features,a=e.objectIdFieldName,u=e.spatialReference,l=e.geometryType,h=e.exceededTransferLimit,d=e.transform,g=e.fields;return g&&(r.fields=g),r.geometryType=l,r.objectIdFieldName=a||t,r.spatialReference=u,r.objectIdFieldName?(s&&D(r.features,s,l,o,n,r.objectIdFieldName),h&&(r.exceededTransferLimit=h),n&&(r.hasM=n),o&&(r.hasZ=o),d&&(r.transform=d),r):(f.error(new i.a("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function te(e,t){var r=t.geometryType,n=t.features,o=t.hasM,s=t.hasZ;if(!e)return t;for(var a=0;a<n.length;a++){var i=n[a],u=i.weakClone();u.geometry=new h.a,re(u.geometry,i.geometry,o,s,r,e),i.centroid&&(u.centroid=new h.a,re(u.centroid,i.centroid,o,s,"esriGeometryPoint",e)),n[a]=u}return t.transform=e,t}function re(e,t,r,n,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var l=g[o],c=t.coords,h=t.lengths,f=d(r,n),y=d(r&&i,n&&u),v=b(r,n,i,u);if(!h.length)return v(e.coords,c,0,0,I(a,c[0]),j(a,c[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;var m,p,w,O,G,N=0,F=0,M=F,T=Object(s.a)(h);try{for(T.s();!(G=T.n()).done;){var k=G.value;if(!(k<l)){var x=0;F=M,w=m=I(a,c[N]),O=p=j(a,c[N+1]),v(e.coords,c,F,N,w,O),x++,N+=f,F+=y;for(var P=1;P<k;P++,N+=f)w=I(a,c[N]),O=j(a,c[N+1]),w===m&&O===p||(v(e.coords,c,F,N,w-m,O-p),F+=y,x++,m=w,p=O);x>=l&&(e.lengths.push(x),M=F)}}}catch(Z){T.e(Z)}finally{T.f()}return e.coords.length=M,e.coords.length?e:null}function ne(e,t,r,n,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;var l=g[o],c=t.coords,h=t.lengths,f=d(r,n),y=d(r&&i,n&&u),v=b(r,n,i,u);if(!h.length)return v(e.coords,c,0,0,c[0],c[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;var m,p=0,I=a*a,j=Object(s.a)(h);try{for(j.s();!(m=j.n()).done;){var w=m.value;if(w<l)p+=w*f;else{var O=e.coords.length/y,G=p,N=p+(w-1)*f;v(e.coords,c,e.coords.length,G,c[G],c[G+1]),se(e.coords,c,f,I,v,G,N),v(e.coords,c,e.coords.length,N,c[N],c[N+1]);var F=e.coords.length/y-O;F>=l?e.lengths.push(F):e.coords.length=O*y,p+=w*f}}}catch(M){j.e(M)}finally{j.f()}return e.coords.length?e:null}function oe(e,t,r,n){var o=e[t],s=e[t+1],a=e[r],i=e[r+1],u=e[n],l=e[n+1],c=a,h=i,d=u-c,f=l-h;if(0!==d||0!==f){var g=((o-c)*d+(s-h)*f)/(d*d+f*f);g>1?(c=u,h=l):g>0&&(c+=d*g,h+=f*g)}return(d=o-c)*d+(f=s-h)*f}function se(e,t,r,n,o,s,a){for(var i,u=n,l=0,c=s+r;c<a;c+=r)(i=oe(t,c,s,a))>u&&(l=c,u=i);u>n&&(l-s>r&&se(e,t,r,n,o,s,l),o(e,t,e.length,l,t[l],t[l+1]),a-l>r&&se(e,t,r,n,o,l,a))}function ae(e,t,r,n){if(!t||!t.coords||!t.coords.length)return null;var o=d(r,n),s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;if(t&&t.coords)for(var l=t.coords,c=0;c<l.length;c+=o){var h=l[c],f=l[c+1];s=Math.min(s,h),i=Math.max(i,h),a=Math.min(a,f),u=Math.max(u,f)}return e[0]=s,e[1]=a,e[2]=i,e[3]=u,e}function ie(e,t,r,n,s){var a=t.coords,i=t.lengths,u=r?n?p:v:n?v:y,l=d(r,n);if(!a.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return u(e.coords,a,0,0,w(s,a[0]),O(s,a[1])),e!==t&&(e.lengths.length=0,e.coords.length=l),e;for(var c=Object(o.a)(s.scale,2),h=c[0],f=c[1],g=0,m=0;m<i.length;m++){var b=i[m];e.lengths[m]=b;var I=w(s,a[g]),j=O(s,a[g+1]);u(e.coords,a,g,g,I,j),g+=l;for(var G=1;G<b;G++,g+=l)I+=a[g]*h,j-=a[g+1]*f,u(e.coords,a,g,g,I,j)}return e!==t&&(e.lengths.length=i.length,e.coords.length=a.length),e}function ue(e,t,r,o,s,a){var i,u=d(r,o),l=b(r,o,s,a),c=t.coords;e.coords.length=0,e.lengths.length=0,(i=e.lengths).push.apply(i,Object(n.a)(t.lengths));for(var h=0;h<c.length;h+=u)l(e.coords,c,e.coords.length,h,c[h],c[h+1]);return e}function le(e,t,r,n){for(var o=0,s=e[n*t],a=e[n*(t+1)],i=1;i<r;i++){var u=s+e[n*(t+i)],l=a+e[n*(t+i)+1],c=(u-s)*(l+a);s=u,a=l,o+=c}return.5*o}function ce(e,t){for(var r=e.coords,n=e.lengths,o=0,s=0,a=0;a<n.length;a++)s+=le(r,o,n[a],t),o+=a;return Math.abs(s)}function he(e,t){for(var r=e.clone(),n=e.coords,o=e.lengths,s=0,a=0;a<o.length;a++){for(var i=o[a],u=n[t*s],l=n[t*s+1],c=1;c<i;c++){var h=u+n[t*(s+c)],d=l+n[t*(s+c)+1];r.coords[t*(s+c)]=h,r.coords[t*(s+c)+1]=d,u=h,l=d}s+=i}return r}},765:function(e,t,r){"use strict";var n=r(2),o=r(3),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(n.a)(this,e),this.lengths=null!=t?t:[],this.coords=null!=r?r:[],this.hasIndeterminateRingOrder=o}return Object(o.a)(e,[{key:"forEachVertex",value:function(e){var t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var r=0;r<this.lengths.length;r++){for(var n=this.lengths[r],o=0;o<n;o++)e(this.coords[2*(o+t)],this.coords[2*(o+t)+1]);t+=n}}},{key:"clone",value:function(){return new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}},{key:"isPoint",get:function(){return 0===this.lengths.length}}]),e}();t.a=s},772:function(e,t,r){"use strict";var n=r(2),o=r(3),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;Object(n.a)(this,e),this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=t,r&&(this.attributes=r),o&&(this.centroid=o),null!=s&&(this.objectId=s)}return Object(o.a)(e,[{key:"weakClone",value:function(){var t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashIndexed=this.geohashIndexed,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}},{key:"hasGeometry",get:function(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}}]),e}();t.a=s},831:function(e,t,r){"use strict";var n=r(2),o=r(3),s=function(){function e(){Object(n.a)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return Object(o.a)(e,[{key:"weakClone",value:function(){var t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}]),e}();t.a=s}}]);
//# sourceMappingURL=3.680b7190.chunk.js.map