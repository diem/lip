(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{167:function(e,a,t){"use strict";t.r(a);t(224);var n=t(0),r=t.n(n),l=t(199),c=t(216),o=t(193);a.default=function(e){var a=e.metadata,t=e.items,n=a.allTagsPath,i=a.name,m=a.count;return r.a.createElement(l.b,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"'},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,m," ",function(e,a){return e>1?a+"s":a}(m,"post"),' tagged with "',i,'"'),r.a.createElement(o.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return he}));var n=t(0),r=t.n(n),l=t(205),c=t(192),o=t(187),i=t(188),m=t(213),s=t(212),u=t(206),p=t(191),E=t(12),v=t.n(E),d=(t(24),t(19),t(20),t(80),t(190)),f=t.n(d),g=t(134),h=t.n(g),b={DEFAULT:"default",CTA:"cta"},N=function(e){var a,t=e.isExternal,n=e.label,l=e.to,o=e.type,m=Object(c.a)(l)?Object(i.a)(l):l;return r.a.createElement("li",{className:f()(h.a.root,h.a[o],(a={},a[h.a.active]=Object(c.a)(m),a))},r.a.createElement("a",{href:m,target:t?"_blank":"_self"},n))};N.propTypes={isExternal:v.a.bool,label:v.a.string.isRequired,type:v.a.oneOf(Object.values(b)),to:v.a.string.isRequired},N.defaultProps={isExternal:!1,type:b.DEFAULT};var k=N,y=t(135),_=t.n(y),O=t(133),P=t.n(O),j=function(){var e=Object(o.a)().siteConfig.themeConfig.navbar,a=e.cornerLink,t=e.primaryLinks,n=e.logo;return r.a.createElement("div",{className:_.a.root},r.a.createElement("a",{className:P.a.logo,href:n.href},r.a.createElement("img",{alt:n.alt,src:Object(i.a)(n.src)})),r.a.createElement("ul",{className:_.a.right},t.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(k,{key:t,isExternal:a,label:t,to:n})})),r.a.createElement(k,{className:_.a["corner-link"],label:a.label,to:a.href,type:b.CTA})))},M=t(136),w=t.n(M),C=function(e){var a,t=e.children,l=e.links;e.onClick;return Object(n.useEffect)((function(){a.addEventListener("click",(function(e){e.stopPropagation()}))})),r.a.createElement("div",{className:w.a.root,ref:function(e){return a=e}},r.a.createElement("div",{className:w.a.menu},l.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(k,{key:t,isExternal:a,label:t,to:n})})),t))};C.propTypes={links:v.a.array.isRequired};var T=C,L=t(137),x=t.n(L),I=function(e){var a,t=e.cb,l=e.closeIcon,c=e.isOpen,o=e.openIcon,i=Object(n.useRef)(null);return i.current=c,Object(n.useEffect)((function(){a.addEventListener("click",(function(e){i.current||(e.stopPropagation(),t())}))}),[]),r.a.createElement("img",{className:x.a.root,ref:function(e){return a=e},src:c?l:o})},S=t(138),R=t.n(S),B=function(e){var a=e.activePopupMenu,t=e.setPopupMenu,n=Object(o.a)().siteConfig.themeConfig.navbar,l=n.cornerLink,c=n.primaryLinks,m=n.logo;return r.a.createElement("div",{className:R.a.root},r.a.createElement("div",{className:R.a.mainContainer},r.a.createElement(I,{cb:function(){t("primary")},closeIcon:Object(i.a)("img/close.svg"),isOpen:"primary"===a,openIcon:Object(i.a)("img/vertical-ellipse.svg")}),r.a.createElement("a",{href:m.href},r.a.createElement("img",{alt:m.alt,className:P.a.logo,src:Object(i.a)(m.src)})),r.a.createElement("a",{href:l.href},r.a.createElement("img",{src:Object(i.a)(l.image.src)}))),"primary"===a&&r.a.createElement(T,{links:c}))};B.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var q=B,A=t(139),D=t.n(A),F=function(e){var a=e.activePopupMenu,t=e.setPopupMenu;return r.a.createElement("div",{className:D.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(p.Breakpoint,{medium:!0,down:!0},r.a.createElement(q,{activePopupMenu:a,setPopupMenu:t})),r.a.createElement(p.Breakpoint,{large:!0,up:!0},r.a.createElement(j,null))))};F.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var z=F,J=(t(197),t(198)),H=t(140),U=t.n(H),G=function(){return r.a.createElement("div",{className:U.a.root},r.a.createElement("span",{className:U.a.primary},r.a.createElement("b",null,"Developers")),r.a.createElement("span",{className:U.a.divider}," / "),r.a.createElement("span",{className:U.a.secondary},"Governance"))},V=t(141),K=t.n(V),Q=function(){var e=Object(o.a)().siteConfig.themeConfig,a=Object(n.useState)(!1),t=a[0],l=a[1],c=e.navbar.secondaryLinks;return r.a.createElement("div",{className:K.a.root},r.a.createElement(G,null),r.a.createElement("div",{className:K.a.right},c.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(k,{key:t,isExternal:a,label:t,to:n})})),r.a.createElement("div",{className:K.a.search},r.a.createElement(J.a,{handleSearchBarToggle:l,isSearchBarExpanded:t}))))},W=t(142),X=t.n(W),Y=function(e){var a=e.activePopupMenu,t=e.setPopupMenu,l=Object(o.a)().siteConfig.themeConfig,c=Object(n.useState)(!1),m=c[0],s=c[1],u=l.navbar,p=(u.cornerLink,u.secondaryLinks);u.logo;return r.a.createElement("div",null,r.a.createElement("div",{className:X.a.mainContainer},r.a.createElement(G,null),r.a.createElement(I,{cb:function(){t("secondary")},closeIcon:Object(i.a)("img/chevron-pressed.svg"),isOpen:"secondary"===a,openIcon:Object(i.a)("img/chevron-down.svg")})),"secondary"===a&&r.a.createElement(T,{links:p,onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:X.a.search},r.a.createElement(J.a,{handleSearchBarToggle:s,isSearchBarExpanded:m}))))};Y.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var Z=Y,$=t(143),ee=t.n($),ae=function(e){var a=e.activePopupMenu,t=e.setPopupMenu;return r.a.createElement("div",{className:ee.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(p.Breakpoint,{medium:!0,down:!0},r.a.createElement(Z,{activePopupMenu:a,setPopupMenu:t})),r.a.createElement(p.Breakpoint,{large:!0,up:!0},r.a.createElement(Q,null))))};ae.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var te=ae,ne=t(144),re=t.n(ne);Object(p.setDefaultBreakpoints)([{small:parseInt(re.a["small-mobile-breakpoint-size"])},{medium:parseInt(re.a["medium-tablet-breakpoint-size"])},{large:parseInt(re.a["large-tablet-breakpoint-size"])},{xlarge:parseInt(re.a["larget-desktop-breakpoint-size"])}]);var le=function(){var e=Object(n.useState)(null),a=e[0],t=e[1],l=function(e){t(e),null!==e&&document.querySelector("body").addEventListener("click",(function(){t(null)}),{once:!0})};return r.a.createElement(p.BreakpointProvider,null,r.a.createElement("nav",{className:P.a.root},r.a.createElement(z,{activePopupMenu:a,setPopupMenu:l}),r.a.createElement(te,{activePopupMenu:a,setPopupMenu:l})))},ce=t(1),oe=t(9),ie=t(193),me=t(145),se=t.n(me),ue=t(207),pe=t(211);function Ee(e){var a=e.to,t=e.href,n=e.label,l=Object(oe.a)(e,["to","href","label"]),c=Object(i.a)(a);return r.a.createElement(ie.a,Object(ce.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var ve=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{alt:t,className:f()("footer__logo",se.a.logo),src:a})},de=function(e){var a=e.children,t=e.title;return r.a.createElement("div",{className:f()("col footer__col",se.a.linkSection)},r.a.createElement("h4",{className:f()("footer__title",se.a.title)},t),r.a.createElement("ul",{className:"footer__items"},a))},fe=function(e){var a=e.items,t=e.title;return r.a.createElement(de,{title:t},a.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Ee,e))})))};var ge=function(){var e=Object(o.a)().siteConfig,a=void 0===e?{}:e,t=a.themeConfig,n=void 0===t?{}:t,l=a.projectName,c=n.footer,m=c||{},s=m.copyright,u=m.links,p=void 0===u?[]:u,E=m.logo,v=void 0===E?{}:E,d=m.social,g=void 0===d?{}:d,h=g.twitterHandle,b=g.githubRepo,N=Object(i.a)(v.src);if(!c)return null;for(var k=[],y=0;y<p.length;y+=2)k.push(r.a.createElement("div",{key:y,className:se.a.linkColumn},r.a.createElement(fe,{items:p[y].items,title:p[y].title}),p[y+1]&&r.a.createElement(fe,{items:p[y+1].items,title:p[y+1].title})));return r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===c.style})},r.a.createElement("div",{className:"container"},p&&p.length>0&&r.a.createElement("div",{className:"row footer__links"},v.href?r.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:se.a.footerLogoLink},r.a.createElement(ve,{alt:v.alt,url:N})):r.a.createElement(ve,{alt:v.alt,url:N}),k,r.a.createElement("div",{className:se.a.linkColumn},r.a.createElement(de,{title:"Social"},h&&r.a.createElement("li",{className:se.a.socialLink},r.a.createElement(ue.a,{"aria-label":"Star "+l+" on GitHub",className:se.a.github,"data-show-count":"true",href:b},l)),b&&r.a.createElement("li",{className:se.a.socialLink},r.a.createElement(pe.a,{className:se.a.twitter,options:{showCount:!1},screenName:h}))))),(v||s)&&r.a.createElement("div",{className:f()("text--center",se.a.copyright)},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}))))},he=(t(146),"nav-pusher");a.b=function(e){var a=Object(o.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,p=t.title,E=t.themeConfig.image,v=t.url,d=e.children,f=e.title,g=e.noFooter,h=e.description,b=e.image,N=e.keywords,k=e.permalink,y=e.version,_=f?f+" | "+p:p,O=b||E,P=v+Object(i.a)(O);Object(c.a)(O)||(P=O);var j=Object(i.a)(n);return r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:j}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),y&&r.a.createElement("meta",{name:"docsearch:version",content:y}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:P}),O&&r.a.createElement("meta",{property:"twitter:image",content:P}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),k&&r.a.createElement("meta",{property:"og:url",content:v+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(u.a,null),r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("div",{className:"nav-spacer"})),r.a.createElement("div",{className:he},r.a.createElement("div",{className:"main-wrapper width-wrapper"},d),!g&&r.a.createElement(ge,null))))}},216:function(e,a,t){"use strict";t(83);var n=t(0),r=t.n(n),l=t(190),c=t.n(l),o=t(189),i=t(193),m=t(223),s=t(148),u=t.n(s),p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,E=e.children,v=e.frontMatter,d=e.metadata,f=e.truncated,g=e.isBlogPostPage,h=void 0!==g&&g,b=d.date,N=d.permalink,k=d.tags,y=v.author,_=v.title,O=v.author_url||v.authorURL,P=v.author_title||v.authorTitle,j=v.author_image_url||v.authorImageURL;return r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=b.substring(0,10).split("-"),n=t[0],l=p[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},h?_:r.a.createElement(i.a,{to:N},_)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-vert--md"},j&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:j,alt:y})),r.a.createElement("div",{className:"avatar__intro"},y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},y)),r.a.createElement("small",{className:"avatar__subtitle"},P)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:m.a},E)),(k.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:d.permalink,"aria-label":"Read more about "+_},r.a.createElement("strong",null,"Read More")))))}},224:function(e,a,t){var n=t(29).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);