(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{154:function(e,a,t){"use strict";t.d(a,"a",(function(){return fe}));var n=t(0),r=t.n(n),l=t(158),c=t(151),o=t(146),s=t(147),i=t(166),m=t(165),p=t(159),u=t(150),E=t(8),d=t.n(E),g=(t(12),t(149)),v=t.n(g),f=t(94),b=t.n(f);const h={DEFAULT:"default",CTA:"cta"},k=({isExternal:e,label:a,to:t,type:n})=>{const l=Object(c.a)(t)?Object(s.a)(t):t;return r.a.createElement("li",{className:v()(b.a.root,b.a[n],{[b.a.active]:Object(c.a)(l)})},r.a.createElement("a",{href:l,target:e?"_blank":"_self"},a))};k.propTypes={isExternal:d.a.bool,label:d.a.string.isRequired,type:d.a.oneOf(Object.values(h)),to:d.a.string.isRequired},k.defaultProps={isExternal:!1,type:h.DEFAULT};var N=k,y=t(95),O=t.n(y),j=t(93),P=t.n(j);var w=()=>{const{siteConfig:{themeConfig:e}}=Object(o.a)(),{navbar:a}=e,{cornerLink:t,primaryLinks:n,logo:l}=a;return r.a.createElement("div",{className:O.a.root},r.a.createElement("a",{className:P.a.logo,href:l.href},r.a.createElement("img",{alt:l.alt,src:Object(s.a)(l.src)})),r.a.createElement("ul",{className:O.a.right},n.map(({isExternal:e,label:a,to:t})=>r.a.createElement(N,{key:a,isExternal:e,label:a,to:t})),r.a.createElement(N,{className:O.a["corner-link"],label:t.label,to:t.href,type:h.CTA})))},_=t(96),M=t.n(_);const C=({children:e,links:a,onClick:t})=>{let l;return Object(n.useEffect)(()=>{l.addEventListener("click",e=>{e.stopPropagation()})}),r.a.createElement("div",{className:M.a.root,ref:e=>l=e},r.a.createElement("div",{className:M.a.menu},a.map(({isExternal:e,label:a,to:t})=>r.a.createElement(N,{key:a,isExternal:e,label:a,to:t})),e))};C.propTypes={links:d.a.array.isRequired};var L=C,x=t(97),T=t.n(x);var I=({cb:e,closeIcon:a,isOpen:t,openIcon:l})=>{let c;const o=Object(n.useRef)(null);return o.current=t,Object(n.useEffect)(()=>{c.addEventListener("click",a=>{o.current||(a.stopPropagation(),e())})},[]),r.a.createElement("img",{className:T.a.root,ref:e=>c=e,src:t?a:l})},S=t(98),B=t.n(S);const R=({activePopupMenu:e,setPopupMenu:a})=>{const{siteConfig:{themeConfig:t}}=Object(o.a)(),{navbar:n}=t,{cornerLink:l,primaryLinks:c,logo:i}=n;return r.a.createElement("div",{className:B.a.root},r.a.createElement("div",{className:B.a.mainContainer},r.a.createElement(I,{cb:()=>{a("primary")},closeIcon:Object(s.a)("img/close.svg"),isOpen:"primary"===e,openIcon:Object(s.a)("img/vertical-ellipse.svg")}),r.a.createElement("a",{href:i.href},r.a.createElement("img",{alt:i.alt,className:P.a.logo,src:Object(s.a)(i.src)})),r.a.createElement("a",{href:l.href},r.a.createElement("img",{src:Object(s.a)(l.image.src)}))),"primary"===e&&r.a.createElement(L,{links:c}))};R.propTypes={activePopupMenu:d.a.string,setPopupMenu:d.a.func.isRequired};var q=R,F=t(99),z=t.n(F);const A=({activePopupMenu:e,setPopupMenu:a})=>r.a.createElement("div",{className:z.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(u.Breakpoint,{medium:!0,down:!0},r.a.createElement(q,{activePopupMenu:e,setPopupMenu:a})),r.a.createElement(u.Breakpoint,{large:!0,up:!0},r.a.createElement(w,null))));A.propTypes={activePopupMenu:d.a.string,setPopupMenu:d.a.func.isRequired};var D=A,H=t(153),U=t(100),$=t.n(U);var G=()=>r.a.createElement("div",{className:$.a.root},r.a.createElement("span",{className:$.a.primary},r.a.createElement("b",null,"Developers")),r.a.createElement("span",{className:$.a.divider}," / "),r.a.createElement("span",{className:$.a.secondary},"Governance")),J=t(101),W=t.n(J);var K=()=>{const{siteConfig:{themeConfig:e}}=Object(o.a)(),[a,t]=Object(n.useState)(!1),{navbar:l}=e,{secondaryLinks:c}=l;return r.a.createElement("div",{className:W.a.root},r.a.createElement(G,null),r.a.createElement("div",{className:W.a.right},c.map(({isExternal:e,label:a,to:t})=>r.a.createElement(N,{key:a,isExternal:e,label:a,to:t})),r.a.createElement("div",{className:W.a.search},r.a.createElement(H.a,{handleSearchBarToggle:t,isSearchBarExpanded:a}))))},Q=t(102),V=t.n(Q);const X=({activePopupMenu:e,setPopupMenu:a})=>{const{siteConfig:{themeConfig:t}}=Object(o.a)(),[l,c]=Object(n.useState)(!1),{navbar:i}=t,{cornerLink:m,secondaryLinks:p,logo:u}=i;return r.a.createElement("div",null,r.a.createElement("div",{className:V.a.mainContainer},r.a.createElement(G,null),r.a.createElement(I,{cb:()=>{a("secondary")},closeIcon:Object(s.a)("img/chevron-pressed.svg"),isOpen:"secondary"===e,openIcon:Object(s.a)("img/chevron-down.svg")})),"secondary"===e&&r.a.createElement(L,{links:p,onClick:e=>e.stopPropagation()},r.a.createElement("div",{className:V.a.search},r.a.createElement(H.a,{handleSearchBarToggle:c,isSearchBarExpanded:l}))))};X.propTypes={activePopupMenu:d.a.string,setPopupMenu:d.a.func.isRequired};var Y=X,Z=t(103),ee=t.n(Z);const ae=({activePopupMenu:e,setPopupMenu:a})=>r.a.createElement("div",{className:ee.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(u.Breakpoint,{medium:!0,down:!0},r.a.createElement(Y,{activePopupMenu:e,setPopupMenu:a})),r.a.createElement(u.Breakpoint,{large:!0,up:!0},r.a.createElement(K,null))));ae.propTypes={activePopupMenu:d.a.string,setPopupMenu:d.a.func.isRequired};var te=ae,ne=t(104),re=t.n(ne);Object(u.setDefaultBreakpoints)([{small:parseInt(re.a["small-mobile-breakpoint-size"])},{medium:parseInt(re.a["medium-tablet-breakpoint-size"])},{large:parseInt(re.a["large-tablet-breakpoint-size"])},{xlarge:parseInt(re.a["larget-desktop-breakpoint-size"])}]);var le=()=>{const[e,a]=Object(n.useState)(null),t=e=>{a(e),null!==e&&document.querySelector("body").addEventListener("click",(function(){a(null)}),{once:!0})};return r.a.createElement(u.BreakpointProvider,null,r.a.createElement("nav",{className:P.a.root},r.a.createElement(D,{activePopupMenu:e,setPopupMenu:t}),r.a.createElement(te,{activePopupMenu:e,setPopupMenu:t})))},ce=t(1),oe=t(152),se=t(105),ie=t.n(se),me=t(160),pe=t(164);function ue({to:e,href:a,label:t,...n}){const l=Object(s.a)(e);return r.a.createElement(oe.a,Object(ce.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},n),t)}const Ee=({url:e,alt:a})=>r.a.createElement("img",{alt:a,className:v()("footer__logo",ie.a.logo),src:e}),de=({children:e,title:a})=>r.a.createElement("div",{className:v()("col footer__col",ie.a.linkSection)},r.a.createElement("h4",{className:v()("footer__title",ie.a.title)},a),r.a.createElement("ul",{className:"footer__items"},e)),ge=({items:e,title:a})=>r.a.createElement(de,{title:a},e.map((e,a)=>e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(ue,e))));var ve=function(){const e=Object(o.a)(),{siteConfig:a={}}=e,{themeConfig:t={},projectName:n}=a,{footer:l}=t,{copyright:c,links:i=[],logo:m={},social:p={}}=l||{},{twitterHandle:u,githubRepo:E}=p,d=Object(s.a)(m.src);if(!l)return null;const g=[];for(let o=0;o<i.length;o+=2)g.push(r.a.createElement("div",{key:o,className:ie.a.linkColumn},r.a.createElement(ge,{items:i[o].items,title:i[o].title}),i[o+1]&&r.a.createElement(ge,{items:i[o+1].items,title:i[o+1].title})));return r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===l.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:ie.a.footerLogoLink},r.a.createElement(Ee,{alt:m.alt,url:d})):r.a.createElement(Ee,{alt:m.alt,url:d}),g,r.a.createElement("div",{className:ie.a.linkColumn},r.a.createElement(de,{title:"Social"},u&&r.a.createElement("li",{className:ie.a.socialLink},r.a.createElement(me.a,{"aria-label":`Star ${n} on GitHub`,className:ie.a.github,"data-show-count":"true",href:E},n)),E&&r.a.createElement("li",{className:ie.a.socialLink},r.a.createElement(pe.a,{className:ie.a.twitter,options:{showCount:!1},screenName:u}))))),(m||c)&&r.a.createElement("div",{className:v()("text--center",ie.a.copyright)},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))))};t(106);const fe="nav-pusher";a.b=function(e){const{siteConfig:a={}}=Object(o.a)(),{favicon:t,title:n,themeConfig:{image:u},url:E}=a,{children:d,title:g,noFooter:v,description:f,image:b,keywords:h,permalink:k,version:N}=e,y=g?`${g} | ${n}`:n,O=b||u;let j=E+Object(s.a)(O);Object(c.a)(O)||(j=O);const P=Object(s.a)(t);return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),t&&r.a.createElement("link",{rel:"shortcut icon",href:P}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),N&&r.a.createElement("meta",{name:"docsearch:version",content:N}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:j}),O&&r.a.createElement("meta",{property:"twitter:image",content:j}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),k&&r.a.createElement("meta",{property:"og:url",content:E+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p.a,null),r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("div",{className:"nav-spacer"})),r.a.createElement("div",{className:fe},r.a.createElement("div",{className:"main-wrapper width-wrapper"},d),!v&&r.a.createElement(ve,null))))}},179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(154);a.default=function(){return r.a.createElement(l.b,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);