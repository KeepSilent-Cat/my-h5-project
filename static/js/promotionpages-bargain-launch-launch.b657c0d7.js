(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-bargain-launch-launch"],{"0363":function(t,i,n){"use strict";n.r(i);var a=n("88b5"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},"1b61":function(t,i,n){"use strict";var a=n("d778"),e=n.n(a);e.a},"255c":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("5c47"),n("0506"),n("a1c1"),n("23f4"),n("7d2f"),n("9c4e"),n("ab80"),n("bf0f"),n("c223"),Function.prototype.asyAfter=function(t){var i=this;return function(){var n=i.apply(this,arguments);return"next"===n?t.apply(this,arguments):n}},Date.prototype.pattern=function(t){var i={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[this.getDay()+""])),i)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[n]:("00"+i[n]).substr((""+i[n]).length)));return t};var a=function(){},e=a.prototype;e.getUnix=function(){return(new Date).getTime()},e.getTodayUnix=function(){var t=new Date,i="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate()," 00:00:00");return new Date(i).getTime()},e.getYearUnix=function(){var t=new Date;return t.setMonth(0),t.setDate(1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()},e.getLastDate=function(t){if(t){var i=new Date(t);if(i.pattern)return i.pattern("yyyy-MM-dd");var n=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,a=i.getDate()<10?"0"+i.getDate():i.getDate();return i.getFullYear()+"-"+n+"-"+a}};var o=new RegExp("-","g");e.getFormatTime=function(t,i){if(!t)return"";switch(function(t){return/^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(t))[1]}(t)){case"Date":t=t.getTime();break;case"String":t=t.replace(o,"/");default:t=new Date(t).getTime();break}var n=this.getUnix(),a=(this.getYearUnix(),(n-t)/1e3);if(t>n&&i)return this.getLastDate(t);return function(t,i){var n=function(t){return t<=0||Math.floor(t/60)<=0?"刚刚":"next"}.asyAfter((function(t){return t<3600?Math.floor(t/60)+"分钟前":"next"})).asyAfter((function(t,i){var n=r.getTodayUnix();return t>=3600&&i-n>=0?Math.floor(t/60/60)+"小时前":"next"})).asyAfter((function(t,i){var n=r.getTodayUnix();return t=(n-i)/1e3,t/86400<=31?Math.ceil(t/86400)+"天前":"next"})).asyAfter((function(t,i){return r.getLastDate(i)}));return n(t,i)}(a,t)};var r=new a,s=r;i.default=s},"2aef":function(t,i,n){var a=n("c86c");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.uni-countdown[data-v-e9e34d7a]{padding:%?2?% 0;display:inline-flex;flex-wrap:nowrap;justify-content:center}.uni-countdown__splitor[data-v-e9e34d7a]{justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?24?%}.uni-countdown__splitor.day[data-v-e9e34d7a]{line-height:%?50?%}.uni-countdown__number[data-v-e9e34d7a]{line-height:%?44?%;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}',""]),t.exports=i},"2f0f":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return a}));var a={uniCountDown:n("c898").default,uniPopup:n("9f0f").default,loadingCover:n("c8fc").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"bargain",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/bargain/bargain_background1.png")+")"},attrs:{"data-theme":t.themeStyle}},[n("v-uni-view",{staticClass:"bargain_top",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/bargain/bargain_background.png")+")"}}),n("v-uni-view",{staticClass:"bargin_content"},[n("v-uni-view",{staticClass:"uer_info_base"},[n("v-uni-view",{staticClass:"user_info_img"},[n("v-uni-image",{attrs:{src:""==t.info.headimg?t.$util.img(t.$util.getDefaultImage().default_headimg):t.$util.img(t.info.headimg),mode:"widthFix"}})],1),n("v-uni-text",{staticClass:"user_info_name"},[t._v(t._s(t._f("cover")(t.info.nickname)))])],1),n("v-uni-view",{staticClass:"bargin_propaganda"},[n("v-uni-text",{staticClass:"marks"},[t._v("“")]),n("v-uni-text",[t._v("我发现一件好物，快来帮我砍一刀")]),n("v-uni-text",{staticClass:"marks"},[t._v("”")])],1),n("v-uni-view",{staticClass:"goods"},[n("v-uni-view",{staticClass:"goods_img"},[n("v-uni-image",{attrs:{src:t.$util.img(t.info.sku_image),mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"goods_content"},[n("v-uni-view",{staticClass:"goods_title"},[t._v(t._s(t.info.sku_name))]),n("v-uni-view",{staticClass:"goods_price"},[n("v-uni-view",[t._v("原价"),n("v-uni-text",{staticClass:"original_price"},[t._v(t._s(t.$lang("common.currencySymbol"))+t._s(t.info.price))])],1),n("v-uni-view",[t._v("最低可砍至"),n("v-uni-text",{staticClass:"bottom_price"},[t._v(t._s(t.$lang("common.currencySymbol"))+t._s(t.info.floor_price))])],1)],1),n("v-uni-view",{staticClass:"partake_num"},[t._v("已有"),n("v-uni-text",{staticClass:"ident"},[t._v(t._s(t.info.curr_num))]),t._v("人帮砍"),n("v-uni-text",{staticClass:"residue-num"},[t._v("剩余数量"),n("v-uni-text",{staticClass:"ident"},[t._v(t._s(t.info.bargain_stock))])],1)],1),t.timeMachine?n("v-uni-view",[t._v("还剩"),n("uni-count-down",{attrs:{day:t.timeMachine.d,hour:t.timeMachine.h,minute:t.timeMachine.i,second:t.timeMachine.s,color:"#fff",splitorColor:"#333 !important",backgroundColor:"#000","border-color":"transparent"}})],1):t._e()],1)],1),n("v-uni-view",{staticClass:"progress_info"},[n("v-uni-view",[t._v("已砍至"),n("v-uni-text",[t._v(t._s(t._f("moneyFormat")(t.info.curr_price)))]),t._v("元")],1),n("v-uni-view",[t._v("最低"+t._s(t.info.floor_price)+"元")])],1),n("v-uni-view",{staticClass:"progress"},[n("v-uni-view",{staticClass:"progress_item",style:{width:(t.progress>5?t.progress:5)+"%"}},[n("v-uni-image",{staticClass:"progress_img",attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_progress.png")}})],1)],1),t.bargainRecord.length?[n("v-uni-view",{staticClass:"bragain_recode"},[n("v-uni-view",{staticClass:"bragain_recode_list"},[t._l(t.bargainRecord,(function(i,a){return[a<4?n("v-uni-image",{key:a+"_0",attrs:{src:""==i.headimg?t.$util.img(t.$util.getDefaultImage().default_headimg):t.$util.img(i.headimg)}}):t._e()]})),t.bargainRecord.length<5?t._l(5-t.bargainRecord.length,(function(i,a){return n("v-uni-view",{staticClass:"bragain_recode_add"},[t._v("+")])})):t._e()],2),5==t.bargainRecord.length?n("v-uni-view",{staticClass:"bragain_recode_more"},[t._v("●●●")]):t._e(),5==t.bargainRecord.length?n("v-uni-view",{staticClass:"bragain_recode_add"},[t._v("+")]):t._e()],1),n("v-uni-view",{staticClass:"bragain_recode_detail",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBargainRecode.apply(void 0,arguments)}}},[t._v("已有"+t._s(t.info.curr_num)+"人帮砍，查看砍价记录"),n("v-uni-text",{staticClass:"iconfont iconright"})],1)]:t._e(),n("v-uni-view",{staticClass:"invitation_peo"},[t.info.self?n("v-uni-view",{staticClass:"flex-box"},[0==t.info.status?[0==t.info.buy_type?n("v-uni-button",{staticClass:"btn-vice",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buyNow.apply(void 0,arguments)}}},[t._v("不砍了，直接购买")]):t._e(),n("v-uni-button",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openSharePopup.apply(void 0,arguments)}}},[t._v("喊好友来砍一刀")])]:t._e(),1==t.info.status?[n("v-uni-button",{staticClass:"btn-vice",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.redirectTo("/promotionpages/bargain/list/list")}}},[t._v("低价拿更多商品")]),0==t.info.order_id?n("v-uni-button",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buyNow.apply(void 0,arguments)}}},[t._v("立即购买")]):t._e()]:t._e(),2==t.info.status?[n("v-uni-button",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.redirectTo("/promotionpages/bargain/list/list")}}},[t._v("低价拿更多商品")])]:t._e()],2):n("v-uni-view",{staticClass:"flex-box"},[0==t.info.status?[t.info.cut?n("v-uni-button",{staticClass:"btn-vice",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.redirectTo("/promotionpages/bargain/list/list")}}},[t._v("我也要低价拿")]):n("v-uni-button",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bargain.apply(void 0,arguments)}}},[t._v("帮好友砍一刀")])]:[n("v-uni-button",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.redirectTo("/promotionpages/bargain/list/list")}}},[t._v("我也要低价拿")])]],2)],1)],2),n("v-uni-view",{staticClass:"bargin_introduction"},[n("v-uni-view",{staticClass:"bargin_introduction_title"},[n("v-uni-image",{staticClass:"left",attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_left.png")}}),t._v("砍价流程"),n("v-uni-image",{staticClass:"right",attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_right.png")}})],1),n("v-uni-view",{staticClass:"bargin_introduction_content"},[n("v-uni-view",{staticClass:"flow"},[n("v-uni-view",{staticClass:"flow_item"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_kanjia.png")}}),n("v-uni-view",[t._v("发起商品砍价")])],1),n("v-uni-view",{staticClass:"flow_item"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_friend.png")}}),n("v-uni-view",[t._v("邀请好友砍价达要求")])],1),n("v-uni-view",{staticClass:"flow_item"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_good.png")}}),n("v-uni-view",[t._v("领取商品带回家")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"bargin_introduction"},[n("v-uni-view",{staticClass:"bargin_introduction_title"},[n("v-uni-image",{staticClass:"left",attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_left.png")}}),t._v("砍价记录"),n("v-uni-image",{staticClass:"right",attrs:{src:t.$util.img("upload/uniapp/bargain/bargain_right.png")}})],1),n("v-uni-view",{staticClass:"bargin_introduction_content"},[t.bargainRecord.length?n("v-uni-view",{staticClass:"bargin_invitation"},t._l(t.bargainRecord,(function(i,a){return n("v-uni-view",{key:a,staticClass:"item"},[n("v-uni-view",{staticClass:"item_left"},[n("v-uni-image",{attrs:{src:""==i.headimg?t.$util.img(t.$util.getDefaultImage().default_headimg):t.$util.img(i.headimg)}}),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t._f("cover")(i.nickname)))]),i.member_id==t.info.member_id?n("v-uni-view",{staticClass:"tip"},[t._v("手气真好，狂砍一刀")]):n("v-uni-view",{staticClass:"tip"},[t._v("好友助力，帮砍一刀")])],1)],1),n("v-uni-view",{staticClass:"item_right"},[t._v("砍掉￥"),n("v-uni-text",[t._v(t._s(i.money))])],1)],1)})),1):n("v-uni-view",[n("v-uni-view",{staticClass:"record-empty"},[t._v("现在还没有砍价记录！")])],1)],1)],1),n("v-uni-view",{on:{touchmove:function(i){i.preventDefault(),i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[n("uni-popup",{ref:"sharePopup",staticClass:"share-popup",attrs:{type:"bottom"}},[n("v-uni-view",[n("v-uni-view",{staticClass:"share-title"},[t._v("分享")]),n("v-uni-view",{staticClass:"share-content"},[n("v-uni-view",{staticClass:"share-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copyUrl.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"share-btn",attrs:{plain:!0}},[n("v-uni-view",{staticClass:"iconfont iconfuzhilianjie"}),n("v-uni-text",[t._v("复制链接")])],1)],1)],1),n("v-uni-view",{staticClass:"share-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeSharePopup.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("取消分享")])],1)],1)],1)],1),n("uni-popup",{ref:"uniPopup",attrs:{type:"center",maskClick:!1}},[n("v-uni-view",{staticClass:"bargain-popup"},[n("v-uni-image",{staticClass:"head",attrs:{src:t.$util.img("upload/uniapp/bargain/coin.png"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"title"},[t._v("您已成功帮砍")]),n("v-uni-view",{staticClass:"money"},[n("v-uni-text",{staticClass:"num color-base-text"},[t._v(t._s(t.bargainMoney))]),n("v-uni-text",{staticClass:"unit"},[t._v("元")])],1)],1),n("v-uni-text",{staticClass:"iconfont iconroundclose",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closePopup.apply(void 0,arguments)}}})],1),n("loading-cover",{ref:"loadingCover"})],1)},o=[]},"302a":function(t,i,n){var a=n("c86c");i=a(!1),i.push([t.i,"[data-v-b9a0f1b8] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{overflow-y:unset;background:none!important}[data-v-b9a0f1b8] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important}",""]),t.exports=i},3312:function(t,i,n){var a=n("2aef");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("967d").default;e("6db9fec6",a,!0,{sourceMap:!1,shadowMode:!1})},3848:function(t,i,n){"use strict";n.r(i);var a=n("2f0f"),e=n("dcae");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("1b61"),n("46c9");var r=n("828b"),s=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"b9a0f1b8",null,!1,a["a"],void 0);i["default"]=s.exports},"46c9":function(t,i,n){"use strict";var a=n("fd24"),e=n.n(a);e.a},"55de":function(t,i,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("e966"),n("c223"),n("e838"),n("5c47");var e=a(n("cba7")),o=a(n("9f0f")),r=a(n("2913")),s={components:{LTime:e.default,uniPopup:o.default},data:function(){return{windowHeight:0,id:0,info:{headimg:""},bargainRecord:[],page:1,totalPage:1,load:!1,timeMachine:null,memberId:0,bargainMoney:"0.00"}},onLoad:function(t){this.getHeight(),t.id&&(this.id=t.id)},computed:{cutMoney:function(){return this.info.price-this.info.curr_price},surplusMoney:function(){return this.info.curr_price-this.info.floor_price},progress:function(){var t=this.info.price-this.info.floor_price,i=parseInt(this.cutMoney/t*100);return isNaN(i)?0:i}},onShow:function(){var t=this;this.$langConfig.refresh(),this.$store.dispatch("getAddonIsexit").then((function(i){if(i.bargain)if(t.getBargainInfo(),uni.getStorageSync("token"))t.getMemberId();else{var n=encodeURIComponent("/promotionpages/bargain/launch/launch?id="+t.id);t.$util.redirectTo("/pages/login/login/login",{back:n},"redirectTo")}else t.$util.showToast({title:"砍价未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3)}))},mixins:[r.default],methods:{getHeight:function(){var t=this;uni.getSystemInfo({success:function(i){t.windowHeight=i.windowHeight-44,t.iphoneX&&(t.windowHeight=t.windowHeight-33)}})},getBargainInfo:function(){var t=this;this.$api.sendRequest({url:"/bargain/api/bargain/info",data:{id:this.id},success:function(i){0==i.code?(t.info=i.data,0==t.info.status?uni.setNavigationBarTitle({title:"砍价进行中"}):1==t.info.status?uni.setNavigationBarTitle({title:"砍价成功"}):2==t.info.status&&uni.setNavigationBarTitle({title:"砍价失败"}),t.getBargainRecord(1),0==t.info.status&&(t.timeMachine=t.$util.countDown(t.info.end_time-i.timestamp)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):uni.getStorageSync("token")&&t.$util.redirectTo("/promotionpages/bargain/my_bargain/my_bargain")},fail:function(i){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getBargainRecord:function(t){var i=this;this.load||(this.load=!0,this.$api.sendRequest({url:"/bargain/api/bargain/record",data:{page:t,id:this.info.launch_id},success:function(n){i.load=!1,i.totalPage=n.data.page_count,i.page=t,0==n.code&&n.data.list.length&&(i.bargainRecord=1==t?n.data.list:i.bargainRecord.concat(n.data.list))}}))},scrolltolower:function(){var t=this.page+1;!this.load&&t<=this.totalPage&&this.getBargainRecord(t)},buyNow:function(){var t=this;uni.setStorage({key:"bargainOrderCreateData",data:{launch_id:this.info.launch_id},success:function(i){t.$util.redirectTo("/promotionpages/bargain/payment/payment")}})},bargain:function(){var t=this;uni.getStorageSync("token")?this.$api.sendRequest({url:"/bargain/api/bargain/bargain",data:{id:this.info.launch_id},success:function(i){0==i.code&&(t.bargainMoney=parseFloat(i.data.bargain_money).toFixed(2),t.$refs.uniPopup.open(),t.getBargainInfo())}}):this.$refs.login.open("/promotionpages/bargain/launch/launch?id="+this.id)},getMemberId:function(){var t=this;this.$api.sendRequest({url:"/api/member/id",success:function(i){i.code>=0&&(t.memberId=i.data,t.token=uni.getStorageSync("token"))}})},closePopup:function(){this.$refs.uniPopup.close()},openSharePopup:function(){this.$refs.sharePopup.open()},closeSharePopup:function(){this.$refs.sharePopup.close()},copyUrl:function(){var t=this,i="嘿！朋友就差你这一刀了，帮一下忙呗~"+this.$config.h5Domain+"/promotionpages/bargain/launch/launch?id="+this.id;this.memberId&&(i+="&suid="+this.memberId),this.$util.copy(i,(function(){t.closeSharePopup()}))},closeNum:function(){this.$refs.sharePopup.close()},toBargainRecode:function(){var t=uni.createSelectorQuery().select(".bargin_introduction");t.boundingClientRect((function(t){uni.pageScrollTo({duration:100,scrollTop:t.top+100})})).exec()}},filters:{moneyFormat:function(t){return parseFloat(t).toFixed(2)},cover:function(t){return"string"==typeof t&&t.length>0?t.substr(0,1)+"******"+t.substr(-1):""}},onShareAppMessage:function(){var t="/promotionpages/bargain/launch/launch?id="+this.id;return this.memberId&&(t+="&suid="+this.memberId),{title:"嘿！朋友就差你这一刀了，帮一下忙呗~",imageUrl:this.$util.img(this.info.sku_image,{size:"big"}),path:t,success:function(t){},fail:function(t){}}},onReachBottom:function(){this.scrolltolower()}};i.default=s},"73e8":function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){}));var a=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-text",[this._v(this._s(this.temp))])},e=[]},8330:function(t,i,n){var a=n("c86c");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-b9a0f1b8] .uni-countdown__number{padding:0 %?4?%;line-height:%?36?%;height:%?36?%}[data-v-b9a0f1b8] .uni-countdown__splitor.day{line-height:%?36?%}.bargain[data-v-b9a0f1b8]{background-size:cover;background-repeat:repeat-y;padding-bottom:%?100?%}.bargain .bargain_top[data-v-b9a0f1b8]{height:%?160?%;background-size:100% auto;background-repeat:no-repeat}.bargain .bargin_content[data-v-b9a0f1b8]{background-color:#fff;border-radius:%?20?%;margin:%?24?%;padding-bottom:%?60?%}.bargain .bargin_content .uer_info_base[data-v-b9a0f1b8]{display:flex;position:relative;padding:%?30?% 0}.bargain .bargin_content .uer_info_base .user_info_img[data-v-b9a0f1b8]{background-color:#fff;width:%?150?%;height:%?150?%;margin-top:%?-80?%;margin-left:%?50?%;border-radius:50%;border:2px solid #fff;overflow:hidden}.bargain .bargin_content .uer_info_base .user_info_img uni-image[data-v-b9a0f1b8]{width:100%;height:100%}.bargain .bargin_content .uer_info_base .user_info_name[data-v-b9a0f1b8]{margin-left:%?30?%;color:#909399;align-self:center}.bargain .bargin_content .uer_info_base .rule_detail[data-v-b9a0f1b8]{position:absolute;height:%?34?%;line-height:%?34?%;padding:0 %?12?%;line-height:%?34?%;font-size:%?18?%;border:1px solid;right:%?24?%;top:%?30?%;border-radius:%?34?%}.bargain .bargin_content .bargin_propaganda[data-v-b9a0f1b8]{display:flex;justify-content:space-between;margin:0 %?27?%;font-size:%?36?%;color:#333;font-weight:700}.bargain .bargin_content .bargin_propaganda .marks[data-v-b9a0f1b8]{font-size:%?68?%;line-height:1;color:#b0b0b0}.bargain .bargin_content .goods[data-v-b9a0f1b8]{display:flex;margin-top:%?40?%;margin-left:%?24?%;margin-right:%?24?%;padding:%?24?%;background-color:#fafafa;border-radius:%?10?%;overflow:hidden}.bargain .bargin_content .goods .goods_img[data-v-b9a0f1b8]{min-width:%?180?%;width:%?180?%;height:%?180?%;margin-right:%?20?%;border-radius:%?10?%}.bargain .bargin_content .goods .goods_img uni-image[data-v-b9a0f1b8]{width:100%;height:100%}.bargain .bargin_content .goods .goods_content[data-v-b9a0f1b8]{flex:1;overflow:hidden}.bargain .bargin_content .goods .goods_content .goods_title[data-v-b9a0f1b8]{line-height:1;font-size:%?30?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:%?10?%}.bargain .bargin_content .goods .goods_content .goods_price[data-v-b9a0f1b8]{display:flex}.bargain .bargin_content .goods .goods_content .goods_price > uni-view[data-v-b9a0f1b8]{color:#666;font-size:%?22?%;margin-right:%?20?%}.bargain .bargin_content .goods .goods_content .goods_price > uni-view .original_price[data-v-b9a0f1b8]{text-decoration:line-through}.bargain .bargin_content .goods .goods_content .goods_price > uni-view .bottom_price[data-v-b9a0f1b8]{color:#fe0b42}.bargain .bargin_content .goods .goods_content .partake_num[data-v-b9a0f1b8]{font-size:%?22?%;color:#666}.bargain .bargin_content .goods .goods_content .partake_num .residue-num[data-v-b9a0f1b8]{margin-left:%?10?%}.bargain .bargin_content .goods .goods_content .partake_num .ident[data-v-b9a0f1b8]{color:#fe0b42}.bargain .bargin_content .progress_info[data-v-b9a0f1b8]{display:flex;justify-content:space-between;margin:%?40?% %?24?% 0}.bargain .bargin_content .progress_info > uni-view[data-v-b9a0f1b8]{font-size:%?20?%;color:#666}.bargain .bargin_content .progress_info > uni-view uni-text[data-v-b9a0f1b8]{color:#fe0b42}.bargain .bargin_content .progress[data-v-b9a0f1b8]{position:relative;margin:%?11?% %?24?% 0;height:%?30?%;background-color:#f2f2f2;border-radius:%?30?%}.bargain .bargin_content .progress .progress_item[data-v-b9a0f1b8]{width:5%;position:absolute;left:0;border-radius:%?30?%;height:%?30?%;background:linear-gradient(90deg,#ffa800 0,#ffe852);-webkit-animation:all 1s forwards;animation:all 1s forwards}.bargain .bargin_content .progress .progress_item .progress_img[data-v-b9a0f1b8]{position:absolute;right:%?-27?%;top:%?-12?%;height:%?54?%;width:%?54?%}.bargain .bargin_content .bragain_recode[data-v-b9a0f1b8]{display:flex;align-items:center;justify-content:space-between;margin:%?58?% %?24?% %?20?%}.bargain .bargin_content .bragain_recode .bragain_recode_list[data-v-b9a0f1b8]{display:flex;margin:0 %?26?%}.bargain .bargin_content .bragain_recode .bragain_recode_list .bragain_recode_add[data-v-b9a0f1b8]{margin-left:%?44?%}.bargain .bargin_content .bragain_recode .bragain_recode_list uni-image[data-v-b9a0f1b8]{width:%?84?%;height:%?84?%;border:%?4?% solid #fe0b42;border-radius:50%;margin-left:%?-22?%}.bargain .bargin_content .bragain_recode .bragain_recode_list uni-image[data-v-b9a0f1b8]:first-child{margin-left:0}.bargain .bargin_content .bragain_recode .bragain_recode_more[data-v-b9a0f1b8]{width:%?84?%;height:%?84?%;line-height:%?84?%;text-align:center;font-size:%?12?%;color:#999}.bargain .bargin_content .bragain_recode .bragain_recode_add[data-v-b9a0f1b8]{width:%?84?%;height:%?84?%;line-height:%?76?%;text-align:center;border-radius:50%;border:1px dashed #e6e6e6;font-size:%?60?%;color:#e6e6e6}.bargain .bargin_content .bragain_recode_detail[data-v-b9a0f1b8]{font-size:%?24?%;color:#000;margin:0 %?34?% 0}.bargain .bargin_content .bragain_recode_detail .iconfont[data-v-b9a0f1b8]{font-size:%?24?%;color:#333}.bargain .bargin_content .invitation_peo[data-v-b9a0f1b8]{margin-top:%?40?%;margin:%?28?% %?30?% 0}.bargain .bargin_content .invitation_peo .tip[data-v-b9a0f1b8]{text-align:center;color:#fe0b42;font-size:%?22?%}.bargain .bargin_content .invitation_peo .flex-box[data-v-b9a0f1b8]{display:flex}.bargain .bargin_content .invitation_peo .flex-box uni-button[data-v-b9a0f1b8]{flex:1}.bargain .bargin_content .invitation_peo .flex-box uni-button[data-v-b9a0f1b8]:nth-child(2){margin-left:%?20?%}.bargain .bargin_content .invitation_peo .btn[data-v-b9a0f1b8]{height:%?80?%;line-height:%?80?%;background:linear-gradient(180deg,#ffe852,#ffa800);border-radius:%?80?%;text-align:center;font-size:%?30?%;color:#ff222c;font-weight:700;margin:%?20?% 0}.bargain .bargin_content .invitation_peo .btn-vice[data-v-b9a0f1b8]{height:%?80?%;line-height:%?80?%;background:linear-gradient(180deg,#ff6e6e,#fb3939);border-radius:%?80?%;text-align:center;font-size:%?30?%;color:#ff222c;font-weight:700;margin:%?20?% 0;color:#fff}.bargain .bargin_introduction[data-v-b9a0f1b8]{margin:%?24?%}.bargain .bargin_introduction .record-empty[data-v-b9a0f1b8]{text-align:center;font-size:%?24?%;color:#999;padding:%?100?% 0;background-color:#fff;border-radius:%?20?%}.bargain .bargin_introduction .bargin_introduction_title[data-v-b9a0f1b8]{display:flex;align-items:center;justify-content:center;font-size:%?36?%;color:#fff;font-weight:500;padding:%?40?% 0}.bargain .bargin_introduction .bargin_introduction_title uni-image[data-v-b9a0f1b8]{width:%?180?%;height:%?8?%}.bargain .bargin_introduction .bargin_introduction_title uni-image.left[data-v-b9a0f1b8]{margin-right:%?13?%}.bargain .bargin_introduction .bargin_introduction_title uni-image.right[data-v-b9a0f1b8]{margin-left:%?13?%}.bargain .bargin_introduction .flow[data-v-b9a0f1b8]{display:flex;background-color:#fff;border-radius:%?20?%;padding:%?56?% 0}.bargain .bargin_introduction .flow .flow_item[data-v-b9a0f1b8]{position:relative;flex:1;text-align:center}.bargain .bargin_introduction .flow .flow_item uni-image[data-v-b9a0f1b8]{width:%?88?%;height:%?88?%;margin-bottom:%?20?%}.bargain .bargin_introduction .flow .flow_item > uni-view[data-v-b9a0f1b8]{color:#fd0742;font-size:%?24?%}.bargain .bargin_introduction .flow .flow_item[data-v-b9a0f1b8]::after{position:absolute;content:"";height:%?2?%;width:%?100?%;background-color:#fd0742;top:%?44?%;right:-22%}.bargain .bargin_introduction .flow .flow_item[data-v-b9a0f1b8]:last-child::after{width:0}.bargain .bargin_introduction .bargin_invitation[data-v-b9a0f1b8]{background-color:#fff;border-radius:%?20?%;padding:%?27?%}.bargain .bargin_introduction .bargin_invitation .item[data-v-b9a0f1b8]{display:flex;align-items:center;padding:%?20?% 0}.bargain .bargin_introduction .bargin_invitation .item .item_left[data-v-b9a0f1b8]{flex:1;display:flex;overflow:hidden}.bargain .bargin_introduction .bargin_invitation .item .item_left uni-image[data-v-b9a0f1b8]{height:%?70?%;width:%?70?%;border:2px solid #ff222c;border-radius:50%;margin-right:%?20?%}.bargain .bargin_introduction .bargin_invitation .item .item_left > uni-view[data-v-b9a0f1b8]{flex:1;overflow:hidden}.bargain .bargin_introduction .bargin_invitation .item .item_left > uni-view .title[data-v-b9a0f1b8]{font-size:%?22?%;white-space:nowrap;\r\n  /* 不换行 */overflow:hidden;text-overflow:ellipsis}.bargain .bargin_introduction .bargin_invitation .item .item_left > uni-view .tip[data-v-b9a0f1b8]{font-size:%?20?%;color:#666}.bargain .bargin_introduction .bargin_invitation .item .item_right[data-v-b9a0f1b8]{min-width:%?100?%;color:#ff222c;font-size:%?20?%}.bargain .bargin_introduction .bargin_invitation .item .item_right uni-text[data-v-b9a0f1b8]{font-size:%?24?%}.bargain .bargin_introduction .bargin_invitation .item_more[data-v-b9a0f1b8]{margin-top:%?20?%;text-align:center;font-size:%?20?%;color:#999}.bargain-popup[data-v-b9a0f1b8]{width:80vw;padding:%?60?%;background-color:#fff;position:relative;box-sizing:border-box;border-radius:%?20?%}.bargain-popup .head[data-v-b9a0f1b8]{width:55%;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-70%);transform:translate(-50%,-70%)}.bargain-popup .title[data-v-b9a0f1b8]{text-align:center;font-size:%?32?%;margin-top:%?40?%}.bargain-popup .money[data-v-b9a0f1b8]{text-align:center}.bargain-popup .money .num[data-v-b9a0f1b8]{font-size:%?36?%;font-weight:600}.bargain-popup .money .unit[data-v-b9a0f1b8]{font-size:%?24?%;margin-left:%?8?%}.iconroundclose[data-v-b9a0f1b8]{display:block;font-size:%?60?%;color:#fff;text-align:center}.share-popup .share-title[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-title[data-v-b9a0f1b8]{line-height:%?60?%;font-size:%?32?%;padding:%?15?% 0;text-align:center}.share-popup .share-content[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content[data-v-b9a0f1b8]{display:flex;display:-webkit-flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;-o-flex-wrap:wrap;flex-wrap:wrap;padding:%?15?%}.share-popup .share-content .share-box[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content .share-box[data-v-b9a0f1b8]{flex:1;text-align:center}.share-popup .share-content .share-box .share-btn[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content .share-box .share-btn[data-v-b9a0f1b8]{margin:0;padding:0;border:none;line-height:1;height:auto}.share-popup .share-content .share-box .share-btn uni-text[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content .share-box .share-btn uni-text[data-v-b9a0f1b8]{margin-top:%?20?%;font-size:%?24?%;display:block;color:#303133}.share-popup .share-content .share-box .iconfont[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content .share-box .iconfont[data-v-b9a0f1b8]{font-size:%?80?%;line-height:normal}.share-popup .share-content .share-box .iconfuzhilianjie[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-content .share-box .iconfuzhilianjie[data-v-b9a0f1b8]{color:#07c160}.share-popup .share-footer[data-v-b9a0f1b8],\r\n.uni-popup__wrapper-box .share-footer[data-v-b9a0f1b8]{height:%?90?%;line-height:%?90?%;border-top:%?2?% #f5f5f5 solid;text-align:center;color:#666}',""]),t.exports=i},"88b5":function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("64aa");var a={name:"UniCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},backgroundColorClass:{type:String,default:""},borderColor:{type:String,default:"#000000"},borderColorClass:{type:String,default:""},color:{type:String,default:"#000000"},colorClass:{type:String,default:""},splitorColor:{type:String,default:"#000000"},splitorColorClass:{type:String,default:""},day:{type:[Number,String],default:0},hour:{type:[Number,String],default:0},minute:{type:[Number,String],default:0},second:{type:[Number,String],default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},mounted:function(t){var i=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){i.seconds--,i.seconds<0?i.timeUp():i.countDown()}),1e3)},watch:{day:function(t){var i=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){i.seconds--,i.seconds<0?i.timeUp():i.countDown()}),1e3)},hour:function(t){var i=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){i.seconds--,i.seconds<0?i.timeUp():i.countDown()}),1e3)},minute:function(t){var i=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){i.seconds--,i.seconds<0?i.timeUp():i.countDown()}),1e3)},second:function(t){var i=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){i.seconds--,i.seconds<0?i.timeUp():i.countDown()}),1e3)}},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,i,n,a){return t=Number(t),i=Number(i),n=Number(n),a=Number(a),60*t*60*24+60*i*60+60*n+a},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,i=0,n=0,a=0,e=0;t>0?(i=Math.floor(t/86400),n=Math.floor(t/3600)-24*i,a=Math.floor(t/60)-24*i*60-60*n,e=Math.floor(t)-24*i*60*60-60*n*60-60*a):this.timeUp(),i<10&&(i="0"+i),n<10&&(n="0"+n),a<10&&(a="0"+a),e<10&&(e="0"+e),this.d=i,this.h=n,this.i=a,this.s=e}}};i.default=a},9327:function(t,i,n){"use strict";var a=n("8bdb"),e=n("9f69"),o=n("1ded").f,r=n("c435"),s=n("9e70"),c=n("b6a1"),u=n("862c"),d=n("0931"),l=n("a734"),g=e("".slice),b=Math.min,f=d("endsWith"),p=!l&&!f&&!!function(){var t=o(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!p&&!f},{endsWith:function(t){var i=s(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,a=i.length,e=void 0===n?a:b(r(n),a),o=s(t);return g(i,e-o.length,e)===o}})},"9e71":function(t,i,n){"use strict";n.r(i);var a=n("fde1"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},c898:function(t,i,n){"use strict";n.r(i);var a=n("dcf5"),e=n("0363");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("e831");var r=n("828b"),s=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"e9e34d7a",null,!1,a["a"],void 0);i["default"]=s.exports},cba7:function(t,i,n){"use strict";n.r(i);var a=n("73e8"),e=n("9e71");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(o);var r=n("828b"),s=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"cdb5b9a6",null,!1,a["a"],void 0);i["default"]=s.exports},d778:function(t,i,n){var a=n("8330");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("967d").default;e("148624ac",a,!0,{sourceMap:!1,shadowMode:!1})},dcae:function(t,i,n){"use strict";n.r(i);var a=n("55de"),e=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(o);i["default"]=e.a},dcf5:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay&&t.d>0?n("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay&&t.d>0?n("v-uni-view",{staticClass:"uni-countdown__splitor day",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s((t.showColon,"天")))]):t._e(),n("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v("秒")])],1)},e=[]},e831:function(t,i,n){"use strict";var a=n("3312"),e=n.n(a);e.a},fd24:function(t,i,n){var a=n("302a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("967d").default;e("175acafa",a,!0,{sourceMap:!1,shadowMode:!1})},fde1:function(t,i,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("64aa"),n("9327");var e=a(n("255c")),o={name:"l-time",props:{text:{type:[String,Number,Date],default:""},maxDate:{type:Boolean,default:!1}},data:function(){return{textVal:this.text}},watch:{text:function(){this.textVal=this.text}},computed:{temp:function(){return this.getText()}},methods:{getText:function(){var t=this,i=e.default.getFormatTime(t.textVal,t.maxDate);return i&&(i.endsWith("刚刚")||i.endsWith("分钟前"))&&setTimeout((function(){var i=t.textVal;t.textVal="",t.textVal=i}),6e4),this.textVal?i:""},onClick:function(){this.$emit("on-tap",this.textVal)}}};i.default=o}}]);