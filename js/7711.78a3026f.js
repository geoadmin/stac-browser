"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[7711],{7711:function(r,e,a){a.r(e),a.d(e,{default:function(){return b}});var t=function(){var r=this,e=r._self._c;return e("b-card",{staticClass:"provider",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:r.id,expression:"id"}],attrs:{block:"",variant:"provider",squared:""}},[e("span",{staticClass:"name"},[e("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[r.expanded?e("b-icon-chevron-down"):e("b-icon-chevron-right")],1),r._v(" "+r._s(r.provider.name)+" ")]),e("ProviderRoles",{attrs:{roles:r.provider.roles}})],1)],1),e("b-collapse",{attrs:{id:r.id,accordion:"providers",role:"tabpanel"},model:{value:r.expanded,callback:function(e){r.expanded=e},expression:"expanded"}},[e("b-card-body",[r.provider.url||r.provider.email||r.provider.mail?e("b-button-group",[e("b-button",{attrs:{href:r.provider.url,target:"_blank",variant:"primary"}},[r._v(" "+r._s(r.$t("providers.homepage"))+" ")]),r.provider.email||r.provider.mail?e("b-button",{attrs:{href:`mailto:${r.provider.email||r.provider.mail}`,target:"_blank",variant:"primary"}},[r._v(" "+r._s(r.$t("providers.email"))+" ")]):r._e()],1):r._e(),r.provider.description?e("b-card-text",{staticClass:"mt-4"},[e("Description",{attrs:{description:r.provider.description,compact:""}})],1):r._e(),e("Metadata",{staticClass:"mt-4",attrs:{data:r.provider,ignoreFields:r.ignore,title:"",type:"Provider"}})],1)],1)],1)},i=[],o=a(1688),d=a(8019),s=a(2778),n=a(8090),l={name:"Provider",components:{BCollapse:o.k,BIconChevronDown:d.VIw,BIconChevronRight:d.xkg,Description:s["default"],Metadata:()=>Promise.all([a.e(9539),a.e(2407),a.e(8565)]).then(a.bind(a,8565)),ProviderRoles:n.Z},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data(){return{expanded:!1,ignore:["url","name","description","roles"]}}},p=l,c=a(1001),v=(0,c.Z)(p,t,i,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=7711.78a3026f.js.map