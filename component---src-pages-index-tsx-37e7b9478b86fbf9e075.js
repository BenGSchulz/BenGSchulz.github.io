"use strict";(self.webpackChunkbenschulz_dev=self.webpackChunkbenschulz_dev||[]).push([[691],{9454:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4400);var l=e=>{let{title:t,description:n,pathname:l,children:i}=e;const{title:s,description:o,siteUrl:c}=(0,r.useStaticQuery)("3764592887").site.siteMetadata,m={title:t||s,description:n||o,url:""+c+(l||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,m.title),a.createElement("meta",{name:"description",content:m.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:m.title}),a.createElement("meta",{name:"twitter:url",content:m.url}),a.createElement("meta",{name:"twitter:description",content:m.description}),i)}},5532:function(e,t,n){n.r(t),n.d(t,{Head:function(){return B},default:function(){return D}});var a=n(7294),r=n(3024),l=n(9417),i=n(3636),s=n(5697),o=n.n(s);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var v=["style"];var y=!1;try{y=!0}catch(U){}function x(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:i.Qc.icon?i.Qc.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}var E={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},w=a.forwardRef((function(e,t){var n=m(m({},E),e),a=n.icon,r=n.mask,l=n.symbol,s=n.className,o=n.title,c=n.titleId,u=n.maskId,p=x(a),b=h("classes",[].concat(f(function(e){var t,n=e.beat,a=e.fade,r=e.beatFade,l=e.bounce,i=e.shake,s=e.flash,o=e.spin,c=e.spinPulse,m=e.spinReverse,u=e.pulse,p=e.fixedWidth,f=e.inverse,b=e.border,g=e.listItem,v=e.flip,y=e.size,x=e.rotation,h=e.pull,E=(d(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":l,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":f,"fa-border":b,"fa-li":g,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(y),null!=y),d(t,"fa-rotate-".concat(x),null!=x&&0!==x),d(t,"fa-pull-".concat(h),null!=h),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map((function(e){return E[e]?e:null})).filter((function(e){return e}))}(n)),f((s||"").split(" ")))),g=h("transform","string"==typeof n.transform?i.Qc.transform(n.transform):n.transform),v=h("mask",x(r)),w=(0,i.qv)(p,m(m(m(m({},b),g),v),{},{symbol:l,title:o,titleId:c,maskId:u}));if(!w)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var O=w.abstract,k={ref:t};return Object.keys(n).forEach((function(e){E.hasOwnProperty(e)||(k[e]=n[e])})),N(O[0],k)}));w.displayName="FontAwesomeIcon",w.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool};var N=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),l=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=a.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),r=g(t.slice(0,a)),l=t.slice(a+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=l:e[r]=l,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[g(t)]=a}return e}),{attrs:{}}),i=a.style,s=void 0===i?{}:i,o=p(a,v);return l.attrs.style=m(m({},l.attrs.style),s),t.apply(void 0,[n.tag,m(m({},l.attrs),o)].concat(f(r)))}.bind(null,a.createElement),O=n.p+"static/BenSchulzResume-33550ca4a0498473aa33c2a903730bb5.pdf";const k=[{id:0,text:"BenGSchulz",link:"https://github.com/BenGSchulz",icon:r.zhw},{id:1,text:"BenGSchulz",link:"https://linkedin.com/in/BenGSchulz",icon:r.D9H},{id:2,text:"mail@benschulz.dev",link:"mailto:mail@benschulz.dev",icon:l.FU$},{id:3,text:"307-413-8377",link:"tel:307-413-8377",icon:l.j1w},{id:4,text:"Jackson, WY",link:"https://maps.app.goo.gl/CTZTZcRjVkG4j2d26",icon:l.FGq}];var S=function(e){return a.createElement("div",null,a.createElement("div",{className:"flex flex-col items-start whitespace-nowrap border-b border-current lg:flex-row lg:justify-between lg:items-end print:flex-row print:justify-between print:items-end"},a.createElement("span",{className:"text-3xl lg:text-5xl print:text-5xl"},"BEN SCHULZ"),a.createElement("span",{className:"text-xl lg:text-3xl print:text-3xl"},"SOFTWARE DEVELOPER"),a.createElement("div",{className:"flex justify-center text-2xl print:hidden"},a.createElement("select",{className:"bg-transparent",name:"section",onChange:t=>{return n=t.target.value,void e.handleNav(n);var n}},e.navOptions.map((e=>a.createElement("option",{value:e,key:e},e)))))),a.createElement("div",{className:"flex items-center justify-between p-2 lg:p-1 print:p-1"},a.createElement("a",{className:"print:hidden flex gap-1 items-center",href:O,download:"BenSchulzResume.pdf"},a.createElement(w,{icon:l.kwI,className:"text-2xl lg:text-base print:text-base"}),a.createElement("span",{className:"hidden lg:inline print:inline"},"Resume")),a.createElement("a",{className:"hidden print:flex gap-1 items-center",href:"https://benschulz.dev",target:"_blank"},a.createElement(w,{icon:l.g4A,className:"text-2xl lg:text-base print:text-base"}),a.createElement("span",{className:"hidden lg:inline print:inline"},"benschulz.dev")),k.map((e=>a.createElement("a",{key:e.id,href:e.link,className:"flex gap-1 items-center",target:"_blank"},a.createElement(w,{icon:e.icon,className:"text-2xl lg:text-base print:text-base"}),a.createElement("span",{className:"hidden lg:inline print:inline"},e.text))))))};var j=e=>{let{children:t}=e;return a.createElement("div",{className:"flex pt-2 pb-2"},a.createElement("div",{className:"flex-1"}),a.createElement("div",{className:"p-6 max-w-[1100px] flex flex-col basis-full shadow shadow-current print:shadow-none"},t),a.createElement("div",{className:"flex-1"}))};const I=[{id:0,company:"NEXTWORLD",title:"Software Engineer 2",location:"Denver, CO",dates:"Nov. 2019 - Jun. 2024",bullets:[{id:0,content:"Contributed to enterprise-scale Angular codebase across multiple product areas serving business-to-business needs."},{id:1,content:"Lead developer in two long-term rearchitecting projects with a focus on improving performance, capabilities, and code standards."},{id:2,content:"Collaborated with customers, product owners, and other engineers to deliver more effective, sustainable, and powerful products."},{id:3,content:"Partnered with back-end team to design and uptake API methods for new functionality and improve existing API for performance."},{id:4,content:"Largely reduced dependency on deprecated JTwig templating by rebuilding features as efficient, reusable components and service methods."},{id:5,content:"Participated in intensive testing culture, using Jasmine and WebdriverIO to achieve high coverage results in unit and e2e tests and improve code quality."},{id:6,content:"Mentored interns and junior engineers, acting as a lead on projects and driving pair programming + code review sessions to encourage teamwork and knowledge sharing."},{id:7,content:'Became a "go-to" team member and project lead by demonstrating consistent quality, showing forward-thinking, and taking feedback seriously.'}]},{id:1,company:"SPOTPOST",title:"Software Developer Intern",location:"Denver, CO / Remote",dates:"Feb. 2019 - Jul. 2019",bullets:[{id:0,content:"Built a product from the ground up as part of a small cross-functional team."},{id:1,content:"Designed RESTful API methods and implemented the front-end onboarding flow for a web app using React."},{id:2,content:"Conceptualized new product features and process optimizations for the engineering team."}]},{id:2,company:"DSST PUBLIC SCHOOLS",title:"Creative Coding Elective Teacher",location:"Denver, CO",dates:"Aug. 2018 - Nov. 2018",bullets:[{id:0,content:a.createElement("li",{key:0},"Designed a trimester curriculum focused on creative coding and CS fundamentals using OpenProcessing/p5.js : ",a.createElement("a",{href:"https://openprocessing.org/class/58336",target:"_blank",className:"underline"},"Class Page"))},{id:1,content:"Cultivated interest in my passion to use coding for creative expression and human-computer interaction."},{id:2,content:"Evolved my leadership and mentoring skills through instruction and collaboration with 38 students, grades 9 - 11."}]}];var A=()=>a.createElement("div",{className:"flex flex-col gap-2 pt-4"},a.createElement("div",{className:"text-2xl border-b border-current"},"EMPLOYMENT"),I.map((e=>a.createElement("div",{key:e.id},a.createElement("div",{className:"flex flex-col lg:flex-row print:flex-row lg:justify-between print:justify-between text-base lg:text-lg print:text-lg"},a.createElement("span",{className:"flex flex-col lg:inline print:inline"},a.createElement("span",null,e.company,a.createElement("span",{className:"hidden lg:inline print:inline"},", ")),a.createElement("span",{className:"italic"},e.title,a.createElement("span",{className:"hidden lg:inline print:inline"}," : ")),a.createElement("span",null,e.location)),a.createElement("span",null,e.dates)),a.createElement("ul",{className:"list-disc pl-6 text-sm"},e.bullets.map((e=>"string"==typeof e.content?a.createElement("li",{key:e.id},e.content):e.content)))))));var P=()=>a.createElement(a.Fragment,null,a.createElement(A,null),a.createElement("div",{className:"flex flex-col pt-4 gap-2"},a.createElement("div",{className:"text-2xl border-b border-current"},"EDUCATION"),a.createElement("div",null,a.createElement("div",{className:"flex flex-col lg:flex-row lg:justify-between text-base lg:text-lg print:flex-row print:justify-between print:text-lg"},a.createElement("span",null,"UNIVERSITY OF DENVER"),a.createElement("span",null,"Sep. 2015 - Mar. 2019")),a.createElement("ul",{className:"list-disc pl-6 text-sm"},a.createElement("li",null,"B.S. Computer Science - 3.9 GPA"),a.createElement("li",null,"Minors: Emergent Digital Practices, Mathematics"),a.createElement("li",null,"Dean's list and Hornsbeck Scholar"),a.createElement("li",null,"Outstanding First Year Writing Award")))),a.createElement("div",{className:"flex flex-col pt-4 gap-2"},a.createElement("div",{className:"text-2xl border-b border-current"},"PROJECTS"),a.createElement("div",null,a.createElement("a",{className:"text-lg underline",href:"https://github.com/BenGSchulz/WebCookbook"},"Recipe Sharing SPA"),a.createElement("ul",{className:"list-disc pl-6 text-sm"},a.createElement("li",null,"Full-stack SPA built with Mongo, Express, Angular, Node."),a.createElement("li",null,"Responsive front-end implemented with Bootstrap UI."),a.createElement("li",null,"Utilized Docker + Compose for containerization."))),a.createElement("div",null,a.createElement("a",{className:"text-lg underline",href:"https://sundy.itch.io/blankcanvas"},"Blank Canvas"),a.createElement("ul",{className:"list-disc pl-6 text-sm"},a.createElement("li",null,"Developed full game from concept pitch to beta release in Unreal Engine 4."),a.createElement("li",null,"Tackled a variety of design + engineering roles: Gameplay, AI, UI, animations, audio, level design, and story development."),a.createElement("li",null,"Presented game with live demo at capstone showcase.")))),a.createElement("div",{className:"flex flex-col pt-4 gap-2"},a.createElement("div",{className:"text-2xl border-b border-current"},"SKILLS"),a.createElement("ul",{className:"list-disc pl-4 text-sm"},a.createElement("li",null,"TypeScript/JavaScript, HTML+CSS, Java"),a.createElement("li",null,"Angular, RxJS, Jasmine, React, Node.js/Express, MongoDB/Mongoose, Jest/Enzyme, Git+GitHub"),a.createElement("li",null,"Agile, Jira, written+verbal communication, collaborative problem solving")))),C=n(9454);const R=[{id:0,text:"To Whom It May Concern,"},{id:1,text:"I'm a versatile and enthusiastic developer passionate about creating powerful interactive experiences. I love bringing ideas to life on a screen and I'm excited to progress my career doing it. My proficiency lies in crafting front-end interactions using frameworks like Angular and React. I'm also experienced in full-stack development using noSQL databases and Node.js. I've made games with Unity and Unreal Engine too. When I'm not working on software or learning new tools for it, I'm getting inspired by the outdoors, books, music, and film & TV."}];var z,T=()=>a.createElement("div",{className:"flex flex-col pt-4 gap-2"},R.map((e=>a.createElement("p",{key:e.id,className:"px-2 py-1"},e.text))),a.createElement("p",{className:"px-2 pt-2"},"Sincerely,"),a.createElement("p",{className:"px-2"},"Ben Schulz"));!function(e){e.About="About",e.Resume="Resume"}(z||(z={}));var D=()=>{const[e,t]=a.useState(z.Resume);return a.createElement("main",null,a.createElement(j,null,a.createElement(S,{navValue:e,navOptions:[z.Resume,z.About],handleNav:function(e){t(e)}}),e===z.About?a.createElement("div",{className:"fade-in"},a.createElement(T,null)):e===z.Resume?a.createElement("div",{className:"fade-in-alt"},a.createElement(P,null)):null))};const B=()=>a.createElement(a.Fragment,null,a.createElement(C.Z,null),a.createElement("title",null,"Home Page"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-37e7b9478b86fbf9e075.js.map