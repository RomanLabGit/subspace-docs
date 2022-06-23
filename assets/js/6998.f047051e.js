"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[6998],{2503:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(3366),i=t(7294),l=t(6010),c=t(5999),o=t(6668),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,r.Z)(e,m),f=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?i.createElement(n,(0,a.Z)({},d,{className:(0,l.Z)("anchor",f?u:s),id:t}),d.children,i.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,(0,a.Z)({},d,{id:void 0}))}},76:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(7294),r=t(3905),i=t(7462),l=t(3366),c=t(5742),o=["mdxType","originalType"];var s=t(3066);var u=t(9960);var m=t(6010),d=t(2389),f=t(6043),v="details_lb9f",h="isBrowser_bmU9",p="collapsibleContent_i85q",g=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function L(e,n){return!!e&&(e===n||L(e.parentElement,n))}function N(e){var n=e.summary,t=e.children,r=(0,l.Z)(e,g),c=(0,d.Z)(),o=(0,a.useRef)(null),s=(0,f.u)({initialState:!r.open}),u=s.collapsed,N=s.setCollapsed,Z=(0,a.useState)(r.open),b=Z[0],y=Z[1];return a.createElement("details",(0,i.Z)({},r,{ref:o,open:b,"data-collapsed":u,className:(0,m.Z)(v,c&&h,r.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&L(n,o.current)&&(e.preventDefault(),u?(N(!1),y(!0)):N(!0))}}),null!=n?n:a.createElement("summary",null,"Details"),a.createElement(f.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),y(!e)}},a.createElement("div",{className:p},t)))}var Z="details_b_Ee";function b(e){var n=Object.assign({},e);return a.createElement(N,(0,i.Z)({},n,{className:(0,m.Z)("alert alert--info",Z,n.className)}))}var y=t(2503);function C(e){return a.createElement(y.Z,e)}var k="containsTaskList_mC6p";var H="img_ev3q";var x={head:function(e){var n=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,r=(t.mdxType,t.originalType,(0,l.Z)(t,o));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(s.Z,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var n;return a.createElement(s.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(b,(0,i.Z)({},e,{summary:t}),r)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&k))}));var n},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,H))}));var n},h1:function(e){return a.createElement(C,(0,i.Z)({as:"h1"},e))},h2:function(e){return a.createElement(C,(0,i.Z)({as:"h2"},e))},h3:function(e){return a.createElement(C,(0,i.Z)({as:"h3"},e))},h4:function(e){return a.createElement(C,(0,i.Z)({as:"h4"},e))},h5:function(e){return a.createElement(C,(0,i.Z)({as:"h5"},e))},h6:function(e){return a.createElement(C,(0,i.Z)({as:"h6"},e))}};function _(e){var n=e.children;return a.createElement(r.Zo,{components:x},n)}},9407:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(3366),i=t(7294),l=t(6010),c=t(3743),o="tableOfContents_bqdL",s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return i.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",n)},i.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(7462),r=t(3366),i=t(7294),l=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,r.Z)(e,l);t>=0?n[t].children.push(i):a.push(i)})),a}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}var s=t(6668);function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function m(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return u(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,i.useRef)(0),n=(0,s.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,l=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=m(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?i.createElement("ul",{className:r?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var h=i.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,l=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,E=e.maxHeadingLevel,L=(0,r.Z)(e,p),N=(0,s.L)(),Z=null!=g?g:N.tableOfContents.minHeadingLevel,b=null!=E?E:N.tableOfContents.maxHeadingLevel,y=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:Z,maxHeadingLevel:b});return f((0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:Z,maxHeadingLevel:b}}),[m,v,Z,b])),i.createElement(h,(0,a.Z)({toc:y,className:l,linkClassName:m},L))}}}]);