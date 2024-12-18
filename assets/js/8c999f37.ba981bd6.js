"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[7517],{4830:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={title:"July 2024",slug:"2024-07",authors:["ch1bo","jpraynaud","mmahut"],tags:["monthly"]},a=void 0,o={permalink:"/monthly/2024-07",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2024-07-monthly.md",source:"@site/monthly/2024-07-monthly.md",title:"July 2024",description:"This is a monthly report on the progress of \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since June 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-07-22 using these slides and you can see the recording here.",date:"2024-07-24T07:32:44.000Z",formattedDate:"July 24, 2024",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:6.32,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Jean-Philippe Raynaud",title:"Software Engineering Lead, Palo IT",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"},{name:"Marek Mahut",title:"CEO, Blockfrost",url:"https://github.com/mmahut",imageURL:"https://github.com/mmahut.png",key:"mmahut"}],frontMatter:{title:"July 2024",slug:"2024-07",authors:["ch1bo","jpraynaud","mmahut"],tags:["monthly"]},unlisted:!1,prevItem:{title:"August 2024",permalink:"/monthly/2024-08"},nextItem:{title:"June 2024",permalink:"/monthly/2024-06"}},h={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"Mithril",id:"mithril",level:2},{value:"Distributions",id:"distributions",level:3},{value:"2423.0",id:"24230",level:4},{value:"Future distributions",id:"future-distributions",level:4},{value:"Protocol status",id:"protocol-status",level:3},{value:"Transaction verification in Nami",id:"transaction-verification-in-nami",level:3},{value:"Transaction certification",id:"transaction-certification",level:3},{value:"Decentralized Message Queue CIP",id:"decentralized-message-queue-cip",level:3},{value:"Hydra",id:"hydra",level:2},{value:"Incremental decommits completed",id:"incremental-decommits-completed",level:3},{value:"Repository moved",id:"repository-moved",level:3},{value:"Working group updates",id:"working-group-updates",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This is a monthly report on the progress of \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since June 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-07-22 using these ",(0,t.jsx)(n.a,{href:"https://docs.google.com/presentation/d/17T18tNIJZPTiEfc2Psb1C6GRxt04hRNj16E5BiAML_I",children:"slides"})," and ",(0,t.jsx)(n.a,{href:"https://drive.google.com/file/d/1sXYt1MZJtrq1jARha-MGLMWVORvSUjEv",children:"you can see the recording here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"mithril",children:"Mithril"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-06-30..2024-07-31",children:"Issues and pull requests closed in July"})}),"\n",(0,t.jsx)(n.h3,{id:"distributions",children:"Distributions"}),"\n",(0,t.jsx)(n.h4,{id:"24230",children:"2423.0"}),"\n",(0,t.jsxs)(n.p,{children:["We have released the new Mithril distribution ",(0,t.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2428.0",children:(0,t.jsx)(n.code,{children:"2428.0"})}),". This distribution includes several critical updates and enhancements:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Support for ",(0,t.jsx)(n.strong,{children:"Cardano node"})," ",(0,t.jsx)(n.code,{children:"9.0.0"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Database cleanup and optimization once per epoch."}),"\n",(0,t.jsx)(n.li,{children:"Bug fixes and performance improvements."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"future-distributions",children:"Future distributions"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(4162).A+"",width:"1597",height:"693"})}),"\n",(0,t.jsx)(n.p,{children:"We have planned to release two new distributions in August:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2430"})," (before the ",(0,t.jsx)(n.strong,{children:"Chang"})," hardfork):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Activation of the certification of ",(0,t.jsx)(n.strong,{children:"Cardano transactions"})," in the ",(0,t.jsx)(n.code,{children:"release-preprod"})," network."]}),"\n",(0,t.jsxs)(n.li,{children:["Support for ",(0,t.jsx)(n.strong,{children:"Cardano node"})," ",(0,t.jsx)(n.code,{children:"9.1.0"})," on ",(0,t.jsx)(n.strong,{children:"all networks"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2434"})," (after the ",(0,t.jsx)(n.strong,{children:"Chang"})," hardfork):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Activation of the certification of ",(0,t.jsx)(n.strong,{children:"Cardano transactions"})," in the ",(0,t.jsx)(n.code,{children:"release-mainnet"})," network."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"protocol-status",children:"Protocol status"}),"\n",(0,t.jsxs)(n.p,{children:["Here is the status of the Mithril protocol on the Cardano ",(0,t.jsx)(n.code,{children:"mainnet"}),":\n",(0,t.jsx)(n.img,{src:i(9148).A+"",width:"1208",height:"866"})]}),"\n",(0,t.jsx)(n.h3,{id:"transaction-verification-in-nami",children:"Transaction verification in Nami"}),"\n",(0,t.jsx)(n.p,{children:"As Blockfrost now supports the Mithril endpoints within their API, they have presented an implementation example."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The demo shows transaction verification within the Nami light wallet (using Blockfrost as its backend)."}),"\n",(0,t.jsx)(n.li,{children:"This allows the light wallet user to verify that their transaction is on-chain with the high certainty provided by Mithril security."}),"\n",(0,t.jsx)(n.li,{children:"While it is just an experimental implementation, it might be accepted by the Nami upstream in the future."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://ipfs.io/ipfs/bafkreifxrd7pcby47ruutcdvjsv2q6tggfs7dnij2ve2brdzwcucoq6g7e?filename=ezgif-6-c33802f259.gif",alt:"https://ipfs.io/ipfs/bafybeiayaxyr6b442sz22n4ag5hfwjjnym2bwd4rpdzha3stdhrkbhzxye?filename=demo_blockfrost_mithrill_support.mp4"})}),"\n",(0,t.jsx)(n.h3,{id:"transaction-certification",children:"Transaction certification"}),"\n",(0,t.jsx)(n.p,{children:"We have continued working on the implementation of the Cardano transaction certification with Mithril and are currently preparing for the rollout of this feature to production:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We are finalizing the minimization of the signer footprint on the SPO infrastructure."}),"\n",(0,t.jsxs)(n.li,{children:["We are preparing for activating the feature in the ",(0,t.jsx)(n.code,{children:"release-preprod"})," network with the following release."]}),"\n",(0,t.jsx)(n.li,{children:"We are preparing thorough documentation about the mechanism used to certify the transactions"}),"\n",(0,t.jsxs)(n.li,{children:["We have selected final parameters for signing the transactions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"100"})," blocks from the tip of the chain (",(0,t.jsx)(n.code,{children:"~30 minutes"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"30"})," blocks between snapshots certifying the transactions (",(0,t.jsx)(n.code,{children:"~10 minutes"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"With these parameters, we can consider the transactions final with very high probability."}),"\n",(0,t.jsx)(n.li,{children:"These parameters are hot parameters that can be adjusted without requiring a new distribution"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(4495).A+"",width:"1931",height:"517"})}),"\n",(0,t.jsx)(n.h3,{id:"decentralized-message-queue-cip",children:"Decentralized Message Queue CIP"}),"\n",(0,t.jsx)(n.p,{children:"We have been collaborating with the Cardano networking team to design a mechanism for implementing a decentralized message queue to decentralize the signature diffusion from Mithril signers to Mithril aggregators based on the Cardano network layer. The idea is to create a separate process for the decentralized message queue implementation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'A new dedicated process (aka "Mithril network node") based on the Ouroboros network stack'}),"\n",(0,t.jsx)(n.li,{children:"More efficient handling of resource consumption (network and CPU) and reduced impact on the Cardano node performance and availability"}),"\n",(0,t.jsx)(n.li,{children:"Enhanced security with no impact on the Cardano node"}),"\n",(0,t.jsx)(n.li,{children:"Different release pace for both nodes"}),"\n",(0,t.jsx)(n.li,{children:"Both nodes will be bundled in the Cardano node distribution release"}),"\n",(0,t.jsx)(n.li,{children:"A hard fork for SPO registration of the port of their Mithril network node is likely needed."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(6148).A+"",width:"1332",height:"750"})}),"\n",(0,t.jsx)(n.h2,{id:"hydra",children:"Hydra"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-06-30..2024-07-31",children:"Issues and pull requests closed in July"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"The roadmap with features and ideas",src:i(3716).A+"",width:"5734",height:"2789"}),"\n",(0,t.jsx)("small",{children:(0,t.jsxs)("center",{children:["Snapshot of the new ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," with features and ideas"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Notable updates on our ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," this month are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Completed incremental decommits, to be released separately as ",(0,t.jsx)(n.code,{children:"0.18.0"})," after some remaining cleanup tasks and documentation updates"]}),"\n",(0,t.jsxs)(n.li,{children:["Release ",(0,t.jsx)(n.code,{children:"0.19.0"})," will be incremental decommits and, depending on the hard-fork date of Cardano mainnet, switching to Conway on the Hydra L2 ledger (see ",(0,t.jsx)(n.a,{href:"/monthly/2024-03#conway-support",children:"March 2024"})," for more details)"]}),"\n",(0,t.jsxs)(n.li,{children:['Refined scope of "what is Hydra V1" through the Hydra working group',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1509",children:"SDK for wallet integration with Hydra #1509"})," to provide a better developer experience"]}),"\n",(0,t.jsxs)(n.li,{children:["Decided to implement ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1329",children:"Directly open heads #1329"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1468",children:"Partial fanout"})," to overcome our ",(0,t.jsx)(n.a,{href:"https://hydra.family/head-protocol/docs/known-issues/",children:"known issue & limitations"})," and supersede several other \ud83d\udcad ideas."]}),"\n",(0,t.jsxs)(n.li,{children:["Prioritized ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/198",children:"Optimistic head closure #198"})," higher based on user feedback."]}),"\n",(0,t.jsxs)(n.li,{children:["Declared ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/195",children:"React to protocol parameter changes #195"})," as not essential for a V1."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"incremental-decommits-completed",children:"Incremental decommits completed"}),"\n",(0,t.jsxs)(n.p,{children:["This month we finally finished the implementation of the ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1057",children:"Incremental decommit #1057"})," feature."]}),"\n",(0,t.jsx)(n.p,{children:"As evident from the GitHub feature description, the number of comments\nand linked pull requests, this was a complex change."}),"\n",(0,t.jsxs)(n.p,{children:["Last month, we discussed why versioning the ",(0,t.jsx)(n.code,{children:"open"})," state on-chain is necessary and the\nsubsequent changes to the specification and implementation. After addressing these in\n",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1473",children:"hydra#1473"})," and in\n",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1474",children:"hydra#1474"}),", a thorough\nreview and requiring tests for all changes (compared to ",(0,t.jsx)(n.code,{children:"master"}),") in\n",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1483",children:"hydra#1483"})," concluded in\na last cleanup PR, which made the feature consistent in specification,\nimplementation and documentation."]}),"\n",(0,t.jsxs)(n.p,{children:["In the monthly review meeting we demonstrated the feature and the video below also shows how it works using a ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/pull/1517",children:"small extension"})," to the ",(0,t.jsx)(n.code,{children:"hydra-tui"}),":"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/8gy2JV02TuY?si=5ph1gE5ISre328RP",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"repository-moved",children:"Repository moved"}),"\n",(0,t.jsxs)(n.p,{children:["This month, the Hydra repository was moved to the ",(0,t.jsx)(n.code,{children:"cardano-scaling"})," GitHub organization: ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra",children:"https://github.com/cardano-scaling/hydra"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This allows for a more flexible use and sharing of GitHub runners between the main repository and for example ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra-explorer",children:"hydra-explorer"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Docker registry changed \ud83d\udc0b",type:"info",children:(0,t.jsxs)(n.p,{children:["If you are using docker images of the hydra project, new releases will be available under ",(0,t.jsx)(n.code,{children:"ghcr.io/cardano-scaling/hydra-node"})]})}),"\n",(0,t.jsxs)(n.p,{children:["Most links should be automatically redirected, but if you encounter broken links, just reach out on Discord or create an issue \ud83d\ude4f ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/new/choose",children:"https://github.com/cardano-scaling/hydra/issues/new/choose"})]}),"\n",(0,t.jsx)(n.admonition,{title:"New roadmap \ud83d\uddfa",type:"info",children:(0,t.jsxs)(n.p,{children:["GitHub projects cannot be moved, so a copy of the Hydra roadmap was made and this version is used going forward: ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"https://github.com/orgs/cardano-scaling/projects/7/views/1"})]})}),"\n",(0,t.jsx)(n.h3,{id:"working-group-updates",children:"Working group updates"}),"\n",(0,t.jsxs)(n.p,{children:["There were two Hydra working group meetings this month and multiple people showed interest in joining. Current member list can be found in the ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/wg-hydra",children:"charter"})," and meeting notes of all meetings are kept in ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/wg-hydra/blob/main/meetings",children:"the repository"})," too."]}),"\n",(0,t.jsx)(n.p,{children:'The working group started work on the first item "What is Hydra Head V1" and\ngathered valuable feedback in discussions between fellow layer 2 architects and\nHydra users.'}),"\n",(0,t.jsxs)(n.p,{children:["Notable inputs were the need for an SDK, wallet integration and the ability to\noperate without a full cardano-node, which got captured in\n",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1509",children:"hydra#1509"})," and\n",(0,t.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1305",children:"hydra#1305"}),' respectively. Even brand new ideas emerged from these discussions like "resumable Hydra heads".']}),"\n",(0,t.jsx)(n.p,{children:"The immediate goal is to achieve a common understanding of what must be included for a Hydra Head V1 and consequently when/how this could be audited?"}),"\n",(0,t.jsxs)(n.p,{children:["Discussions also revolved around discoverability of Hydra heads, specifically, but also general interoperability with off-chain ledgers (any layer 2). In that regards, the group is considering to work on a ",(0,t.jsx)(n.a,{href:"https://github.com/cardano-foundation/CIPs",children:"CPS/CIP"})," in the mid term."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["The monthly review meeting for July 2024 was held on 2024-07-22 via Google Meet,\npresenting these ",(0,t.jsx)(n.a,{href:"https://docs.google.com/presentation/d/17T18tNIJZPTiEfc2Psb1C6GRxt04hRNj16E5BiAML_I",children:"slides"})," and this ",(0,t.jsx)(n.a,{href:"https://drive.google.com/file/d/1sXYt1MZJtrq1jARha-MGLMWVORvSUjEv",children:"recording"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Despite the likely impact of summer breaks on attendance, it was great to have Blockfrost demonstrate their experiments using Mithril certificates delivered through Blockfrost in a forked Nami version. This demo clearly illustrates how light clients can benefit from Mithril verifiable transactions."}),"\n",(0,t.jsx)(n.p,{children:"On the Hydra side, we are very pleased to have successfully merged and prepared the incremental decommits feature for release. Although this process took some time, it marks the first substantial feature not originally covered by the Hydra head paper, demonstrating the protocol's capacity to grow and meet user needs. We appreciate all the valuable input from the Hydra working group regarding the features we should develop next and are excited to see the growing community interest in Hydra's future."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3716:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-07-hydra-roadmap-7192d3bfd939ce5ce18b0fb54ba068cd.jpg"},6148:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-07-mithril-cardano-decentralized-message-queue-2302e8a62a044cf492d613a467c9974b.jpg"},4495:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-07-mithril-cardano-tx-roadmap-6835585e4eb75ae793c4424554ad2b09.jpg"},4162:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-07-mithril-distributions-2ada26f88edb1c65366a4f3234a61d1a.png"},9148:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-07-mithril-protocol-status-b0f163c2f5d62acbe08ba5eecfc671f6.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);