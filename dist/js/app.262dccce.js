(function(){"use strict";var e={6150:function(e,t,n){var r={};n.r(r),n.d(r,{ZP:function(){return Y}});var i=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a=n(1001),c={},s=(0,a.Z)(c,o,u,!1,null,null,null),l=s.exports,m=n(2631);i.ZP.use(m.ZP);const d=[{path:"/",component:()=>n.e(707).then(n.bind(n,6707)),children:[{path:"/",name:"home",component:()=>n.e(929).then(n.bind(n,5929))},{path:"structure/university",name:"structure-university",component:()=>n.e(927).then(n.bind(n,2927))},{path:"structure/update",name:"structure-university-update",component:()=>Promise.all([n.e(708),n.e(637)]).then(n.bind(n,1637))},{path:"structure/faculty",name:"structure-faculty",component:()=>Promise.all([n.e(708),n.e(785),n.e(904)]).then(n.bind(n,2672))},{path:"structure/department",name:"structure-department",component:()=>Promise.all([n.e(708),n.e(785),n.e(227)]).then(n.bind(n,2026))},{path:"curriculum/education-year",name:"curriculum-education-year",component:()=>Promise.all([n.e(708),n.e(785),n.e(589)]).then(n.bind(n,1364))},{path:"curriculum/curriculum",name:"curriculum-curriculum",component:()=>Promise.all([n.e(708),n.e(785),n.e(225)]).then(n.bind(n,89))},{path:"curriculum/curriculum-list",name:"curriculum-curriculum-list",component:()=>Promise.all([n.e(708),n.e(785),n.e(559)]).then(n.bind(n,4791))},{path:"curriculum/semester",name:"curriculum-semester",component:()=>Promise.all([n.e(708),n.e(785),n.e(159)]).then(n.bind(n,9376))},{path:"curriculum/curriculum-block",name:"curriculum-curriculum-block",component:()=>Promise.all([n.e(708),n.e(785),n.e(75)]).then(n.bind(n,1816))},{path:"curriculum/student-register",name:"curriculum-student-register",component:()=>Promise.all([n.e(708),n.e(785),n.e(122)]).then(n.bind(n,9921))},{path:"curriculum/schedule-info",name:"curriculum-schedule-info",component:()=>n.e(918).then(n.bind(n,2918))},{path:"curriculum/schedule-info-view",name:"curriculum-schedule-info-view",component:()=>n.e(578).then(n.bind(n,2578))},{path:"curriculum/exam-schedule-info",name:"curriculum-exam-schedule-info",component:()=>n.e(988).then(n.bind(n,3988))},{path:"curriculum/exam-schedule-info-view",name:"curriculum-exam-schedule-info-view",component:()=>n.e(502).then(n.bind(n,1502))},{path:"curriculum/marking-system",name:"curriculum-marking-system",component:()=>n.e(638).then(n.bind(n,3638))},{path:"curriculum/grade-type",name:"curriculum-grade-type",component:()=>n.e(223).then(n.bind(n,5223))},{path:"curriculum/rating-grade",name:"curriculum-rating-grade",component:()=>n.e(403).then(n.bind(n,8403))},{path:"curriculum/lesson-pair",name:"curriculum-lesson-pair",component:()=>n.e(747).then(n.bind(n,1747))},{path:"curriculum/lesson-pair",name:"curriculum-lesson-pair",component:()=>n.e(747).then(n.bind(n,1747))},{path:"curriculum/curriculum-edit",name:"curriculum-curriculum-edit",component:()=>Promise.all([n.e(708),n.e(21)]).then(n.bind(n,6608))},{path:"hemis-baza",name:"hemis-baza",component:()=>n.e(481).then(n.bind(n,481))},{path:"curriculum-hemis",name:"curriculum-hemis",component:()=>n.e(579).then(n.bind(n,8579))},{path:"student-hemis",name:"student-hemis",component:()=>n.e(599).then(n.bind(n,1599))},{path:"dashboard/profile",name:"dashboard-profile",component:()=>Promise.all([n.e(708),n.e(591)]).then(n.bind(n,7591))}]}],p=new m.ZP({mode:"history",base:"/",routes:d});var h=p,f=n(3822);const g={windowWidth:null,loading:!1,faculty_type:[],faculties:{},department:{},educationYear:{},refreshTokenIntervalId:null},b={windowWidth:e=>e.windowWidth,loading:e=>e.loading,faculties:e=>e.faculties,department:e=>e.department,faculty_type:e=>e.faculty_type,educationYear:e=>e.educationYear},v={setWindowWidth(e,t){e.windowWidth=t},setFaculty_type:(e,t)=>e.faculty_type=t,setFaculty:(e,t)=>e.faculties=t,setDepartment:(e,t)=>e.department=t,setEducationYear:(e,t)=>e.educationYear=t,setLoading:(e,t)=>e.loading=t},y={getFacultyType({commit:e}){this._vm.$http.get("faculty_type").then((t=>{t&&e("setFaculty_type",t.results)}))},async getFaculty({commit:e},t){await this._vm.$http.get("faculty"+(t?`/?limit=10&page_number=${t.number}`:"")).then((t=>{if(t&&t.results){const n={count:t.count,page_count:t.page_count,next:t.next,previous:t.previous,results:t.results};e("setFaculty",n)}}))},async getDeparments({commit:e},t){await this._vm.$http.get("department"+(t?`/?limit=10&page_number=${t.number}`:"")).then((t=>{if(t&&t.results){const n={count:t.count,page_count:t.page_count,next:t.next,previous:t.previous,results:t.results};e("setDepartment",n)}}))},async getEducationYear({commit:e},t){try{const n="educationyear"+(t?`/?limit=10&page_number=${t.number}`:""),r=await this._vm.$http.get(n);if(r&&r.results){const t={count:r.count,page_count:r.page_count,next:r.next,previous:r.previous,results:r.results};e("setEducationYear",t)}}catch(n){}}};var w={state:g,getters:b,actions:y,mutations:v};const k={user:{},accessToken:null,isLoggedOn:!1},x={user:e=>e.user,accessToken:e=>e.accessToken,isLoggedOn:e=>e.isLoggedOn},P={setUser:(e,t)=>e.user=t,setAccessToken:(e,t)=>e.accessToken=t,setIsLoggedOn:(e,t)=>e.isLoggedOn=t},S={};var _={state:k,getters:x,actions:S,mutations:P};i.ZP.use(f.ZP);var T=new f.ZP.Store({modules:{generalOptions:w,superAdmin:_}}),O=function(e,t){return e(t.props.tag,t._g(t._b({tag:"component",staticClass:"text",class:[{"text--max-lines":t.props.maxLines||t.props.lines,"text--lines":t.props.lines},t.data.staticClass,t.data.class,t.$options.classes(t.props)],style:t.$options.style(t.props)},"component",t.data.attrs,!1),t.listeners),[t._t("default")],2)},E=[],L={name:"AppText",props:{size:{type:[String,Number],default:16},weight:{type:[String,Number],default:400},lineHeight:{type:[String,Number]},letterSpacing:{type:[String]},tag:{type:String,default:"p"},maxLines:{type:[String,Number]},lines:{type:[String,Number]},maxWidth:{type:[String,Number]}},classes(e){return{["text--weight-"+e.weight]:!0}},style(e){let t={"--font":e.size,"--line-height":e.lineHeight||e.size};return e.maxLines&&(t["--max-lines"]=e.maxLines),e.lines&&(t["--max-lines"]=e.lines),e.maxWidth&&(t["--max-width"]=e.maxWidth+"px"),e.letterSpacing&&(t["--letter-spacing"]=e.letterSpacing+"em"),t}},Z=L,C=(0,a.Z)(Z,O,E,!0,null,"0532ac54",null),N=C.exports,A=n(2904),W=n(9501),j=n(4021),$=n.n(j);function F(e,t){return e&&e<=t}i.ZP.mixin({computed:{...(0,f.Se)(["windowWidth"]),isDesktop(){return this.windowWidth&&this.windowWidth>800},isDesktopMedium(){return F(this.windowWidth,1240)},isDesktopSmall(){return F(this.windowWidth,1040)},isMobile(){return F(this.windowWidth,800)},isMobileMedium(){return F(this.windowWidth,650)},isMobileSmall(){return F(this.windowWidth,500)}}});n(7658);var I=n(6265),M=n.n(I),z=n(9077);const D="https://api.fastlms.uz/api/",H=M().create({baseURL:D});function R(e){e.interceptors.request.use((e=>{let t=z.Z.getToken();return t&&(e.headers["Authorization"]=`Bearer ${t}`),e.headers["Accept"]="application/json",e.headers["Content-Type"]="application/json",e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e.data),(e=>(e.response&&401===e.response.status?(localStorage.clear(),h.push({name:"login"}).then((()=>{})).catch((()=>{401===e.response.status&&this.errorNotification("Token is expired")}))):e.response&&403===e.response.status&&h.push({path:"/403"}).then(),Promise.reject(e))))}R(H);var Y=H;i.ZP.mixin({data(){return{baseURLHemis:r.baseURLHemis}},computed:{...(0,f.Se)([])},methods:{successNotification(e){this.$toast.success(e,{closeOnClick:!0,duration:1e3,dangerouslyUseHTMLString:!0})},errorNotification(e){this.$toast.error(e,{closeOnClick:!0,duration:1e3,HTMLElement:!0})}}}),i.ZP.directive("on-click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(r){const i=t.arg,o=Array.from(r.target.classList).filter((e=>i.includes(e)));e!=r.target&&!e.contains(r.target)&&o.length<=0&&n.context[t.expression](r)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}),i.ZP.config.productionTip=!1,i.ZP.component("AppText",N),i.ZP.use(A.ZP),i.ZP.use(W.ZP),i.ZP.use($()),i.ZP.prototype.$http=Y,new i.ZP({router:h,store:T,render:e=>e(l)}).$mount("#app")},9077:function(e,t){const n="AuthorizationFront",r="RefreshFront",i="TokenExpireFront",o={getToken(){return localStorage.getItem(n)},saveToken(e){localStorage.setItem(n,e)},saveRefreshToken(e){localStorage.setItem(r,e)},saveExpireTime(e){localStorage.setItem(i,e)},removeToken(){localStorage.removeItem(n),localStorage.clear()},removeRefreshToken(){localStorage.removeItem(r)},getRefreshToken(){return localStorage.getItem(r)},getExpireTime(){return localStorage.getItem(i)}};t.Z=o}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{21:"cd5d2084",75:"efb68422",122:"6edcc155",159:"ff989395",223:"29549437",225:"41b70734",227:"c0d89020",403:"64968c9b",481:"5c82a0d8",502:"49c63a35",559:"10c7e618",578:"0db9bc44",579:"f0b77e24",589:"a7eb67d6",591:"a6b84212",599:"4723dd1b",637:"1e83c72e",638:"17baac4d",707:"2cbbff75",708:"a5f81317",747:"967d72a4",785:"efa95f73",904:"6fa96814",918:"02a2947d",927:"da646823",929:"f6b347e9",988:"3832774b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{21:"0384d5b6",75:"5eb78b16",122:"ca1b0de9",159:"0d463dec",225:"e09eca36",227:"17da6067",481:"b5e8fdd9",559:"755e5268",579:"bd0a63bd",589:"c067b3d7",591:"5d05de89",599:"c87d6177",637:"daa0cc1d",707:"fc4f58d4",904:"d72a14bf",927:"2fa5f0a8"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moodle-super-admin:";n.l=function(r,i,o,u){if(e[r])e[r].push(i);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var m=s[l];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+o){a=m;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[i];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode&&o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=u,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){i=u[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return i();e(r,a,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={21:1,75:1,122:1,159:1,225:1,227:1,481:1,559:1,579:1,589:1,591:1,599:1,637:1,707:1,904:1,927:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,i[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)o=u[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkmoodle_super_admin"]=self["webpackChunkmoodle_super_admin"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6150)}));r=n.O(r)})();
//# sourceMappingURL=app.262dccce.js.map