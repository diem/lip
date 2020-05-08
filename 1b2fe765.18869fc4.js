(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return f}));var a=r(1),n=r(6),c=(r(0),r(148)),l=r(155),i=r(161),o={id:"info-lips",title:"Info LIPs",sidebar_label:"Info",title_toc_label:"Intro"},s={id:"info-lips",title:"Info LIPs",description:"import {LIP_TYPE, LIP_STATUS} from '../src/enums';",source:"@site/all-docs__GENERATED/info-lips.mdx",permalink:"/info-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/info-lips.mdx",sidebar_label:"Info",sidebar:"main",previous:{title:"Process LIPs",permalink:"/process-lips"}},u=[l.LIP_TYPE.INFORMATIONAL],p=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],d={rightToc:p};function f(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",{className:"description"},"Informational LIPs describe a Libra design issue, or provide general guidelines or information to the Libra community, but do not propose a material change or addition to the LPN. Informational LIPs do not necessarily represent Libra community consensus or a recommendation, so users and implementers are free to ignore Informational LIPs or follow their advice."),Object(c.b)("h2",{id:"draft"},"Draft"),Object(c.b)(i.a,{status:l.LIP_STATUS.DRAFT,types:u,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"last-call"},"Last Call"),Object(c.b)(i.a,{status:l.LIP_STATUS.LAST_CALL,types:u,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"accepted"},"Accepted"),Object(c.b)(i.a,{status:l.LIP_STATUS.ACCEPTED,types:u,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"final"},"Final"),Object(c.b)(i.a,{status:l.LIP_STATUS.FINAL,types:u,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"rejected"},"Rejected"),Object(c.b)(i.a,{status:l.LIP_STATUS.REJECTED,types:u,mdxType:"LIPTable"}))}f.isMDXComponent=!0},146:function(e,t,r){"use strict";var a=r(0),n=r(35);t.a=function(){return Object(a.useContext)(n.a)}},147:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(146);function n(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},148:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return r?n.a.createElement(m,i({ref:t},s,{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},155:function(e,t){t.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},t.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},161:function(e,t,r){"use strict";r(12);var a=r(0),n=r.n(a),c=r(8),l=r.n(c),i=r(146),o=r(147),s=r(162),u=r(155),p=r(107),d=r.n(p);const f=({author:e,num:t,title:r})=>{const{siteConfig:{themeConfig:a}}=Object(i.a)();return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:Object(o.a)("/lip-"+t)},t)),n.a.createElement("td",null,r),n.a.createElement("td",null,n.a.createElement("a",{href:"https://github.com/"+e,target:"_blank"},e)))},m=({status:e,title:t,types:r})=>{const a=((e,t)=>t.reduce((t,r)=>t.concat(s[r][e]),[]).sort((e,t)=>e.lip<t.lip?1:-1))(e,r);return n.a.createElement("table",{className:d.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Number"),n.a.createElement("th",{className:d.a.title},"Title"),n.a.createElement("th",null,"Author(s)"))),n.a.createElement("tbody",null,a.map(({lip:e,author:t,title:r})=>n.a.createElement(f,{author:t,key:e,num:e,title:r}))))};m.propTypes={status:l.a.oneOf(Object.values(u.LIP_STATUS)).isRequired,types:l.a.arrayOf(l.a.oneOf(Object.values(u.LIP_TYPE)))},m.defaultProps={types:Object.values(u.LIP_TYPE)},t.a=m},162:function(e){e.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","author":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);