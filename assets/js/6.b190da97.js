(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{387:function(t,e,a){},395:function(t,e,a){},396:function(t,e,a){},421:function(t,e,a){"use strict";a(387)},430:function(t,e,a){"use strict";a(395)},431:function(t,e,a){"use strict";a(396)},460:function(t,e,a){"use strict";a.r(e);var r=a(456),s=(a(226),a(413)),i=a(455),l=a(458),o=a(407),h=a(227);function n(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var c={name:"Navbar",components:{SidebarButton:l.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:s.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(n(this.$el,"paddingLeft"))+parseInt(n(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)},methods:{toggleColorMode:function(t){t.preventDefault();var e=(document.documentElement.getAttribute(h.THEME_ATTR)||h.COLOR_MODES[0])===h.COLOR_MODES[0]?h.COLOR_MODES[1]:h.COLOR_MODES[0];Object(h.setColorMode)(e)}}},v=(a(421),a(37)),d=Object(v.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n      "+t._s(t.$siteTitle)+"\n    ")]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"}),t._v(" "),a("button",{staticClass:"btcpay-theme-switch",attrs:{type:"button"},on:{click:function(e){return t.toggleColorMode(e)}}},[a("svg",{attrs:{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"btcpay-theme-switch-dark",attrs:{transform:"translate(1 1)",d:"M2.72 0A3.988 3.988 0 000 3.78c0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z"}}),t._v(" "),a("path",{staticClass:"btcpay-theme-switch-light",attrs:{transform:"translate(1 1)",d:"M4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5S4.28 0 4 0zM1.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM4 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM.5 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM1.5 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM4 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5S4.28 7 4 7z"}})])])],1)],1)}),[],!1,null,null,null).exports,f=a(454),p=a(457),u=(a(430),Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-default-content sponsors"},[a("div",{staticClass:"supporters"},[a("svg",{attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("linearGradient",{attrs:{id:"spiral-gradient",x1:"81.36",y1:"311.35",x2:"541.35",y2:"311.35",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{offset:".18","stop-color":"#00f"}}),a("stop",{attrs:{offset:"1","stop-color":"#f0f"}})],1),t._v(" "),a("linearGradient",{attrs:{id:"pnxbet-a",x1:"108.127",y1:"162.181",x2:"74.499",y2:"305.982",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#FA1366"}}),a("stop",{attrs:{offset:"1","stop-color":"#FD6E06"}})],1),t._v(" "),a("linearGradient",{attrs:{id:"pnxbet-c",x1:"152.732",y1:"33.344",x2:"2.684",y2:"194.507",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#F91500"}}),a("stop",{attrs:{offset:"1","stop-color":"#FDD140"}})],1),t._v(" "),a("filter",{attrs:{id:"pnxbet-b",x:"35.029",y:"154.606",width:"85.36",height:"85.36","color-interpolation-filters":"sRGB"}},[a("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),a("feBlend",{attrs:{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),a("feGaussianBlur",{attrs:{stdDeviation:".5",result:"effect1_foregroundBlur"}})],1),t._v(" "),a("filter",{attrs:{id:"pnxbet-d",x:"8.414",y:"53.573",width:"93.523",height:"181.835","color-interpolation-filters":"sRGB"}},[a("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),a("feBlend",{attrs:{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),a("feGaussianBlur",{attrs:{stdDeviation:"1",result:"effect1_foregroundBlur"}})],1)],1),t._v(" "),a("symbol",{attrs:{id:"pnxbet",viewBox:"0 0 1719 292"}},[a("path",{attrs:{d:"M1240.88 291.5v-261c0-16.569 13.43-30 30-30h183v55h-158v63h121v25c0 16.569-13.43 30-30 30h-91v63h158v55h-213ZM1569.88 55.5v236h55v-236h94V.5h-211c-16.57 0-30 13.431-30 30v25h92ZM457.881 22.5v269h55v-192l113.829 192h55.171V.5h-55v190L513.095.5h-33.214c-12.15 0-22 9.85-22 22ZM803.381 146l-97 145.5h78.721l52.279-97.5 57.5 97.5h74.5l-93.5-145.5 94-145.5H894.7L837.381 92 784.881.5h-79.5l98 145.5Z",fill:"var(--btcpay-body-text)"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M992.881 291.5v-263c0-15.464 12.539-28 27.999-28h131c35.9 0 65 29.102 65 65v35.393c0 23.725-18.33 43.417-42 45.107 23.59 1.404 42 20.944 42 44.574V226.5c0 35.898-29.1 65-65 65H992.881ZM1047.38 56h82c17.12 0 31 13.88 31 31 0 17.121-13.88 31-31 31h-82V56Zm82 118h-82v62h82c17.12 0 31-13.879 31-31 0-17.121-13.88-31-31-31ZM238.881.5h105c46.392 0 84 37.608 84 84v21c0 46.392-37.608 84-84 84h-77v102h-55v-264c0-14.912 12.088-27 27-27Zm95.5 55.5h-67v78h67c21.539 0 39-17.461 39-39 0-21.54-17.461-39-39-39Z",fill:"var(--btcpay-body-text)"}}),a("path",{attrs:{d:"m25.228 224.173 60.818 67.588c70.88-64.809 46.919-104.22 44.084-109.855-2.268-4.509-51.978-63.871-76.55-92.988l-28.352 28.178c-31.754 38.322-11.34 86.413 0 107.077Z",fill:"url(#pnxbet-a)"}}),a("g",{attrs:{filter:"url(#pnxbet-b)"}},[a("path",{attrs:{d:"m119.39 171.236-83.36 67.73 68.987-83.36 14.373 15.63Z",fill:"#C40537"}})]),a("path",{attrs:{d:"M155.27 108.368 36.028 236.187c-40.013-35.567-46.996-77.803-19.45-111.147L138.838 0 155 27c29 49 8.606 69.327.27 81.368Z",fill:"url(#pnxbet-c)"}}),a("g",{attrs:{filter:"url(#pnxbet-d)"}},[a("path",{attrs:{d:"M36.027 113.925c-48.957 46.238-16.06 100.69 2.913 119.483-27.92-102.811-16.806-91.696 60.997-177.835 0 0-13.893 11.115-63.91 58.352Z",fill:"#FDD45F"}})])]),t._v(" "),a("symbol",{attrs:{id:"spiral",viewBox:"0 0 629 629"}},[a("path",{attrs:{d:"M326.4 572.09C201.2 572.09 141 503 112.48 445c-28.22-57.53-30.59-114.56-30.79-122.69-4.85-77 41-231.78 249.58-271.2a28.05 28.05 0 0 1 10.41 55.13c-213.12 40.28-204.44 206-204 213 0 .53.06 1.06.07 1.6.15 7.9 5.1 195.16 188.65 195.16 68.34 0 116.6-29.4 143.6-87.37 24.48-52.74 19.29-112.45-13.52-155.83-22.89-30.27-52.46-45-90.38-45-34.46 0-63.47 9.88-86.21 29.37A91.5 91.5 0 0 0 248 322.3c-1.41 25.4 7.14 49.36 24.07 67.49C287.27 406 305 413.9 326.4 413.9c27.46 0 45.52-9 53.66-26.81 8.38-18.3 3.61-38.93-.19-43.33-9.11-10-18.69-13.68-22.48-13-2.53.43-5.78 4.61-8.48 10.92a28 28 0 0 1-51.58-22c14.28-33.44 37.94-42 50.76-44.2 24.78-4.18 52.17 7.3 73.34 30.65s25.51 68.55 10.15 103.22C421.54 432 394.52 470 326.4 470c-36.72 0-69.67-14.49-95.29-41.92-27.47-29.4-41.34-68.08-39.11-108.89a149.1 149.1 0 0 1 51.31-104.6c33.19-28.45 74.48-42.87 122.71-42.87 55.12 0 101.85 23.25 135.12 67.23 45.36 60 52.9 141.71 19.66 213.3-25.35 54.67-79.68 119.84-194.4 119.84Z",fill:"url(#spiral-gradient)"}})]),t._v(" "),a("symbol",{attrs:{id:"bailliegifford",viewBox:"0 0 252.875 70.249"}},[a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M366.764 291.907h4.554l-5.046 12.789h-4.553zM377.541 302.546h4.675l-.849 2.15h-9.229l5.046-12.789h4.554zM389.988 302.546h4.676l-.849 2.15h-9.229l5.045-12.789h4.554zM403.079 291.907h4.554l-5.046 12.789h-4.553zM418.795 302.487l-.871 2.209h-9.471l5.046-12.789h9.397l-.871 2.209h-4.844l-1.139 2.887h4.457l-.826 2.093h-4.457l-1.338 3.391zM445.115 294.349a6.207 6.207 0 0 0-2.213-.407c-3.344 0-4.898 3.391-5.35 4.535-.682 1.725-1.15 3.469.277 4.147.49.232 1.135.252 1.402.252l1.186-3.004h-1.648l.795-2.015h5.766l-2.4 6.084c-1.66.523-3.16.95-5.268.95-4.748 0-6.602-2.732-5.109-6.511 1.566-3.973 5.77-6.647 10.566-6.647 1.842 0 2.971.33 3.777.62l-1.781 1.996zM453.309 291.907h4.554l-5.045 12.789h-4.554zM458.684 304.696l5.045-12.789h9.398l-.871 2.209h-4.844l-1.269 3.217h4.457l-.871 2.209h-4.458l-2.033 5.154zM472.639 304.696l5.047-12.789h9.398l-.871 2.209h-4.846l-1.269 3.217h4.459l-.873 2.209h-4.457l-2.034 5.154z",transform:"translate(-293.5 -262.775)"}}),a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1","fill-rule":"evenodd",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M335.139 302.643c.557 0 1.187 0 1.747-.252.576-.232 1.106-.717 1.489-1.686.336-.854.189-1.279-.211-1.492-.376-.213-1.006-.213-1.612-.213h-.63l-1.438 3.643h.655zm2.154-5.523c.46 0 .993 0 1.521-.232.496-.213.986-.659 1.33-1.531.283-.717.162-1.085-.181-1.259-.319-.175-.852-.175-1.409-.175h-.63l-1.262 3.198h.631v-.001zm2.832-5.213c1.187 0 2.578.097 3.531.504.954.407 1.47 1.124.966 2.403-.727 1.841-2.749 2.732-4.501 3.12.502.077 1.378.252 2.05.698.647.445 1.06 1.182.578 2.403-.443 1.124-1.742 2.636-4.352 3.294-.995.252-2.107.368-4.481.368h-4.651l5.045-12.79h5.815zM350.689 300.201h2.833l.017-3.605-2.85 3.605zm6.664-8.294.792 12.79h-4.651l-.017-2.597h-4.288l-2.066 2.597h-3.149l10.714-12.79h2.665zM492.998 302.875c.922 0 2.209-.504 3.793-4.515 1.451-3.682 1.238-4.612-.047-4.612-1.283 0-2.363.775-3.955 4.806-1.07 2.713-1.316 4.321.209 4.321zm4.59-11.143c3.561 0 6.08 1.841 4.299 6.356-1.482 3.759-4.936 6.802-9.707 6.802-4.555 0-5.779-2.791-4.295-6.55 1.65-4.185 5.635-6.608 9.703-6.608zM512.328 293.922l-1.469 3.721h.484c1.502 0 2.234-.445 2.793-1.86.582-1.473.25-1.86-1.324-1.86h-.484v-.001zm1.254-2.015c2.398 0 3.312.078 4.168.426.814.33 1.785 1.124 1.166 2.694-.58 1.473-2.047 2.732-4.277 3.353l1.916 6.317h-4.893l-.965-5.29h-.533l-2.088 5.29h-4.408l5.047-12.79h4.867zM528.418 293.961l-3.424 8.682h.387c1.115 0 2.955.368 4.906-4.573 1.619-4.108.264-4.108-1.385-4.108h-.484v-.001zm.811-2.054c2.254 0 4.336 0 5.549 1.163 1.461 1.396.748 3.818.334 4.864-.727 1.841-2.406 4.748-6.227 6.143-1.24.446-2.498.62-5.09.62h-4.166l5.047-12.79h4.553z","clip-rule":"evenodd",transform:"translate(-293.5 -262.775)"}}),a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M294 297.4c0-19.399 57.138-35.125 127.624-35.125 62.064 0 113.781 12.192 125.251 28.35-13.078-12.792-58.92-22.238-113.465-22.238-64.731 0-117.206 13.303-117.206 29.714 0 16.411 52.474 29.715 117.206 29.715 47.799 0 88.914-7.254 107.154-17.656-18.555 13.09-64.812 22.364-118.941 22.364C351.138 332.524 294 316.799 294 297.4z",transform:"translate(-293.5 -262.775)"}})]),t._v(" "),a("symbol",{attrs:{id:"coincards",viewBox:"0 0 64 32"}},[a("g",{attrs:{fill:"none"}},[a("path",{attrs:{d:"M32.7 5.9c-.2-1-1.3-1.7-2.3-1.4L7.7 9.9c-1 .2-1.7 1.3-1.4 2.3l3.1 12.9c.2 1 1.3 1.7 2.3 1.4l22.7-5.4c1-.2 1.7-1.3 1.4-2.3L32.7 5.9Z",fill:"#EF8022"}}),a("path",{attrs:{d:"M12.6 30.3c-.2.2-.5.3-.7.3l.8.5c.9.6 2.1.4 2.7-.5l3.1-4.4-5.9 4.1ZM2.3 19.5l-1 1.4c-.6.9-.4 2.1.5 2.7L8.1 28l-5.8-8.5ZM12.9 8.1l7.2-5-2.7-1.9c-.9-.6-2.1-.4-2.7.5l-5 7.2 3.2-.8Z",fill:"#F9F185"}}),a("path",{attrs:{d:"M9.7 29.4c.6.9 1.8 1.1 2.7.5l6.7-4.6-7.4 1.8c-1.3.3-2.6-.5-2.9-1.8L6 13.5l-3.3 2.3c-.9.6-1.1 1.8-.5 2.7l7.5 10.9Zm4.5-21.6L25.9 5l-1.3-2c-.6-.9-1.8-1.1-2.7-.5l-7.7 5.3Z",fill:"#FFC214"}}),a("path",{attrs:{d:"M11.9 24.8c-.7 0-1.4-.5-1.7-1.1l-1.5-3.2 1.1 4.6c.2.6.7 1.1 1.4 1.1h.3l17-4.1-16.2 2.7h-.4Z",fill:"#FFC214"}}),a("path",{attrs:{d:"M16 17.5s-1.1 1.2-2.5 1.2c-1.7 0-2.6-1.4-2.6-2.8 0-1.3.9-2.7 2.6-2.7 1.3 0 2.3 1 2.3 1l1.1-1.7s-.6-.7-1.9-1.1v-1.2h-1.1v1h-.6v-1h-1.1v1.1c-2.2.5-3.7 2.4-3.7 4.7 0 2.4 1.5 4.2 3.7 4.7v1.2h1.1v-1h.6V22H15v-1.3c1.4-.4 2.1-1.3 2.1-1.3L16 17.5ZM21 13.7c2.1 0 3.8 1.4 3.8 3.6 0 2.1-1.7 3.5-3.8 3.5-2.1 0-3.8-1.4-3.8-3.5s1.7-3.6 3.8-3.6Zm0 5.2c.8 0 1.5-.6 1.5-1.6s-.7-1.7-1.5-1.7-1.5.6-1.5 1.7c0 1 .7 1.6 1.5 1.6Zm4.3-5h2.3v6.7h-2.3v-6.7Zm0-2.6h2.2v1.8h-2.2v-1.8Zm3.2 2.6h2.2v1c.3-.5 1-1.2 2.1-1.2 1.4 0 2.4.6 2.4 2.5v4.4h-2.3v-4c0-.6-.2-.9-.7-.9-.7 0-1.1.4-1.3 1-.1.3-.1.6-.1.9v3h-2.3v-6.7Z",fill:"#FFF"}}),a("path",{attrs:{d:"M39.3 13.9c1.7 0 2.5 1 2.5 1l-.6.9s-.7-.8-1.8-.8c-1.3 0-2.3 1-2.3 2.4 0 1.3 1 2.4 2.3 2.4 1.2 0 2-.9 2-.9l.5.9s-.9 1.1-2.6 1.1c-2.1 0-3.5-1.5-3.5-3.5-.1-2 1.4-3.5 3.5-3.5Zm6.8 2.6h.3v-.1c0-1.1-.6-1.5-1.5-1.5-1 0-1.8.6-1.8.6l-.5-.9s1-.8 2.5-.8c1.7 0 2.6.9 2.6 2.6v4.2h-1.2v-1.1s-.5 1.3-2.1 1.3c-1.1 0-2.3-.7-2.3-2 0-2.2 2.9-2.3 4-2.3Zm-1.4 3.3c1.1 0 1.8-1.1 1.8-2.1v-.2h-.3c-1 0-2.7.1-2.7 1.3-.1.5.3 1 1.2 1Zm3.8-5.8h1.2v1.7c.3-1 1.1-1.7 2.1-1.7h.3v1.3h-.4c-.8 0-1.6.6-1.9 1.6-.1.4-.2.8-.2 1.2v2.7h-1.3V14h.2Zm6.8-.1c1.5 0 2 1 2 1v-3.5h1.3v9.2h-1.2v-1s-.5 1.2-2.2 1.2c-1.8 0-2.9-1.4-2.9-3.5s1.3-3.4 3-3.4Zm.2 5.8c1 0 1.9-.7 1.9-2.4 0-1.2-.6-2.4-1.9-2.4-1 0-1.9.9-1.9 2.4s.8 2.4 1.9 2.4Zm4.2-.8s.7.8 1.9.8c.5 0 1.1-.3 1.1-.8 0-1.2-3.4-1-3.4-3.1 0-1.2 1.1-1.9 2.4-1.9 1.5 0 2.1.7 2.1.7l-.5 1s-.6-.6-1.6-.6c-.5 0-1.1.2-1.1.8 0 1.2 3.4.9 3.4 3.1 0 1.1-.9 1.9-2.4 1.9-1.6 0-2.5-1-2.5-1l.6-.9Z",fill:"#EF8022"}})])]),t._v(" "),a("symbol",{attrs:{id:"lunanode",viewBox:"0 0 194.219 193.977"}},[a("path",{staticStyle:{fill:"#004581","fill-opacity":"1","fill-rule":"evenodd",stroke:"none"},attrs:{d:"M3185.89 2995.8c-1.77 21.49-2.76 43.2-2.76 65.16 0 411.03 319.09 747.36 723.13 774.95l-618.54-641.7c-54.62-56.68-88.55-126.08-101.83-198.41M3960 2284.09c-270.37 0-508.4 138.15-647.57 347.65l23.25-22.42c76.82-74.06 176.93-109.95 276.2-108.13 99 1.77 197.53 41.2 271.5 117.59l-177.95 171.52c-26.66-27.31-62.22-41.38-98.02-42.14-36.12-.65-72.43 12.41-100.16 39.15l-37.98 36.6c-27.69 26.66-42.04 62.45-42.7 98.57-.65 36.07 12.36 72.48 39.11 100.21l745.68 773.56c305.71-104.45 525.52-394.17 525.52-735.29 0-29.89-1.73-59.34-5.04-88.32-19.44 54.57-51.41 105.56-95.79 148.35l-37.93 36.58c-76.86 74.07-176.93 110.05-276.16 108.18-99.32-1.77-198.13-41.38-272.19-118.25l-290.74-301.59 177.95-171.53 290.74 301.61c26.71 27.73 62.64 42.04 98.72 42.74 36.12.69 72.38-12.35 100.16-39.1l37.89-36.59c27.69-26.66 42.09-62.45 42.74-98.58.61-36.03-12.4-72.48-39.1-100.21l-440.73-457.23c-22.23-1.9-44.69-2.93-67.4-2.93",transform:"matrix(.125 0 0 -.125 -397.891 479.489)"}}),a("path",{staticStyle:{fill:"#3384b9","fill-opacity":"1","fill-rule":"evenodd",stroke:"none"},attrs:{d:"M4376.22 2292.8h360.66v433.41c-17.35-55.88-47.59-108.64-90.81-153.48l-269.85-279.93",transform:"matrix(.125 0 0 -.125 -397.891 479.489)"}})]),t._v(" "),a("symbol",{attrs:{id:"walletofsatoshi",viewBox:"0 0 313.1 76.32"}},[a("path",{attrs:{d:"M110.47 44.8H121c.84 0 1.22-.64.9-1.48l-17.6-42A2 2 0 0 0 102.22 0H87.63a2 2 0 0 0-2 1.34L66 48.11c-.32.84.06 1.48.83 1.48h13.7a1.42 1.42 0 0 1 1.32 1.93l-9.7 24.8 30.55-32.63A1 1 0 0 0 102 42H84.73a1.42 1.42 0 0 1-1.32-2l5.06-12.91 6.86-17.47 6.78 17.51h-7.54a1.42 1.42 0 0 0-1.32.9l-2.83 7.22a1.42 1.42 0 0 0 1.32 1.93H105a1.42 1.42 0 0 1 1.33.91l2.08 5.36a1.92 1.92 0 0 0 2.06 1.35Zm62.65 0h37.42a1.3 1.3 0 0 0 1.46-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41A1.35 1.35 0 0 0 183 0h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.51 1.39Zm45.36 0h42a1.3 1.3 0 0 0 1.52-1.41V35.9a1.31 1.31 0 0 0-1.47-1.41h-30.59v-7.36h25.59a1.33 1.33 0 0 0 1.48-1.4v-7a1.33 1.33 0 0 0-1.48-1.41h-25.59v-7h30.59A1.3 1.3 0 0 0 262 8.89V1.41A1.3 1.3 0 0 0 260.53 0h-42A1.3 1.3 0 0 0 217 1.41v42a1.3 1.3 0 0 0 1.48 1.39ZM71.79 0H61.61a1.71 1.71 0 0 0-1.85 1.41L52.08 34.3 44.91 1.41A1.65 1.65 0 0 0 43.12 0H30.38a1.71 1.71 0 0 0-1.85 1.41L21.36 34.3 13.68 1.41A1.65 1.65 0 0 0 11.89 0H1.14C.24 0-.14.51.05 1.41l10.88 42a1.68 1.68 0 0 0 1.79 1.41H28.4a1.65 1.65 0 0 0 1.79-1.41l6.27-28.31 6.34 28.29a1.65 1.65 0 0 0 1.79 1.41H60.2a1.66 1.66 0 0 0 1.8-1.41l10.87-42C73.07.51 72.68 0 71.79 0Zm239.84 0h-43.52a1.3 1.3 0 0 0-1.47 1.41v7.48a1.3 1.3 0 0 0 1.47 1.41h15.29v33.09a1.3 1.3 0 0 0 1.48 1.41h10a1.33 1.33 0 0 0 1.47-1.41V10.3h15.3a1.3 1.3 0 0 0 1.47-1.41V1.41A1.3 1.3 0 0 0 311.63 0ZM127.76 44.8h37.42a1.3 1.3 0 0 0 1.47-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41a1.35 1.35 0 0 0-1.5-1.41h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.47 1.39Zm-3.84 9.6h-11.53c-3.13 0-4.53 1.31-4.53 4.36v10.37c0 3.05 1.4 4.36 4.53 4.36h11.53c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.35-4.36-4.51-4.36Zm-1 12.95c0 1.48-.29 1.75-2.07 1.75h-5.51c-1.76 0-2.08-.27-2.08-1.75v-6.81c0-1.47.32-1.75 2.08-1.75h5.51c1.78 0 2.07.28 2.07 1.75Zm51.87-5.59h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.65 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28H164c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.9 0 1.17.28 1.17 1v1.23c0 .68-.27.95-1.17.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.56.56 0 0 0-.62-.6h-4a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.19 0 4.51-1.31 4.51-4.36v-3c-.06-3.1-1.41-4.41-4.57-4.41Zm85.43 0h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.64 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28h-10.48c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.89 0 1.16.28 1.16 1v1.23c0 .68-.27.95-1.16.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.57.57 0 0 0-.62-.6h-4.05a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.18 0 4.51-1.31 4.51-4.36v-3c0-3.1-1.33-4.41-4.51-4.41Zm26.65-7.36h-4.21a.56.56 0 0 0-.63.6v6.66h-9.2V55a.57.57 0 0 0-.65-.6H268a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6v-6.84h9.2v6.84a.56.56 0 0 0 .63.6h4.21a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.57-.6Zm-137.62 0h-17.07a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.19a.58.58 0 0 0 .65-.6v-6.52h10.15a.57.57 0 0 0 .64-.6v-3.19a.57.57 0 0 0-.64-.6H137v-3.19h12.3a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.62-.6Zm146.47 0h-4.18a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6V55a.57.57 0 0 0-.6-.6Zm-100.28.6a.83.83 0 0 0-.86-.57h-6.16a.83.83 0 0 0-.89.57l-7.42 17.89c-.14.36 0 .63.38.63h4.45a.8.8 0 0 0 .86-.57l1-2.68h9.1l1 2.68a.8.8 0 0 0 .87.57h4.69c.33 0 .49-.27.35-.63Zm-7 11 2.89-7.52 2.92 7.52Zm30.9-11.6H201a.55.55 0 0 0-.62.6v3.19a.55.55 0 0 0 .62.6h6.45v14.1a.55.55 0 0 0 .62.6h4.21a.56.56 0 0 0 .62-.6v-14.1h6.46a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.64-.6Zm18.46 0h-11.52c-3.13 0-4.54 1.31-4.54 4.36v10.37c0 3.05 1.41 4.36 4.54 4.36h11.52c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.31-4.36-4.51-4.36Zm-.94 12.95c0 1.48-.3 1.75-2.08 1.75h-5.51c-1.75 0-2.07-.27-2.07-1.75v-6.81c0-1.47.32-1.75 2.07-1.75h5.51c1.78 0 2.08.28 2.08 1.75Z",fill:"#fad228",stroke:"#1e2127","stroke-width":"2"}})]),t._v(" "),a("symbol",{attrs:{id:"nomics",viewBox:"0 0 600 600"}},[a("path",{attrs:{d:"M273.56 133A136.81 136.81 0 0 0 0 136.86v326.28a136.8 136.8 0 0 0 233.57 96.75L326.44 467A136.81 136.81 0 0 0 600 463.14V136.86a136.8 136.8 0 0 0-233.57-96.75L273.56 133",fill:"#a0f"}}),a("ellipse",{attrs:{cx:"302.18",cy:"300.04",rx:"136.81",ry:"136.86",fill:"#fff"}})])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"logos"},[a("a",{attrs:{href:"https://spiral.xyz",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{staticStyle:{padding:"5px"},attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#spiral"}})]),t._v("\n        Spiral\n      ")]),t._v(" "),a("a",{attrs:{href:"https://www.bailliegifford.com//",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"140",height:"100"}},[a("use",{attrs:{href:"#bailliegifford"}})]),t._v("\n        Baillie Gifford\n      ")]),t._v(" "),a("a",{attrs:{href:"https://pnxbet.com",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"125",height:"100"}},[a("use",{attrs:{href:"#pnxbet"}})]),t._v("\n        PNXBET\n      ")]),t._v(" "),a("a",{attrs:{href:"https://www.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#lunanode"}})]),t._v("\n        LunaNode\n      ")]),t._v(" "),a("a",{attrs:{href:"https://walletofsatoshi.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#walletofsatoshi"}})]),t._v("\n        Wallet of Satoshi\n      ")]),t._v(" "),a("a",{attrs:{href:"https://nomics.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#nomics"}})]),t._v("\n        Nomics\n      ")]),t._v(" "),a("a",{attrs:{href:"https://coincards.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"130",height:"100"}},[a("use",{attrs:{href:"#coincards"}})]),t._v("\n        Coincards\n      ")])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      The BTCPay Server Project is proudly supported by these entities through the\n      "),e("a",{attrs:{href:"https://foundation.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("BTCPay Server Foundation")]),this._v(".\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you'd like to support the project, please visit the "),e("a",{attrs:{href:"https://btcpayserver.org/donate/"}},[this._v("donation page")]),this._v(".")])}],!1,null,"5fe5e1d4",null).exports),m=a(369),g={name:"Layout",components:{Home:r.a,Page:f.a,Sidebar:p.a,Navbar:d,Sponsors:u},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(m.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},b=(a(431),Object(v.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("Sponsors"),t._v(" "),a("footer",{staticClass:"theme-default-content footer"},[a("router-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1)],1)}),[],!1,null,"5af0f5ee",null));e.default=b.exports}}]);