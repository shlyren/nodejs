(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{kFil:function(e,t,a){"use strict";var n=a("u+rM");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("pduZ");var l=n(a("jQMi")),i=n(a("Pjwa")),d=n(a("2cji")),r=n(a("sp3j")),u=n(a("vZkh")),o=n(a("+KCP")),s=n(a("uqIC")),c=n(a("96/P")),f=n(a("kHTp")),m=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),d=0;d<n;d++)l[d]=arguments[d];return a=(0,r.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(l))),a.columns=[{title:"\u5e8f\u53f7",dataIndex:"index",key:"index",render:function(e,t,a){return s.default.createElement("span",null,a+1)}},{title:"\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"starttime",key:"starttime"},{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"endtime",key:"endtime"},{title:"\u72b6\u6001",dataIndex:"state",key:"state"},{title:"\u8be6\u60c5",dataIndex:"detail",key:"detail"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return s.default.createElement("span",null,s.default.createElement("a",{onClick:function(){var e=a.props.location;c.default.push("".concat(e.pathname,"/detail"))}},"\u67e5\u770b"))}}],a.state={logs:void 0},a.getLogItems=function(){var e=f.default.v4();return{key:e,name:"\u6d4b\u8bd5\u540d".concat(e.substring(0,4)),starttime:(new Date).toLocaleString(),endtime:(new Date).toLocaleString(),state:"\u6b63\u5e38",detail:"\u8fd9\u662f\u4e00\u6bb5\u8be6\u60c5\u6587\u5b57\uff0c\u8fd9\u662f\u4e00\u6bb5\u8be6\u60c5\u6587\u5b57\uff0c"}},a}return(0,o.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<10;t+=1)e.push(this.getLogItems());this.setState({logs:e})}},{key:"render",value:function(){var e=this.state.logs;return s.default.createElement(l.default,{style:{marginTop:20},bordered:!0,dataSource:e,columns:this.columns})}}]),t}(s.default.Component),p=m;t.default=p}}]);