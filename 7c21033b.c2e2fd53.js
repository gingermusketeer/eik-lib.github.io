(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{121:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||i;return t?r.a.createElement(d,o(o({ref:a},l),{},{components:t})):r.a.createElement(d,o({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(121)),c={id:"client_npm_packages",title:"ESM Friendly NPM Packages",sidebar_label:"NPM Packages"},o={unversionedId:"client_npm_packages",id:"client_npm_packages",isDocsHomePage:!1,title:"ESM Friendly NPM Packages",description:"One task Eik can perform is to take packages that have been published to NPM and create and serve ESM friendly versions for you to use in your app packages.",source:"@site/docs/client_npm_packages.md",slug:"/client_npm_packages",permalink:"/docs/client_npm_packages",version:"current",sidebar_label:"NPM Packages",sidebar:"mainSidebar",previous:{title:"Application Packages",permalink:"/docs/client_app_packages"},next:{title:"Import Maps",permalink:"/docs/client_import_maps"}},s=[{value:"The eik npm command",id:"the-eik-npm-command",children:[]},{value:"Publishing from NPM",id:"publishing-from-npm",children:[{value:"Install a specific version",id:"install-a-specific-version",children:[]},{value:"Install the latest version",id:"install-the-latest-version",children:[]}]},{value:"Accessing installed NPM packages",id:"accessing-installed-npm-packages",children:[{value:"The Eik meta command",id:"the-eik-meta-command",children:[]},{value:"Server URLs",id:"server-urls",children:[]}]}],l={toc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One task Eik can perform is to take packages that have been published to NPM and create and serve ESM friendly versions for you to use in your app packages."),Object(i.b)("p",null,"This is similar to what ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/"}),"unpkg")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pika.dev/"}),"pika")," do except that Eik will automatically transpile ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/CommonJS"}),"common js")," packages into an ESM version (as well as a fallback version for older browsers) before serving."),Object(i.b)("p",null,"When combined with Eik's aliasing feature, this gives you a powerful way to manage dependency versions across multiple applications."),Object(i.b)("h2",{id:"the-eik-npm-command"},"The eik npm command"),Object(i.b)("p",null,"To view subcommands and additional help in your terminal you can use"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik npm --help\n")),Object(i.b)("h2",{id:"publishing-from-npm"},"Publishing from NPM"),Object(i.b)("p",null,"As an example of how this works, let's publish a version of the popular ",Object(i.b)("inlineCode",{parentName:"p"},"lodash")," package to Eik."),Object(i.b)("h3",{id:"install-a-specific-version"},"Install a specific version"),Object(i.b)("p",null,"Call the command with the name and version of the package you want to install from NPM."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik npm lodash 4.17.15\n")),Object(i.b)("h3",{id:"install-the-latest-version"},"Install the latest version"),Object(i.b)("p",null,"It's possible to omit the version argument to get the latest available version on NPM."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik npm lodash\n")),Object(i.b)("h2",{id:"accessing-installed-npm-packages"},"Accessing installed NPM packages"),Object(i.b)("h3",{id:"the-eik-meta-command"},"The Eik meta command"),Object(i.b)("p",null,"To view publish information, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"eik meta")," command."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik meta lodash\n")),Object(i.b)("h3",{id:"server-urls"},"Server URLs"),Object(i.b)("p",null,"Package URLs follow a specific format which are predictable so you can import any published packages into your application code via its URL."),Object(i.b)("h4",{id:"package-url-format"},"Package URL format"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"http(s)://<server origin>/npm/<package name>/<package version>/index.js\n")),Object(i.b)("h4",{id:"esm-imports"},"ESM Imports"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import lodash from 'https://myeikserver.com/npm/lodash/4.17.15/index.js'\n")))}p.isMDXComponent=!0}}]);