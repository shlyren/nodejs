(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"H/bg":function(e,t,a){"use strict";var l=a("u+rM");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("rgAq");var n=l(a("MZW5"));a("M3TN");var u=l(a("Azro")),d=l(a("U1Sa"));a("EX9+");var r=l(a("hQyt"));a("pduZ");var i=l(a("jQMi"));a("UEgf");var o=l(a("C0Io")),c=l(a("smUt")),f=l(a("Pjwa")),s=l(a("2cji")),m=l(a("sp3j")),p=l(a("vZkh")),v=l(a("+KCP"));a("0ubN");var h,k,E,y=l(a("0FzK")),b=l(a("uqIC")),S=l(a("96/P")),g=l(a("kHTp")),I={labelCol:{span:5},wrapperCol:{span:19}},w=(h=y.default.create(),h((E=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.columns=[{title:"\u5e8f\u53f7",dataIndex:"index",key:"index",render:function(e,t,a){return b.default.createElement("span",null,a+1)}},{title:"\u6807\u8bc6\u7b26",dataIndex:"id",key:"id"},{title:"\u5206\u7c7b",dataIndex:"class",key:"class"},{title:"\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u5907\u6ce8",dataIndex:"remarks",key:"remarks"},{title:"\u7248\u672c",dataIndex:"build",key:"build"},{title:"\u4fee\u6539\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return b.default.createElement("span",null,b.default.createElement("a",{onClick:function(){a.setState({editData:t})}},"\u4fee\u6539"))}}],a.state={dataSource:[],editData:void 0},a.getWorkItem=function(e){return{key:g.default.v4(),id:"id_".concat(e),class:"class_".concat(e),name:"name_".concat(e),remarks:"remarks_".concat(e),build:"build_".concat(e),time:(new Date).toLocaleDateString()}},a.handleSubmit=function(e){e.preventDefault();var t=a.props.form;t.validateFieldsAndScroll(function(e,t){if(!e){var l,n=a.state,u=n.dataSource,d=n.editData;d&&d.key?(l=(0,c.default)({},d,t,{time:(new Date).toLocaleString()}),u.forEach(function(e,t){e.key===l.key&&u.splice(t,1,l)})):(l=t,l.id="id+",l.time=(new Date).toLocaleString(),l.key=g.default.v4(),u.unshift(l)),a.setState({dataSource:u,editData:void 0})}})},a}return(0,v.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){for(var e=this.state.dataSource,t=0;t<10;t+=1)e.push(this.getWorkItem(t));this.setState({dataSource:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataSource,l=t.editData,c=this.props.location.pathname,f=this.props.form.getFieldDecorator;return b.default.createElement("div",null,b.default.createElement("div",{style:{height:44}},b.default.createElement("span",{style:{float:"right"}},b.default.createElement(o.default,{type:"primary",onClick:function(){return e.setState({editData:{}})}},"\u65b0\u589e"),b.default.createElement(o.default,{style:{marginLeft:15},type:"primary",onClick:function(){return S.default.push("".concat(c,"/extends"))}},"\u7ee7\u627f"))),b.default.createElement(i.default,{bordered:!0,columns:this.columns,dataSource:a}),l&&b.default.createElement(n.default,{width:700,style:{marginTop:64},title:void 0===l.key?"\u65b0\u589e":"\u4fee\u6539",visible:void 0!==l,okText:"\u63d0\u4ea4",destroyOnClose:!0,maskClosable:!1,onOk:this.handleSubmit,onCancel:function(){return e.setState({editData:void 0})}},b.default.createElement(y.default,{onSubmit:this.handleSubmit,style:{margin:"10px",width:600}},b.default.createElement("h3",null,"\u9009\u62e9\u4e1a\u52a1\u5c5e\u6027\u5206\u7c7b"),b.default.createElement(y.default.Item,(0,d.default)({},I,{label:"\u5730\u533a\u7ea7\u8054\u9009\u62e9"}),f("supe_area",{initialValue:void 0,rules:[{required:!1}]})(b.default.createElement(r.default,null,b.default.createElement(r.default.Option,{value:"\u9009\u9879\u4e00"},"\u9009\u9879\u4e00"),b.default.createElement(r.default.Option,{value:"\u9009\u9879\u4e8c"},"\u9009\u9879\u4e8c"),b.default.createElement(r.default.Option,{value:"\u9009\u9879\u4e09"},"\u9009\u9879\u4e09")))),b.default.createElement(y.default.Item,(0,d.default)({},I,{label:"\u5355\u4f4d"}),f("com",{initialValue:l.com,rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(b.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"}))),b.default.createElement(y.default.Item,(0,d.default)({},I,{label:"\u4e1a\u52a1\u5c5e\u6027\u5206\u7c7b"}),f("class",{initialValue:void 0,rules:[{required:!1}]})(b.default.createElement(r.default,null,b.default.createElement(r.default.Option,{value:"\u5206\u7c7b\u4e00"},"\u5206\u7c7b\u4e00"),b.default.createElement(r.default.Option,{value:"\u5206\u7c7b\u4e8c"},"\u5206\u7c7b\u4e8c"),b.default.createElement(r.default.Option,{value:"\u5206\u7c7b\u4e09"},"\u5206\u7c7b\u4e09")))),b.default.createElement("h3",{style:{marginTop:20}},"\u65b0\u589e\u4e1a\u52a1\u5bf9\u8c61"),b.default.createElement(y.default.Item,(0,d.default)({},I,{label:"\u5bf9\u8c61\u540d\u79f0"}),f("name",{initialValue:l.name,rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(b.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165"}))),b.default.createElement(y.default.Item,(0,d.default)({},I,{label:"\u5907\u6ce8"}),f("remarks",{initialValue:l.remarks,rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(b.default.createElement(u.default.TextArea,{placeholder:"\u8bf7\u8f93\u5165"}))))))}}]),t}(b.default.Component),k=E))||k),D=w;t.default=D}}]);