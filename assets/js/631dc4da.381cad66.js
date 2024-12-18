"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[8809],{8418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={title:"March 2023",slug:"2023-03",authors:["ffakenz","v0d1ch","ch1bo"],tags:["monthly"]},o=void 0,a={permalink:"/monthly/2023-03",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2023-03-monthly.md",source:"@site/monthly/2023-03-monthly.md",title:"March 2023",description:"This report summarizes the work on Hydra since February 2023. It serves as",date:"2023-04-04T13:15:50.000Z",formattedDate:"April 4, 2023",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:5.03,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Senior Software Engineer, IOG",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"},{name:"Sasha Bogicevic",title:"Senior Software Engineer, IOG",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"},{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"March 2023",slug:"2023-03",authors:["ffakenz","v0d1ch","ch1bo"],tags:["monthly"]},unlisted:!1,prevItem:{title:"April 2023",permalink:"/monthly/2023-04"},nextItem:{title:"February 2023",permalink:"/monthly/2023-02"}},h={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"Roadmap",id:"roadmap",level:2},{value:"Released version 0.9.0",id:"released-version-090",level:4},{value:"Notable roadmap updates",id:"notable-roadmap-updates",level:4},{value:"Development",id:"development",level:2},{value:"Community",id:"community",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This report summarizes the work on Hydra since February 2023. It serves as\npreparation for the monthly review meeting\n(",(0,s.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1yZ4AqUQ8OBMG9ARMYvj3IOjaIAqglf7kZei4vsLMrbs/edit#slide=id.g1f87a7454a5_0_1392",children:"slides"}),"/",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=mA9lMV0tKN8",children:"recording"}),")\n, where the team updates major project stakeholders on recent developments to\ngather their feedback on proposed plans."]}),"\n",(0,s.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,s.jsxs)(n.p,{children:["The project saw one release this month and several items on our\n",(0,s.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21",children:"roadmap"})," were updated."]}),"\n",(0,s.jsx)(n.h4,{id:"released-version-090",children:"Released version 0.9.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This release brought in on-chain and off-chain changes that are now also fully\nreflected in our specification."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We managed to decrease the costs of our plutus scripts by using a new error code\nframework and made also the head script a reference script."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The mutation test suite is improved. Now, if tests fail they show the correct reason."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The contestation deadline is now pushed out by each contesting party, so the\ncontestation period parameter can be chosen irrespective of number of parties."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added a tutorial contributed by ",(0,s.jsx)(n.a,{href:"https://github.com/perturbing/",children:"@perturbing"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/releases/tag/0.9.0",children:"Full release notes"})," and list of ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/milestone/9?closed=1",children:"delivered features"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(9054).A+"",width:"1873",height:"609"})," ",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:"The latest roadmap, with many items marked as idea."})})]}),"\n",(0,s.jsx)(n.h4,{id:"notable-roadmap-updates",children:"Notable roadmap updates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Now that 0.9.0 is released, the focus is on mainnet compatiblity. The\nnext planned version ",(0,s.jsx)(n.strong,{children:"0.10.0"})," will be the first ",(0,s.jsx)(n.code,{children:"hydra-node"})," to be\nmainnet compatible."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Also prioritized ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/380",children:"API configurability\n#380"})," higher and planned\nit into 0.10.0 as more users were requesting this."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["We aim for several more ",(0,s.jsx)(n.strong,{children:"0.x.0"})," versions to incorporate user-requested\nfeatures before reaching a 1.0.0, which will be a fully maintained release\nwhere features can be considered stable and won't be removed without\nappropriate deprecation cycles."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Marked multiple features as \ud83d\udcad ",(0,s.jsx)(n.em,{children:"idea"}),", meaning they are up for discussion.\nMany have been on the roadmap for a long time without user demand or input,\nwhile other ideas are incubating as ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/discussions/categories/ideas",children:"github idea\ndiscussion"}),".\nWe are planning to convert these idea issues to GitHub discussions as these\nprovide better dicussion tools and allow to gauge interest in topics. In turn,\nby cleaning up we provide more room for the most popular ideas to be planned\nonto the roadmap in a more timely manner."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In short, if you want to see some feature added, ",(0,s.jsx)(n.strong,{children:"show your support"})," on the\ncorresponding ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/discussions/categories/ideas",children:"idea\ndiscussion"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The \ud83d\udcac ",(0,s.jsx)(n.em,{children:"feature"}),' items remaining are the currently identifed "must-haves" or\ntoo vague to remove \ud83d\udd34 ',(0,s.jsx)(n.em,{children:"red"})," items."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(7173).A+"",width:"1778",height:"749"})," ",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:"The roadmap without idea items."})})]}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-02-24..2023-03-29",children:"Issues and pull requests closed since last\nreport"})}),"\n",(0,s.jsx)(n.p,{children:"This month, the team worked on the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Making Hydra mainnet compatible."})," Besides making it technically possible to\nrun on mainnet, this is about safeguarding our users and preventing them from\nshooting themselves in the foot with a mainnet gun. That is why we\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/762",children:"limited"})," the amount of\nada you can commit to a head on mainnet. Our smoke tests should be running on\nmainnet also so we made sure to\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/770",children:"return"})," the leftover funds\nback to our faucet. There was also\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/775",children:"work"})," on our CI that\nenables running the tests on mainnet using a dedicated github runner."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Improving the Hydra UX."})," We noticed a possible pitfall when restarting the\n",(0,s.jsx)(n.code,{children:"hydra-node"})," using different parameters than in the persisted state. Now, the\nnode would ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/764",children:"prevent"})," this\nkind of misconfiguration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Optimize the on-chain scripts."})," Reduced the cost of opening/closing a Head\nby reducing size of scripts via error codes\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/748",children:"#748"})," and also having the\nhead script as a reference only\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/701",children:"#701"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The mutation test also got improved by making all cases expect the\ncorresponding error codes\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/705",children:"#705"})," and new ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/772",children:"golden\ntest suite "})," ensures the\nscript hashes don't change accidentally."]}),"\n",(0,s.jsxs)(n.p,{children:["Furthermore, we addressed a problem discovered in our property tests\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/724",children:"#724"})," by preventing\ncommitting outputs with reference scripts to a Head\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/766",children:"#766"}),". This is still a\ndocumented known issue, but a workaround is available."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Team workshop in Austria."})," Meetup of core contributors in Feldkirch,\nAustria for retrospective, grooming and discussions on future plans for\nHydra. Part of the agenda was also a presentation of Hydra to members of the\nCardano Foundation and a meeting with builders from the Cardano community."]}),"\n",(0,s.jsx)(n.p,{children:"The highlight, though was the common effort of going the last mile to open a\nhead on mainnet for the monthly review meeting! \ud83c\udf89"}),"\n",(0,s.jsxs)("blockquote",{class:"twitter-tweet",children:[(0,s.jsxs)("p",{lang:"en",dir:"ltr",children:["JUST IN: We have a Hydra Head live on the ",(0,s.jsx)("a",{href:"https://twitter.com/hashtag/Cardano?src=hash&ref_src=twsrc%5Etfw",children:"#Cardano"})," Mainnet \ud83d\ude80 ",(0,s.jsx)("a",{href:"https://t.co/6kDKq7T7no",children:"pic.twitter.com/6kDKq7T7no"})]}),"\u2014 Emmanuel \ud80c\udc80 \ud83c\udf55 \ud80c\udd53\ud83c\uddec\ud83c\udded\ud83e\udd84\ud83d\udfe3\u26a1\ufe0f (@thepizzaknight_) ",(0,s.jsx)("a",{href:"https://twitter.com/thepizzaknight_/status/1638572527789252608?ref_src=twsrc%5Etfw",children:"March 22, 2023"})]}),"\n",(0,s.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),"\n",(0,s.jsxs)(n.p,{children:["We demonstrated our good old ",(0,s.jsx)(n.code,{children:"hydraw"})," application on that Hydra head and we\nsaw thousands of pixels painted by hundreds of users (no detailed metrics)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Next step in Hydra for Payments."})," Also announced in the monthly meeting was\nthe next phase on the Hydra for Payments project. The scope of this will be to\nextend hydra-pay and build a mobile payment channels app that makes direct use\nof it - working title: HydraNow."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["The monthly review meeting for March was conducted on 2023-03-27 via Google\nMeet - ",(0,s.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1yZ4AqUQ8OBMG9ARMYvj3IOjaIAqglf7kZei4vsLMrbs/edit#slide=id.g1f87a7454a5_0_1392",children:"slides"}),"/",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=mA9lMV0tKN8",children:"recording"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This month was very important for the project and culminated in the first\ndemonstration of a Hydra Head on mainnet! The demo was well received and we\nreceived positive feedback in the meeting, on following twitter announcements\nand on the published recording on youtube. Inspired by this, we saw multiple\npeople offer to help and collaborate on communicating, educating and ultimately\nspreading the love. The invitation via the new discord category worked well - we\nhad about 40 community members in the call - and we will continue with this\nworkflow. Make sure to follow the Hydra\n",(0,s.jsx)(n.a,{href:"https://discord.gg/Bwdy2jNdm2",children:"#announcements"})," on the IOG Technical discord\nserver."]}),"\n",(0,s.jsx)(n.p,{children:"While being mainnet compatible is a major milestone for the project, there are\nstill many known issues, shortcomings and requested features. The roadmap\nchanges this month should make it clear that we are serious about the latter -\nHydra will only reach 1.0.0 if it is used by an application on mainnet. Hence,\nwe will focus on adding features required for payments, voting, auctions, ...\nand eventually, your use case."}),"\n",(0,s.jsx)(n.p,{children:"Hydra Head is ready to be used on mainnet. Are you ready to use it?"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7173:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2023-03-roadmap-ex-ideas-780befa80ce4acd0270b5952637d2265.png"},9054:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2023-03-roadmap-0dbb5851443550bdeea79e517480eed0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);