(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?r.a.createElement(d,c(c({ref:n},b),{},{components:t})):r.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(130)),i={title:"Configuration",slug:"/webapp/configuration"},c={unversionedId:"04_Web Application/2_Configuration",id:"04_Web Application/2_Configuration",isDocsHomePage:!1,title:"Configuration",description:"General documentation on how to configure Nuxt.js. More details are available",source:"@site/docs/04_Web Application/2_Configuration.md",slug:"/webapp/configuration",permalink:"/symfony-boilerplate/docs/webapp/configuration",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/04_Web Application/2_Configuration.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/symfony-boilerplate/docs/webapp"},next:{title:"Yarn",permalink:"/symfony-boilerplate/docs/webapp/yarn"}},p=[{value:"nuxt.config.js",id:"nuxtconfigjs",children:[]}],b={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"General documentation on how to configure Nuxt.js. More details are available\nin the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build"}),"official documentation"),"."),Object(o.b)("h3",{id:"nuxtconfigjs"},"nuxt.config.js"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"src/webapp/nuxt.config.js")," file contains the configuration of Nuxt.js."),Object(o.b)("p",null,"You may use environment variables in this file. They are available through\nthe instruction ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.YOUR_ENVIRONMENT_VARIABLE_NAME"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Put them under the ",Object(o.b)("inlineCode",{parentName:"p"},"environment")," property of your ",Object(o.b)("inlineCode",{parentName:"p"},"webapp")," service in your ",Object(o.b)("em",{parentName:"p"},"docker-compose.yml")," file."))),Object(o.b)("p",null,"If you need the value of an environment variable in your code, put it under the ",Object(o.b)("inlineCode",{parentName:"p"},"publicRuntimeConfig")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"privateRuntimeConfig")," section of the ",Object(o.b)("em",{parentName:"p"},"nuxt.config.js")," file."),Object(o.b)("p",null,"For instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/webapp/nuxt.config.js"',title:'"src/webapp/nuxt.config.js"'}),"publicRuntimeConfig: {\n    apiURL: process.env.API_URL,\n}\n")),Object(o.b)("p",null,"The value is available in your code thanks to ",Object(o.b)("inlineCode",{parentName:"p"},"this.$config.apiURL")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"$config.apiURL")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"template")," blocks)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"p"},"privateRuntimeConfig")," should contain your secrets. Values from\nthis section ",Object(o.b)("strong",{parentName:"p"},"are only available when Nuxt.js executes your code on the server.")))))}l.isMDXComponent=!0}}]);