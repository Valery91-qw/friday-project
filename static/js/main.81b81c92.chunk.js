(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{14:function(t,e,n){t.exports={textStandContainer:"TestStand_textStandContainer__1Zasp",title:"TestStand_title__g0Kar",textStandItem:"TestStand_textStandItem__3J3Qh",buttonsText:"TestStand_buttonsText__26GBo"}},21:function(t,e,n){t.exports={headerContainer:"Headers_headerContainer__2sq6K",menu:"Headers_menu__2_OXb"}},22:function(t,e,n){t.exports={noFoundContainer:"NotFound_noFoundContainer__rptKN",notFound:"NotFound_notFound__KlT4d"}},27:function(t,e,n){t.exports={commonButtonStyle:"CustomButton_commonButtonStyle__3Fidc"}},28:function(t,e,n){t.exports={customInput:"CustomInputTextx_customInput__3F_2H"}},29:function(t,e,n){t.exports={customCheckbox:"CustomCheckBox_customCheckbox__2-C4h"}},37:function(t,e,n){},38:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),r=n(17),o=n.n(r),i=(n(37),n(38),n(13)),j=n(21),u=n.n(j),d=n(8),l=n(9),b=n.n(l),h=n(3),x=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Profile"})})},O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Registration"})})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Login"})})},m=n(14),p=n.n(m),v=n(11),_=n(12),g=n(27),C=n.n(g),N=function(t){t.className;var e=Object(_.a)(t,["className"]),n="".concat(C.a.commonButtonStyle);return Object(c.jsx)("button",Object(v.a)({className:n},e))},k=n(28),y=n.n(k),S=function(t){t.type;var e=Object(_.a)(t,["type"]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",Object(v.a)({type:"text",className:y.a.customInput},e))})},w=n(29),F=n.n(w),T=function(t){t.type;var e=Object(_.a)(t,["type"]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",Object(v.a)({className:F.a.customCheckbox,type:"checkBox"},e)),"Check"]})})},B=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),j=o[0],u=o[1],d=Object(a.useState)(!1),l=Object(i.a)(d,2),b=l[0],h=l[1];return Object(c.jsxs)("div",{className:p.a.textStandContainer,children:[Object(c.jsx)("h1",{className:p.a.title,children:"Test stand"}),Object(c.jsxs)("div",{className:p.a.textStandItem,children:[Object(c.jsx)(N,{onClick:function(){s(!n)},children:"Click me"}),n&&Object(c.jsx)("span",{className:p.a.buttonsText,children:"Button do"})]}),b&&Object(c.jsxs)("div",{className:p.a.textStandItem,children:[Object(c.jsx)(S,{onChange:function(t){u(t.currentTarget.value)}}),j]}),Object(c.jsx)(T,{onChange:function(t){h(t.currentTarget.checked)}})]})},I=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Password Recovery"})})},P=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"New Password"})})},H=n(22),K=n.n(H),L=function(){return Object(c.jsx)("div",{className:K.a.noFoundContainer,children:Object(c.jsx)("h1",{className:K.a.notFound,children:"NotFound"})})},M="/login",J="/profile",R="/test_stand",G="/registration",q="/new_password",A="/password_recovery",D=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(x,{})}}),Object(c.jsx)(h.a,{path:G,render:function(){return Object(c.jsx)(O,{})}}),Object(c.jsx)(h.a,{path:J,render:function(){return Object(c.jsx)(x,{})}}),Object(c.jsx)(h.a,{path:M,render:function(){return Object(c.jsx)(f,{})}}),Object(c.jsx)(h.a,{path:R,render:function(){return Object(c.jsx)(B,{})}}),Object(c.jsx)(h.a,{path:A,render:function(){return Object(c.jsx)(I,{})}}),Object(c.jsx)(h.a,{path:q,render:function(){return Object(c.jsx)(P,{})}}),Object(c.jsx)(h.a,{render:function(){return Object(c.jsx)(L,{})}})]})})},E=function(t){return Object(c.jsxs)("div",{onClick:t.showMenuHandler,className:b.a.navigationContainer,children:[Object(c.jsx)(d.b,{className:b.a.link,to:M,children:"Login"}),Object(c.jsx)(d.b,{className:b.a.link,to:q,children:"New Password"}),Object(c.jsx)(d.b,{className:b.a.link,to:A,children:"Password recovery"}),Object(c.jsx)(d.b,{className:b.a.link,to:J,children:"Profile"}),Object(c.jsx)(d.b,{className:b.a.link,to:G,children:"Registration"}),Object(c.jsx)(d.b,{className:b.a.link,to:R,children:"Test stand"})]})},Q=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],r=function(){s(!n)};return Object(c.jsxs)("div",{className:u.a.headerContainer,children:[Object(c.jsx)("h2",{onClick:r,className:u.a.menu,children:"Menu"}),n&&Object(c.jsx)(E,{showMenuHandler:r})]})};var V=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(Q,{}),Object(c.jsx)(D,{})]})})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))},Z=n(31),z=n(16),U=Object(z.b)({login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}},newPass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}},recoverPass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}},profile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}},registration:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}},testStand:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"":default:return t}}}),W=Object(z.c)(U);o.a.render(Object(c.jsx)(Z.a,{store:W,children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(V,{})})}),document.getElementById("root")),X()},9:function(t,e,n){t.exports={navigationContainer:"Navigation_navigationContainer__2gGBI",link:"Navigation_link__1fVT3"}}},[[44,1,2]]]);
//# sourceMappingURL=main.81b81c92.chunk.js.map