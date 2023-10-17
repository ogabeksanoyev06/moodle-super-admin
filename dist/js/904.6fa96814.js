"use strict";(self["webpackChunkmoodle_super_admin"]=self["webpackChunkmoodle_super_admin"]||[]).push([[904],{5530:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e(t.tag,t._g(t._b({tag:"component",staticClass:"a-btn",class:t.className,style:t.style,attrs:{type:t.type,disabled:t.disabled}},"component",t.$attrs,!1),t.listeners),[t._t("default")],2)},i=[],l=(a(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:10},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:15},fontSize:{type:[Number,String],default:16},weight:{type:[Number,String],default:500},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const t="a-btn--",e=[t+"sd-"+this.sides,t+"rd-"+this.radius,t+"fn-"+this.fontSize,t+"wg-"+this.weight,t+"hg-"+this.height,t+"th-"+this.theme];return this.flex&&e.push(t+"fl"),this.width&&e.push(t+"wd"),this.outline&&e.push(t+"line"),this.textColor&&e.push(t+"cl-"+this.textColor),this.noFocus&&e.push(t+"nf"),this.shadow&&e.push(t+"shadow-"+this.shadow),e},style(){const t={};return this.width&&(t["--wd"]=this.width+"px"),t},listeners(){return this.disabled?{}:{click:t=>this.$emit("click",t)}}}}),n=l,u=a(1001),r=(0,u.Z)(n,s,i,!1,null,null,null),c=r.exports},4391:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"loader"},[e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}],l={name:"PreLoader"},n=l,u=a(1001),r=(0,u.Z)(n,s,i,!1,null,null,null),c=r.exports},1425:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("ValidationProvider",{ref:"validationInput",staticClass:"input__holder",attrs:{tag:"div",rules:t.rules,name:t.label?t.label:t.placeholder,vid:t.vid,hideDetails:t.hideDetails},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("div",{staticClass:"input__block",class:t.disabled?"disabled":""},[e("label",{staticClass:"input__block-label"},[t.label?e("span",{staticClass:"input__block-title"},[t._v(t._s(t.label))]):t._e(),e("div",{staticClass:"input__block-wrap",class:a[0]?"error":""},[e("div",{staticClass:"input__block-prepend"},[t._t("prepend")],2),e("div",{staticClass:"input__block-append"},[t._t("append")],2),e("div",{staticClass:"input__block-append hide-password",on:{click:t.showPassword}},[t._t("hidePassword")],2),e("input",t._b({ref:"input",staticClass:"input__block-input",class:a[0]?"error":"",attrs:{disabled:t.disabled,type:t.type,maxlength:t.maxlength,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.inputValue,keypress:t.keyPressValue}},"input",t.$attrs,!1))]),t.hideDetails?t._e():e("div",{staticClass:"input__details"},[a[0]?e("span",{attrs:{id:"error"}},[t._v(" "+t._s(a[0]))]):t._e()])])])]}}],null,!0)})},i=[],l=a(5708),n=a(8815);(0,l.l7)("required",{...n.C1,message:"{_field_}ni kiritish majburiy"}),(0,l.l7)("min",{...n.VV,message:"Berilgan sondan keyin 2ta raqam kiritish shart"}),(0,l.l7)("email",{...n.Do,message:"Email formatda kiriting"}),(0,l.l7)("confirmed",{...n.GU,message:"Parollar mos tushmayapti"});var u={name:"BaseInput",components:{ValidationProvider:l.d_},props:{masked:{default:!1},value:{default:""},label:{type:String},type:{},hideDetails:{type:Boolean},placeholder:{},rules:{},vid:{},maxlength:{default:null},disabled:{type:Boolean,default:()=>!1},autofocus:Boolean},methods:{inputValue(t){this.$emit("input",t.target.value)},keyPressValue(t){this.$emit("keypress",t)},focus(){this.$refs.input.focus()},showPassword(){}},mounted(){this.autofocus&&this.focus()}},r=u,c=a(1001),o=(0,c.Z)(r,s,i,!1,null,null,null),p=o.exports},1003:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{staticClass:"btn btn-prev",attrs:{type:"button",disabled:1===t.current_page},on:{click:t.prevPage}},[e("span",[t._v("Oldingi")])]),e("ul",{staticClass:"pager"},t._l(t.page_count,(function(a){return e("li",{key:a,staticClass:"number",class:{active:t.current_page===a},on:{click:function(e){return t.changePage(a)}}},[t._v(" "+t._s(a)+" ")])})),0),e("button",{staticClass:"btn btn-next",attrs:{type:"button",disabled:t.current_page===t.page_count},on:{click:t.nextPage}},[e("span",[t._v("Keyingi")])])])},i=[],l={name:"PA",props:{count:{type:Number},page_count:{type:Number},current_page:{type:Number,default:1}},computed:{},methods:{nextPage(){this.$emit("nextPage",this.current_page)},prevPage(){this.$emit("prevPage",this.current_page)},changePage(t){this.current_page!==t&&this.$emit("changePage",t)}}},n=l,u=a(1001),r=(0,u.Z)(n,s,i,!1,null,"18333d8a",null),c=r.exports},2672:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t.loading?e("app-loading"):e("div",{staticClass:"items"},[e("div",{staticClass:"items-left"},[e("div",{staticClass:"box box-default"},[e("div",{staticClass:"box-body"},[e("div",{staticClass:"table-block"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("Kod")]),e("th",[t._v("Nomi º")]),e("th",[t._v("Turi")]),e("th",[t._v("Faol")])])]),e("tbody",t._l(t.faculties.results,(function(a,s){return e("tr",{key:s},[e("td",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.facultyGetId(a.id)}}},[t._v(" "+t._s(a.kod)+" ")]),e("td",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.facultyGetId(a.id)}}},[t._v(" "+t._s(a.name)+" ")]),e("td",[t._v(t._s(a.faculty_type.name))]),e("td",[e("label",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"item.status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.status)?t._i(a.status,null)>-1:a.status},on:{click:function(e){return t.toggleCheckbox(s)},change:function(e){var s=a.status,i=e.target,l=!!i.checked;if(Array.isArray(s)){var n=null,u=t._i(s,n);i.checked?u<0&&t.$set(a,"status",s.concat([n])):u>-1&&t.$set(a,"status",s.slice(0,u).concat(s.slice(u+1)))}else t.$set(a,"status",l)}}}),e("div",{staticClass:"slider round"})])])])})),0)])])]),e("div",{staticClass:"box-footer"},[e("Pagination",{attrs:{count:t.pager?.count,page_count:t.pager?.page_count,current_page:t.pager?.current_page},on:{changePage:t.handlePageChange,prevPage:t.handlePrevPage,nextPage:t.handleNextPage}})],1)])]),e("div",{staticClass:"items-right"},[e("div",{staticClass:"box"},[e("div",{staticClass:"box-body pa-10"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function({handleSubmit:a}){return[e("form",{on:{submit:function(e){return e.preventDefault(),a(t.facultyUpdate)}}},[e("base-input",{attrs:{type:"text",vid:"Nomi",rules:"required",label:"Nomi º",placeholder:"Nomi"},model:{value:t.facultyTypeUpdate.name,callback:function(e){t.$set(t.facultyTypeUpdate,"name",e)},expression:"facultyTypeUpdate.name"}}),e("base-input",{directives:[{name:"mask",rawName:"v-mask",value:"336-1##",expression:"'336-1##'"}],attrs:{type:"text",vid:"Kod",rules:"required|min:7",label:"Kod",placeholder:"Kod"},model:{value:t.facultyTypeUpdate.kod,callback:function(e){t.$set(t.facultyTypeUpdate,"kod",e)},expression:"facultyTypeUpdate.kod"}}),e("base-select",{attrs:{type:"text",label:"Turi",vid:"Turini tanlang",rules:"required",placeholder:"Turini tanlang","options-prop":t.faculty_type},on:{itemSelected:t.facultyType},model:{value:t.facultyTypeUpdate.type,callback:function(e){t.$set(t.facultyTypeUpdate,"type",e)},expression:"facultyTypeUpdate.type"}}),e("div",{staticClass:"box-footer d-flex mla",class:t.isMobile?"flex-wrap":""},[e("app-button",{staticClass:"mr-5",attrs:{theme:"transparent","font-size":t.isMobile?14:16,sides:t.isMobile?10:20,radius:"5",height:"40"},on:{click:t.clear}},[t._v(" Bekor ")]),e("app-button",{staticClass:"mr-5",attrs:{theme:"delete","font-size":t.isMobile?14:16,sides:t.isMobile?10:20,radius:"5",height:"40",disabled:""},on:{click:function(e){return t.facultyDelete(t.faculty_id)}}},[t._v(" O'chirish ")]),e("app-button",{attrs:{type:"submit",theme:"main","font-size":t.isMobile?14:16,sides:t.isMobile?10:20,radius:"5",height:"40"}},[e("i",{staticClass:"fa fa-check"}),t._v(" Saqlash ")])],1)],1)]}}])})],1)])])])],1)},i=[],l=a(5708),n=a(5530),u=a(4391),r=a(3822),c=a(1425),o=a(785),p=a(1003),d={name:"structure-faculty",components:{ValidationObserver:l._j,AppButton:n.Z,AppLoading:u.Z,BaseInput:c.Z,BaseSelect:o.Z,Pagination:p.Z},data(){return{showSelect:!1,checkbox:!0,loading:!1,facultyTypeId:"",facultyId:"",facultyTypeUpdate:{name:"",kod:"",type:""},dropdownVisible:!1,pager:{count:null,page_count:null,current_page:1}}},methods:{...(0,r.nv)(["getFaculty","getFacultyType"]),facultyGetId(t){this.loading=!0,this.$http.get(`faculty/get/${t}`).then((t=>{console.log(t),this.facultyTypeUpdate.type=t.faculty_type.name,this.facultyTypeUpdate.name=t.name,this.facultyTypeUpdate.kod=t.kod,this.facultyId=t.id})).catch((()=>{})).finally((()=>{this.loading=!1}))},facultyDelete(t){this.$http.post("faculty/delete/",{id:t}).then((t=>{this.successNotification(t.xabar),this.facultyTypeUpdate.type="",this.facultyTypeUpdate.name="",this.facultyTypeUpdate.kod="",this.facultyId="",this.getFaculty()})).catch((t=>{this.errorNotification(t)})).finally((()=>{}))},facultyUpdate(){this.$http.post(`faculty/delete/${this.facultyId}`,{name:this.facultyTypeUpdate.name,faculty_type:this.facultyTypeUpdate.type}).then((t=>{this.successNotification(t.xabar),this.facultyTypeUpdate.type="",this.facultyTypeUpdate.name="",this.facultyTypeUpdate.kod="",this.facultyId="",this.getFaculty()})).catch((t=>{this.errorNotification(t)})).finally((()=>{}))},facultyType(t){this.dropdownVisible=!1,this.facultyTypeUpdate.type=t.name,this.facultyTypeId=t.id},hideSelectDropdown(){this.showSelect=!1},toggleCheckbox(){this.checkbox=!this.checkbox,this.$emit("setCheckboxVal",this.checkbox)},clear(){this.facultyTypeUpdate.type="",this.facultyTypeUpdate.name="",this.facultyTypeUpdate.kod="",this.facultyId=""},handlePageChange(t){this.pager.current_page=t,this.getFaculty({number:this.pager.current_page})},handlePrevPage(t){this.pager.current_page=t-1,this.getFaculty({number:this.pager.current_page})},handleNextPage(t){this.pager.current_page=t+1,this.getFaculty({number:this.pager.current_page})}},computed:{...(0,r.Se)(["faculties","faculty_type"]),...(0,r.rn)([])},async mounted(){await this.getFaculty({number:this.pager.current_page}),this.pager={count:this.faculties?.count,page_count:this.faculties?.page_count,current_page:1},this.getFacultyType()}},h=d,y=a(1001),f=(0,y.Z)(h,s,i,!1,null,"ba52500a",null),g=f.exports}}]);
//# sourceMappingURL=904.6fa96814.js.map