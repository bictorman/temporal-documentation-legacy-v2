(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(7),i=(n(0),n(359)),o={id:"java-activity-interface",title:"Activity Interface"},c={id:"java-activity-interface",isDocsHomePage:!1,title:"Activity Interface",description:"An activity is a manifestation of a particular task in the business logic.",source:"@site/docs/java-activity-interface.md",permalink:"/docs/next/java-activity-interface",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/java-activity-interface.md",version:"next",sidebar:"docs",previous:{title:"Starting workflow executions",permalink:"/docs/next/java-starting-workflow-executions"},next:{title:"Implementing activities",permalink:"/docs/next/java-implementing-activities"},latestVersionMainDocPermalink:"/docs/overview"},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An activity is a manifestation of a particular task in the business logic."),Object(i.b)("p",null,"Activities are defined as methods of a plain Java interface annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@ActivityInterface"),".\nEach method defines a single activity type. A single workflow can use more than one activity interface and call more\nthat one activity method from the same interface.\nThe only requirement is that activity method arguments and return values are serializable to a byte array using the provided\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/uber/cadence/converter/DataConverter.html"}),"DataConverter"),"\ninterface. The default implementation uses a JSON serializer, but an alternative implementation can be easily configured."),Object(i.b)("p",null,"Following is an example of an interface that defines four activities:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@ActivityInterface\npublic interface FileProcessingActivities {\n\n    void upload(String bucketName, String localName, String targetName);\n\n    String download(String bucketName, String remoteName);\n\n    @ActivityMethod(name="transcode_file")\n    String processFile(String localName);\n\n    void deleteLocalFile(String fileName);\n}\n\n')),Object(i.b)("p",null,"We recommend to use a single value type argument for activity methods. In this way, adding new arguments as fields\nto the value type is a backwards-compatible change."),Object(i.b)("p",null,"An optional ",Object(i.b)("inlineCode",{parentName:"p"},"@ActivityMethod")," annotation can be used to override a default activity name."))}u.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);