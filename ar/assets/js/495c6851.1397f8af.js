"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var k=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},3571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},s=void 0,u={unversionedId:"farming-&-staking/farming/pulsar/pulsar-tips",id:"version-latest/farming-&-staking/farming/pulsar/pulsar-tips",title:"Tips & Tricks",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/versioned_docs/version-latest/farming-&-staking/farming/pulsar/pulsar-tips.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-tips",permalink:"/ar/docs/farming-&-staking/farming/pulsar/pulsar-tips",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/pulsar/pulsar-tips.mdx",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1702315597,formattedLastUpdatedAt:"\u0661\u0661 \u062f\u064a\u0633\u0645\u0628\u0631 \u0662\u0660\u0662\u0663",sidebarPosition:3,frontMatter:{title:"Tips & Tricks",sidebar_position:3,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/ar/docs/farming-&-staking/farming/pulsar/pulsar-install"},next:{title:"Troubleshooting",permalink:"/ar/docs/farming-&-staking/farming/pulsar/pulsar-troubleshooting"}},c={},p=[{value:"Additional Tips",id:"additional-tips",level:2},{value:"Telemetry &amp; Block Explorer",id:"telemetry--block-explorer",level:3},{value:"Specify Version",id:"specify-version",level:3},{value:"Moving the Farming Process to the Background",id:"moving-the-farming-process-to-the-background",level:3}],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,n.kt)("p",null,"Welcome to the Additional Tips section! Whether you're a seasoned farmer or just starting out with the Subspace Network, these tips and tricks are designed to enhance your experience and efficiency. Here, we delve into practical advice and lesser-known techniques to help you fine-tune your farming setup and navigate common challenges with ease. From configuring your environment to managing background processes, these insights are tailored to ensure your Farmer operates smoothly and effectively. Let's dive in and explore how you can get the most out of your Subspace Network Farmer."),(0,n.kt)("h3",{id:"telemetry--block-explorer"},"Telemetry & Block Explorer"),(0,n.kt)("p",null,"Explore the Subspace Network in depth with our variety of telemetry tools and block explorers. Whether you're monitoring network activity or exploring blockchain data, these resources provide comprehensive insights into the network's performance and transactions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://telemetry.subspace.network/"},"Telemetry Server")),": Get real-time insights into network activity and performance metrics. Ideal for monitoring the overall health and status of the Subspace Network.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://explorer.subspace.network/"},"Official Block Explorer")),": Our primary tool for viewing blocks, transactions, and network activity on the Subspace Network. This explorer offers an intuitive interface and detailed information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subscan Block Explorer")),": An alternative block explorer providing detailed views of blocks, transactions, and network events. Subscan is known for its user-friendly interface and additional data analytics features.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-1.gemini-3g.subspace.network%2Fws#/accounts"},"Polkadot.js Block Explorer")),": For users familiar with the Polkadot ecosystem, this explorer offers a seamless experience for exploring the Subspace Network using the Polkadot.js interface."))),(0,n.kt)("h3",{id:"specify-version"},"Specify Version"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.toml")," file contains critical configurations for Pulsar, including the network your node connects to. Specify your network environment by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"chain")," variable under the ",(0,n.kt)("inlineCode",{parentName:"p"},"[node]")," section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'gemini-3g' //In this Example we have set to Gemini-3g\n# ... additional configuration settings ...\n")),(0,n.kt)("p",null,"Set the ",(0,n.kt)("inlineCode",{parentName:"p"},"chain")," value to your target network identifier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Local Development: Set to ",(0,n.kt)("inlineCode",{parentName:"li"},"dev")),(0,n.kt)("li",{parentName:"ul"},"Gemini Testnet: Set to ",(0,n.kt)("inlineCode",{parentName:"li"},"gemini-3g"))),(0,n.kt)("h3",{id:"moving-the-farming-process-to-the-background"},"Moving the Farming Process to the Background"),(0,n.kt)(o.Z,{groupId:"OS",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"tmux",label:"Tmux",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Learn More about Tmux",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want to learn more about Tmux and its options check out their Repo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"here"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new tmux session using a socket file named farming")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux -S farming\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Ctrl+b d OR \u2318+b d (Mac)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To re-attach")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux -S farming attach\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux new-session -A -D -s farming\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To delete farming session")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux kill-session -t farming\n"))),(0,n.kt)(l.Z,{value:"screen",label:"Screen",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Learn More about Screen",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want to learn more about Screen and its options check out their Webpage ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/"},"here"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create new screen using a socket file named farming")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -S farming\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Ctrl+d a OR \u2318+d a (Mac)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To re-attach")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -r farming\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -D -R -S farming\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To delete farming session")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -S farming -X quit\n")))))}f.isMDXComponent=!0}}]);