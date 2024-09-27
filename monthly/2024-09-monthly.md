---
title: September 2024
slug: 2024-09
authors: [ch1bo, jpraynaud]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since August 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-09-25 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in September](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30)

### Roadmap

Here is an update on our current roadmap:
- **Cardano transactions signature/proving MVP** [#1457](https://github.com/input-output-hk/mithril/issues/1457): the feature is pending activation on the `mainnet`.
- **Cardano Stake Distribution certification** [#955](https://github.com/input-output-hk/mithril/issues/955): the feature is pending activation on `preview`, `preprod` and `mainnet`.
- **Decentralization of signature orchestration** [#1777](https://github.com/input-output-hk/mithril/issues/1777): we are finalizing the implementation the feature.
- **CIP for Mithril signature diffusion through Cardano network** [#1775](https://github.com/input-output-hk/mithril/issues/1775): the draft CIP is under review.

![](img/2024-09-mithril-features-distributions.png)
<small><center>Features Activation & Distributions Schedule for Mithril</center></small>

### Distributions

We have released the new Mithril distribution [`2437.1`](https://github.com/input-output-hk/mithril/releases/tag/2437.1). This distribution includes several critical updates and enhancements:
- **BREAKING** changes in **Mithril client WASM**:
  - Implementation of seamless transition from **unstable** to **stable** features.
  - A new `unstable` option in the client allows the usage of unstable features.
  - The previous `client.unstable` implementation is not supported anymore and must be replaced with `client`.
- Stable support for **Cardano transactions** certification in signer and aggregator.
- Stable support for **Cardano stake distribution** certification in signer and aggregator.
- Bug fixes and performance improvements.

### Protocol status

![](img/2024-09-mithril-protocol-status.png)
<small><center>Latest status of the Mithril protocol on Cardano `mainnet`</center></small>

### TODO Mithril Topic 1

## Hydra

[Issues and pull requests closed in September](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-09-01..2024-09-30)

TODO: update

![The roadmap with features and ideas](./img/2024-08-hydra-roadmap.jpg)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month are:
- TODO

### Spike: Head-in-Head 

TODO: @ch1bo

### Spike: Raft-based networking

TODO: @ch1bo

## Conclusion

The monthly review meeting for September 2024 was held on 2024-09-25 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO: write

[slides]: https://docs.google.com/presentation/d/1-_IFTibG1woAhVZohJh9gcZUO-YJyJqhH2sHv4PbJgc
[recording]: https://drive.google.com/file/d/1jygDX-AGNGIGU7pq4ljEDuG39KVkInlJ
