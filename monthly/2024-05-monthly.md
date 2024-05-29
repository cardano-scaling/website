---
title: May 2024
slug: 2024-05
authors: [ch1bo, jpraynaud]
tags: [monthly]
---

This is a monthly report of progress on 🐲 Hydra and 🛡 Mithril projects since April 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-05-28, using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in
May](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)

TODO
  - general protocol status

TODO similar summary using new dashboard?
> As a part of our strategy to increase the participation in the Mithril protocol we have been reaching out to SPO's who don't yet run a Mithril signer, providing them with the support they need to set up and run their signer. We appreciate the SPO's such as Cardano Foundation who took the step in joining the protocol. As of epoch 481, the number of stake pools registered in the Mithril protocol as signers has reached 258. This represents approximately 5 billion ADA, which is approximately 22% of Cardano's active stake.

![](img/2024-04-mithril-participation.png)

We have released the new Mithril distribution [`2418.1`](https://github.com/input-output-hk/mithril/releases/tag/2418.1). This distribution includes several critical updates and enhancements:
- A **breaking change** is introduced in **Mithril client / Mithril client CLI**:
  - The certificate chain structure has been modified to remove coupling with immutable file number.
  - The client **must be updated** to verify certificate chain.
- We have switched the **memory allocator** to `jemallocator` on the signer and the aggregator to avoid memory fragmentation.
- We have enabled the BLST `portable` feature by default in order to benefit from **runtime check** of intel ADX instruction set.

Also, we have started the process of removing the deprecated `snapshot` command from the client which is superseded by the `cardano-db` command. This **change will be effective** with the release of the next Mithril distribution.

### Transaction certification

We have kept working on the implementation of the Cardano transactions certification with Mithril and we have achieved a new milestone with running the certification in a test network (aka `testing-mainnet`) which operates on the Cardano `mainnet`. 

This allowed us to refine our roadmap with clear objectives before the MVP can be released:
- Keep working on the low latency implementation of the certification.
- Optimize the aggregator prover route to reach good throughput.
- Optimize the signer footprint to limit the impact on the SPO infrastructure.
- Optimize the warmup of the signer and aggregator to avoid network instability/disruption once the MVP is released.

![](img/2024-05--mithril-cardano-tx-roadmap.jpg)

A first optimization of the prover route has been implemented and drastically improved the performances: by implementing resource pooling on the Merkle tree that signs the transactions by block range, we have been able to achieve a **x100** factor on the throughput.

![](img/2024-05--mithril-cardano-tx-performance-prover.png)

We have also implemented a pruning mechanism on the signer which keeps only the transactions needed to compute the upcoming signatures: this has lead to reducing the storage requirements from **32GB** to **100MB**.

### In/Out SPOs dashboard

We have added a new [page](https://mithril.network/explorer/registrations-in-out?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator) on the Mithril explorer which lists the newly registered and recently de-registered signers from the Mithril protocol.

![](img/2024-05--mithril-explorer-in-out-spos.png)

### Protocol Insights dashboard

A new [Mithril Protocol Insights Dashbord](https://lookerstudio.google.com/u/1/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/paage/kem0D) has been released. It gives access to metrics such as the number of SPOs and total stake involved, the daily number of Cardano database restorations and the running signer versions breakdown. 

Feel free to request some new metrics on the dashboard!

![](img/2024-05--mithril-protocol-insights-dashboard.png)


## Hydra

[Issues and pull requests closed in
May](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)


TODO
  - release `0.17.0` summary
  - roadmap update

![The roadmap with features and ideas](./img/2024-05-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

### Horizon haskell

TODO dan
 - introduce as an on-going workflow improvement
 - why is this important for our users? for us?
 - how is this different than the status quo?

### Transaction trace testing

TODO sasha
 - introduce using incremental decommits scope
 - how to ensure certain properties about the on-chain code
 - find a link to mutation testing (past and still important technique)
 - give example for one property that can be better ensured using tx trace testing 
 - short paragraph about how it is done (stateful property based testing where performing actions = constructing, validating and observing transactions)

### Hydra-related catalyst proposals

Catalyst Fund12 is in full swing and there over 30 proposals this round that mention "hydra" in way or another. While some of them are directly inspired by Hydra and solve similar challenges, some are also aiming to improve scalability of transaction processing but approach it quite differently (rollups and side-chains), and yet other proposals are focusing on scaling payment transactions only and refreshingly simple.

After a quick screening we also interacted with some of the proposal authors this month to answer some questions around Hydra, discuss similarities, and of course how we can learn from or help each other:

##### Use cases

- [Wine Supply Chain Tracking and Reporting System](https://cardano.ideascale.com/c/idea/121983): Great use case which requires seamless integration of recording data as transactions off-chain, while resulting states and tokens should be available from the Cardano layer 1. The team is already building a proof of concept using Hydra and this proposal is about maturing this into an MVP.
- [Ikigai + MLABS - Grabbit / Hydra auctions](https://cardano.ideascale.com/c/idea/123388): Running auctions in Hydra heads is an all-time favorite use case where bids can be done fast & cheap on the layer 2, but the ultimate purchase of the auction lot happens seamlessly on the Cardano layer 1. This proposal in particular will leverage incremental commits & decommits to enable full-backed auctions on the layer 2.

#### Using / extending hydra

- [Hydra-Enabled Micropayments System](https://cardano.ideascale.com/c/idea/120893): The same team behind the wine supply chain tracking system wants to also provide a decentralized payment system that offers great Point-of-Sales experience using Hydra at its core. While they aim to use Hydra Head as a core component, this would also be a great use case for the more payment focused variants in the long-run (see below).
- [Open-source Hydra Head L2 Web based Explorer and API](https://cardano.ideascale.com/c/idea/123375): Improving the visibility of what's going on in a Hydra Head is a great idea. Besides exploring what heads are available on the network, this would make transactions _inside_ a head more visible and is very much related to [this idea](https://github.com/input-output-hk/hydra/issues/183) on our roadmap.
- [Cardano Layer 2: Hydrozoa protocol for lightweight and flexible Hydra Heads for Cardano](https://cardano.ideascale.com/c/idea/123560): An exciting re-interpretation of the core Hydra Head protocol and ambitious simplifications of roadmap features like [directly open heads](https://github.com/input-output-hk/hydra/issues/1329), [incremental de](https://github.com/input-output-hk/hydra/issues/1057)-/[commits](https://github.com/input-output-hk/hydra/issues/199) and [optimistic head closure](https://github.com/input-output-hk/hydra/issues/198). This was also [discussed in the past](https://github.com/input-output-hk/hydra/discussions/850) with core contributors and we would love to explore how those protocol variants can find their way into the upstream Hydra Head protocol.

#### Alternative scaling approaches

- [Subbit.xyz : Cardano's featherweight L2](https://cardano.ideascale.com/c/idea/122085): Refreshingly simple take on how to process payments off-chain. Very much inspired by lightning payment channels and maybe even Chaumean eCash systems. Having payment channels that work in such a simple and flexible way is exciting and could be a great basis for any payment channel networks, i.e. Cardano Lightning
- [µgraph: Instant, Untraceable Payments in Cardano](https://cardano.ideascale.com/c/idea/122901): Ambitious, but promising, take on what the _Hydra tail_ could be: That is, an asymmetric construction which benefits individual users by using zero-knowledge proofs to ensure correct operation of the node.
- [Anastasia Labs Cardano Layer2 - Midgard](https://cardano.ideascale.com/c/idea/122254): A layer 2 construction that also aims to use the Cardano ledger isomorphically like Hydra Head, but ran by a constrained validator set and using a different consensus to enable a more side-chain like experience. We always wondered what you would get if you run a Hydra Head with a non-total consensus and checkpointing state on the layer 1!

## Technical working groups

As the age of voltaire is unfolding, it gives rise to community alliances and member based organisations. At the same time, popular belief is that the governance of core cardano projects needs to open up and decisions on what goes in or not on a roadmap of core infrastructure need to be transparent.

The current plan by Intersect and its members to deal with this, is to establish
technical working groups that work in an open an transparent way on roadmaps and
high-level backlog items. Very much as we are already doing here (see also last
months [starmap update](http://localhost:3000/monthly/2024-04#starmap-update)
section), but with a more concrete democratic approach on ratifying a roadmap.
As it stands, roadmaps for both projects, Hydra and Mithril are envisaged to be
governed that way.

Specifically for the hydra working group, first steps had been taken this month
by drafting a barebones charter and brainstormed first agenda items to inspire
candidate members and get first sessions going as we gather interested
stakeholders. The charter and any future outputs of the working group will be
hosted [`cardano-scaling/wg-hydra`](https://github.com/cardano-scaling/wg-hydra) and we
also [registered the working group at
Intersect](https://intersect.gitbook.io/intersect-working-groups/technical-working-groups/hydra).

:::info

If you read this far you might want to join us? Signal interest on by [opening an issue](https://github.com/cardano-scaling/wg-hydra/issues/new?template=sign_me_up.yml) or reach out on `#ask-hydra` on the [IOG Discord](https://discord.com/invite/Qq5vNTg9PT) or `#wg-hydra` on the Intersect Discord (as soon as it exists).

:::

## Conclusion

The monthly review meeting for May 2024 was held on 2024-05-28 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

May was a short month because of the public holidays and some people being off, but we still made good progress on both projects. The new dashboards for Mithril will visualize existing participation and surely garner more interest in the protocol. We are also excited about the progress on the Cardano transactions certification with Mithril, especially as multiple projects building bridges or layer 2s are keeping a close eye on this feature.

While we are busy on the Hydra side wrapping our head around incremental decommits and ensuring they are correctly implemented through transaction trace testing, we are also excited about the upcoming Catalyst Fund12 proposals and the discussions coming along with it as others are also looking into building similar, yet different scaling solutions and tackle the same challenges.

We are also making progress on making Hydra and Mithril less IOG-driven, but more community-owned through working groups and Intersect. We are excited to see how this will turn out.

[slides]: https://docs.google.com/presentation/d/1ByOgQt6gEjOY9Wd-xOMzeSy4lfQmMn39KEtSB-VisVw/edit#slide=id.g21194f9c145_0_5
[recording]: https://drive.google.com/file/d/1Y_xa9JjQ62m98m5MC27NDbsSjVjspnsA/view