(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[130],{1043:function(e,t,n){"use strict";n.r(t),n.d(t,"work",(function(){return Z})),n.d(t,"wrappedWork",(function(){return X}));var r=n(8),i=n.n(r),a=n(22),o=n(71);function c(e,t,n){var r=e.byteLength/(4*t),i=new Uint32Array(e,0,r*t),a=new Uint32Array(r),c=n&&n.minReduction||0,v=n&&n.originalIndices||null,g=n&&n.componentOffsets||null,d=0;if(g)for(var p=0;p<g.length-1;p++){var h=g[p+1]-g[p];h>d&&(d=h)}else d=r;var b=Math.floor(1.1*d)+1;(null==l||l.length<2*b)&&(l=new Uint32Array(Object(o.m)(2*b)));for(var m=0;m<2*b;m++)l[m]=0;for(var w=0,y=!!g&&!!v,O=y?v.length:r,j=y?new Uint32Array(v.length):null,A=1.96,I=0!==c?Math.ceil(7.84*A/(c*c)*c*(1-c)):O,k=1,N=g?g[1]:O,E=0;E<O;E++){if(E===I){var S=1-w/E;if(S+A*Math.sqrt(S*(1-S)/E)<c)return null;I*=2}if(E===N){for(var U=0;U<2*b;U++)l[U]=0;if(v)for(var V=g[k-1];V<g[k];V++)j[V]=a[v[V]];N=g[++k]}for(var x=y?v[E]:E,D=x*t,L=s(i,D,t),M=L%b,W=w;0!==l[2*M+1];){if(l[2*M]===L){var B=l[2*M+1]-1;if(u(i,D,B*t,t)){W=a[B];break}}++M>=b&&(M-=b)}W===w&&(l[2*M]=L,l[2*M+1]=x+1,w++),a[x]=W}if(0!==c&&1-w/r<c)return null;if(y){for(var F=g[k-1];F<j.length;F++)j[F]=a[v[F]];a=j}var q=new Uint32Array(t*w);w=0;for(var z=0;z<O;z++)a[z]===w&&(f(i,(y?v[z]:z)*t,q,w*t,t),w++);if(v&&!y){for(var C=new Uint32Array(v.length),P=0;P<C.length;P++)C[P]=a[v[P]];a=C}return{buffer:q.buffer,indices:a,uniqueCount:w}}function u(e,t,n,r){for(var i=0;i<r;i++)if(e[t+i]!==e[n+i])return!1;return!0}function f(e,t,n,r,i){for(var a=0;a<i;a++)n[r+a]=e[t+a]}function s(e,t,n){for(var r=0,i=0;i<n;i++)r=(r=e[t+i]+r|0)+(r<<11)+(r>>>2)|0;return r>>>0}var l=null,v=n(11),g={divisor:0};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(v.a)(Object(v.a)({},g),t);var n=e.stride;return e.fieldNames.filter((function(t){var n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((function(r){var i=e.fields.get(r),a=i.constructor.ElementCount,o=function(e){var t=p[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),c=i.offset,u=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:a,type:o,offset:c,normalized:u,divisor:t.divisor}}))}var p={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},h=n(917),b=Object(h.a)().vec3f("position").u16("componentIndex").u16("_padding"),m=(d(Object(h.a)().vec2u8("sideness")),Object(h.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0})),w=m.clone().vec3f("normal"),y=m.clone().vec3f("normalA").vec3f("normalB"),O=n(2),j=n(3),A=n(438),I=n(92),k=n(107),N=function(){function e(){Object(O.a)(this,e)}return Object(j.a)(e,[{key:"updateSettings",value:function(e){this.settings=e}},{key:"write",value:function(e,t,n){var r=function(e){var t=E;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],U[0]=5381;for(var n=0;n<S.length;n++)U[0]=31*U[0]+S[n];return U[0]}(n);V.seed=r;var i=V.getIntRange(0,255),a=V.getIntRange(0,this.settings.variants-1),o=V.getFloat(),c=255*(.5*function(e,t){var n=e<0?-1:1;return Math.pow(Math.abs(e),1.2)*n}(-(1-Math.min(o/.7,1))+Math.max(0,o-.7)/(1-.7))+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,i),e.variantStroke.set(t,a),e.variantExtension.set(t,c)}},{key:"trim",value:function(e,t){return e.slice(0,t)}}]),e}(),E=new Float32Array(6),S=new Uint32Array(E.buffer),U=new Uint32Array(1),V=new A.a,x=function(){function e(){Object(O.a)(this,e),this.commonWriter=new N}return Object(j.a)(e,[{key:"updateSettings",value:function(e){this.commonWriter.updateSettings(e)}},{key:"allocate",value:function(e){return w.createBuffer(e)}},{key:"write",value:function(e,t,n){this.commonWriter.write(e,t,n),Object(k.c)(L,n.faceNormal0,n.faceNormal1),Object(k.o)(L,L),e.normal.setVec(t,L)}},{key:"trim",value:function(e,t){return this.commonWriter.trim(e,t)}}]),e}();x.Layout=w,x.glLayout=d(w,{divisor:1});var D=function(){function e(){Object(O.a)(this,e),this.commonWriter=new N}return Object(j.a)(e,[{key:"updateSettings",value:function(e){this.commonWriter.updateSettings(e)}},{key:"allocate",value:function(e){return y.createBuffer(e)}},{key:"write",value:function(e,t,n){this.commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}},{key:"trim",value:function(e,t){return this.commonWriter.trim(e,t)}}]),e}();D.Layout=y,D.glLayout=d(y,{divisor:1});var L=Object(I.e)(),M=n(846);function W(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:B(e.layout)}}function B(e){var t=new Array;return e.fields.forEach((function(e,n){var r=Object(v.a)(Object(v.a)({},e),{},{constructor:q(e.constructor)});t.push([n,r])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}var F=[M.a,M.m,M.u,M.C,M.f,M.h,M.b,M.n,M.v,M.D,M.g,M.i,M.l,M.t,M.B,M.J,M.j,M.r,M.z,M.H,M.k,M.s,M.A,M.I,M.e,M.q,M.y,M.G,M.c,M.o,M.w,M.E,M.d,M.p,M.x,M.F];function q(e){return"".concat(e.ElementType,"_").concat(e.ElementCount)}var z=new Map;function C(e,t){for(var n=e.length/3,r=new Uint32Array(t+1),i=new Uint32Array(t+1),a=function(e,t){e<t?r[e+1]++:i[t+1]++},o=0;o<n;o++){var c=e[3*o],u=e[3*o+1],f=e[3*o+2];a(c,u),a(u,f),a(f,c)}for(var s=0,l=0,v=0;v<t;v++){var g=r[v+1],d=i[v+1];r[v+1]=s,i[v+1]=l,s+=g,l+=d}for(var p=new Uint32Array(6*n),h=r[t],b=function(e,t,n){if(e<t){var a=r[e+1]++;p[2*a]=t,p[2*a+1]=n}else{var o=i[t+1]++;p[2*h+2*o]=e,p[2*h+2*o+1]=n}},m=0;m<n;m++){var w=e[3*m],y=e[3*m+1],O=e[3*m+2];b(w,y,m),b(y,O,m),b(O,w,m)}for(var j=function(e,t){for(var n=2*e,r=t-e,i=1;i<r;i++){for(var a=p[n+2*i],o=p[n+2*i+1],c=i-1;c>=0&&p[n+2*c]>a;c--)p[n+2*c+2]=p[n+2*c],p[n+2*c+3]=p[n+2*c+1];p[n+2*c+2]=a,p[n+2*c+3]=o}},A=0;A<t;A++)j(r[A],r[A+1]),j(h+i[A],h+i[A+1]);for(var I=new Int32Array(3*n),k=function(t,n){return t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1},N=function(e,t){var n=k(e,t);I[3*t+n]=-1},E=function(e,t,n,r){var i=k(e,t);I[3*t+i]=r;var a=k(n,r);I[3*r+a]=t},S=0;S<t;S++){for(var U=r[S],V=r[S+1],x=i[S],D=i[S+1];U<V&&x<D;){var L=p[2*U],M=p[2*h+2*x];L===M?(E(S,p[2*U+1],M,p[2*h+2*x+1]),U++,x++):L<M?(N(S,p[2*U+1]),U++):(N(M,p[2*h+2*x+1]),x++)}for(;U<V;)N(S,p[2*U+1]),U++;for(;x<D;)N(p[2*h+2*x],p[2*h+2*x+1]),x++}return I}F.forEach((function(e){return z.set(q(e),e)}));var P=n(106),T=n(119),_=n(812);function J(e,t){return e.cosAngle<t}function R(e,t){return e.cosAngle>t}function G(e,t){var n=Object(o.b)(e.cosAngle),r=H.fwd,i=H.ortho;return Object(_.c)(r,e.position1,e.position0),n*(Object(k.e)(Object(k.d)(i,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}var H={edge:{position0:Object(I.e)(),position1:Object(I.e)(),faceNormal0:Object(I.e)(),faceNormal1:Object(I.e)(),componentIndex:0,cosAngle:0},ortho:Object(I.e)(),fwd:Object(I.e)()},K={v0:Object(I.e)(),v1:Object(I.e)(),v2:Object(I.e)()},Q={anglePlanar:4,angleSignificantEdge:35};function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(a.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return{data:b.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}(t),r=Z(n),a=[n.data.buffer],e.abrupt("return",{result:function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:W(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:W(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}(r,a),transferList:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var t=function(e,t,n){if(t&&n)return{faces:n,neighbors:C(n,e.count),vertices:e};var r=c(e.buffer,e.stride/4,{originalIndices:n}),i=C(r.indices,r.uniqueCount);return{faces:r.indices,neighbors:i,vertices:b.createView(r.buffer)}}(e.data,e.skipDeduplicate,e.originalIndices);return $.updateSettings(e.writerSettings),ee.updateSettings(e.writerSettings),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Q,i=e.vertices.position,a=e.vertices.componentIndex,c=Object(o.f)(r.anglePlanar),u=Object(o.f)(r.angleSignificantEdge),f=Math.cos(u),s=Math.cos(c),l=H.edge,v=l.position0,g=l.position1,d=l.faceNormal0,p=l.faceNormal1,h=function(e){for(var t=e.faces.length/3,n=e.vertices.position,r=e.faces,i=K.v0,a=K.v1,o=K.v2,c=new Float32Array(3*t),u=0;u<t;u++){var f=r[3*u+0],s=r[3*u+1],l=r[3*u+2];n.getVec(f,i),n.getVec(s,a),n.getVec(l,o),Object(k.g)(a,a,i),Object(k.g)(o,o,i),Object(k.d)(i,a,o),Object(k.o)(i,i),c[3*u+0]=i[0],c[3*u+1]=i[1],c[3*u+2]=i[2]}return c}(e),b=function(e){for(var t=e.faces.length/3,n=e.faces,r=e.neighbors,i=0,a=0;a<t;a++){var o=r[3*a+0],c=r[3*a+1],u=r[3*a+2],f=n[3*a+0],s=n[3*a+1],l=n[3*a+2];i+=-1===o||f<s?1:0,i+=-1===c||s<l?1:0,i+=-1===u||l<f?1:0}for(var v=new Int32Array(4*i),g=0,d=0;d<t;d++){var p=r[3*d+0],h=r[3*d+1],b=r[3*d+2],m=n[3*d+0],w=n[3*d+1],y=n[3*d+2];(-1===p||m<w)&&(v[g++]=m,v[g++]=w,v[g++]=d,v[g++]=p),(-1===h||w<y)&&(v[g++]=w,v[g++]=y,v[g++]=d,v[g++]=h),(-1===b||y<m)&&(v[g++]=y,v[g++]=m,v[g++]=d,v[g++]=b)}return v}(e),m=b.length/4,w=t.allocate(m),y=0,O=m,j=n.allocate(O),A=0,I=0,N=0,E=Object(T.f)(0,m),S=new Float32Array(m);Object(P.b)(S,(function(e,t,n){i.getVec(b[4*t+0],v),i.getVec(b[4*t+1],g),n[t]=Object(k.l)(v,g)})),E.sort((function(e,t){return S[t]-S[e]}));for(var U=new Array,V=new Array,x=0;x<m;x++){var D=E[x],L=S[D],M=b[4*D+0],W=b[4*D+1],B=b[4*D+2],F=b[4*D+3],q=-1===F;if(i.getVec(M,v),i.getVec(W,g),q)Object(k.r)(d,h[3*B+0],h[3*B+1],h[3*B+2]),Object(k.h)(p,d),l.componentIndex=a.get(M),l.cosAngle=Object(k.e)(d,p);else{if(Object(k.r)(d,h[3*B+0],h[3*B+1],h[3*B+2]),Object(k.r)(p,h[3*F+0],h[3*F+1],h[3*F+2]),l.componentIndex=a.get(M),l.cosAngle=Object(k.e)(d,p),R(l,s))continue;l.cosAngle<-.9999&&Object(k.h)(p,d)}I+=L,N++,q||J(l,f)?(t.write(w,y++,l),U.push(L)):G(l,c)&&(n.write(j,A++,l),V.push(L))}var z=new Float32Array(U.reverse()),C=new Float32Array(V.reverse());return{regular:{instancesData:t.trim(w,y),lodInfo:{lengths:z}},silhouette:{instancesData:n.trim(j,A),lodInfo:{lengths:C}},averageEdgeLength:I/N}}(t,$,ee)}var $=new x,ee=new D}}]);
//# sourceMappingURL=130.ef9acb42.chunk.js.map