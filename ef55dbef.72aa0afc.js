(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return v})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return L}));var n=a(1),r=a(9),i=a(0),o=a.n(i),s=a(189),c=a(180),l=a.n(c),p=function(e){var t=e.stages;return o.a.createElement("div",{className:l.a.root},o.a.createElement("div",{className:l.a.stagesContainer},t.map((function(e,a){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement("div",{className:l.a.stage},o.a.createElement("span",{className:l.a.counter},"0",a+1),o.a.createElement("span",{className:l.a.stageName},e)),a+1!==t.length&&o.a.createElement("hr",{className:l.a.divider}))}))))},b=a(188),d=(a(24),a(19),a(20),a(80),a(12)),u=a.n(d),m=a(181),h=a.n(m),f={INLINE_START:"inline-start",DEFAULT:"defalt"},g=function(e){var t=e.src,a=e.type;return o.a.createElement("img",{className:h.a[a],src:t})};g.propTypes={type:u.a.oneOf(Object.values(f)),src:u.a.string.isRequired},g.defaultProps={type:f.DEFAULT};var y=g,O={id:"overview",title:"LIP overview and governance",sidebar_label:"Overview",title_toc_label:"LIP overview and governance"},v={id:"overview",title:"LIP overview and governance",description:"import LipProcessInfographic from '../src/DocComponents/LipProcessInfographic';",source:"@site/all-docs__GENERATED/overview.mdx",permalink:"/overview",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/overview.mdx",sidebar_label:"Overview",sidebar:"main",next:{title:"Standard LIPs",permalink:"/standard-lips"}},j=[{value:"LIP types",id:"lip-types",children:[]},{value:"The LIP process",id:"the-lip-process",children:[]},{value:"What goes into a LIP",id:"what-goes-into-a-lip",children:[]}],I={rightToc:j};function L(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},I,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Libra Improvement Proposals (LIPs) offer the Libra developer community a way to participate in advancing the features and functioning of the Libra payment network (LPN), either by proposing a change or engaging in discussion about a proposal."),Object(s.b)("p",null,"Soon after a full Libra specification is posted to libra.org as the root standard LIP, proposals that  address the core Libra Blockchain protocol, the Move development platform, smart contracts and systems for smart-contract verification, operating standards, APIs, and off-chain mechanisms can be addressed with a LIP. The LIP itself is the design document that describes the proposed change or new feature. As a text file maintained in a versioned repository, it serves as the historical record of decisions made during the approval process."),Object(s.b)("p",null,"The LIP program operates under the governance of the Libra Association, with technical decisions supervised by the Association\u2019s Technical Steering Committee (TSC). Day-to-day technical decisions are made using a framework inspired by standards bodies (such as the W3C and IETF) and open source projects (such as Python, the Linux Foundation, and Apache) to coordinate the work of open source contributors. "),Object(s.b)("p",null,"This process is based on the family of approaches derived from Python\u2019s PEP process. It is supported by a team of Maintainers who are assigned individually to serve as the LIP Manager on an active LIP and who work to build consensus among Libra community members about technical decisions. Additionally, LIP matters are routinely discussed by the Lead Maintainer with the TSC."),Object(s.b)("h2",{id:"lip-types"},"LIP types"),Object(s.b)("p",null,"There are three types of LIP:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Standard LIPs")," describe any change or addition that affects LPN, such as a change to the Libra Blockchain protocol, a change to transaction processing, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using LPN.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Process LIPs")," describe the governance procedures and tools of the Libra project, such as the LIP procedure itself, GitHub plug-ins, and other development tools and guidelines.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Informational LIPs")," describe a Libra project design issue, or provide general guidelines or information to the Libra community, but do not propose a material change or addition to LPN. Informational LIPs do not necessarily represent Libra community consensus or a recommendation, so users and implementers are free to ignore Informational LIPs or follow their advice."))),Object(s.b)("h2",{id:"the-lip-process"},"The LIP process"),Object(s.b)(p,{stages:["IDEA","DRAFT","LAST CALL","ACCEPTED","FINAL"],mdxType:"LipProcessInfographic"}),Object(s.b)("p",null,"Parties involved in the process are the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"LIP author(s)"))," and a designated ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"LIP Manager")),". The Lead Maintainer shall act as the primary LIP Manager and can appoint at any time a delegate Manager to specific LIPs. "),Object(s.b)("p",null,"The formal LIP process will typically (and advisably) begin after the champion of the proposal has already discussed and socialized it with the Libra community (see below for what goes into a LIP). It is comprised of the following steps:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Idea")," \u2013 Authors will socialize their idea with the developer community and Maintainers, possibly by writing a GitHub Issue and getting feedback. If possible (and relevant), authors should include in discussions an implementation to support their proposal."),Object(s.b)("p",{parentName:"li"},"Once the discussion reaches a mature point, the formal LIP process starts with a pull-request to the libra/lips folder. The status field of the document should be \u201cDraft\u201d at this point. A LIP Manager will review/comment/approve/deny the pull-request. "),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/check.svg"),mdxType:"Icon"})," Draft \u2013 If agreeable, LIP Manager will assign the LIP a number (generally the issue or PR number related to the LIP, and ask to rename or move to a folder/file with that number) and approve the pull request. The LIP Manager will not unreasonably deny a LIP."),Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/stop.svg"),mdxType:"Icon"})," Draft \u2013 Reasons for denying Draft status include misalignment with Libra mission or Association policy, being too unfocused, too broad, duplication of effort, being technically unjustified, not providing proper motivation, or not addressing backwards compatibility. The Authors can work to refine and resubmit their LIP Idea for review again."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Draft")," \u2013 After the draft is merged, additional changes may be submitted via pull requests. When a LIP appears to be completed and stable, Authors may ask to change the status to Last Call."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/check.svg"),mdxType:"Icon"}),"  Last Call \u2013 If agreeable, the LIP Manager will approve the Last Call status and set a reasonable amount of time (usually 2-4 weeks) for a final review. Additional time can be granted by the LIP Manager if requested."),Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/stop.svg"),mdxType:"Icon"}),"  Last Call \u2013 A request for Last Call will be denied if material changes are still needed for the draft. LIPs should only be promoted to Last Call once."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Last Call")," - This LIP will be listed prominently on the Libra public Discourse under the LIP category. The final status change by the LIP Manager will be either Accepted or Rejected."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/check.svg"),mdxType:"Icon"})," Accepted \u2013 A successful Last Call without any material changes or unaddressed technical complaints will become Accepted. This status signals that material changes are unlikely and Libra Maintainers should support driving this LIP for inclusion."),Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/stop.svg"),mdxType:"Icon"})," Rejected \u2013 The Maintainers can decide to mark this LIP as Rejected at their discretion, e.g., a major, but uncorrectable, flaw was found in the LIP."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Accepted")," - A LIP in the Accepted state means the TSC has determined it is ready for active implementation"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/check.svg"),mdxType:"Icon"}),"  Final \u2013 LIP is deployed to mainnet. When the implementation is complete and deployed to mainnet the status will be changed to \u201cFinal\u201d."),Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/stop.svg"),mdxType:"Icon"}),"  Draft \u2013 If new information becomes available an Accepted LIP can be moved back into Draft status for necessary changes."),Object(s.b)("li",{parentName:"ul"},Object(s.b)(y,{type:f.INLINE_START,src:Object(b.a)("img/stop.svg"),mdxType:"Icon"}),"  Deprecated \u2013 The LIP Manager or Maintainers may mark a LIP Deprecated if it is superseded by a later proposal or otherwise becomes irrelevant."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Final")," \u2013 The Final state of a LIP means the necessary implementations of the LIP are complete and deployed to the codebase. This LIP represents the current state-of-the-art. A Final LIP should only be updated to correct errata."))),Object(s.b)("p",null,"A LIP may refer to related/dependent LIPs. Every LIP will be assigned a status tag as it evolves. At every stage there can be multiple revisions/reviews until the next stage."),Object(s.b)("h2",{id:"what-goes-into-a-lip"},"What goes into a LIP"),Object(s.b)("p",null,"Here is a summary of what each LIP should include. For an example LIP, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/lip-0"}),"LIP 0"),". There is also a ",Object(s.b)("a",{href:"https://github.com/libra/lip/blob/master/lip-template.md"},"template")," to get you started."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Preamble - RFC 822 style headers containing metadata about the LIP, including the LIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Simple Summary - Provide a simplified and layman-accessible explanation of the LIP.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Abstract - a short (~200 word) description of the technical issue being addressed.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Motivation (*optional) - The motivation is critical for LIPs that want to change the Libra protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the LIP solves. LIP submissions without sufficient motivation may be rejected outright.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations of the Libra protocol or any other Libra platforms that may emerge.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g., how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Backwards Compatibility - All LIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The LIP must explain how the author proposes to deal with these incompatibilities. LIP submissions without a sufficient backwards compatibility treatise may be rejected outright.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Test Cases - Test cases for an implementation are mandatory for LIPs that are affecting consensus changes. Other LIPs can choose to include links to test cases if applicable.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Implementations - The implementations must be completed before any LIP is given status \u201cFinal,\u201d but it need not be completed before the LIP is merged as draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of \u201crough consensus and running code\u201d is still useful when it comes to resolving many discussions of API details.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Copyright Waiver \u2013 All LIPs must be in the public domain. Please use the copyright notice featured at the bottom of this page."))))}L.isMDXComponent=!0},187:function(e,t,a){"use strict";var n=a(0),r=a(53);t.a=function(){return Object(n.useContext)(r.a)}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(194);var n=a(187);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},189:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,s({ref:t},l,{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";var n=a(13),r=a(25),i=a(195),o="".startsWith;n(n.P+n.F*a(196)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},195:function(e,t,a){var n=a(81),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},196:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);