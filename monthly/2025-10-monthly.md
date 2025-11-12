---
title: October 2025
slug: 2025-10
authors: [jpraynaud, noonio]
tags: [monthly]
---

This is the monthly report on the progress of the Hydra and Mithril projects **for October 2025**. It serves as preparation for, and a written summary of, the monthly stakeholder review meeting. The meeting is announced on our Discord channels and held on Google Meet. This month, the meeting took place on November 6, 2025, using the [presentation slides][slides]; the [recording][recording] is also available.

## Mithril

[Issues and pull requests closed in October](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-10-01..2025-10-31)

### DMQ implementation update

Here is the current status of the DMQ implementation:

| **Mini-protocols** | **Pallas** | **Mithril Signer** | **Mithril Aggregator** | **Mithril Relay** | **Haskell DMQ Node** |
| ------------------ | :--------: | :----------------: | :--------------------: | :---------------: | :------------------: |
| N2C submission     |     ✓      |         ✓          |           -            |  ✓<sup>\*</sup>   |          ✓           |
| N2C notification   |     ✓      |      Planned       |           ✓            |  ✓<sup>\*</sup>   |          ✓           |
| N2N diffusion      |  Planned   |         -          |           -            |         -         |          ✓           |

<i><sup>\*</sup>: for testing purpose only</i>

The network team kept working on the authentication of messages in the n2n mini-protocol and the peer discovery from ledger state of the Haskell DMQ node. We kept integrating it with the Mithril nodes and completed the testing of end-to-end communication. We have been able to produce Mithril certificates by relying only on the DMQ for communication between signers and aggregators.

### Decentralization of Mithril network configurations

We have worked on the first phase of decentralizing the Mithril network configurations: we have abstracted the retrieval of the network configurations with a new `MithrilNetworkConfigurationProvider` trait. We have created two implementations of this trait: one that retrieves the configurations from a local parameters of the leader aggregator and another that retrieves them from a remote source for the follower aggregators and signers. The second phase will consist of implementing a configuration source based on markers stored on the Cardano chain.

### Protocol status

TODO: update

The protocol operated smoothly on the `release-mainnet` network with the following metrics:

- **Registered stake**: `4.7B₳` (`22%` of the Cardano network)
- **Registered SPOs**: `245` (`9%` of the Cardano network)
- **Full Cardano database restorations**: `945` restorations
- **Signer software adoption**: `77.9%` of the SPOs are running a recent version (one of the last three releases).

You can find more information on the [Mithril protocol insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI).

## Hydra

[Issues and pull requests closed in October](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2025-10-01..2025-10-31)

This month, notable [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/11) updates include:

### Hydra 1.0!

TODO: update

### Demo HTLC

TODO: update

### Best practice committing from a Dapp

TODO: update

### Roadmap update

TODO: update

- Delivered recovering in a closed state
- Working on HTLC between two Hydra heads
- Starting work on partial fanout
- Starting work on a light-weight node via Raspberry Pi.

![](img/2025-09-hydra.png)

## Links

The monthly review meeting for October 2025 took place on November 6, 2025, via Google Meet.
The presentation [slides][slides] and the [recording][recording] are available for review.

[slides]: https://docs.google.com/presentation/d/1z-1Svu19IKPHZNc1K9mq8kmOnACO16H7y3SJpdmqKz4/edit?slide=sharing
[recording]: https://drive.google.com/file/d/1blynT20UZNNLDhZC4gOd7uuIlKUqn5jK/view?usp=sharing
