---
title: September 2024
slug: 2024-09
authors: [ch1bo, noonio, jpraynaud]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since August 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-09-25 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in September](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30)

### Roadmap

Here’s the latest on our roadmap:
- **Cardano transactions signature/proving MVP** [#1457](https://github.com/input-output-hk/mithril/issues/1457): the feature is pending activation on the `mainnet`.
- **Cardano stake distribution certification** [#955](https://github.com/input-output-hk/mithril/issues/955): the feature is pending activation on `preview`, `preprod` and `mainnet`.
- **Decentralization of signature orchestration** [#1777](https://github.com/input-output-hk/mithril/issues/1777): we are finalizing the implementation the feature.
- **CIP for Mithril signature diffusion through Cardano network** [#1775](https://github.com/input-output-hk/mithril/issues/1775): the draft CIP is under review.

![](img/2024-09-mithril-features-distributions.png)
<small><center>Features Activation & Distributions Schedule for Mithril</center></small>

### Distributions

We released Mithril distribution [`2437.1`](https://github.com/input-output-hk/mithril/releases/tag/2437.1), which includes:
- **Breaking changes** in the **Mithril client WASM**:
 - Seamless transition from **unstable** to **stable** features
  - A new `unstable` option in the client allows the usage of unstable features.
  - The previous `client.unstable` implementation is not supported anymore and must be replaced with `client`.
- Stable support for **Cardano transactions** certification in signer and aggregator.
- Stable support for **Cardano stake distribution** certification in signer and aggregator.
- Bug fixes and performance improvements.

#### Future distributions

We plan to release new distributions in October:
- `2440`:
  - Stable clients for **Cardano transactions** certification
  - Activation of the certification of **Cardano stake distribution** in `pre-release-preview`, `release-preprod`, and `release-mainnet`.
  - Stable support for new `Pythagoras` Mithril era
- `2443`:
  - Stable clients for **Cardano stake distribution** certification

### Dev blog

We have published these posts:
- [Mithril client WASM breaking change](https://mithril.network/doc/dev-blog/2024/09/24/client-wasm-unstable-breaking-change)
- [Certification of Cardano transactions](https://mithril.network/doc/dev-blog/2024/07/30/cardano-transaction-certification) (Updated)

### Protocol status

![](img/2024-09-mithril-protocol-status.png)
<small><center>Latest status of the Mithril protocol on Cardano `mainnet`</center></small>

### Decentralized Message Queue for Cardano

We continued working on the **decentralized message queue** (DMQ) for Cardano, as proposed in this [CIP draft](https://github.com/cardano-foundation/CIPs/pull/876).

The DMQ is designed to:
- Leverage the Cardano network layer.
- Initially be used by Mithril for the diffusion of signatures from signers to aggregators
- Be adaptable for future Cardano protocols, each operating on a different DMQ topic.

The DMQ will be operated by a 'side' node, known as the DMQ node, which will run a separate peer-to-peer network powered by the Ouroboros network stack. Here are some key technical details:
- It will run as an external process which exposes a Unix socket to support node-to-client mini-protocols.
- It will implement node-to-client and node-to-node mini-protocols to allow for message local submission, local notification and peer-to-peer submission.
- It will retrieve the Cardano stake distribution from its local Cardano node in order to authenticate incoming messages.
- It will retrieve other peers information of the peer-to-peer network from its local Cardano node (this topic is being investigated: either with a ledger hard-fork, or by redirecting connections to the DMQ node, or by leveraging SRV record in the SPOs' DNS).
- Each topic of the message queue will run a different DMQ node instantiated with a specific configuration.

There exist producers and consumers for the DMQ topic running on some DMQ nodes. In the case of Mithril:
- The Mithril signers will be the message (Mithril individual signatures) producers.
- The Mithril aggregators will be the message (Mithril individual signatures) consumers.

Producers and consumers for the DMQ topic run on various DMQ nodes:

![](img/2024-09-mithril-dmq-architecture.jpg)
<small><center>DMQ node architecture</center></small>

## Hydra

[Issues and pull requests closed in September](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30)

![The roadmap with features and ideas](./img/2024-09-hydra-roadmap.jpeg)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month include:
- [0.19.0](https://github.com/cardano-scaling/hydra/releases/tag/0.19.0) with ledger in Conway while remaining compatible with Babbage transactions [#1608](https://github.com/cardano-scaling/hydra/pull/1608)
- Completed the Hydra "Head-In-Head" Spike [#1590](https://github.com/cardano-scaling/hydra/issues/1590)
- Investigated Raft for consenus networking [#1591](https://github.com/cardano-scaling/hydra/issues/1591)
- Added "HeadId" into the "Greetings" message [#1557](https://github.com/cardano-scaling/hydra/issues/1557)
- Implemented initial suite of network-resiliance tests [#1532](https://github.com/cardano-scaling/hydra/issues/1532)
- Changed network semantics to broadcast to everyone [#1624](https://github.com/cardano-scaling/hydra/pull/1624)

### Spike: Head-in-Head

When a Hydra head is opened, a part of the underlying ledger state gets locked up and made available off-chain to a small group of participants. While this is already quite a "small world" to process transactions (which makes it fast & cheap), we encountered use cases where it would make sense to even open further heads with different/even smaller groups of participants on parts of the L2 state into L3 heads.

One of these use cases is the Hydra Doom demonstration we [showed at Rare Evo last month](./2024-08#hydra-doom). For example, individual multi-player game sessions require low network latency from regionally closely located machines. If those machines now run a game session head that would, in turn, lock funds and game state from a slower, global tournament head instance, we are talking about Hydra heads in heads.

This construction has a **lot of open questions about liveness**: what happens to the L3 head if the L2 head stops processing transactions? This pessimistic case can always happen in an optimistic protocol and needs to be dealt with, but not optimized for. Despite of this and other unknowns, we spent some time this month to explore whether its even possible in spike issue [#1590](https://github.com/cardano-scaling/hydra/issues/1590).

Technically, this means that a `hydra-node` talks to another `hydra-node` as its 'chain backend', interprets snapshots of the L2 head as blocks, observing transactions to open or close the head, while also submitting its state transitioning transactions to the underlying L2 ledger. The spike issue contains more details and how-to instructions to reproduce the findings, while the following issues demonstrate this prototypical `--inception` mode:
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y_Pw3MVooxg?si=6M2irHZgwPLiSQAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

### Hydra 🤝 Blockfrost: chain backend concept

As outlined in [#1305](https://github.com/cardano-scaling/hydra/issues/1305), we are considering an option to run the `hydra-node` in a more lightweight mode, without requiring the full `cardano-node`. This feature is particularly relevant when considering the use of Hydra with the pay-per-use Blockfrost API.

To complete this component, the Blockfrost chain layer must be capable of:
- Following the chain
- Submitting Hydra transactions
- Handling relevant internal wallet queries for the `hydra-node`

As an initial step, we have developed:
- A Hydra chain observer that operates in Blockfrost mode (although it has not yet been integrated into the `hydra-node`)
- A variant of the `hydra-explorer` tailored to the Blockfrost-enabled Hydra chain observer

We utilized a straightforward roll-forward approach via the Blockfrost [HTTP API](https://docs.blockfrost.io/), relying on the following key API calls:
- *GET /blocks/{hash}*
  - *confirmations*: Number of block confirmations
  - *next_block_hash*: (nullable) Hash of the next block
- *GET /blocks/{hash}/txs*
- *GET /txs/{hash}/cbor*
> Basically, we continuously fetch specific blocks by their hash, using the number of confirmations as an indicator of the block's safety (minimizing the likelihood of a rollback). From there, we roll forward using the reference to the next block hash.

While this mechanism might appear simplistic, it proves highly effective for most use cases, aside from scenarios involving exchanges.

To further optimize the performance of this new chain component, we’ve raised two new issues on the Blockfrost side to support our work:
- [#209](https://github.com/blockfrost/blockfrost-backend-ryo/issues/209): Add an endpoint to fetch all transaction CBORs in a block, reducing the number of API calls needed to retrieve Hydra head observations from block transactions.
- [#67](https://github.com/blockfrost/blockfrost-haskell/issues/67): Implement concurrent fetching to fully leverage parallel requests and enhance performance.

Moving forward, our next objective is to enable the `hydra-node` to publish Hydra scripts via Blockfrost, as outlined in [#1668](https://github.com/cardano-scaling/hydra/issues/1668).

### Spike: Raft-based networking

As reported last month, we created a new test suite about resilience of our network stack in [#1532](https://github.com/cardano-scaling/hydra/issues/1532). With this in place, we can now explore various means to reach our goal of a crash-tolerant network layer.

When we stumbled over this [fairly old research paper](https://arxiv.org/pdf/1707.01873) that explored various consensus protocols used in blockchain space, it reminds us of the correspondence between consensus and broadcasts:
> the form of consensus relevant for blockchain is technically known as atomic broadcast

Furthermore, it listed at least one of these early, permissioned blockchains that achieved crash-tolerance of `t < n/2` simply by using [etcd](https://etcd.io/) with its [Raft](https://raft.github.io/) consensus algorithm off-the-shelf. This motivated us to explore this avenue of maybe replacing our hand-rolled network stack too with this (arguably overkill) alternative in an experiment [#1591](https://github.com/cardano-scaling/hydra/issues/1591) and see how it fares.

The github issue contains all the details, but it turns out that is maybe not as exotic of an idea as we thought at first! The approach of implementing `broadcast` functionality as `put` requests to the `etcd` cluster works well when paired with an outbound, persisted buffer that handles failing writes while disconnected (or only connected to a minority). That, plus the `revision` mechanism of `etcd` and a last known revision on disk allows us to implement a `hydra-node` that is fully resilient to crashes and faulty network connections as can be seen in these [runs of our fault injection tests](https://github.com/cardano-scaling/hydra/actions/runs/11067586032).

Even performance of this early prototype is matching or exceeding our current implementation (when multi-threading performance is available). For example: using a low powered github-hosted container we see average confirmation times on the three node benchmark decrease `20ms -> 100ms`, while on desktop machine with 8+ cores the same benchmark improves `100ms -> 50ms`. As the starting numbers of the released version also vary wildly between machines, these results are only usable relatively.


### Incremental Commits

Incremental commits feature development is ongoing and we demonstrated the user
workflow we envisioned on the monthly meeting.

Notably users will first need to lock their UTxO in the Hydra deposit script
and this output would be consumed by the increment transaction once we have a
signed snapshot on L2. This would make the specified UTxO be part of the Head
UTxO state on L2 eventually. In case of any problems any hydra-node would be
able to post a recover transaction which would unlock the UTxO.

There are hydra-node API endpoints for depositing/recovering which provide
convenient way to build and post these transactions and we tried to have a nice
UX for these user actions.

Next steps involve implementing complete on-chain security together with the
documentation/tutorials so that our users know how to use this new feature
since this has been a feature request for many builders on Hydra.

## Conclusion

The monthly review meeting for September 2024 was held on 2024-09-25 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO: write

[slides]: https://docs.google.com/presentation/d/1-_IFTibG1woAhVZohJh9gcZUO-YJyJqhH2sHv4PbJgc
[recording]: https://drive.google.com/file/d/1jygDX-AGNGIGU7pq4ljEDuG39KVkInlJ
