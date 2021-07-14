(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[217],{1458:function(e,t,r){"use strict";r.r(t);var i=r(31),a=r(7),n=r.n(a),s=r(15),u=r(2),c=r(3),l=r(53),o=r(50),h=r(5),p=r(6),f=r(0),y=(r(16),r(4)),v=r(13),m=(r(17),r(1)),b=r(8),w=r(18),d=(r(12),r(19),r(20),r(24)),g=r(215),_=r(474),k=r(601),j=r(791),O=r(792),I=r(1073),x=r(606),T=r(35),V=r(483),q=function(e){var t=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"fetchPopupFeatures",value:function(){var e=Object(s.a)(n.a.mark((function e(t,r){var i,a,u,c=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layer,t){e.next=3;break}return e.abrupt("return",Promise.reject(new w.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i})));case 3:if("tile"===i.type){e.next=5;break}return e.abrupt("return",Promise.reject(new w.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type})));case 5:return a=this.get("view.scale"),u=i.allSublayers.toArray().filter((function(e){var t=0===e.minScale||a<=e.minScale,r=0===e.maxScale||a>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",Object(d.j)(u.map(function(){var e=Object(s.a)(n.a.mark((function e(i){var a,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.createQuery(),s=Object(y.k)(r)?r.event:null,u=Object(V.a)({renderer:i.renderer,event:s}),a.geometry=c.createFetchPopupFeaturesQueryGeometry(t,u),e.next=4,i.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,i.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,Object(T.a)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return Object(f.a)([Object(m.b)()],t.prototype,"layer",void 0),t=Object(f.a)([Object(b.a)("esri.layers.mixins.TileLayerView")],t)},F=r(1074),Q=r(1311),S=v.a.getLogger("esri.views.2d.layers.TileLayerView2D"),C=[0,0],R=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return Object(c.a)(r,[{key:"initialize",value:function(){var e,t=this,r=this.layer.tileInfo,i=r&&r.spatialReference;i||(e=new w.a("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(e=new w.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(function(){t.refresh()})),e&&this.addResolvingPromise(Promise.reject(e))}},{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new k.a(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new j.a({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new O.a({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),Object(l.a)(Object(o.a)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){Object(l.a)(Object(o.a)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return Object(x.a)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=Object(s.a)(n.a.mark((function e(){var t=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})),this.notifyChange("updating"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}},{key:"acquireTile",value:function(e){var t,r,a,n,s=this._bitmapView.createTile(e),u=s.bitmap;return t=this._tileInfoView.getTileCoords(C,s.key),r=Object(i.a)(t,2),u.x=r[0],u.y=r[1],u.resolution=this._tileInfoView.getTileResolution(s.key),a=this._tileInfoView.tileInfo.size,n=Object(i.a)(a,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(s),this._bitmapView.addChild(s),this.requestUpdate(),s}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=Object(s.a)(n.a.mark((function e(t,r){var i,a,s,u,c,l,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="tilemapCache"in this.layer?this.layer.tilemapCache:null,a=!Object(y.j)(r)&&r.signal,i){e.next=13;break}return e.prev=2,e.next=5,this._fetchImage(t,a);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),Object(d.m)(e.t0)||this.resampling){e.next=12;break}return e.abrupt("return",this._createBlankImage());case 12:throw e.t0;case 13:return s=new g.a(0,0,0,0),e.prev=14,e.next=17,i.fetchAvailabilityUpsample(t.level,t.row,t.col,s,{signal:a});case 17:if(s.level===t.level||this.resampling){e.next=19;break}return e.abrupt("return",this._createBlankImage());case 19:return e.next=21,this._fetchImage(s,a);case 21:u=e.sent,e.next=31;break;case 24:if(e.prev=24,e.t1=e.catch(14),!Object(d.m)(e.t1)){e.next=28;break}throw e.t1;case 28:return e.next=30,this._fetchImage(t,a);case 30:u=e.sent;case 31:return c=s.level,l=s.row,o=s.col,e.abrupt("return",this.resampling&&c!==t.level?this._resampleImage(u,c,l,o,t.level,t.row,t.col):u);case 33:case"end":return e.stop()}}),e,this,[[2,8],[14,24]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var r,i=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return i.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(d.m)(e.t0)||S.error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=Object(s.a)(n.a.mark((function e(t,r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{timestamp:this.refreshTimestamp,signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_resampleImage",value:function(e,t,r,i,a,n,s){var u=this._tileInfoView.tileInfo.size,c=this._tileInfoView.getTileResolution(t),l=this._tileInfoView.getTileResolution(a),o=this._tileInfoView.getLODInfoAt(a),h=o.getXForColumn(s),p=o.getYForRow(n),f=(o=this._tileInfoView.getLODInfoAt(t)).getXForColumn(i),y=o.getYForRow(r),v=Math.round((h-f)/c),m=Math.round(-(p-y)/c),b=Math.round(u[0]*(l/c)),w=Math.round(u[1]*(l/c)),d=this._createBlankImage();return d.getContext("2d").drawImage(e,v,m,b,w,0,0,u[0],u[1]),d}},{key:"_createBlankImage",value:function(){var e,t,r=this._tileInfoView.tileInfo.size,a=document.createElement("canvas");return e=r,t=Object(i.a)(e,2),a.width=t[0],a.height=t[1],a}}]),r}(q(Object(_.a)(Object(Q.a)(Object(F.a)(I.a)))));Object(f.a)([Object(m.b)()],R.prototype,"resampling",null);var P=R=Object(f.a)([Object(b.a)("esri.views.2d.layers.TileLayerView2D")],R);t.default=P}}]);
//# sourceMappingURL=217.4406c84d.chunk.js.map