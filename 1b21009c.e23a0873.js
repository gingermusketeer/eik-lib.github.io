(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,s(s({ref:t},o),{},{components:n})):a.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(121)),l={id:"server_sink",title:"Eik server - Sink",sidebar_label:"Sink"},s={unversionedId:"server_sink",id:"server_sink",isDocsHomePage:!1,title:"Eik server - Sink",description:"The Eik server has a file sink concept which caters for the posibillity to write files to, and read files from different storage backends by swapping out sink modules in the server. Because each sink implements the same public API, it is possible to use one sink in one environment and a different sink in another.",source:"@site/docs/server_sink.md",slug:"/server_sink",permalink:"/docs/server_sink",version:"current",sidebar_label:"Sink",sidebar:"mainSidebar",previous:{title:"Eik server - Programatic API",permalink:"/docs/server_api"},next:{title:"Eik server - REST API",permalink:"/docs/server_rest_api"}},c=[{value:"Built in sinks",id:"built-in-sinks",children:[{value:"File system",id:"file-system",children:[]},{value:"In memory",id:"in-memory",children:[]}]},{value:"Custom sinks",id:"custom-sinks",children:[{value:"Available custom sinks",id:"available-custom-sinks",children:[]}]},{value:"Implementing a custom sink",id:"implementing-a-custom-sink",children:[{value:"Constructor",id:"constructor",children:[]},{value:"API",id:"api",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Security",id:"security",children:[]}]}],o={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Eik server has a file sink concept which caters for the posibillity to write files to, and read files from different storage backends by swapping out sink modules in the server. Because each sink implements the same public API, it is possible to use one sink in one environment and a different sink in another. "),Object(i.b)("h2",{id:"built-in-sinks"},"Built in sinks"),Object(i.b)("p",null,"To make it easy to start up an Eik server, the server is shipped with a couple of built in sinks. The file system sink is the default sink in use when a server is started without specifying a sink."),Object(i.b)("h3",{id:"file-system"},"File system"),Object(i.b)("p",null,"The file system sink will write files to and from the local file system. By default all files are stored in the default OS temp folder. Do note that files stored in the default OS temp folder will, on most OSes, be deleted without warning by the OS at some point."),Object(i.b)("p",null,"To set an alternative path, please see the XXXXXXXXXXXXXXXXXXX configuration."),Object(i.b)("h3",{id:"in-memory"},"In memory"),Object(i.b)("p",null,"The in memory sink will write files to and from memory. Files written to this sink will disappear when the Eik server is restarted. This sink is handy for spinning up an Eik server to run tests against."),Object(i.b)("p",null,"To enable the in memory sink, please see the XXXXXXXXXXXXXXXXXXX configuration."),Object(i.b)("h2",{id:"custom-sinks"},"Custom sinks"),Object(i.b)("p",null,"A custom sink is normally pulled in as a dependent module and passed on to the ",Object(i.b)("inlineCode",{parentName:"p"},"customSink")," property on the constructor of the @eik/service in a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/server#customized-setup"}),"custom server setup"),"."),Object(i.b)("p",null,"Example of using the sink for Google Cloud Storage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fastify = require('fastify');\nconst Service = require('@eik/service');\nconst Sink = require('@eik/sink-gcs');\n\nconst sink = new Sink(...);\nconst service = new Service({ customSink: sink });\n\nconst app = fastify({\n    ignoreTrailingSlash: true,\n});\n\napp.register(service.api());\n")),Object(i.b)("p",null,"A custom sink normally takes its own set of properties, such as authentication keys etc, so please see the documentation for each sink for what's required."),Object(i.b)("h3",{id:"available-custom-sinks"},"Available custom sinks"),Object(i.b)("p",null,"These custom sinks are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/eik-lib/sink-gcs"}),"Google Cloud Storage"))),Object(i.b)("p",null,"Please feel free to let us know if you have a custom sink you would like to have listed."),Object(i.b)("h2",{id:"implementing-a-custom-sink"},"Implementing a custom sink"),Object(i.b)("p",null,"Implementing a custom sink is fairly stright forward. A custom sink must extend the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eik-lib/sink"}),"Eik sink interface")," and implement all the methods in the public API and its public properties. If this is not done, the custom sink will not be usable in the Eik server since validation depends upon the extension of the interface."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eik-lib/sink-gcs"}),"Google Cloud Storage sink")," is a good example to look at when implementing a custom sink."),Object(i.b)("h3",{id:"constructor"},"Constructor"),Object(i.b)("p",null,"A sink must be a ",Object(i.b)("inlineCode",{parentName:"p"},"class")," which extends the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eik-lib/sink"}),"Eik sink interface"),". There are no restrictions on what arguments, methods or properties you assign the class except that you must implement the methods in the sink interface."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Sink = require('@eik/sink');\n\nconst SinkCustom = class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    write() {}\n    read() {}\n    delete() {}\n    exist() {}\n    get metrics() {}\n}\n")),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("p",null,"A sink must implement the following API:"),Object(i.b)("h4",{id:"writefilepath-contenttype"},"write(filePath, contentType)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"argument"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filePath"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pathname of the file relative to ",Object(i.b)("inlineCode",{parentName:"td"},"root")," in the ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/server_file_structure"}),"file structure")," in Eik")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"contentType"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Content type of the file")))),Object(i.b)("p",null,"This method is called when a file is to be written to storage. The method must return a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," and resolve with a ",Object(i.b)("inlineCode",{parentName:"p"},"WritableStream")," when the storage is ready to be written too. The server will pipe the byte stream of the file to this stream. Upon any errors, the promise should reject with an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," object"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { Writable } = require('stream');\nconst Sink = require('@eik/sink');\n\nconst SinkCustom = class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    write() {\n        return new Promise(resolve, reject) {\n            const to = new Writable(...);\n            resolve(to);\n        }\n    }\n}\n")),Object(i.b)("h4",{id:"readfilepath"},"read(filePath)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"argument"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filePath"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pathname of the file relative to ",Object(i.b)("inlineCode",{parentName:"td"},"root")," in the ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/server_file_structure"}),"file structure")," in Eik")))),Object(i.b)("p",null,"This method is called when a file is to be read from storage. The method must return a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," and resolve with a ",Object(i.b)("inlineCode",{parentName:"p"},"ReadableStream")," when the storage is ready to be read from. Upon any errors, the promise should reject with an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," object"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { Readable } = require('stream');\nconst Sink = require('@eik/sink');\n\nconst SinkCustom = class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    read() {\n        return new Promise(resolve, reject) {\n            const to = new Readable(...);\n            resolve(to);\n        }\n    }\n}\n")),Object(i.b)("h4",{id:"deletefilepath"},"delete(filePath)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"argument"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filePath"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pathname of the file relative to ",Object(i.b)("inlineCode",{parentName:"td"},"root")," in the ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/server_file_structure"}),"file structure")," in Eik")))),Object(i.b)("p",null,"This method is called when a file is to be deleted from storage. The method must return a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," and resolve with no value when the file is deleted from storage. If any errors occur, the promise should reject with an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," object"),Object(i.b)("h4",{id:"existfilepath"},"exist(filePath)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"argument"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filePath"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pathname of the file relative to ",Object(i.b)("inlineCode",{parentName:"td"},"root")," in the ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/server_file_structure"}),"file structure")," in Eik")))),Object(i.b)("p",null,"This method is called to check if a file exists in storage. The method must return a ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," and resolve with no value if the file exists in storage. If the file does not exist the promise should reject with no error object. Upon any errors, the promise should reject with an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," object."),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("p",null,"A sink must implement the following properties:"),Object(i.b)("h4",{id:"metrics"},".metrics"),Object(i.b)("p",null,"A getter for a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/metrics-js/client"}),"metric stream"),". The metric stream can be used to emit metrics from the sink into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/server_metrics"}),"the overall metric stream")," in the server."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Metrics = require('@metrics/client');\nconst Sink = require('@eik/sink');\n\nconst SinkCustom = class SinkCustom extends Sink {\n    constructor() {\n        super();\n        this._metrics = new Metrics();\n        this._counter = this._metrics.counter({\n            name: 'eik_custom_sink',\n            description: 'Counter measuring access to the custom sink',\n        });\n    }\n    write(filePath, contentType) {\n        return new Promise(resolve, reject) {\n            this._counter.inc();\n\n        }\n    }\n}\n")),Object(i.b)("h3",{id:"validation"},"Validation"),Object(i.b)("p",null,"We recommend you validate the arguments for all methods. The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eik-lib/sink"}),"Eik sink interface")," contain static methods to do so which can be used when implementing a sink:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Sink = require('@eik/sink');\n\nconst SinkCustom = class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    write(filePath, contentType) {\n        return new Promise(resolve, reject) {\n            try {\n                super.constructor.validateFilePath(filePath);\n                super.constructor.validateContentType(contentType);\n            } catch (error) {\n                reject(error);\n                return;\n            }\n\n        }\n    }\n}\n")),Object(i.b)("h3",{id:"security"},"Security"),Object(i.b)("p",null,"A sink should take care of protecting against ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://owasp.org/www-community/attacks/Path_Traversal"}),"Path Traversal"),". It should not be possible to access files outside the ",Object(i.b)("inlineCode",{parentName:"p"},"root")," of the file structure in Eik by passing in a hostile pathname through the REST API of Eik. Each ",Object(i.b)("inlineCode",{parentName:"p"},"filePath")," argument on each method should be checked for such."),Object(i.b)("p",null,"Please see OWASPs guide on preventing ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OWASP/wstg/blob/master/document/4-Web_Application_Security_Testing/05-Authorization_Testing/01-Testing_Directory_Traversal_File_Include.md"}),"Path Traversal"),"."))}b.isMDXComponent=!0}}]);