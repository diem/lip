(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{165:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return f})),r.d(e,"default",(function(){return d}));var n=r(1),a=r(9),c=(r(24),r(19),r(20),r(80),r(0),r(189)),l=r(200),i=r(208),o={id:"all-lips",title:"All LIPs"},u={id:"all-lips",title:"All LIPs",description:"import {LIP_TYPE, LIP_STATUS} from '../src/enums';",source:"@site/all-docs__GENERATED/all-lips.mdx",permalink:"/all-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/all-lips.mdx"},s=Object.values(l.LIP_TYPE),f=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],p={rightToc:f};function d(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"draft"},"Draft"),Object(c.b)(i.a,{status:l.LIP_STATUS.DRAFT,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"last-call"},"Last Call"),Object(c.b)(i.a,{status:l.LIP_STATUS.LAST_CALL,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"accepted"},"Accepted"),Object(c.b)(i.a,{status:l.LIP_STATUS.ACCEPTED,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"final"},"Final"),Object(c.b)(i.a,{status:l.LIP_STATUS.FINAL,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"rejected"},"Rejected"),Object(c.b)(i.a,{status:l.LIP_STATUS.REJECTED,types:s,mdxType:"LIPTable"}))}d.isMDXComponent=!0},187:function(t,e,r){"use strict";var n=r(0),a=r(53);e.a=function(){return Object(n.useContext)(a.a)}},188:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(194);var n=r(187);function a(t){var e=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?r+t.slice(1):r+t}},189:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),s=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i({},e,{},t)),r},f=function(t){var e=s(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,c=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return r?a.a.createElement(m,i({ref:e},u,{components:r})):a.a.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var u=2;u<c;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},194:function(t,e,r){"use strict";var n=r(13),a=r(25),c=r(195),l="".startsWith;n(n.P+n.F*r(196)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return l?l.call(e,n,r):e.slice(r,r+n.length)===n}})},195:function(t,e,r){var n=r(81),a=r(26);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(t))}},196:function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(a){}}return!0}},200:function(t,e){e.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},e.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},202:function(t,e,r){"use strict";var n=r(13),a=r(28),c=r(27),l=r(14),i=[].sort,o=[1,2,3];n(n.P+n.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!r(203)(i)),"Array",{sort:function(t){return void 0===t?i.call(c(this)):i.call(c(this),a(t))}})},203:function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},208:function(t,e,r){"use strict";r(24),r(19),r(20),r(80),r(202);var n=r(0),a=r.n(n),c=r(12),l=r.n(c),i=r(187),o=r(188),u=r(209),s=r(200),f=r(147),p=r.n(f),d=function(t){var e=t.author,r=t.num,n=t.title;Object(i.a)().siteConfig.themeConfig;return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:Object(o.a)("/lip-"+r)},r)),a.a.createElement("td",null,n),a.a.createElement("td",null,a.a.createElement("a",{href:"https://github.com/"+e,target:"_blank"},e)))},m=function(t){var e=t.status,r=(t.title,function(t,e){return e.reduce((function(e,r){return e.concat(u[r][t])}),[]).sort((function(t,e){return t.lip<e.lip?1:-1}))}(e,t.types));return a.a.createElement("table",{className:p.a.table},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Number"),a.a.createElement("th",{className:p.a.title},"Title"),a.a.createElement("th",null,"Author(s)"))),a.a.createElement("tbody",null,r.map((function(t){var e=t.lip,r=t.author,n=t.title;return a.a.createElement(d,{author:r,key:e,num:e,title:n})}))))};m.propTypes={status:l.a.oneOf(Object.values(s.LIP_STATUS)).isRequired,types:l.a.arrayOf(l.a.oneOf(Object.values(s.LIP_TYPE)))},m.defaultProps={types:Object.values(s.LIP_TYPE)},e.a=m},209:function(t){t.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","author":"Kevin Hurley (@kphfb), Dmitry Pimenov","status":"draft","type":"informational","created":"05/29/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","author":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);