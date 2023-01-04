"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,c(c({ref:t},p),{},{components:r})):a.createElement(h,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61990:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>s,toc:()=>i,default:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Oracles",sidebar_position:2,hide_table_of_contents:!1},c="Oracles",s={unversionedId:"oracles",id:"oracles",isDocsHomePage:!1,title:"Oracles",description:"Blockchain oracles are entities that connect blockchains to external systems, thereby enabling smart contracts to execute based upon inputs and outputs from the real world. Simply put, oracles provide a mechanism for the decentralized Web3 ecosystem to access existing data sources, legacy systems, and advanced computations.",source:"@site/docs/oracles.md",sourceDirName:".",slug:"/oracles",permalink:"/docs/oracles",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/oracles.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Oracles",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Using Web3.js Library on BNB Smart Chain",permalink:"/docs/dapp-dev/web3js-tutorial"},next:{title:"Cross-Chain Bridges",permalink:"/docs/learn/cross-chain-bridges"}},i=[],l={toc:i};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oracles"},"Oracles"),(0,n.kt)("p",null,"Blockchain oracles are entities that connect blockchains to external systems, thereby enabling smart contracts to execute based upon inputs and outputs from the real world. Simply put, oracles provide a mechanism for the decentralized Web3 ecosystem to access existing data sources, legacy systems, and advanced computations."),(0,n.kt)("p",null,"Following is the list of Data Oracles supported by BNB Chain."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://oracle.binance.com/"},(0,n.kt)("strong",{parentName:"a"},"Binance Oracle")),": Binance Oracle, a decentralized Web3 Oracle, a data feed network that connects real-world data to blockchain smart contracts. Binance Oracle will enable smart contracts to run on real-world inputs and outputs, starting with the BNB Chain ecosystem. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://oracle.binance.com/docs"},"here")," for API Reference."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bandprotocol.com/"},(0,n.kt)("strong",{parentName:"a"},"Band Protocol")),": Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://docs.bandchain.org/"},"here")," for API Reference."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://chain.link/"},(0,n.kt)("strong",{parentName:"a"},"Chainlink")),": Securely connect smart contracts with off-chain data and services Chainlink decentralized oracle networks provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://docs.chain.link/"},"here")," for API Reference."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pyth.network/"},(0,n.kt)("strong",{parentName:"a"},"Pyth")),": Pyth delivers real-time on-chain market data. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://pyth.network/developers"},"here")," for API Reference.")))}p.isMDXComponent=!0}}]);