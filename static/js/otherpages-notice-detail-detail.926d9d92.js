(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-detail-detail"],{"2a03":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={loadingCover:i("c8fc").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"notice-title"},[e._v(e._s(e.detail.title))]),i("v-uni-view",{staticClass:"notice-content"},[i("v-uni-rich-text",{attrs:{nodes:e.content}})],1),i("v-uni-view",{staticClass:"notice-meta"},[i("v-uni-text",{staticClass:"notice-time"},[e._v("发表时间: "+e._s(e.$util.timeStampTurnTime(e.detail.create_time)))])],1),i("loading-cover",{ref:"loadingCover"})],1)},r=[]},"3c84":function(e,t,i){"use strict";i.r(t);var n=i("2a03"),a=i("c7c6");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("a0d6");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7ae8d7b8",null,!1,n["a"],void 0);t["default"]=c.exports},a041:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.page[data-v-7ae8d7b8]{width:100%;height:100%;padding:%?20?%;box-sizing:border-box;background-color:#fff}.notice-title[data-v-7ae8d7b8]{font-size:%?32?%;text-align:center}.notice-content[data-v-7ae8d7b8]{margin-top:%?20?%;word-break:break-all;font-size:%?28?%}.notice-meta[data-v-7ae8d7b8]{text-align:right;margin-top:%?20?%;color:#909399}.notice-meta .notice-time[data-v-7ae8d7b8]{font-size:%?24?%}',""]),e.exports=t},a0d6:function(e,t,i){"use strict";var n=i("c370"),a=i.n(n);a.a},a4a1:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("bea9")),r=n(i("2913")),o={data:function(){return{noticeId:0,content:"",detail:{}}},mixins:[r.default],onLoad:function(e){var t=this;e.notice_id?this.noticeId=e.notice_id:this.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),this.$api.sendRequest({url:"/api/notice/info",data:{id:this.noticeId},success:function(e){0==e.code?e.data?(t.detail=e.data,t.content=(0,a.default)(e.data.content),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo")}),1e3))},fail:function(e){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onShow:function(){this.$langConfig.refresh()},onShareAppMessage:function(e){var t="[公告]"+this.detail.title,i="/otherpages/notice/detail/detail?notice_id="+this.noticeId;return{title:t,path:i,success:function(e){},fail:function(e){}}}};t.default=o},bea9:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("5ef2"),i("5c47"),i("2c10"),i("a1c1"),i("23f4"),i("7d2f"),i("9c4e"),i("ab80"),i("aa9c"),i("473f"),i("bf0f"),i("3efd");var a=n(i("5b7c")),r=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,o=/^<\/([-A-Za-z0-9_]+)[^>]*>/,c=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l=p("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),h=p("script,style");function p(e){for(var t={},i=e.split(","),n=0;n<i.length;n++)t[i[n]]=!0;return t}var g=function(e){e=function(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}(e),e=function(e){return e=e.replace(/<!--[\s\S]*-->/gi,""),e}(e),e=function(e){return e=e.replace(/\\/g,"").replace(/<img/g,'<img style="width:100% !important;display:block;"'),e=e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,t){return'<img style="width:100% !important;display:block;" src="'+a.default.img(t)+'"/>'})),e}(e),e=function(e){return e=e.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(e,t){return e=e.replace(/[:](\s?)[\s\S]*/gi,(function(e,t){return e.replace(/"/g,"'")})),e})),e}(e);var t=[],i={node:"root",children:[]};return function(e,t){var i,n,a,p=[],g=e;p.last=function(){return this[this.length-1]};while(e){if(n=!0,p.last()&&h[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,i){return i=i.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(i),""})),b("",p.last());else if(0==e.indexOf("\x3c!--")?(i=e.indexOf("--\x3e"),i>=0&&(t.comment&&t.comment(e.substring(4,i)),e=e.substring(i+3),n=!1)):0==e.indexOf("</")?(a=e.match(o),a&&(e=e.substring(a[0].length),a[0].replace(o,b),n=!1)):0==e.indexOf("<")&&(a=e.match(r),a&&(e=e.substring(a[0].length),a[0].replace(r,m),n=!1)),n){i=e.indexOf("<");var v=i<0?e:e.substring(0,i);e=i<0?"":e.substring(i),t.chars&&t.chars(v)}if(e==g)throw"Parse Error: "+e;g=e}function m(e,i,n,a){if(i=i.toLowerCase(),l[i])while(p.last()&&d[p.last()])b("",p.last());if(u[i]&&p.last()==i&&b("",i),a=s[i]||!!a,a||p.push(i),t.start){var r=[];n.replace(c,(function(e,t){var i=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";r.push({name:t,value:i,escaped:i.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(i,r,a)}}function b(e,i){if(i){for(n=p.length-1;n>=0;n--)if(p[n]==i)break}else var n=0;if(n>=0){for(var a=p.length-1;a>=n;a--)t.end&&t.end(p[a]);p.length=n}}b()}(e,{start:function(e,n,a){var r={name:e};if(0!==n.length&&(r.attrs=function(e){return e.reduce((function(e,t){var i=t.value,n=t.name;return e[n]?e[n]=e[n]+" "+i:e[n]=i,e}),{})}(n)),a){var o=t[0]||i;o.children||(o.children=[]),o.children.push(r)}else t.unshift(r)},end:function(e){var n=t.shift();if(n.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)i.children.push(n);else{var a=t[0];a.children||(a.children=[]),a.children.push(n)}},chars:function(e){var n={type:"text",text:e};if(0===t.length)i.children.push(n);else{var a=t[0];a.children||(a.children=[]),a.children.push(n)}},comment:function(e){var i={node:"comment",text:e},n=t[0];n.children||(n.children=[]),n.children.push(i)}}),i.children};t.default=g},c370:function(e,t,i){var n=i("a041");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("d884ed08",n,!0,{sourceMap:!1,shadowMode:!1})},c7c6:function(e,t,i){"use strict";i.r(t);var n=i("a4a1"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}}]);