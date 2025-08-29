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

Below are the latest updates on our roadmap:

- **DMQ signature diffusion prototype** [#2402](https://github.com/input-output-hk/mithril/issues/2402). We have implemented a end to end test of the DMQ protocol for the Mithril nodes, and the networking team has kept implementing the mini-protocols in the Haskell DMQ node.
- **Simple Aggregation Halo2 - Prototype** [#2526](https://github.com/input-output-hk/mithril/issues/2526). We have worked with the innovation team on the implementation of a prototype for a SNARK circuit for Mithril certificates based on Halo2.
- **Refactor STM library** [#2567](https://github.com/input-output-hk/mithril/issues/2567). We have kept working on the second phase of the refactoring of the STM library.

### DMQ implementation update

Here is the current status of the DMQ implementation:

| **Mini-protocols** | **Pallas** | **Mithril Signer** | **Mithril Aggregator** | **Mithril Relay** | **Haskell DMQ Node** |
| ------------------ | :--------: | :----------------: | :--------------------: | :---------------: | :------------------: |
| N2C Submission     |     ✓      |         ✓          |           -            |  ✓<sup>\*</sup>   |    _In progress_     |
| N2C Notification   |     ✓      |      Planned       |           ✓            |  ✓<sup>\*</sup>   |    _In progress_     |
| N2N Diffusion      |  Planned   |         -          |           -            |         -         |    _In progress_     |

<i><sup>\*</sup>: for testing purpose only</i>

The network team has kept implementing the DMQ mini-protocols in the Haskell DMQ node. In the mean time, we have implemented a fake DMQ node which allowed us to test the Mithril nodes implementation of the DMQ protocol in an end to end test. This fake DMQ node is implemented in the Mithril relay which now exposes the server sides of the n2c submission and notification mini-protocols. Once the Haskell DMQ node is ready, we will replace the fake DMQ node with the real implementation.

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
