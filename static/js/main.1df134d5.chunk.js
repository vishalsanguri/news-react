(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,c,s){},,,,,,,function(e,c,s){},,function(e,c,s){},function(e,c,s){"use strict";s.r(c);var t=s(1),i=s.n(t),n=s(5),a=s.n(n),r=s(2),d=(s(10),s(0));function l(e){var c=e.setField;return Object(d.jsxs)("div",{className:"headerdiv",children:[Object(d.jsx)("div",{className:"logodiv"}),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"categorydiv",style:{listStyle:"none"},children:[Object(d.jsx)("li",{onClick:function(){c("cricket")},children:"CRICKET"}),Object(d.jsx)("li",{onClick:function(){c("basketball")},children:"BASKET BALL"}),Object(d.jsx)("li",{onClick:function(){c("soccer")},children:"SOCCER"}),Object(d.jsx)("li",{onClick:function(){c("tennis")},children:"TENNIS"})]})})]})}s(3);var o=document.getElementById("root");var j=function(e){var c,s="pending",t=e.then((function(e){s="sucess",c=e}));return{read:function(){if("pending"===s)throw t;return c}}},v=function(){var e=fetch("https://livescore6.p.rapidapi.com/news/list?category=basketball",{method:"GET",headers:{"x-rapidapi-host":"livescore6.p.rapidapi.com","x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"}}).then((function(e){if(e.ok){if(e.ok)return e.json()}else o.innerHTML="<div>error occured</div>"})).catch((function(e){console.log("vishal error :"+e)}));return{user:j(e)}}();function b(){var e=Object(t.useState)(v.user.read().arts),c=Object(r.a)(e,1)[0];return Object(d.jsx)("div",{className:"bodydiv",children:c.map((function(e,c){return Object(d.jsxs)("div",{className:"infodiv",children:[Object(d.jsx)("div",{className:"headingdiv",children:e.des}),Object(d.jsxs)("div",{className:"contentdiv",children:[Object(d.jsx)("div",{className:"imagediv",children:Object(d.jsx)("img",{className:"photo",src:e.img,alt:"img-unavailable"})}),Object(d.jsx)("div",{className:"textdiv",children:e.con})]})]},c)}))})}var h=function(e){var c,s="pending",t=e.then((function(e){s="sucess",c=e})).catch((function(e){s="error",c=e}));return{read:function(){if("pending"===s)throw t;if("error"===s)throw c;return c}}},u=function(){var e=fetch("https://livescore6.p.rapidapi.com/news/list?category=cricket",{method:"GET",headers:{"x-rapidapi-host":"livescore6.p.rapidapi.com","x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"}}).then((function(e){return e.json()}));return{user:h(e)}}();function m(){console.log(u.user.read().arts);var e=Object(t.useState)(u.user.read().arts),c=Object(r.a)(e,1)[0];return Object(d.jsx)("div",{className:"bodydiv",children:c.map((function(e,c){return Object(d.jsxs)("div",{className:"infodiv",children:[Object(d.jsx)("div",{className:"headingdiv",children:e.des}),Object(d.jsxs)("div",{className:"contentdiv",children:[Object(d.jsx)("div",{className:"imagediv",children:Object(d.jsx)("img",{className:"photo",src:e.img,alt:"img-unavailable"})}),Object(d.jsx)("div",{className:"textdiv",children:e.con})]})]},c)}))})}var x=function(e){var c,s="pending",t=e.then((function(e){s="sucess",c=e})).catch((function(e){s="error",c=e}));return{read:function(){if("pending"===s)throw t;if("error"===s)throw c;return c}}},O=function(){var e=fetch("https://livescore6.p.rapidapi.com/news/list?category=soccer",{method:"GET",headers:{"x-rapidapi-host":"livescore6.p.rapidapi.com","x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"}}).then((function(e){return e.json()}));return{user:x(e)}}();function f(){console.log(O.user.read().arts);var e=Object(t.useState)(O.user.read().arts),c=Object(r.a)(e,1)[0];return Object(d.jsx)("div",{className:"bodydiv",children:c.map((function(e,c){return Object(d.jsxs)("div",{className:"infodiv",children:[Object(d.jsx)("div",{className:"headingdiv",children:e.des}),Object(d.jsxs)("div",{className:"contentdiv",children:[Object(d.jsx)("div",{className:"imagediv",children:Object(d.jsx)("img",{className:"photo",src:e.img,alt:"img-unavailable"})}),Object(d.jsx)("div",{className:"textdiv",children:e.con})]})]},c)}))})}var p=function(e){var c,s="pending",t=e.then((function(e){s="sucess",c=e})).catch((function(e){s="error",c=e}));return{read:function(){if("pending"===s)throw t;if("error"===s)throw c;return c}}},g=function(){var e=fetch("https://livescore6.p.rapidapi.com/news/list?category=tennis",{method:"GET",headers:{"x-rapidapi-host":"livescore6.p.rapidapi.com","x-rapidapi-key":"8a5a853fb1msh9a4c41d3be37167p13dd35jsn9d88768cfa7d"}}).then((function(e){return e.json()}));return{user:p(e)}}();function N(){console.log(g.user.read().arts);var e=Object(t.useState)(g.user.read().arts),c=Object(r.a)(e,1)[0];return Object(d.jsx)("div",{className:"bodydiv",children:c.map((function(e,c){return Object(d.jsxs)("div",{className:"infodiv",children:[Object(d.jsx)("div",{className:"headingdiv",children:e.des}),Object(d.jsxs)("div",{className:"contentdiv",children:[Object(d.jsx)("div",{className:"imagediv",children:Object(d.jsx)("img",{className:"photo",src:e.img,alt:"img-unavailable"})}),Object(d.jsx)("div",{className:"textdiv",children:e.con})]})]},c)}))})}s(12);function k(){var e=Object(t.useState)("cricket"),c=Object(r.a)(e,2),s=c[0],i=c[1];return"cricket"===s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{setField:i}),Object(d.jsx)(t.Suspense,{fallback:Object(d.jsx)(y,{}),children:Object(d.jsx)(m,{})})]}):"tennis"===s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{setField:i}),Object(d.jsx)(t.Suspense,{fallback:Object(d.jsx)(y,{}),children:Object(d.jsx)(N,{})})]}):"soccer"===s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{setField:i}),Object(d.jsx)(t.Suspense,{fallback:Object(d.jsx)(y,{}),children:Object(d.jsx)(f,{})})]}):"basketball"===s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{setField:i}),Object(d.jsx)(t.Suspense,{fallback:Object(d.jsx)(y,{}),children:Object(d.jsx)(b,{})})]}):void 0}function y(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"bodydiv1",children:[1,2,3,4].map((function(e,c){return Object(d.jsxs)("div",{className:"infodiv1",children:[Object(d.jsxs)("div",{className:"headingdiv1",children:[Object(d.jsx)("div",{className:"skeleton-text1"}),Object(d.jsx)("div",{className:"hoverclass"})]}),Object(d.jsxs)("div",{className:"contentdiv1",children:[Object(d.jsx)("div",{className:"imagediv1",children:Object(d.jsx)("div",{className:"hoverclass"})}),Object(d.jsxs)("div",{className:"textdiv1",children:[Object(d.jsx)("div",{className:"skeleton-text"}),Object(d.jsx)("div",{className:"skeleton-text"}),Object(d.jsx)("div",{className:"skeleton-text"}),Object(d.jsx)("div",{className:"skeleton-text"}),Object(d.jsx)("div",{className:"hoverclass1"})]})]})]},c)}))})})}a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.1df134d5.chunk.js.map