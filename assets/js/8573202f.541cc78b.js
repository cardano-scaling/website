"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[5366],{4836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(4848),s=n(8453);const a={title:"August 2024",slug:"2024-08",authors:["ch1bo","noonio","jpraynaud","v0d1ch","ffakenz"],tags:["monthly"]},o=void 0,r={permalink:"/monthly/2024-08",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2024-08-monthly.md",source:"@site/monthly/2024-08-monthly.md",title:"August 2024",description:"This is a monthly report on the progress of the \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since July 2024. This document serves as both preparation for and a written summary of the monthly stakeholder review meeting, announced on our Discord channels and held on Google Meet. This month, the meeting took place on 2024-08-28, using these slides and you can see the recording here.",date:"2024-08-27T08:00:14.000Z",formattedDate:"August 27, 2024",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:6.495,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Noon van der Silk",title:"Software Engineering Lead, IOG",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"},{name:"Jean-Philippe Raynaud",title:"Software Engineering Lead, Palo IT",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"},{name:"Sasha Bogicevic",title:"Senior Software Engineer, IOG",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"},{name:"Franco Testagrossa",title:"Senior Software Engineer, IOG",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"August 2024",slug:"2024-08",authors:["ch1bo","noonio","jpraynaud","v0d1ch","ffakenz"],tags:["monthly"]},unlisted:!1,prevItem:{title:"September 2024",permalink:"/monthly/2024-09"},nextItem:{title:"July 2024",permalink:"/monthly/2024-07"}},d={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},h=[{value:"Mithril",id:"mithril",level:2},{value:"Roadmap",id:"roadmap",level:3},{value:"Distributions",id:"distributions",level:3},{value:"Future distributions",id:"future-distributions",level:4},{value:"Protocol status",id:"protocol-status",level:3},{value:"Cardano stake distribution certification",id:"cardano-stake-distribution-certification",level:3},{value:"Hydra",id:"hydra",level:2},{value:"Hydra Doom",id:"hydra-doom",level:3},{value:"Network tests with fault injection",id:"network-tests-with-fault-injection",level:3},{value:"New landing page",id:"new-landing-page",level:3},{value:"Bug fix: layer 2 transactions during decommits",id:"bug-fix-layer-2-transactions-during-decommits",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is a monthly report on the progress of the \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since July 2024. This document serves as both preparation for and a written summary of the monthly stakeholder review meeting, announced on our Discord channels and held on Google Meet. This month, the meeting took place on 2024-08-28, using these ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/106NA1xtpuIcnC86HawBzpxY9VLexzOOxcfPD3dyoAg8",children:"slides"})," and ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1Hi9AiI9cmIWXcN5xPTu3gl-KbyW-wm0K",children:"you can see the recording here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"mithril",children:"Mithril"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31",children:"Issues and pull requests closed in August"})}),"\n",(0,i.jsx)(t.h3,{id:"roadmap",children:"Roadmap"}),"\n",(0,i.jsx)(t.p,{children:"Here is an update on our current roadmap:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cardano transactions signature/proving MVP"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/1457",children:"#1457"}),": the feature is finalized and the last step to completion is to release on the ",(0,i.jsx)(t.code,{children:"mainnet"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cardano Stake Distribution certification"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/955",children:"#955"}),": the feature is finalized and the last step is to release on ",(0,i.jsx)(t.code,{children:"preview"}),", ",(0,i.jsx)(t.code,{children:"preprod"})," and ",(0,i.jsx)(t.code,{children:"mainnet"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Mithril signature diffusion with Cardano network layer PoC"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/1837",children:"#1837"}),": the proof-of-concept is completed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Decentralization of signature orchestration"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/1777",children:"#1777"}),": we have started implementing the feature with some preliminary works."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CIP for Mithril signature diffusion through Cardano network"})," ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/1775",children:"#1775"}),": the draft CIP has been published on the Cardano foundation CIPs repository and is under review."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"distributions",children:"Distributions"}),"\n",(0,i.jsxs)(t.p,{children:["We have released the new Mithril distribution ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2430.0",children:(0,i.jsx)(t.code,{children:"2430.0"})}),". This distribution includes several critical updates and enhancements:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Support for ",(0,i.jsx)(t.strong,{children:"Cardano node"})," ",(0,i.jsx)(t.code,{children:"9.1.0"})]}),"\n",(0,i.jsxs)(t.li,{children:["Support for ",(0,i.jsx)(t.strong,{children:"Cardano transactions"})," certification in ",(0,i.jsx)(t.code,{children:"release-preprod"})," and ",(0,i.jsx)(t.code,{children:"pre-release-preview"})]}),"\n",(0,i.jsx)(t.li,{children:"Bug fixes and performance improvements."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"future-distributions",children:"Future distributions"}),"\n",(0,i.jsxs)(t.p,{children:["We plan to release new distributions in September following the ",(0,i.jsx)(t.strong,{children:"Chang"})," hard fork:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"2436"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Activation of the certification of ",(0,i.jsx)(t.strong,{children:"Cardano transactions"})," in the ",(0,i.jsx)(t.code,{children:"release-mainnet"})," network"]}),"\n",(0,i.jsxs)(t.li,{children:["Activation of the certification of ",(0,i.jsx)(t.strong,{children:"Cardano stake distribution"})," in ",(0,i.jsx)(t.code,{children:"pre-release-preview"}),", ",(0,i.jsx)(t.code,{children:"release-preprod"}),", and ",(0,i.jsx)(t.code,{children:"release-mainnet"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"protocol-status",children:"Protocol status"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(8959).A+"",width:"1491",height:"1093"}),"\n",(0,i.jsx)("small",{children:(0,i.jsxs)("center",{children:["Latest status of the Mithril protocol on Cardano ",(0,i.jsx)(t.code,{children:"mainnet"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"cardano-stake-distribution-certification",children:"Cardano stake distribution certification"}),"\n",(0,i.jsx)(t.p,{children:"We have completed the implementation of the Cardano stake distribution certification with Mithril and are currently preparing for the rollout of this feature to production:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We have implemented a new type of data certified for the latest snapshot of the Cardano stake distribution done by the Cardano node at the end of each epoch."}),"\n",(0,i.jsx)(t.li,{children:"Under the hood, we use a Merkle tree representation of the stake distribution and sign its Merkle root."}),"\n",(0,i.jsx)(t.li,{children:"The Mithril clients (library, CLI and WASM) have the capability to download and verify a snapshot of the Cardano stake distribution."}),"\n",(0,i.jsxs)(t.li,{children:["We are preparing to activate the feature in the ",(0,i.jsx)(t.code,{children:"release-preview"}),", ",(0,i.jsx)(t.code,{children:"release-preprod"}),", and ",(0,i.jsx)(t.code,{children:"release-mainnet"})," networks with the release of the next Mithril distribution."]}),"\n",(0,i.jsx)(t.li,{children:"We have created documentation and some example code implementation for developers."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"hydra",children:"Hydra"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31",children:"Issues and pull requests closed in August"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The roadmap with features and ideas",src:n(9167).A+"",width:"10190",height:"4808"}),"\n",(0,i.jsx)("small",{children:(0,i.jsxs)("center",{children:["Snapshot of the new ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," with features and ideas"]})})]}),"\n",(0,i.jsxs)(t.p,{children:["Notable updates on our ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," this month include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Incremental decommits, Conway support fixes, and more were released in ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/releases/tag/0.18.0",children:"0.18.0"})]}),"\n",(0,i.jsxs)(t.li,{children:["New landing page, SSL support, and bug fixes around transaction pruning were released in ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/releases/tag/0.18.1",children:"0.18.1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Incremental commits (coming in a 0.19 release) have pivoted to a deposit-based scheme based on ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/issues/199",children:"open discussions"})," (thanks ",(0,i.jsx)(t.a,{href:"https://github.com/GeorgeFlerovsky",children:"@GeorgeFlerovsky!"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Ready to shift ledger to Conway when hardfork is complete ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/pull/1338",children:"#1338"})]}),"\n",(0,i.jsxs)(t.li,{children:["Settled on ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/issues/1468",children:"Partial Fanout"})," as a good solution to ",(0,i.jsx)(t.a,{href:"https://hydra.family/head-protocol/docs/known-issues#head-protocol-limits",children:"a few known problems"})]}),"\n",(0,i.jsxs)(t.li,{children:["Initial work on a suite of network-resiliance tests ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/pull/1552",children:"#1552"})]}),"\n",(0,i.jsx)(t.li,{children:"The Hydra Doom demo yielded several ideas that need to be refined into features"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"hydra-doom",children:"Hydra Doom"}),"\n",(0,i.jsx)(t.p,{children:"At the Rare Evo event in Las Vegas, we showcased the Hydra Doom demo, a technology demonstration of Hydra where users could play the 1993 id software game Doom and for each frame of the game, a smart contract transaction was submitted to a Hydra head which recorded game state, user inputs, and validated game state transitions (as a proof of concept, using only some minor logic pertaining to the movement of the player and dying in-game)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/user-attachments/assets/d897190d-ece6-4fa6-b0f0-ec214a58d0e2",alt:"At Rare Evo"})}),"\n",(0,i.jsxs)(t.p,{children:["People could connect remotely via ",(0,i.jsx)(t.a,{href:"https://doom.hydra.family",children:"https://doom.hydra.family"})," or in person on two custom-made arcade cabinets we had constructed for the occasion. Each game session contributed 35 transactions per second. In aggregate, we processed 106 million transactions with Hydra during the 78 hours of operation, which is more than the entire history of Cardano mainnet. The peak was around 7,200 tps."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/user-attachments/assets/f0b1430a-1cdf-4c48-839d-b6d217c8279a",alt:"Last screen shot"})}),"\n",(0,i.jsx)(t.p,{children:"The demo was very positively received on social media and seems to have rekindled the flames around the Hydra narrative both internally and externally, which hopefully bodes well for both future adoption interest among builders, as well as the prospects of securing funding for the continued development of Hydra from Intersect."}),"\n",(0,i.jsx)(t.h3,{id:"network-tests-with-fault-injection",children:"Network tests with fault injection"}),"\n",(0,i.jsxs)(t.p,{children:["We have set up a simple yet effective ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/blob/master/.github/workflows/network-test.yaml",children:"workflow"})," capable of simulating a Hydra cluster under high transaction loads and packet loss network failures."]}),"\n",(0,i.jsxs)(t.p,{children:["With this, we aim to consistently reproduce and resolve issues that are causing the head to become stuck, as outlined in ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/issues/1436",children:"#1436"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The workflow specifies a set of high-load scenarios, each of which spins up the same Hydra cluster on ",(0,i.jsx)(t.code,{children:"devnet"})," used during the ",(0,i.jsx)(t.a,{href:"https://hydra.family/head-protocol/docs/getting-started",children:"getting started"})," tutorial and injects network faults using ",(0,i.jsx)(t.a,{href:"https://github.com/alexei-led/pumba",children:"Pumba"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The idea is to allow and encourage everyone to experiment with this workflow and collect summary results, which contain details about the performance within the head. Because these tests are performed with the ",(0,i.jsx)(t.code,{children:"hydra-node"})," being a 'black box,' it also allows us to explore alternative network stacks as a whole."]}),"\n",(0,i.jsx)(t.h3,{id:"new-landing-page",children:"New landing page"}),"\n",(0,i.jsxs)(t.p,{children:["For the Rare Evo event with the public Hydra doom demo (see above), we also figured it would be a good idea to improve the first impression new visitors get from the ",(0,i.jsx)(t.a,{href:"https://hydra.family",children:"https://hydra.family"})," website."]}),"\n",(0,i.jsx)(t.p,{children:"The marketing team at IOG collaborated on creating new content and design for the landing page. In addition to highlighting the key features and explaining the importance of the Hydra Head protocol, the updated landing page also includes an analogy of how Hydra works, using a cargo plane as an example."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(8220).A+"",width:"1636",height:"1261"}),"\n",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"Screenshot of the new landing page"})})]}),"\n",(0,i.jsxs)(t.p,{children:["The original design included an alternative color scheme using ",(0,i.jsx)("span",{style:{color:"#12506C"},children:"Teal"})," as the primary accent color and ",(0,i.jsx)("span",{style:{color:"#721F41"},children:"Plum"})," as the secondary. An example is included below. Do you think a new color scheme would be appealing or do you prefer the ",(0,i.jsx)("span",{style:{color:"#6874e8"},children:"Purple"})," main color as-is? Shoot us a message on Twitter (X) or ",(0,i.jsx)(t.a,{href:"https://discord.com/invite/Qq5vNTg9PT",children:"#ask-hydra on Discord"})," with your thoughts."]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Alternative color scheme example"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(2795).A+"",width:"996",height:"1083"})})]}),"\n",(0,i.jsx)(t.h3,{id:"bug-fix-layer-2-transactions-during-decommits",children:"Bug fix: layer 2 transactions during decommits"}),"\n",(0,i.jsx)(t.p,{children:"After releasing the decommit feature that enables users to transfer funds from layer 2 to layer 1 while the head is operational, we quickly identified a bug. When a decommit is pending ( funds have not yet been withdrawn from the head) and a user attempts to create a new layer 2 transaction, the hydra-node attempts to re-apply the pending decommit to the local ledger state, resulting in an error."}),"\n",(0,i.jsxs)(t.p,{children:["We promptly realized that any pending decommit needs to match with the decommit in the new snapshot and should be preserved in the next snapshot(s) until it is observed. Without this fix, our decommit feature would be extremely fragile, so we made sure to quickly draft a failing ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/pull/1540/files#diff-3479844ad82c0fd2f7af59c36f930cdb540876b9cf4201d67a41da83688500a9R440",children:"test"})," and do a proper fix."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/hydra/pull/1540",children:"This"})," is a pull request that fixes this bug and we also demonstrated this fix in one of our monthly meetings."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["The monthly review meeting for August 2024 was held on 2024-08-28 via Google Meet,\npresenting these ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/106NA1xtpuIcnC86HawBzpxY9VLexzOOxcfPD3dyoAg8",children:"slides"})," and this ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1Hi9AiI9cmIWXcN5xPTu3gl-KbyW-wm0K",children:"recording"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This month we saw demonstrations from both projects about new features and\nimproved testing capabilities. Optimization results and test results underline\nthe teams' commitment to evidence-based engineering. The Hydra Doom demo was a\ngreat success and we received good feedback from users and use cases."}),"\n",(0,i.jsx)(t.p,{children:"While roadmaps have not moved much over the last couple of months, but more\nre-orientation is likely as plans for 2025 are coming together in the working\ngroups and other Intersect committees."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8220:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-08-hydra-landing-page-e72dc0867a7e6b6b4b2fe94087058b75.png"},2795:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-08-hydra-other-color-scheme-23c915dbc7c57e3184a2e50044982044.png"},9167:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-08-hydra-roadmap-982e3024544cfe3c9c7d971e279b6c8f.jpg"},8959:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-08-mithril-protocol-status-5765b58d7ac2ce9201f728fa6c26a6ad.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);