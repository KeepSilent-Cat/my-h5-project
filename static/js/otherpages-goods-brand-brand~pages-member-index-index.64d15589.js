(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-goods-brand-brand~pages-member-index-index"],{"06b9":function(e,t,i){"use strict";i.r(t);var a=i("42f9"),n=i("19ef");for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("449a");var o=i("828b"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"dead5810",null,!1,a["a"],void 0);t["default"]=d.exports},"19ef":function(e,t,i){"use strict";i.r(t);var a=i("cde5"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"1df1":function(e,t,i){"use strict";var a=i("dcfa"),n=i.n(a);n.a},2516:function(e,t,i){var a=i("c86c");t=a(!1),t.push([e.i,".uni-badge[data-v-5b70e2a0]{font-family:Helvetica Neue,Helvetica,sans-serif;box-sizing:border-box;font-size:12px;line-height:1;display:inline-block;padding:3px 6px;color:#333;border-radius:100px;background-color:#e5e5e5}.uni-badge.uni-badge-inverted[data-v-5b70e2a0]{padding:0 5px 0 0;color:#999;background-color:initial}.uni-badge-primary[data-v-5b70e2a0]{color:#fff;background-color:#007aff}.uni-badge-primary.uni-badge-inverted[data-v-5b70e2a0]{color:#007aff;background-color:initial}.uni-badge-success[data-v-5b70e2a0]{color:#fff;background-color:#4cd964}.uni-badge-success.uni-badge-inverted[data-v-5b70e2a0]{color:#4cd964;background-color:initial}.uni-badge-warning[data-v-5b70e2a0]{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted[data-v-5b70e2a0]{color:#f0ad4e;background-color:initial}.uni-badge-error[data-v-5b70e2a0]{color:#fff;background-color:#dd524d}.uni-badge-error.uni-badge-inverted[data-v-5b70e2a0]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-5b70e2a0]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),e.exports=t},"289f":function(e,t,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var n=a(i("398a")),r={name:"UniGridItem",components:{uniBadge:n.default},props:{marker:{type:String,default:""},hor:{type:Number,default:0},ver:{type:Number,default:0},type:{type:String,default:""},text:{type:String,default:""},size:{type:String,default:"normal"},inverted:{type:Boolean,default:!1},src:{type:String,default:""},imgWidth:{type:Number,default:30}},inject:["grid"],data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,index:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.index=this.grid.index++},mounted:function(){var e=this;this.grid._getSize((function(t){e.width=t}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};t.default=r},"2eff":function(e,t,i){"use strict";i.r(t);var a=i("8e98"),n=i("388c");for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("1df1");var o=i("828b"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2ae4439f",null,!1,a["a"],void 0);t["default"]=d.exports},"388c":function(e,t,i){"use strict";i.r(t);var a=i("289f"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"398a":function(e,t,i){"use strict";i.r(t);var a=i("9e8c"),n=i("93e1");for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("71ac");var o=i("828b"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5b70e2a0",null,!1,a["a"],void 0);t["default"]=d.exports},"3feb":function(e,t,i){var a=i("c86c");t=a(!1),t.push([e.i,".uni-grid[data-v-dead5810]{display:flex;flex-wrap:wrap;box-sizing:border-box;border-left:1px #e5e5e5 solid}",""]),e.exports=t},"42f9":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",[t("v-uni-view",{staticClass:"uni-grid",class:{border:this.showBorder},style:{"border-left":this.showBorder?"1px "+this.borderColor+" solid":"none"},attrs:{id:this.elId}},[this._t("default")],2)],1)},n=[]},"449a":function(e,t,i){"use strict";var a=i("cdce"),n=i.n(a);n.a},"4c58":function(e,t,i){var a=i("c86c");t=a(!1),t.push([e.i,".uni-grid-item[data-v-2ae4439f]{box-sizing:border-box}.uni-grid-item__box[data-v-2ae4439f]{position:relative;width:100%}.uni-grid-item__box-item[data-v-2ae4439f]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100%;font-size:%?32?%;color:#666;padding:%?20?% 0;box-sizing:border-box}.uni-grid-item__box-item .image[data-v-2ae4439f]{width:%?50?%;height:%?50?%}.uni-grid-item__box-item .text[data-v-2ae4439f]{font-size:%?26?%;margin-top:%?10?%}.uni-grid-item__box.uni-grid-item__box-square[data-v-2ae4439f]{height:0;padding-top:100%}.uni-grid-item__box.uni-grid-item__box-square .uni-grid-item__box-item[data-v-2ae4439f]{position:absolute;top:0}.uni-grid-item__box.border[data-v-2ae4439f]{position:relative;box-sizing:border-box;border-bottom:1px #e5e5e5 solid;border-right:1px #e5e5e5 solid}.uni-grid-item__box.border-top[data-v-2ae4439f]{border-top:1px #e5e5e5 solid}.uni-grid-item__box.uni-highlight[data-v-2ae4439f]:active{background-color:#eee}.uni-grid-item__box-badge[data-v-2ae4439f],\r\n.uni-grid-item__box-dot[data-v-2ae4439f],\r\n.uni-grid-item__box-image[data-v-2ae4439f]{position:absolute;top:0;right:0;left:0;bottom:0;margin:auto;z-index:10}.uni-grid-item__box-dot[data-v-2ae4439f]{width:%?20?%;height:%?20?%;background:#ff5a5f;border-radius:50%}.uni-grid-item__box-badge[data-v-2ae4439f]{display:flex;justify-content:center;align-items:center;width:0;height:0}.uni-grid-item__box-image[data-v-2ae4439f]{display:flex;justify-content:center;align-items:center;width:%?100?%;height:%?100?%;overflow:hidden}.uni-grid-item__box-image .box-image[data-v-2ae4439f]{width:%?90?%}",""]),e.exports=t},"71ac":function(e,t,i){"use strict";var a=i("bbf4"),n=i.n(a);n.a},"8e98":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uniBadge:i("398a").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.width?i("v-uni-view",{staticClass:"uni-grid-item",style:{width:e.width}},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{border:e.showBorder,"uni-grid-item__box-square":e.square,"border-top":e.showBorder&&e.index<e.column,"uni-highlight":e.highlight},style:{"border-color":e.borderColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},["dot"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-dot",style:{left:e.top+"px",top:e.left+"px"}}):e._e(),"badge"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-badge",style:{left:e.top+"px",top:e.left+"px"}},[i("uni-badge",{attrs:{text:e.text,type:e.type,size:e.size,inverted:e.inverted}})],1):e._e(),"image"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-image",style:{left:e.top+"px",top:e.left+"px"}},[i("v-uni-image",{staticClass:"box-image",style:{width:e.imgWidth+"px"},attrs:{src:e.src,mode:"widthFix"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-grid-item__box-item"},[e._t("default")],2)],1)],1):e._e()},r=[]},"93e1":function(e,t,i){"use strict";i.r(t);var a=i("ef00"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"9e8c":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.text?i("v-uni-text",{staticClass:"uni-badge",class:e.inverted?"uni-badge-"+e.type+" uni-badge--"+e.size+" uni-badge-inverted":"uni-badge-"+e.type+" uni-badge--"+e.size,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[e._v(e._s(e.text))]):e._e()},n=[]},bbf4:function(e,t,i){var a=i("2516");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("967d").default;n("45baa92a",a,!0,{sourceMap:!1,shadowMode:!1})},cdce:function(e,t,i){var a=i("3feb");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("967d").default;n("7a06c0ce",a,!0,{sourceMap:!1,shadowMode:!1})},cde5:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa"),i("c9b5"),i("bf0f"),i("ab80"),i("5c47"),i("e966");var a={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},hor:{type:Number,default:0},ver:{type:Number,default:0},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{index:0,elId:e}},created:function(){this.index=0,this.childrens=[],this.pIndex=this.pIndex?this.pIndex++:0},methods:{change:function(e){this.$emit("change",e)},_getSize:function(e){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){if(i[0]){var a=parseInt(i[0].width/t.column)-1+"px";"function"===typeof e&&e(a)}else setTimeout(t._getSize(e))}))}}};t.default=a},dcfa:function(e,t,i){var a=i("4c58");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("967d").default;n("d56b6e6e",a,!0,{sourceMap:!1,shadowMode:!1})},ef00:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},methods:{onClick:function(){this.$emit("click")}}};t.default=a}}]);