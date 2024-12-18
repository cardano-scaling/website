"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[3119],{8416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const a={title:"May 2023",slug:"2023-05",authors:["ch1bo","pgrange","ffakenz"],tags:["monthly"]},o=void 0,r={permalink:"/monthly/2023-05",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2023-05-monthly.md",source:"@site/monthly/2023-05-monthly.md",title:"May 2023",description:"This report summarizes the work on Hydra since April 2023. It serves as",date:"2023-05-30T14:30:18.000Z",formattedDate:"May 30, 2023",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:8.445,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Pascal Grange",title:"Senior Software Engineer, IOG",url:"https://github.com/pgrange",imageURL:"https://github.com/pgrange.png",key:"pgrange"},{name:"Franco Testagrossa",title:"Senior Software Engineer, IOG",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"May 2023",slug:"2023-05",authors:["ch1bo","pgrange","ffakenz"],tags:["monthly"]},unlisted:!1,prevItem:{title:"June 2023",permalink:"/monthly/2023-06"},nextItem:{title:"April 2023",permalink:"/monthly/2023-04"}},h={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"Roadmap",id:"roadmap",level:2},{value:"Release 0.10.0",id:"release-0100",level:4},{value:"Notable roadmap updates",id:"notable-roadmap-updates",level:4},{value:"Development",id:"development",level:2},{value:"Timed transactions #196",id:"timed-transactions-196",level:4},{value:"Removing --ledger-genesis #863",id:"removing---ledger-genesis-863",level:4},{value:"Improving CI runtime",id:"improving-ci-runtime",level:4},{value:"Community",id:"community",level:2},{value:"Hydrozoa #850",id:"hydrozoa-850",level:4},{value:"Hydra for Payments project update",id:"hydra-for-payments-project-update",level:4},{value:"Spanish translation",id:"spanish-translation",level:4},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This report summarizes the work on Hydra since April 2023. It serves as\npreparation for the monthly review meeting (see ",(0,i.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1anUC3Z1idloyR6uwiSHLZtV6-LQvUcByHPMUgCBOVIA",children:"slides"})," and\n",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view",children:"recording"}),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."]}),"\n",(0,i.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,i.jsxs)(n.p,{children:["This month the team released version 0.10.0 which includes many important features.\nThe project ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21",children:"roadmap"})," was\nonly slightly updated this month and already saw one more feature completed:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The roadmap without idea items",src:t(9851).A+"",width:"2133",height:"752"}),"\n",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"The roadmap without idea items"})})]}),"\n",(0,i.jsx)(n.h4,{id:"release-0100",children:"Release 0.10.0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["First mainnet compatible release of ",(0,i.jsx)(n.code,{children:"hydra-node"})," including technical changes and documentation"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mainnet exposure currently limited to 100\u20b3 per participant"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added some missing features to the client API (short-term solutions)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Some quality of life improvements in running the ",(0,i.jsx)(n.code,{children:"hydra-node"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/releases/tag/0.10.0",children:"Full release notes"})," and a list of ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/milestone/8?closed=1",children:"delivered features"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"notable-roadmap-updates",children:"Notable roadmap updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Got new input and a concrete scenario for benchmarking (off-chain) performance\nof a Hydra head. As it is a very basic one, we moved the item from an\nidea to a feature and started work on it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added a new feature item to add Hydra as a tool to developer platforms within our agenda of ",(0,i.jsx)(n.a,{href:"/monthly/2023-01#themes-for-2023",children:"promoting Hydra as an open-source platform"})," for scalability on Cardano."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Already completed a first feature for 0.11.0 and considering whether to release it as\nearly as possible with latest advances."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The latest roadmap with features and ideas",src:t(3748).A+"",width:"2421",height:"1112"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"The latest roadmap with features and ideas"})})]}),"\n",(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-04-26..2023-05-24",children:"Issues and pull requests closed since last\nreport"})}),"\n",(0,i.jsx)(n.p,{children:"This month, the team worked on the following:"}),"\n",(0,i.jsxs)(n.h4,{id:"timed-transactions-196",children:["Timed transactions ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/196#",children:"#196"})]}),"\n",(0,i.jsxs)(n.p,{children:["To realize the Hydra Head protocol, a ",(0,i.jsx)(n.code,{children:"hydra-node"})," observes and follows the\nchain progress on the layer 1 (L1). Until now, this component was only observing\nprotocol related transactions. Now, on every block roll forward, a ",(0,i.jsx)(n.code,{children:"Tick"})," event\ncarrying the notion of time from L1 is observed by the ",(0,i.jsx)(n.code,{children:"hydra-node"})," and is used\nto validate transactions in a Hydra head. This means that clients can submit\ntime bounded transactions to an open head and expect them to be validated using\nthe same slot that would be used on L1. It is important to mention that time\nonly advances on L1 when a block is produced."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Timed transactions in a Hydra Head state channel",src:t(7043).A+"",width:"1609",height:"970"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"Timed transactions in a Hydra Head state channel"})})]}),"\n",(0,i.jsxs)(n.p,{children:["This feature will make the Hydra L2 ledger now en-par with UTXO features\navailable on the Cardano L1. A logical next step in this direction could be to\nmake time in the state channel advance every configured ",(0,i.jsx)(n.code,{children:"slotLength"})," (e.g. every\nsecond) using the system clock in between blocks as a form of ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dead_reckoning",children:"dead reckoning"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"removing---ledger-genesis-863",children:["Removing --ledger-genesis ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/863",children:"#863"})]}),"\n",(0,i.jsxs)(n.p,{children:["The hydra-node had two command line options to configure the ledger used for validating layer 2 (L2) transactions: ",(0,i.jsx)(n.code,{children:"--ledger-protocol-parameters"})," and ",(0,i.jsx)(n.code,{children:"--ledger-genesis"}),". The former option, which is self-explanatory, allows configuration of the Cardano protocol parameters to be used. Often, the same parameters as those on L1 are configured, or similar parameters with reduced fees, for example. On the other hand, the second option required the ",(0,i.jsx)(n.code,{children:"genesis-shelley.json"})," file previously used to initialize the Shelley era by the cardano-node."]}),"\n",(0,i.jsxs)(n.p,{children:["When we started using the current slot in the L2 ledger (see above), we realized\nthat only the start time and slot length are effectively used from that\nconfiguration file. Moreover, it would be quite surprising if those were\ndifferent and slots would be longer or shorter on L2 (unless explicitly\nconfigured). We opted to remove the option altogether and have the ",(0,i.jsx)(n.code,{children:"hydra-node"}),"\nfetch the genesis parameters from the Cardano network. This makes the system\neasier to configure and more isomorphic to L1."]}),"\n",(0,i.jsx)(n.h4,{id:"improving-ci-runtime",children:"Improving CI runtime"}),"\n",(0,i.jsxs)(n.p,{children:["The Hydra project ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/adr/12",children:"embraces Test Driven Development"})," and implements\n",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/workflows/ci-nix.yaml",children:"Continuous\nIntegration"}),"\n(CI), checking all these tests pass and more."]}),"\n",(0,i.jsxs)(n.p,{children:["The CI could sometimes take as long as an hour or\nmore to run, which has a negative impact on the project's workflow.\nFor instance, all the project's branches have to be ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/wiki/Coding-Standards#merge-prs-with-merge-commits-and-rebase-branches-on-top-of-master",children:"fast-forward with\nmaster"}),"\nbefore being merged.\nSo if all the tests on a branch are green and the pull request has been\napproved but is lagging a bit behind master, it has to be rebased, so the\nCI has to run again, incurring a one hour or so delay in this case before\nbeing able to merge it. The situation becomes worse when several pull requests\nare ",(0,i.jsx)(n.em,{children:"ready"})," to be merged."]}),"\n",(0,i.jsxs)(n.p,{children:["Analyzing the run from ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/runs/4933005294",children:"May, 10th"}),"\nwe can see that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Building and testing takes 19 minutes for the longest"}),"\n",(0,i.jsx)(n.li,{children:"Generating haddock documentation and running the benchmarks takes 28 minutes\nfor the longest"}),"\n",(0,i.jsx)(n.li,{children:"Documentation (which will need artifacts generated in previous steps) will take\n14 minutes"}),"\n",(0,i.jsx)(n.li,{children:"In total, this run took 1 hour and 16 minutes."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Let's focus on the build and the testing stage first. We're expecting the\nplutus-merkle-tree to run fast but ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/runs/4933005294/jobs/8816564512",children:"it took 8 minutes and 52\nseconds"}),"\n, 7m and 11 seconds being spent setting up the build environment.\nIn other words, 81% of the build time is downloading binary dependencies from some nix cache."]}),"\n",(0,i.jsx)(n.p,{children:"Compiling the code requires cabal and other nix dependencies that will trigger\nmassive downloads. Instead, let's, straight on, run the tests with nix and let\nnix decide what needs to be compiled. Sometimes, most of the code will not have\nchanged and the test binary will already be available in some nix cache to be run\nwithout any compilation step."}),"\n",(0,i.jsxs)(n.p,{children:["This has been done in ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/867",children:"#867"}),".\nMerging this PR, the ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/runs/5003046049",children:"build on master took 45\nminutes"})," and,\nspecifically, the same ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/runs/5003046049/jobs/8963773583",children:"plutus-merkle-tree\njob"}),"\nonly took 1 minute and 44 seconds, only 20% of the time observed before."]}),"\n",(0,i.jsx)(n.p,{children:"Then, let's focus on documentation (14 minutes). Most of the time spent by this\nprocess is website optimization. It makes sense for the documentation that will\nactually be published on the website (master or release). But what about all\nthe builds in branches for which the website will never be published?\nWe need to keep this documentation step in branches because it gives us sanity\nchecks, preventing broken links, for instance. But we can definitely remove the\noptimization step."}),"\n",(0,i.jsxs)(n.p,{children:["This has been done in ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/880",children:"#880"}),"\nand it ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/actions/runs/5067084637/jobs/9098252031",children:"saves 10 minutes"}),"\nfrom this step."]}),"\n",(0,i.jsx)(n.p,{children:"Our first goal was to reduce CI execution time when pushing\non branches and this has been improved. We're now having execution time\nsignificantly under 30 minutes where it used to be 45 minutes or even an hour."}),"\n",(0,i.jsxs)(n.p,{children:["We had some issues with compilation output, obfuscated by nix, which have been\nsolved by ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/889",children:"#889"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Every morning, we rebuild our master branch and we can observe the whole\nexecution time on the following graph (in seconds):"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"CI perf",src:t(9871).A+"",width:"1942",height:"1142"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"C.I. execution total execution time"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Although we observed performance improvements on branches CI execution time,\nmaster execution time has not been reduced that much. We may save 10 minutes\nfrom the documentation step because optimizing the ",(0,i.jsx)(n.em,{children:"unstable"})," documentation is\nmaybe not worthwhile.\nBut what's more problematic here is the process variability."]}),"\n",(0,i.jsx)(n.p,{children:"This variability can be explained by nix cache misses. That's something we need\nto investigate. It's hard to optimize a process with buffers, especially here\nwhere in case of a cache miss, recompilation has to happen and takes time.\nSo every cache miss introduces several minutes of overhead which explains why we\nobserve so much variation between two days with this master execution time."}),"\n",(0,i.jsx)(n.p,{children:"Next steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Inspect why we have an unexpected random cache miss"}),"\n",(0,i.jsx)(n.li,{children:"Improve haddock generation time (15 minutes)"}),"\n",(0,i.jsx)(n.li,{children:"Reduce bench time (we probably don't want to run the whole benchmark suite for\nevery single commit, or a smaller one)"}),"\n",(0,i.jsx)(n.li,{children:"Focus on the changed area (do not compile everything to generate the monthly\nreport)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,i.jsxs)(n.h4,{id:"hydrozoa-850",children:["Hydrozoa ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/discussions/850",children:"#850"})]}),"\n",(0,i.jsxs)(n.p,{children:["This month, the project saw a new kind of contribution from the community.\n@GeorgeFlerovsky has written a research piece about an adaptation of the\n(Coordinated) Hydra Head protocol into a new flavor - Hydrozoa. The article is\ncurrently being examined and ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/discussions/850",children:"discussed on\nGitHub"}),". Feedback so\nfar has been positive. Of course, one does not simply change the Hydra Head\nprotocol (pun intended), but the ideas contained could drive evolution and\nbe followed up with concrete protocol extensions. Very much like the ideas\npresented in the original paper."]}),"\n",(0,i.jsx)(n.h4,{id:"hydra-for-payments-project-update",children:"Hydra for Payments project update"}),"\n",(0,i.jsx)(n.p,{children:"In this collaborative effort between IOG and ObsidianSystems, we are pushing the\nfrontiers of using Hydra in payment use cases. It will lower the entry barrier\nfor developers and ultimately users to leverage Hydra L2 for sending\nand receiving ada and Cardano native assets with very low fees and sub-second\nfinality."}),"\n",(0,i.jsxs)(n.p,{children:["The project is in its second phase where the open-source\n",(0,i.jsx)(n.a,{href:"https://github.com/obsidiansystems/hydra-pay",children:"hydra-pay"})," library is being\nexpanded with necessary features while the team pushes for building a\ndedicated mobile application."]}),"\n",(0,i.jsxs)(n.p,{children:["With the recently released hydra-pay version\n",(0,i.jsx)(n.a,{href:"https://github.com/obsidiansystems/hydra-pay/releases/tag/v0.2.0",children:"0.2.0"}),', an\nend-to-end workflow of the Android App nicknamed "HydraNow" can be realized.\nThis app will act as a layer 2 wallet quite like a Bitcoin Lightning Wallet and\ndrives feature development in both ',(0,i.jsx)(n.code,{children:"hydra-pay"})," and ",(0,i.jsx)(n.code,{children:"hydra"})," in the background."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Two instances of HydraNow (in browser) connected via a hydra-pay channel",src:t(6159).A+"",width:"3216",height:"1572"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"Two instances of HydraNow (in browser) connected via a hydra-pay channel"})})]}),"\n",(0,i.jsx)(n.h4,{id:"spanish-translation",children:"Spanish translation"}),"\n",(0,i.jsxs)(n.p,{children:["Last, but not least, we would like to thank @Agustinblockchain for their\ncontribution of a ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/866",children:"Spanish translation #866"}),"\nof the ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/unstable/es/",children:"hydra.family website"})," \ud83c\uddea\ud83c\uddf8 \ud83c\udf89"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["The monthly review meeting for May was held on 2023-05-24 via Google Meet with\nthese ",(0,i.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1anUC3Z1idloyR6uwiSHLZtV6-LQvUcByHPMUgCBOVIA",children:"slides"})," and here is the ",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view",children:"recording"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The monthly review meeting was lively and we had stakeholders from IOG as well\nas interested community members join. They were well served by two very nice\ndemos shown by ObsidianSystems and IOG teams."}),"\n",(0,i.jsx)(n.p,{children:"After having dealt with some issues last month, we are happy to have\nthe first mainnet-capable version released and have already another feature\ncompleted this month."}),"\n",(0,i.jsx)(n.p,{children:"It is great to see that more and more contributors from the community are\nstepping up to become advocates of the technology. A community is forming and we\nrealize that the project could need some help from someone dedicated to keep\ntrack of all the great things happening. What a great problem to have!"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9871:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-05-ci-perf-6f40f4793f448feae776a3e87c1c4d59.png"},6159:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-05-hydra-now-a33a097233ff47e7cf2ccfc064abdd7f.png"},9851:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-05-roadmap-ex-ideas-190169ec27dae76ae437be73558443c0.png"},3748:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-05-roadmap-a6eb7e109a1fe9a3beff03ac1824762b.png"},7043:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-05-timed-transactions-a2a620ded97818a461ae1a1a3caa3388.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);