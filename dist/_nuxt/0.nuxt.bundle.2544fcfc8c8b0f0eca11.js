webpackJsonp([0],{446:function(t,n,e){"use strict";function i(t){e(537)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(539),r=e(540),a=e(24),s=i,c=a(o.a,r.a,s,null,null);n.default=c.exports},448:function(t,n,e){function i(t){if("number"==typeof t)return t;if(r(t))return a;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var e=l.test(t);return e||u.test(t)?f(t.slice(2),e?2:8):c.test(t)?a:+t}var o=e(41),r=e(25),a=NaN,s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt;t.exports=i},449:function(t,n,e){function i(t,n,e){var i=!0,s=!0;if("function"!=typeof t)throw new TypeError(a);return r(e)&&(i="leading"in e?!!e.leading:i,s="trailing"in e?!!e.trailing:s),o(t,n,{leading:i,maxWait:n,trailing:s})}var o=e(451),r=e(41),a="Expected a function";t.exports=i},450:function(t,n,e){(function(){var n,i;n=[],i=function(){return n.push(arguments)},"undefined"!=typeof document&&null!==document&&"undefined"!=typeof window&&null!==window&&document.addEventListener("DOMContentLoaded",function(){var t,o,r,a,s,c,l;for(s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,o=window.cancelAnimationFrame||window.mozCancelAnimationFrame,s?i=function(t,n){var e;return e=null,window.addEventListener(t,function(){var t;return t=arguments,o(e),e=s(function(){return n.apply(null,t)})})}:(l=e(449),i=function(t,n){return window.addEventListener(t,l(n,66))}),c=[],r=0,a=n.length;r<a;r++)t=n[r],c.push(i.apply(null,t));return c}),t.exports=i}).call(this)},451:function(t,n,e){function i(t,n,e){function i(n){var e=b,i=_;return b=_=void 0,y=n,k=t.apply(i,e)}function u(t){return y=t,x=setTimeout(d,n),L?i(t):k}function f(t){var e=t-C,i=t-y,o=n-e;return A?l(o,w-i):o}function p(t){var e=t-C,i=t-y;return void 0===C||e>=n||e<0||A&&i>=w}function d(){var t=r();if(p(t))return h(t);x=setTimeout(d,f(t))}function h(t){return x=void 0,E&&b?i(t):(b=_=void 0,k)}function m(){void 0!==x&&clearTimeout(x),y=0,b=C=_=x=void 0}function v(){return void 0===x?k:h(r())}function g(){var t=r(),e=p(t);if(b=arguments,_=this,C=t,e){if(void 0===x)return u(C);if(A)return x=setTimeout(d,n),i(C)}return void 0===x&&(x=setTimeout(d,n)),k}var b,_,w,k,x,C,y=0,L=!1,A=!1,E=!0;if("function"!=typeof t)throw new TypeError(s);return n=a(n)||0,o(e)&&(L=!!e.leading,A="maxWait"in e,w=A?c(a(e.maxWait)||0,n):w,E="trailing"in e?!!e.trailing:E),g.cancel=m,g.flush=v,g}var o=e(41),r=e(452),a=e(448),s="Expected a function",c=Math.max,l=Math.min;t.exports=i},452:function(t,n,e){var i=e(7),o=function(){return i.Date.now()};t.exports=o},453:function(t,n,e){(function(){var n,i;n=[],i=function(){var t,e,i,o;for(o=[],e=0,i=n.length;e<i;e++)t=n[e],o.push(t.apply(null,arguments));return o},e(450)("scroll",i),t.exports={data:function(){return{scrollCbDisposables:[]}},methods:{onWindowScroll:function(t){var e;return n.push(t),e=function(){var e;if((e=n.indexOf(t))>-1)return n.splice(e,1)},this.scrollCbDisposables.push(e),function(t){return function(){var n;if(e(),(n=t.scrollCbDisposables.indexOf(e))>-1)return t.scrollCbDisposables.splice(n,1)}}(this)}},beforeDestroy:function(){var t,n,e,i,o;for(e=this.scrollCbDisposables,i=[],t=0,n=e.length;t<n;t++)o=e[t],i.push(o());return i}}}).call(this)},454:function(t,n,e){function i(t){if(null==t)return 0;if(a(t))return s(t)?c(t):t.length;var n=r(t);return n==l||n==u?t.size:o(t).length}var o=e(243),r=e(244),a=e(42),s=e(455),c=e(456),l="[object Map]",u="[object Set]";t.exports=i},455:function(t,n,e){function i(t){return"string"==typeof t||!r(t)&&a(t)&&o(t)==s}var o=e(19),r=e(6),a=e(20),s="[object String]";t.exports=i},456:function(t,n,e){function i(t){return r(t)?a(t):o(t)}var o=e(457),r=e(458),a=e(459);t.exports=i},457:function(t,n,e){var i=e(245),o=i("length");t.exports=o},458:function(t,n){function e(t){return i.test(t)}var i=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=e},459:function(t,n){function e(t){for(var n=f.lastIndex=0;f.test(t);)++n;return n}var i="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",c="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",r,a].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*",l="[\\ufe0e\\ufe0f]?"+s+c,u="(?:"+["[^\\ud800-\\udfff]"+i+"?",i,r,a,"[\\ud800-\\udfff]"].join("|")+")",f=RegExp(o+"(?="+o+")|"+u+l,"g");t.exports=e},460:function(t,n){function e(t,n,e){var i=-1,o=t.length;n<0&&(n=-n>o?0:o+n),e=e>o?o:e,e<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var r=Array(o);++i<o;)r[i]=t[i+n];return r}t.exports=e},461:function(t,n,e){function i(t){var n=o(t),e=n%1;return n===n?e?n-e:n:0}var o=e(464);t.exports=i},462:function(t,n,e){function i(t,n){return(s(t)?o:r)(t,a(n))}var o=e(465),r=e(69),a=e(466),s=e(6);t.exports=i},463:function(t,n,e){function i(t,n,e){if(!s(e))return!1;var i=typeof n;return!!("number"==i?r(e)&&a(n,e.length):"string"==i&&n in e)&&o(e[n],t)}var o=e(67),r=e(42),a=e(68),s=e(41);t.exports=i},464:function(t,n,e){function i(t){if(!t)return 0===t?t:0;if((t=o(t))===r||t===-r){return(t<0?-1:1)*a}return t===t?t:0}var o=e(448),r=1/0,a=1.7976931348623157e308;t.exports=i},465:function(t,n){function e(t,n){for(var e=-1,i=null==t?0:t.length;++e<i&&!1!==n(t[e],e,t););return t}t.exports=e},466:function(t,n,e){function i(t){return"function"==typeof t?t:o}var o=e(70);t.exports=i},467:function(t,n,e){(function(){var n,i;n=[],i=function(){var t,e,i;for(e=0,i=n.length;e<i;e++)t=n[e],t.apply(null,arguments);return!1},e(450)("resize",i),t.exports={data:function(){return{resizeCbDisposables:[]}},methods:{onWindowResize:function(t){var e;return n.push(t),e=function(){var e;if((e=n.indexOf(t))>-1)return n.splice(e,1)},this.resizeCbDisposables.push(e),function(t){return function(){var n;if(e(),(n=t.resizeCbDisposables.indexOf(e))>-1)return t.resizeCbDisposables.splice(n,1)}}(this)}},beforeDestroy:function(){var t,n,e,i,o;for(e=this.resizeCbDisposables,o=[],t=0,n=e.length;t<n;t++)i=e[t],o.push(i());return o}}}).call(this)},470:function(t,n,e){"use strict";var i=e(485),o=e(486),r=e(24),a=r(i.a,o.a,null,null,null);n.a=a.exports},471:function(t,n,e){"use strict";var i=e(492),o=e(493),r=e(24),a=r(i.a,o.a,null,null,null);n.a=a.exports},481:function(t,n,e){"use strict";var i=e(482),o=e(494),r=e(24),a=r(i.a,o.a,null,null,null);n.a=a.exports},482:function(t,n,e){"use strict";var i=e(449),o=e.n(i),r=e(462),a=(e.n(r),e(483)),s=e(488),c=e(471);n.a={mixins:[e(453),e(467)],data:function(){return{AOS:null,footer:null,hideScroll:!1}},components:{navigation:c.a,footBottom:s.a,foot:a.a},computed:{key:function(){return this.$route.fullPath}},mounted:function(){var t=this;this.AOS=window.AOS,window.matchMedia("(prefers-reduced-motion)").matches||this.AOS.init({once:!0,duration:600}),this.$store.dispatch("checkMobile"),this.onWindowScroll(function(){t.watchScroll()}),this.onWindowResize(function(){t.$store.dispatch("checkMobile")}),this.footer=document.getElementsByTagName("footer")[0]},methods:{watchScroll:o()(function(){this.hideScroll=this.checkViewport(this.footer,-100)},100),checkViewport:function(t,n){if(n=n||0,t){var e=t.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top+n<(window.innerHeight||document.documentElement.clientHeight)&&e.left<(window.innerWidth||document.documentElement.clientWidth)}return!1},disableScroll:function(){var t=window.scrollX,n=window.scrollY;window.onscroll=function(){window.scrollTo(t,n)}},enableScroll:function(){window.onscroll=function(){}}}}},483:function(t,n,e){"use strict";var i=e(484),o=e(487),r=e(24),a=r(i.a,o.a,null,null,null);n.a=a.exports},484:function(t,n,e){"use strict";var i=e(470);n.a={components:{animateLink:i.a}}},485:function(t,n,e){"use strict";n.a={data:function(){return{line:!1}},watch:{line:function(t){var n=this;t&&setTimeout(function(){n.line=!1},600)}}}},486:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;return(t._self._c||n)("li",{staticClass:"link",class:{animate:t.line},on:{mouseenter:function(n){t.line=!0}}},[t._t("default")],2)},o=[],r={render:i,staticRenderFns:o};n.a=r},487:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"container-fluid top"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("nav",{staticClass:"col-xs-12"},[t._m(1),e("div",{staticClass:"links col-xs-12 col-sm-8"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:{name:"work"}}},[t._v("\n\t\t\t\t\t\t\t\tour work\n\t\t\t\t\t\t\t\t"),e("span")])],1),e("li",[e("nuxt-link",{attrs:{to:{name:"about"}}},[t._v("\n\t\t\t\t\t\t\t\t\tAbout us\n\t\t\t\t\t\t\t\t\t"),e("span")])],1),e("li",[e("nuxt-link",{attrs:{to:{name:"blog"}}},[t._v("\n\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t"),e("span")])],1),e("li",[e("nuxt-link",{attrs:{to:{name:"careers"}}},[t._v("\n\t\t\t\t\t\t\t\t\tCareers\n\t\t\t\t\t\t\t\t\t"),e("span")])],1)])])])])]),t._t("default")],2)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-4"},[e("h3",[t._v("It’s time to uncomplicate things.")]),e("address",[t._v("\n\t\t\t\t\tEli5 BV"),e("br"),t._v("\n\t\t\t\t\tWeteringschans 106"),e("br"),t._v("\n\t\t\t\t\t1017XS Amsterdam"),e("br"),t._v("\n\t\t\t\t\t+31 20 261 25 27"),e("br"),t._v("\n\t\t\t\t\thello@eli5.io"),e("br")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"social col-xs-12 col-sm-4"},[e("a",{attrs:{href:"https://www.linkedin.com/company/eli5",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:"//cdn.prod1.eli5.io/img/social/black/linkedin.svg",alt:"Linkedin Logo"}})]),e("a",{attrs:{href:"https://www.instagram.com/eli5_amsterdam/",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:"//cdn.prod1.eli5.io/img/social/black/instagram.svg",alt:"Instagram Logo"}})])])}],r={render:i,staticRenderFns:o};n.a=r},488:function(t,n,e){"use strict";var i=e(489),o=e(491),r=e(24),a=r(i.a,o.a,null,null,null);n.a=a.exports},489:function(t,n,e){"use strict";var i=e(490),o=e.n(i),r=e(454),a=e.n(r);n.a={data:function(){return{topics:[],partners:[]}},computed:{careers:function(){return this.$store.getters["careers/careers"]},firstTopics:function(){return a()(this.topics)>1?o()(this.topics,Math.round(this.topics.length/2))[0]:this.topics},secondTopics:function(){return a()(this.topics)>1?o()(this.topics,Math.round(this.topics.length/2))[1]:[]}},created:function(){},methods:{fetchData:function(){var t=this;Api.get("/api/landing-posts").then(function(n){t.topics=n.data},function(t){console.error(t)})}}}},490:function(t,n,e){function i(t,n,e){n=(e?r(t,n,e):void 0===n)?1:c(a(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var l=0,u=0,f=Array(s(i/n));l<i;)f[u++]=o(t,l,l+=n);return f}var o=e(460),r=e(463),a=e(461),s=Math.ceil,c=Math.max;t.exports=i},491:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-xxs-6 col-xs-6 col-sm-6 col-md-2"},[e("h4",[t._v("Topics")]),t._l(t.firstTopics,function(n){return e("nuxt-link",{key:n.id,attrs:{to:{name:"landing",params:{slug:n.post_name}}}},[t._v(t._s(n.footer_title))])})],2),e("div",{staticClass:"col-xxs-6 col-xs-6 col-sm-6 col-md-2"},[e("h4",{staticClass:"opacity0"},[t._v("Topics")]),t._l(t.secondTopics,function(n){return e("nuxt-link",{key:n.id,attrs:{to:{name:"landing",params:{slug:n.post_name}}}},[t._v(t._s(n.footer_title))])})],2),e("div",{staticClass:"clearfix visible-xs visible-sm"}),e("div",{staticClass:"col-xxs-6 col-xs-6 col-sm-6 col-md-2"},[e("h4",[t._v("Work @ Eli5")]),t._l(t.careers,function(n){return e("nuxt-link",{key:n.slug,attrs:{to:{name:"careers",params:{slug:n.slug}}}},[t._v(t._s(n.title))])})],2),t._m(0)])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-xxs-6 col-xs-6 col-sm-6 col-md-2"},[e("h4",[t._v("Partners & products")]),e("a",{attrs:{href:"https://www.theofficeservice.com",rel:"noopener",title:"The Office Service",target:"_blank"}},[t._v("The Office Service")]),e("a",{attrs:{href:"https://www.mobypark.com",rel:"noopener",title:"Mobypark",target:"_blank"}},[t._v("Mobypark")]),e("a",{attrs:{href:"https://www.rewear.co",rel:"noopener",title:"Rewear",target:"_blank"}},[t._v("Rewear")]),e("a",{attrs:{href:"http://wundershift.com",rel:"noopener",title:"Wundershift",target:"_blank"}},[t._v("Wundershift")]),e("a",{attrs:{href:"http://www.monty-amsterdam.nl",rel:"noopener",title:"Monty Amsterdam",target:"_blank"}},[t._v("Monty")])])}],r={render:i,staticRenderFns:o};n.a=r},492:function(t,n,e){"use strict";var i=e(449),o=(e.n(i),e(470));n.a={mixins:[e(453)],data:function(){return{fixed:!1,contact:!1,mobileOpen:!1,headroom:null,scrolled:!1,Headroom:null}},components:{animateLink:o.a},mounted:function(){this.Headroom=window.headroom,this.setHeadroom(),this.watchScroll()},computed:{isMobile:function(){return this.$store.getters.isMobile}},methods:{setHeadroom:function(){var t=this.Headroom;this.headroom=new t(this.$refs.navigation,{offset:100,tolerance:5,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}}),this.headroom.init()},goToHome:function(){this.$router.push({name:"/",query:{black:!0}})},watchScroll:function(){this.checkScrollOffset()},checkScrollOffset:function(){document.getElementById("scroll-indicator")?this.isMobile?window.pageYOffset>250?this.scrolled=!0:this.scrolled=!1:document.getElementById("scroll-indicator").getBoundingClientRect().top<=0?this.scrolled=!0:this.scrolled=!1:this.scrolled=!0},openContact:function(){this.contact=!0},closeContact:function(){this.contact=!1},toggleMobileMenu:function(){this.mobileOpen=!this.mobileOpen}}}},493:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"navigation",staticClass:"headroom"},[e("nav",{staticClass:"navigation",class:{"navigation--scrolled":t.scrolled}},[e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[e("svg",{attrs:{viewBox:"0 0 366 156",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("Eli 5")]),e("g",{attrs:{id:"Logo-1",transform:"translate(0.073171, 0.951220)"}},[e("polygon",{attrs:{id:"Fill-1",points:"136.061838 154.661247 166.171471 154.661247 166.171471 0.120719389 136.061838 0.120719389"}}),e("polygon",{attrs:{id:"Fill-2",points:"198.609263 154.783198 228.718896 154.783198 228.718896 46.9179601 198.609263 46.9179601"}}),e("path",{attrs:{d:"M213.664819,0.000246366099 C205.316704,0.000246366099 198.549027,6.76792313 198.549027,15.1160384 C198.549027,23.4641537 205.316704,30.2318305 213.664819,30.2318305 C222.011702,30.2318305 228.780611,23.4641537 228.780611,15.1160384 C228.780611,6.76792313 222.011702,0.000246366099 213.664819,0.000246366099",id:"Fill-3"}}),e("polygon",{attrs:{id:"Fill-5",points:"0 0.121212121 0 124.552106 0 154.661739 87.6706085 154.661739 87.6706085 154.661739 103.362897 154.661739 103.362897 124.552106 30.1096329 124.552106 30.1096329 92.5072678 103.362897 92.5072678 103.362897 62.3964031 30.1096329 62.3964031 30.1096329 30.230845 103.362897 30.230845 103.362897 0.121212121 30.1096329 0.121212121"}}),e("path",{attrs:{d:"M348.879897,30.2528948 L364.573417,30.2528948 L364.573417,0.143261887 L348.879897,0.143261887 L291.320153,0.143261887 L261.21052,0.143261887 L261.21052,30.2528948 L291.320153,30.2528948 L348.879897,30.2528948 Z M318.275437,61.2706332 C318.126386,61.2706332 317.979798,61.286647 317.829515,61.2878788 L317.829515,61.2706332 L291.320522,61.2706332 L291.320522,30.2531412 L261.210889,30.2531412 L261.210889,61.2706332 L261.189948,61.2706332 L261.189948,91.5317812 L274.52205,91.5317812 L317.829515,91.5317812 L318.138704,91.5317812 C318.184282,91.5305494 318.22986,91.5243902 318.275437,91.5243902 C318.323479,91.5243902 318.367825,91.5305494 318.414634,91.5317812 L318.728751,91.5317812 L318.728751,91.547795 C327.63119,91.7892338 334.778271,99.0656566 334.778271,108.027223 C334.778271,116.987559 327.63119,124.265213 318.728751,124.506652 L318.728751,124.522666 L318.420793,124.522666 C318.372752,124.522666 318.324711,124.530057 318.275437,124.530057 L274.52205,124.522666 C274.523282,124.522666 274.523282,124.522666 274.523282,124.523898 L261.189948,124.522666 L261.189948,154.783814 L317.829515,154.783814 L317.829515,154.765336 C317.979798,154.766568 318.126386,154.782582 318.275437,154.782582 C344.0983,154.782582 365.032028,133.848854 365.032028,108.027223 C365.032028,82.2043607 344.0983,61.2706332 318.275437,61.2706332 Z",id:"Combined-Shape"}})])])]),t.isMobile?t._e():[e("transition",{attrs:{mode:"out-in",name:"contact"}},[t.contact?e("ul",{key:"contact"},[e("animate-link",[e("a",{attrs:{href:"tel:+31202612527"}},[t._v("\n\t\t\t\t\t\t\tcall us on +31 20 261 25 27\n\t\t\t\t\t\t\t"),e("span")])]),e("animate-link",[e("a",{attrs:{href:"mailto:hello@eli5.io"}},[t._v("\n\t\t\t\t\t\t\temail on hello@eli5.io\n\t\t\t\t\t\t\t"),e("span")])]),e("animate-link",[e("a",{class:{active:!t.contact},attrs:{href:""},on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.closeContact(n)}}},[t._v("\n\t\t\t\t\t\t\tmenu\n\t\t\t\t\t\t\t"),e("span")])])],1):e("ul",{key:"menu"},[e("animate-link",[e("nuxt-link",{attrs:{to:{name:"work"},exact:""}},[t._v("\n\t\t\t\t\t\t\tour work\n\t\t\t\t\t\t\t"),e("span")])],1),e("animate-link",[e("nuxt-link",{attrs:{to:{name:"about"},exact:""}},[t._v("\n\t\t\t\t\t\t\tAbout us\n\t\t\t\t\t\t\t"),e("span")])],1),e("animate-link",[e("nuxt-link",{attrs:{to:{name:"blog"},exact:""}},[t._v("\n\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t"),e("span")])],1),e("animate-link",[e("nuxt-link",{attrs:{to:{name:"careers"},exact:""}},[t._v("\n\t\t\t\t\t\t\tCareers\n\t\t\t\t\t\t\t"),e("span")])],1),e("animate-link",[e("a",{class:{active:t.contact},attrs:{href:""},on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.openContact(n)}}},[t._v("\n\t\t\t\t\t\t\tContact\n\t\t\t\t\t\t\t"),e("span")])])],1)])]],2)])},o=[],r={render:i,staticRenderFns:o};n.a=r},494:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"web"}},[e("navigation"),e("div",{staticClass:"nuxt-wrapper"},[t._t("default")],2),e("foot"),e("foot-bottom")],1)},o=[],r={render:i,staticRenderFns:o};n.a=r},537:function(t,n,e){var i=e(538);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(44)("20595b3b",i,!0)},538:function(t,n,e){n=t.exports=e(43)(!0),n.push([t.i,".black #post_page{background-color:#11151c}.black #post_page #article a,.black #post_page #article b,.black #post_page #article h1,.black #post_page #article h2,.black #post_page #article h3,.black #post_page #article h4,.black #post_page #article h5,.black #post_page #article h6,.black #post_page #article li,.black #post_page #article p,.black #post_page #article span,.black #post_page #article strong,.black #post_page .back_link{color:#f5f7e6}","",{version:3,sources:["/Users/sembakkum/Documents/Projecten/Homestead/Eli5-pwa/layouts/black.vue"],names:[],mappings:"AACA,kBAAkB,wBAAwB,CACzC,AAGD,wYAA2W,aAAa,CACvX",file:"black.vue",sourcesContent:["\n.black #post_page{background-color:#11151c\n}\n.black #post_page .back_link{color:#f5f7e6\n}\n.black #post_page #article h1,.black #post_page #article h2,.black #post_page #article h3,.black #post_page #article h4,.black #post_page #article h5,.black #post_page #article h6,.black #post_page #article span,.black #post_page #article p,.black #post_page #article b,.black #post_page #article a,.black #post_page #article li,.black #post_page #article strong{color:#f5f7e6\n}\n"],sourceRoot:""}])},539:function(t,n,e){"use strict";var i=e(481),o=e(471);n.a={components:{app:i.a,navigation:o.a}}},540:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("navigation"),e("app",{staticClass:"black"},[e("nuxt")],1)],1)},o=[],r={render:i,staticRenderFns:o};n.a=r}});
//# sourceMappingURL=0.nuxt.bundle.2544fcfc8c8b0f0eca11.js.map