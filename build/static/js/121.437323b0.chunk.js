(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[121],{962:function(e,a,t){"use strict";t.r(a),t.d(a,"previewSymbol2D",(function(){return m}));var l=t(10),n=t(20),i=t(17),s=t(36),c=t(272),o=t(156),r=t(421),u=document.createElement("canvas");function m(e,a){var t=null!=(null==a?void 0:a.size)?Object(s.g)(a.size):null,m=null!=(null==a?void 0:a.maxSize)?Object(s.g)(a.maxSize):null,p=null!=(null==a?void 0:a.opacity)?a.opacity:null,h=null!=(null==a?void 0:a.rotation)?a.rotation:null,d=Object(c.d)(e),v={shape:null,fill:null,stroke:d,offset:[0,0]};null!=d&&d.width&&(d.width=Math.min(d.width,80));var f=(null==d?void 0:d.width)||0,b=null!=t&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),y=0,g=0;switch(e.type){case"simple-marker":var w=e.style,j=Math.min(null!=t?t:Object(s.g)(e.size),m||120);switch(y=j,g=j,w){case"circle":v.shape={type:"circle",cx:0,cy:0,r:.5*j},b||(y+=f,g+=f);break;case"cross":v.shape={type:"path",path:[{command:"M",values:[0,.5*g]},{command:"L",values:[y,.5*g]},{command:"M",values:[.5*y,0]},{command:"L",values:[.5*y,g]}]};break;case"diamond":v.shape={type:"path",path:[{command:"M",values:[0,.5*g]},{command:"L",values:[.5*y,0]},{command:"L",values:[y,.5*g]},{command:"L",values:[.5*y,g]},{command:"Z",values:[]}]},b||(y+=f,g+=f);break;case"square":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[y,0]},{command:"L",values:[y,g]},{command:"L",values:[0,g]},{command:"Z",values:[]}]},b||(y+=f,g+=f);break;case"triangle":v.shape={type:"path",path:[{command:"M",values:[.5*y,0]},{command:"L",values:[y,g]},{command:"L",values:[0,g]},{command:"Z",values:[]}]},b||(y+=f,g+=f);break;case"x":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[y,g]},{command:"M",values:[y,0]},{command:"L",values:[0,g]}]};break;case"path":v.shape={type:"path",path:e.path||""},b||(y+=f,g+=f),b=!0}break;case"simple-line":var M=Math.min(null!=t?t:f,m||80),O=M>22?2*M:40;d.width=M,y=O,g=M,v.shape={type:"path",path:[{command:"M",values:[0,g]},{command:"L",values:[y,g]}]};break;case"picture-fill":case"simple-fill":y=Math.min(null!=t?t:22,m||120)+f,g=y,b=!0,v.shape="object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.isSquareFill?o.l.squareFill[0]:o.l.fill[0];break;case"picture-marker":var k=Object(s.g)(e.width),x=Object(s.g)(e.height),L=Math.max(k,x),z=k/x;k=z<=1?Math.ceil(L*z):L,x=z<=1?L:Math.ceil(L/z),y=Math.min(null!=t?t:k,m||120),g=Math.min(null!=t?t:x,m||120),v.shape={type:"image",x:-Math.round(y/2),y:-Math.round(g/2),width:y,height:g,src:e.url||""};break;case"text":var C=e,F=C.text||"Aa",q=C.font,S=Math.min(null!=t?t:Object(s.g)(q.size),m||120),E=function(e,a){var t=u.getContext("2d"),l=[];return a&&(a.weight&&l.push(a.weight),a.size&&l.push(a.size+"px"),a.family&&l.push(a.family)),t.font=l.join(" "),t.measureText(e).width}(F,{weight:q.weight,size:S,family:q.family}),Z=/[\uE600-\uE6FF]/.test(F);y=Z?S:E,g=S;var D=.25*function(e){if(0===e.length)return 0;if(e.length>2){var a=Object(s.h)(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return 2.8346456692913384*t*a;case"cm":return 28.346456692913385*t*a}}return parseFloat(e)}((q?S:0).toString());Z&&(D+=5),v.shape={type:"text",text:F,x:0,y:D,align:"middle",decoration:q&&q.decoration,rotated:C.rotated,kerning:C.kerning},v.font=q&&{size:S,style:q.style,decoration:q.decoration,weight:q.weight,family:q.family}}if(!v.shape)return Object(i.r)(new n.a("symbolPreview: renderPreviewHTML2D","symbol not supported."));var J=Object(c.b)(e),P=J,T=e.color,A=null;return P&&"pattern"===P.type&&T&&"picture-fill"!==e.type?A=Object(c.c)(P.src,T.toCss(!0)).then((function(e){return P.src=e,v.fill=P,v})):(v.fill=J,A=Object(i.s)(v)),A.then((function(e){var t=[[e]];if("object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){var n=.6*y;t.unshift([Object(l.a)(Object(l.a)({},e),{},{offset:[-n,0],fill:Object(o.a)(J,-.3)})]),t.push([Object(l.a)(Object(l.a)({},e),{},{offset:[n,0],fill:Object(o.a)(J,.3)})]),y+=2*n}return Object(r.a)(t,[y,g],{node:a&&a.node,scale:b,opacity:p,rotation:h})}))}}}]);
//# sourceMappingURL=121.437323b0.chunk.js.map