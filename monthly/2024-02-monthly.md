---
title: February 2024
slug: 2024-02
authors: [ch1bo, jpraynaud, v0d1ch]
tags: [monthly]
---

This is the first joint report of the 🐲 Hydra and 🛡 Mithril projects and summarizes on the work done since January 2024.

In the past, each team had published updates as part of their repositories in varying form and cadence:

- Hydra [monthly reports](https://hydra.family/head-protocol/monthly)
- Mithril [dev blog](https://mithril.network/doc/dev-blog/)

Both those sites are created from the individual project repositories. However, keeping such "procedural" documents as part of the code base is not ideal, as it often requires special handling when building versioned, published documentation. For example, [this workflow](https://github.com/input-output-hk/hydra/blob/fad12fd7d967e5e8af4d8b832396e68bd8510e9a/.github/workflows/publish-docs.yaml#L87-L92) in the Hydra project which publishes to https://hydra.family required several attempts to work around how docusaurus websites are built. Consequently, we introduced a [dedicated repository](https://github.com/cardano-scaling/website) that builds into a [website](https://cardano-scaling.github.io/website). This not only helps in keeping the original product repositories clean of inherently dated information, but also serves as a new home for joint reports, announcements or occasional articles.

This monthly report also serves as preparation for the monthly review meeting (see [slides][slides] and [recording][recording]), where the team updates project stakeholders on recent developments to gather their feedback on proposed plans.

## Mithril

[Issues and pull requests closed in February](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-01-31..2024-02-29)

#### Release and publication

This month, the mithril team [released distribution `2408.0`](https://github.com/input-output-hk/mithril/releases/tag/2408.0) and published two blog post entries:
- [Mithril SanchoNet network released](https://mithril.network/doc/dev-blog/2024/02/08/testing-sanchonet-network-available).
- [Mithril client CLI output breaking change](https://mithril.network/doc/dev-blog/).

### Signing Cardano transactions proof-of-concept

The team has kept working on the implementation of a proof-of-concept of a data type for certifying Cardano transactions within Mithril networks. Last month, we have extended the [Mithril client library](https://crates.io/crates/mithril-client) to support the certification of Cardano transactions. This month, we have ugraded the [client CLI](https://mithril.network/doc/manual/developer-docs/nodes/mithril-client/) and implemented a new `cardano-transaction` command that can list snapshots and certify a list of Cardano transactions. Addtionally, we have implemented the same API surface on the [WASM client](https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm) that now supports transaction certification in the browser.

![](img/2024-02-mithril-cardano-tx.png)

### Enhanced support for Conway and Sanchonet

We have extensively tested the upcoming `Conway` era and we are now confident that Mithril networks will smoothly transition to this new era. Moreover, we have released a new [`testing-sanchonet`](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.testing-sanchonet.api.mithril.network%2Faggregator) network that has been opened to SPOs so that we can jointly test upcoming and experimental features (e.g. the aforementioned signature of the Cardano transactions).

## Hydra

[Issues and pull requests closed in February](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-01-31..2024-02-29)

The Hydra project [roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7) only saw few changes this month:

![The roadmap with features and ideas](./img/2024-02-hydra-roadmap.jpg) <small><center>The latest roadmap with features and ideas</center></small>

#### Notable updates

* New: [Drop support for JSON encoded transactions #1213](https://github.com/input-output-hk/hydra/issues/1213) to cover breaking changes we experienced when switching `cardano-node` and `cardano-ledger` versions
* [Smoke tests on Sanchonet #1257](https://github.com/input-output-hk/hydra/issues/1257) took longer than anticipated as it uncovered some issues, but seeing smoke tests run on Sanchonet now makes us confident the `hydra-node` is ready for the Conway hard-fork
* [Build and deploy a Hydra heads explorer #696](https://github.com/input-output-hk/hydra/issues/696) is about half-way done as the data is available for `sanchonet` under http://explorer.hydra.family/heads and we're only missing a user interface
* Also started work on [Incremental commit #199](https://github.com/input-output-hk/hydra/issues/199) as the UX will be very similar to [Incremental decommit #1057](https://github.com/input-output-hk/hydra/issues/1057)
- Having both features implemented off-chain, would allow early adopters to try this out while we work on the on-chain security.
* Added [Streaming Plugins #1325](https://github.com/input-output-hk/hydra/issues/1325) feature to cover SundaeLab's work on their Catalyst proposal

### Contest after fanout bug hunt

While working on [hydra-chess](https://github.com/abailly-iohk/hydra-chess) we
experienced a [bug](https://github.com/input-output-hk/hydra/issues/1260) in
the Hydra node where in the two party Hydra Head nobody was able to do a
`Fanout`. This happened because one of the nodes was at the initial `Snapshot`
state and somehow missed to see the request for new `Snapshot` while the other
one already had one confirmed `Snapshot` locally. 

When the `Close` was posted, the Head was closed with initial `Snapshot` and
then the Head got contested by the node that saw newer `Snapshot`.

After contest we saw this weird behaviour where both nodes could not `Fanout`
and we expect this failure in the node that was having only the initial
`Snapshot` since it actually didn't have the correct `UTxO` locally to be able
to `Fanout`, but failure in the other node with the newer `Snapshot` should not
happen. 

![Fanout after contest bug sketching](./img/2024-02-fanout-after-contest.png)

When inspecting code we noticed that the `Contest` observation was never
pushing the deadline further after the contestation was made and the `Fanout`
tx was invalid because our validator checks that `Fanout` tx lower validity
bound is higher than the deadline to contest - in another words, the check is
there to make sure you can only fanout after the contestation period is over. 

Before fixing this bug we wanted to reproduce it using the MBT (Model Based
Tests) framework we are using as one of the tools in our test suite. In order
to do that we had to finish modelling the complete Head life-cycle and then the
exact scenario we saw happening in real life since arbitrary actions in all
Head states didn't reveal this bug.

Fixing the bug was trivial in the end but the bug reproduction made us build
more knowledge on using the framework correctly and of course improve our
specs.

### Hydra explorer supporting multiple versions

This month we deployed the `hydra-explorer` to serve data under
http://explorer.hydra.family/heads. As we also changed the hydra scripts and
switched to the latest pre-release version of `cardano-node` for Conway, we are
running it on the `sanchonet` network right now.

![](./img/2024-02-explorer.png)

The hydra explorer currently supports only one version on one network. This is
because the Hydra scripts are compiled into `hydra-node` and
`hydra-chain-observer` binaries and the observer talks is connected to a single
`cardano-node` running as a client on one network.

To support multiple versions
[#1282](https://github.com/input-output-hk/hydra/issues/1282), we need to
compile the scripts of each version into individual chain observer binaries and
communicate with them through an API. While Plutus validators change on any
modification (their hashes and addresses), this API between the
`hydra-chain-observer` and `hydra-explorer` components can serve as an
integration point which we can support through multiple versions of the
protocol.

## Community

Both projects saw community contributions this month:

### TxPipe on Mithril

The TxPipe team has kept working on the implementation of the `Pallas Chain Observer` for Mithril nodes and has contributed to retrieving the stake distribution and Mithril era markers (stored in the UTxOs of the chain) directly from the Cardano node with mini-protocols.

### Ikigai auctions on Hydra

As it also was briefly shown in the review meeting, Ikigai continued work on [Hydra for Auctions](/monthly/2023-06#hydra-for-auctions-contributions-and-closing-of-project) in their Catalyst-backed project. Their use case is about starting auctions on the Cardano mainnet, but then collecting bids off-chain and only committing the final result on-chain. This is a perfect use case for Hydra, as it allows for a large number of off-chain transactions to be processed in parallel and then committed to the blockchain in a single transaction.

## Conclusion

We held the monthly review meeting for February 2024 on 2024-02-26 via Google Meet, presenting these [slides][slides] and this [recording][recording].

This month, both projects focused on preparing for Conway and the upcoming hard-fork combinator event. Preparations of the hard-fork also make the `cardano-node` a moving target, but we are convinced that early integration is key and have been proven correct as we saw unexpected issues pop up in both projects.

New feature development is progressing fine with Mithril's transaction signing becoming available to early adopters. With this feature coming, we can even think about making `hydra-node`s more light-weight without relying on a single third-party for providing to be trusted chain data, but could verify on the client (the hydra node) using mithril certificates. Hydra's incremental decommit feature is also in the works. There is significang work still to be done on the on-chain parts, but decided to already implement the off-chain workflow for the incremental commits. Having both features available for users to try it out will allow us to validate the API changes although we cannot release this to mainnet withou the required on-chain security work. During review meeting, we also asked for feedback on a potential further simplification of the Hydra on-chain protocol to have "directly open" heads and any thumbs up/down or thoughts about this fresh [feature idea
#1329](https://github.com/input-output-hk/hydra/issues/1329) are appreciated.

In general, if you read this far we would like to hear from you, dear reader, on any of our communication channels on Discord or a shout out on twitter. Maybe along with some feedback on the new, common website and the joint monthly report format? 🙏 

We are looking forward to the next month and when it happens, the Conway hard-fork on the first public testnets (no date yet) when 🛡 Mithril serving certificates and 🐲 Hydra heads remaining open throughout.

[slides]: https://docs.google.com/presentation/d/18buDs_TcMHgFAYjJt9GftQiEnVB3ubcoD3Djh3ovxSc/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://drive.google.com/file/d/1WZ03vcpfxgYhGw91-L3QXVfyNwhdaCBY/view
