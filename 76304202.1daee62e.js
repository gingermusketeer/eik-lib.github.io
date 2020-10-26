(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||r;return n?i.a.createElement(d,p(p({ref:t},l),{},{components:n})):i.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),r=(n(0),n(101)),o={id:"client_import_maps",title:"Import Maps",sidebar_label:"Import Maps"},p={unversionedId:"client_import_maps",id:"client_import_maps",isDocsHomePage:!1,title:"Import Maps",description:"Common dependencies can be separated out of your application bundles by the use of import maps.",source:"@site/docs/client_import_maps.md",slug:"/client_import_maps",permalink:"/docs/client_import_maps",version:"current",sidebar_label:"Import Maps",sidebar:"mainSidebar",previous:{title:"ESM Friendly NPM Packages",permalink:"/docs/client_npm_packages"},next:{title:"Aliases",permalink:"/docs/client_aliases"}},s=[{value:"Bare imports",id:"bare-imports",children:[]},{value:"About import maps",id:"about-import-maps",children:[]},{value:"Example use cases",id:"example-use-cases",children:[{value:"Web framework upgrades",id:"web-framework-upgrades",children:[]}]},{value:"Defining import maps",id:"defining-import-maps",children:[]},{value:"Publishing import maps",id:"publishing-import-maps",children:[]},{value:"Using published import maps",id:"using-published-import-maps",children:[{value:"Defining in eik.json",id:"defining-in-eikjson",children:[]},{value:"Usage during bundling",id:"usage-during-bundling",children:[]}]},{value:"Supported plugins",id:"supported-plugins",children:[]},{value:"Usage with Aliases",id:"usage-with-aliases",children:[]}],l={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Common dependencies can be separated out of your application bundles by the use of import maps.\nImport maps map "bare" imports in your code to common dependencies at published URLs.'),Object(r.b)("p",null,"By creating and maintaining import maps, perhaps per team, across an entire organisation perhaps both, however you like, you can define which specific version of a dependency should be used across a number of applications. "),Object(r.b)("p",null,"Apps use the import map by fetching it from its published URL when they perform a client side code build and then dependencies will automatically be mapped to the endorsed version's URL."),Object(r.b)("h2",{id:"bare-imports"},"Bare imports"),Object(r.b)("p",null,'A "bare" import is an import that is not specified as an absolute or a relative URL such as:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(r.b)("p",null,"An import like this has no meaning and your browser will not know what to do with it. However, writing code like this is common since bundlers like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://rollupjs.org/"}),"rollup")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack")," resolve these during bundling."),Object(r.b)("h2",{id:"about-import-maps"},"About import maps"),Object(r.b)("p",null,"Import maps are an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/import-maps"}),"emerging standard"),' that allow control over what URLs get fetched by JavaScript import statements and import() expressions allowing "bare import specifiers", such as ',Object(r.b)("inlineCode",{parentName:"p"},'import moment from "moment"'),", to work in the browser (without a build step). By following this emerging standard, it will eventually be possible to use import maps in Eik apps without the need to support them during bundling. For now, however, it is necessary to use a plugin such as ",Object(r.b)("inlineCode",{parentName:"p"},"rollup-plugin-eik-import-maps"),' when bundling to replace "bare imports" with values in import map files.'),Object(r.b)("h2",{id:"example-use-cases"},"Example use cases"),Object(r.b)("h3",{id:"web-framework-upgrades"},"Web framework upgrades"),Object(r.b)("p",null,"For an organisation with many web applications, each with a lot of pages, all using React, it can be easy for many different versions of React to end up in play across the organisation, especially if there are many people or teams involved. For non breaking changes, you might simply prefer that all applications were locked to a specific version. Users moving across pages or apps will then only ever need to download a single version of React, and this is good for the user's page load times and therefore their experience of your application."),Object(r.b)("h2",{id:"defining-import-maps"},"Defining import maps"),Object(r.b)("p",null,"An import map is just a JSON file that's served at a specific URL. Eik includes support for uploading and versioning import maps."),Object(r.b)("p",null,"If we create an import map JSON file named ",Object(r.b)("inlineCode",{parentName:"p"},"import-map.json")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "imports": {\n        "react": "https://assets.myeikserver.com/npm/react/16.17.4/index.js"\n    }\n}\n')),Object(r.b)("h2",{id:"publishing-import-maps"},"Publishing import maps"),Object(r.b)("p",null,"We can publish it to an Eik server with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"eik map my-map 1.0.0 ./import-map.json\n")),Object(r.b)("p",null,"Each import map is uniquely identified by a name and a version and will be uploaded and then served by the Eik server at a path of the form ",Object(r.b)("inlineCode",{parentName:"p"},"/map/<name>/<version>")," so in the case above, the import map will be published to ",Object(r.b)("inlineCode",{parentName:"p"},"/map/my-map/1.0.0")," on the Eik server. We can publish updates simply by specifying a newer version that any previously published. Eg. ",Object(r.b)("inlineCode",{parentName:"p"},"1.0.1"),"."),Object(r.b)("h2",{id:"using-published-import-maps"},"Using published import maps"),Object(r.b)("h3",{id:"defining-in-eikjson"},"Defining in eik.json"),Object(r.b)("p",null,"You can specify which named version of an import map your application should use in its ",Object(r.b)("inlineCode",{parentName:"p"},"eik.json")," file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "import-map": "http://assets.myserver.com/map/my-map/1.0.0"\n}\n')),Object(r.b)("p",null,"Bundler plugins (see below) use this field to automatically detect which import maps your application uses."),Object(r.b)("h3",{id:"usage-during-bundling"},"Usage during bundling"),Object(r.b)("p",null,'Since import maps map "bare" import specifiers in applications to URLs, in our application we should continue to write import statements of the form:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(r.b)("p",null,"However, since import maps are not yet supported in browsers natively, it is necessary to use plugins during bundling to replace bare specifiers with URLs at bundle time."),Object(r.b)("p",null,"When the bundler runs, bare import specifiers will be replaced with URLs by whichever plugin you are using. "),Object(r.b)("p",null,"For example, using the import map above, any import statements using bare imports to refer to react will be changed from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(r.b)("p",null,"to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'https://assets.myeikserver.com/npm/react/16.17.4/index.js';\n")),Object(r.b)("h2",{id:"supported-plugins"},"Supported plugins"),Object(r.b)("p",null,"We currently support the following plugins"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rollup: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/eik-lib/rollup-plugin-import-map"}),"@eik/rollup-plugin-import-map"))),Object(r.b)("h2",{id:"usage-with-aliases"},"Usage with Aliases"),Object(r.b)("p",null,"For even more flexibility, consider using import maps in conjunction with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/client_aliases"}),"aliases"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Alias the latest version of React and put the alias into an import map so that upgrading React across all apps using the import map is as simple as updating the Alias"),Object(r.b)("li",{parentName:"ul"},"Alias the latest version of the import map so that applications will automatically get changes when they perform bundles after the alias has been updated (no need to go in and manually update eik.json in each app)")))}c.isMDXComponent=!0}}]);