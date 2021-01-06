(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return p}));var a=n(3),t=n(7),o=(n(0),n(121)),i={id:"server_file_structure",title:"Eik server - File structure",sidebar_label:"File structure"},s={unversionedId:"server_file_structure",id:"server_file_structure",isDocsHomePage:!1,title:"Eik server - File structure",description:"The EIK server stores files in the following structure:",source:"@site/docs/server_file_structure.md",slug:"/server_file_structure",permalink:"/docs/server_file_structure",version:"current",sidebar_label:"File structure",sidebar:"mainSidebar",previous:{title:"Eik server - REST API",permalink:"/docs/server_rest_api"},next:{title:"Eik server - Metrics",permalink:"/docs/server_metrics"}},c=[{value:"Packages",id:"packages",children:[]},{value:"NPM Packages",id:"npm-packages",children:[]},{value:"Import Maps",id:"import-maps",children:[]},{value:"Aliases",id:"aliases",children:[]}],l={toc:c};function p(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The EIK server stores files in the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),":root\n\u2514\u2500\u2500 :org\n    \u251c\u2500\u2500 map\n    \u2502\xa0\xa0 \u2514\u2500\u2500 :name\n    \u2502\xa0\xa0     \u251c\u2500\u2500 :version.import-map.json\n    \u2502\xa0\xa0     \u251c\u2500\u2500 :major.alias.json\n    \u2502       \u2514\u2500\u2500 versions.json\n    \u251c\u2500\u2500 pkg\n    \u2502   \u2514\u2500\u2500 :name\n    \u2502       \u251c\u2500\u2500 :version\n    \u2502       \u2502\xa0\xa0 \u251c\u2500\u2500 *\n    \u2502       \u251c\u2500\u2500 :version.package.json\n    \u2502       \u251c\u2500\u2500 :major.alias.json\n    \u2502       \u2514\u2500\u2500 versions.json\n    \u2514\u2500\u2500 npm\n        \u2514\u2500\u2500 :name\n            \u251c\u2500\u2500 :version\n            \u2502\xa0\xa0 \u251c\u2500\u2500 *\n            \u251c\u2500\u2500 :version.package.json\n            \u251c\u2500\u2500 :major.alias.json\n            \u2514\u2500\u2500 versions.json\n")),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":root")," is the root folder for everything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":org")," is the name of an organisation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":name")," is the name of a package."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":version")," is the full semver version of a package."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":major")," is the major semver version of a full semver version of a package.")),Object(o.b)("h2",{id:"packages"},"Packages"),Object(o.b)("p",null,"Packages are stored under ",Object(o.b)("inlineCode",{parentName:"p"},"/:root/:org/pkg/:name/:version/")," and the structure of a package is\narbitrary and untouched during upload by the service."),Object(o.b)("p",null,"The file structure of a package is stored in a package file at ",Object(o.b)("inlineCode",{parentName:"p"},"/:root/:org/pkg/:name/:version.package.json"),"."),Object(o.b)("h2",{id:"npm-packages"},"NPM Packages"),Object(o.b)("p",null,'NPM packages are packages from the NPM registry that are then published to Eik as a "copy". Packages from\nthe NPM registry are published under this namespace to avoid name collision with other packages.'),Object(o.b)("p",null,"NPM packages are stored under ",Object(o.b)("inlineCode",{parentName:"p"},"/:root/:org/npm/:name/:version/")," and the structure of a package is\narbitrary and is not changed during upload by the service."),Object(o.b)("p",null,"The file structure of an NPM package is stored in a package meta file at ",Object(o.b)("inlineCode",{parentName:"p"},"/:root/:org/pkg/:name/:version.package.json"),"."),Object(o.b)("h2",{id:"import-maps"},"Import Maps"),Object(o.b)("p",null,"Import maps are stored under ",Object(o.b)("inlineCode",{parentName:"p"},"/:root/:org/map/:name/:version.import-map.json"),". The filename of\nimport maps is strict and conforms to the version number it's given with a ",Object(o.b)("inlineCode",{parentName:"p"},".json")," extension."),Object(o.b)("p",null,"The filename of import maps prior to uploading to the service can be anything. The service will\nconvert the file name according to the parameters given when uploading it."),Object(o.b)("h2",{id:"aliases"},"Aliases"),Object(o.b)("p",null,"Packages, NPM packages and import map versions can be aliased. An alias is a semver major version of a\nfull semver version and is a way to map a major version to a given full semver version of a\npackage or import map."),Object(o.b)("p",null,"This alias mapping is stored alongside the version of a package or import map version:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Package alias path: ",Object(o.b)("inlineCode",{parentName:"li"},"/:root/:org/pkg/:name/:major.alias.json")),Object(o.b)("li",{parentName:"ul"},"NPM package alias path: ",Object(o.b)("inlineCode",{parentName:"li"},"/:root/:org/npm/:name/:major.alias.json")),Object(o.b)("li",{parentName:"ul"},"Import map alias path: ",Object(o.b)("inlineCode",{parentName:"li"},"/:root/:org/map/:name/:major.alias.json"))))}p.isMDXComponent=!0},121:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var a=n(0),t=n.n(a);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),p=function(e){var r=t.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=p(e.components);return t.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},b=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?t.a.createElement(d,s(s({ref:r},l),{},{components:n})):t.a.createElement(d,s({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);