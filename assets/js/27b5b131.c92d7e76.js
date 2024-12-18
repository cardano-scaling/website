"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[4086],{3709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(4848),s=t(8453);const o={title:"February 2023",slug:"2023-02",authors:"ch1bo",tags:["monthly"]},a=void 0,r={permalink:"/monthly/2023-02",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2023-02-monthly.md",source:"@site/monthly/2023-02-monthly.md",title:"February 2023",description:"This report summarizes the work on Hydra since January 2023. It serves as",date:"2023-03-02T07:26:29.000Z",formattedDate:"March 2, 2023",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:6.45,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"February 2023",slug:"2023-02",authors:"ch1bo",tags:["monthly"]},unlisted:!1,prevItem:{title:"March 2023",permalink:"/monthly/2023-03"},nextItem:{title:"January 2023",permalink:"/monthly/2023-01"}},h={authorsImageUrls:[void 0]},l=[{value:"Roadmap",id:"roadmap",level:2},{value:"Development",id:"development",level:2},{value:"Community",id:"community",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This report summarizes the work on Hydra since January 2023. It serves as\npreparation for the monthly review meeting, where the teams update major project\nstakeholders on recent developments to gather their feedback on proposed plans."}),"\n",(0,i.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,i.jsxs)(n.p,{children:["Looking at the ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21",children:"roadmap"}),",\nthere are a few things that changed this month:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In general, there will be several items in flux as we align the technical\nroadmap to support our high-level objectives for the year."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New items for example: ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/710",children:"create a use case-centric roadmap\n#710"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/693",children:"open\nspecification with change process\n#693"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Also note that we have not had a release in a while and we want to have\nsmaller faster releasable items again."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/452",children:"Aligning implementation with HeadV1 specification\n#452"})," was more work than\nanticipated. There was quite some back and forth with the writing of the\nspecification and discussions with researchers leading to scope creep.",(0,i.jsx)(n.br,{}),"\n","Most importantly, we made on-chain behavior consistent with specification."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow-ups for some off-chain protocol logic:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/727",children:"Authenticate network messages\n#727"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/728",children:"ReqSn only sends transaction ids\n#728"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Version ",(0,i.jsx)(n.strong,{children:"0.9.0"})," will be the first release to be developed against a full\ntechnical specification. We expect a release in early March."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Version ",(0,i.jsx)(n.strong,{children:"0.10.0"})," will be the first mainnet compatible release. For this, we\ncreated and groomed the main feature item ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/713",children:"Mainnet compatibility\n#713"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not only making it technically compatible but also adding guard rails to\nlimit risk (\u201cnot shoot yourself in the foot .. with a real gun now\u201d) and\ndocumenting known issues."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For a fully maintained version ",(0,i.jsx)(n.strong,{children:"1.0.0"})," we still need to address some things,\nbut we aim for an increased rate of planned releases in the next months as we\nmarch toward it."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:t(9559).A+"",width:"3119",height:"1086"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:" The latest roadmap with multiple\nnew items and starting to reflect Hydra objectives of 2023."})})]}),"\n",(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-01-24..2023-02-28",children:"Issues and pull requests closed since last\nreport"})}),"\n",(0,i.jsx)(n.p,{children:"This month, the team worked on the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Aligning specification and implementation"}),". This major ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/452",children:"feature\nitem"})," was the topic we\nworked on over the last couple of months. This time we could finish the major,\nmust-have parts and can continue now on other features. Notable things from\nthis month were:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pushing out contestation deadlines:"}),' The original paper defined that all\nparticipants need to be contesting within the contestation period (after\nclose, before the deadline). In discussions with researchers last year, we\nidentified better semantics: the contestation deadline gets "pushed out" on\neach contest. This has the benefit that the period needs to only accommodate\nthe minimum time required to get a single contest transaction into the\nblockchain. Before it was depending on the size of the Hydra head - each\nparticipant can contest once.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Align off-chain protocol logic:"})," While most concerns addressed were about\nthe on-chain scripts of the Hydra protocol, this is about the layer two\nprotocol logic. That is, which messages are exchanged between Hydra nodes and\nhow a node reacts to them. Here we realized that the implementation was\nslightly different from the formalism used in the paper and specification.\nThis makes it non-obvious whether the behavior is exactly as specified or\nwhether the specification can even be implemented into a working system."]}),"\n",(0,i.jsx)(n.p,{children:"To clarify this, we put in some effort to align the implementation with the\nspecification and the other way around. This allowed us to reason through our\nbehavior tests whether the protocol as specified is sound as well. Below you\nsee an excerpt of the Haskell code against the LaTeX pseudocode formalism:"}),"\n",(0,i.jsxs)("center",{children:[(0,i.jsx)("img",{src:t(1763).A,style:{width:310}}),(0,i.jsx)("img",{src:t(1523).A,style:{width:250}})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Profiling Hydra transactions."})," We will want to maximize the capability of\nthe Hydra Head protocol. This includes writing the on-chain scripts\nefficiently. Besides having ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/benchmarks/transaction-cost/",children:"transaction cost\nbenchmarks"}),",\nwe worked on a profiling workflow for Hydra protocol transactions and\npublished a ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/benchmarks/profiling",children:"tutorial on the Hydra\nwebsite"}),". This allows\nany contributor to ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra",children:"Hydra"})," to\nprofile the scripts used in these transactions and identify code that uses a\nlot of the memory or CPU budget in flame graphs like this:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:t(9123).A+"",width:"1200",height:"342"})," [Interactive]Head not closable/limiting\nscript size discussion + acceptance property"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Audit guidelines."})," Hydra is an open-source project and, as such, should be\nfreely used, reviewed and audited. The goal of audits and peer reviews is to\nincrease confidence in the security of a system. However, conducting an audit\nis also very expensive and not in the scope of our current budget. All the\nwhile, the worth of an audit is not the same to all users, some will not even\ntrust an audit they have not paid for themselves, while others do not care at\nall and would blindly trust the word of the maintainers."]}),"\n",(0,i.jsxs)(n.p,{children:["While the Hydra project continues to seek for funding to eventually pay for an\naudit of the protocol specification and the ",(0,i.jsx)(n.code,{children:"hydra-node"})," implementation, it is\na prerequisite that the necessary artifacts for such an audit exist. As we\nhave been creating them in recent months, we also worked on guidelines for\nauditors, now ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/audit-guidelines/",children:"published on our\nwebsite"}),". These\nguidelines should serve as a starting point and scope description of what\nwould be most crucial to audit."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New tutorial."})," This month we received a great contribution from\n",(0,i.jsx)(n.a,{href:"https://github.com/perturbing/",children:"@perturbing"}),", who created an ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/docs/tutorial/",children:"end-to-end\ntutorial"})," on using a\n",(0,i.jsx)(n.code,{children:"hydra-node"})," and opening a Hydra head on the testnet. We gladly adopted this\ntutorial and aim to keep it up to date with upcoming versions of the\n",(0,i.jsx)(n.code,{children:"hydra-node"}),". It will provide a great starting point for new users and makes\nthe project more approachable. Thanks! ","\ud83d\udc9a"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hydra for Payments demo."})," As we are about to kick off the next phase of the\npayments use case with Obsidian Systems, they demonstrated the use of\n",(0,i.jsx)(n.a,{href:"https://github.com/obsidiansystems/hydra-pay",children:"hydra-pay"})," in a new\nbackoffice-like view, listing multiple payment channels and providing a great\nteaser of using payment channels for pay-per-use APIs or cashback use cases\n(micro-transactions)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4548).A+"",width:"1466",height:"917"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hydra for Voting."})," The project with Catalyst and Cardano Foundation on\nvoting with Hydra (or rather ",(0,i.jsx)(n.em,{children:"tallying"})," with Hydra) showed some progress. They\nhave ",(0,i.jsx)(n.a,{href:"https://github.com/aiken-lang/trees/pull/1",children:"contributed Merkle Trees to\nAiken"}),", which will be useful to\nprove the correct tallying of votes in the L2. They started work on a\n",(0,i.jsx)(n.a,{href:"https://github.com/cardano-foundation/hydra-java-client",children:"hydra-java-client"}),"\nand provided valuable feedback on the ",(0,i.jsx)(n.code,{children:"hydra-node"})," API over the last month."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hydra on Demeter."})," The folks from ",(0,i.jsx)(n.a,{href:"https://github.com/txpipe",children:"@txpipe"})," have\nbeen working on integrating Hydra into their platform-as-a-service offering,\nDemeter. This is a great way to get started with running a ",(0,i.jsx)(n.code,{children:"hydra-node"})," as a\nservice and we plan on integrating one instance into our long-running hydraw\ndemo. It's still not fully released, but the teams are working together to\nmake this integration great. Thanks for providing this service! ","\ud83d\udc9a"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New discord category."})," The Hydra project will be using Discord a bit more\nin the coming weeks and months. For that, a new category on the ",(0,i.jsx)(n.a,{href:"https://discord.gg/Bwdy2jNdm2",children:"IOG Technical\nDiscord server"})," has been created. Look out for\nnews and, most importantly, invites for the next month's review meeting in the\nnew Hydra #announcements channel!"]}),"\n",(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)("img",{src:t(822).A,style:{width:300,margin:"0 auto"}})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["The monthly review meeting for February was conducted on 2023-02-27 via Google\nMeet -\n",(0,i.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1FjLvlLS4Qh6dwuULFJxielvemDGi-xiWZ2o6wysJk7U/edit#slide=id.g1f87a7454a5_0_1392",children:"slides"}),"\n/\n",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/15l5F5NJNO1aC4X8HdQUDsg_dKMgVCO-J/view?usp=sharing",children:"recording"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This month's installment featured two demos, one about the Hydra Payment\nchannels, and another about the progress on the Hydra for Auctions project. It\nwas great to showcase not only core development progress on the specification\nand protocol implementation in the ",(0,i.jsx)(n.code,{children:"hydra-node"}),", but also to see contributions\nfrom the Community on tutorials and tooling (Demeter integration)."]}),"\n",(0,i.jsx)(n.p,{children:"An exciting, but also challenging next step will be to aim for mainnet\ncompatibility and at the same time deliver quick releases to enable these\nlighthouse projects and the increasing number of use cases explored by the\nbuilders of Cardano."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},822:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-discord-fea5adbeb6ded88bb79eac021b0a00a9.png"},1763:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-logic-haskell-cd9e1b7595a0048c6e8e550c0a47042f.png"},1523:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-logic-latex-027405f2f4b083633399b58497b8fa77.png"},4548:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-payment-channels-02c368c8c8eac729f02666cf0363ab71.png"},9123:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-profile-mem-1962b88f74167af737797653b64ca737.svg"},9559:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-02-roadmap-3d107488f95a55e129b4835610d70076.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);