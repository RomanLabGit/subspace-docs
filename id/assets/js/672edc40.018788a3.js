"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1977],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(a),c=o,g=k["".concat(s,".").concat(c)]||k[c]||d[c]||i;return a?n.createElement(g,r(r({ref:e},m),{},{components:a})):n.createElement(g,r({ref:e},m))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[k]="string"==typeof t?t:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4912:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},r=void 0,l={unversionedId:"farming-&-staking/staking/staking",id:"farming-&-staking/staking/staking",title:"Staking guide",description:"Staking guide",source:"@site/docs/farming-&-staking/staking/staking.md",sourceDirName:"farming-&-staking/staking",slug:"/farming-&-staking/staking/",permalink:"/id/docs/pre-release/farming-&-staking/staking/",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/staking/staking.md",tags:[],version:"current",lastUpdatedBy:"Justin",lastUpdatedAt:1702315597,formattedLastUpdatedAt:"11 Des 2023",sidebarPosition:2,frontMatter:{title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},sidebar:"tutorialSidebar",previous:{title:"Operators guide",permalink:"/id/docs/pre-release/farming-&-staking/staking/operators"},next:{title:"Timekeeping",permalink:"/id/docs/pre-release/farming-&-staking/timekeeping"}},s={},p=[{value:"Select an operator to nominate",id:"select-an-operator-to-nominate",level:3},{value:"Operator Nomination using Subspace Staking Interface",id:"operator-nomination-using-subspace-staking-interface",level:3},{value:"Operator Nomination using Polkadot.js",id:"operator-nomination-using-polkadotjs",level:3},{value:"Check if your <strong>nomination</strong> worked succesfully.",id:"check-if-your-nomination-worked-succesfully",level:3},{value:"Stake withdrawal using Polkadot.js",id:"stake-withdrawal-using-polkadotjs",level:3},{value:"Calculating your nominator balance",id:"calculating-your-nominator-balance",level:3}],m={toc:p},k="wrapper";function d(t){let{components:e,...i}=t;return(0,o.kt)(k,(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"select-an-operator-to-nominate"},"Select an operator to nominate"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Three important factors to pay attention to are ",(0,o.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nominationTax"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"status"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://staking.subspace.tools"},(0,o.kt)("strong",{parentName:"a"},"Subspace Staking Interface")),".\n",(0,o.kt)("img",{alt:"N-nominators-1",src:a(8418).Z,width:"2456",height:"704"})),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Operators")," to view the list of available ",(0,o.kt)("strong",{parentName:"li"},"operators"),".\n",(0,o.kt)("img",{alt:"N-nominators-4",src:a(4555).Z,width:"2422",height:"1030"})),(0,o.kt)("li",{parentName:"ol"},"Scroll the page down, pay close attention to the ",(0,o.kt)("strong",{parentName:"li"},"Nominator Tax"),", ",(0,o.kt)("strong",{parentName:"li"},"Min Nominator Stake"),", and ",(0,o.kt)("strong",{parentName:"li"},"Nominators Count"),", as these three parameters help you choose an operator to nominate.\n",(0,o.kt)("img",{alt:"N-nominators-5",src:a(7103).Z,width:"2768",height:"980"}))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternativaly"),", you can use ",(0,o.kt)("strong",{parentName:"p"},"PolkadotJS")," interface to view the list of available operators."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit PolkadotJS ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain state"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-16",src:a(6109).Z,width:"1744",height:"402"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"selected state query")," and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"operators"),", exclude ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," to run the query.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse the list of available operators, make sure the status is ",(0,o.kt)("inlineCode",{parentName:"p"},"Registered")," and that ",(0,o.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake")," is lower than your staking amount. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-17",src:a(7887).Z,width:"1739",height:"793"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Number 17 on the screenshot above corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorId"),".")),(0,o.kt)("h3",{id:"operator-nomination-using-subspace-staking-interface"},"Operator Nomination using ",(0,o.kt)("a",{parentName:"h3",href:"https://staking.subspace.tools/"},"Subspace Staking Interface")),(0,o.kt)("p",null,"Any account can nominate any existing ",(0,o.kt)("strong",{parentName:"p"},"operator")," with at least a minimum nominator stake set by the ",(0,o.kt)("strong",{parentName:"p"},"operator"),". "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The only staking mechanism available to non-operators is nominating an operator.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://staking.subspace.tools"},(0,o.kt)("strong",{parentName:"a"},"Subspace Staking Interface")),".\n",(0,o.kt)("img",{alt:"N-nominators-1",src:a(8418).Z,width:"2456",height:"704"})),(0,o.kt)("li",{parentName:"ol"},"Connect your PolkadotJS or Subwallet wallet.\n",(0,o.kt)("img",{alt:"N-nominators-2",src:a(6682).Z,width:"892",height:"472"})),(0,o.kt)("li",{parentName:"ol"},"As soon as you connect your wallet, you will see your ",(0,o.kt)("strong",{parentName:"li"},"available")," and ",(0,o.kt)("strong",{parentName:"li"},"locked(stakes"),") wallet balance.\n",(0,o.kt)("img",{alt:"N-nominators-3",src:a(3299).Z,width:"2480",height:"664"})),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Operators")," to view the list of available ",(0,o.kt)("strong",{parentName:"li"},"Operators"),".\n",(0,o.kt)("img",{alt:"N-nominators-4",src:a(4555).Z,width:"2422",height:"1030"})),(0,o.kt)("li",{parentName:"ol"},"Scroll the page down, pay close attention to the ",(0,o.kt)("strong",{parentName:"li"},"Nominator Tax"),", ",(0,o.kt)("strong",{parentName:"li"},"Min Nominator Stake"),", and ",(0,o.kt)("strong",{parentName:"li"},"Nominators Count"),", as these three parameters help you choose an operator to nominate.\n",(0,o.kt)("img",{alt:"N-nominators-5",src:a(7103).Z,width:"2768",height:"980"})),(0,o.kt)("li",{parentName:"ol"},"You can toggle the view between the table and a pallet.\n",(0,o.kt)("img",{alt:"N-nominators-6",src:a(9308).Z,width:"2652",height:"1142"})),(0,o.kt)("li",{parentName:"ol"},"Once you picked the operator to nominate, click on ",(0,o.kt)("strong",{parentName:"li"},"Action")," -> ",(0,o.kt)("strong",{parentName:"li"},"AddFunds"),".\n",(0,o.kt)("img",{alt:"N-nominators-7",src:a(506).Z,width:"2598",height:"258"})),(0,o.kt)("li",{parentName:"ol"},"Choose the token amount you want to nominate the operator with.  It is also possible to nominate multiple operators. Click on ",(0,o.kt)("strong",{parentName:"li"},"Submit")," and approve the transaction in a pop-up window.\n",(0,o.kt)("img",{alt:"N-nominators-9",src:a(4897).Z,width:"1154",height:"788"})),(0,o.kt)("li",{parentName:"ol"},"Wait for the transaction to go through. It takes 100 blocks (1 epoch duration) to complete the nomination.\n",(0,o.kt)("img",{alt:"N-nominators-10",src:a(7083).Z,width:"1090",height:"240"})),(0,o.kt)("li",{parentName:"ol"},"You will see the previousle ",(0,o.kt)("strong",{parentName:"li"},"available")," become ",(0,o.kt)("strong",{parentName:"li"},"locked")," amount. Congratulations, you succesfully became a ",(0,o.kt)("strong",{parentName:"li"},"nominator"),".\n",(0,o.kt)("img",{alt:"N-nominators-11",src:a(8236).Z,width:"646",height:"168"}))),(0,o.kt)("h3",{id:"operator-nomination-using-polkadotjs"},"Operator Nomination using ",(0,o.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,o.kt)("p",null,"Any account can nominate any existing ",(0,o.kt)("strong",{parentName:"p"},"operator")," with at least a minimum nominator stake set by the ",(0,o.kt)("strong",{parentName:"p"},"operator"),". "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The only staking mechanism available to non-operators is nominating an operator.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure to select the correct network at the top-left corner. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the account you want to use in ",(0,o.kt)("inlineCode",{parentName:"p"},"using the selected account"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"submit the following extrinsic")," and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"nominateOperator(operatorId, amount)")," in the dropdown.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set an ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorId")," - in the example, it's set to ",(0,o.kt)("strong",{parentName:"p"},"1"),". "),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the example below, 1 TSSC is selected for staking. 18 zeros are added because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"u128")," type, so make sure to put 1000000000000000000 instead. "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the desired amount in the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," field for staking.\n",(0,o.kt)("img",{alt:"Staking-18",src:a(9955).Z,width:"1722",height:"465"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit the signed transaction. "))),(0,o.kt)("p",null,"Once ",(0,o.kt)("strong",{parentName:"p"},"nomination")," is finalized when the ",(0,o.kt)("strong",{parentName:"p"},"domain epoch")," is complete, the ",(0,o.kt)("strong",{parentName:"p"},"nominator")," will start receiving rewards."),(0,o.kt)("p",null,"Any ",(0,o.kt)("strong",{parentName:"p"},"nominator")," can add more stake by using the same functionality."),(0,o.kt)("h3",{id:"check-if-your-nomination-worked-succesfully"},"Check if your ",(0,o.kt)("strong",{parentName:"h3"},"nomination")," worked succesfully."),(0,o.kt)("p",null,"There are two ways to check your ",(0,o.kt)("strong",{parentName:"p"},"nomination"),": "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can use PolkadotJS ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-7",src:a(8564).Z,width:"1761",height:"633"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse the ",(0,o.kt)("strong",{parentName:"p"},"recent events")," and you should see ",(0,o.kt)("strong",{parentName:"p"},"domains.OperatorNominated")," event."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-19",src:a(2702).Z,width:"848",height:"170"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the dropdown arrow to view the ",(0,o.kt)("strong",{parentName:"p"},"domainId")," and ",(0,o.kt)("strong",{parentName:"p"},"operatorId"),"."))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Alternatively, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://subspace.subscan.io/"},"Subscan")," which is a little easier to navigate for this job. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subspace Subscan"))," portal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchain")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Extrinsics"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-9",src:a(8874).Z,width:"1203",height:"341"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to the bottom of the page to view all recent events, search for ",(0,o.kt)("inlineCode",{parentName:"p"},"nominate_operator")," event."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-20",src:a(4698).Z,width:"1210",height:"301"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Extrinsic ID")," for the desired event.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to ",(0,o.kt)("inlineCode",{parentName:"p"},"Parameters")," to view the stake value."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-21",src:a(3831).Z,width:"1194",height:"582"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to ",(0,o.kt)("inlineCode",{parentName:"p"},"Events")," and click on dropdown arrow for ",(0,o.kt)("inlineCode",{parentName:"p"},"domains(OperatorNominated)"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Staking-22",src:a(2590).Z,width:"1210",height:"576"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inspect and ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"nominatorId")," matches your ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". "))),(0,o.kt)("h3",{id:"stake-withdrawal-using-polkadotjs"},"Stake withdrawal using ",(0,o.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,o.kt)("p",null,"Any ",(0,o.kt)("strong",{parentName:"p"},"operator")," or ",(0,o.kt)("strong",{parentName:"p"},"nominator")," can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If an operator is initiating a withdrawal, then their remaining balance should be at least the minimum operator stake, otherwise the request is rejected."),(0,o.kt)("li",{parentName:"ul"},"If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,o.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,o.kt)("inlineCode",{parentName:"li"},"withdrawStake(operatorId, withdraw)")," in the dropdown."),(0,o.kt)("li",{parentName:"ol"},"Choose an operator by selecting an ",(0,o.kt)("inlineCode",{parentName:"li"},"operatorId")," - in the example, it's set to ",(0,o.kt)("inlineCode",{parentName:"li"},"17"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the withdrawal amount in the ",(0,o.kt)("inlineCode",{parentName:"li"},"withdraw")," field - you can specify to withdraw ",(0,o.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"some")," staking amount. ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Example of withdrawal of 1 TSSC stake amount from nominating an operator ",(0,o.kt)("inlineCode",{parentName:"p"},"17"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-23",src:a(5899).Z,width:"1732",height:"522"})),(0,o.kt)("p",null,"Once the withdrawal is submitted, it's finalized after the ",(0,o.kt)("strong",{parentName:"p"},"domain epoch")," is completed. All the withdrawn funds are unlocked after the ",(0,o.kt)("strong",{parentName:"p"},"unlocking period")," is complete."),(0,o.kt)("h3",{id:"calculating-your-nominator-balance"},"Calculating your nominator balance"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proceed to PolkadotJS ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Developer")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Chain state"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"selected state query")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"nominators(u64, AccoundId32)"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide the ",(0,o.kt)("inlineCode",{parentName:"li"},"operatorId")," and select your ",(0,o.kt)("inlineCode",{parentName:"li"},"account")," from the dropdown. "),(0,o.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,o.kt)("inlineCode",{parentName:"li"},"shares")," number.\n",(0,o.kt)("img",{alt:"Staking-25",src:a(5906).Z,width:"1742",height:"657"})),(0,o.kt)("li",{parentName:"ol"},"On the same screen, choose ",(0,o.kt)("inlineCode",{parentName:"li"},"domainStakingSummary(u32)"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide the ",(0,o.kt)("inlineCode",{parentName:"li"},"domainId"),". "),(0,o.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,o.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,o.kt)("img",{alt:"Staking-26",src:a(7042).Z,width:"1748",height:"749"})),(0,o.kt)("li",{parentName:"ol"},"Without leaving the page, select ",(0,o.kt)("inlineCode",{parentName:"li"},"operators(u64)"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide ",(0,o.kt)("inlineCode",{parentName:"li"},"operatorId")," that you nominated previously. "),(0,o.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,o.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,o.kt)("img",{alt:"Staking-27",src:a(3293).Z,width:"1737",height:"626"}))),(0,o.kt)("p",null,"To calculate your nominator ",(0,o.kt)("strong",{parentName:"p"},"balance"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Calculate ",(0,o.kt)("strong",{parentName:"li"},"share price")," by dividing ",(0,o.kt)("strong",{parentName:"li"},"currentTotalStake")," from the domain by operator ",(0,o.kt)("strong",{parentName:"li"},"currentTotalStake"),"."),(0,o.kt)("li",{parentName:"ol"},"Multiply ",(0,o.kt)("strong",{parentName:"li"},"share price")," and your nominator ",(0,o.kt)("strong",{parentName:"li"},"shares")," number.")))}d.isMDXComponent=!0},8418:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-1-32a77b171c944aebd858f45ffd03c865.png"},7083:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-10-0876f7ef29e718bcf54978e9999040eb.png"},8236:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-11-fcbe8d1f5df0c1bb037419d999b0062d.png"},6682:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-2-438e2787e51563ed3ffc72bf12ab00c0.png"},3299:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-3-4531488cf4358be2f9a9cc128ec7f53c.png"},4555:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-4-4154fa0a580ca39ecae3f22d281874ac.png"},7103:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-5-995b5fd7b061a2b439e8db79575bbe11.png"},9308:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-6-eada3bc345ce7a3291bf6a695d626cb8.png"},506:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-7-ef819746f24ec6cf89254fb7d79e2fb5.png"},4897:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/N-Nominators-9-983a806cbbe90d8ef81f2ff185f2b6db.png"},6109:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-16-1fa8bad44ea64dadc08d61140e080d45.png"},7887:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-17-0654352a60a5de808384098474e08616.png"},9955:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-18-a394a1621593fb20addbf5fbd40db911.png"},2702:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-19-738613ee2b6eac639c336b99b94f14e6.png"},4698:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-20-66862bfcc6f47d0b97af115e1baf79e2.png"},3831:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-21-c0d819be47dce329978716b16630fa58.png"},2590:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-22-840fd5f7ffa1575338b45f61668f7a30.png"},5899:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-23-d15092897afe519275dcfa8b7090a129.png"},5906:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-25-b40bb732d0d9509abd25e4f723344ea9.png"},7042:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-26-672b6e7f25be7e4fbb52b9b082ff4a1b.png"},3293:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-27-9258eede57d97cc2cbd16637d0eac079.png"},8564:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-7-255ba039078a485a7cb7e6a848fe5e9e.png"},8874:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Staking-9-67edafdb834fc435f6ce1f63b06d973b.png"}}]);