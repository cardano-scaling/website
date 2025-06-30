---
title: June 2025
slug: 2025-06
authors: [jpraynaud, noonio, ch1bo]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since June 2025. It serves as preparation for, and a written summary of, the monthly stakeholder review meeting. The meeting is announced on our Discord channels and held on Google Meet. This month, the meeting took place on June 25, 2025, using these [slides][slides], and you can see the [recording here][recording].

## Mithril

[Issues and pull requests closed in June](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-06-01..2025-06-30)

### Roadmap

TODO: Update

Below are the latest updates on our roadmap:

- **DMQ signature diffusion prototype** [#2402](https://github.com/input-output-hk/mithril/issues/2402): We have started the second phase of the implementation of the DMQ signature diffusion prototype
- **Cardano database incremental snapshots MVP** [#2047](https://github.com/input-output-hk/mithril/issues/2047): We have activated the incremental snapshots on the `release-mainnet` network
- **Redesign the website and improve documentation** [#2051](https://github.com/input-output-hk/mithril/issues/2051): The home page redesign is in progress.

### Distributions

TODO: Update

In May, we have completed the following events:

- Release of the new distribution [`2517`](https://github.com/input-output-hk/mithril/releases/tag/2517.1)
- Release of the security advisory [`GHSA-qv97-5qr8-2266`](https://github.com/input-output-hk/mithril/security/advisories/GHSA-qv97-5qr8-2266)
- Activation of the incremental Cardano database certification (Cardano DB v2) on the `release-mainnet` network.

In June, the following events are planned:

- Release of a new distribution (`2523`).

### Dev blog

TODO: Update

We have published the following post:

- [Mithril Cardano database snapshots security advisory](https://mithril.network/doc/dev-blog/2025/05/07/client-security-advisory)
- [Breaking changes in client library and CLI](https://mithril.network/doc/dev-blog/2025/05/06/client-breaking-change)
- [Distribution `2517` is now available](https://mithril.network/doc/dev-blog/2025/05/05/distribution-2517).

### New website homepage

TODO: Update

### DMQ implementation update

TODO: Update

### Cardano database certification backend update

TODO: Update

### UTxO-HD ledger state snapshot converter command in client CLI

TODO: Update

### Verify existing Cardano database with client CLI

TODO: Update

### Protocol status

TODO: Update

The protocol operated smoothly on the `release-mainnet` network with the following metrics:

- **Registered stake**: `4.6B₳` (`21%` of the Cardano network)
- **Registered SPOs**: `240` (`9%` of the Cardano network)
- **Full Cardano database restorations**: `600` restorations
- **Signer software adoption**: `72.2%` of the SPOs are running a recent version (one of the last three releases).

You can find more information on the [Mithril protocol insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI).

## Hydra

TODO: Update

[Issues and pull requests closed in June](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-06-01..2025-06-30)

![The roadmap with features and ideas](./img/2025-06-hydra-roadmap.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) with features and ideas</center></small>

This month, notable [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) updates include:

### [0.22.0 Release](https://github.com/cardano-scaling/hydra/releases/tag/0.22.0)

TODO: Update

### New working group

TODO: Update

### Roadmap update

TODO: Update

We continue to focus on UX improvements and better logging/errors, while also
starting to tackle more of the user-reported bugs and feature requests.

## Links

TODO: Update recording link

The monthly review meeting for June 2025 took place on June 25, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/1rkEr9zPWY7MH7sRACYZ2ENDLQtccUYeBPJaC-za7-Ew/edit?slide=id.g1f87a7454a5_0_1392#slide=id.g1f87a7454a5_0_1392
[recording]: https://drive.google.com/file/d/1qdOu_3WXXxEbQg-IhVdgZFENgJKX2o6A/view?usp=sharing
