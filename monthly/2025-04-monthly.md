---
title: Apriil 2025
slug: 2025-04
authors: [jpraynaud, noonio, ch1bo]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since March 2025. It serves as preparation for, and a written summary of, the monthly stakeholder review meeting. The meeting is announced on our Discord channels and held on Google Meet. This month, the meeting took place on April 24, 2025, using these [slides][slides], and you can see the [recording here][recording].

## Mithril

[Issues and pull requests closed in April](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-04-01..2025-04-30)

### Roadmap

TODO: Update

Below are the latest updates on our roadmap:

- **Cardano database incremental snapshots MVP** [#2047](https://github.com/input-output-hk/mithril/issues/2047): we completed the implementation of the MVP for incremental snapshots of the Cardano database and plan to start releasing it on test networks next month.
- **Multiple aggregators on a Mithril Network PoC** [#2238](https://github.com/input-output-hk/mithril/issues/2238): we finalized the proof of concept (PoC) for multiple aggregators on a Mithril network. We are adapting the infrastructure to support this feature on selected test networks.
- **Redesign the website and improve documentation** [#2051](https://github.com/input-output-hk/mithril/issues/2051): the Home page redesign is in progress.

### Distributions

TODO: Update

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

TODO: Update

We have published the following post:

- [Distribution `2513` is now available](https://mithril.network/doc/dev-blog/2025/03/28/distribution-2513)

### New aggregation proof system with ALBA

TODO: Update

### Protocol status

TODO: Update

The protocol has operated smoothly on the `release-mainnet` network with the following metrics:
The protocol operated smoothly on the `release-mainnet` network with the following metrics:

- **Registered stake**: `4.6B₳` (`21%` of the Cardano network)
- **Registered SPOs**: `246` (`9%` of the Cardano network)
- **Full Cardano database restorations**: `500` restorations
- **Signer software adoption**: `98.6%` of the SPOs are running a recent version (one of the last three releases).

You can find more information on the [Mithril protocol insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI).

## Hydra

[Issues and pull requests closed in April](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-04-01..2025-04-30)

![The roadmap with features and ideas](./img/2025-03-hydra-roadmap.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) with features and ideas</center></small>

This month, notable [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) updates include:

- Bounded memory [#1618](https://github.com/cardano-scaling/hydra/issues/1618)
- Side-load of fully-signed snapshot [#1858](https://github.com/cardano-scaling/hydra/issues/1858)
- Etcd control via environment variables [#1883](https://github.com/cardano-scaling/hydra/issues/1883)
- Fixed memory bug when loading large state file [#1917](https://github.com/cardano-scaling/hydra/issues/1917)
- Investigated mirror nodes [#1910](https://github.com/cardano-scaling/hydra/pull/1910).

### New metric, peers_connected

TODO: Update

### Side-load snapshot tutorial

TODO: Update

### Publish scripts with blockfrost

TODO: Update

### Fixed memory leak

TODO: Update

### API changes

TODO: Update

### Bugfixes/Release

TODO: Update

### Roadmap update

TODO: Update

### Hiring

TODO: Update

## Links

TODO: Update recording link

The monthly review meeting for April 2025 took place on April 24, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/1B8FM4k1EmUYSDdeIXhRiYMEIK9KiDoOQ-lMHVN9SzRs/edit
[recording]: https://drive.google.com/file/d/1WltowNB2APEM-gkS-7JAbYK57MeCkHqL/view
