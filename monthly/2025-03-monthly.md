---
title: March 2025
slug: 2025-03
authors: [jpraynaud, noonio, ch1bo]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since February 2025. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting took place on March 26, 2025, using these [slides][slides], and you can see the [recording here][recording].

## Mithril

[Issues and pull requests closed in March](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-03-01..2025-03-31)

### Roadmap

Below are the latest updates on our roadmap:

- **Cardano database incremental snapshots MVP** [#2047](https://github.com/input-output-hk/mithril/issues/2047): we have completed the implementation of the MVP for incremental snapshots of the Cardano database. We plan to start relasing it on test networks next month
- **Multiple aggregators on a Mithril Network PoC** [#2238](https://github.com/input-output-hk/mithril/issues/2238): we have completed the implementation of the PoC for multiple aggregators on a Mithril Network. We are currently working on adapting the infrastructure to support this feature in selected test networks
- **Redesign the website and improve documentation** [#2051](https://github.com/input-output-hk/mithril/issues/2051): the Home page redesign is in progress.

### Distributions

We released Mithril distribution [`2513.0`](https://github.com/input-output-hk/mithril/releases/tag/2513.0), which includes:

- ⚠️ **Breaking** changes in Mithril nodes:
  - The **minimum required** `glibc` version for pre-built Linux binaries has been upgraded from `2.31` to `2.35`
  - Mithril signers running versions `<=0.2.200` **must be updated** due to the removal of Thales era legacy code
  - The `with_snapshot_uploader` function in the Mithril client library has been renamed to `with_file_uploader`
- Added support for Cardano node `10.2.1` in the signer and aggregator
- Ended support for **macOS x64 pre-built binaries** for the client CLI
- Bug fixes and performance improvements.

In April, the following events are planned:

- Release of a new distribution
- Activation of the incremental Cardano database certification (Cardano DB v2) on the `pre-release-preview` and `release-preprod` network.

### Dev blog

We have published the following post:

- [Distribution `2513` is now available](https://mithril.network/doc/dev-blog/2025/03/28/distribution-2513)

### Signer registration with multiple aggregators

We have explored different solutions to allow multiple aggregators to run on the same Mithirl network. This is a complex problem which requires to have consensus on the signer registration with enough signers and aggregators so that at least the quorum on signature can be found. Today the signer registration is supported by the aggregator which stores the signer registration payloads and distribute them back to the signers couple of epochs later: the process is centralized (the aggregator is a single point of failure) and may be subject to censorship by the aggregator (not distributing some signer registration payloads), but there is not trust assumption on the aggregator as all the protagonist of the protocol will verify on their own the cryptographic proofs included in the payloads.

Overall, we have identified three possible solutions:

1. **Extending the centralized approach to multiple aggregators**: the slave aggregators pulls the signer registration payloads at every epoch change from the master aggregator, and they reject any signer registration that would be made to their API directly. This is the simplest solution (we have implemented it as a prototype) and it unlocks the decentralization of the signature diffusions
2. **Use the Cardano chain**: the aggregators would create a transaction to store their Mithril keys on chain at the beginning of the epoch. This solution is full decentralized, but it is more complex on the operational side: it would require that all the SPOs have a hot wallet on their machines to support the creation of the transactions (which adds cost and maintenance). This is probably the more natural solution for the future and we will keep exploring it
3. **Use the DMQ**: the DMQ (Decentralized Message Queue as described in the [CIP-0137](https://github.com/cardano-scaling/CIPs/tree/master/CIP-0137)) is authenticated which means that we can detect adversary signers which would equivocate their signer registration (i.e. send different payloads to different peers on the network to create a split of the network and thus prevent reaching the quorum needed to create a Mithril multi-signature). Any peer on the network that would receive two different payloads from the same signer would create a proof of equivocation and broadcast it on the network. Upon reception of a valid equivocation proof, the other peers of the network would discard the registration from the adversary and reach an agreement on the signer registration. This solution would be fully decentralized and would not incur any cost for the SPOs. It is at a very early stage of exploration and we will keep working on it.

[![The proposed signer registrations](./img/2025-03-mithril-signer-registration.jpg)](./img/2025-03-mithril-signer-registration.jpg)
<small><center>The proposed signer registrations</center></small>

### Protocol status

The protocol has operated smoothly on the `release-mainnet` network with the following metrics:

- **Registered stake**: `4.6B₳` (`21%` of the Cardano network)
- **Registered SPOs**: `246` (`9%` of the Cardano network)
- **Full Cardano database restorations**: `500` restorations
- **Signer software adoption**: `98.6%` of the SPOs are running a recent version (one of the last three releases).

You can find more information on the [Mithril protocol insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI).

## Hydra

[Issues and pull requests closed in March](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-03-01..2025-03-31)

![The roadmap with features and ideas](./img/2025-03-hydra-roadmap.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) with features and ideas</center></small>

This month, some notable [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) updates include:

- Bounded memory [#1618](https://github.com/cardano-scaling/hydra/issues/1618).
- Side-load of fully-signed snapshot [#1858](https://github.com/cardano-scaling/hydra/issues/1858)
- Etcd control via environment variables [#1883](https://github.com/cardano-scaling/hydra/issues/1883)
- Fixed memory bug when loading large state file [#1917](https://github.com/cardano-scaling/hydra/issues/1917)
- Investigated mirror nodes [#1910](https://github.com/cardano-scaling/hydra/pull/1910)

### Etcd-based networking

Feature: [#1720](https://github.com/cardano-scaling/hydra/issues/1720)

The `etcd`-based network feature now fully landed and saw several improvements. Among them a few bug-fixes, [improved observability](https://github.com/cardano-scaling/hydra/pull/1884) and [protocol version checking](https://github.com/cardano-scaling/hydra/pull/1914), but also a breaking [change in command line options](https://github.com/cardano-scaling/hydra/pull/1891) with new `--listen` and `--advertise` (see release notes for more details).

Extensive testing through our friends working on the Midnight glacier drop makes us confident to release this soon as a cornerstone of the [`0.21.0` release](https://github.com/cardano-scaling/hydra/milestone/22?closed=1).

### Bounded memory

After initial work about bounding memory by [streaming events](https://github.com/cardano-scaling/hydra/pull/1808) and implementing the [API server as event sink](https://github.com/cardano-scaling/hydra/pull/1860) last month, we achieved fully bounded memory usage of `hydra-node` when processing millions of transactions, as well as when loading them from disk in [#1920](https://github.com/cardano-scaling/hydra/pull/1920).

A typical memory profile of a `hydra-node` using **~1GB** of memory when loading millions of transactions from the `state` file before this work:

![](./img/2025-03-profile-before.svg)

Which indicates a Haskell-classic space leak because of thunk build-up. Indeed we spotted that `allTxs` in the `HeadState` was not fully forced when loading events from disk and with an additional strictness annotation, loading the same `state` file now while only using **12MB** of memory:

![](./img/2025-03-profile-after.svg)

### Mirror nodes

To improve fault tolerance of a Hydra Head setup, we explored mirror nodes. This means that one participant runs multiple instances of `hydra-node` using the same `--hydra-signing-key` and `--cardano-signing-key` with the goal of making their snapshot signing highly available with failover in case one node goes down.

Within an experiment we could confirm that this indeed works without changes to the `hydra-node`, but there are some caveats coming with it:
 - Each additional node increases the number of messages submitted through the Hydra network 
 - Too many mirrors of one party could imbalance the etcd quorum and make the network unavailable overall although there would be enough signers for the Hydra consensus.

### Side-load snapshots

Feature: [#1858](https://github.com/cardano-scaling/hydra/issues/1858)

Originally, we wanted to address so-called "stuck" heads To address ledger state divergence among Hydra nodes, we introduced [snapshot sideloading]( https://github.com/cardano-scaling/hydra/pull/1864). This mechanism allows nodes to adopt a confirmed snapshot to regain consensus when misalignment occurs, preventing the Hydra head from getting stuck and ensuring a consistent state across all nodes.

### Withdraw zero trick

Feature: [#1795](https://github.com/cardano-scaling/hydra/issues/1795)

This feature was requested by several users [on Github](https://github.com/cardano-scaling/hydra/issues/1795), on our Discord channel, but also was identified as an enabling feature for the Midnight glacier drop.

The so-called "withdraw zero trick" is a common technique to achieve transaction level verification (once per tx). In fact, it's the only way to do this until [CIP-112](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0112/README.md) gets implemented by the `cardano-ledger` (and `plutus`).

While the L2 ledger in Hydra is isomorphic to Cardano in respect to the EUTxO ledger model, this excludes Cardano's Proof-of-Stake features. Consequently one could not register scripts as reward accounts and use withdrawing `0 lovelace` as a trick to have those scripts validate transactions.

To implement this feature, @coll78 and @ch1bo found that the `hydra-node` can mock `RewardAccount`s for each `0 lovelace` withdrawal observed in a transaction on-the-fly. This results in the script being evaluated, and even does not require the script to be registered via a stake delegation certificate beforehand.

See [this new How-to](https://hydra.family/head-protocol/unstable/docs/how-to/withdraw-zero) for more details.

## Links

The monthly review meeting for March 2025 took place on March 26, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/18MEu5jCGnNwkwKqEZ1HKj7mJeBB8sIgIfkJB4gGWmUk/edit
[recording]: https://drive.google.com/file/d/1WltowNB2APEM-gkS-7JAbYK57MeCkHqL/view
