(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-goods-search-search"],{"11ed":function(t,i,e){"use strict";e("6a54");var s=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("dc69"),e("8f71"),e("bf0f"),e("0c26"),e("5c47"),e("af8f"),e("aa9c");var o=s(e("2913")),n={data:function(){return{inputValue:"",historyList:[],searchList:[],showSearch:!0,alikeList:[],isIndex:!1,placWords:"",hotList:[],isAllHistory:!1,siteId:0}},onLoad:function(t){t.keyword&&(this.inputValue=t.keyword),t.siteId&&(this.siteId=t.siteId),!uni.getStorageSync("search")&&uni.setStorageSync("search",[])},onShow:function(){this.$langConfig.refresh(),this.findHistoryList(),this.defaultSearch(),this.findHotList(),this.$nextTick((function(){this.getHistoryHeight()}))},mixins:[o.default],methods:{findHistoryList:function(){this.historyList=uni.getStorageSync("search").reverse()},deleteHistoryList:function(){var t=this;uni.showModal({title:"提示",content:"确认删除全部历史记录？",success:function(i){i.confirm&&(uni.setStorageSync("search",[]),t.findHistoryList())}})},deleteItem:function(t){var i=this;uni.showModal({title:"提示",content:"确认删除该条历史记录？",success:function(e){if(e.confirm){var s=uni.getStorageSync("search"),o=s.filter((function(i){return i!=t}));uni.setStorageSync("search",o),i.findHistoryList()}}})},defaultSearch:function(){var t=this;this.$api.sendRequest({url:"/api/goods/defaultSearchWords",success:function(i){t.placWords=i.data.words}})},findHotList:function(){var t=this;this.$api.sendRequest({url:"/api/goods/hotSearchWords",success:function(i){t.hotList=i.data.search_keywords}})},inputFocus:function(t){this.showScroll=!1,""!=this.inputValue.trim()&&(this.dataList=[])},otherSearch:function(t){this.inputValue=t,this.search()},search:function(){var t=this.inputValue.trim()?this.inputValue.trim():this.placWords;if(""!=t.trim()){this.showScroll=!0;var i=uni.getStorageSync("search"),e=[];i.length?(e=i.filter((function(i){return i!=t.trim()})),e.push(t.trim())):e.push(t.trim()),uni.setStorageSync("search",e);var s="/pages/goods/list/list";this.siteId>0&&(s="/otherpages/shop/list/list"),this.$util.redirectTo(s,{site_id:this.siteId,keyword:t})}else if(""==this.placWords)this.$util.showToast({title:"搜索内容不能为空哦"});else{s="/pages/goods/list/list";this.siteId&&(s="/otherpages/shop/list/list"),this.$util.redirectTo(s,{site_id:this.siteId,keyword:t})}},getHistoryHeight:function(){var t=this,i=uni.createSelectorQuery().in(this);i.select("#history-list").boundingClientRect((function(i){i&&i.height>2*uni.upx2px(70)+2*uni.upx2px(35)&&(t.isAllHistory=!0)})).exec()}}};i.default=n},"4f9d":function(t,i,e){"use strict";var s=e("fc1c1"),o=e.n(s);o.a},"80f9":function(t,i,e){"use strict";e.r(i);var s=e("11ed"),o=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);i["default"]=o.a},"8f95":function(t,i,e){var s=e("c86c");i=s(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-901be54a] .fixed{position:relative;top:0}[data-v-901be54a] .empty{margin-top:0!important}.cart-empty[data-v-901be54a]{padding-top:54px}.content[data-v-901be54a]{width:100vw;height:calc(100vh - env(safe-area-inset-bottom) - 0px);background:#fff}.cate-search[data-v-901be54a]{width:100%;height:%?100?%;background:#fff;padding:%?10?% %?30?%;box-sizing:border-box;padding-top:%?30?%}.cate-search uni-input[data-v-901be54a]{font-size:%?28?%;height:%?60?%;padding:%?15?% %?25?% %?15?% %?30?%;line-height:%?60?%;width:calc(100% - %?120?%)}.cate-search uni-text[data-v-901be54a]{font-size:%?32?%;color:#909399;width:%?120?%;text-align:center}.cate-search .search-box[data-v-901be54a]{width:100%;height:100%;background:#f8f8f8;display:flex;justify-content:center;align-items:center;border-radius:%?40?%}.search-content[data-v-901be54a]{box-sizing:border-box;background:#fff}.history[data-v-901be54a]{width:100%;box-sizing:border-box}.history .history-box[data-v-901be54a]{width:100%;height:100%;background:#fff;padding:%?30?% %?30?% %?0?% %?30?%;box-sizing:border-box;overflow:hidden}.history .history-box .history-top[data-v-901be54a]{width:100%;height:%?60?%;display:flex;justify-content:space-between;align-items:center;font-size:%?32?%}.history .history-box .history-top .title[data-v-901be54a]{font-weight:500;font-size:%?32?%}.history .history-box .history-top .iconfont[data-v-901be54a]{color:#909399;font-size:%?28?%}.history .history-box .history-bottom[data-v-901be54a]{width:100%;padding-top:%?20?%;position:relative}.history .history-box .history-bottom .history-li[data-v-901be54a]{display:inline-block;margin-right:%?20?%;margin-bottom:%?15?%;max-width:100%}.history .history-box .history-bottom .history-li uni-button[type="primary"][data-v-901be54a]{line-height:%?66?%;background:#f8f8f8!important;height:%?66?%;color:#303133!important;margin:0 %?0?% %?4?% 0!important;padding:0 %?20?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history .history-box .history-bottom .history-li.history_more[data-v-901be54a]{margin-right:0;position:absolute;bottom:0;right:0}.history .hidden-show[data-v-901be54a]{width:100%;height:%?70?%;text-align:center;line-height:%?70?%}.search-alike[data-v-901be54a]{width:100%;height:calc(100vh - %?100?%);padding:0 %?20?%;box-sizing:border-box}.search-alike .alike-box[data-v-901be54a]{width:100%;height:100%;background:#fff;border-radius:%?20?%;overflow:hidden}',""]),t.exports=i},aecf:function(t,i,e){"use strict";e.r(i);var s=e("c96e"),o=e("80f9");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("4f9d");var a=e("828b"),r=Object(a["a"])(o["default"],s["b"],s["c"],!1,null,"901be54a",null,!1,s["a"],void 0);i["default"]=r.exports},c96e:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"cate-search"},[e("v-uni-view",{staticClass:"search-box"},[e("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"50","confirm-type":"search",placeholder:t.placWords?t.placWords:t.$lang("inputPlaceholder")},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFocus.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.search()}},model:{value:t.inputValue,callback:function(i){t.inputValue=i},expression:"inputValue"}}),e("v-uni-text",{staticClass:"iconfont iconsousuo1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search()}}})],1)],1),e("v-uni-view",{staticClass:"search-content"},[t.historyList.length?e("v-uni-view",{staticClass:"history"},[e("v-uni-view",{staticClass:"history-box"},[e("v-uni-view",{staticClass:"history-top"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$lang("history")))]),e("v-uni-view",{staticClass:"icon iconfont iconicon7",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteHistoryList.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"history-bottom ",style:{maxHeight:t.isAllHistory?"168rpx":"100%"},attrs:{id:"history-list"}},[t._l(t.historyList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"history-li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.otherSearch(i)}}},[e("v-uni-button",{attrs:{type:"primary"}},[t._v(t._s(i))])],1)})),t.isAllHistory?e("v-uni-view",{staticClass:"history-li history_more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isAllHistory=!1}}},[e("v-uni-button",{attrs:{type:"primary"}},[e("v-uni-text",{staticClass:"iconfont iconiconangledown"})],1)],1):t._e()],2)],1)],1):t._e(),t.hotList.length?e("v-uni-view",{staticClass:"history"},[e("v-uni-view",{staticClass:"history-box"},[e("v-uni-view",{staticClass:"history-top"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$lang("hot")))])],1),e("v-uni-view",{staticClass:"history-bottom"},t._l(t.hotList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"history-li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.otherSearch(i)},longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteItem(i)}}},[e("v-uni-button",{attrs:{type:"primary"}},[t._v(t._s(i))])],1)})),1)],1)],1):t._e()],1)],1)],1)},o=[]},fc1c1:function(t,i,e){var s=e("8f95");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=e("967d").default;o("547a8acc",s,!0,{sourceMap:!1,shadowMode:!1})}}]);