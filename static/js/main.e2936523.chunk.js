(this.webpackJsonpmilitaryservicecountdown=this.webpackJsonpmilitaryservicecountdown||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(13),a=n.n(s),r=(n(24),n(25),n(3)),o=n(6),l=n(49),j=n(1),d=3600,m=86400,u={isPlaying:!0,strokeWidth:6,size:120,trailColor:"#FFFFFF"},h=function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"time",children:t}),Object(j.jsx)("div",{style:{color:"white"},children:e})]})};function b(){var e=Date.now()/1e3,t=Date.parse("March, 01, 2022, 00:00 am")/1e3-e,n=Math.ceil(t/m)*m;return Object(c.useEffect)((function(){var e=Math.floor(t/86400);document.title=e+" days left"})),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{container:!0,spacing:3,justify:"center",alignItems:"center",children:[Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(l.a,{item:!0,md:3,sm:3,xs:12,children:Object(j.jsx)(o.CountdownCircleTimer,Object(r.a)(Object(r.a)({},u),{},{colors:[["#000000"]],duration:n,initialRemainingTime:t,children:function(e){var t=e.elapsedTime;return h("days",(n-t)/m|0)}}))})}),Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(l.a,{item:!0,md:3,sm:3,xs:12,children:Object(j.jsx)(o.CountdownCircleTimer,Object(r.a)(Object(r.a)({},u),{},{colors:[["#000000"]],duration:m,initialRemainingTime:t%m,onComplete:function(e){return[t-e>d]},children:function(e){var t=e.elapsedTime;return h("hours",(m-t)%m/d|0)}}))})}),Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(l.a,{item:!0,md:3,sm:3,xs:12,children:Object(j.jsx)(o.CountdownCircleTimer,Object(r.a)(Object(r.a)({},u),{},{colors:[["#000000"]],duration:d,initialRemainingTime:t%d,onComplete:function(e){return[t-e>60]},children:function(e){var t=e.elapsedTime;return h("minutes",(d-t)%d/60|0)}}))})}),Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(l.a,{item:!0,md:3,sm:3,xs:12,children:Object(j.jsx)(o.CountdownCircleTimer,Object(r.a)(Object(r.a)({},u),{},{colors:[["#000000"]],duration:60,initialRemainingTime:t%60,onComplete:function(e){return[t-e>0]},children:function(e){var t=e.elapsedTime;return h("seconds",60-t|0)}}))})})]})})}var O=n(9);function x(){return Object(j.jsxs)("div",{className:"socialDiv",children:[Object(j.jsx)(O.SocialIcon,{className:"socialIcons",url:"https://github.com/MohamedWSalah",fgColor:"white"}),Object(j.jsx)(O.SocialIcon,{className:"socialIcons",url:"https://www.linkedin.com/in/mohamedsalah47/",fgColor:"white"}),Object(j.jsx)(O.SocialIcon,{className:"socialIcons",url:"https://www.facebook.com/6Moon9",fgColor:"white"})]})}var f=function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.e2936523.chunk.js.map