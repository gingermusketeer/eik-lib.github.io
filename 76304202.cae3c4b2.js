(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(9),i=(a(0),a(176)),o={id:"client_import_maps",title:"Import Maps",sidebar_label:"Import Maps"},p={id:"client_import_maps",isDocsHomePage:!1,title:"Import Maps",description:"Common dependencies can be separated out of your application bundles by the use of import maps.",source:"@site/docs/client_import_maps.md",permalink:"/docs/client_import_maps",sidebar_label:"Import Maps",sidebar:"someSidebar",previous:{title:"Aliases",permalink:"/docs/client_aliases"},next:{title:"Putting It All Together",permalink:"/docs/client_putting_it_all_together"}},c=[{value:"Bare imports",id:"bare-imports",children:[]},{value:"Import maps",id:"import-maps",children:[]},{value:"Writing an import map",id:"writing-an-import-map",children:[]},{value:"Publishing an import map",id:"publishing-an-import-map",children:[]},{value:"Packaging with an import map",id:"packaging-with-an-import-map",children:[]}],s={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Common dependencies can be separated out of your application bundles by the use of import maps.\nImport maps map "bare" imports in your code to common dependencies at published URLs.'),Object(i.b)("h3",{id:"bare-imports"},"Bare imports"),Object(i.b)("p",null,'A "bare" import is an import that is not specified as an absolute or a relative URL such as:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(i.b)("p",null,"An import like this has no meaning and your browser will not know what to do with it. However, writing code like this is common since bundlers like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rollupjs.org/"}),"rollup")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack")," resolve these during bundling."),Object(i.b)("p",null,'During Eik application packaging, if a "bare" import is used in your code, by default, it will be assumed to be a reference to a package in your ',Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder and that package will then be inlined into the bundle. The import or require statement will be replaced with the actual code being imported."),Object(i.b)("p",null,"If you were to produce bundles for different pages of your application, a large dependency such as react would be inlined in this way into each and every bundle and the user would be forced to download React each time they visit a page that uses a different bundle."),Object(i.b)("p",null,"To avoid this, its possible to publish a separate version of react and have each bundle reference that same published version so that the user only ever downloads it once. React could be published using the ",Object(i.b)("inlineCode",{parentName:"p"},"eik npm")," command which would give us a URL that can used to reference React in application code."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'https://assets.myeikserver.com/npm/react/16.17.4/index.js';\n")),Object(i.b)("p",null,"The problem with this is that we will need to replace our code's import statements each time a new version of React is published. When we have a lot of different applications across our organisation or just a number of bundles withing a single application, making updates quickly becomes a time consuming process."),Object(i.b)("h3",{id:"import-maps"},"Import maps"),Object(i.b)("p",null,'An import map can be used to automate mapping between a "bare" import and the URL of the published version during bundling. We can continue to write:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(i.b)("p",null,"and when we bundle our application code, ",Object(i.b)("inlineCode",{parentName:"p"},"react")," will be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"https://assets.myeikserver.com/npm/react/16.17.4/index.js"),"."),Object(i.b)("h3",{id:"writing-an-import-map"},"Writing an import map"),Object(i.b)("p",null,"An import map is just a JSON file that's served at a specific URL. Eik includes support for uploading and versioning import maps."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "imports": {\n        "react": "https://assets.myeikserver.com/npm/react/16.17.4/index.js"\n    }\n}\n')),Object(i.b)("h3",{id:"publishing-an-import-map"},"Publishing an import map"),Object(i.b)("p",null,"Each import map is uniquely identified by a name and a version. To publish an import map, you need to create your import map locally as a JSON file and then upload it together with the name and version using the ",Object(i.b)("inlineCode",{parentName:"p"},"eik map")," command."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik map my-map 1.0.0 ./import-map.json\n")),Object(i.b)("p",null,"The given import map will be uploaded and then served on an Eik server at the path ",Object(i.b)("inlineCode",{parentName:"p"},"/map/my-map/1.0.0")),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"https://assets.myeikserver.com/map/my-map/1.0.0\n")),Object(i.b)("h3",{id:"packaging-with-an-import-map"},"Packaging with an import map"),Object(i.b)("p",null,"When running ",Object(i.b)("inlineCode",{parentName:"p"},"eik package"),", it's possible to provide the URL to an import map to have the command replace any matching bare imports"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"eik package --name my-app --js ./assets/scripts.js --map https://myeikserver.com/map/my-map/1.0.0\n")),Object(i.b)("p",null,"Continuing with the example above, any import statements using bare imports to refer to react will be changed from:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n")),Object(i.b)("p",null,"to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'https://assets.myeikserver.com/npm/react/16.17.4/index.js';\n")))}l.isMDXComponent=!0},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,d=m["".concat(o,".").concat(u)]||m[u]||b[u]||i;return a?r.a.createElement(d,p(p({ref:t},s),{},{components:a})):r.a.createElement(d,p({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);