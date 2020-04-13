(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return r})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return m}));var l=t(1),n=t(9),b=(t(0),t(171)),i={id:"server_rest_api",title:"Eik server - REST API",sidebar_label:"REST API"},r={id:"server_rest_api",title:"Eik server - REST API",description:"The EIK server has the following REST API:",source:"@site/docs/server_rest_api.md",permalink:"/docs/server_rest_api",sidebar_label:"REST API",sidebar:"someSidebar",previous:{title:"Server",permalink:"/docs/server"},next:{title:"Eik server - File structure",permalink:"/docs/server_file_structure"}},p=[{value:"Authentication",id:"authentication",children:[{value:"Endpoint Summary Table",id:"endpoint-summary-table",children:[]},{value:"Login",id:"login",children:[]}]},{value:"Packages",id:"packages",children:[{value:"Endpoint Summary Table",id:"endpoint-summary-table-1",children:[]},{value:"Public Package URL",id:"public-package-url",children:[]},{value:"Upload a package",id:"upload-a-package",children:[]},{value:"Latest Package versions",id:"latest-package-versions",children:[]},{value:"Package version overview",id:"package-version-overview",children:[]}]},{value:"Import Maps",id:"import-maps",children:[{value:"Endpoint Summary Table",id:"endpoint-summary-table-2",children:[]},{value:"Public Import Maps URL",id:"public-import-maps-url",children:[]},{value:"Upload an Import Map",id:"upload-an-import-map",children:[]},{value:"Latest Import Map versions",id:"latest-import-map-versions",children:[]}]},{value:"Aliases",id:"aliases",children:[{value:"Endpoint Summary Table",id:"endpoint-summary-table-3",children:[]},{value:"Public Alias URL",id:"public-alias-url",children:[]},{value:"Create Alias",id:"create-alias",children:[]},{value:"Update Alias",id:"update-alias",children:[]},{value:"Delete Alias",id:"delete-alias",children:[]}]}],c={rightToc:p};function m(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The EIK server has the following REST API:"),Object(b.b)("h2",{id:"authentication"},"Authentication"),Object(b.b)("p",null,"Authentication is needed to execute multiple API calls in the REST API."),Object(b.b)("h3",{id:"endpoint-summary-table"},"Endpoint Summary Table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Verb"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Form Fields"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#login"}),"Login")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"POST"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/auth/login")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key"))))),Object(b.b)("h3",{id:"login"},"Login"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"POST")),Object(b.b)("p",null,"Logs a user in to the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/auth/login\n")),Object(b.b)("p",null,"Form parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"key")," an authentication key")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if user is authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized")),Object(b.b)("p",null,"Success response: A jwt token"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-json"}),'{\n    "token": "..."\n}\n')),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X POST -i -F key=rfm940c3 http://localhost:4001/auth/login\n")),Object(b.b)("h2",{id:"packages"},"Packages"),Object(b.b)("p",null,"Modules are packages of files to be loaded by a browser. Modules are versioned and consist of one or more files. A module are immutable."),Object(b.b)("h3",{id:"endpoint-summary-table-1"},"Endpoint Summary Table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Verb"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Form Fields"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#public-package-url"}),"Public Package URL")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/pkg/:name/:version/:extras")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#upload-a-package"}),"Upload a Package")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"PUT"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/pkg/:name/:version")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"package"))))),Object(b.b)("h3",{id:"public-package-url"},"Public Package URL"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves files from a module at the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/pkg/:name/:version/:extras\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," is the version of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":extras")," whildcard pathname to any file in the package")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if file is successfully retrieved"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if file is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET http://localhost:4001/pkg/fuzz/8.4.1/main/index.js\n")),Object(b.b)("h3",{id:"upload-a-package"},"Upload a package"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"PUT")),Object(b.b)("p",null,"Puts a new package at the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/pkg/:name/:version\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," is the version of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Form parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"package")," a ",Object(b.b)("inlineCode",{parentName:"li"},"tar")," or ",Object(b.b)("inlineCode",{parentName:"li"},"tar.gz")," containing the files of the package")),Object(b.b)("p",null,"HTTP headers:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Authorization")," a jwt authorization bearer with the token retrieved from a successful ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#login"}),"authentication"))),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"303")," if module is successfully uploaded. ",Object(b.b)("inlineCode",{parentName:"li"},"location")," is root of module"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"400")," if validation in URL parameters or form fields fails"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"409")," if module already exist or version in a major range is not newer than previous version in a major range"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"415")," if file format of the uploaded file is unsupported"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"502")," if package could not be written to the sink")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'curl -X PUT -i -F package=@archive.tgz -H "Authorization: Bearer {:token}" http://localhost:4001/pkg/fuzz/8.4.1\n')),Object(b.b)("h3",{id:"latest-package-versions"},"Latest Package versions"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves an overview of the latest major versions of a package."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/pkg/:name\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),".")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if file is successfully retrieved"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if file is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET http://localhost:4001/pkg/fuzz\n")),Object(b.b)("h3",{id:"package-version-overview"},"Package version overview"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves an overview of the files of a package version."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/pkg/:name/:version\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," is the version of the package. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if file is successfully retrieved"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if file is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET http://localhost:4001/pkg/fuzz\n")),Object(b.b)("h2",{id:"import-maps"},"Import Maps"),Object(b.b)("p",null,"An ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/WICG/import-maps"}),"import map")," holds a mapping or a set of mappings between ECMA Script Module (ESM) bare imports and an absolute URL.\nImport maps are versioned and are immutable."),Object(b.b)("h3",{id:"endpoint-summary-table-2"},"Endpoint Summary Table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Verb"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Form Fields"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#public-import-map-url"}),"Public Import Map URL")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/map/:name/:version")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#upload-an-import-map"}),"Upload an Import Map")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"PUT"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/map/:name/:version")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"map"))))),Object(b.b)("h3",{id:"public-import-maps-url"},"Public Import Maps URL"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves an import map from the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/map/:name/:version\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," is the version of the import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if import map is successfully retrieved"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if import map is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET http://localhost:4001/map/buzz/8.4.1\n")),Object(b.b)("h3",{id:"upload-an-import-map"},"Upload an Import Map"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"PUT")),Object(b.b)("p",null,"Puts a new import map at the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/map/:name/:version\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," is the version of the import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Form parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"map")," a ",Object(b.b)("inlineCode",{parentName:"li"},"json")," file (the import map)")),Object(b.b)("p",null,"HTTP headers:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Authorization")," a jwt authorization bearer with the token retrieved from a successful ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#login"}),"authentication"))),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"303")," if import map is successfully uploaded. ",Object(b.b)("inlineCode",{parentName:"li"},"location")," is ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#public-import-map-url"}),"Public Import Map URL")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"400")," if validation in URL parameters or form fields fails"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"409")," if import map already exist"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"415")," if file format of the uploaded import map is unsupported"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"502")," if import map could not be written to the sink")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'curl -X PUT -i -F map=@import-map.json -H "Authorization: Bearer {:token}" http://localhost:4001/map/buzz/8.4.1\n')),Object(b.b)("h3",{id:"latest-import-map-versions"},"Latest Import Map versions"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves an overview of the latest versions of a Import Map."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/map/:name\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),".")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"200")," if file is successfully retrieved"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if file is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET http://localhost:4001/map/buzz\n")),Object(b.b)("h2",{id:"aliases"},"Aliases"),Object(b.b)("p",null,"An alias is a shorthand between a major version of a package / import map and the set exact version of the package / import map."),Object(b.b)("h3",{id:"endpoint-summary-table-3"},"Endpoint Summary Table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Verb"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Form Fields"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#public-alias-url"}),"Public Alias URL")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/:type/:name/v:alias/:extras")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#create-alias"}),"Create Alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"PUT"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/:type/:name/v:alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"version"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#update-alias"}),"Update Alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"POST"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/:type/:name/v:alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"version"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(l.a)({parentName:"td"},{href:"#delete-alias"}),"Delete Alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"DELETE"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"/:type/:name/v:alias")),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h3",{id:"public-alias-url"},"Public Alias URL"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"GET")),Object(b.b)("p",null,"Retrieves files from a package or an import map at the service."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/:type/:name/v:alias/:extras\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":type")," is the type to retrieve from. Validator: ",Object(b.b)("inlineCode",{parentName:"li"},"pkg")," or ",Object(b.b)("inlineCode",{parentName:"li"},"map"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":alias")," is the major version of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":extras")," whildcard pathname to any file in a package. Does not apply to import maps.")),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"303")," if alias exist"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if alias is not found")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl -X GET -L http://localhost:4001/pkg/fuzz/v8/main/index.js\ncurl -X GET -L http://localhost:4001/map/buzz/v4\n")),Object(b.b)("h3",{id:"create-alias"},"Create Alias"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"PUT")),Object(b.b)("p",null,"Create a new alias."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/:type/:name/v:alias\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":type")," is the type to retrieve from. Validator: ",Object(b.b)("inlineCode",{parentName:"li"},"pkg")," or ",Object(b.b)("inlineCode",{parentName:"li"},"map"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":alias")," is the major version of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Form parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," full version of the package to be aliased")),Object(b.b)("p",null,"HTTP headers:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Authorization")," a jwt authorization bearer with the token retrieved from a successful ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#login"}),"authentication"))),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"303")," if alias is successfully created. ",Object(b.b)("inlineCode",{parentName:"li"},"location")," points to the alias"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"400")," if validation in URL parameters or form fields fails"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"409")," if alias already exist"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"502")," if alias could not be altered by the sink")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'curl -X PUT -i -F version=8.4.1 -H "Authorization: Bearer {:token}" http://localhost:4001/pkg/fuzz/v8\ncurl -X PUT -i -F version=4.2.2 -H "Authorization: Bearer {:token}" http://localhost:4001/map/buzz/v4\n')),Object(b.b)("h3",{id:"update-alias"},"Update Alias"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"POST")),Object(b.b)("p",null,"Updates an existing alias."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/:type/:name/v:alias\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":type")," is the type to retrieve from. Validator: ",Object(b.b)("inlineCode",{parentName:"li"},"pkg")," or ",Object(b.b)("inlineCode",{parentName:"li"},"map"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":alias")," is the major version of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"Form parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":version")," full version of the package to be aliased")),Object(b.b)("p",null,"HTTP headers:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Authorization")," a jwt authorization bearer with the token retrieved from a successful ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#login"}),"authentication"))),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"303")," if alias is successfully created. ",Object(b.b)("inlineCode",{parentName:"li"},"location")," points to the alias"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if alias does not exist"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"502")," if alias could not be altered by the sink")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST -i -F version=8.4.1 -H "Authorization: Bearer {:token}" http://localhost:4001/pkg/fuzz/v8\ncurl -X POST -i -F version=4.4.2 -H "Authorization: Bearer {:token}" http://localhost:4001/map/buzz/v4\n')),Object(b.b)("h3",{id:"delete-alias"},"Delete Alias"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"DELETE")),Object(b.b)("p",null,"Deletes an existing alias."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"https://:assetServerUrl:port/:type/:name/v:alias\n")),Object(b.b)("p",null,"URL parameters:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":type")," is the type to retrieve from. Validator: ",Object(b.b)("inlineCode",{parentName:"li"},"pkg")," or ",Object(b.b)("inlineCode",{parentName:"li"},"map"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":name")," is the name of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/npm/validate-npm-package-name"}),"npm package names"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},":alias")," is the major version of the package / import map. Validator: Comply with ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://semver.org/"}),"semver validation regex"),".")),Object(b.b)("p",null,"HTTP headers:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Authorization")," a jwt authorization bearer with the token retrieved from a successful ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"#login"}),"authentication"))),Object(b.b)("p",null,"Status codes:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"204")," if alias is successfully deleted"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"401")," if user is not authorized"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"404")," if alias does not exist"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"502")," if alias could not be altered by the sink")),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'curl -X DELETE -H "Authorization: Bearer {:token}" http://localhost:4001/pkg/fuzz/v8\ncurl -X DELETE -H "Authorization: Bearer {:token}" http://localhost:4001/map/buzz/v4\n')))}m.isMDXComponent=!0}}]);