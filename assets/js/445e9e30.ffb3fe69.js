"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[20361],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},377630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});a(667294);var n=a(603905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},l=void 0,c={permalink:"/blog/2020/08/05/announcing-backstage-software-templates",source:"@site/blog/2020-08-05-announcing-backstage-software-templates.md",title:"Announcing Backstage Software Templates",description:"TL;DR Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start.",date:"2020-08-05T00:00:00.000Z",formattedDate:"August 5, 2020",tags:[],readingTime:3.885,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"https://twitter.com/stalund"}],frontMatter:{title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},prevItem:{title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",permalink:"/blog/2020/09/08/announcing-tech-docs"},nextItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"}},p={authorsImageUrls:[void 0]},u=[{value:"Balancing autonomy and standardization",id:"balancing-autonomy-and-standardization",level:2},{value:"Backstage Software Templates: Push-button deployment",id:"backstage-software-templates-push-button-deployment",level:2},{value:"The getting started guide gets automated",id:"the-getting-started-guide-gets-automated",level:3},{value:"Golden Paths pave the way",id:"golden-paths-pave-the-way",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Step 1: Choose a template",id:"step-1-choose-a-template",level:3},{value:"Step 2: Run!",id:"step-2-run",level:3},{value:"View new components in the Service Catalog",id:"view-new-components-in-the-service-catalog",level:3},{value:"Define your standards",id:"define-your-standards",level:2}],d={toc:u};function g(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR")," Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start."),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/blog/assets/2020-08-05/feature.mp4",type:"video/mp4"})),(0,n.kt)("h2",{id:"balancing-autonomy-and-standardization"},"Balancing autonomy and standardization"),(0,n.kt)("p",null,"At Spotify, we\u2019ve always believed in the speed and ingenuity that comes from having autonomous development teams. But as we learned firsthand, the faster you grow, the more fragmented and complex your software ecosystem becomes. And then everything slows down again."),(0,n.kt)("p",null,"By centralizing services and standardizing your tooling, Backstage streamlines your development environment from end to end. Instead of restricting autonomy, standardization frees your engineers from infrastructure complexity. So you can return to building and scaling, quickly and safely."),(0,n.kt)("p",null,"Today we are releasing one of the key features that helps balance autonomy and standardization: templates for creating software."),(0,n.kt)("h2",{id:"backstage-software-templates-push-button-deployment"},"Backstage Software Templates: Push-button deployment"),(0,n.kt)("p",null,"Backstage Software Templates automate and standardize the process of creating software components. To show you how they work, we created four sample templates to get you started \u2014 just configure them to fit your tooling and off you go:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Create React App Template")," \u2014 create a new CRA website project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Golang Microservice")," \u2014 create a Golang repo with this template built by members of the Go community"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"React SSR Template")," \u2014 create a website powered with Next.js"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spring Boot GRPC")," \u2014 create a simple microservice using gRPC and Spring Boot Java")),(0,n.kt)("h3",{id:"the-getting-started-guide-gets-automated"},"The getting started guide gets automated"),(0,n.kt)("p",null,"Since the templates can be customized to integrate with your existing infrastructure, it\u2019s easy to start a new project without ever having to leave Backstage. Let\u2019s say you\u2019re building a microservice. With three clicks in Backstage, you\u2019ll have a new Spring Boot project with your repo automatically configured on GitHub and your CI already running the first build."),(0,n.kt)("h3",{id:"golden-paths-pave-the-way"},"Golden Paths pave the way"),(0,n.kt)("p",null,"You can customize Backstage Software Templates to fit your organization\u2019s standards. Using Go instead of Java? CircleCI instead of Jenkins? Serverless instead of Kubernetes? GCP instead of AWS? ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-templates/adding-templates"},"Make your own recipes for any software component")," and your best practices will be baked right in."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"The sample Software Templates are available under ",(0,n.kt)("inlineCode",{parentName:"p"},"/create"),". If you're setting up Backstage for the first time, follow ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/"},"Getting Started with Backstage")," and go to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/create"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"available-templates",src:a(258066).Z,width:"1600",height:"1264"})),(0,n.kt)("h3",{id:"step-1-choose-a-template"},"Step 1: Choose a template"),(0,n.kt)("p",null,"When you select a template that you want to create, you can ask for different input variables. These are then passed to the templater internally."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"template-form",src:a(147255).Z,width:"1600",height:"1010"})),(0,n.kt)("p",null,"After filling in these variables, additional fields will appear so Backstage can be used. You\u2019ll specify the owner, which is a ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," in the Backstage system, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Location"),", which must be a GitHub organization and a non-existing GitHub repository name, formatted as ",(0,n.kt)("inlineCode",{parentName:"p"},"organization/reponame"),"."),(0,n.kt)("h3",{id:"step-2-run"},"Step 2: Run!"),(0,n.kt)("p",null,"Once you've entered values and confirmed, you'll then get a modal with live progress of what is currently happening with the creation of your template."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-component",src:a(514553).Z,width:"1600",height:"1010"})),(0,n.kt)("p",null,"It shouldn't take too long before you see a success screen. At this point, a piece of \u201cHello World\u201d software has been created in your repo, and the CI automatically picks it up and starts building the code."),(0,n.kt)("p",null,"Your engineers don\u2019t have to bother with setting up underlying infrastructure, it\u2019s all built into the template. They can start focusing on delivering business value."),(0,n.kt)("h3",{id:"view-new-components-in-the-service-catalog"},"View new components in the Service Catalog"),(0,n.kt)("p",null,"New components, of course, get added automatically to the Backstage Service Catalog. After creation, you'll see the ",(0,n.kt)("inlineCode",{parentName:"p"},"View in Catalog")," button, which will take you to the registered component in the catalog:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"service-catalog",src:a(596305).Z,width:"1600",height:"1010"})),(0,n.kt)("h2",{id:"define-your-standards"},"Define your standards"),(0,n.kt)("p",null,"Backstage ships with four example templates, but since these are likely not the (only) ones you want to promote inside your company, the next step is to add ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-templates/"},"your own templates"),". Using Backstage\u2019s Software Templates feature, it\u2019s easy to help your engineers get started building software with your organization\u2019s best practices built-in."),(0,n.kt)("p",null,"We have learned that one of the keys to getting these standards adopted is to keep an open process. Templates are code. By making it clear to your engineers that you are open to pull requests, and that teams with different needs can add their own templates, you are on the path of striking a good balance between autonomy and standardization."),(0,n.kt)("p",null,"If you have feedback or questions, please open a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues"},"GitHub issue"),", ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"Discord chat")," or send us an email at ",(0,n.kt)("a",{parentName:"p",href:"mailto:backstage-interest@spotify.com"},"backstage-interest@spotify.com")," \ud83d\ude4f"),(0,n.kt)("p",null,"To get regular product updates and news about the Backstage community, sign up for the ",(0,n.kt)("a",{parentName:"p",href:"https://info.backstage.spotify.com/newsletter_subscribe"},"Backstage newsletter"),"."))}g.isMDXComponent=!0},596305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-b10a775f2c88046c71c20487db909a4f.png"},514553:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-component-189edb4e40e9bb3a0d4868f15f2a301a.png"},147255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-form-139431b353a24b6f2ef5fc46063df0a8.png"},258066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/templates-52eb1681e1c84d251921e3a498ad220b.png"}}]);