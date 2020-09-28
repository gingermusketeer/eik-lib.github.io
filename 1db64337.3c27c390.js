(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),i=a(6),o=(a(0),a(96)),r={id:"overview",title:"Overview",sidebar_label:"Overview"},l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Eik is an asset server for serving ESM and CSS assets. The Eik server can run and be integrated with your own infrastructure. Eik comes with a client for easy upload and management of your assets.",source:"@site/docs/overview.md",slug:"/overview",permalink:"/docs/overview",version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",next:{title:"Client Installation",permalink:"/docs/client_installation"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"How Eik works",id:"how-eik-works",children:[]},{value:"ESM imports",id:"esm-imports",children:[]},{value:"Import Maps",id:"import-maps",children:[]},{value:"How it all works together",id:"how-it-all-works-together",children:[]}],p={rightToc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Eik is an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/server"}),"asset server")," for serving ESM and CSS assets. The Eik server can run and be integrated with your own infrastructure. Eik comes with a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/client"}),"client")," for easy upload and management of your assets."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"To understand Eik we need to understand what we are trying to achieve so lets start with a fairly common issue:"),Object(o.b)("p",null,"In a moderate or large sized web site it is very common that the site is built and served as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://martinfowler.com/articles/microservices.html"}),"multiple applications")," which live at different pathnames on the site. It's also common for each of these applications to have a dedicated team of developers with the goal of being as autonomous as possible. To achieve this, each application and team should depend on each other as little as possible."),Object(o.b)("p",null,"Lets say we have a site where the frontpage (",Object(o.b)("inlineCode",{parentName:"p"},"site.com"),") is one application. Then we have a web shop, a second application, on ",Object(o.b)("inlineCode",{parentName:"p"},"site.com/shop")," and finally there is a third application handling checkout on ",Object(o.b)("inlineCode",{parentName:"p"},"site.com/checkout"),". "),Object(o.b)("p",null,"Let's also say that all of these applications are using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://lit-html.polymer-project.org/"}),"lit-html")," for templating in the browser. We then have different applications depending on the same library that we want to be developed and deployed to production autonomously. Problems can arise when some of these application start to depend on different versions of the same library."),Object(o.b)("p",null,"Our challenge is to avoid the end user having to end up downloading different versions of the same library as they move between the different applications on our site. We want to maximize end user performance by downloading lit-html once and not having to download one specific version when accessing ",Object(o.b)("inlineCode",{parentName:"p"},"site.com")," (eg. v1.2.0) and then downloading another specific version (eg. v1.1.1) when moving to ",Object(o.b)("inlineCode",{parentName:"p"},"site.com/shop")," and finally ending up with perhaps having to download yet another version (eg. v1.1.2) when they check out at ",Object(o.b)("inlineCode",{parentName:"p"},"site.com/checkout"),"."),Object(o.b)("p",null,"The Eik solution is to make all applications point to the same version of the same library in production despite that the applications are developed using different patch or minor version. If the library then has appropriate HTTP cache headers, the browser will do the rest and make sure the library is loaded over the wire only once during the user's visit to our site."),Object(o.b)("h2",{id:"how-eik-works"},"How Eik works"),Object(o.b)("p",null,"The main role of the Eik server is to serve static assets uploaded to the server. Upon upload, assets will be given a new versioned pathname for each upload and are considered imutable. A change in an asset is a new version on the Eik server. By doing so, served assets can be cached forever in the end users browser."),Object(o.b)("p",null,"The Eik server also has the concept called an alias. An alias is a non immutable pathname which can be set to redirect requests to it, to an immutable asset pathname. "),Object(o.b)("p",null,"For example, let us say that we upload lit-html version 1.1.1 to an Eik server. This version of lit-html will then live on the immutable URL ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/1.1.1"),". We can then set an alias for lit-html and this alias will be on the non immutable pathname ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/v1"),". Any request to any file under the alias at ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," we will then be redirected to the matching file under ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/1.1.1"),"."),Object(o.b)("p",null,"Later on, when we publish lit-html version 1.2.0 to the Eik server, this version will then live on the immutable pathname ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/1.2.0"),". We can then update the existing alias at the non imutable pathname ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," to point to the new version. Requests to any file under the alias at ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," will then be redirected to its matching file under ",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/1.2.0"),"."),Object(o.b)("p",null,"In order to meet the challenge outlined in the introduction above, each of the applications described can load lit-html through its alias (",Object(o.b)("inlineCode",{parentName:"p"},"/npm/lit-html/v1"),") and they will all load the same version. The alias acts as a static path to a shared library (in this case lit-html) across all the applications. It's then possible to publish new versions of a library without having to rebuild and redeploy each application to production. "),Object(o.b)("h2",{id:"esm-imports"},"ESM imports"),Object(o.b)("p",null,"Before we proceed, we should go over some ECMA Script Module (ESM) import statement basics. "),Object(o.b)("p",null,"ESM import statements can be relative. A relative ESM import statement must start with either ",Object(o.b)("inlineCode",{parentName:"p"},"/"),", ",Object(o.b)("inlineCode",{parentName:"p"},"./")," or ",Object(o.b)("inlineCode",{parentName:"p"},"../"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as mymod from '/my_module.js';\nimport * as mymod from './my_module.js';\nimport * as mymod from '../my_module.js';\n")),Object(o.b)("p",null,"ESM import statements can also be absolute in which case they must start with an HTTP protocol:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as mylib from 'https://eik-server.com/pkg/mylib/v3/main.js';\n")),Object(o.b)("p",null,"Due to the prevalence of asset bundling, it's very common to see ESM import statements which do not comply with any of the statements outlined above (note that ",Object(o.b)("inlineCode",{parentName:"p"},"my_library")," does not start with ",Object(o.b)("inlineCode",{parentName:"p"},"/"),", ",Object(o.b)("inlineCode",{parentName:"p"},"./")," or ",Object(o.b)("inlineCode",{parentName:"p"},"../"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as mylib from 'my_library';\n")),Object(o.b)("p",null,'These type of statements are called "bare imports" and are not legal ESM import statements. A browser can not handle such an import statement. Bare import statements are commonly used when a module is installed through a package manager, such as NPM, and then transpiled through a build step to one of the legal ESM import statements before being served to the browser.'),Object(o.b)("p",null,"In Eik, we utilize bare imports. Which brings us to Import Maps."),Object(o.b)("h2",{id:"import-maps"},"Import Maps"),Object(o.b)("p",null,"Import Maps are a fairly new and up and coming web standard. An Import Map is a simple object mapping between a bare import statement and a legal ESM import statement. The idea is that an Import Map should be used to translate bare import statements to fully qualified import statements in ESM modules."),Object(o.b)("p",null,"An Import Map looks something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "my_library": "https://eik-server.com/pkg/mylib/v3/main.js",\n    "lit-html": "https://eik-server.com/npm/lit-html/v1/"\n}\n')),Object(o.b)("p",null,"Eik has support for storing Import Maps under a dedicated namespace. Import Maps are versioned and immutable and can be aliased in the same way that assets can."),Object(o.b)("p",null,"Eik comes with a feature to apply Import Maps to Eik packages during bundling."),Object(o.b)("h2",{id:"how-it-all-works-together"},"How it all works together"),Object(o.b)("p",null,"In Eik, we use Import Maps and aliasing of assets to align the versions of libraries across multiple applications on a site while maintaining the possibility to develop and deploy each application to production separately."),Object(o.b)("p",null,"Let's go through this, keeping in mind the challenge we outlined in the introduction above."),Object(o.b)("p",null,"We know that lit-html is a library that all our applications will be using so we want to align the version in use across all of them. To do so, we publish version 1.2.0 of lit-html to our Eik server after which time it will be available at ",Object(o.b)("inlineCode",{parentName:"p"},"https://eik-server.com/npm/lit-html/1.2.0"),"."),Object(o.b)("p",null,"To make the reference to lit-html more static over time we create an alias to point to version 1.2.0 and lit-html can be requested through ",Object(o.b)("inlineCode",{parentName:"p"},"https://eik-server.com/npm/lit-html/v1"),". As mentioned earlier, this give us the possibillity to update versions of lit-html without having to rebuild and redeploy each of our applications to production."),Object(o.b)("p",null,"Next, we need to create a mapping between the bare import statement developers will use when developing the applications and the aliased URL of lit-html. We can do so by making an Import Map as follow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "lit-html": "/npm/lit-html/v1"\n}\n')),Object(o.b)("p",null,'Once created, we publish this Import Map to our Eik server and then create an alias for it. If we were to name the Import Map "site-mapping" and versioned it as 1.0.1 during the upload to the Eik server, it would then be available at the alias URL ',Object(o.b)("inlineCode",{parentName:"p"},"https://eik-server.com/map/site-mapping/v1"),"."),Object(o.b)("p",null,"In each application we can now depend on and install lit-html through NPM as is common practice. Each application can then locally reference lit-html through its bare import statement like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as lit from 'lit-html';\n")),Object(o.b)("p",null,"When an application is ready to be put into production, the frontend code should be uploaded as a package to the Eik server. When preparing our application for upload to the Eik server we will apply our Import Map. This will transform our bare import statements into legal ESM import statement pointing to the lit-html alias defined in the Import Map:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as lit from '/npm/lit-html/v1';\n")),Object(o.b)("p",null,"Our application defines an ESM import statement that points to the alias for lit-html which makes sure multiple applications on our site align to the same version of lit-html. By doing this, we're able to develop our application in isolation without depending or interfering with any other applications that utilise the same library."))}c.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),b=n,d=m["".concat(r,".").concat(b)]||m[b]||h[b]||o;return a?i.a.createElement(d,l(l({ref:t},p),{},{components:a})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);