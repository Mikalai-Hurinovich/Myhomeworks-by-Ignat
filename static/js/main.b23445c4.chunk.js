(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__1zJee",wrapper:"Message_wrapper__ZACMg",img:"Message_img__GBUfg",message__content_name:"Message_message__content_name__2UBHL",message__content_time:"Message_message__content_time__1sMCQ",reviews:"Message_reviews___4jRK",comment:"Message_comment__1Wyse",comment_bubble:"Message_comment_bubble__dWN52"}},,function(e,t,n){e.exports={header:"Header_header__243aW",NavLink:"Header_NavLink__23wGA",animate:"Header_animate__2o3aU"}},function(e,t,n){e.exports={mainbox:"Error_mainbox__3XVpe",err:"Error_err__3JFEu",far:"Error_far__28WCv",err2:"Error_err2__1Lhhh",msg:"Error_msg__3qMpv"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__39Fkq",errorInput:"SuperInputText_errorInput__1xkTb",error:"SuperInputText_error__XSwrn"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__8bTa7",error:"Greeting_error__2rhFz",inputClass:"Greeting_inputClass__2Zmau"}},,,,,function(e,t,n){e.exports={border:"HW4_border__IQiWi",column:"HW4_column__shhv6",testSpanError:"HW4_testSpanError__O4HYu"}},function(e,t,n){e.exports={default:"SuperButton_default__38qzP",red:"SuperButton_red__2VNWA"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2Rm-9",spanClassName:"SuperCheckbox_spanClassName__2W1xM"}},function(e,t,n){e.exports={dark:"HW12_dark__1B0Am","dark-text":"HW12_dark-text__2leM0",red:"HW12_red__hs6t6","red-text":"HW12_red-text__onVxp",some:"HW12_some__3k1vd","some-text":"HW12_some-text__36R81"}},,,,function(e,t,n){e.exports={App:"App_App__UStQl"}},,function(e,t,n){e.exports={range:"SuperRange_range__1KghA"}},,,,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(27),i=n.n(s),j=(n(37),n(28)),o=n.n(j),l=n(9),u=n(10),d=n.n(u);var b=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:d.a.header,children:[Object(r.jsx)(l.b,{className:d.a.NavLink,to:"/pre-junior",children:"PreJunior"}),Object(r.jsx)(l.b,{className:d.a.NavLink,to:"/junior",children:"Junior"}),Object(r.jsx)(l.b,{className:d.a.NavLink,to:"/junior_plus",children:"JuniorPlus"}),Object(r.jsx)(l.b,{className:d.a.NavLink,to:"/middle",children:"Middle"})]})})},h=n(3),O=n(8),x=n.n(O);var m,_=function(e){return Object(r.jsxs)("div",{className:x.a.message,children:[Object(r.jsx)("div",{className:x.a.wrapper,children:Object(r.jsx)("img",{className:x.a.img,src:e.avatar,alt:""})}),Object(r.jsx)("div",{className:x.a.reviews,children:Object(r.jsx)("div",{className:x.a.comment,children:Object(r.jsxs)("div",{className:x.a.comment_bubble,children:[Object(r.jsx)("div",{className:x.a.message__content_name,children:e.name}),Object(r.jsxs)("div",{className:x.a.comment_text,children:[e.message,Object(r.jsx)("div",{className:x.a.message__content_time,children:e.time})]})]})})})]})},p={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Mikola",message:"Porro officia cumque sint deleniti consectetur?",time:m=(new Date).getMinutes()<10?"".concat((new Date).getHours(),":0").concat((new Date).getMinutes()):"".concat((new Date).getHours(),":").concat((new Date).getMinutes())},v={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Mikola",message:"Hello World!",time:m};var f=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(r.jsx)(_,{avatar:p.avatar,name:p.name,message:p.message,time:p.time}),Object(r.jsx)(_,{avatar:v.avatar,name:v.name,message:"Hello, World!",time:v.time}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})},g=n(2);var C=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[e.affair.name," "]}),Object(r.jsxs)("span",{children:[e.affair.priority," "]}),Object(r.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(r.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(r.jsxs)("div",{children:[t,Object(r.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(r.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(r.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(r.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(N),t=Object(g.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("all"),i=Object(g.a)(s,2),j=i[0],o=i[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,j);return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 2",Object(r.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})},S=n(31),y=n(16),M=n.n(y),W=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,s=e.totalUsers;M.a.error;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{value:t,onChange:n,className:M.a.inputClass,onKeyPress:function(e){return function(e){"Enter"===e.key&&a()}(e)}}),Object(r.jsx)("button",{onClick:a,children:"add"}),Object(r.jsx)("span",{children:s}),Object(r.jsx)("div",{className:c?M.a.error:"",children:c})]})},H=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),s=Object(g.a)(c,2),i=s[0],j=s[1],o=Object(a.useState)(""),l=Object(g.a)(o,2),u=l[0],d=l[1],b=t.length;return Object(r.jsx)(W,{name:i,setNameCallback:function(e){e.currentTarget.value&&(j(e.currentTarget.value),d("")),e.currentTarget.value||(j(""),d("Please, enter real name!"))},addUser:function(){""!==i&&(alert("Hello, ".concat(i,"!")),n(i),j(""))},error:u,totalUsers:b})},A=n(45);var E=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 3",Object(r.jsx)(H,{users:n,addUserCallback:function(e){var t=[{_id:Object(A.a)(),name:"Name"}].concat(Object(S.a)(n));c(t)}}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})},T=n(7),F=n(5),I=n(14),P=n.n(I),L=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,s=e.error,i=e.className,j=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(P.a.error," ").concat(j||""),u="".concat(s?P.a.errorInput:P.a.superInput," ").concat(i);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:P.a.form__group,children:[Object(r.jsx)("input",Object(T.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:u},o)),s&&Object(r.jsx)("span",{className:l,children:s})]})})},U=n(21),B=n.n(U),J=n(22),R=n.n(J),q=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,["red","className"]),c="".concat(t?R.a.red:R.a.default," ").concat(n);return Object(r.jsx)("button",Object(T.a)({className:c},a))},G=n(23),D=n.n(G),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),s=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(D.a.checkbox," ").concat(a||"");return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",Object(T.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},s)),c&&Object(r.jsx)("span",{className:D.a.spanClassName,children:c})]})};var X=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],s=n?"":"Please, Enter Valid Name...",i=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},j=Object(a.useState)(!1),o=Object(g.a)(j,2),l=o[0],u=o[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 4",Object(r.jsxs)("div",{className:B.a.column,children:[Object(r.jsx)(L,{value:n,onChangeText:c,onEnter:i,error:s}),Object(r.jsx)(L,{className:B.a.border}),Object(r.jsx)(q,{children:"default"}),Object(r.jsx)(q,{red:!0,onClick:i,children:"delete "}),Object(r.jsx)(q,{disabled:!0,children:"disabled"}),Object(r.jsx)(K,{checked:l,onChangeChecked:u,children:"some text "}),Object(r.jsx)(K,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})};var z=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsx)(w,{}),Object(r.jsx)(E,{}),Object(r.jsx)(X,{})]})},V=n(11),Z=n.n(V);var Q=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:Z.a.mainbox,children:[Object(r.jsx)("div",{className:Z.a.err,children:"4"}),Object(r.jsx)("i",{className:"".concat(Z.a.far," far fa-question-circle fa-spin")}),Object(r.jsx)("div",{className:Z.a.err2,children:"4"}),Object(r.jsxs)("div",{className:Z.a.msg,children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(r.jsxs)("p",{children:["Let's go ",Object(r.jsx)("a",{href:"#/pre-junior",children:"home"})," and try from there."]})]})]})})};var Y=function(){var e=Object(a.useState)(0),t=Object(g.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(),s=Object(g.a)(c,2),i=(s[0],s[1],Object(a.useState)(!1)),j=Object(g.a)(i,2),o=j[0],l=(j[1],function(){});return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{onMouseEnter:function(){},onMouseLeave:function(){},children:"Time"}),o&&Object(r.jsx)("div",{children:"Date"}),Object(r.jsx)(q,{onClick:function(){var e=window.setInterval((function(){}),1e3);n(e)},children:"start"}),Object(r.jsx)(q,{onClick:l,children:"stop"})]})};var $=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 9",Object(r.jsx)(Y,{}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})};var ee=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 10",Object(r.jsx)("div",{children:Object(r.jsx)(q,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})},te=n(30),ne=n.n(te),re=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(F.a)(e,["type","onChange","onChangeRange","className"]),s="".concat(ne.a.range," ").concat(a||"");return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("input",Object(T.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},c))})},ae=function(e){e.onChangeRange,e.value;return Object(r.jsx)(r.Fragment,{children:"DoubleRange"})};var ce=function(){var e=Object(a.useState)(0),t=Object(g.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(100)),s=Object(g.a)(c,2),i=s[0];return s[1],Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 11",Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)(re,{})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)(ae,{}),Object(r.jsx)("span",{children:i})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})};var se=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)($,{}),Object(r.jsx)(ee,{}),Object(r.jsx)(ce,{})]})},ie=n(24),je=n.n(ie);var oe=function(){return Object(r.jsxs)("div",{className:je.a.some,children:[Object(r.jsx)("hr",{}),Object(r.jsx)("span",{className:je.a["some-text"],children:"homeworks 12"}),Object(r.jsx)("hr",{})]})};var le=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(oe,{})})},ue=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(F.a)(e,["options","onChange","onChangeOption"]);return Object(r.jsx)("select",Object(T.a)(Object(T.a)({onChange:function(e){}},t),{},{children:[]}))},de=function(e){e.type;var t=e.name,n=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),n?n.map((function(e,n){return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio"}),e]},t+"-"+n)})):[]);return Object(r.jsx)(r.Fragment,{children:a})},be=["x","y","z"];var he=function(){var e=Object(a.useState)(be[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 7",Object(r.jsx)("div",{children:Object(r.jsx)(ue,{options:be,value:n,onChangeOption:c})}),Object(r.jsx)("div",{children:Object(r.jsx)(de,{name:"radio",options:be,value:n,onChangeOption:c})}),Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})},Oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var xe=function(){var e=Object(a.useState)(Oe),t=Object(g.a)(e,2),n=t[0],c=t[1],s=n.map((function(e){return Object(r.jsx)("div",{children:"some name, age"},e._id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),"homeworks 8",s,Object(r.jsx)("div",{children:Object(r.jsx)(q,{onClick:function(){return c(function(e,t){switch(t.type){case"sort":case"check":default:return e}}(Oe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(r.jsx)("div",{children:"sort down"}),"check 18",Object(r.jsx)("hr",{}),Object(r.jsx)("hr",{})]})};var me=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(he,{}),Object(r.jsx)(xe,{})]})},_e="/pre-junior",pe="/junior",ve="/junior_plus",fe="/middle";var ge=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/"}),Object(r.jsx)(h.a,{path:_e,render:function(){return Object(r.jsx)(z,{})}}),Object(r.jsx)(h.a,{path:pe,render:function(){return Object(r.jsx)(me,{})}}),Object(r.jsx)(h.a,{path:ve,render:function(){return Object(r.jsx)(se,{})}}),Object(r.jsx)(h.a,{path:fe,render:function(){return Object(r.jsx)(le,{})}}),Object(r.jsx)(h.a,{render:function(){return Object(r.jsx)(Q,{})}})]})})};var Ce=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(ge,{})]})})};var ke=function(){return Object(r.jsx)("div",{className:o.a.App,children:Object(r.jsx)(Ce,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.b23445c4.chunk.js.map