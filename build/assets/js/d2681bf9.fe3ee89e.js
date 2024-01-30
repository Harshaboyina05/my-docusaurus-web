"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[4041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Prerequisites",c={unversionedId:"Documentation/MindMap/Prerequisites",id:"Documentation/MindMap/Prerequisites",title:"Prerequisites",description:"These are the necessary requirements and conditions that must be in place before proceeding with WDA.",source:"@site/docs/Documentation/MindMap/Prerequisites.md",sourceDirName:"Documentation/MindMap",slug:"/Documentation/MindMap/Prerequisites",permalink:"/docs/Documentation/MindMap/Prerequisites",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/docs/Documentation/MindMap/Introduction"},next:{title:"UIandGateway",permalink:"/docs/Documentation/MindMap/UIandGateway"}},l={},s=[{value:"1. If the framework is java/go",id:"1-if-the-framework-is-javago",level:3},{value:"2. Any IDE of user chocie",id:"2-any-ide-of-user-chocie",level:3},{value:"3. Install docker",id:"3-install-docker",level:3},{value:"4. To push the docker image to ECR repository",id:"4-to-push-the-docker-image-to-ecr-repository",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"These are the necessary requirements and conditions that must be in place before proceeding with WDA."),(0,o.kt)("h3",{id:"1-if-the-framework-is-javago"},"1. If the framework is java/go"),(0,o.kt)("p",null,"Dependending on the your choice of framework, Make sure you have that installed to run the application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/in/java/technologies/downloads/"},"Install Java")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Install Go")),(0,o.kt)("h3",{id:"2-any-ide-of-user-chocie"},"2. Any IDE of user chocie"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"For Example:-\n\na Intellij\nb STS\nc Vscode\n")),(0,o.kt)("h3",{id:"3-install-docker"},"3. Install docker"),(0,o.kt)("p",null,"By installing docker you can run the other services in container instead of installing in local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Services Like the following can be run in container:\na DataBase\nb keycloak\nc Jhispter registry(Eureka)\n")),(0,o.kt)("p",null,"To install Docker:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker From Here..!")),(0,o.kt)("p",null,"The user can also opt for the deployment at the WDA as well, in such case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"There will be some pre requisite of WDI:\n\n    1 Terraform\n\n    2 kubectl\n\n    3 aws-cli\n")),(0,o.kt)("h3",{id:"4-to-push-the-docker-image-to-ecr-repository"},"4. To push the docker image to ECR repository"),(0,o.kt)("p",null,"You would require a AWS cli, to configure reffer the below link."),(0,o.kt)("p",null,"   ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amahttps://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.htmlzon.com/cli/latest/userguide/cli-authentication-user.html"},"Configure AWS CLI")))}d.isMDXComponent=!0}}]);