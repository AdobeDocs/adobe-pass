"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[823],{65612:function(e,t,a){a.r(t),a.d(t,{getQueryString:function(){return Z}});var n=a(35776),o=a(64593),r=a(92812),f=a(40684),i=a(24955),d=a.n(i),s=a(1597),c=a(9669),l=a.n(c),b=a(95459),p=(a(74493),a(26777)),m=a(88466),h=a(34899),u=a(1110),y=a(78269),w=a(73181),v=a(63431);const g=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),S={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX;let k=null;g?k=d()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");const I=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),A={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},P=e=>{e((e=>!e))},x=(e,t,n)=>{const o=A[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,f.ZP)((()=>Promise.all([a.e(490),a.e(723),a.e(461),a.e(351),a.e(199)]).then(a.bind(a,37831)))):"frame"===e&&(o.block=(0,f.ZP)((()=>Promise.all([a.e(490),a.e(351),a.e(794)]).then(a.bind(a,64794))))),o.block.load().then((()=>{n(!1)})))},_=(e,t)=>{const a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState({},"",`${window.location.pathname}?${a}`)},Z=()=>new URLSearchParams(window.location.search).toString(),L=()=>{const e=function(e,a){return void 0===a&&(a=""),t(e)?"http://localhost:8000":function(e){return e.indexOf("developer-stage")>=0}(e)?`https://developer-stage.adobe.com${a}`:`https://developer.adobe.com${a}`};function t(e){return e.indexOf("localhost")>=0}const a=t(window.location.host)?e(window.location.host):`${e(window.location.host,"/search-frame")}`,n=new URLSearchParams(window.location.search);return n&&n.toString().length>0?`${a}?${n.toString()}`:a};var E={name:"hr37al",styles:"grid-area:main"},G={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},O={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=e=>{let{children:t,pageContext:a,location:f}=e;const{0:i,1:d}=(0,n.useState)(null),{0:c,1:Z}=(0,n.useState)(!0),{0:M,1:N}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(async()=>{try{await(a=`${e}`,new Promise(((e,t)=>{const n=document.createElement("script");n.src=a,n.onload=t=>e(t),n.onerror=e=>t(e),n.onabort=e=>t(e),document.head.appendChild(n)})));let n=JSON.parse(t);n.onReady=()=>{d(window.adobeIMS),Z(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize()}catch(n){console.error("AIO: IMS error.")}finally{Z(!1)}var a})():(console.warn("AIO: IMS config missing."),Z(!1))}),[]);const z=(0,s.K2)("1814815295"),{allMdx:C,allSitePage:q,site:B,allGithub:$,allGithubContributors:R}=z,{siteMetadata:T,pathPrefix:Y}=B,{home:F,versions:Q,pages:U,subPages:D,docs:j}=T,{0:H,1:J}=(0,n.useState)(!1),{0:W,1:K}=(0,n.useState)(!1),{0:X,1:V}=(0,n.useState)(!1),{0:ee,1:te}=(0,n.useState)(!1),{0:ae,1:ne}=(0,n.useState)(!1);(0,n.useEffect)((()=>{new URL(window.location).searchParams.get(b.AQ.query)&&J(!0)}),[J]),(0,n.useEffect)((()=>{window.innerWidth>=parseInt(b.q9)&&(K(!1),ne(!1))}),[f]),(0,n.useEffect)((()=>{window.onpopstate=()=>{const e=new URL(window.location).searchParams;e.get(b.AQ.query)?(e.get(b.AQ.query),J(!0)):J(!1)}}),[]),f.pathname=(0,b.Dm)(decodeURIComponent(f.pathname)),U.forEach((e=>{(0,b.y)(e),e.menu&&e.menu.forEach((e=>{(0,b.y)(e)}))})),Q&&Q.forEach((e=>{(0,b.y)(e)})),(0,b.y)(F),(0,b.y)(j);const oe=e=>{(0,b.y)(e),e.pages&&e.pages.forEach((e=>{oe(e)}))};D&&D.forEach((e=>{oe(e)}));const re=(0,b.A6)(f.pathname),fe=(0,b.Gh)(U),ie=(0,b.Lh)(re,D),de=(0,b.mL)(re,fe,D);de.length>0&&ne(!0);const se=null==a?void 0:a.frontmatter,ce=(0,v.ZP)(),le=(0,v.ZP)(),be="aio-Search-close";if(x("openAPI",se,V),x("frame",se,V),(0,n.useEffect)((()=>{g&&l().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((e=>{const t=e.data;"string"==typeof t?N(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&N(t)})).catch((e=>{console.error(`AIO: Failed fetching search index.\n${e}`)})),window.innerWidth<=parseInt(b.q9)&&ne(!0),window.addEventListener("resize",(()=>{window.innerWidth<=parseInt(b.q9)&&ne(!0)}))}),[]),"/search-frame"===Y)return(0,r.tZ)(n.default.Fragment,null,(0,r.tZ)(o.q,null,(0,r.tZ)("noscript",null,`\n          <style>\n            #${ce} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${le} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.tZ)(r.xB,{styles:(0,r.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",H&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:O},g&&M&&(0,r.tZ)(m.o,{algolia:k,indexAll:M,indexPrefix:S||"",showSearch:!0,setShowSearch:J,searchButtonId:be,isIFramed:!0})));let pe="";const me=function(e,t){void 0===e&&(e=0);const a=document.getElementById("searchIframe");if(a.contentWindow.postMessage(JSON.stringify({localPathName:window.location.pathname}),"*"),"/"!==window.location.pathname&&pe!==window.location.pathname){if(e>30)return void console.warn("Loading Search iFrame timed out");window.setTimeout((()=>{me(a,e+1,t)}),100)}if(!t){new URL(window.location).searchParams.get(b.AQ.query)&&J(!0)}t=!0},he=()=>{const e=document.getElementById("searchIframe");let t;try{if(t=e.contentDocument,"complete"===t.readyState)return void(e.onload=()=>{me()})}catch(a){window.setTimeout(he,100)}},ue=e=>{try{const t="string"==typeof e.data?JSON.parse(e.data):e.data;t.query?(_(b.AQ.query,t.query),_(b.AQ.keywords,t.keywords),_(b.AQ.index,t.index)):t.received&&(pe=t.received)}catch(t){console.error(t)}};return(0,n.useEffect)((()=>{window.addEventListener("message",ue),g&&te(!0)}),[]),(0,n.useEffect)((()=>{he()}),[ee]),(0,r.tZ)(n.default.Fragment,null,(0,r.tZ)(o.q,null,(0,r.tZ)("noscript",null,`\n          <style>\n            #${ce} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${le} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.tZ)(r.xB,{styles:(0,r.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",H&&"overflow: hidden;"," ",W&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.tZ)(p.zt,{value:{ims:i,isLoadingIms:c,location:f,pageContext:a,hasSideNav:ae,siteMetadata:T,pathPrefix:Y,allSitePage:q,allMdx:C,allGithub:$,allGithubContributors:R}},(0,r.tZ)(y.H,{title:null==se?void 0:se.title,description:null==se?void 0:se.description,keywords:null==se?void 0:se.keywords}),(0,r.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:G},(0,r.tZ)(n.default.Fragment,null,(0,r.tZ)("div",{id:ce,css:(0,r.iv)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",ae?`${b.dP} auto`:"0 auto",";@media screen and (max-width: ",b.Av,"){grid-template-columns:0 auto;}@media screen and (max-width: ",b.q9,"){grid-template-rows:20px;}")},(0,r.tZ)("div",{css:(0,r.iv)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",b.q9,"){height:var(--spectrum-global-dimension-size-600);}")},(0,r.tZ)(u.e,{hasIMS:I,ims:i,isLoadingIms:c,home:F,versions:Q,pages:U,docs:j,location:f,hasSideNav:ae,toggleSideNav:()=>{P(K)},hasSearch:g&&null!==M,showSearch:H,setShowSearch:J,searchButtonId:be})),g&&ee&&(0,r.tZ)("iframe",{id:"searchIframe",src:L(),tabIndex:"0",css:(0,r.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0px;right:0px;bottom:0px;background-color:transparent;z-index:10;width:100%;height:100%;display:",H?"block":"none",";@media screen and (max-width: ",b.q9,"){top:var(--spectrum-global-dimension-size-600);}")}),(0,r.tZ)("div",{id:le,hidden:!ae,css:(0,r.iv)("grid-area:sidenav;position:fixed;z-index:1;width:",b.dP,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",b.Av,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",W?"0":"-100%",");}@media screen and (max-width: ",b.q9,"){width:95%;}")},(0,r.tZ)(h.k,{mainNavPages:U,versions:Q,location:f,selectedPages:ie,selectedSubPages:de,setShowSideNav:K})),(0,r.tZ)("div",{css:E},(0,r.tZ)("main",{hidden:!A.openAPI.has},A.openAPI.src&&A.openAPI.block&&(0,n.createElement)(A.openAPI.block,{src:A.openAPI.src})),(0,r.tZ)("main",{hidden:!A.frame.has},A.frame.src&&A.frame.block&&(0,n.createElement)(A.frame.block,{src:A.frame.src,height:null==se?void 0:se.frameHeight,location:f})),!A.openAPI.has&&!A.frame.has&&t)),(0,r.tZ)("div",{css:(0,r.iv)("position:fixed;top:0;left:0;right:0;bottom:0;display:",X?"grid":"none",";place-items:center center;")},(0,r.tZ)(w._,{size:"L"})),ae&&(0,r.tZ)("div",{role:"presentation",css:(0,r.iv)("display:none;@media screen and (max-width: ",b.Av,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",W&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:()=>{P(K)}})))))}}}]);
//# sourceMappingURL=ff106bf9-2de61f59e2100a278bb0.js.map