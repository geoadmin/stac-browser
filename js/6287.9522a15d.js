"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6287],{6287:function(e,t,i){i.r(t),i.d(t,{default:function(){return ae}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"queryable-group"},[t("b-row",{staticClass:"queryable-row"},[t("span",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),null!==e.operatorOptions?t("b-form-select",e._b({staticClass:"op",attrs:{size:"sm",value:e.operator,options:e.operatorOptions},on:{input:function(t){return e.updateOperator(t)}}},"b-form-select",e.validation,!1)):e._e(),"select"===e.queryableType?t("b-form-select",e._b({staticClass:"value",attrs:{options:e.queryableOptions,size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-select",e.validation,!1)):"text"===e.queryableType?t("b-form-input",e._b({staticClass:"value",attrs:{size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-input",e.validation,!1)):"number"===e.queryableType?t("b-form-input",e._b({staticClass:"value",attrs:{number:"",type:"number",size:"sm",value:e.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-input",e.validation,!1)):"date"===e.queryableType?t("date-picker",e._b({staticClass:"value",attrs:{type:"datetime",lang:e.datepickerLang,format:e.datepickerFormat,value:e.value},on:{input:function(t){return e.updateValue(t)}}},"date-picker",e.validation,!1)):e._e(),t("b-button",{staticClass:"delete",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.$emit("remove-queryable")}}},[t("b-icon-x-circle-fill",{attrs:{"aria-hidden":"true"}})],1)],1),e.help?t("b-row",{staticClass:"queryable-help text-muted small"},[t("Description",{attrs:{description:e.help,inline:""}})],1):e._e()],1)},n=[],a=i(7353),l=i(1915),s=i(4689),o=i(3294),u=i(2299),p=i(494),c=i(1572),h=i(6410),m=i(8735),d=i(3284),b=i(7040),f=i(451),y=i(2023),v=i(8137),O=i(9035),g=i(5505),j=i(3727),P=i(4602),x=(0,P.l)("value"),q=x.mixin,w=x.props,S=x.prop,z=x.event,T=i(8280),D=i(7668),_=i(7147),F='Setting prop "options" to an object is deprecated. Use the array format instead.',C=(0,f.y2)({disabledField:(0,f.pi)(u.N0,"disabled"),htmlField:(0,f.pi)(u.N0,"html"),options:(0,f.pi)(u.XO,[]),textField:(0,f.pi)(u.N0,"text"),valueField:(0,f.pi)(u.N0,"value")},"formOptionControls"),$=(0,l.l7)({props:C,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,d.PO)(e)){var i=(0,D.U)(e,this.valueField),r=(0,D.U)(e,this.textField);return{value:(0,d.o8)(i)?t||r:i,text:(0,m.o)(String((0,d.o8)(r)?t:r)),html:(0,D.U)(e,this.htmlField),disabled:Boolean((0,D.U)(e,this.disabledField))}}return{value:t||e,text:(0,m.o)(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return(0,d.kJ)(e)?e.map((function(e){return t.normalizeOption(e)})):(0,d.PO)(e)?((0,_.ZK)(F,this.$options.name),(0,b.XP)(e).map((function(i){return t.normalizeOption(e[i]||{},i)}))):[]}}});function k(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function V(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?k(Object(i),!0).forEach((function(t){N(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function N(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var U=(0,f.y2)((0,b.GE)(V(V({},C),{},{labelField:(0,f.pi)(u.N0,"label"),optionsField:(0,f.pi)(u.N0,"options")})),"formOptions"),E=(0,l.l7)({mixins:[$],props:U,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,d.PO)(e)){var i=(0,D.U)(e,this.valueField),r=(0,D.U)(e,this.textField),n=(0,D.U)(e,this.optionsField,null);return(0,d.Ft)(n)?{value:(0,d.o8)(i)?t||r:i,text:String((0,d.o8)(r)?t:r),html:(0,D.U)(e,this.htmlField),disabled:Boolean((0,D.U)(e,this.disabledField))}:{label:String((0,D.U)(e,this.labelField)||r),options:this.normalizeOptions(n)}}return{value:t||e,text:String(e),disabled:!1}}}}),I=i(9558),L=(0,f.y2)({disabled:(0,f.pi)(u.U5,!1),value:(0,f.pi)(u.r1,void 0,!0)},s.vg),Z=(0,l.l7)({name:s.vg,functional:!0,props:L,render:function(e,t){var i=t.props,r=t.data,n=t.children,a=i.value,l=i.disabled;return e("option",(0,I.b)(r,{attrs:{disabled:l},domProps:{value:a}}),n)}});function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function K(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(Object(i),!0).forEach((function(t){X(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var A=(0,f.y2)((0,b.GE)(K(K({},C),{},{label:(0,f.pi)(u.N0,void 0,!0)})),s.Rj),G=(0,l.l7)({name:s.Rj,mixins:[T.Z,$],props:A,render:function(e){var t=this.label,i=this.formOptions.map((function(t,i){var r=t.value,n=t.text,a=t.html,l=t.disabled;return e(Z,{attrs:{value:r,disabled:l},domProps:(0,m.U)(a,n),key:"option_".concat(i)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(p.D$),i,this.normalizeSlot()])}});function J(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?J(Object(i),!0).forEach((function(t){Q(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Q(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var H=(0,f.y2)((0,b.GE)(R(R(R(R(R(R(R({},j.N),w),y.N),v.N),O.N),g.N),{},{ariaInvalid:(0,f.pi)(u.gL,!1),multiple:(0,f.pi)(u.U5,!1),selectSize:(0,f.pi)(u.jg,0)})),s.$S),M=(0,l.l7)({name:s.$S,mixins:[j.t,q,y.X,O.j,g.J,v.i,E,T.Z],props:H,data:function(){return{localValue:this[S]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(z,this.localValue)}},methods:{focus:function(){(0,h.KS)(this.$refs.input)},blur:function(){(0,h.Cx)(this.$refs.input)},onChange:function(e){var t=this,i=e.target,r=(0,c.Dp)(i.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=i.multiple?r:r[0],this.$nextTick((function(){t.$emit(o.z2,t.localValue)}))}},render:function(e){var t=this.name,i=this.disabled,r=this.required,n=this.computedSelectSize,a=this.localValue,l=this.formOptions.map((function(t,i){var r=t.value,n=t.label,a=t.options,l=t.disabled,s="option_".concat(i);return(0,d.kJ)(a)?e(G,{props:{label:n,options:a},key:s}):e(Z,{props:{value:r,disabled:l},domProps:(0,m.U)(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:n,disabled:i,required:r,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:a}],ref:"input"},[this.normalizeSlot(p.D$),l,this.normalizeSlot()])}}),W=i(8019),Y=i(8637),ee=i(9879),te={name:"QueryableInput",components:{BFormInput:a.e,BFormSelect:M,BIconXCircleFill:W.aEb,Description:()=>Promise.resolve().then(i.bind(i,2778))},mixins:[Y.Z],props:{title:{type:String,required:!0},value:{default:null},operator:{type:String,default:null},schema:{type:Object,default:()=>({})}},computed:{validation(){return"text"===this.queryableType?{minlength:this.schema.minLength,maxlength:this.schema.maxLenggth,required:this.schema.minLength>0}:"number"===this.queryableType?{min:this.schema.minimum,max:this.schema.maximum}:{}},schemaTypes(){return"string"===typeof this.schema.type?[this.schema.type]:Array.isArray(this.schema.type)?this.schema.type:[]},isNumeric(){return this.schemaTypes.includes("number")||this.schemaTypes.includes("integer")},help(){return"LIKE"===this.operator?this.$t("search.likeOperatorDescription"):"date"===this.queryableType?this.$t("search.dateDescription"):null},queryableType(){return"enum"in this.schema?"select":this.isNumeric?"number":this.schemaTypes.includes("string")?"date-time"===this.schema.format?"date":"text":null},operatorOptions(){const e={text:this.$t("search.lessThan"),value:"<"},t={text:this.$t("search.greaterThan"),value:">"},i={text:this.$t("search.equalTo"),value:"="},r={text:this.$t("search.notEqualTo"),value:"<>"},n={text:this.$t("search.matches"),value:"LIKE"};return this.isNumeric||"date"===this.queryableType?[e,t,i,r]:"text"===this.queryableType?[i,r,n]:[i,r]},queryableOptions(){return"select"!==this.queryableType?[]:this.schema.enum.map((e=>"string"===typeof e?{value:e,text:e}:e))},selectedOperator(){return null===this.operatorOptions?null:this.operatorOptions.find((e=>e.value===this.operator))}},mounted(){null===this.operator&&(this.queryableVisible=!0),null===this.operator&&this.updateOperator(this.operatorOptions[0].value),null===this.value&&this.updateValue(this.calculateDefaultValue())},methods:{updateValue(e){let t=ee.ZP.isObject(e)&&"target"in e?e.target.value:e;this.$emit("update:value",t)},updateOperator(e){let t=ee.ZP.isObject(e)&&"target"in e?e.target.value:e;this.$emit("update:operator",t)},calculateDefaultValue(){return"undefined"!==typeof this.schema.default?this.schema.default:"text"===this.queryableType?"":"date"===this.queryableType?new Date:"number"===this.queryableType?"undefined"!==typeof this.schema.minimum?this.schema.minimum:0:"select"===this.queryableType?this.queryableOptions[0].value:void 0}}},ie=te,re=i(1001),ne=(0,re.Z)(ie,r,n,!1,null,null,null),ae=ne.exports}}]);
//# sourceMappingURL=6287.9522a15d.js.map