(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-point-list-list"],{"0fb7":function(t,i,a){var e=a("b215");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("967d").default;o("18750130",e,!0,{sourceMap:!1,shadowMode:!1})},"3eba":function(t,i,a){var e=a("c86c");i=e(!1),i.push([t.i,"[data-v-2a734324] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important}.textOve[data-v-2a734324]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:normal;padding-left:3px}.width35[data-v-2a734324]{width:35px}.width34[data-v-2a734324]{width:34px}.paddL_2[data-v-2a734324]{padding-left:-2px}.disFlex[data-v-2a734324]{display:flex}",""]),t.exports=i},"45d3":function(t,i,a){"use strict";a.r(i);var e=a("9f0d"),o=a("481c");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("d03a"),a("c517");var s=a("828b"),l=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"2a734324",null,!1,e["a"],void 0);i["default"]=l.exports},"481c":function(t,i,a){"use strict";a.r(i);var e=a("7fa6"),o=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},"7fa6":function(t,i,a){"use strict";a("6a54");var e=a("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("c223"),a("e838");var o=e(a("9f0f")),n=e(a("2913")),s={components:{uniPopup:o.default},data:function(){return{mescroll:null,categoryList:[{id:1,name:"积分换好物"},{id:2,name:"积分换券"},{id:3,name:"积分换红包"}],selectCategoryId:1,goodsList:[],couponList:[],hongbaoList:[],isLogin:!1,point:0,siteId:0,token:null,isloading:!1,memberInfo:{headimg:""},signState:1}},onLoad:function(t){t.site_id&&(this.siteId=t.site_id)},mixins:[n.default],onShow:function(){var t=this;this.$langConfig.refresh(),this.$store.dispatch("getAddonIsexit").then((function(i){i.pointexchange?(uni.getStorageSync("token")&&t.getMemberInfo(),t.getCouponList(),t.getHongbaoList(),t.getSignState()):(t.$util.showToast({title:"积分商城未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))}))},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,i){t&&this.getMemberInfo()}},methods:{getSignState:function(){var t=this;this.$api.sendRequest({url:"/api/membersignin/getSignStatus",success:function(i){0==i.code&&(t.signState=i.data.is_use)}})},openPointPopup:function(){this.$refs.pointPopup.open()},closePointPopup:function(){this.$refs.pointPopup.close()},jumpPage:function(t){this.$util.redirectTo(t)},getData:function(t){var i=this;this.mescroll=t,this.isloading=!0,this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:t.size,page:t.num,type:1,site_id:this.siteId},success:function(a){i.isloading=!1;var e=[],o=a.message;0==a.code&&a.data?e=a.data.list:i.$util.showToast({title:o}),t.endSuccess(e.length),1==t.num&&(i.goodsList=[]),i.goodsList=i.goodsList.concat(e),i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(){this.isloading=!1,t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getCouponList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:2},success:function(i){0==i.code&&i.data?t.couponList=i.data.list:t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getHongbaoList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:3},success:function(i){0==i.code&&i.data?t.hongbaoList=i.data.list:t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/point/detail/detail",{id:t.id})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(i){i.code>=0?(t.token=uni.getStorageSync("token"),t.memberInfo=i.data,t.getAccountInfo()):t.token=null}})},getAccountInfo:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(i){0==i.code&&i.data?isNaN(parseFloat(i.data.point))||(t.point=parseFloat(i.data.point).toFixed(0)):t.$util.showToast({title:i.message})}})},login:function(){this.$refs.login.open("/promotionpages/point/list/list")},imgError:function(t){this.goodsList[t].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){switch(t.type){case 1:return this.$util.img(t.image.split(",")[0]);case 2:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/coupon.png");case 3:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/hongbao.png")}}},onShareAppMessage:function(t){return{title:"积分兑换，好礼带回家哦",path:"/promotionpages/point/list/list",success:function(t){},fail:function(t){}}}};i.default=s},"9f0d":function(t,i,a){"use strict";a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={nsEmpty:a("8a80").default,uniPopup:a("9f0f").default,loadingCover:a("c8fc").default,nsLogin:a("6cb7").default},o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"point-wrap",attrs:{"data-theme":t.themeStyle}},[t.addonIsExit.pointexchange?a("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"list"},slot:"list"},[a("v-uni-view",{staticClass:"head-wrap color-base-bg"},[a("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/point_bg.png"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"wrap",class:{"no-login":!t.token}},[t.token?a("v-uni-view",{staticClass:"member-wrap"},[a("v-uni-view",{staticClass:"headimg"},[a("v-uni-image",{attrs:{src:t.memberInfo.headimg?t.$util.img(t.memberInfo.headimg):t.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.memberInfo.headimg=t.$util.getDefaultImage().default_headimg}}})],1),a("v-uni-text",{staticClass:"point"},[t._v(t._s(t.point))]),a("v-uni-text",{staticClass:"point-name"},[t._v("积分")]),a("v-uni-view",{staticClass:"rule"},[a("v-uni-text",{staticClass:"iconfont iconwenhao"}),a("v-uni-text",{staticClass:"font-size-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openPointPopup()}}},[t._v("兑换规则")])],1)],1):a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.login.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"lineheight-clear"},[a("v-uni-text",{staticClass:"font-size-toolbar login-btn"},[t._v("立即登录")])],1),a("v-uni-view",{staticClass:"lineheight-clear"},[a("v-uni-text",{staticClass:"font-size-tag"},[t._v("登录后查看我的积分")])],1)],1),t.token?a("v-uni-view",{staticClass:"action-wrap"},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpPage("/otherpages/member/point/point")}}},[t._v("积分明细"),a("v-uni-text",{staticClass:"iconfont iconright"})],1),a("v-uni-view",{staticClass:"split"}),a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpPage("/promotionpages/point/order_list/order_list")}}},[t._v("兑换记录"),a("v-uni-text",{staticClass:"iconfont iconright"})],1)],1):t._e()],1)],1),a("v-uni-view",{staticClass:"body-wrap",class:{"no-login":!t.token}},[t.couponList.length>0?a("v-uni-view",{staticClass:"point-exchange-wrap"},[a("v-uni-view",{staticClass:"type-wrap"},[a("v-uni-text",{staticClass:"type-name"},[t._v("积分换券")]),a("v-uni-view"),a("v-uni-text",{staticClass:"type-sub"},[t._v("更多好券，帮你省钱")])],1),a("v-uni-view",{staticClass:"list-wrap"},[a("v-uni-view",{staticClass:"list-wrap-scroll"},t._l(t.couponList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"list-wrap-item coupon-list-wrap-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i)}}},[a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/coupon_bg1.png")},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imgError(e)}}})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"coupon",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/point/coupon_bg1.png")+")"}},[a("v-uni-view",{staticClass:"coupon_left color-line-border"},[a("v-uni-view",{staticClass:"price color-base-text"},["reward"==i.coupon_type?[a("v-uni-text",[t._v("￥")]),t._v(t._s(parseFloat(i.money)))]:"discount"==i.coupon_type?[t._v(t._s(parseFloat(i.discount))+"折")]:[t._v(t._s(parseFloat(i.money))+"元")]],2),a("v-uni-view",{staticClass:"coupon_condition font-size-activity-tag color-base-text"},[t._v(t._s(0==i.at_least?"无门槛优惠券":"满"+parseFloat(i.at_least).toFixed(0)+"可用"))]),a("v-uni-view",{staticClass:"coupon_type font-size-activity-tag color-base-text"},[t._v(t._s(2==i.goods_type?"指定券":"全场券"))])],1),a("v-uni-view",{staticClass:"coupon_right",staticStyle:{"min-width":"70px"}},[a("v-uni-view",{staticClass:"coupon_num color-base-text font-size-tag disFlex"},[a("v-uni-text",{staticClass:"textOve width35"},[t._v(t._s(i.point))]),t._v("积分")],1),a("v-uni-view",{staticClass:"coupon_btn color-base-text margin-top"},[t._v("兑换")])],1)],1)],1)],1)})),1)],1)],1):t._e(),t.hongbaoList.length>0?a("v-uni-view",{staticClass:"point-exchange-wrap"},[a("v-uni-view",{staticClass:"type-wrap"},[a("v-uni-text",{staticClass:"type-name"},[t._v("积分换红包")]),a("v-uni-view"),a("v-uni-text",{staticClass:"type-sub"},[t._v("红包在手，省钱有道")])],1),a("v-uni-view",{staticClass:"list-wrap"},t._l(t.hongbaoList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"list-wrap-item hongbao-list-wrap-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i)}}},[a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/hongbao_bg.png")}})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"coupon hongbao"},[a("v-uni-view",{staticClass:"coupon_left"},[a("v-uni-view",{staticClass:"price "},[a("v-uni-text",[t._v("￥")]),t._v(t._s(parseFloat(i.balance).toFixed(0)))],1),a("v-uni-view",{staticClass:"coupon_condition font-size-activity-tag"},[a("v-uni-text",[t._v(t._s(i.point))]),a("v-uni-text",{staticClass:"paddL_2"},[t._v("积分")])],1)],1),a("v-uni-view",{staticClass:"coupon_right flex"},[a("v-uni-view",{staticClass:"coupon_btn"},[t._v("兑换")])],1)],1)],1)],1)})),1)],1):t._e(),t.goodsList.length>0?a("v-uni-view",{staticClass:"point-exchange-wrap"},[a("v-uni-view",{staticClass:"type-wrap"},[a("v-uni-text",{staticClass:"type-name"},[t._v("积分换好物")]),a("v-uni-view"),a("v-uni-text",{staticClass:"type-sub"},[t._v("积累积分，兑换好物")])],1),a("v-uni-view",{staticClass:"list-wrap"},[t.goodsList.length?a("v-uni-view",{staticClass:"goods-list double-column"},t._l(t.goodsList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"goods-item margin-bottom"},[a("v-uni-view",{staticClass:"goods-img",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i)}}},[a("v-uni-image",{attrs:{src:t.goodsImg(i),mode:"widthFix"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imgError(e)}}})],1),a("v-uni-view",{staticClass:"info-wrap"},[a("v-uni-view",{staticClass:"name-wrap"},[a("v-uni-view",{staticClass:"goods-name",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i)}}},[t._v(t._s(i.name))])],1),a("v-uni-view",{staticClass:"lineheight-clear"},[a("v-uni-view",{staticClass:"discount-price"},[a("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(i.point))]),a("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v("积分")]),i.price>0&&i.pay_type>0?[a("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v("+")]),a("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[t._v(t._s(i.price))])]:t._e()],2)],1),a("v-uni-view",{staticClass:"pro-info"},[a("v-uni-view",{staticClass:"font-size-activity-tag color-tip"},[t._v("库存"+t._s(i.stock))]),a("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(i)}}})],1)],1)],1)})),1):t._e()],1)],1):t._e()],1),a("v-uni-view",[a("ns-empty",{attrs:{text:"暂无数据",isIndex:!1,fixed:!1}})],1)],1)],2):t._e(),a("v-uni-view",{on:{touchmove:function(i){i.preventDefault(),i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[a("uni-popup",{ref:"pointPopup",attrs:{type:"bottom"}},[a("v-uni-view",{staticClass:"tips-layer"},[a("v-uni-view",{staticClass:"head",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closePointPopup()}}},[a("v-uni-view",{staticClass:"title"},[t._v("积分说明")]),a("v-uni-text",{staticClass:"iconfont iconclose"})],1),a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"detail margin-bottom"},[a("v-uni-view",{staticClass:"tip"},[t._v("积分的获取")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可在注册、签到、分享、消费、充值时获得。")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("2、在购买部分商品时可获得积分。")]),a("v-uni-view",{staticClass:"tip"},[t._v("积分的使用")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可用于兑换积分中心的商品。")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("2、积分可在参与某些活动时使用。")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("3、积分不得转让，出售，不设有效期。")]),a("v-uni-view",{staticClass:"tip"},[t._v("积分的查询")]),a("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可在会员中心中查询具体数额以及明细。")])],1)],1)],1)],1)],1),a("loading-cover",{ref:"loadingCover"}),a("ns-login",{ref:"login"})],1)},n=[]},a3a4:function(t,i,a){var e=a("3eba");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("967d").default;o("248dc2f2",e,!0,{sourceMap:!1,shadowMode:!1})},b215:function(t,i,a){var e=a("c86c");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */\r\n/* 说明弹框 */.tips-layer[data-v-2a734324]{background:#fff;z-index:999;height:40%;width:100%}.tips-layer .head[data-v-2a734324]{position:relative}.tips-layer .title[data-v-2a734324]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?32?%;font-weight:700}.tips-layer uni-text[data-v-2a734324]{position:absolute;top:%?8?%;right:22px;font-size:%?32?%;font-weight:500}.tips-layer .body[data-v-2a734324]{width:100%;height:calc(100% - %?80?%);overflow-y:scroll}.tips-layer .body .detail[data-v-2a734324]{padding:%?20?%}.tips-layer .body .detail .font-size-base[data-v-2a734324]{margin-bottom:%?10?%}.lineheight-clear[data-v-2a734324]{line-height:1!important}.goods-list.double-column[data-v-2a734324]{display:flex;flex-wrap:wrap;margin-top:%?20?%}.goods-list.double-column .goods-item[data-v-2a734324]{flex:1;position:relative;background-color:#fff;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-2a734324]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-2a734324]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-2a734324]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-2a734324]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-2a734324]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-2a734324]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-2a734324]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-2a734324]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?36?%}.goods-list.double-column .goods-item .discount-price[data-v-2a734324]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-2a734324]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-2a734324]{display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-2a734324]{line-height:1;flex:1;display:flex;align-items:center}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-2a734324]:nth-child(2){justify-content:flex-end}.goods-list.double-column .goods-item .pro-info > uni-view uni-button[data-v-2a734324]{padding:0 %?16?%;line-height:2}.goods-list.double-column .goods-item .member-price-tag[data-v-2a734324]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-2a734324]{width:100%}.head-wrap[data-v-2a734324]{width:100vw;line-height:1;position:relative;height:%?270?%}.head-wrap > uni-image[data-v-2a734324]{width:100%}.head-wrap .wrap[data-v-2a734324]{width:100%;height:100%;position:absolute;z-index:5;top:0;left:0}.head-wrap .member-wrap[data-v-2a734324]{height:%?190?%;padding:%?50?% %?30?% %?30?% %?30?%;display:flex;align-items:center;box-sizing:border-box}.head-wrap .member-wrap .headimg[data-v-2a734324]{width:%?100?%;height:%?100?%;background:#fff;border:2px solid #fff;border-radius:50%;overflow:hidden}.head-wrap .member-wrap .headimg uni-image[data-v-2a734324]{width:100%;height:100%}.head-wrap .member-wrap .point[data-v-2a734324]{margin-left:%?30?%;color:#fff;font-size:%?36?%}.head-wrap .member-wrap .point-name[data-v-2a734324]{font-size:%?24?%;color:#fff;margin-left:%?4?%;margin-top:%?5?%}.head-wrap .member-wrap .iconjifen1[data-v-2a734324]{color:#fff;margin-left:%?8?%}.head-wrap .member-wrap .rule[data-v-2a734324]{flex:1;text-align:right;color:#fff}.head-wrap .member-wrap .iconwenhao[data-v-2a734324]{font-size:%?24?%;color:#fff;margin-right:%?6?%}.head-wrap .action-wrap[data-v-2a734324]{display:flex;justify-content:space-between;align-items:center;height:%?80?%;background-color:hsla(0,0%,100%,.1)}.head-wrap .action-wrap uni-view[data-v-2a734324]{line-height:1;text-align:center;width:calc((100vw - %?1?%) / 2);color:#fff}.head-wrap .action-wrap uni-view uni-text[data-v-2a734324]{font-size:%?24?%;margin-left:%?8?%}.head-wrap .action-wrap uni-view.split[data-v-2a734324]{width:%?1?%;height:%?50?%;background-color:hsla(0,0%,93.3%,.3);flex-shrink:0}.head-wrap .action-wrap uni-view uni-image[data-v-2a734324]{width:100%}.head-wrap .no-login[data-v-2a734324]{display:flex;align-items:center;justify-content:center;text-align:center}.head-wrap .no-login uni-text[data-v-2a734324]{color:#fff}.head-wrap .no-login .login-btn[data-v-2a734324]{display:inline-block;height:%?70?%;line-height:%?70?%;width:%?200?%;border:1px solid #fff;border-radius:%?70?%;margin-bottom:%?20?%}.body-wrap[data-v-2a734324]{margin-top:%?50?%}.body-wrap.no-login[data-v-2a734324]{margin-top:%?20?%}.body-wrap .point-exchange-wrap[data-v-2a734324]{padding:0 %?30?%;margin-top:%?30?%}.body-wrap .type-wrap[data-v-2a734324]{display:flex;align-items:center}.body-wrap .type-wrap .type-name[data-v-2a734324]{font-size:%?30?%;color:#303133;line-height:1}.body-wrap .type-wrap > uni-view[data-v-2a734324]{width:%?2?%;height:%?23?%;background-color:#909399;margin:0 %?20?%}.body-wrap .type-wrap .type-sub[data-v-2a734324]{font-size:%?24?%;color:#909399;line-height:1}.body-wrap .list-wrap[data-v-2a734324]{width:100%}.body-wrap .list-wrap .list-wrap-scroll[data-v-2a734324]{width:100%;flex-direction:row;line-height:1}.body-wrap .list-wrap .list-wrap-item[data-v-2a734324]{display:inline-block;width:%?330?%;overflow:hidden;margin-right:%?30?%;margin-top:%?20?%;position:relative}.body-wrap .list-wrap .list-wrap-item.hongbao-list-wrap-item[data-v-2a734324]{height:%?141?%}.body-wrap .list-wrap .list-wrap-item[data-v-2a734324]:nth-child(2n+2){margin-right:0}.body-wrap .list-wrap .list-wrap-item .img-box[data-v-2a734324]{width:100%;height:100%;position:absolute;top:0;left:0}.body-wrap .list-wrap .list-wrap-item .img-box uni-image[data-v-2a734324]{width:100%;height:100%}.body-wrap .list-wrap .list-wrap-item .content[data-v-2a734324]{position:relative;z-index:9}.body-wrap .list-wrap .list-wrap-item .content .coupon[data-v-2a734324]{background-size:100% 100%;background-repeat:no-repeat;border-radius:%?10?%;display:flex;padding:%?20?% 0}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right[data-v-2a734324]{position:relative;width:%?140?%;min-width:%?140?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right.flex[data-v-2a734324]{display:flex;align-items:center}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right .coupon_btn[data-v-2a734324]{margin:%?0?% auto 0;width:%?80?%;height:%?40?%;line-height:%?40?%;font-size:%?24?%;text-align:center;border-radius:%?40?%;border-width:1px;border-style:solid}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right .coupon_num[data-v-2a734324]{margin-top:%?10?%;text-align:center;justify-content:center}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right[data-v-2a734324]::after{position:absolute;top:0;margin-left:0;content:"";width:0;height:100%;border-left:1px dashed;opacity:.2}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left[data-v-2a734324]{flex:1;text-align:left;padding:0 0 0 %?20?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .price[data-v-2a734324]{font-size:%?48?%;font-weight:500;margin-top:0!important;padding:0;font-weight:600}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .price uni-text[data-v-2a734324]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .coupon_condition[data-v-2a734324]{width:%?170?%;margin-top:%?20?%;line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_left .price[data-v-2a734324], .body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_left .coupon_condition[data-v-2a734324]{color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right .coupon_num[data-v-2a734324]{color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right .coupon_btn[data-v-2a734324]{color:#fff;border-color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right[data-v-2a734324]::after{position:absolute;top:0;margin-left:0;content:"";width:0;height:100%;border-left:0;opacity:.2}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap[data-v-2a734324]{width:100%;height:%?105?%;display:flex;justify-content:space-between}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap .coupon-price[data-v-2a734324]{font-size:%?48?%;margin-top:%?10?%;margin-left:%?20?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap .coupon-price uni-text[data-v-2a734324]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num[data-v-2a734324]{width:%?160?%;height:%?44?%;position:relative}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num uni-image[data-v-2a734324]{width:100%;height:100%;position:absolute}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num uni-text[data-v-2a734324]{position:relative;z-index:9;color:#fff;font-size:%?24?%;display:inline-block;width:100%;line-height:%?44?%;text-align:center;vertical-align:top}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-conditions[data-v-2a734324]{font-size:%?20?%;color:#909399;line-height:1;margin-top:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-name[data-v-2a734324]{font-size:%?24?%;color:#303133;margin-top:%?23?%;line-height:1;padding:0 %?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body-wrap .list-wrap .list-wrap-item .content.hongbao-content[data-v-2a734324]{background-color:#fff;border-radius:%?20?%;padding-bottom:%?30?%}.body-wrap .list-wrap .list-wrap-item .content .hongbao-img[data-v-2a734324]{height:%?330?%}.body-wrap .list-wrap .list-wrap-item .content .hongbao-img uni-image[data-v-2a734324]{width:100%;height:100%}.body-wrap .list-wrap .list-wrap-item .content .price[data-v-2a734324]{font-size:%?28?%;color:#303133;line-height:1;padding-left:%?26?%;margin-top:%?20?%}.body-wrap .list-wrap .list-wrap-item .content .point[data-v-2a734324]{font-size:%?32?%;padding-left:%?26?%;margin-top:%?17?%;line-height:1}.body-wrap .list-wrap .list-wrap-item .content .point uni-text[data-v-2a734324]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .stock[data-v-2a734324]{font-size:%?20?%;color:#909399;line-height:1;padding-left:%?26?%;margin-top:%?20?%}',""]),t.exports=i},c517:function(t,i,a){"use strict";var e=a("a3a4"),o=a.n(e);o.a},d03a:function(t,i,a){"use strict";var e=a("0fb7"),o=a.n(e);o.a}}]);