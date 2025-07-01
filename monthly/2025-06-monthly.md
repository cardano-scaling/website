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

Below are the latest updates on our roadmap:

- **DMQ signature diffusion prototype** [#2402](https://github.com/input-output-hk/mithril/issues/2402): We have started the second phase of the implementation of the DMQ signature diffusion prototype
- **Redesign the website and improve documentation** [#2051](https://github.com/input-output-hk/mithril/issues/2051): The new home page has been deployed on the website
- **Refactor STM library** [#2567](https://github.com/input-output-hk/mithril/issues/2567): We have completed the first phase of the refactoring of the SMT library, and we have started the second phase.

### Distributions

In June, we have completed the following events:

- Release of the new distribution [`2524`](https://github.com/input-output-hk/mithril/releases/tag/2524.0)
- Activation of the support for UTxO-HD in the Mithril client CLI
- Preparation of the switch to the new Cardano database certification backend.

In July, the following events are planned:

- Release of a new distribution (`2529`).

### Dev blog

We have published the following post:

- [Switching to Cardano database incremental certification](https://mithril.network/doc/dev-blog/2025/06/17/client-cli-cardano-database-backends)
- [UTXO-HD ledger state snapshot converter command in client CLI](https://mithril.network/doc/dev-blog/2025/06/16/client-cli-utxo-snapshot-converter-command)
- [Distribution `2524` is now available](https://mithril.network/doc/dev-blog/2025/06/16/distribution-2524).

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
