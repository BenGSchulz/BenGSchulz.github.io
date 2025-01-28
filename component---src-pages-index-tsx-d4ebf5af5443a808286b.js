"use strict";(self.webpackChunkbenschulz_dev=self.webpackChunkbenschulz_dev||[]).push([[245],{5545:function(e,t,n){n.d(t,{A:function(){return A}});var a=n(7875),r=n(6188),i=n(7107),l=n(5556),o=n.n(l),s=n(6540);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var g=!1;try{g=!0}catch(j){}function v(e){return e&&"object"===p(e)&&e.prefix&&e.iconName&&e.icon?e:i.qg.icon?i.qg.icon(e):null===e?null:e&&"object"===p(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var w={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},k=s.forwardRef((function(e,t){var n=u(u({},w),e),a=n.icon,r=n.mask,l=n.symbol,o=n.className,s=n.title,c=n.titleId,p=n.maskId,f=v(a),b=x("classes",[].concat(d(function(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,l=e.shake,o=e.flash,s=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,f=e.fixedWidth,d=e.inverse,b=e.border,h=e.listItem,y=e.flip,g=e.size,v=e.rotation,x=e.pull,w=(m(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":l,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":f,"fa-inverse":d,"fa-border":b,"fa-li":h,"fa-flip":!0===y,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(g),null!=g),m(t,"fa-rotate-".concat(v),null!=v&&0!==v),m(t,"fa-pull-".concat(x),null!=x),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(n)),d((o||"").split(" ")))),h=x("transform","string"==typeof n.transform?i.qg.transform(n.transform):n.transform),y=x("mask",v(r)),k=(0,i.Kk)(f,u(u(u(u({},b),h),y),{},{symbol:l,title:s,titleId:c,maskId:p}));if(!k)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var O=k.abstract,I={ref:t};return Object.keys(n).forEach((function(e){w.hasOwnProperty(e)||(I[e]=n[e])})),E(O[0],I)}));k.displayName="FontAwesomeIcon",k.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool};var E=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=a.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),r=h(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[r]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[h(t)]=a}return e}),{attrs:{}}),l=a.style,o=void 0===l?{}:l,s=f(a,y);return i.attrs.style=u(u({},i.attrs.style),o),t.apply(void 0,[n.tag,u(u({},i.attrs),s)].concat(d(r)))}.bind(null,s.createElement),O=n(6251),I=n.p+"static/BenSchulzResume-1fb4580e78243f13ee81892b13d7f94d.pdf";const N=[{id:0,text:"BenGSchulz",link:"https://github.com/BenGSchulz",icon:a.Vz1},{id:1,text:"BenGSchulz",link:"https://linkedin.com/in/BenGSchulz",icon:a.IAJ},{id:2,text:"mail@benschulz.dev",link:"mailto:mail@benschulz.dev",icon:r.y_8},{id:3,text:"307-413-8377",link:"tel:307-413-8377",icon:r.KKr},{id:4,text:"Seattle, WA",link:"https://maps.app.goo.gl/pzRbPJrHYxc5HGiF7",icon:r.Pcr}];var A=function(e){return s.createElement("div",null,s.createElement("div",{className:"flex flex-col items-start whitespace-nowrap border-b border-current md:flex-row md:justify-between md:items-end print:flex-row print:justify-between print:items-end"},s.createElement("span",{className:"text-3xl md:text-5xl print:text-5xl"},"BEN SCHULZ"),s.createElement("span",{className:"text-xl md:text-3xl print:text-3xl"},"SOFTWARE DEVELOPER")),s.createElement("div",{className:"flex items-center justify-between p-2 lg:p-1 print:p-1"},s.createElement("a",{className:"print:hidden flex gap-1 items-center",href:e.navValue===O.w.About?"/resume":I},s.createElement(k,{icon:r.mHA,className:"text-2xl lg:text-base print:text-base"}),s.createElement("span",{className:"hidden lg:inline"},e.navValue===O.w.About?"Resume":"Download")),e.navValue!==O.w.About&&s.createElement("a",{className:"print:hidden flex gap-1 items-center",href:"/"},s.createElement(k,{icon:r.H82,className:"text-2xl lg:text-base print:text-base"}),s.createElement("span",{className:"hidden lg:inline"},"About")),s.createElement("a",{className:"hidden print:flex gap-1 items-center",href:"https://benschulz.dev",target:"_blank"},s.createElement(k,{icon:r.Bwz,className:"text-2xl lg:text-base print:text-base"}),s.createElement("span",{className:"hidden lg:inline print:inline"},"benschulz.dev")),N.map((e=>s.createElement("a",{key:e.id,href:e.link,className:"flex gap-1 items-center",target:"_blank"},s.createElement(k,{icon:e.icon,className:"text-2xl lg:text-base print:text-base"}),s.createElement("span",{className:"hidden lg:inline print:inline"},e.text))))))}},3056:function(e,t,n){var a=n(6540);t.A=e=>{let{children:t}=e;return a.createElement("div",{className:"flex pt-2 pb-2 print:p-0"},a.createElement("div",{className:"flex-1"}),a.createElement("div",{className:"p-6 max-w-[1100px] flex flex-col basis-full shadow shadow-current print:shadow-none"},t),a.createElement("div",{className:"flex-1"}))}},801:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(6540),r=n(5581);var i=e=>{let{title:t,description:n,pathname:i,children:l}=e;const{title:o,description:s,siteUrl:c}=(0,r.useStaticQuery)("3764592887").site.siteMetadata,u={title:t||o,description:n||s,url:""+c+(i||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,u.title),a.createElement("meta",{name:"description",content:u.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:u.title}),a.createElement("meta",{name:"twitter:url",content:u.url}),a.createElement("meta",{name:"twitter:description",content:u.description}),l)}},6251:function(e,t,n){let a;n.d(t,{w:function(){return a}}),function(e){e.About="About",e.Resume="Resume"}(a||(a={}))},2783:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s}});var a=n(6540),r=n(5545),i=n(3056),l=n(801),o=n(6251);t.default=()=>a.createElement("main",null,a.createElement(i.A,null,a.createElement(r.A,{navValue:o.w.About}),a.createElement("main",{className:"flex flex-col pt-4 gap-2"},a.createElement("p",{className:"px-2 py-1"},"To Whom It May Concern,"),a.createElement("p",{className:"px-2 py-1"},"You've reached the personal website of Ben Schulz. In the spirit of prototyping and iteration, this is a placeholder to give you an introduction to myself and my background while I develop a more interactive and detailed experience. Stay tuned to see what I am"," ",a.createElement("a",{href:"https://aibenschulzdev.vercel.app/",className:"underline",target:"_blank"},"cooking up")," ",":) You can also check out the V1 of my website here:"," ",a.createElement("a",{href:"https://benschulz.dev/WebsiteV1/",className:"underline",target:"_blank"},"benschulz.dev V1"),"."),a.createElement("p",{className:"px-2 py-1"},"Here's my professional pitch:"),a.createElement("p",{className:"px-2 py-1"},"As a maker at heart, I thrive on transforming ideas into impactful, user-centered products. I am eager to join an innovative workplace where I can have fun solving important problems alongside a dedicated team that help each other to grow. I hope to contribute my focus on collaboration, quality, and continuous improvement to a meaningful project that will drive positive change."),a.createElement("p",{className:"px-2 py-1"},"Throughout my career, I have built a reputation as a dependable and collaborative engineer who takes ownership of projects from initial design to rollout and beyond. I value a team environment grounded in mutual learning and trust. I promote constructive code reviews and peer programming as a means to achieve higher team performance and individual growth. By prioritizing strong relationships and feedback ecosystems in diverse groups, I aim to deliver the best possible products for all users. My approach involves maintaining open and broad communication channels to ensure decisions are informed, transparent, and aligned with user needs, while staying adaptable to evolving requirements through iterative development."),a.createElement("p",{className:"px-2 py-1"},"Building on this foundation of teamwork and flexibility, I can apply my technical skills to produce powerful results. I am well-versed in driving product direction for highly interactive and impactful UI features within data-heavy, enterprise-scale applications. I have a keen eye for detail and enjoy combining my technical skills with design knowledge to create elegant and efficient interfaces. I am also experienced in implementing accessibility standards to ensure inclusivity across a platform. Along with producing an outstanding end user experience I also prioritize my fellow developers as I implement maintainable and extensible systems with high quality code standards and documentation."),a.createElement("p",{className:"px-2 py-1"},"My recent professional work has focused on frontend responsibilities using Angular + RxJS. I've built an expertise in component-based UI as well as complex asynchronous system architecture and I am confident in my ability to quickly adapt to other frameworks and technologies. My history of extensive collaboration with back-end engineers to develop and uptake efficient APIs leaves me prepared to take on server-side responsibilities too. Furthermore, my hands-on experience includes React, Next.js, Vercel, Git, AI prompting, CI/CD practices, and unit and E2E testing frameworks. In all, my goal is to continually grow as a developer while delivering meaningful technical contributions that align with user and business needs."),a.createElement("p",{className:"px-2 py-1"},"Outside of all of that, I like to get out hiking, backpacking, biking, skiing, traveling, and making gear for those activities. Of course I also enjoy music, video games, film, and tv and I'm trying to read more."),a.createElement("p",{className:"px-2 pt-2"},"That's it for now."),a.createElement("p",{className:"px-2 pt-2"},"Thanks for your attention,"),a.createElement("p",{className:"px-2"},"Ben Schulz"))));const s=()=>a.createElement(a.Fragment,null,a.createElement(l.A,null),a.createElement("title",null,"Home Page"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d4ebf5af5443a808286b.js.map