(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[121],{945:function(e,t,a){"use strict";a.r(t),a.d(t,"previewCIMSymbol",(function(){return R}));for(var r=a(7),i=a.n(r),n=a(16),s=a(37),o=a(356),c=a(13),l=a(2),h=a(3),m=a(123),u=a(17),f=a(96),d=a(539),g=a(66),y=a(147),v=a(1056),p=a(32),b=a(1057),x=a(1127),C=a(1095),M=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,a){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var r=x.c.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t),i=Object(p.a)(r,3),n=i[0];return{size:[i[1],i[2]],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){var s=x.c.rasterizeSimpleLine(e.style,e.cap),o=Object(p.a)(s,3),c=o[0];return{size:[o[1],o[2]],image:new Uint32Array(c.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var l,h,m;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(l=x.a.fromSimpleMarker(e),m=Object(C.c)(l)):"CIMHatchFill"===e.type?(l=x.a.fromCIMHatchFill(e),h=new b.a(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(l=x.a.fromCIMInsidePolygon(e),h=new b.a(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=e,m=Object(C.c)(l)),m&&!a){var u=Object(C.a)(m),f=Object(p.a)(u,3),d=f[0],g=f[1],y=f[2];return d?{size:[g,y],image:new Uint32Array(d.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var v=x.a.rasterize(this._rasterizationCanvas,l,h,!a),M=Object(p.a)(v,5),O=M[0],z=M[1],w=M[2],j=M[3],k=M[4];return O?{size:[z,w],image:new Uint32Array(O.buffer),sdf:!1,simplePattern:!1,anchorX:j,anchorY:k}:null}},{key:"rasterizeImageResource",value:function(e,t,a,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var i=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?i.putImageData(a,0,0):(a.setAttribute("width","".concat(e,"px")),a.setAttribute("height","".concat(t,"px")),i.drawImage(a,0,0,e,t));var n,s=i.getImageData(0,0,e,t),o=new Uint8Array(s.data);if(r){var l,h=Object(c.a)(r);try{for(h.s();!(l=h.n()).done;){var m=l.value;if(m&&m.oldColor&&4===m.oldColor.length&&m.newColor&&4===m.newColor.length){var u=Object(p.a)(m.oldColor,4),f=u[0],d=u[1],g=u[2],v=u[3],b=Object(p.a)(m.newColor,4),x=b[0],C=b[1],M=b[2],O=b[3];if(f===x&&d===C&&g===M&&v===O)continue;for(var z=0;z<o.length;z+=4)f===o[z]&&d===o[z+1]&&g===o[z+2]&&v===o[z+3]&&(o[z]=x,o[z+1]=C,o[z+2]=M,o[z+3]=O)}}}catch(R){h.e(R)}finally{h.f()}}for(var w=0;w<o.length;w+=4)n=o[w+3]/255,o[w]=o[w]*n,o[w+1]=o[w+1]*n,o[w+2]=o[w+2]*n;var j=o,k=e,I=t,P=512;if(k>=P||I>=P){var S=k/I;S>1?(k=P,I=Math.round(P/S)):(I=P,k=Math.round(P*S)),j=new Uint8Array(4*k*I);var _=new Uint8ClampedArray(j.buffer);Object(y.j)(o,e,t,_,k,I,!1)}return{size:[e,t],image:new Uint32Array(j.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}(),O=function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,[{key:"rasterizeText",value:function(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var a=this._textRasterizationCanvas,r=a.getContext("2d");this.setFontProperties(r,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();var i,n=this.computeTextWidth(r,t),s=this.lineHeight*this.textLines.length;a.width=n,a.height=s,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=n*t.pixelRatio,this.renderedHeight=s*t.pixelRatio,this.fillStyle="rgba(".concat((i=t.color).slice(0,3).toString(),",").concat(i[3],")"),this.haloStyle=function(e){return"rgb(".concat(e.slice(0,3).toString(),")")}(t.halo.color);var o=this.renderedLineHeight,l=this.renderedHaloSize;this.setFontProperties(r,t);var h=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this.renderedWidth)+l,m=l,u=0,f=0;l>0&&this.renderHalo(r,h,m,u,f,t),f+=m,u+=h;var d,g=Object(c.a)(this.textLines);try{for(g.s();!(d=g.n()).done;){var y=d.value;r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(y,u,f),r.globalCompositeOperation="source-over",r.fillStyle=this.fillStyle,r.fillText(y,u,f),f+=o}}catch(C){g.e(C)}finally{g.f()}var v=r.getImageData(0,0,this.renderedWidth,this.renderedHeight),p=new Uint8Array(v.data);if(t.premultiplyColors)for(var b,x=0;x<p.length;x+=4)b=p[x+3]/255,p[x]=p[x]*b,p[x+1]=p[x+1]*b,p[x+2]=p[x+2]*b;return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"renderHalo",value:function(e,t,a,r,i,n){var s=this.renderedWidth,o=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=s,this._haloRasterizationCanvas.height=o;var c=this._haloRasterizationCanvas,l=c.getContext("2d");l.clearRect(0,0,s,o),this.setFontProperties(l,n),l.fillStyle=this.haloStyle,l.strokeStyle=this.haloStyle;var h=this.renderedHaloSize<3;l.lineJoin=h?"miter":"round",h?this.renderHaloEmulated(l,t,a):this.renderHaloNative(l,t,a),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(c,0,0,s,o,r,i,s,o),e.globalAlpha=1}},{key:"renderHaloEmulated",value:function(e,t,a){var r,i=this.renderedLineHeight,n=this.renderedHaloSize,s=Object(c.a)(this.textLines);try{for(s.s();!(r=s.n()).done;){var o,l=r.value,h=Object(c.a)(z);try{for(h.s();!(o=h.n()).done;){var m=Object(p.a)(o.value,2),u=m[0],f=m[1];e.fillText(l,t+n*u,a+n*f)}}catch(d){h.e(d)}finally{h.f()}a+=i}}catch(d){s.e(d)}finally{s.f()}}},{key:"renderHaloNative",value:function(e,t,a){var r,i=this.renderedLineHeight,n=this.renderedHaloSize,s=Object(c.a)(this.textLines);try{for(s.s();!(r=s.n()).done;){for(var o=r.value,l=2*n,h=0;h<5;h++){var m=.6+.1*h;e.lineWidth=m*l,e.strokeText(o,t,a)}a+=i}}catch(u){s.e(u)}finally{s.f()}}},{key:"setFontProperties",value:function(e,t){var a,r=t.font,i="".concat(r.style," ").concat(r.weight," ").concat(Object(s.g)(t.size*t.pixelRatio),"px ").concat(r.family,", sans-serif");switch(e.font=i,e.textBaseline="top",t.horizontalAlignment){case"left":a="left";break;case"right":a="right";break;case"center":a="center";break;default:a="left"}e.textAlign=a}},{key:"computeTextWidth",value:function(e,t){var a,r=0,i=Object(c.a)(this.textLines);try{for(i.s();!(a=i.n()).done;){var n=a.value;r=Math.max(r,e.measureText(n).width)}}catch(o){i.e(o)}finally{i.f()}var s=t.font;return("italic"===s.style||"oblique"===s.style||"string"==typeof s.weight&&("bold"===s.weight||"bolder"===s.weight)||"number"==typeof s.weight&&s.weight>600)&&(r+=.3*e.measureText("A").width),r+=2*this.parameters.halo.size,Math.round(r)}},{key:"computeLineHeight",value:function(){var e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)}}]),e}(),z=[],w=0;w<360;w+=22.5)z.push([Math.cos(Math.PI*w/180),Math.sin(Math.PI*w/180)]);var j,k;(k=j||(j={})).Legend="legend",k.Preview="preview";var I=function(e,t,a){if(e&&e.targetSize){var r;if(a){var i=Math.max(a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin);r=e.targetSize/Object(s.g)(i)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},P={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};function S(e,t,a,r){var i,n;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,a,r),n=Object(v.a)(e.cim,e.materialOverrides)):(i=e.materialHash,n=e.cim),{analyzedCIM:n,hash:i}}var _=new(function(){function e(t,a){Object(l.a)(this,e),this._spatialReference=t,this._avoidSDF=a,this._resourceCache=new Map,this._rasterizer=new M,this._textRasterizer=new O,this._pictureMarkerCache=new Map}return Object(h.a)(e,[{key:"rasterizeCIMSymbolAsync",value:function(){var e=Object(n.a)(i.a.mark((function e(t,a,r,n,s,o,c,l){var h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||(a?null!=a.centroid?"esriGeometryPolygon":Object(f.c)(a.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(t),e.next=3,this.analyzeCIMSymbol(t,a?function(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}(a.attributes):null,r,n,l);case 3:return h=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(h,a,n,s,o,c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r,i,n,s,o,c){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=Object(n.a)(i.a.mark((function e(t,a,r,n,s){var o,c,l,h,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],c=a?{geometryType:n,spatialReference:this._spatialReference,fields:a}:null,e.next=3,Object(v.b)(t.data,c,o,this._avoidSDF);case 3:for(Object(u.u)(s),h=0,m=o;h<m.length;h++)"CIMPictureMarker"!==(f=m[h]).cim.type&&"CIMPictureFill"!==f.cim.type&&"CIMPictureStroke"!==f.cim.type||(l||(l=[]),l.push(this.fetchPictureMarkerResource(f,s))),r&&"text"===f.type&&"string"==typeof f.text&&f.text.indexOf("[")>-1&&(f.text=Object(y.c)(r,f.text,f.cim.textCase));if(e.t0=l,!e.t0){e.next=9;break}return e.next=9,Object(u.b)(l);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e,this)})));return function(t,a,r,i,n){return e.apply(this,arguments)}}()},{key:"fetchPictureMarkerResource",value:function(){var e=Object(n.a)(i.a.mark((function e(t,a){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.materialHash,this._pictureMarkerCache.get(r)){e.next=6;break}return e.next=4,Object(g.default)(t.cim.url,{responseType:"image",signal:a&&a.signal});case 4:n=e.sent.data,this._pictureMarkerCache.set(r,n);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol",value:function(e,t,a,r,i,n){var s,o=[],l=Object(c.a)(e);try{for(l.s();!(s=l.n()).done;){var h=s.value;r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,n));var m=this._getRasterizedResource(h,t,a,r,i,n);if(m){var u=0,f=m.anchorX||0,d=m.anchorY||0,g=!1,v=0,p=0;if("esriGeometryPoint"===a){var b=I(r,h,null);if(v=Object(y.d)(h.offsetX,t,i,n)*b||0,p=Object(y.d)(h.offsetY,t,i,n)*b||0,"marker"===h.type)u=Object(y.d)(h.rotation,t,i,n)||0,g=!!h.rotateClockwise&&h.rotateClockwise;else if("text"===h.type){if(u=Object(y.d)(h.angle,t,i,n)||0,void 0!==h.horizontalAlignment)switch(h.horizontalAlignment){case"left":f=-.5;break;case"right":f=.5;break;default:f=0}if(void 0!==h.verticalAlignment)switch(h.verticalAlignment){case"top":d=.5;break;case"bottom":d=-.5;break;case"baseline":d=-.25;break;default:d=0}}}null!=m&&o.push({angle:u,rotateClockWise:g,anchorX:f,anchorY:d,offsetX:v,offsetY:p,rasterizedResource:m})}}}catch(x){l.e(x)}finally{l.f()}return this.getSymbolImage(o)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),a=t.getContext("2d"),r=0,i=0,n=0,o=0,c=[],l=0;l<e.length;l++){var h=e[l],m=h.rasterizedResource;if(m){var u=m.size,f=h.offsetX,g=h.offsetY,y=h.anchorX,v=h.anchorY,p=h.rotateClockWise||!1,b=h.angle,x=Object(s.g)(f)-u[0]*(.5+y),C=Object(s.g)(g)-u[1]*(.5+v),M=x+u[0],O=C+u[1];if(b){p&&(b=-b);var z=Math.sin(b*Math.PI/180),w=Math.cos(b*Math.PI/180),j=x*w-C*z,k=x*z+C*w,I=x*w-O*z,P=x*z+O*w,S=M*w-O*z,_=M*z+O*w,R=M*w-C*z,A=M*z+C*w;x=Math.min(j,I,S,R),C=Math.min(k,P,_,A),M=Math.max(j,I,S,R),O=Math.max(k,P,_,A)}r=x<r?x:r,i=C<i?C:i,n=M>n?M:n,o=O>o?O:o;var D=a.createImageData(m.size[0],m.size[1]);D.data.set(new Uint8ClampedArray(m.image.buffer));var H={offsetX:f,offsetY:g,rotateClockwise:p,angle:b,rasterizedImage:D,anchorX:y,anchorY:v};c.push(H)}}t.width=n-r,t.height=o-i;for(var F=-r,T=o,L=0;L<c.length;L++){var X=c[L],Y=this._imageDataToCanvas(X.rasterizedImage),U=X.rasterizedImage.width,W=X.rasterizedImage.height,E=F-U*(.5+X.anchorX),G=T-W*(.5-X.anchorY);if(X.angle){var J=(360-X.angle)*Math.PI/180;a.save(),a.translate(Object(s.g)(X.offsetX),-Object(s.g)(X.offsetY)),a.translate(F,T),a.rotate(J),a.translate(-F,-T),a.drawImage(Y,E,G),a.restore()}else a.drawImage(Y,E+Object(s.g)(X.offsetX),G-Object(s.g)(X.offsetY))}var N=new d.b({x:F/t.width-.5,y:T/t.height-.5});return{imageData:0!==t.width&&0!==t.height?a.getImageData(0,0,t.width,t.height):a.createImageData(1,1),anchorPosition:N}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,a=t.getContext("2d");return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var r=this._imageDataCanvas,i=r.getContext("2d");return r.width=t,r.height=a,i.drawImage(e,0,0,t,a),new Uint32Array(i.getImageData(0,0,t,a).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,a,r,i,n){var s,c,l,h;if("esriGeometryPolyline"===a||"esriGeometryPolygon"===a){var u=r&&r.style?r.style:j.Legend,f="esriGeometryPolyline"===a?P.stroke[u]:P.fill[u];if("line"===e.type){var d;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var g,v,p,b,x=Object(y.d)(e.width,t,i,n);return v=(g=this._getPictureResource(e,x)).image,p=g.width,b=g.height,this._rasterizePictureResource(e,v,p,b,f,x)}return null}s=(d=S(e,t,i,n)).analyzedCIM,l=d.hash,c=this._embedCIMLayerInVectorMarker(s,f)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=Object(y.d)(e.offsetX,t,i,n),e.cim.offsetY=Object(y.d)(e.offsetY,t,i,n),e.cim.rotation=Object(y.d)(e.rotation,t,i,n),e.cim.markerPlacement=e.markerPlacement,s=S(e,t,i,n).analyzedCIM,l=Object(m.b)(JSON.stringify(s)).toString(),c=this._embedCIMLayerInVectorMarker(s,f)}else{if("text"===e.type)return null;if("fill"===e.type){var C;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var M,O,z,w=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var k=this._getPictureResource(e,w);M=k.image,O=k.width,z=k.height}else{var _=S(e,t,i,n);s=_.analyzedCIM,l=_.hash;var R=this._rasterizer.rasterizeJSONResource(s,1,this._avoidSDF);M=R.image,O=R.size[0],z=R.size[1]}return this._rasterizePictureResource(e,M,O,z,f,null)}if("CIMSolidFill"!==e.cim.type)return null;s=(C=S(e,t,i,n)).analyzedCIM,l=C.hash,c=this._embedCIMLayerInVectorMarker(s,f)}}}else{if("text"===e.type)return h=this._rasterizeTextResource(e,t,r,i,n);var A=S(e,t,i,n);s=A.analyzedCIM,l=A.hash;var D=I(r,e,null);if("CIMPictureMarker"===e.cim.type){var H=Object(y.d)(e.size,t,i,n)*D,F=this._getPictureResource(e,H);return h={image:F.image,size:[F.width,F.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}Object(o.d)(s,D,{preserveOutlineWidth:!1}),c=s}l+=a,r&&(l+=JSON.stringify(r));var T=this._resourceCache;return T.has(l)?T.get(l):(h=this._rasterizer.rasterizeJSONResource(c,window.devicePixelRatio||1,this._avoidSDF),T.set(l,h),h)}},{key:"_rasterizeTextResource",value:function(e,t,a,r,i){var n=I(a,e,null),s=Object(y.d)(e.text,t,r,i);if(!s||0===s.length)return null;var o=Object(y.d)(e.fontName,t,r,i),c=Object(y.d)(e.style,t,r,i),l=Object(y.d)(e.weight,t,r,i),h=Object(y.d)(e.decoration,t,r,i),m=Object(y.d)(e.size,t,r,i)*n,u=Object(y.d)(e.horizontalAlignment,t,r,i),f=Object(y.d)(e.verticalAlignment,t,r,i),d=Object(y.b)(Object(y.d)(e.color,t,r,i)),g=Object(y.b)(Object(y.d)(e.outlineColor,t,r,i)),v={color:d,size:m,horizontalAlignment:u,verticalAlignment:f,font:{family:o,style:c,weight:l,decoration:h},halo:{size:Object(y.d)(e.outlineSize,t,r,i)||0,color:g,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,v)}},{key:"_rasterizePictureResource",value:function(e,t,a,r,i,n){var o=document.createElement("canvas"),l=o.getContext("2d");o.height=Object(s.g)(Math.max(Math.abs(i.frame.ymax-i.frame.ymin),n)),o.width=Object(s.g)(Math.abs(i.frame.xmax-i.frame.xmin));var h=l.createImageData(a,r);h.data.set(new Uint8ClampedArray(t.buffer));var m=this._imageDataToCanvas(h),u=l.createPattern(m,"repeat"),d=Math.cos((-e.cim.rotation||0)*Math.PI/180),g=Math.sin((-e.cim.rotation||0)*Math.PI/180);u.setTransform({m11:d,m12:g,m21:-g,m22:d,m41:Object(s.g)(e.cim.offsetX)||0,m42:Object(s.g)(e.cim.offsetY)||0});var y,v,p,b=i.canvasPaths;Object(f.g)(b)?(y=b.rings,l.fillStyle=u,v=l.fill,p=["evenodd"]):Object(f.h)(b)&&(y=b.paths,l.strokeStyle=u,l.lineWidth=n,v=l.stroke,y[0][0][1]=o.height/2,y[0][1][1]=o.height/2),l.beginPath();var x,C=Object(c.a)(y);try{for(C.s();!(x=C.n()).done;){var M=x.value,O=M?M.length:0;if(O>1){var z=M[0];l.moveTo(Object(s.g)(z[0]),Object(s.g)(z[1]));for(var w=1;w<O;++w)z=M[w],l.lineTo(Object(s.g)(z[0]),Object(s.g)(z[1]));l.closePath()}}}catch(I){C.e(I)}finally{C.f()}v.apply(l,p);var j=l.getImageData(0,0,o.width,o.height),k=new Uint8Array(j.data);return{size:[o.width,o.height],image:new Uint32Array(k.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t){var a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;var r=a.height/a.width,i=t?r>1?Object(s.g)(t):Object(s.g)(t)/r:a.width,n=t?r>1?Object(s.g)(t)*r:Object(s.g)(t):a.height;return{image:this._imageTo32Array(a,i,n),width:i,height:n}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var a=Object(f.g)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:a,symbolLayers:[e]}}]}}}]),e}())(null,!0);function R(e){return A.apply(this,arguments)}function A(){return(A=Object(n.a)(i.a.mark((function e(t){var a,r,n,c,l,h,m,u,f,d,g,y,v,p,b,x,C,M,O=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.length>1&&void 0!==O[1]?O[1]:{},r=a.size,n=a.maxSize,c=a.feature,l=a.fieldMap,h=a.geometryType,m=a.style,u=a.node,f=a.opacity,d=Object(o.c)(t),(g=Math.min(null!=r?r:d,null!=n?n:Object(s.h)(120)))!==d&&(t=t.clone(),Object(o.e)(t,g,{preserveOutlineWidth:!0})),y=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(y=1),e.next=7,_.rasterizeCIMSymbolAsync(t,c,l,h,{scaleFactor:y,style:m});case 7:return v=e.sent,(p=document.createElement("canvas")).width=v.imageData.width,p.height=v.imageData.height,p.getContext("2d").putImageData(v.imageData,0,0),b=p.width/y,x=p.height/y,null==r||null!=(null==a?void 0:a.scale)&&!(null==a?void 0:a.scale)||(b=(C=b/x)<=1?Math.ceil(g*C):g,x=C<=1?g:Math.ceil(g/C)),M=new Image(b,x),e.abrupt("return",(M.src=p.toDataURL(),null!=f&&(M.style.opacity="".concat(f)),u&&u.appendChild(M),M));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=121.ffefdc2c.chunk.js.map