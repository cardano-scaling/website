---
title: August 2025
slug: 2025-08
authors: [jpraynaud, noonio, ch1bo]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since August 2025. It serves as preparation for, and a written summary of, the monthly stakeholder review meeting. The meeting is announced on our Discord channels and held on Google Meet. This month, the meeting took place on August 27, 2025, using these [slides][slides], and you can see the [recording here][recording].

## Mithril

[Issues and pull requests closed in August](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-08-01..2025-08-31)

### Roadmap

TODO: Update

Below are the latest updates on our roadmap:

- **DMQ signature diffusion prototype** [#2402](https://github.com/input-output-hk/mithril/issues/2402). We have started the second phase of the implementation of the DMQ signature diffusion prototype
- **Redesign the website and improve documentation** [#2051](https://github.com/input-output-hk/mithril/issues/2051). The new home page has been deployed on the website
- **Refactor STM library** [#2567](https://github.com/input-output-hk/mithril/issues/2567). We have completed the first phase of the refactoring of the SMT library, and we have started the second phase.

### DMQ implementation update

TODO: Update

Here is the current status of the DMQ implementation:

| **Mini-protocols** | **Pallas** | **Mithril Signer** | **Mithril Aggregator** | **Haskell DMQ Node** |
| ------------------ | :--------: | :----------------: | :--------------------: | :------------------: |
| N2C Submission     |     ✓      |         ✓          |           -            |    _In progress_     |
| N2C Notification   |     ✓      |         -          |           ✓            |    _In progress_     |
| N2N Diffusion      |     -      |         -          |           -            |    _In progress_     |

Next, we will complete an end to end test with a fake DMQ node and gradually replace it with the real Haskell DMQ node implementation. Our goal is to operate the DMQ network on a testnet.

### Prototyping SNARK circuit for Mithril certificates

TODO: Update

### Protocol status

The protocol operated smoothly on the `release-mainnet` network with the following metrics:

- **Registered stake**: `4.7B₳` (`21%` of the Cardano network)
- **Registered SPOs**: `247` (`9%` of the Cardano network)
- **Full Cardano database restorations**: `185` restorations
- **Signer software adoption**: `81.1%` of the SPOs are running a recent version (one of the last three releases).

You can find more information on the [Mithril protocol insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI).

## Hydra

[Issues and pull requests closed in August](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-08-01..2025-08-31)

![The roadmap with features and ideas](./img/hydra-roadmap-2025-06.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) with features and ideas</center></small>

This month, notable [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/6) updates include:

### [0.22.4 Release](https://github.com/cardano-scaling/hydra/releases/tag/0.22.4)

TODO: Update

- Important security fix for security advisory: [Dangerous L1 event finality assumptions and Failed transactions not considered](https://github.com/cardano-scaling/hydra/security/advisories/GHSA-qr9f-mpgf-wp25)
- Event log rotation feature; `--persistence-rotate-after 10000` to rotate after seeing 10k events
- The `etcd` binary is now embedded into the binary, and _used by default_
  Disable with `--use-system-etcd`
- New `/head` HTTP endpoint to get status of the head
- UX improvements to diagnose `etcd` connection problems.

### Partial Ada commits

TODO: Update

### Hydra Doom at RareEvo (again!)

TODO: Update

### Example grafana dashboard for node operators

TODO: Update

### Roadmap update

- We are focused on supporting the Glacier Drop, and are working on improving
  our failure resilience
- We are also working on improving the UX around etcd/networking errors
- We are aiming to implement a HTLC between Hydra heads, to form a pathway to Bitcoin lightning integration.

## Links

TODO: Update recording link

The monthly review meeting for August 2025 took place on August 27, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/1yQKsqoTv1MAV4g6Ujt42dRKeT714v75Tqgmnd-y7VuE/edit?slide=id.g34fc91d1b1c_4_0#slide=id.g34fc91d1b1c_4_0
[recording]: https://drive.google.com/file/d/1lpUWYeWjHFqHjCu3USjf8rtj4t7OJ2fA/view?usp=drive_link
