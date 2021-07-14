(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[103,134],{1160:function(e,t,i){"use strict";i.d(t,"a",(function(){return G}));var a=i(2),n=i(3),s=i(5),r=i(6),c=i(0),o=(i(16),i(4)),h=i(13),l=(i(17),i(1)),p=i(8),v=(i(12),i(19),i(20),i(36)),u=i(78),d=i(38),y=i(27),b=i(11),f=i(141),g=i(476),_=i(600),m=i(33),O=i(163),k=i(606),j=h.a.getLogger("esri.views.interactive.GraphicManipulator"),G=function(e){Object(s.a)(i,e);var t=Object(r.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).layer=null,n.interactive=!0,n.selectable=!1,n.grabbable=!0,n.dragging=!1,n.cursor=null,n.events=new u.a.EventEmitter,n._circleCollisionCache=null,n._graphicSymbolChangedHandle=null,n._originalSymbol=null,n}return Object(n.a)(i,[{key:"graphic",set:function(e){"mesh"!==Object(o.i)(e.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()):j.error("Mesh geometries are not supported")}},{key:"elevationInfo",get:function(){var e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=Object(O.e)(this.graphic),i=e?e.offset:0;return new g.a({mode:t,offset:i})}},{key:"focusedSymbol",set:function(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",set:function(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}},{key:"hovering",set:function(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}},{key:"selected",set:function(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||this._get("grabbing")}},{key:"destroy",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}},{key:"intersectionDistance",value:function(e){var t=this.graphic;if(!1===t.visible)return null;var i=t.geometry;if(Object(o.j)(i))return null;var a=this._get("focusedSymbol"),n=Object(o.k)(a)?a:t.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,e,i,n):this._intersectDistance3D(this.view,e,t)}},{key:"attach",value:function(){this.attachSymbolChanged(),Object(o.k)(this.layer)&&this.layer.add(this.graphic)}},{key:"detach",value:function(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(o.k)(this.layer)&&this.layer.remove(this.graphic)}},{key:"attachSymbolChanged",value:function(){var e=this;this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(function(t){Object(o.k)(t)&&t!==e.focusedSymbol&&t!==e._originalSymbol&&(e._originalSymbol=t,e._focused&&Object(o.k)(e.focusedSymbol)&&(e.graphic.symbol=e.focusedSymbol))}),!0)}},{key:"detachSymbolChanged",value:function(){Object(o.k)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}},{key:"_updateGraphicSymbol",value:function(){this.graphic.symbol=this._focused&&Object(o.k)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}},{key:"_resetGraphicSymbol",value:function(){this.graphic.symbol=this._originalSymbol}},{key:"_intersectDistance2D",value:function(e,t,i,a){if(a=a||Object(_.e)(i),Object(o.j)(a))return null;var n=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==a.type)return Object(k.b)(t,i,e)?1:null;if(Object(o.j)(n)||!n.originalPoint.equals(i)){var s=i,r=e.spatialReference;if(Object(f.b)(s.spatialReference,r)){var c=Object(f.j)(s,r);n={originalPoint:s.clone(),mapPoint:c,radiusPx:Object(d.g)(a.size)},this._circleCollisionCache=n}}if(Object(o.k)(n)){var h=Object(d.i)(t,w),l=e.toScreen(n.mapPoint),p=n.radiusPx,v=l.x+Object(d.g)(a.xoffset),u=l.y-Object(d.g)(a.yoffset);return Object(m.j)(h,[v,u])<p*p?1:null}return null}},{key:"_intersectDistance3D",value:function(e,t,i){var a=e.toMap(t,{include:[i]});return a&&Object(f.n)(a,x,e.renderSpatialReference)?Object(b.n)(x,e.state.camera.eye):null}}]),i}(v.a);Object(c.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],G.prototype,"graphic",null),Object(c.a)([Object(l.b)({readOnly:!0})],G.prototype,"elevationInfo",null),Object(c.a)([Object(l.b)({constructOnly:!0,nonNullable:!0})],G.prototype,"view",void 0),Object(c.a)([Object(l.b)({value:null})],G.prototype,"focusedSymbol",null),Object(c.a)([Object(l.b)({constructOnly:!0})],G.prototype,"layer",void 0),Object(c.a)([Object(l.b)()],G.prototype,"interactive",void 0),Object(c.a)([Object(l.b)()],G.prototype,"selectable",void 0),Object(c.a)([Object(l.b)()],G.prototype,"grabbable",void 0),Object(c.a)([Object(l.b)({value:!1})],G.prototype,"grabbing",null),Object(c.a)([Object(l.b)()],G.prototype,"dragging",void 0),Object(c.a)([Object(l.b)()],G.prototype,"hovering",null),Object(c.a)([Object(l.b)({value:!1})],G.prototype,"selected",null),Object(c.a)([Object(l.b)()],G.prototype,"cursor",void 0),G=Object(c.a)([Object(p.a)("esri.views.interactive.GraphicManipulator")],G);var x=Object(y.e)(),w=Object(d.f)()},1230:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(3),s=i(5),r=i(6),c=i(0),o=(i(16),i(22)),h=i(4),l=(i(13),i(17),i(1)),p=i(8),v=(i(12),i(19),i(20),i(78)),u=i(51),d=i(25),y=i(48),b=i(93),f=i(611),g=i(1160),_=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-click"},m=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-double-click"},O=function(){function e(t,i,n,s,r,c,o,h,l,p){Object(a.a)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=s,this.y=r,this.dx=c,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start"}return Object(n.a)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),k=function(){function e(t,i,n,s,r,c,o,h,l,p){Object(a.a)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=s,this.y=r,this.dx=c,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move"}return Object(n.a)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),j=function(){function e(t,i,n,s,r,c,o,h,l,p){Object(a.a)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=s,this.y=r,this.dx=c,this.dy=o,this.totalDx=h,this.totalDy=l,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop"}return Object(n.a)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),G=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"},x=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"},w=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"},S=function e(t,i,n,s,r){Object(a.a)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"},H=function(e){Object(s.a)(i,e);var t=Object(r.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e))._activeGraphic=null,n._dragEvent=null,n._handles=new u.a,n._hoverGraphic=null,n._initialDragGeometry=null,n._viewHandles=new u.a,n._manipulators=[],n.type="graphic-mover",n.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},n.enableMoveAllGraphics=!1,n.graphics=[],n.view=null,n}return Object(n.a)(i,[{key:"initialize",value:function(){var e=this;this._setUpManipulators(),this._handles.add([Object(d.d)(this,["graphics","graphics.length"],(function(){e._setUpManipulators()})),Object(d.j)(this,"view.ready",(function(){e._viewHandles.add([e.view.on("immediate-click",(function(t){return e._clickHandler(t)}),y.b.TOOL),e.view.on("double-click",(function(t){return e._doubleClickHandler(t)}),y.b.TOOL),e.view.on("pointer-down",(function(t){return e._pointerDownHandler(t)}),y.b.TOOL),e.view.on("pointer-move",(function(t){return e._pointerMoveHandler(t)}),y.b.TOOL),e.view.on("pointer-up",(function(t){return e._pointerUpHandler(t)}),y.b.TOOL),e.view.on("drag",(function(t){return e._dragHandler(t)}),y.b.TOOL),e.view.on("key-down",(function(t){return e._keyDownHandler(t)}),y.b.TOOL)])}))])}},{key:"destroy",value:function(){this.reset(),this._manipulators.forEach((function(e){return e.destroy()})),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}},{key:"state",get:function(){var e=!!this.get("view.ready"),t=!!this.get("graphics.length"),i=this._activeGraphic;return e&&t?i?"moving":"active":e?"ready":"disabled"}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}},{key:"updateGeometry",value:function(e,t){var i=this.graphics[e];i&&i.set("geometry",t)}},{key:"_clickHandler",value:function(e){var t=this._findTargetGraphic(Object(b.a)(e));if(t){var i=new _(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}},{key:"_doubleClickHandler",value:function(e){var t=this._findTargetGraphic(Object(b.a)(e));if(t){var i=new m(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}},{key:"_pointerDownHandler",value:function(e){var t=this._findTargetGraphic(Object(b.a)(e));if(t){this._activeGraphic=t;var i=e.x,a=e.y,n=new w(t,this.graphics.indexOf(t),i,a,e);this.emit("graphic-pointer-down",n),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(n)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(e){if(this._activeGraphic){var t=e.x,i=e.y,a=this.graphics.indexOf(this._activeGraphic),n=new S(this._activeGraphic,a,t,i,e);this.emit("graphic-pointer-up",n),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(n)}}},{key:"_pointerMoveHandler",value:function(e){if(!this._dragEvent){var t=this._findTargetGraphic(Object(b.a)(e));if(t){var i=e.x,a=e.y;if(this._hoverGraphic){if(this._hoverGraphic===t)return;var n=this.graphics.indexOf(this._hoverGraphic),s=new x(this.graphics[n],n,i,a,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",s),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(s)}var r=this.graphics.indexOf(t),c=new G(t,r,i,a,e);return this._hoverGraphic=t,this.emit("graphic-pointer-over",c),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(c))}if(this._hoverGraphic){var o=e.x,h=e.y,l=this.graphics.indexOf(this._hoverGraphic),p=new x(this.graphics[l],l,o,h,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",p),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(p)}}}},{key:"_dragHandler",value:function(e){var t=this;if(("start"===e.action||this._dragEvent)&&this._activeGraphic&&this._activeGraphic.geometry){e.stopPropagation();var i=e.action,a=e.x,n=e.y,s=this.graphics.indexOf(this._activeGraphic),r=this._activeGraphic.geometry,c=this._dragEvent?a-this._dragEvent.x:0,h=this._dragEvent?n-this._dragEvent.y:0,l=a-e.origin.x,p=n-e.origin.y;if(this._activeGraphic.geometry=Object(f.a)(r,c,h,this.view),this.enableMoveAllGraphics&&this.graphics.forEach((function(e){e!==t._activeGraphic&&(e.geometry=Object(f.a)(e.geometry,c,h,t.view))})),this._dragEvent=e,"start"===i){this._initialDragGeometry=Object(o.a)(r);var v=new O(this._activeGraphic,this.graphics,s,a,n,c,h,l,p,e);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",r)}else if("update"===i){var u=new k(this._activeGraphic,this.graphics,s,a,n,c,h,l,p,e);this.emit("graphic-move",u),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(u),u.defaultPrevented&&this._activeGraphic.set("geometry",r)}else{var d=new j(this._activeGraphic,this.graphics,s,a,n,c,h,l,p,e);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",d),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(d),d.defaultPrevented&&this.graphics[s].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(e){"a"!==e.key&&"d"!==e.key&&"n"!==e.key||"moving"!==this.state||e.stopPropagation()}},{key:"_findTargetGraphic",value:function(e){var t=null,i=Number.MAX_VALUE;return this._manipulators.forEach((function(a){var n=a.intersectionDistance(e);Object(h.k)(n)&&n<i&&(i=n,t=a.graphic)})),t}},{key:"_setUpManipulators",value:function(){var e=this.graphics,t=this.view;this._manipulators.forEach((function(e){return e.destroy()})),this._manipulators=null!=e&&e.length?e.map((function(e){return new g.a({graphic:e,view:t})})):[]}}]),i}(v.a.EventedAccessor);Object(c.a)([Object(l.b)()],H.prototype,"_activeGraphic",void 0),Object(c.a)([Object(l.b)({readOnly:!0})],H.prototype,"type",void 0),Object(c.a)([Object(l.b)()],H.prototype,"callbacks",void 0),Object(c.a)([Object(l.b)()],H.prototype,"enableMoveAllGraphics",void 0),Object(c.a)([Object(l.b)()],H.prototype,"graphics",void 0),Object(c.a)([Object(l.b)({readOnly:!0})],H.prototype,"state",null),Object(c.a)([Object(l.b)()],H.prototype,"view",void 0);var M=H=Object(c.a)([Object(p.a)("esri.views.draw.support.GraphicMover")],H);t.default=M},1399:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),s=i(15),r=i(10),c=i(31),o=i(14),h=i(3),l=i(5),p=i(6),v=i(2),u=i(0),d=(i(16),i(4)),y=(i(13),i(17),i(1)),b=i(8),f=(i(12),i(19),i(20),i(24)),g=i(43),_=i(156),m=(i(71),i(78)),O=i(116),k=i(74),j=i(51),G=i(25),x=i(48),w=i(573),S=i(753),H=i(134),M=i(388),E=i(351),C=i(611),D=i(574),I=i(1230),V=function e(t,i,a){Object(v.a)(this,e),this.graphic=t,this.mover=i,this.selected=a,this.type="reshape-start"},P=function e(t,i,a){Object(v.a)(this,e),this.graphic=t,this.mover=i,this.selected=a,this.type="reshape"},R=function e(t,i,a){Object(v.a)(this,e),this.graphic=t,this.mover=i,this.selected=a,this.type="reshape-stop"},A=function e(t,i,a){Object(v.a)(this,e),this.mover=t,this.dx=i,this.dy=a,this.type="move-start"},T=function e(t,i,a){Object(v.a)(this,e),this.mover=t,this.dx=i,this.dy=a,this.type="move"},z=function e(t,i,a){Object(v.a)(this,e),this.mover=t,this.dx=i,this.dy=a,this.type="move-stop"},L=function e(t){Object(v.a)(this,e),this.added=t,this.type="vertex-select"},U=function e(t){Object(v.a)(this,e),this.removed=t,this.type="vertex-deselect"},F=function e(t,i,a,n){Object(v.a)(this,e),this.added=t,this.graphic=i,this.oldGraphic=a,this.vertices=n,this.type="vertex-add"},q=function e(t,i,a,n){Object(v.a)(this,e),this.removed=t,this.graphic=i,this.oldGraphic=a,this.vertices=n,this.type="vertex-remove"},N={removeVertex:["Backspace","Delete"]},W=w.b.reshapeGraphics,J={vertices:{default:new O.default({style:"circle",size:W.vertex.size,color:W.vertex.color,outline:{color:W.vertex.outlineColor,width:1}}),hover:new O.default({style:"circle",size:W.vertex.hoverSize,color:W.vertex.hoverColor,outline:{color:W.vertex.hoverOutlineColor,width:1}}),selected:new O.default({style:"circle",size:W.selected.size,color:W.selected.color,outline:{color:W.selected.outlineColor,width:1}})},midpoints:{default:new O.default({style:"circle",size:W.midpoint.size,color:W.midpoint.color,outline:{color:W.midpoint.outlineColor,width:1}}),hover:new O.default({style:"circle",size:W.midpoint.size,color:W.midpoint.color,outline:{color:W.midpoint.outlineColor,width:1}})}},B=function(e){Object(l.a)(i,e);var t=Object(p.a)(i);function i(e){var a;return Object(v.a)(this,i),(a=t.call(this,e))._handles=new j.a,a._graphicAttributes={esriSketchTool:"box"},a._mover=null,a._snappingTask=null,a._stagedVertex=null,a._totalDx=0,a._totalDy=0,a._viewHandles=new j.a,a.callbacks={onReshapeStart:function(){},onReshape:function(){},onReshapeStop:function(){},onMoveStart:function(){},onMove:function(){},onMoveStop:function(){},onGraphicClick:function(){}},a.enableMidpoints=!0,a.graphic=null,a.handleGraphics=[],a.layer=null,a.midpointGraphics=[],a.midpointSymbol=new O.default({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),a.selectedHandles=[],a.snappingManager=null,a.type="reshape",a.view=null,a}return Object(h.a)(i,[{key:"initialize",value:function(){var e=this;this._setup(),this._handles.add([Object(G.j)(this,"view.ready",(function(){var t=e.layer,i=e.view;Object(D.a)(i,t),e._viewHandles.add([i.on("key-down",(function(t){return e._keyDownHandler(t)}),x.b.TOOL)])})),Object(G.c)(this,"graphic",(function(){return e.refresh()})),Object(G.c)(this,"layer",(function(t,i){i&&(e._clearSelection(),e._resetGraphics(i)),e.refresh()})),Object(G.c)(this,"enableMidpoints",(function(){e.refresh()}))])}},{key:"destroy",value:function(){this._reset(),this._mover&&this._mover.destroy(),this._mover=null,this._handles.removeAll(),this._handles=null,this._viewHandles.removeAll(),this._viewHandles=null}},{key:"state",get:function(){var e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"}},{key:"symbols",set:function(e){var t=e||{},i=t.midpoints,a=void 0===i?J.midpoints:i,n=t.vertices,s=void 0===n?J.vertices:n;this._set("symbols",{midpoints:a,vertices:s})}},{key:"isUIGraphic",value:function(e){var t=[];return this.graphic&&t.push(this.graphic),t.concat(this.handleGraphics,this.midpointGraphics),t.length&&t.includes(e)}},{key:"refresh",value:function(){this._reset(),this._setup()}},{key:"reset",value:function(){this.graphic=null}},{key:"clearSelection",value:function(){this._clearSelection()}},{key:"removeSelectedHandles",value:function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)}},{key:"_setup",value:function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())}},{key:"_setUpGeometryHelper",value:function(){var e=this.graphic.geometry;Object(d.j)(e)||"polygon"!==e.type&&"polyline"!==e.type||(this._geometryHelper=new M.a(H.c.fromGeometry(e,"local"),e.type))}},{key:"_saveSnappingContextForHandle",value:function(e,t){var i;this._snappingContext=new E.a({geometry:this._geometryHelper,elevationInfo:{mode:"on-the-ground",offset:0},pointer:(null==(i=t.viewEvent)?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new S.a,vertexHandle:this._getVertexFromEditGeometry(e)})}},{key:"_reset",value:function(){this._clearSelection(),this._resetGraphicStateVars(),this._resetGraphics(),this._resetSnappingStateVars(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}},{key:"_resetSnappingStateVars",value:function(){var e;Object(d.k)(this.snappingManager)&&this.snappingManager.doneSnapping(),null==(e=this._geometryHelper)||e.destroy(),this._geometryHelper=null,this._snappingTask=Object(d.a)(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}},{key:"_resetGraphicStateVars",value:function(){this._totalDx=0,this._totalDy=0}},{key:"_resetGraphics",value:function(e){var t=e||this.layer;t&&(t.removeMany(this.handleGraphics),t.removeMany(this.midpointGraphics)),this.handleGraphics.forEach((function(e){return e.destroy()})),this.midpointGraphics.forEach((function(e){return e.destroy()})),this._set("handleGraphics",[]),this._set("midpointGraphics",[]),this._set("selectedHandles",[])}},{key:"_setupGraphics",value:function(){var e=Object(d.q)(this.graphic.geometry),t=Object(_.b)(e.clone());if("polygon"===e.type){var i,a=Object(o.a)(t);try{for(a.s();!(i=a.n()).done;){var n=i.value,s=n[n.length-1];n[0][0]===s[0]&&n[0][1]===s[1]&&n.length>2&&n.pop()}}catch(r){a.e(r)}finally{a.f()}}this._set("handleGraphics",this._createHandleGraphics(t)),this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(t)),this._saveRelatedIndices(this.handleGraphics),this.layer.addMany(this.midpointGraphics),this.layer.addMany(this.handleGraphics)}},{key:"_createHandleGraphics",value:function(e){var t=this._graphicAttributes,i=this.symbols,a=this.view.spatialReference,n=[];return null==e||e.forEach((function(e,s){e.forEach((function(e,o){var h,l=Object(c.a)(e,2),p=l[0],v=l[1];n.push(new k.a({geometry:new g.a({x:p,y:v,spatialReference:a}),symbol:null==i||null==(h=i.vertices)?void 0:h.default,attributes:Object(r.a)(Object(r.a)({},t),{},{pathIndex:s,pointIndex:o})}))}))})),n}},{key:"_createMidpointGraphics",value:function(e){var t=this,i=this._graphicAttributes,a=this.symbols,n=this.view.spatialReference,s=[];return null==e||e.forEach((function(e,o){e.forEach((function(h,l){var p=Object(c.a)(h,2),v=p[0],u=p[1],y=e[l+1]?l+1:0;if("polygon"===Object(d.i)(t.graphic.geometry,"type")||0!==y){var b=Object(c.a)(e[y],2),f=b[0],m=b[1],O=Object(_.d)([v,u],[f,m]),j=Object(c.a)(O,2),G=j[0],x=j[1];s.push(new k.a({geometry:new g.a({x:G,y:x,spatialReference:n}),symbol:a.midpoints.default,attributes:Object(r.a)(Object(r.a)({},i),{},{pathIndex:o,pointIndexStart:l,pointIndexEnd:y})}))}}))})),s}},{key:"_saveRelatedIndices",value:function(e){if(e)for(var t=e.map((function(e){var t=e.geometry;return{x:t.x,y:t.y}})),i=0;i<t.length;i++){for(var a=[],n=0;n<t.length;n++)if(i!==n){var s=t[i],r=t[n];s.x===r.x&&s.y===r.y&&a.push(n)}e[i].attributes.relatedGraphicIndices=a}}},{key:"_setupMover",value:function(){var e=this;this._mover=new I.default({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.midpointGraphics,this.graphic),view:this.view,callbacks:{onGraphicClick:function(t){return e._onGraphicClickCallback(t)},onGraphicMoveStart:function(t){return e._onGraphicMoveStartCallback(t)},onGraphicMove:function(t){return e._onGraphicMoveCallback(t)},onGraphicMoveStop:function(t){return e._onGraphicMoveStopCallback(t)},onGraphicPointerOver:function(t){return e._onGraphicPointerOverCallback(t)},onGraphicPointerOut:function(t){return e._onGraphicPointerOutCallback(t)}}})}},{key:"_onGraphicClickCallback",value:function(e){e.viewEvent.stopPropagation();var t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(2===e.viewEvent.button)return;var i=this.graphic.clone(),a=this._createHandleFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,a)}else this._isHandle(t)&&(e.viewEvent.stopPropagation(),2===e.viewEvent.button?this._removeVertex(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedHandles.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}},{key:"_onGraphicMoveStartCallback",value:function(e){var t=e.graphic,i=e.dx,a=e.dy;if(this._resetGraphicStateVars(),this._resetSnappingStateVars(),t===this.graphic)return this.handleGraphics.forEach((function(e){return e.visible=!1})),this.midpointGraphics.forEach((function(e){return e.visible=!1})),this._clearSelection(),void this._emitMoveStartEvent(i,a);if(this._isMidpoint(t)){this._clearSelection();var n=this.graphic.clone(),s=this._createHandleFromMidpoint(t);this._emitVertexAddEvent([t],n,s),this._addToSelection(t)}else this.selectedHandles.includes(t)||(this._clearSelection(),this._addToSelection(t));this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._onHandleMove(t,i,a,e),this._emitReshapeStartEvent(t)}},{key:"_onGraphicMoveCallback",value:function(e){var t=e.graphic,i=e.dx,a=e.dy;this._totalDx+=i,this._totalDy+=a,t===this.graphic?(this._syncGraphicsWithGeometry(),this._emitMoveEvent(i,a)):(this._onHandleMove(t,i,a,e),this._emitReshapeEvent(t))}},{key:"_onGraphicMoveStopCallback",value:function(e){var t=e.graphic,i=e.dx,a=e.dy;if(this._totalDx+=i,this._totalDy+=a,t===this.graphic){this._syncGraphicsWithGeometry();var n,s=Object(o.a)([].concat(this.handleGraphics,this.midpointGraphics));try{for(s.s();!(n=s.n()).done;){n.value.visible=!0}}catch(r){s.e(r)}finally{s.f()}this._emitMoveStopEvent(),this._resetGraphicStateVars()}else this._onHandleMove(t,i,a,e),this._resetSnappingStateVars(),this._isMidpoint(t)&&this.refresh(),this._emitReshapeStopEvent(t),this._resetGraphicStateVars()}},{key:"_syncGraphicsWithGeometry",value:function(){var e=this.graphic.geometry,t="polyline"===e.type?e.paths:e.rings;this._updateHandleGraphicLocations(t),this._updateMidpointGraphicLocations(t)}},{key:"_updateHandleGraphicLocations",value:function(e){var t,i=Object(o.a)(this.handleGraphics);try{for(i.s();!(t=i.n()).done;){var a=t.value,n=a.attributes,s=n.pathIndex,r=n.pointIndex,h=Object(c.a)(e[s][r],2),l=h[0],p=h[1];a.set("geometry",new g.a(l,p,this.view.spatialReference))}}catch(v){i.e(v)}finally{i.f()}}},{key:"_updateMidpointGraphicLocations",value:function(e){var t,i=Object(o.a)(this.midpointGraphics);try{for(i.s();!(t=i.n()).done;){var a=t.value,n=a.attributes,s=n.pathIndex,r=n.pointIndexStart,h=n.pointIndexEnd,l=Object(c.a)(e[s][r],2),p=l[0],v=l[1],u=Object(c.a)(e[s][h],2),d=u[0],y=u[1],b=Object(_.d)([p,v],[d,y]),f=Object(c.a)(b,2),m=f[0],O=f[1];a.geometry=new g.a({x:m,y:O,spatialReference:this.view.spatialReference})}}catch(k){i.e(k)}finally{i.f()}}},{key:"_getVertexFromEditGeometry",value:function(e){var t,i=e.attributes,a=i.pathIndex,n=i.pointIndex;return null==(t=this._geometryHelper)?void 0:t.editGeometry.components[a].vertices[n]}},{key:"_onHandleMove",value:function(e,t,i,a){var r=this;Object(d.a)(this._snappingTask);var c=e.geometry,o="graphic-move-stop"===a.type;if(Object(d.k)(this.snappingManager)&&1===this.selectedHandles.length&&!o){var h=this.snappingManager;this._stagedVertex=h.update(c,this._snappingContext),this._syncGeometryAfterHandleMove(e,new g.a(this._stagedVertex),t,i,o),this._emitReshapeEvent(e),this._snappingTask=Object(f.h)(function(){var a=Object(s.a)(n.a.mark((function a(s){var l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.snap(c,r._snappingContext,s);case 2:(l=a.sent).valid&&(r._stagedVertex=l.apply(),r._syncGeometryAfterHandleMove(e,new g.a(r._stagedVertex),t,i,o),r._emitReshapeEvent(e));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}else{var l=Object(d.k)(this._stagedVertex)?new g.a(this._stagedVertex):c;this._syncGeometryAfterHandleMove(e,l,t,i,o),"graphic-move"===a.type&&this._emitReshapeEvent(e)}}},{key:"_syncGeometryAfterHandleMove",value:function(){var e=Object(s.a)(n.a.mark((function e(t,i,a,s){var r,c,o,h,l,p=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=p.length>4&&void 0!==p[4]&&p[4],c=i.x,o=i.y,h=this._getUpdatedGeometryAfterHandleMove(t,i),l="polyline"===h.type?h.paths:h.rings,this._isHandle(t)&&(l=this._moveRelatedCoordinates(l,t,c,o),l=this._moveSelectedHandleCoordinates(l,t,a,s,"polygon"===h.type),this._updateMidpointGraphicLocations(l)),this.graphic.geometry=h,this._syncEditGeometryAfterHandleMove(t,c,o),r&&(t.geometry=i);case 4:case"end":return e.stop()}}),e,this)})));return function(t,i,a,n){return e.apply(this,arguments)}}()},{key:"_getUpdatedGeometryAfterHandleMove",value:function(e,t){var i=t.x,a=t.y,n=Object(d.q)(this.graphic.geometry).clone(),s="polyline"===n.type?n.paths:n.rings,r=e.attributes,c=r.pathIndex,o=r.pointIndex,h=s[c].length-1;return s[c][o]=[i,a],"polygon"===n.type&&(0===o?s[c][h]=[i,a]:o===h&&(s[c][0]=[i,a])),n}},{key:"_moveRelatedCoordinates",value:function(e,t,i,a){var n,s=t.attributes.relatedGraphicIndices,r=Object(o.a)(s);try{for(r.s();!(n=r.n()).done;){var c=n.value,h=this.handleGraphics[c],l=h.attributes,p=l.pathIndex,v=l.pointIndex;e[p][v]=[i,a],h.geometry=t.geometry}}catch(u){r.e(u)}finally{r.f()}return e}},{key:"_moveSelectedHandleCoordinates",value:function(e,t,i,a,n){var s,r=Object(o.a)(this.selectedHandles);try{for(r.s();!(s=r.n()).done;){var c=s.value;if(c!==t){var h=c.attributes,l=h.pathIndex,p=h.pointIndex,v=h.relatedGraphicIndices,u=Object(C.a)(c.geometry,i,a,this.view),d=e[l].length-1;e[l][p]=[u.x,u.y],c.geometry=u,n&&(0===p?e[l][d]=[u.x,u.y]:p===d&&(e[l][0]=[u.x,u.y]));var y,b=Object(o.a)(v);try{for(b.s();!(y=b.n()).done;){var f=y.value,g=this.handleGraphics[f],_=g.attributes,m=_.pathIndex,O=_.pointIndex;e[m][O]=[u.x,u.y],g.geometry=u}}catch(k){b.e(k)}finally{b.f()}}}}catch(k){r.e(k)}finally{r.f()}return e}},{key:"_syncEditGeometryAfterHandleMove",value:function(e,t,i){var a=this._getVertexFromEditGeometry(e),n=t-a.pos[0],s=i-a.pos[1];this._geometryHelper.moveVertices([a],n,s,0)}},{key:"_onGraphicPointerOverCallback",value:function(e){var t=e.graphic;this._isHandle(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateHoverCursor(t)}},{key:"_onGraphicPointerOutCallback",value:function(e){var t=e.graphic;this._isHandle(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default"}},{key:"_createHandleFromMidpoint",value:function(e){var t=this._graphicAttributes,i=[],a=Object(d.q)(this.graphic.geometry).clone(),n=e.attributes,s=n.pathIndex,c=n.pointIndexStart,o=n.pointIndexEnd,h=e.geometry,l=h.x,p=h.y,v=0===o?c+1:o,u="polyline"===a.type?a.paths:a.rings;return u[s].splice(v,0,[l,p]),e.attributes=Object(r.a)(Object(r.a)({},t),{},{pathIndex:s,pointIndex:v,relatedGraphicIndices:[]}),i.push({coordinates:u[s][v],componentIndex:s,vertexIndex:v}),this.graphic.geometry=a,i}},{key:"_removeHandles",value:function(e){var t=Object(d.q)(this.graphic.geometry).clone(),i="polygon"===t.type?t.rings:t.paths,a=[];e instanceof k.a&&(e=[e]);var n,s=Object(o.a)(e);try{for(s.s();!(n=s.n()).done;)for(var r=n.value.geometry,h=r.x,l=r.y,p=0;p<i.length;p++)for(var v=i[p],u=0;u<v.length;u++){var y=Object(c.a)(v[u],2),b=y[0],f=y[1];h===b&&l===f&&(a.push({coordinates:i[p][u],componentIndex:p,vertexIndex:u}),i[p].splice(Number(u),1))}}catch(C){s.e(C)}finally{s.f()}if("polygon"===t.type){var g,_=Object(o.a)(i);try{for(_.s();!(g=_.n()).done;){var m=g.value,O=Object(c.a)(m[0],2),j=O[0],G=O[1],x=Object(c.a)(m[m.length-1],2),w=x[0],S=x[1];(1===m.length||m.length<3&&j===w&&G===S)&&i.splice(i.indexOf(m),1),m.length>2&&(j!==w||G!==S)&&m.push(m[0])}}catch(C){_.e(C)}finally{_.f()}}else{var H,M=Object(o.a)(i);try{for(M.s();!(H=M.n()).done;){var E=H.value;1===E.length&&i.splice(i.indexOf(E),1)}}catch(C){M.e(C)}finally{M.f()}}return this.graphic.geometry=t,a}},{key:"_addToSelection",value:function(e){e instanceof k.a&&(e=[e]);var t,i=Object(o.a)(e);try{for(i.s();!(t=i.n()).done;){t.value.symbol=this.symbols.vertices.selected}}catch(a){i.e(a)}finally{i.f()}this._set("selectedHandles",this.selectedHandles.concat(e)),this._emitSelectEvent(e)}},{key:"_removeFromSelection",value:function(e,t){var i=this.symbols.vertices,a=t?i.hover:i.default;e instanceof k.a&&(e=[e]);var n,s=Object(o.a)(e);try{for(s.s();!(n=s.n()).done;){var r=n.value;this.selectedHandles.splice(this.selectedHandles.indexOf(r),1),this._set("selectedHandles",this.selectedHandles),r.set("symbol",a)}}catch(c){s.e(c)}finally{s.f()}this._emitDeselectEvent(e)}},{key:"_clearSelection",value:function(){if(this.selectedHandles.length){var e,t=this.selectedHandles,i=Object(o.a)(this.selectedHandles);try{for(i.s();!(e=i.n()).done;){e.value.set("symbol",this.symbols.vertices.default)}}catch(a){i.e(a)}finally{i.f()}this._set("selectedHandles",[]),this._emitDeselectEvent(t)}}},{key:"_keyDownHandler",value:function(e){N.removeVertex.includes(e.key)&&!e.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)}},{key:"_removeVertex",value:function(e){if(!("polygon"===this.graphic.geometry.type&&this.handleGraphics.length<4||this.handleGraphics.length<3)){var t=this.graphic.clone();e instanceof k.a&&(e=[e]);var i=this._removeHandles(e);this.refresh(),this._emitVertexRemoveEvent(e,t,i)}}},{key:"_isHandle",value:function(e){return this.handleGraphics.includes(e)}},{key:"_isSelected",value:function(e){return this._isHandle(e)&&this.selectedHandles.includes(e)}},{key:"_isMidpoint",value:function(e){return this.midpointGraphics.includes(e)}},{key:"_updateHoverCursor",value:function(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}},{key:"_emitMoveStartEvent",value:function(e,t){var i=new A(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}},{key:"_emitMoveEvent",value:function(e,t){var i=new T(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}},{key:"_emitMoveStopEvent",value:function(){var e=new z(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",e),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(e)}},{key:"_emitReshapeStartEvent",value:function(e){var t=new V(this.graphic,e,this.selectedHandles);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)}},{key:"_emitReshapeEvent",value:function(e){var t=new P(this.graphic,e,this.selectedHandles);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)}},{key:"_emitReshapeStopEvent",value:function(e){var t=new R(this.graphic,e,this.selectedHandles);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)}},{key:"_emitSelectEvent",value:function(e){var t=new L(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)}},{key:"_emitDeselectEvent",value:function(e){var t=new U(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)}},{key:"_emitVertexAddEvent",value:function(e,t,i){var a=new F(e,this.graphic,t,i);this.emit("vertex-add",a),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(a)}},{key:"_emitVertexRemoveEvent",value:function(e,t,i){var a=new q(e,this.graphic,t,i);this.emit("vertex-remove",a),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(a)}}]),i}(m.a.EventedAccessor);Object(u.a)([Object(y.b)()],B.prototype,"callbacks",void 0),Object(u.a)([Object(y.b)()],B.prototype,"enableMidpoints",void 0),Object(u.a)([Object(y.b)()],B.prototype,"graphic",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],B.prototype,"handleGraphics",void 0),Object(u.a)([Object(y.b)()],B.prototype,"layer",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],B.prototype,"midpointGraphics",void 0),Object(u.a)([Object(y.b)()],B.prototype,"midpointSymbol",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],B.prototype,"selectedHandles",void 0),Object(u.a)([Object(y.b)()],B.prototype,"snappingManager",void 0),Object(u.a)([Object(y.b)({readOnly:!0})],B.prototype,"state",null),Object(u.a)([Object(y.b)({value:J})],B.prototype,"symbols",null),Object(u.a)([Object(y.b)({readOnly:!0})],B.prototype,"type",void 0),Object(u.a)([Object(y.b)()],B.prototype,"view",void 0);var K=B=Object(u.a)([Object(b.a)("esri.views.draw.support.Reshape")],B);t.default=K}}]);
//# sourceMappingURL=103.6648528b.chunk.js.map