(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-modify_face-modify_face"],{"0843":function(t,i,e){var a=e("319d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("967d").default;s("305d9a84",a,!0,{sourceMap:!1,shadowMode:!1})},"195d":function(t,i,e){"use strict";e.r(i);var a=e("38c7"),s=e.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"319d":function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".my-canvas[data-v-530aaf99]{display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-530aaf99]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-530aaf99]{display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-530aaf99]{display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-530aaf99]{height:50px;position:fixed!important;box-sizing:border-box;background:#000;width:100%;left:0;bottom:0;z-index:100009;flex-direction:row}.oper[data-v-530aaf99]{display:flex;flex-direction:column;justify-content:center;\r\n\t/* padding: 10upx 20upx 80upx 20upx; */width:100%;height:100%;box-sizing:border-box;align-self:center}.btn-wrapper[data-v-530aaf99]{display:flex;flex-direction:row;\r\n\r\n\r\nheight:50px;\r\njustify-content:space-between}.btn-wrapper uni-view[data-v-530aaf99]{display:flex;align-items:center;justify-content:center;font-size:%?28?%}.btn-wrapper .cancel[data-v-530aaf99]{color:#fff;font-weight:700;text-align:center}.btn-wrapper .upload[data-v-530aaf99]{background:#31bb6d;color:#fff;font-weight:700;height:%?60?%;line-height:%?60?%;padding:0 %?30?%;border-radius:%?8?%}.btn-wrapper .iconfont[data-v-530aaf99]{color:#fff;font-size:18px}.hover[data-v-530aaf99]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-530aaf99]{display:flex;flex-direction:row;flex-grow:1}.clr-wrapper uni-view[data-v-530aaf99]{display:flex;align-items:center;justify-content:center;font-size:14px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-530aaf99]{flex-grow:1}",""]),t.exports=i},3471:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,i){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,a.default)(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h,o=!0,r=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return o=t.done,t},e:function(t){r=!0,h=t},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(r)throw h}}}},e("01a2"),e("e39c"),e("bf0f"),e("844d"),e("18f7"),e("de6c"),e("7a76"),e("c9b5");var a=function(t){return t&&t.__esModule?t:{default:t}}(e("5d6b"))},"38c7":function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("2634")),n=a(e("2fdc")),h=a(e("3471"));e("e838"),e("e966"),e("0c26"),e("5ef2"),e("c9b5"),e("bf0f"),e("ab80"),e("4db2"),e("9480"),e("4d8f"),e("7b97"),e("668a"),e("c5b7"),e("8ff5"),e("2378"),e("641a"),e("64e0"),e("cce3"),e("efba"),e("d009"),e("bd7d"),e("7edd"),e("d798"),e("f547"),e("5e54"),e("b60a"),e("8c18"),e("12973"),e("f991"),e("198e"),e("8557"),e("63b1"),e("1954"),e("1cf1"),e("5c47"),e("2c10"),e("15d1"),e("d5c6"),e("5a56"),e("f074"),e("c976"),e("18f7"),e("de6c"),e("dc89"),e("2425");var o={name:"yq-avatar",data:function(){return{csH:"0px",sD:"none",sT:"-10000px",pT:"-10000px",iS:{},sS:{},sO:!0,bW:"19%",bD:"flex",tp:0,imgSrc:{imgSrc:""}}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",fileType:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created:function(){var t=this;this.cc=uni.createCanvasContext("avatar-canvas",this),this.cco=uni.createCanvasContext("oper-canvas",this),this.ccp=uni.createCanvasContext("prv-canvas",this),this.qlty=parseFloat(this.quality)||1,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate=!1===this.canRotate||!0===this.inner||"true"===this.inner||"false"===this.canRotate?0:1,this.letScale=!1===this.canScale||"false"===this.canScale?0:1,this.isin=!0===this.inner||"true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=parseFloat(this.minScale)||.3,this.mxScale=parseFloat(this.maxScale)||4,this.noBar=!0===this.noTab||"true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.fType="jpg"===this.fileType?"jpg":"png",this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),this.noBar?this.fWindowResize():uni.showTabBar({fail:function(){t.noBar=1},success:function(){t.noBar=0},complete:function(i){t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.wW=t.windowWidth,this.drawTop=t.windowTop,this.wH=t.windowHeight,this.noBar||(this.wH+=50),this.csH=this.wH-50+"px",this.tp=this.csH,this.tp=t.windowTop+parseInt(this.csH)+"px",this.pxRatio=this.wW/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var e,a={},s=(0,h.default)(i);try{for(s.s();!(e=s.n()).done;){var n=e.value;if(n){if(n=n.trim().split(":"),n[1].toString().indexOf("upx")>=0){var o=n[1].trim().split(" ");for(var r in o)o[r]&&o[r].toString().indexOf("upx")>=0&&(o[r]=parseFloat(o[r])*this.pxRatio+"px");n[1]=o.join(" ")}a[n[0].trim()]=n[1].trim()}}}catch(c){s.e(c)}finally{s.f()}this.iS=a}this.expWidth&&(this.eW=this.expWidth.toString().indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.eH=this.expHeight.toString().indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.sD&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中...",mask:!0});var e=t.imgPath=i.tempFilePaths[0];uni.getImageInfo({src:e,success:function(i){if(t.imgWidth=i.width,t.imgHeight=i.height,t.path=e,!t.hasSel){var a=t.sS||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var s=t.selWidth.toString().indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),n=t.selHeight.toString().indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);a.width=s+"px",a.height=n+"px",a.top=(t.wH-n-50|0)/2+"px",a.left=(t.wW-s|0)/2+"px",t.sS=a}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){t.$util.showToast({title:"请选择正确图片"})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var i=this.sS,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height),h=this.eW||s*this.pixelRatio,o=this.eH||n*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:h,destHeight:o,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var i=this.sS,e=(parseInt(i.width),parseInt(i.height),this.prvX),a=this.prvY,s=this.prvWidth,n=this.prvHeight,h=this.eW||parseInt(i.width)*this.pixelRatio,o=this.eH||parseInt(i.height)*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:h,destHeight:o,canvasId:"prv-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.wW,a=this.wH,s=this.imgWidth,n=this.imgHeight,h=s/n,o=e-40,r=a-50-80,c=o/r,l=parseInt(this.sS.width),d=parseInt(this.sS.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":h>1?this.fixWidth=1:this.fixHeight=1;break;case"short":h>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":l>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":l>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":h>1?this.lckWidth=1:this.lckHeight=1;break;case"short":h>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":l>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":l>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(o=l,r=o/h):this.fixHeight?(r=d,o=r*h):h<c?n<r?(o=s,r=n):o=r*h:s<o?(o=s,r=n):r=o/h,this.isin&&(o<l&&(o=l,r=o/h,this.lckHeight=0),r<d&&(r=d,o=r*h,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-o)/2|0,this.posHeight=(a-r-50)/2|0,this.useWidth=0|o,this.useHeight=0|r,this.centerX=this.posWidth+o/2,this.centerY=this.posHeight+r/2,this.focusX=0,this.focusY=0;var f=this.sS,u=parseInt(f.left),p=parseInt(f.top),v=parseInt(f.width),g=parseInt(f.height),m=(this.canvas,this.canvasOper,this.cc,this.cco);m.beginPath(),m.setLineWidth(3),m.setGlobalAlpha(1),m.setStrokeStyle("white"),m.strokeRect(u,p,v,g),m.setFillStyle("black"),m.setGlobalAlpha(.5),m.fillRect(0,0,this.wW,p),m.fillRect(0,p,u,g),m.fillRect(0,p+g,this.wW,this.wH-g-p-50),m.fillRect(u+v,p,this.wW-v-u,g),m.setGlobalAlpha(1),m.setStrokeStyle("red"),m.moveTo(u+15,p),m.lineTo(u,p),m.lineTo(u,p+15),m.moveTo(u+v-15,p),m.lineTo(u+v,p),m.lineTo(u+v,p+15),m.moveTo(u+15,p+g),m.lineTo(u,p+g),m.lineTo(u,p+g-15),m.moveTo(u+v-15,p+g),m.lineTo(u+v,p+g),m.lineTo(u+v,p+g-15),m.stroke(),m.draw(!1,(function(){i&&(t.sD="flex",t.sT=t.drawTop+"px",t.fDrawImage(!0))})),this.$emit("init")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.cc,e=this.useWidth*this.scaleSize,a=this.useHeight*this.scaleSize;if(this.bgImage?i.drawImage(this.bgImage,0,0,this.wW,this.wH-50):i.fillRect(0,0,this.wW,this.wH-50),this.isin){var s=this.focusX*(this.scaleSize-1),n=this.focusY*(this.scaleSize-1);i.translate(this.centerX,this.centerY),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,this.posWidth-this.centerX-s,this.posHeight-this.centerY-n,e,a)}else i.translate(this.posWidth+e/2,this.posHeight+a/2),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-e/2,-a/2,e,a);i.draw(!1)}},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var i=this.sS,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height);uni.showLoading({title:"加载中...",mask:!0}),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,expWidth:s*this.pixelRatio,expHeight:n*this.pixelRatio,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){t.prvImgTmp=i=i.tempFilePath;var e=t.ccp,a=t.wW,s=parseInt(t.csH),n=parseInt(t.sS.width),h=parseInt(t.sS.height),o=a-40,r=s-80,c=o/n,l=h*c;l<r?(n=o,h=l):(c=r/h,n*=c,h=r),e.fillRect(0,0,a,s),t.prvX=a=(a-n)/2|0,t.prvY=s=(s-h)/2|0,t.prvWidth=n|=0,t.prvHeight=h|=0,e.drawImage(i,a,s,n,h),e.draw(!1),t.btop(i).then((function(i){t.sO=!1,t.pT=t.drawTop+"px"})),t.sO=!1,t.pT=t.drawTop+"px"},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var a=i.selWidth,s=i.selHeight,n=i.expWidth,h=i.expHeight,o=i.quality,r=i.canRotate,c=i.canScale,l=i.minScale,d=i.maxScale,f=i.stretch,u=i.fileType,p=i.inner,v=i.lock;n&&(this.eW=n.toString().indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),h&&(this.eH=h.toString().indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h)),this.letRotate=!1===r||!0===p||"true"===p||"false"===r?0:1,this.letScale=!1===c||"false"===c?0:1,this.qlty=parseFloat(o)||1,this.mnScale=parseFloat(l)||.3,this.mxScale=parseFloat(d)||4,this.stc=f,this.isin=!0===p||"true"===p?1:0,this.fType="jpg"===u?"jpg":"png",this.lck=v,this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),a&&s&&(a=a.toString().indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),s=s.toString().indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.sS.width=a+"px",this.sS.height=s+"px",this.sS.top=(this.wH-s-50|0)/2+"px",this.sS.left=(this.wW-a|0)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],a=i[1];if(this.touch0=e,this.touch1=a,a){var s=a.x-e.x,n=a.y-e.y;this.fgDistance=Math.sqrt(s*s+n*n)}},fMove:function(t){var i=t.touches,e=i[0],a=i[1];if(a){var s=a.x-e.x,n=a.y-e.y,h=Math.sqrt(s*s+n*n),o=.005*(h-this.fgDistance),r=this.scaleSize+o;do{if(!this.letScale)break;if(r<this.mnScale)break;if(r>this.mxScale)break;var c=this.useWidth*o/2,l=this.useHeight*o/2;if(this.isin){var d,f,u=this.useWidth*r,p=this.useHeight*r,v=(this.posWidth,this.posHeight,parseInt(this.sS.left)),g=parseInt(this.sS.top),m=parseInt(this.sS.width),w=parseInt(this.sS.height),x=v+m,b=g+w;if(u<=m||p<=w)break;this.cx=d=this.focusX*r-this.focusX,this.cy=f=this.focusY*r-this.focusY,this.posWidth-=c,this.posHeight-=l,this.posWidth-d>v&&(this.posWidth=v+d),this.posWidth+u-d<x&&(this.posWidth=x-u+d),this.posHeight-f>g&&(this.posHeight=g+f),this.posHeight+p-f<b&&(this.posHeight=b-p+f)}else this.posWidth-=c,this.posHeight-=l;this.scaleSize=r}while(0);this.fgDistance=h,a.x!==e.x&&this.letRotate&&(s=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),n=(a.y-e.y)/(a.x-e.x),this.rotateDeg+=180*Math.atan((n-s)/(1+s*n))/Math.PI,this.touch0=e,this.touch1=a),this.fDrawImage()}else if(this.touch0){var y=e.x-this.touch0.x,S=e.y-this.touch0.y,I=this.posWidth+y,H=this.posHeight+S;if(this.isin){var W,T,k=this.useWidth*this.scaleSize,$=this.useHeight*this.scaleSize,C=I,D=H,R=C+k,_=D+$,P=parseInt(this.sS.left),M=parseInt(this.sS.top),z=P+parseInt(this.sS.width),O=M+parseInt(this.sS.height);this.cx=W=this.focusX*this.scaleSize-this.focusX,this.cy=T=this.focusY*this.scaleSize-this.focusY,!this.lckWidth&&Math.abs(y)<100&&(P<C-W?this.posWidth=P+W:z>R-W?this.posWidth=z-k+W:(this.posWidth=I,this.focusX-=y)),!this.lckHeight&&Math.abs(S)<100&&(M<D-T?(this.focusY-=M+T-this.posHeight,this.posHeight=M+T):O>_-T?(this.focusY-=O+T-(this.posHeight+$),this.posHeight=O-$+T):(this.posHeight=H,this.focusY-=S))}else Math.abs(y)<100&&!this.lckWidth&&(this.posWidth=I),Math.abs(S)<100&&!this.lckHeight&&(this.posHeight=H),this.focusX-=y,this.focusY-=S;this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fHideImg:function(){this.prvImg="",this.pT="-10000px",this.sO=!0,this.prvImgData=null,this.target=null},fClose:function(){this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar(),this.$emit("end")},fGetImgData:function(){var t=this;return new Promise((function(i,e){var a=t.prvX,s=t.prvY,n=t.prvWidth,h=t.prvHeight;uni.canvasGetImageData({canvasId:"prv-canvas",x:a,y:s,width:n,height:h,success:function(t){i(t.data)},fail:function(t){e(t)}},t)}))},fColorChange:function(t){var i=this;return(0,n.default)((0,s.default)().mark((function e(){var a,n,h,o,r,c,l,d,f,u,p,v,g,m,w,x,b,y,S,I,H,W,T,k,$,C,D;return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Date.now(),!(a-i.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(i.prvTm=a,uni.showLoading({title:"加载中...",mask:!0}),i.prvImgData){e.next=11;break}return e.next=8,i.fGetImgData().catch((function(){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(i.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:i.target=new Uint8ClampedArray(i.prvImgData.length);case 11:if(n=i.prvImgData,h=i.target,o=t.detail.value,0===o)h=n;else for(o=(o+100)/200,o<.005&&(o=0),o>.995&&(o=1),H=n.length-1;H>=0;H-=4)r=n[H-3]/255,c=n[H-2]/255,l=n[H-1]/255,x=Math.max(r,c,l),w=Math.min(r,c,l),v=x-w,x===w?f=0:x===r&&c>=l?f=(c-l)/v*60:x===r&&c<l?f=(c-l)/v*60+360:x===c?f=(l-r)/v*60+120:x===l&&(f=(r-c)/v*60+240),p=(x+w)/2,0===p||x===w?u=0:0<p&&p<=.5?u=v/(2*p):p>.5&&(u=v/(2-2*p)),n[H]&&(d=n[H]),o<.5?u=u*o/.5:o>.5&&(u=2*u+2*o-u*o/.5-1),0===u?r=c=l=Math.round(255*p):(p<.5?m=p*(1+u):p>=.5&&(m=p+u-p*u),g=2*p-m,b=f/360,y=b+1/3,S=b,I=b-1/3,W=function(t){return t<0?t+1:t>1?t-1:t},T=function(t){return t<1/6?g+6*(m-g)*t:t>=1/6&&t<.5?m:t>=.5&&t<2/3?g+6*(m-g)*(2/3-t):g},r=y=Math.round(255*T(W(y))),c=S=Math.round(255*T(W(S))),l=I=Math.round(255*T(W(I)))),d&&(h[H]=d),h[H-3]=r,h[H-2]=c,h[H-1]=l;k=i.prvX,$=i.prvY,C=i.prvWidth,D=i.prvHeight,uni.canvasPutImageData({canvasId:"prv-canvas",x:k,y:$,width:C,height:D,data:h,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},i);case 15:case"end":return e.stop()}}),e)})))()},btop:function(t){return this.base64=t,new Promise((function(i,e){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),h=n.length,o=new Uint8Array(h);while(h--)o[h]=n.charCodeAt(h);return i((window.URL||window.webkitURL).createObjectURL(new Blob([o],{type:s})))}))},blob:function(t,i){uni.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){var e="data:image/jpeg;base64,"+t.data;"function"==typeof i&&i(e)}})}}};i.default=o},"50f6":function(t,i,e){"use strict";e.r(i);var a=e("87cf"),s=e("73ca");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("eedd");var h=e("828b"),o=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"c7e4400e",null,!1,a["a"],void 0);i["default"]=o.exports},"73ca":function(t,i,e){"use strict";e.r(i);var a=e("81a1"),s=e.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"81a1":function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("2913")),n=a(e("e66b")),h={data:function(){return{memberImg:"",newImg:"",imgurl:""}},components:{imgCropping:n.default},mixins:[s.default],onShow:function(){uni.getStorageSync("token")||this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/member/modify_face/modify_face"},"redirectTo"),this.$langConfig.refresh(),this.initGetHeading()},methods:{initGetHeading:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(i){0==i.code?(t.memberImg=i.data.headimg,t.imgurl=i.data.headimg):t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(i){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},chooseImage:function(){this.$refs.imgCropping.fSelect()},myUpload:function(t){var i=this;uni.request({url:this.$config.baseUrl+"/api/upload/headimgBase64",method:"POST",data:{app_type:"h5",app_type_name:"H5",images:t.base64},header:{"content-type":"application/x-www-form-urlencoded;application/json"},dataType:"json",responseType:"text",success:function(t){0==t.data.code&&(i.newImg=t.data.data.pic_path,i.imgurl=t.data.data.pic_path)},fail:function(){i.$util.showToast({title:"头像上传失败"})}})},previewImage:function(){uni.previewImage({current:0,urls:this.images})},save:function(){var t=this;this.$api.sendRequest({url:"/api/member/modifyheadimg",data:{headimg:this.newImg},success:function(i){0==i.code?(t.$util.showToast({title:"头像修改成功"}),setTimeout((function(){t.$util.redirectTo("/pages/member/info/info",{},"redirectTo")}),1e3)):t.$util.showToast({title:i.message})}})}}};i.default=h},"87cf":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={loadingCover:e("c8fc").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"nc-modify-content",attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"modify"},[e("v-uni-view",[""==t.newImg?e("v-uni-image",{attrs:{src:t.memberImg?t.$util.img(t.memberImg):t.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.memberImg=t.$util.getDefaultImage().default_headimg}}}):e("v-uni-image",{attrs:{src:t.$util.img(t.newImg),mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.newImg=t.$util.getDefaultImage().default_headimg}}})],1)],1),e("v-uni-view",{staticClass:"opection-box"},[""==t.newImg?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage()}}},[t._v("点击上传")])]:[e("v-uni-view",{staticClass:"opec"},[e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save()}}},[t._v("确认保存")]),e("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage()}}},[t._v("重新上传")])],1)]],2),e("img-cropping",{ref:"imgCropping",attrs:{selWidth:"300",selHeight:"300"},on:{upload:function(i){arguments[0]=i=t.$handleEvent(i),t.myUpload.apply(void 0,arguments)}}}),e("loading-cover",{ref:"loadingCover"})],1)},n=[]},"962b":function(t,i,e){var a=e("d930");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("967d").default;s("ae42157e",a,!0,{sourceMap:!1,shadowMode:!1})},d930:function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-page-body[data-v-c7e4400e]{overflow:hidden}.modify[data-v-c7e4400e]{position:relative;padding-top:%?50?%}.modify uni-view[data-v-c7e4400e]{width:%?500?%;height:%?500?%;margin:0 auto;overflow:hidden;background-color:#fff;border:%?4?% solid #fff;border-radius:100%}.modify uni-view uni-image[data-v-c7e4400e]{width:100%;height:100%}.opection-box[data-v-c7e4400e]{margin-top:%?50?%}.opec[data-v-c7e4400e]{width:100%;padding:0 10%;box-sizing:border-box;display:flex;justify-content:space-between}',""]),t.exports=i},dfac:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"my-avatar",style:[t.iS],attrs:{src:t.imgSrc.imgSrc},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),e("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.fMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.fEnd.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.csH,top:t.pT},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fHideImg.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.sD,top:t.tp}},[e("v-uni-view",{staticClass:"oper"},[t.sO?e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-view",{staticClass:"cancel",style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fClose.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("取消")])],1),e("v-uni-view",{style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconshangchuan"})],1),e("v-uni-view",{style:{width:t.bW,display:t.bD},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fRotate.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconxuanzhuan"})],1),e("v-uni-view",{style:{width:t.bW},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fUpload.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"upload"},[t._v("上传")])],1)],1):e("v-uni-view",{staticClass:"clr-wrapper"},[e("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.fColorChange.apply(void 0,arguments)}}}),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPrvUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},s=[]},e66b:function(t,i,e){"use strict";e.r(i);var a=e("dfac"),s=e("195d");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("fc8d");var h=e("828b"),o=Object(h["a"])(s["default"],a["b"],a["c"],!1,null,"530aaf99",null,!1,a["a"],void 0);i["default"]=o.exports},eedd:function(t,i,e){"use strict";var a=e("962b"),s=e.n(a);s.a},fc8d:function(t,i,e){"use strict";var a=e("0843"),s=e.n(a);s.a}}]);