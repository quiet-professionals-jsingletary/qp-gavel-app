(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[76],{1028:function(t,e,n){"use strict";n.r(e),n.d(e,"calcite_tip",(function(){return L})),n.d(e,"calcite_tip_group",(function(){return N})),n.d(e,"calcite_tip_manager",(function(){return U}));var i=n(294),r=n(1055),a=n(1132),o=(n(1052),function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(i.next(t))}catch(e){a(e)}}function s(t){try{c(i.throw(t))}catch(e){a(e)}}function c(t){t.done?n(t.value):r(t.value).then(o,s)}c((i=i.apply(t,e||[])).next())}))}),s=function(t,e){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},c="header",l="heading",u="close",f="container",d="tip-container",p="tip-container--advancing",m="tip-container--retreating",h="pagination",b="page-position",g="page-next",y="page-previous",x="chevron-left",v="chevron-right",k="x",w="Tips",D="Tip",j="Close",T="Previous",O="Next",z="container",C="header",S="heading",I="close",A="image-frame",M="content",q="info",P="x",H="thumbnail",E="Close",L=function(){function t(t){var e=this;Object(i.l)(this,t),this.calciteTipDismiss=Object(i.f)(this,"calciteTipDismiss",7),this.dismissed=!1,this.nonDismissible=!1,this.hideTip=function(){e.dismissed=!0,e.calciteTipDismiss.emit()}}return t.prototype.renderHeader=function(){var t,e=this,n=e.heading,r=e.headingLevel,o=null===(t=e.el.closest("calcite-tip-manager"))||void 0===t?void 0:t.headingLevel,s=o?Object(a.b)(o+1):null,c=r||s||3;return n?Object(i.j)("header",{class:C},Object(i.j)(a.a,{class:S,level:c},n)):null},t.prototype.renderDismissButton=function(){var t=this,e=t.nonDismissible,n=t.hideTip,r=t.intlClose||E;return e?null:Object(i.j)("calcite-action",{class:I,icon:P,onClick:n,scale:"l",text:r})},t.prototype.renderImageFrame=function(){var t=this.el;return Object(r.d)(t,H)?Object(i.j)("div",{class:A},Object(i.j)("slot",{name:H})):null},t.prototype.renderInfoNode=function(){return Object(i.j)("div",{class:q},Object(i.j)("slot",null))},t.prototype.renderContent=function(){return Object(i.j)("div",{class:M},this.renderImageFrame(),this.renderInfoNode())},t.prototype.render=function(){return Object(i.j)(i.b,null,Object(i.j)("article",{class:z},this.renderHeader(),this.renderContent()),this.renderDismissButton())},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.i)(this)},enumerable:!1,configurable:!0}),t}();L.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:1rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}.container{padding:1rem}:host([dismissed]),:host([dismissed]) .container{display:none}:host([selected]) .container{border-style:none;margin:0;padding:0}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{margin-bottom:0.5rem}.header .heading{color:var(--calcite-ui-text-2);padding:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex}.info{padding-top:0;padding-bottom:0;padding-left:1rem;padding-right:1rem;width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}::slotted(p){margin-top:0}::slotted(a){outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}";var N=function(){function t(t){Object(i.l)(this,t)}return t.prototype.render=function(){return Object(i.j)("slot",null)},t}();N.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}::slotted(calcite-tip){border-style:none;max-width:34rem}";var U=function(){function t(t){var e=this;Object(i.l)(this,t),this.calciteTipManagerToggle=Object(i.f)(this,"calciteTipManagerToggle",7),this.closed=!1,this.observer=new MutationObserver((function(){return e.setUpTips()})),this.hideTipManager=function(){e.closed=!0,e.calciteTipManagerToggle.emit()},this.previousClicked=function(){e.previousTip()},this.nextClicked=function(){e.nextTip()},this.tipManagerKeyUpHandler=function(t){if(t.target===e.container)switch(t.key){case"ArrowRight":t.preventDefault(),e.nextTip();break;case"ArrowLeft":t.preventDefault(),e.previousTip();break;case"Home":t.preventDefault(),e.selectedIndex=0;break;case"End":t.preventDefault(),e.selectedIndex=e.total-1}},this.storeContainerRef=function(t){e.container=t}}return t.prototype.closedChangeHandler=function(){this.direction=null,this.calciteTipManagerToggle.emit()},t.prototype.selectedChangeHandler=function(){this.showSelectedTip(),this.updateGroupTitle()},t.prototype.connectedCallback=function(){this.setUpTips(),this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.disconnectedCallback=function(){this.observer.disconnect()},t.prototype.nextTip=function(){return o(this,void 0,void 0,(function(){var t;return s(this,(function(e){return this.direction="advancing",t=this.selectedIndex+1,this.selectedIndex=(t+this.total)%this.total,[2]}))}))},t.prototype.previousTip=function(){return o(this,void 0,void 0,(function(){var t;return s(this,(function(e){return this.direction="retreating",t=this.selectedIndex-1,this.selectedIndex=(t+this.total)%this.total,[2]}))}))},t.prototype.setUpTips=function(){var t=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=t.length,0!==this.total){var e=this.el.querySelector("calcite-tip[selected]");this.tips=t,this.selectedIndex=e?t.indexOf(e):0,t.forEach((function(t){t.nonDismissible=!0})),this.showSelectedTip(),this.updateGroupTitle()}},t.prototype.showSelectedTip=function(){var t=this;this.tips.forEach((function(e,n){var i=t.selectedIndex===n;e.selected=i,e.hidden=!i}))},t.prototype.updateGroupTitle=function(){var t=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=(null===t||void 0===t?void 0:t.groupTitle)||this.intlDefaultTitle||w},t.prototype.renderPagination=function(){var t=Object(r.h)(this.el),e=this,n=e.selectedIndex,a=e.tips,o=e.total,s=e.intlNext,c=e.intlPrevious,l=e.intlPaginationLabel,u=s||O,f=c||T,d=l||D;return a.length>1?Object(i.j)("footer",{class:h},Object(i.j)("calcite-action",{class:y,icon:"ltr"===t?x:v,onClick:this.previousClicked,text:f}),Object(i.j)("span",{class:b},d+" "+(n+1)+"/"+o),Object(i.j)("calcite-action",{class:g,icon:"ltr"===t?v:x,onClick:this.nextClicked,text:u})):null},t.prototype.render=function(){var t,e=this,n=e.closed,r=e.direction,o=e.headingLevel,s=e.groupTitle,h=e.selectedIndex,b=e.intlClose,g=e.total,y=b||j;return 0===g?null:Object(i.j)("section",{"aria-hidden":n.toString(),class:f,hidden:n,onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef,tabIndex:0},Object(i.j)("header",{class:c},Object(i.j)(a.a,{class:l,level:o||2},s),Object(i.j)("calcite-action",{class:u,icon:k,onClick:this.hideTipManager,text:y})),Object(i.j)("div",{class:(t={},t[d]=!0,t[p]=!n&&"advancing"===r,t[m]=!n&&"retreating"===r,t),key:h,tabIndex:0},Object(i.j)("slot",null)),this.renderPagination())},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{closed:["closedChangeHandler"],selectedIndex:["selectedChangeHandler"]}},enumerable:!1,configurable:!0}),t}();U.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;--calcite-tip-manager-height:18vh;--calcite-tip-max-width:540px}:host([closed]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header .heading{padding-left:0.5rem;padding-right:0.5rem}.container{overflow:hidden;position:relative;padding-top:0.5rem;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;min-height:150px}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.tip-container{margin-top:0.25rem;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:150ms;animation-duration:150ms;-webkit-animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);height:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(calcite-tip){border-style:none;max-width:var(--calcite-tip-max-width)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0;padding-right:0}.page-position{font-size:var(--calcite-font-size--2);line-height:1rem;margin-top:0;margin-bottom:0;margin-left:0.5rem;margin-right:0.5rem}@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}"},1052:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},1055:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return x})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return w})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return k})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return D}));var i=n(1052),r=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(i.next(t))}catch(e){a(e)}}function s(t){try{c(i.throw(t))}catch(e){a(e)}}function c(t){t.done?n(t.value):r(t.value).then(o,s)}c((i=i.apply(t,e||[])).next())}))},a=function(t,e){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},o=function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},s={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"};function c(t){return t?t.id=t.id||t.tagName.toLowerCase()+"-"+Object(i.a)():""}function l(t){return Array.isArray(t)?t:Array.from(t)}function u(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var n,i=e.name,r=e.value;return Object.assign(Object.assign({},t),((n={})[i]=r,n))}),{})}function f(t){return y("."+s.darkTheme,t)?"dark":"light"}function d(t){return p(t,"dir","ltr",!0)}function p(t,e,n,i){void 0===i&&(i=!1);var r="["+e+"]",a=i?y(r,t):t.closest(r);return a?a.getAttribute(e):n}function m(t){return t.getRootNode()}function h(t){return t.host||null}function b(t,e){return function t(n,i){if(!n)return i;n.assignedSlot&&(n=n.assignedSlot);var r=m(n),a=Array.from(r.querySelectorAll(e)).filter((function(t){return!i.includes(t)}));i=o(o([],i),a);var s=h(r);return s?t(s,i):i}(t,[])}function g(t,e){return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var i=m(n),r=i.querySelector(e),a=h(i);return r||(a?t(a):null)}(t)}function y(t,e){return void 0===e&&(e=this),function e(n){if(!n||n===document||n===window)return null;var i=n.closest(t);return i||e(n.getRootNode().host)}(e)}function x(t){return r(this,void 0,void 0,(function(){return a(this,(function(e){return t?("function"===typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function v(t,e,n){var i='[slot="'+e+'"]';return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var i=Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t}));var r=null===n||void 0===n?void 0:n.selector;return r?i.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return o(o([],t),e)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null;var r=null===n||void 0===n?void 0:n.selector;return r?i.querySelector(r):i}(t,i,n)}function k(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function w(t,e){return t.contains(e)}function D(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}},1132:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var i=n(294);function r(t){return Math.min(Math.max(Math.ceil(t),1),6)}var a=function(t,e){var n="h"+t.level;return delete t.level,Object(i.j)(n,Object.assign({},t),e)}}}]);
//# sourceMappingURL=76.8a1a9722.chunk.js.map