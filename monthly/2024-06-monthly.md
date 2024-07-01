---
title: June 2024
slug: 2024-06
authors: [jpraynaud, v0d1ch, rezabaram, ffakenz]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since May 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month the meeting was held on 2024-06-24 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in June](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-05-31..2024-06-30)

We have released the new Mithril distribution [`2423.0`](https://github.com/input-output-hk/mithril/releases/tag/2423.0). This distribution includes several critical updates and enhancements:
- **BREAKING** changes in the **Mithril client CLI**:
  - The deprecated `snapshot` command has been **removed**
  - It has been superseded by the `cardano-db` command
- Bug fixes and optimizations.

We have also created a developer blog post about the [removal of the Mithril client CLI 'snapshot' command](https://mithril.network/doc/dev-blog/2024/06/12/client-cli-removed-command).

Additionally, we have released a draft version of the [Mithril threat model analysis](https://mithril.network/doc/mithril/threat-model). We expect to receive external feedback and contributions before considering it final.

### Transaction certification

We kept working on the implementation of the Cardano transaction certification with Mithril and made good progress with the development: 
- Transactions are now retrieved with the chain sync mini-protocol using the [`Pallas`](https://github.com/txpipe/pallas) library
- The performance of the prover route of the aggregator has significantly improved.

![](img/2024-06-mithril-cardano-tx-roadmap.jpg)

#### Low latency certification

The transactions are imported using the native chain sync mini-protocol of the Cardano node. This has been made possible with the Pallas library, which fully supports this mini-protocol. This allowed us to retrieve transactions much closer to the tip of the chain and at more frequent intervals. To achieve this, we have enhanced the transaction importer to handle chain rollbacks, where some blocks previously recorded may be discarded at a later time, with an increased probability as we get closer to the tip of the chain.

We are currently calibrating the system parameters (depth from the tip and certification pace) before activating it on the mainnet.

#### Increased prover performance

We have identified some bottlenecks in the computations of the merkelized proof for transaction membership of the transaction set as well as in the database access. These bottlenecks have been fixed, allowing us to achieve a new order of magnitude in the performance of the prover route. It is now able to consistently deliver **10,000** transaction hashes certification per second.

![](img/2024-06-mithril-cardano-tx-prover-throughput.png)

### Mithril/Cardano integration

We have been working with the Cardano networking team to design a closer integration of Mithril into Cardano. In particular, we have focused on decentralizing the signature diffusion from Mithril signers to Mithril aggregators based on the Cardano network layer. 

Here is the current roadmap:
- Assessing Cardano network bandwidth capacity to support Mithril signature diffusion
- Designing a node-to-node mini-protocol for signature diffusion
- Designing two node-to-client mini-protocols for signature submission and notification
- Preparing the submission of a CIP draft to the community.

![](img/2024-06-mithril-cardano-integration.png)

## Hydra

[Issues and pull requests closed in
June](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-05-31..2024-06-30)

Here is a high-level overview of the team's work over the past month:

- **Incremental decommits.** We continued our work on incremental decommits, focusing on investigating adversarial attacks on the head script contract.
- **Specification update.** We updated our [specification](https://github.com/input-output-hk/hydra/pull/1479) with the latest changes following our exploration of adversarial attacks. These updates aim to enhance the security of the protocol.
- **Agda specification for the Hydra protocol.** Work has begun on writing an Agda specification for the Hydra protocol. You can follow the progress [here](https://github.com/cardano-scaling/hydra-formal-specification).
- **Incremental commit.** We discussed various options for the incremental commit work, including potential designs for a hydra-ledger to improve system efficiency and security.
- **Node compatibility.** The node has been successfully updated and is now compatible with cardano-node version 8.11-pre.
- **Website.** We updated our website tutorials and documentation to enhance expressivity and ease of use.
- **Committing internal wallet UTXOs.** We made breaking changes to the `hydra-node` API `/commit` endpoint [#1463](https://github.com/input-output-hk/hydra/pull/1463) to remove the check that prevented committing UTXOs from an internal `hydra-node` wallet.

We have not planned the next release, so our roadmap remains largely unchanged. Our current focus is on incremental decommits and commits and specifying our protocol in Agda.

![The roadmap with features and ideas](./img/2024-06-hydra-roadmap.png)
<small><center>The latest roadmap with features and ideas</center></small>

### Incremental decommit

We were about to release the incremental decommit feature when we discovered a bug during a demo. This bug related to handling the decommit snapshot in close/fanout. When one decided to decommit funds from the head and everyone signed the decommit snapshot, the same snapshot was used to close/fanout. If this snapshot contained some UTXOs to decommit but one already decommitted funds from the head, the fanout would distribute the decommit funds again.

This issue was significant, and although we have many tests around the decommit feature, we had not checked user balances upon head closure.

We have implemented a fix that involves adding versioned snapshots. This allows us to distinguish between two cases:

- The decommit snapshot was signed, but the decommit was never observed
- The decommit snapshot was signed, and the decommit was also observed.

When we observe the decommit transaction locally, we increment the version in the local state. This allows us to compare the snapshot version against the expected local version on-chain.

We also needed to keep extra data in the `Close` redeemer to successfully check for a valid snapshot signature while altering the close datum to remove the UTXOs to decommit if the versions do not match. This ensures that the fanout behaves correctly, as it is only concerned with the close datum and the actual transaction output hashes.

The remaining work involves updating the specification with the changes in the implementation. We expect to release this feature in the coming days.

## Community

## Subbit.xyz

Algy Wallis presented 'Subbit', a layer 2 solution focused on subscription-based services, aimed at addressing the complexities of building blockchain products. Subbit is designed to be easier to integrate and manage compared to layer 1 solutions, reducing latency and transaction fees. The system allows providers to verify consumer IOU notes, facilitating periodic payments and withdrawals with minimal on-chain interactions. This model mirrors Bitcoin's Lightning Network and aims to enhance scalability and interoperability for subscription services on Cardano.

## Hydrozoa

George Flerovsky introduced the Hydrazoa proposal, currently in Catalyst Fund12. Hydrazoa aims to enhance the existing Hydra framework by adding dynamic capabilities for incremental commits and decommits, along with the ability to add or remove participants in state channels while they are still open. The goal is to simplify layer 1 scripts and lower costs, with fallback mechanisms similar to Hydra's in case of layer 2 consensus failure. George highlighted the differences and potential integrations with Hydra, emphasizing a more flexible and simplified approach to state channel management.

## Technical working groups

Reza Baram provided an update on the Hydra working group, which recently had its first meeting to discuss its vision and collaborative processes. The primary goal is to create an environment for sharing knowledge and working towards scaling Cardano beyond just Hydra. The group is currently focused on defining and delivering Hydra version one, prioritizing incremental commits and robustness improvements. Feedback from the community and working group members will be sought to refine and enhance the roadmap, ensuring effective scaling solutions for Cardano applications. The Hydra working group is open to new members and contributions from the community. [Read more here](https://github.com/cardano-scaling/wg-hydra).

## Conclusion

The monthly review meeting for June 2024 was held on 2024-05-24 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

[slides]: https://docs.google.com/presentation/d/137n0SQ2tnWCrDfPieT3JSU8MDnJDTKuLE8ISSieRO4U/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://drive.google.com/file/d/1hIn4NWv6YRtwv_7RUGlXP8ObwpPbMNJy/view