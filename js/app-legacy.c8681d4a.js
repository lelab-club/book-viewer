(function(){"use strict";var o={6829:function(o,n,t){t(9557),t(2017),t(2361),t(3933);var i=t(662),e=t(5076),a=t(2711),r={class:"action-bar"},s={class:"page-num"};function l(o,n,t,i,l,u){var c=(0,e.up)("left-icon"),p=(0,e.up)("plus-icon"),f=(0,e.up)("minus-icon"),g=(0,e.up)("right-icon"),d=(0,e.up)("Flipbook");return(0,e.wg)(),(0,e.iD)("div",{id:"app",class:(0,a.C_)({"has-mouse":l.hasMouse}),onTouchstart:n[0]||(n[0]=function(o){return l.hasMouse=!1})},[(0,e.Wm)(d,{class:"flipbook",pages:l.pages,pagesHiRes:l.pagesHiRes,startPage:l.pageNum,ref:"flipbook",onFlipLeftStart:u.onFlipLeftStart,onFlipLeftEnd:u.onFlipLeftEnd,onFlipRightStart:u.onFlipRightStart,onFlipRightEnd:u.onFlipRightEnd,onZoomStart:u.onZoomStart,onZoomEnd:u.onZoomEnd},{default:(0,e.w5)((function(o){return[(0,e._)("div",r,[(0,e.Wm)(c,{class:(0,a.C_)(["btn left",{disabled:!o.canFlipLeft}]),onClick:o.flipLeft},null,8,["class","onClick"]),(0,e.Wm)(p,{class:(0,a.C_)(["btn plus",{disabled:!o.canZoomIn}]),onClick:o.zoomIn},null,8,["class","onClick"]),(0,e._)("span",s," Page "+(0,a.zw)(o.page)+" of "+(0,a.zw)(o.numPages),1),(0,e.Wm)(f,{class:(0,a.C_)(["btn minus",{disabled:!o.canZoomOut}]),onClick:o.zoomOut},null,8,["class","onClick"]),(0,e.Wm)(g,{class:(0,a.C_)(["btn right",{disabled:!o.canFlipRight}]),onClick:o.flipRight},null,8,["class","onClick"])])]})),_:1},8,["pages","pagesHiRes","startPage","onFlipLeftStart","onFlipLeftEnd","onFlipRightStart","onFlipRightEnd","onZoomStart","onZoomEnd"])],34)}t(3757);var u=t(718),c=t(4609),p=t(5066),f=t(7651),g=t(3323),d=function(o){return(0,e.dD)("data-v-75601d4e"),o=o(),(0,e.Cn)(),o},h={class:"github-ribbon"},b=d((function(){return(0,e._)("a",{target:"_blank",href:"https://github.com/ts1/flipbook-vue"},"Fork me on GitHub",-1)})),k=[b];function m(o,n){return(0,e.wg)(),(0,e.iD)("div",h,k)}var v=t(6168);const F={},w=(0,v.Z)(F,[["render",m],["__scopeId","data-v-75601d4e"]]);var j=w,R={components:{Flipbook:g.Z,LeftIcon:u.Z,RightIcon:c.Z,PlusIcon:p.Z,MinusIcon:f.Z,Ribbon:j},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart:function(o){console.log("flip-left-start",o)},onFlipLeftEnd:function(o){console.log("flip-left-end",o),window.location.hash="#"+o},onFlipRightStart:function(o){console.log("flip-right-start",o)},onFlipRightEnd:function(o){console.log("flip-right-end",o),window.location.hash="#"+o},onZoomStart:function(o){console.log("zoom-start",o)},onZoomEnd:function(o){console.log("zoom-end",o)},setPageFromHash:function(){var o=parseInt(window.location.hash.slice(1),10);isFinite(o)&&(this.pageNum=o)}},mounted:function(){var o=this;window.addEventListener("keydown",(function(n){var t=o.$refs.flipbook;t&&(37==n.keyCode&&t.canFlipLeft&&t.flipLeft(),39==n.keyCode&&t.canFlipRight&&t.flipRight())})),setTimeout((function(){o.pages=[null,"book/1.jpg","book/2.jpg","book/3.jpg","book/4.jpg","book/5.jpg","book/6.jpg","book/7.jpg","book/8.jpg","book/9.jpg","book/10.jpg","book/11.jpg","book/12.jpg","book/13.jpg","book/14.jpg","book/15.jpg","book/17.jpg","book/19.jpg","book/20.jpg"],o.pagesHiRes=o.pages}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}};const C=(0,v.Z)(R,[["render",l]]);var Z=C;(0,i.ri)(Z).mount("#app")}},n={};function t(i){var e=n[i];if(void 0!==e)return e.exports;var a=n[i]={exports:{}};return o[i].call(a.exports,a,a.exports,t),a.exports}t.m=o,function(){var o=[];t.O=function(n,i,e,a){if(!i){var r=1/0;for(c=0;c<o.length;c++){i=o[c][0],e=o[c][1],a=o[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(t.O).every((function(o){return t.O[o](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){o.splice(c--,1);var u=e();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=o.length;c>0&&o[c-1][2]>a;c--)o[c]=o[c-1];o[c]=[i,e,a]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var i in n)t.o(n,i)&&!t.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){var o={143:0};t.O.j=function(n){return 0===o[n]};var n=function(n,i){var e,a,r=i[0],s=i[1],l=i[2],u=0;if(r.some((function(n){return 0!==o[n]}))){for(e in s)t.o(s,e)&&(t.m[e]=s[e]);if(l)var c=l(t)}for(n&&n(i);u<r.length;u++)a=r[u],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(c)},i=self["webpackChunkbook_viewer"]=self["webpackChunkbook_viewer"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(6829)}));i=t.O(i)})();
//# sourceMappingURL=app-legacy.c8681d4a.js.map