(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-follow-follow"],{"0d4b":function(e,t,o){"use strict";o("6a54");var i=o("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("0c26"),o("c223"),o("dd2b");var s=i(o("9ff7")),a=i(o("fcb4")),n=i(o("2913")),d={data:function(){return{goodsList:[],emptyShow:!1,searchText:"",account:0,memberImg:"",memberName:""}},mixins:[s.default,a.default,n.default],onShow:function(){var e=this;this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),uni.setNavigationBarTitle({title:this.fenxiaoWords.concept+"商品"}),uni.getStorageSync("token")?this.getMemberInfo():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/goods/goods"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.withdrawList=[]),this.$api.sendRequest({url:"/fenxiao/api/goodscollect/page",data:{page_size:e.size,page:e.num,keyword:this.searchText.trim()},success:function(o){t.emptyShow=!0;var i=[],s=o.message;0==o.code&&o.data&&o.data.list?i=o.data.list:t.$util.showToast({title:s}),e.endSuccess(i.length),1==e.num&&(t.goodsList=[]),t.goodsList=t.goodsList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(o){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},search:function(){this.$refs.mescroll.refresh()},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",data:{},success:function(t){0==t.code&&t.data&&(e.account=t.data.account,t.data.headimg?e.memberImg=t.data.headimg:e.memberImg=e.$util.getDefaultImage().default_headimg,e.memberName=t.data.fenxiao_name)}})},imgError:function(e){this.goodsList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goTixian:function(){this.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")},toGoodsDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},delFollowTip:function(e,t){var o=this;uni.showActionSheet({itemList:["取消关注"],success:function(i){0==i.tapIndex&&o.delFollow(e,t)},fail:function(e){}})},delFollow:function(e,t){var o=this;this.$api.sendRequest({url:"/fenxiao/api/goodscollect/delete",data:{collect_id:e},success:function(e){var i="";i=0==e.code?"取消成功":e.message,o.$util.showToast({title:i});var s=o.goodsList;s.splice(t,1),o.goodsList=s}})}}};t.default=d},"306a":function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i}));var i={nsEmpty:o("8a80").default},s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"fenxiao-goods",attrs:{"data-theme":e.themeStyle}},[e.addonIsExit.fenxiao?[o("v-uni-image",{staticClass:"fx_adv",attrs:{src:e.$util.img("upload/uniapp/fenxiao/fx_adv.png"),mode:"widthFix"}}),o("v-uni-view",{staticClass:"fenxiao-menu"},[o("v-uni-view",{staticClass:"menu-item"},[o("v-uni-text",{staticClass:"menu-item-tit"},[e._v("分享好友")]),o("v-uni-text",[e._v("更多佣金挣不停")])],1),o("v-uni-view",{staticClass:"shu"}),o("v-uni-view",{staticClass:"menu-item"},[o("v-uni-text",{staticClass:"menu-item-tit"},[e._v("分销市场")]),o("v-uni-text",[e._v("多种商品任你选择")])],1),o("v-uni-view",{staticClass:"shu"}),o("v-uni-view",{staticClass:"menu-item"},[o("v-uni-text",{staticClass:"menu-item-tit"},[e._v("实力好货")]),o("v-uni-text",[e._v("正品保障放心卖")])],1)],1),o("mescroll-uni",{ref:"mescroll",attrs:{top:"440",size:5},on:{getData:function(t){arguments[0]=t=e.$handleEvent(t),e.getData.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"goods",attrs:{slot:"list"},slot:"list"},[e._l(e.goodsList,(function(t,i){return 0!=e.goodsList.length?o("v-uni-view",{key:i,staticClass:"goods-list",on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.toGoodsDetail(t.sku_id)},longpress:function(o){arguments[0]=o=e.$handleEvent(o),e.delFollowTip(t.collect_id,i)}}},[o("v-uni-view",{staticClass:"goods-item"},[o("v-uni-view",{staticClass:"goods-image"},[t.sku_image?o("v-uni-image",{attrs:{src:e.$util.img(t.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imgError(i)}}}):o("v-uni-image",{attrs:{src:e.$util.getDefaultImage().default_goods_img,mode:"aspectFill"}})],1),o("v-uni-view",{staticClass:"goods-desc-wrap"},[o("v-uni-view",{staticClass:"goods-desc"},[o("v-uni-view",{staticClass:"goods-name"},[o("v-uni-text",{staticClass:"name"},[e._v(e._s(t.sku_name))])],1),o("v-uni-view",{staticClass:"goods-bottom"},[o("v-uni-view",{staticClass:"goods-price"},[o("v-uni-text",{staticClass:"font-size-tag"},[e._v("￥")]),e._v(e._s(t.discount_price))],1),o("v-uni-view",{staticClass:"good-share-money color-base-text"},[o("v-uni-view",{staticClass:"level_money"},[o("v-uni-view",{staticClass:"money_sign"},[e._v("佣金:")]),o("v-uni-view",{staticClass:"money color-base-text"},[e._v("￥"+e._s(t.commission_money))])],1)],1)],1)],1)],1)],1)],1):e._e()})),e.emptyShow&&0==e.goodsList.length?o("ns-empty",{attrs:{isIndex:!1,fixed:!1}}):e._e()],2)],1)]:e._e()],2)},a=[]},"472c":function(e,t,o){var i=o("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.fx_adv[data-v-f44b194c]{width:100%;display:block}.fenxiao-menu[data-v-f44b194c]{margin:%?24?%;height:%?124?%;display:flex;background-color:#fff;align-items:center}.fenxiao-menu .menu-item[data-v-f44b194c]{flex:1;display:flex;flex-direction:column;padding-left:%?36?%}.fenxiao-menu .menu-item .menu-item-tit[data-v-f44b194c]{font-size:%?24?%;color:#000}.fenxiao-menu .menu-item uni-text[data-v-f44b194c]{color:#838383;font-size:%?20?%}.fenxiao-menu .shu[data-v-f44b194c]{width:%?1?%;height:%?92?%;border:%?1?% solid #eaeaea}.goods[data-v-f44b194c]{box-sizing:border-box;margin-top:%?22?%;display:flex;flex-wrap:wrap;flex-direction:row}.goods .goods-list[data-v-f44b194c]{width:%?342?%;height:%?466?%;background-color:#fff;border-radius:%?5?%;box-sizing:border-box;margin:%?24?% 0 %?24?% %?24?%}.goods .goods-list .goods-item[data-v-f44b194c]{display:flex;flex-direction:column;justify-content:center;align-items:center}.goods .goods-list .goods-item .goods-image[data-v-f44b194c]{width:%?301?%;height:%?301?%;border-radius:%?5?%;margin-top:%?19?%}.goods .goods-list .goods-item .goods-image uni-image[data-v-f44b194c]{width:100%;height:100%;border-radius:%?5?%;box-sizing:border-box}.goods .goods-list .goods-item .goods-desc-wrap[data-v-f44b194c]{padding:%?22?%}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc[data-v-f44b194c]{display:flex;flex-direction:column;justify-content:space-between}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-name[data-v-f44b194c]{width:100%}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-name .name[data-v-f44b194c]{line-height:1.3;font-weight:600;word-break:break-all;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:%?28?%;color:#000}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom[data-v-f44b194c]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:%?23?% %?29?% 0 0}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom .goods-price[data-v-f44b194c]{font-size:%?28?%;color:#000}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom .good-share-money[data-v-f44b194c]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-size:%?28?%}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom .level_money[data-v-f44b194c]{margin-right:%?10?%;display:flex;justify-content:center;align-items:center}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom .level_money .money_sign[data-v-f44b194c]{line-height:1;display:flex;justify-content:center;align-items:center;float:left;font-size:%?28?%}.goods .goods-list .goods-item .goods-desc-wrap .goods-desc .goods-bottom .level_money .money[data-v-f44b194c]{float:left;height:100%;line-height:%?38?%;font-size:%?28?%}',""]),e.exports=t},"63ec":function(e,t,o){"use strict";var i=o("bad5"),s=o.n(i);s.a},"996a":function(e,t,o){"use strict";o.r(t);var i=o("0d4b"),s=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},"9ff7":function(e,t,o){"use strict";o("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(t){t.code>=0&&t.data&&(e.fenxiaoWords=t.data,uni.setStorageSync("fenxiaoWords",t.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords"))}};t.default=i},bad5:function(e,t,o){var i=o("472c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=o("967d").default;s("2b3dfb66",i,!0,{sourceMap:!1,shadowMode:!1})},f912:function(e,t,o){"use strict";o.r(t);var i=o("306a"),s=o("996a");for(var a in s)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return s[e]}))}(a);o("63ec");var n=o("828b"),d=Object(n["a"])(s["default"],i["b"],i["c"],!1,null,"f44b194c",null,!1,i["a"],void 0);t["default"]=d.exports},fcb4:function(e,t,o){"use strict";o("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(e){this.mescroll&&this.mescroll.onPageScroll(e)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(e){this.mescroll=e,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var e=this.$refs.mescrollRef;e&&(this.mescroll=e.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var e=this;setTimeout((function(){e.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},s=i;t.default=s}}]);