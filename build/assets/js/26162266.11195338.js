"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[9347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Prerequisites-WDA",s={unversionedId:"Documentation/WDA/Prerequisites",id:"Documentation/WDA/Prerequisites",title:"Prerequisites-WDA",description:'"Before you begin with WDA, there are certain prerequisites that must be met to ensure a successful outcome. These prerequisites are the necessary requirements and conditions that must be in place before proceeding with WDA.',source:"@site/docs/Documentation/WDA/Prerequisites.md",sourceDirName:"Documentation/WDA",slug:"/Documentation/WDA/Prerequisites",permalink:"/my-docusaurus-web/docs/Documentation/WDA/Prerequisites",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Description",permalink:"/my-docusaurus-web/docs/Documentation/WDI/"},next:{title:"Application",permalink:"/my-docusaurus-web/docs/Documentation/WDA/Application"}},c={},l=[{value:"1. If the framework is java/go",id:"1-if-the-framework-is-javago",level:2},{value:"2. Any IDE of user chocie",id:"2-any-ide-of-user-chocie",level:2},{value:"3. Install docker",id:"3-install-docker",level:2},{value:"4. To push the docker image to ECR repository",id:"4-to-push-the-docker-image-to-ecr-repository",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites-wda"},"Prerequisites-WDA"),(0,o.kt)("p",null,'"Before you begin with WDA, there are certain prerequisites that must be met to ensure a successful outcome. These prerequisites are the necessary requirements and conditions that must be in place before proceeding with WDA.'),(0,o.kt)("h2",{id:"1-if-the-framework-is-javago"},"1. If the framework is java/go"),(0,o.kt)("p",null,"Dependending on the your choice of framework, Make sure you have that installed to run the application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/in/java/technologies/downloads/"},"InstallJava")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Install Go")),(0,o.kt)("h2",{id:"2-any-ide-of-user-chocie"},"2. Any IDE of user chocie"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"For Example:-\n\na Intellij\nb STS\nc Vscode\n")),(0,o.kt)("h2",{id:"3-install-docker"},"3. Install docker"),(0,o.kt)("p",null,"By installing docker you can run the other services in container instead of installing in local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Services Like the following can be run in container:\na DataBase\nb keycloak\nc Jhispter registry(Eureka)\n")),(0,o.kt)("p",null,"To install Docker:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker From Here..!")),(0,o.kt)("p",null,"The user can also opt for the deployment at the WDA as well, in such case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"There will be some pre requisite of WDI:\n\n    1 Terraform\n\n    2 kubectl\n\n    3 aws-cli\n")),(0,o.kt)("h2",{id:"4-to-push-the-docker-image-to-ecr-repository"},"4. To push the docker image to ECR repository"),(0,o.kt)("p",null,"You would require a AWS cli, to configure reffer the below link."),(0,o.kt)("p",null,"   ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amahttps://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.htmlzon.com/cli/latest/userguide/cli-authentication-user.html"},"Configure AWS cli")))}d.isMDXComponent=!0}}]);