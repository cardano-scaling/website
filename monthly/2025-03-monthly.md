---
title: March 2025
slug: 2025-03
authors: [jpraynaud, noonio]
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

### Side-load snapshots

@ffakenz

TODO: Update

### Mirror nodes

@ffakenz

TODO: Update

### Withdraw zero trick

@ch1bo

### Bounded memory/Midnight notes

In combination with the etcd-based networking, we have been [working on bounding
the memory](https://github.com/cardano-scaling/hydra/pull/1860) of the
hydra-node by switching to an event-streaming model, instead of loading and
keeping all events in memory. This should allow for the long-term running of
hydra nodes. This work remains in progress.

### Etcd-based networking

A breaking change in command-line arguments and system requirements (see
release notes) is currently unreleased but available on the `master`
branch. This update significantly improves the networking architecture,
leading to greater stability (ie, fewer stuck heads!). Please try it out!

## Links

The monthly review meeting for March 2025 took place on March 26, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/18MEu5jCGnNwkwKqEZ1HKj7mJeBB8sIgIfkJB4gGWmUk/edit
[recording]: https://drive.google.com/file/d/1WltowNB2APEM-gkS-7JAbYK57MeCkHqL/view
