(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__1zJee",wrapper:"Message_wrapper__ZACMg",img:"Message_img__GBUfg",message__content_name:"Message_message__content_name__2UBHL",message__content_time:"Message_message__content_time__1sMCQ",reviews:"Message_reviews___4jRK",comment:"Message_comment__1Wyse",comment_bubble:"Message_comment_bubble__dWN52"}},,function(e,t,n){e.exports={header:"Header_header__243aW",NavLink:"Header_NavLink__23wGA",animate:"Header_animate__2o3aU"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__39Fkq",errorInput:"SuperInputText_errorInput__1xkTb",error:"SuperInputText_error__XSwrn"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__8bTa7",error:"Greeting_error__2rhFz",inputClass:"Greeting_inputClass__2Zmau"}},,,,,function(e,t,n){e.exports={border:"HW4_border__IQiWi",column:"HW4_column__shhv6",testSpanError:"HW4_testSpanError__O4HYu"}},function(e,t,n){e.exports={default:"SuperButton_default__38qzP",red:"SuperButton_red__2VNWA"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2Rm-9",spanClassName:"SuperCheckbox_spanClassName__2W1xM"}},function(e,t,n){e.exports={dark:"HW12_dark__1B0Am","dark-text":"HW12_dark-text__2leM0",red:"HW12_red__hs6t6","red-text":"HW12_red-text__onVxp",some:"HW12_some__3k1vd","some-text":"HW12_some-text__36R81"}},,,,function(e,t,n){e.exports={App:"App_App__UStQl"}},,function(e,t,n){e.exports={range:"SuperRange_range__1KghA"}},,,,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(26),i=n.n(s),j=(n(36),n(27)),o=n.n(j),l=n(9),u=n(10),b=n.n(u);var d=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:b.a.header,children:[Object(c.jsx)(l.b,{className:b.a.NavLink,to:"/pre-junior",children:"PreJunior"}),Object(c.jsx)(l.b,{className:b.a.NavLink,to:"/junior",children:"Junior"}),Object(c.jsx)(l.b,{className:b.a.NavLink,to:"/JUNIOR_PlUS",children:"JuniorPlus"}),Object(c.jsx)(l.b,{className:b.a.NavLink,to:"/MIDDLE",children:"Middle"})]})})},O=n(3),h=n(8),x=n.n(h);var m,_=function(e){return Object(c.jsxs)("div",{className:x.a.message,children:[Object(c.jsx)("div",{className:x.a.wrapper,children:Object(c.jsx)("img",{className:x.a.img,src:e.avatar,alt:""})}),Object(c.jsx)("div",{className:x.a.reviews,children:Object(c.jsx)("div",{className:x.a.comment,children:Object(c.jsxs)("div",{className:x.a.comment_bubble,children:[Object(c.jsx)("div",{className:x.a.message__content_name,children:e.name}),Object(c.jsxs)("div",{className:x.a.comment_text,children:[e.message,Object(c.jsx)("div",{className:x.a.message__content_time,children:e.time})]})]})})})]})},p={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Mikola",message:"Porro officia cumque sint deleniti consectetur?",time:m=(new Date).getMinutes()<10?"".concat((new Date).getHours(),":0").concat((new Date).getMinutes()):"".concat((new Date).getHours(),":").concat((new Date).getMinutes())},v={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Mikola",message:"Hello World!",time:m};var g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(c.jsx)(_,{avatar:p.avatar,name:p.name,message:p.message,time:p.time}),Object(c.jsx)(_,{avatar:v.avatar,name:v.name,message:"Hello, World!",time:v.time}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},f=n(2);var C=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[e.affair.name," "]}),Object(c.jsxs)("span",{children:[e.affair.priority," "]}),Object(c.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(c.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(N),t=Object(f.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("all"),i=Object(f.a)(s,2),j=i[0],o=i[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,j);return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 2",Object(c.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},S=n(30),y=n(15),M=n.n(y),W=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,s=e.totalUsers;M.a.error;return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{value:t,onChange:n,className:M.a.inputClass,onKeyPress:function(e){return function(e){"Enter"===e.key&&a()}(e)}}),Object(c.jsx)("button",{onClick:a,children:"add"}),Object(c.jsx)("span",{children:s}),Object(c.jsx)("div",{className:r?M.a.error:"",children:r})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),s=Object(f.a)(r,2),i=s[0],j=s[1],o=Object(a.useState)(""),l=Object(f.a)(o,2),u=l[0],b=l[1],d=t.length;return Object(c.jsx)(W,{name:i,setNameCallback:function(e){e.currentTarget.value&&(j(e.currentTarget.value),b("")),e.currentTarget.value||(j(""),b("Please, enter real name!"))},addUser:function(){""!==i&&(alert("Hello, ".concat(i,"!")),n(i),j(""))},error:u,totalUsers:d})},A=n(44);var T=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 3",Object(c.jsx)(H,{users:n,addUserCallback:function(e){var t=[{_id:Object(A.a)(),name:"Name"}].concat(Object(S.a)(n));r(t)}}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},I=n(7),P=n(5),E=n(13),F=n.n(E),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,i=e.className,j=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(j||""),u="".concat(s?F.a.errorInput:F.a.superInput," ").concat(i);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:F.a.form__group,children:[Object(c.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},o)),s&&Object(c.jsx)("span",{className:l,children:s})]})})},D=n(20),L=n.n(D),R=n(21),J=n.n(R),B=function(e){var t=e.red,n=e.className,a=Object(P.a)(e,["red","className"]),r="".concat(t?J.a.red:J.a.default," ").concat(n);return Object(c.jsx)("button",Object(I.a)({className:r},a))},G=n(22),K=n.n(G),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),s=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(K.a.checkbox," ").concat(a||"");return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},s)),r&&Object(c.jsx)("span",{className:K.a.spanClassName,children:r})]})};var z=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],s=n?"":"Please, Enter Valid Name...",i=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},j=Object(a.useState)(!1),o=Object(f.a)(j,2),l=o[0],u=o[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 4",Object(c.jsxs)("div",{className:L.a.column,children:[Object(c.jsx)(U,{value:n,onChangeText:r,onEnter:i,error:s}),Object(c.jsx)(U,{className:L.a.border}),Object(c.jsx)(B,{children:"default"}),Object(c.jsx)(B,{red:!0,onClick:i,children:"delete "}),Object(c.jsx)(B,{disabled:!0,children:"disabled"}),Object(c.jsx)(q,{checked:l,onChangeChecked:u,children:"some text "}),Object(c.jsx)(q,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var X=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsx)(w,{}),Object(c.jsx)(T,{}),Object(c.jsx)(z,{})]})};var Z=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"404"}),Object(c.jsx)("div",{children:"Page not found!"}),Object(c.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var Q=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)(),s=Object(f.a)(r,2),i=(s[0],s[1],Object(a.useState)(!1)),j=Object(f.a)(i,2),o=j[0],l=(j[1],function(){});return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onMouseEnter:function(){},onMouseLeave:function(){},children:"Time"}),o&&Object(c.jsx)("div",{children:"Date"}),Object(c.jsx)(B,{onClick:function(){var e=window.setInterval((function(){}),1e3);n(e)},children:"start"}),Object(c.jsx)(B,{onClick:l,children:"stop"})]})};var V=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 9",Object(c.jsx)(Q,{}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var Y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 10",Object(c.jsx)("div",{children:Object(c.jsx)(B,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},$=n(29),ee=n.n($),te=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,r=Object(P.a)(e,["type","onChange","onChangeRange","className"]),s="".concat(ee.a.range," ").concat(a||"");return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",Object(I.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},r))})},ne=function(e){e.onChangeRange,e.value;return Object(c.jsx)(c.Fragment,{children:"DoubleRange"})};var ce=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],r=(t[1],Object(a.useState)(100)),s=Object(f.a)(r,2),i=s[0];return s[1],Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 11",Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:n}),Object(c.jsx)(te,{})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:n}),Object(c.jsx)(ne,{}),Object(c.jsx)("span",{children:i})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var ae=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(V,{}),Object(c.jsx)(Y,{}),Object(c.jsx)(ce,{})]})},re=n(23),se=n.n(re);var ie=function(){return Object(c.jsxs)("div",{className:se.a.some,children:[Object(c.jsx)("hr",{}),Object(c.jsx)("span",{className:se.a["some-text"],children:"homeworks 12"}),Object(c.jsx)("hr",{})]})};var je=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(ie,{})})},oe=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(P.a)(e,["options","onChange","onChangeOption"]);return Object(c.jsx)("select",Object(I.a)(Object(I.a)({onChange:function(e){}},t),{},{children:[]}))},le=function(e){e.type;var t=e.name,n=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),n?n.map((function(e,n){return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio"}),e]},t+"-"+n)})):[]);return Object(c.jsx)(c.Fragment,{children:a})},ue=["x","y","z"];var be=function(){var e=Object(a.useState)(ue[1]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 7",Object(c.jsx)("div",{children:Object(c.jsx)(oe,{options:ue,value:n,onChangeOption:r})}),Object(c.jsx)("div",{children:Object(c.jsx)(le,{name:"radio",options:ue,value:n,onChangeOption:r})}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Oe=function(){var e=Object(a.useState)(de),t=Object(f.a)(e,2),n=t[0],r=t[1],s=n.map((function(e){return Object(c.jsx)("div",{children:"some name, age"},e._id)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 8",s,Object(c.jsx)("div",{children:Object(c.jsx)(B,{onClick:function(){return r(function(e,t){switch(t.type){case"sort":case"check":default:return e}}(de,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(c.jsx)("div",{children:"sort down"}),"check 18",Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var he=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(be,{}),Object(c.jsx)(Oe,{})]})},xe="/pre-junior",me="/junior",_e="/JUNIOR_PlUS",pe="/MIDDLE";var ve=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{exact:!0,path:"/"}),Object(c.jsx)(O.a,{path:xe,render:function(){return Object(c.jsx)(X,{})}}),Object(c.jsx)(O.a,{path:me,render:function(){return Object(c.jsx)(he,{})}}),Object(c.jsx)(O.a,{path:_e,render:function(){return Object(c.jsx)(ae,{})}}),Object(c.jsx)(O.a,{path:pe,render:function(){return Object(c.jsx)(je,{})}}),Object(c.jsx)(O.a,{render:function(){return Object(c.jsx)(Z,{})}})]})})};var ge=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(ve,{})]})})};var fe=function(){return Object(c.jsxs)("div",{className:o.a.App,children:[Object(c.jsx)("div",{children:"react homeworks:"}),Object(c.jsx)(ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(fe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.d135c376.chunk.js.map