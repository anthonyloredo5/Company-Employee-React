(this["webpackJsonpcompany-employee-react"]=this["webpackJsonpcompany-employee-react"]||[]).push([[0],{46:function(e,n,c){},47:function(e,n,c){},48:function(e,n,c){},72:function(e,n,c){"use strict";c.r(n);var t=c(1),a=c.n(t),s=c(31),r=c.n(s),o=(c(46),c(47),c(48),c(3));var i=function(){return Object(o.jsx)("header",{class:"header",children:Object(o.jsx)("h1",{children:" Companies and Employee Data "})})},l=c(22),j=c(38),d=c(88),b=c(19),h=c(90),p=c(91),m=c(92),u=c(93),O=c(94),x=c(95),f=c(96),y=c(97),g=c(98),v=c(32),C=c.n(v),E=Object(d.a)({table:{minWidth:1e3,backgroundColor:b.a},cell:{paddingLeft:"80px"}});function w(){var e=E(),n=Object(t.useState)({allPeople:[],companyData:[]}),c=Object(j.a)(n,2),a=c[0],s=c[1];Object(t.useEffect)((function(){C.a.get("https://6065d7a7b8fbbd001756786c.mockapi.io/companies").then((function(e){console.log(e,"Response from api"),s(Object(l.a)(Object(l.a)({},a),{},{allPeople:e.data[0].users,companyData:e.data}))})).catch((function(e){console.log(e)}))}),[]);var r=a.companyData;return console.log(r,"should be company data in array form"),Object(o.jsx)("div",{children:Object(o.jsx)(h.a,{component:p.a,children:Object(o.jsxs)(m.a,{className:e.table,children:[Object(o.jsx)(u.a,{children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)(x.a,{children:"Company\xa0"}),Object(o.jsxs)(f.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(o.jsx)(x.a,{children:"Employee\xa0"}),Object(o.jsx)(x.a,{children:"Employee Id\xa0"}),Object(o.jsx)(x.a,{children:"Employee Avatar\xa0"})]})]})}),r.map((function(n){return Object(o.jsx)(y.a,{children:Object(o.jsxs)(O.a,{children:[Object(o.jsxs)(x.a,{rowSpan:n.users.length+1,children:[n.name,Object(o.jsx)("br",{}),n.phoneNumber]}),n.users.map((function(n){return Object(o.jsx)(f.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)(x.a,{"felx-end":!0,children:n.name}),Object(o.jsx)(x.a,{className:e.cell,children:n.id}),Object(o.jsx)(x.a,{className:e.cell,children:Object(o.jsx)(g.a,{alt:n.name,src:n.avatar})})]})})}))]})})}))]})})})}var D=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(w,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),I()}},[[72,1,2]]]);
//# sourceMappingURL=main.268a8693.chunk.js.map