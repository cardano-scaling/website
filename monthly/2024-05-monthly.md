---
title: May 2024
slug: 2024-05
authors: [ch1bo, jpraynaud]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since April 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month the meeting was held on 2024-05-28 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in May](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)

We have released the new Mithril distribution [`2418.1`](https://github.com/input-output-hk/mithril/releases/tag/2418.1). This distribution includes several critical updates and enhancements:
- A **breaking change** introduced in the **Mithril client / Mithril client CLI**:
  - The certificate chain structure has been modified to remove coupling with the immutable file number
  - The client **must be updated** to verify the certificate chain
- We have switched the **memory allocator** to `jemallocator` on the signer and the aggregator to avoid memory fragmentation
- We have enabled the BLST `portable` feature by default to benefit from **runtime check** of intel ADX instruction set.

Also, we have started the process of removing the deprecated `snapshot` command from the client which is superseded by the `cardano-db` command. This **change will be effective** with the release of the next Mithril distribution.

### Transaction certification

We have kept working on the implementation of the Cardano transactions certification with Mithril and we have achieved a new milestone with running the certification in a test network (aka `testing-mainnet`) which operates on the Cardano `mainnet`. 

This allowed us to refine our roadmap with clear objectives before the MVP can be released:
- Keep working on the low latency implementation of the certification
- Optimize the aggregator prover route to reach good throughput
- Optimize the signer footprint to limit the impact on the SPO infrastructure
- Optimize the signer and aggregator warmup to avoid network instability/disruption once the MVP is released.

![](img/2024-05--mithril-cardano-tx-roadmap.jpg)

A first optimization of the prover route has been implemented, drastically improving performance. By implementing resource pooling on the Merkle tree that signs transactions by block range, we have achieved a **100x** increase in throughput.

![](img/2024-05--mithril-cardano-tx-performance-prover.png)

We have also implemented a pruning mechanism on the signer that retains only the transactions needed to compute upcoming signatures. This has reduced the storage requirements from **32GB** to **100MB**.

### In/Out SPOs dashboard

We have added a new [page](https://mithril.network/explorer/registrations-in-out?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator) to the Mithril explorer that lists the newly registered and recently de-registered signers in the Mithril protocol.

![](img/2024-05--mithril-explorer-in-out-spos.png)

### The protocol insights dashboard

A new [Mithril protocol insights dashbord](https://lookerstudio.google.com/u/1/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/paage/kem0D) has been released. It provides metrics such as the number of SPOs and total stake involved, the daily number of Cardano database restorations, and the breakdown of running signer versions.

Feel free to request some new metrics on the dashboard!

![](img/2024-05--mithril-protocol-insights-dashboard.png)


## Hydra

[Issues and pull requests closed in
May](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)

This month, Hydra version `0.17.0` was released which includes
- breaking changes of the `/commit` endpoint, yielding full flexibility when committing from scripts (see [this how-to](https://hydra.family/head-protocol/docs/how-to/commit-blueprint) for details)
- new `GET /snapshot/utxo` HTTP endpoint
- detecting network protocol mismatches

- [Full release notes](https://github.com/input-output-hk/hydra/releases/tag/0.17.0) and a list of [delivered features](https://github.com/input-output-hk/hydra/milestone/18?closed=1)

Besides corresponding features being released through `0.17.0`, the roadmap did not change much this month. Current focus is on incremental decommits and commits, while we also wait for the `Conway` hard-fork to happen before we can switch the L2 ledger also to `Conway` (see [March report](/monthly/2024-03#conway-support) for more details). 

![The roadmap with features and ideas](./img/2024-05-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

### Transaction trace testing

In the process of implementing the incremental decommits feature, we constantly considered how to ensure our test suite covered all potential scenarios. For example, what happens if we request a decommit, have a signed snapshot, but never post a decommit transaction? Or how do we handle close and fanout with decommit UTXO in the snapshot? There are various scenarios we are interested in testing, and we quickly realized that we would need to test at different levels to achieve the coverage we expect, especially for our on-chain code.

Our mutation test suite was also very helpful in testing whether our on-chain code produces the expected errors when manipulating the transaction to make it invalid. However, this framework tests individual transactions, and we needed to test if multiple transactions in sequence produce valid results.

To address this, we decided to utilize quickcheck-dynamic once again to model simple snapshots, which are used to construct Hydra transactions. Our hope was that if the model is simple enough, we would be able to reason about it without delving into many details and decide if a particular UTXO/snapshot should be valid in the current transaction context or not. In the quickcheck-dynamic world, our 'Action' contains snapshots, which are then used to construct different transactions, evaluate, and observe them. Our model keeps the extra information we need to evaluate these transactions, and all snapshots are signed by everybody to keep things simple.

This test suite has already exposed some bugs we had and enabled us to reason about our code using a simpler model without burdening us with real-world details, which are more involved and harder to reason about.

### Hydra-related Catalyst proposals

Catalyst Fund12 is in full swing, with over 30 proposals this round mentioning 'Hydra' in one way or another. While some directly draw inspiration from Hydra and tackle similar challenges, others aim to enhance transaction processing scalability but take different approaches (such as rollups and sidechains). Additionally, some proposals focus solely on scaling payment transactions, offering refreshingly simple solutions.

After a quick screening, we also engaged with some of the proposal authors this month to address questions about Hydra, discuss similarities, and explore opportunities for mutual learning and collaboration:

##### Use cases

- [Wine Supply Chain Tracking and Reporting System](https://cardano.ideascale.com/c/idea/121983). Great use case that requires the seamless integration of recording data as transactions off-chain, with resulting states and tokens accessible from the Cardano layer 1. The team is already developing a proof of concept using Hydra, and this proposal aims to advance it into a minimum viable product (MVP).

- [Ikigai + MLABS - Grabbit / Hydra auctions](https://cardano.ideascale.com/c/idea/123388): Running auctions within Hydra heads is a popular use case, allowing for fast and cost-effective bids on layer 2, while the final purchase of auction items seamlessly occurs on the Cardano layer 1. This proposal, in particular, will utilize incremental commits and decommits to facilitate fully-backed auctions on layer 2.

#### Using / extending hydra

- [Hydra-Enabled Micropayments System](https://cardano.ideascale.com/c/idea/120893). The same team behind the wine supply chain tracking system wants to also provide a decentralized payment system that offers great point-of-sales experience using Hydra at its core. While they aim to use Hydra Head as a core component, this would also be a great use case for the more payment-focused variants in the long run (see below).
- [Open-source Hydra Head L2 Web-based Explorer and API](https://cardano.ideascale.com/c/idea/123375). Improving the visibility of what's going on in a Hydra Head is a great idea. Besides exploring what heads are available on the network, this would make transactions _inside_ a head more visible and is very much related to [this idea](https://github.com/input-output-hk/hydra/issues/183) on our roadmap.
- [Cardano Layer 2: Hydrozoa protocol for lightweight and flexible Hydra Heads for Cardano](https://cardano.ideascale.com/c/idea/123560). An exciting re-interpretation of the core Hydra Head protocol and ambitious simplifications of roadmap features like [directly open heads](https://github.com/input-output-hk/hydra/issues/1329), [incremental de](https://github.com/input-output-hk/hydra/issues/1057)-/[commits](https://github.com/input-output-hk/hydra/issues/199) and [optimistic head closure](https://github.com/input-output-hk/hydra/issues/198). This was also [discussed in the past](https://github.com/input-output-hk/hydra/discussions/850) with core contributors, and we would love to explore how those protocol variants can find their way into the upstream Hydra Head protocol.

#### Alternative scaling approaches

- [Subbit.xyz : Cardano's featherweight L2](https://cardano.ideascale.com/c/idea/122085). Refreshingly simple take on how to process payments off-chain. Very much inspired by lightning payment channels and maybe even Chaumean eCash systems. Having payment channels that work in such a simple and flexible way is exciting and could be a great basis for any payment channel networks, ie Cardano Lightning.
- [µgraph: Instant, Untraceable Payments in Cardano](https://cardano.ideascale.com/c/idea/122901). Ambitious, but promising, take on what the _Hydra tail_ could be – an asymmetric construction that benefits individual users by using zero-knowledge proofs to ensure correct operation of the node.
- [Anastasia Labs Cardano Layer2 - Midgard](https://cardano.ideascale.com/c/idea/122254). A layer 2 construction, similar to Hydra Head, that seeks to utilize the Cardano ledger isomorphically, but operates with a limited validator set and employs a distinct consensus mechanism to offer an experience akin to sidechains. We always wondered what you would get if you ran a Hydra Head with a non-total consensus and checkpointing state on layer 1!

## Technical working groups

As the age of Voltaire unfolds, it fosters the formation of community alliances and member-based organizations. At the same time, there's a popular belief that governance over core Cardano projects should become more open, with decisions regarding the inclusion or exclusion of elements on the roadmap of core infrastructure being transparent.

The current strategy devised by Intersect and its members to address this involves establishing technical working groups that operate openly and transparently on roadmaps and high-level backlog items. This approach mirrors what we're already doing here (see also last
months [starmap update](/monthly/2024-04#starmap-update)
section), but with a more concrete democratic approach to ratifying a roadmap. Presently, roadmaps for both Hydra and Mithril projects are expected to be governed in this manner.

Specifically for the Hydra working group, initial steps were taken this month by drafting a barebones charter and brainstorming first agenda items to engage potential members and get first sessions going as we gather more interested stakeholders. The charter and any future outputs of the working group will be
hosted on [`cardano-scaling/wg-hydra`](https://github.com/cardano-scaling/wg-hydra) and we
also [registered the working group at
Intersect](https://intersect.gitbook.io/intersect-working-groups/technical-working-groups/hydra).

:::info

If you've read this far, you might want to join us! Signal your interest by [opening an issue](https://github.com/cardano-scaling/wg-hydra/issues/new?template=sign_me_up.yml) or reaching out on `#ask-hydra` on the [IOG Discord](https://discord.com/invite/Qq5vNTg9PT) or `#wg-hydra` on the Intersect Discord (once it's available).

:::

## Conclusion

The monthly review meeting for May 2024 was held on 2024-05-28 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

May was a short month because of the public holidays and some people being off, but we still made good progress on both projects. The new dashboards for Mithril will visualize existing participation and surely garner more interest in the protocol. We are also excited about the progress on the Cardano transactions certification with Mithril, especially as multiple projects building bridges or layer 2s are keeping a close eye on this feature.

While we are busy on the Hydra side wrapping our head around incremental decommits and ensuring they are correctly implemented through transaction trace testing, we are also excited about the upcoming Catalyst Fund12 proposals and the discussions coming along with it as others are also looking into building similar, yet different scaling solutions and tackle the same challenges.

We are also making progress on making Hydra and Mithril less IOG-driven, but more community-owned through working groups and Intersect. We are excited to see how this will turn out.

[slides]: https://docs.google.com/presentation/d/1ByOgQt6gEjOY9Wd-xOMzeSy4lfQmMn39KEtSB-VisVw/edit#slide=id.g21194f9c145_0_5
[recording]: https://drive.google.com/file/d/1Y_xa9JjQ62m98m5MC27NDbsSjVjspnsA/view
