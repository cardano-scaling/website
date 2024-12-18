"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[8807],{9135:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=i(4848),t=i(8453);const r={title:"September 2024",slug:"2024-09",authors:["ch1bo","noonio","jpraynaud","v0d1ch","ffakenz"],tags:["monthly"]},o=void 0,a={permalink:"/monthly/2024-09",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2024-09-monthly.md",source:"@site/monthly/2024-09-monthly.md",title:"September 2024",description:"This is a monthly report on the progress of \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since August 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-09-25 using these slides and you can see the recording here.",date:"2024-10-04T16:01:24.000Z",formattedDate:"October 4, 2024",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:8.665,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead, IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Noon van der Silk",title:"Software Engineering Lead, IOG",url:"https://github.com/noonio",imageURL:"https://github.com/noonio.png",key:"noonio"},{name:"Jean-Philippe Raynaud",title:"Software Engineering Lead, Palo IT",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"},{name:"Sasha Bogicevic",title:"Senior Software Engineer, IOG",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"},{name:"Franco Testagrossa",title:"Senior Software Engineer, IOG",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"September 2024",slug:"2024-09",authors:["ch1bo","noonio","jpraynaud","v0d1ch","ffakenz"],tags:["monthly"]},unlisted:!1,prevItem:{title:"October 2024",permalink:"/monthly/2024-10"},nextItem:{title:"August 2024",permalink:"/monthly/2024-08"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},h=[{value:"Mithril",id:"mithril",level:2},{value:"Roadmap",id:"roadmap",level:3},{value:"Distributions",id:"distributions",level:3},{value:"Future distributions",id:"future-distributions",level:4},{value:"Dev blog",id:"dev-blog",level:3},{value:"Protocol status",id:"protocol-status",level:3},{value:"Decentralized message queue for Cardano",id:"decentralized-message-queue-for-cardano",level:3},{value:"Hydra",id:"hydra",level:2},{value:"Spike: head-in-head",id:"spike-head-in-head",level:3},{value:"Hydra \ud83e\udd1d Blockfrost: chain backend concept",id:"hydra--blockfrost-chain-backend-concept",level:3},{value:"Spike: Raft-based networking",id:"spike-raft-based-networking",level:3},{value:"Incremental commits",id:"incremental-commits",level:3},{value:"Links",id:"links",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This is a monthly report on the progress of \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since August 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-09-25 using these ",(0,s.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1-_IFTibG1woAhVZohJh9gcZUO-YJyJqhH2sHv4PbJgc",children:"slides"})," and ",(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1jygDX-AGNGIGU7pq4ljEDuG39KVkInlJ",children:"you can see the recording here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"mithril",children:"Mithril"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30",children:"Issues and pull requests closed in September"})}),"\n",(0,s.jsx)(n.h3,{id:"roadmap",children:"Roadmap"}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s the latest on our roadmap:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cardano transactions signature/proving MVP"})," ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues/1457",children:"#1457"}),": the feature is pending activation on ",(0,s.jsx)(n.code,{children:"mainnet"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cardano stake distribution certification"})," ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues/955",children:"#955"}),": the feature is pending activation on ",(0,s.jsx)(n.code,{children:"preview"}),", ",(0,s.jsx)(n.code,{children:"preprod"})," and ",(0,s.jsx)(n.code,{children:"mainnet"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Decentralization of signature orchestration"})," ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues/1777",children:"#1777"}),": feature implementation is being finalized"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CIP for Mithril signature diffusion through the Cardano network"})," ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/issues/1775",children:"#1775"}),": the draft CIP is in review."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(7990).A+"",width:"1718",height:"787"}),"\n",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:"Feature activation and distribution schedule for Mithril"})})]}),"\n",(0,s.jsx)(n.h3,{id:"distributions",children:"Distributions"}),"\n",(0,s.jsxs)(n.p,{children:["We released Mithril distribution ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2437.1",children:(0,s.jsx)(n.code,{children:"2437.1"})}),", which includes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Breaking changes"})," in the ",(0,s.jsx)(n.strong,{children:"Mithril client WASM"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Seamless transition from ",(0,s.jsx)(n.strong,{children:"unstable"})," to ",(0,s.jsx)(n.strong,{children:"stable"})," features"]}),"\n",(0,s.jsxs)(n.li,{children:["A new ",(0,s.jsx)(n.code,{children:"unstable"})," option in the client allows using unstable features"]}),"\n",(0,s.jsxs)(n.li,{children:["The previous ",(0,s.jsx)(n.code,{children:"client.unstable"})," implementation is not supported anymore and must be replaced with ",(0,s.jsx)(n.code,{children:"client"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Stable support for ",(0,s.jsx)(n.strong,{children:"Cardano transaction"})," certification in signer and aggregator"]}),"\n",(0,s.jsxs)(n.li,{children:["Stable support for ",(0,s.jsx)(n.strong,{children:"Cardano stake distribution"})," certification in signer and aggregator"]}),"\n",(0,s.jsx)(n.li,{children:"Bug fixes and performance improvements."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"future-distributions",children:"Future distributions"}),"\n",(0,s.jsx)(n.p,{children:"We plan to release new distributions in October:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"2440"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Stable clients for ",(0,s.jsx)(n.strong,{children:"Cardano transaction"})," certification"]}),"\n",(0,s.jsxs)(n.li,{children:["Activation of the certification of ",(0,s.jsx)(n.strong,{children:"Cardano stake distribution"})," in ",(0,s.jsx)(n.code,{children:"pre-release-preview"}),", ",(0,s.jsx)(n.code,{children:"release-preprod"}),", and ",(0,s.jsx)(n.code,{children:"release-mainnet"})]}),"\n",(0,s.jsxs)(n.li,{children:["Stable support for new ",(0,s.jsx)(n.code,{children:"Pythagoras"})," Mithril era"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"2443"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Stable clients for ",(0,s.jsx)(n.strong,{children:"Cardano stake distribution"})," certification."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dev-blog",children:"Dev blog"}),"\n",(0,s.jsx)(n.p,{children:"We have published the following posts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mithril.network/doc/dev-blog/2024/09/24/client-wasm-unstable-breaking-change",children:"Mithril client WASM breaking change"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://mithril.network/doc/dev-blog/2024/07/30/cardano-transaction-certification",children:"Certification of Cardano transactions"})," (Updated)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"protocol-status",children:"Protocol status"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(6002).A+"",width:"1162",height:"853"}),"\n",(0,s.jsx)("small",{children:(0,s.jsxs)("center",{children:["The latest status of the Mithril protocol on Cardano ",(0,s.jsx)(n.code,{children:"mainnet"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"decentralized-message-queue-for-cardano",children:"Decentralized message queue for Cardano"}),"\n",(0,s.jsxs)(n.p,{children:["We continued working on the ",(0,s.jsx)(n.strong,{children:"decentralized message queue"})," (DMQ) for Cardano, as proposed in this ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-foundation/CIPs/pull/876",children:"CIP draft"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The DMQ is designed to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Leverage the Cardano network layer"}),"\n",(0,s.jsx)(n.li,{children:"Initially be used by Mithril for the diffusion of signatures from signers to aggregators"}),"\n",(0,s.jsx)(n.li,{children:"Be adaptable for future Cardano protocols, each operating on a different DMQ topic."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The DMQ will be operated by a 'side' node, known as the DMQ node, which will run a separate peer-to-peer network powered by the Ouroboros network stack. Here are some key technical details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It will run as an external process that exposes a Unix socket to support node-to-client mini-protocols"}),"\n",(0,s.jsx)(n.li,{children:"It will implement node-to-client and node-to-node mini-protocols to allow for message local submission, local notification, and peer-to-peer submission"}),"\n",(0,s.jsx)(n.li,{children:"It will retrieve the Cardano stake distribution from its local Cardano node to authenticate incoming messages"}),"\n",(0,s.jsx)(n.li,{children:"It will retrieve other peers' information about the peer-to-peer network from its local Cardano node (this topic is being investigated: either with a ledger hard fork, redirecting connections to the DMQ node, or leveraging the SRV record in the SPOs' DNS)"}),"\n",(0,s.jsx)(n.li,{children:"Each topic of the message queue will run a different DMQ node instantiated with a specific configuration."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Producers and consumers exist for the DMQ topic running on some DMQ nodes. In the case of Mithril:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Mithril signers will be the producers of the message (Mithril individual signatures)"}),"\n",(0,s.jsx)(n.li,{children:"The Mithril aggregators will be the consumers of the message (Mithril individual signatures)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"DMQ producers and consumers run on various DMQ nodes:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(3279).A+"",width:"1336",height:"748"}),"\n",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:"DMQ node architecture"})})]}),"\n",(0,s.jsx)(n.h2,{id:"hydra",children:"Hydra"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30",children:"Issues and pull requests closed in September"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"The roadmap with features and ideas",src:i(3707).A+"",width:"2048",height:"751"}),"\n",(0,s.jsx)("small",{children:(0,s.jsxs)("center",{children:["Snapshot of the new ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," with features and ideas"]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Notable updates on our ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/cardano-scaling/projects/7/views/1",children:"roadmap"})," this month include:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Released version ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/releases/tag/0.19.0",children:"0.19.0"})," introducing Conway ledger support with compatibility for Babbage transactions ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/pull/1608",children:"#1608"})]}),"\n",(0,s.jsxs)(n.li,{children:["Completed the Hydra 'head-in-head' spike ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1590",children:"#1590"})]}),"\n",(0,s.jsxs)(n.li,{children:["Investigated Raft consensus for networking ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1591",children:"#1591"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added 'HeadId' into the 'Greetings' message ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1557",children:"#1557"})]}),"\n",(0,s.jsxs)(n.li,{children:["Implemented the initial suite of network-resilience tests ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1532",children:"#1532"})]}),"\n",(0,s.jsxs)(n.li,{children:["Changed network semantics to broadcast to everyone ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/pull/1624",children:"#1624"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"spike-head-in-head",children:"Spike: head-in-head"}),"\n",(0,s.jsx)(n.p,{children:"When a Hydra head is opened, part of the underlying ledger state gets locked and made available off-chain to a small group of participants. While this already creates a 'small world' to process transactions (which makes it fast and cheap), we encountered use cases where it would make sense to open additional heads with different or even smaller groups of participants on parts of the layer 2 state, forming layer 3 heads."}),"\n",(0,s.jsxs)(n.p,{children:["One example of this use case is the Hydra Doom demonstration we ",(0,s.jsx)(n.a,{href:"/monthly/2024-08#hydra-doom",children:"presented at Rare Evo last month"}),". For example, individual multiplayer game sessions require low network latency from regionally close machines. If those machines run a game session head that, in turn, locks funds and game state from a slower global tournament head instance, we are discussing Hydra heads in heads."]}),"\n",(0,s.jsxs)(n.p,{children:["This construction raises ",(0,s.jsx)(n.strong,{children:"many open questions about liveness"}),": what happens to the layer 3 head if the layer 2 head stops processing transactions? Such pessimistic scenarios can occur in any optimistic protocol and must be addressed, though not necessarily optimized for. Despite these and other uncertainties, we spent time this month exploring whether it\u2019s even possible as part of the spike issue ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1590",children:"#1590"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Technically, this means that a ",(0,s.jsx)(n.code,{children:"hydra-node"})," communicates with another ",(0,s.jsx)(n.code,{children:"hydra-node"})," as its 'chain backend', interpreting snapshots of the layer 2 head as blocks, observing transactions that open or close the head, and submitting its state transition transactions to the underlying layer 2 ledger. The spike issue provides more details and instructions on reproducing these findings. The following issues demonstrate this prototype ",(0,s.jsx)(n.code,{children:"--inception"})," mode:"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Y_Pw3MVooxg?si=6M2irHZgwPLiSQAo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),"\n",(0,s.jsx)(n.h3,{id:"hydra--blockfrost-chain-backend-concept",children:"Hydra \ud83e\udd1d Blockfrost: chain backend concept"}),"\n",(0,s.jsxs)(n.p,{children:["As outlined in ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1305",children:"#1305"}),", we are considering an option to run the ",(0,s.jsx)(n.code,{children:"hydra-node"})," in a more lightweight mode, without requiring the full ",(0,s.jsx)(n.code,{children:"cardano-node"}),". This feature is particularly relevant when considering the use of Hydra with the pay-per-use Blockfrost API."]}),"\n",(0,s.jsx)(n.p,{children:"To complete this component, the Blockfrost chain layer must be capable of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Following the chain"}),"\n",(0,s.jsx)(n.li,{children:"Submitting Hydra transactions"}),"\n",(0,s.jsxs)(n.li,{children:["Handling relevant internal wallet queries for the ",(0,s.jsx)(n.code,{children:"hydra-node"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As an initial step, we have developed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Hydra chain observer that operates in Blockfrost mode (although it has not yet been integrated into the ",(0,s.jsx)(n.code,{children:"hydra-node"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["A variant of the ",(0,s.jsx)(n.code,{children:"hydra-explorer"})," tailored to the Blockfrost-enabled Hydra chain observer."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To achieve this, we have used a straightforward roll-forward approach via the Blockfrost ",(0,s.jsx)(n.a,{href:"https://docs.blockfrost.io/",children:"HTTP API"}),", relying on the following key API calls:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /blocks/{hash}"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"confirmations"}),": number of block confirmations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"next_block_hash"}),": (nullable) hash of the next block"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GET /blocks/{hash}/txs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GET /txs/{hash}/cbor"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Basically, we continuously fetch specific blocks by their hash, using the number of confirmations to indicate the block's safety (minimizing the likelihood of a rollback). From there, we roll forward using the reference to the next block hash."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"While this mechanism might appear simplistic, it is highly effective for most use cases except scenarios involving exchanges."}),"\n",(0,s.jsx)(n.p,{children:"To further optimize the performance of this new chain component, we\u2019ve raised two new issues on the Blockfrost side to support our work:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/blockfrost/blockfrost-backend-ryo/issues/209",children:"#209"}),": add an endpoint to fetch all transaction CBORs in a block, reducing the number of API calls needed to retrieve Hydra head observations from block transactions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/blockfrost/blockfrost-haskell/issues/67",children:"#67"}),": implement concurrent fetching to fully leverage parallel requests and enhance performance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Moving forward, our next objective is to enable the ",(0,s.jsx)(n.code,{children:"hydra-node"})," to publish Hydra scripts via Blockfrost, as outlined in ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1668",children:"#1668"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"spike-raft-based-networking",children:"Spike: Raft-based networking"}),"\n",(0,s.jsxs)(n.p,{children:["Last month, we developed a new test suite ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1532",children:"#1532"})," to assess the resilience of our network stack. Now that this is in place, we can start exploring different approaches to achieve our goal of a crash-tolerant network layer."]}),"\n",(0,s.jsxs)(n.p,{children:["Recently, we stumbled upon this ",(0,s.jsx)(n.a,{href:"https://arxiv.org/pdf/1707.01873",children:"fairly old research paper"})," that explored various consensus protocols used in blockchain space. It reminded us of the correspondence between consensus and broadcasts:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The form of consensus relevant to blockchain is technically known as atomic broadcast"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, it mentioned at least one early permissioned blockchain that achieved crash tolerance of ",(0,s.jsx)(n.code,{children:"t < n/2"})," by using ",(0,s.jsx)(n.a,{href:"https://etcd.io/",children:"etcd"})," with its off-the-shelf ",(0,s.jsx)(n.a,{href:"https://raft.github.io/",children:"Raft"})," consensus algorithm. This prompted us to explore the possibility of replacing our custom network stack with this (arguably overkill) alternative in an experiment ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/issues/1591",children:"#1591"})," to evaluate its performance."]}),"\n",(0,s.jsxs)(n.p,{children:["The GitHub issue contains all the details, but it turns out that this idea might not be as exotic as we initially thought! Implementing ",(0,s.jsx)(n.code,{children:"broadcast"})," functionality as ",(0,s.jsx)(n.code,{children:"put"})," requests to the ",(0,s.jsx)(n.code,{children:"etcd"})," cluster works well when combined with an outbound, persisted buffer that handles failed writes while disconnected (or only connected to a minority). Additionally, the ",(0,s.jsx)(n.code,{children:"revision"})," mechanism of ",(0,s.jsx)(n.code,{children:"etcd"})," and storing the last known revision on disk allow us to create a ",(0,s.jsx)(n.code,{children:"hydra-node"})," that is fully resilient to crashes and network failures, as demonstrated in these ",(0,s.jsx)(n.a,{href:"https://github.com/cardano-scaling/hydra/actions/runs/11067586032",children:"fault injection test runs"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Even the performance of this early prototype matches or exceeds our current implementation, especially when multi-threading performance is available. For example, using a low-powered container hosted on GitHub, we observed average confirmation times on the three-node benchmark decrease from ",(0,s.jsx)(n.code,{children:"20ms to 100ms"}),", while on a desktop machine with 8+ cores, the same benchmark improved from ",(0,s.jsx)(n.code,{children:"100ms to 50ms"}),". Since the starting numbers of the released version also vary widely between machines, these results are only indicative."]}),"\n",(0,s.jsx)(n.h3,{id:"incremental-commits",children:"Incremental commits"}),"\n",(0,s.jsx)(n.p,{children:"The incremental commits feature is being developed, and we demonstrated the envisioned user workflow during the monthly meeting."}),"\n",(0,s.jsx)(n.p,{children:"Notably, users will first need to lock their UTXO in the Hydra deposit script. Once we have a signed snapshot on layer 2, the increment transaction will consume this output. Eventually, this will make the specified UTXO part of the head UTXO state on layer 2. In case of any issues, any Hydra node will be able to post a recovery transaction to unlock the UTXO."}),"\n",(0,s.jsx)(n.p,{children:"The hydra-node API includes endpoints for depositing and recovering UTXOs, providing a convenient way to build and post these transactions. We aimed to create a user-friendly experience for these actions."}),"\n",(0,s.jsx)(n.p,{children:"Next steps involve implementing comprehensive on-chain security, along with documentation and tutorials, to ensure our users understand how to use this new feature.\nThis is essential since many builders on Hydra have requested this feature."}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.p,{children:["The monthly review meeting for September 2024 was held on 2024-09-25 via Google Meet,\npresenting these ",(0,s.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1-_IFTibG1woAhVZohJh9gcZUO-YJyJqhH2sHv4PbJgc",children:"slides"})," and this ",(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1jygDX-AGNGIGU7pq4ljEDuG39KVkInlJ",children:"recording"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3707:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-09-hydra-roadmap-dc11a67edd764843de41effe50388348.jpeg"},3279:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-09-mithril-dmq-architecture-5d32c30ffbcb96af6fd9ae18642a261b.jpg"},7990:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-09-mithril-features-distributions-14c49389aa209a5c62b61c87eb0a0c15.png"},6002:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-09-mithril-protocol-status-1c18ccf3d43f995e686ad99c3171d268.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);