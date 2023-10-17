"use strict";(self["webpackChunkmoodle_super_admin"]=self["webpackChunkmoodle_super_admin"]||[]).push([[591],{5530:function(e,t,i){i.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e._self._c;return t(e.tag,e._g(e._b({tag:"component",staticClass:"a-btn",class:e.className,style:e.style,attrs:{type:e.type,disabled:e.disabled}},"component",e.$attrs,!1),e.listeners),[e._t("default")],2)},s=[],l=(i(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:10},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:15},fontSize:{type:[Number,String],default:16},weight:{type:[Number,String],default:500},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const e="a-btn--",t=[e+"sd-"+this.sides,e+"rd-"+this.radius,e+"fn-"+this.fontSize,e+"wg-"+this.weight,e+"hg-"+this.height,e+"th-"+this.theme];return this.flex&&t.push(e+"fl"),this.width&&t.push(e+"wd"),this.outline&&t.push(e+"line"),this.textColor&&t.push(e+"cl-"+this.textColor),this.noFocus&&t.push(e+"nf"),this.shadow&&t.push(e+"shadow-"+this.shadow),t},style(){const e={};return this.width&&(e["--wd"]=this.width+"px"),e},listeners(){return this.disabled?{}:{click:e=>this.$emit("click",e)}}}}),r=l,n=i(1001),o=(0,n.Z)(r,a,s,!1,null,null,null),d=o.exports},1425:function(e,t,i){i.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("ValidationProvider",{ref:"validationInput",staticClass:"input__holder",attrs:{tag:"div",rules:e.rules,name:e.label?e.label:e.placeholder,vid:e.vid,hideDetails:e.hideDetails},scopedSlots:e._u([{key:"default",fn:function({errors:i}){return[t("div",{staticClass:"input__block",class:e.disabled?"disabled":""},[t("label",{staticClass:"input__block-label"},[e.label?t("span",{staticClass:"input__block-title"},[e._v(e._s(e.label))]):e._e(),t("div",{staticClass:"input__block-wrap",class:i[0]?"error":""},[t("div",{staticClass:"input__block-prepend"},[e._t("prepend")],2),t("div",{staticClass:"input__block-append"},[e._t("append")],2),t("div",{staticClass:"input__block-append hide-password",on:{click:e.showPassword}},[e._t("hidePassword")],2),t("input",e._b({ref:"input",staticClass:"input__block-input",class:i[0]?"error":"",attrs:{disabled:e.disabled,type:e.type,maxlength:e.maxlength,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.inputValue,keypress:e.keyPressValue}},"input",e.$attrs,!1))]),e.hideDetails?e._e():t("div",{staticClass:"input__details"},[i[0]?t("span",{attrs:{id:"error"}},[e._v(" "+e._s(i[0]))]):e._e()])])])]}}],null,!0)})},s=[],l=i(5708),r=i(8815);(0,l.l7)("required",{...r.C1,message:"{_field_}ni kiritish majburiy"}),(0,l.l7)("min",{...r.VV,message:"Berilgan sondan keyin 2ta raqam kiritish shart"}),(0,l.l7)("email",{...r.Do,message:"Email formatda kiriting"}),(0,l.l7)("confirmed",{...r.GU,message:"Parollar mos tushmayapti"});var n={name:"BaseInput",components:{ValidationProvider:l.d_},props:{masked:{default:!1},value:{default:""},label:{type:String},type:{},hideDetails:{type:Boolean},placeholder:{},rules:{},vid:{},maxlength:{default:null},disabled:{type:Boolean,default:()=>!1},autofocus:Boolean},methods:{inputValue(e){this.$emit("input",e.target.value)},keyPressValue(e){this.$emit("keypress",e)},focus(){this.$refs.input.focus()},showPassword(){}},mounted(){this.autofocus&&this.focus()}},o=n,d=i(1001),u=(0,d.Z)(o,a,s,!1,null,null,null),c=u.exports},7591:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile"},[t("div",{staticClass:"box box__info"},[e._m(0),t("div",{staticClass:"box__body"},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function({handleSubmit:i}){return[t("form",{on:{submit:function(t){return t.preventDefault(),i(e.changeUser)}}},[t("div",{staticClass:"box__inner"},[t("div",{staticClass:"box__inner-left"},[t("base-input",{attrs:{type:"text",vid:"Login",rules:"required",label:"Login",placeholder:"Login",disabled:""},model:{value:e.profile.login,callback:function(t){e.$set(e.profile,"login",t)},expression:"profile.login"}}),t("base-input",{attrs:{type:"text",vid:"To‘liq ismi º",rules:"required",label:"To‘liq ismi º",placeholder:"To‘liq ismi º",disabled:""},model:{value:e.profile.fullName,callback:function(t){e.$set(e.profile,"fullName",t)},expression:"profile.fullName"}}),t("base-input",{attrs:{type:"text",vid:"ID raqami",rules:"required",label:"ID raqami",placeholder:"ID raqami",disabled:""},model:{value:e.profile.ID,callback:function(t){e.$set(e.profile,"ID",t)},expression:"profile.ID"}}),t("base-input",{attrs:{type:"text",vid:"Email",rules:"required|email",label:"Email",placeholder:"Email"},model:{value:e.profile.email,callback:function(t){e.$set(e.profile,"email",t)},expression:"profile.email"}}),t("br"),t("div",{staticClass:"checkbo checkbo-ready"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var i=e.isChecked,a=t.target,s=!!a.checked;if(Array.isArray(i)){var l=null,r=e._i(i,l);a.checked?r<0&&(e.isChecked=i.concat([l])):r>-1&&(e.isChecked=i.slice(0,r).concat(i.slice(r+1)))}else e.isChecked=s}}}),t("label",{staticClass:"checkbox-label",attrs:{for:"checkbox"}},[t("span",{staticClass:"checkbox-custom",class:{checked:e.isChecked}},[e.isChecked?t("i",{staticClass:"fa fa-check"}):e._e()]),e._v(" Joriy holat ")])]),t("ValidationObserver",[t("base-input",{attrs:{type:"text",vid:"Parol",rules:"required",label:"Yangi parol",placeholder:"Yangi parol",disabled:!e.isChecked},model:{value:e.profile.password,callback:function(t){e.$set(e.profile,"password",t)},expression:"profile.password"}}),t("base-input",{attrs:{type:"text",vid:"Parol tasdig‘i",rules:e.isChecked?"required|confirmed:Parol":"",label:"Parol tasdig‘i",placeholder:"Parol tasdig‘i",disabled:!e.isChecked},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1)],1),t("div",{staticClass:"box__inner-right"},[t("div",{staticClass:"account__photo"},[t("img",{attrs:{src:"/images/account.png",alt:""}})])])]),t("div",{staticClass:"box__footer"},[t("app-button",{attrs:{theme:"main",type:"submit",height:40,"font-size":e.isMobileSmall?12:e.isMobile?14:16,sides:10}},[e._v(" O‘zgartirish ")])],1)])]}}])})],1)])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"box__header"},[t("h3",{staticClass:"title"},[e._v("Mening profilim")])])}],l=i(5708),r=i(5530),n=i(1425),o={name:"StudentProfile",components:{ValidationObserver:l._j,AppButton:r.Z,BaseInput:n.Z},data(){return{profile:{fullName:"Og'abek Sanoyev",login:"23567897653989",ID:"123456789",email:"ogabeksanoyev06@gmail.com",telefon:"+998 88 890-88-15",password:""},confirmPassword:"",isChecked:!1}},methods:{changeUser(){console.log("tayyyoooooooorrrrr")},toggleCheckbox(){this.isChecked=!this.isChecked}}},d=o,u=i(1001),c=(0,u.Z)(d,a,s,!1,null,"99dcc384",null),p=c.exports},8815:function(e,t,i){i.d(t,{C1:function(){return v},Do:function(){return o},GU:function(){return l},VV:function(){return h}});i(6229),i(7330),i(2062),i(7658);var a=function(e,t){var i=t.target;return String(e)===String(i)},s=[{name:"target",isTarget:!0}],l={validate:a,params:s},r=function(e,t){var i=(void 0===t?{}:t).multiple,a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i&&!Array.isArray(e)&&(e=String(e).split(",").map((function(e){return e.trim()}))),Array.isArray(e)?e.every((function(e){return a.test(String(e))})):a.test(String(e))},n=[{name:"multiple",default:!1}],o={validate:r,params:n};function d(e){return null===e||void 0===e}function u(e){return Array.isArray(e)&&0===e.length}var c=function(e,t){var i=t.length;return!d(e)&&(Array.isArray(e)?e.every((function(e){return c(e,{length:i})})):String(e).length>=i)},p=[{name:"length",cast:function(e){return Number(e)}}],h={validate:c,params:p},f=function(e,t){var i=(void 0===t?{allowFalse:!0}:t).allowFalse,a={valid:!1,required:!0};return d(e)||u(e)?a:!1!==e||i?(a.valid=!!String(e).trim().length,a):a},m=!0,b=[{name:"allowFalse",default:!0}],v={validate:f,params:b,computesRequired:m}}}]);
//# sourceMappingURL=591.a6b84212.js.map