webpackJsonp([3],{"+/da":function(e,t,n){"use strict";function i(e){n("spf2")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("gRE1"),a=n.n(s),l=n("gt+Q"),r=n("hCGe"),o={data:function(){return{api:{list:!1},props:{label:"name",value:"name",children:"children"},options:[],selectedOptions:[],oldSelectedOptions:[],multipleSelection:[],currentPage:1,totalCount:0,pageSize:10,condition:{},tableData:[],filter:-1}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},handleCurrentChange:function(e){this.currentPage=e,this.queryTaskList(this.filter)},queryTaskList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments[1],n=arguments[2],i=this,s=arguments[3],a=arguments[4],r={isPage:this.isPage,currentPage:this.currentPage,pagesize:this.pageSize,filterGray:e};t&&n&&s&&a&&(r.project=t,r.cluster=n,r.service=s,r.version=a),Object(l.f)(r).then(function(e){if(0===e.code){if(i.totalCount=e.data.totalCount,i.currentPage=e.data.currentPage,i.tableData=e.data.list,e.data.condition){var t=JSON.parse(e.data.condition);i.condition=t;var n=i.options.filter(function(e){return e.name===t.project});if(n[0]&&n[0].children&&n[0].children.length>0){var s=n[0].children.filter(function(e){return e.name===t.cluster});if(s[0]&&s[0].children&&s[0].children.length>0){var a=s[0].children.filter(function(e){return e.name===t.service});a[0]&&a[0].children&&a[0].children.length>0?a[0].children.map(function(e){e.name===t.version&&(i.oldSelectedOptions=[],i.oldSelectedOptions.push(t.project,t.cluster,t.service,t.version),i.selectedOptions=i.oldSelectedOptions.slice(0))}):i.selectedOptions=[]}else i.selectedOptions=[]}else i.selectedOptions=[]}0===i.selectedOptions.length&&(i.tableData=[],i.totalCount="")}else i.$message({message:e.message,type:"error"})})},filterGrayGroup:function(e){this.currentPage=1;var t=a()(e)[0];1===t.length?(this.filter=t[0],this.queryTaskList(this.filter)):(!t.length||t.length>1)&&(this.filter=-1,this.queryTaskList())},confirmDelTask:function(e){var t=this,n=null;n=e?l.c:l.a;var i={};if(e)i.id=e.id;else{var s=[];this.multipleSelection.map(function(e){s.push(e.id)}),i.ids=s}this.$confirm("此操作将删除选中推送痕迹, 是否继续?","提示",{confirmButtonText:"确 定",cancelButtonText:"取 消",type:"warning"}).then(function(){n(i).then(function(e){0===e.code?(t.$message({message:e.message,type:"success"}),t.queryTaskList()):t.$message({message:e.message,type:"error"})})})},handleChange:function(){var e=this.selectedOptions[0]?this.selectedOptions[0]:"",t=this.selectedOptions[1]?this.selectedOptions[1]:"",n=this.selectedOptions[2]?this.selectedOptions[2]:"",i=this.selectedOptions[3]?this.selectedOptions[3]:"";1===this.selectedOptions.length&&(this.$message({message:"请为该项目创建集群",type:"warning"}),this.selectedOptions=this.oldSelectedOptions.slice(0)),2===this.selectedOptions.length&&(this.$message({message:"请为该集群创建服务",type:"warning"}),this.selectedOptions=this.oldSelectedOptions.slice(0)),3===this.selectedOptions.length&&(this.$message({message:"请为该服务创建版本",type:"warning"}),this.selectedOptions=this.oldSelectedOptions.slice(0)),e&&t&&n&&i&&this.queryTaskList(-1,e,t,n,i)},initSelectedOptions:function(){var e=this;this.api.list=!0,Object(r.R)().then(function(t){if(0===t.code){if(e.api.list=!1,t.data.list&&t.data.list.length>0){var n=[];t.data.list.map(function(e){var t={};if(t.name=e.name,t.id=e.id,e.children){var i=[];e.children.map(function(e){var t={};if(t.name=e.name,t.id=e.id,e.children){var n=[];e.children.map(function(e){var t={};if(t.name=e.name,t.id=e.id,e.children){var i=[];e.children.map(function(e){var t={};t.name=e.name,t.id=e.id,i.push(t)}),t.children=i}n.push(t)}),t.children=n}i.push(t)}),t.children=i}n.push(t)}),e.options=n,e.optionsCluster=n}e.queryTaskList()}else e.$message({message:t.message,type:"error"})})}},created:function(){this.initSelectedOptions()}},c=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.api.list,expression:"api.list"}],staticClass:"server_list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[i("ul",{staticClass:"nav-list clearfix"},[i("li",{staticClass:"track"},[t._v("配置推送轨迹")]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/main/track_discovery"}},[t._v("服务推送轨迹")])],1),t._v(" "),i("div",{staticClass:"deal clearfix"},[i("div",{staticClass:"basebtn l"},[i("button",{class:[{disable:!t.multipleSelection.length},{active:t.multipleSelection.length}],attrs:{disabled:!t.multipleSelection.length},on:{click:function(e){t.confirmDelTask()}}},[t._v("批量删除")])]),t._v(" "),i("div",{staticClass:"r"},[i("el-cascader",{ref:"cascader",attrs:{placeholder:"请输入关键字",filterable:"",options:t.options,props:t.props,cascaderTitle:["项目","集群","服务","服务版本"]},on:{change:t.handleChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)]),t._v(" "),i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange,"filter-change":t.filterGrayGroup}},[i("el-table-column",{attrs:{type:"selection",width:"54"}}),t._v(" "),i("el-table-column",{attrs:{prop:"id",label:"推送ID",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticClass:"lan",attrs:{tag:"a",to:"/main/track_config_detail?pushId="+e.row.id+"&isGray="+("0"===e.row.grayGroupId?"No":"Yes")}},[t._v(t._s(e.row.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"项目"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.condition.project))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"集群"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.condition.cluster))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"服务"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.condition.service))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"版本"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.condition.version))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"configs",label:"配置"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.configs,function(e,n){return i("p",{key:n},[t._v(t._s(e.name))])})}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"regions",label:"结果"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.regions,function(e,n){return i("div",{key:n,staticClass:"clearfix"},[i("div",{staticClass:"l"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"l",class:{"green-bg":e.successed,"red-bg":-1===e.successed}},[t._v("["+t._s(1===e.successed?"成功":"失败")+"]")])])})}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"grayGroupId",label:"灰度标识",filters:[{text:"全部",value:"-1"},{text:"灰度",value:"1"},{text:"非灰度",value:"0"}]},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("0"===e.row.grayGroupId?"No":"Yes"))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"pushTime",label:"更新时间",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(new Date(e.row.pushTime).Format("yyyy-MM-dd hh:mm:ss")))]}}])}),t._v(" "),i("div",{attrs:{slot:"empty"},slot:"empty"},[0==this.selectedOptions.length?i("a",{staticClass:"lan",on:{click:function(){e.$refs.cascader.handleClick()}}},[t._v("输入关键字筛选查看内容")]):i("p",[t._v("暂无数据")])])],1)],1),t._v(" "),t.totalCount>t.pageSize?i("div",{staticClass:"basePagenate"},[i("el-pagination",{attrs:{"page-size":t.pageSize,"current-page":t.currentPage,total:t.totalCount,layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1):t._e()])},d=[],u={render:c,staticRenderFns:d},p=u,f=n("VU/8"),h=i,v=f(o,p,!1,h,"data-v-303e050e",null);t.default=v.exports},TmV0:function(e,t,n){n("fZOM"),e.exports=n("FeBl").Object.values},fZOM:function(e,t,n){var i=n("kM2E"),s=n("mbce")(!1);i(i.S,"Object",{values:function(e){return s(e)}})},gRE1:function(e,t,n){e.exports={default:n("TmV0"),__esModule:!0}},mbce:function(e,t,n){var i=n("lktj"),s=n("TcQ7"),a=n("NpIQ").f;e.exports=function(e){return function(t){for(var n,l=s(t),r=i(l),o=r.length,c=0,d=[];o>c;)a.call(l,n=r[c++])&&d.push(e?[n,l[n]]:l[n]);return d}}},spf2:function(e,t,n){var i=n("zQdu");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("53f84443",i,!0)},zQdu:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".server_list[data-v-303e050e]{padding:20px;min-width:1160px}.server_list .nav-list[data-v-303e050e]{border-bottom:1px solid #cbcbcb;margin-bottom:10px}.server_list .nav-list li[data-v-303e050e]{font-size:14px;line-height:30px;width:138px;float:left;margin:0 10px -1px 0;text-align:center;cursor:pointer;border:1px solid #cbcbcb;color:#333;background:#f3f5f9}.server_list .nav-list li.track[data-v-303e050e]{line-height:29px;border-top:2px solid #4285f4;border-bottom-color:#fff;font-weight:700;background:#fff}.server_list .deal[data-v-303e050e]{margin:20px 0 10px}.server_list .deal .el-cascader[data-v-303e050e]{width:300px}.server_list .el-table .lan[data-v-303e050e]{cursor:pointer}.server_list .el-table .green-bg[data-v-303e050e]{color:green}.server_list .el-table .red-bg[data-v-303e050e]{color:red}","",{version:3,sources:["D:/admin/config/src/components/track_config/track_config.vue"],names:[],mappings:"AACA,8BACE,aAAc,AACd,gBAAkB,CACnB,AACD,wCACE,gCAAiC,AACjC,kBAAoB,CACrB,AACD,2CACE,eAAgB,AAChB,iBAAkB,AAClB,YAAa,AACb,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,eAAgB,AAChB,yBAA0B,AAC1B,WAAY,AACZ,kBAAoB,CACrB,AACD,iDACE,iBAAkB,AAClB,6BAA8B,AAC9B,yBAA0B,AAC1B,gBAAkB,AAClB,eAAiB,CAClB,AACD,oCACE,kBAAoB,CACrB,AACD,iDACE,WAAa,CACd,AACD,6CACE,cAAgB,CACjB,AACD,kDACE,WAAe,CAChB,AACD,gDACE,SAAY,CACb",file:"track_config.vue",sourcesContent:["\n.server_list[data-v-303e050e] {\n  padding: 20px;\n  min-width: 1160px;\n}\n.server_list .nav-list[data-v-303e050e] {\n  border-bottom: 1px solid #cbcbcb;\n  margin-bottom: 10px;\n}\n.server_list .nav-list li[data-v-303e050e] {\n  font-size: 14px;\n  line-height: 30px;\n  width: 138px;\n  float: left;\n  margin: 0 10px -1px 0;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #cbcbcb;\n  color: #333;\n  background: #f3f5f9;\n}\n.server_list .nav-list li.track[data-v-303e050e] {\n  line-height: 29px;\n  border-top: 2px solid #4285f4;\n  border-bottom-color: #fff;\n  font-weight: bold;\n  background: #fff;\n}\n.server_list .deal[data-v-303e050e] {\n  margin: 20px 0 10px;\n}\n.server_list .deal .el-cascader[data-v-303e050e] {\n  width: 300px;\n}\n.server_list .el-table .lan[data-v-303e050e] {\n  cursor: pointer;\n}\n.server_list .el-table .green-bg[data-v-303e050e] {\n  color: #008000;\n}\n.server_list .el-table .red-bg[data-v-303e050e] {\n  color: #f00;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=3.68e57ac8f38d37260a44.js.map