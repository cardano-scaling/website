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
- A **BREAKING** changes in **Mithril client CLI**:
  - The deprecated `snapshot` command has been **removed**. 
  - It has been superseded by the `cardano-db` command.
- Bug fixes and optimizations.

We have also created the [Mithril client CLI 'snapshot' command is removed](https://mithril.network/doc/dev-blog/2024/06/12/client-cli-removed-command) developer blog post to announce the removal of the client CLI command.

Additionally, we have released a draft version of the [Mithril Threat Model](https://mithril.network/doc/mithril/threat-model). We expect to receive external feedback and contributions before we can consider it final.

### Transaction certification

We have kept working on the implementation of the Cardano transactions certification with Mithril and we have made good progress with the developments: 
- The transactions are now retrieved with the Chain Sync mini-protocol with the [`Pallas`](https://github.com/txpipe/pallas) library.
- The performances of the prover route of the aggregator have been significantly improved.

![](img/2024-06-mithril-cardano-tx-roadmap.jpg)

#### Low latency certification

The transactions are imported with the native Chain Sync mini-protocol of the Cardano node. This has been possible with the use of Pallas library which fully supports this mini-protocol. This allowed us to retrieve the transactions much closer to the tip of the chain and at more frequent intervals. In order to do so, we have also enhanced the transaction importer to handle rollbacks of the chain: some blocks previously recorded can be discarded at a further time with an increased probability when getting closer to the tip of the chain.

We are currently in the process of calibrating the parameters of the system (depth from the tip and certification pace) before we can activate it on the `mainnet`.

#### Increased Prover Performances

We have identified some bottleenecks in the computations of the merkelized proof we compute for transaction membership of the transaction set as well as in the databse access. These bottlenecks have been fixed whcih allowed us to reach new order of magnitude in terms of performance of the prover route: it is now able to deliver consistently **10,000** transaction hashes certification per second.

![](img/2024-06-mithril-cardano-tx-prover-throughput.png)

### Mithril/Cardano integration

We have been working with the Cardano networking team on the design of a closer integration of Mithril into Cardano. In particular, we have focused our efforts on decentralizing the signature diffusion from the Mithril signers to the Mithril aggregators based on the Cardano network layer. 

Here is our current roadmap:
- Assessing Cardano network bandwidth capacity for supporting Mithril signature diffusion.
- Designing a node-to-node mini-protocol for signature diffusion.
- Designing two node-to-client mini-protocols for signature submission and notification.
- Preparing the submission of a CIP draft to the community.

![](img/2024-06-mithril-cardano-integration.png)

## Hydra

[Issues and pull requests closed in
June](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-05-31..2024-06-30)

Here is a high-level overview of what the team has worked on over the last month:
- Increment Decommits
We continued our work on increment decommits, focusing on investigating adversarial attacks on the head script contract.
- Specification Update
We updated our [specification](https://github.com/input-output-hk/hydra/pull/1479) with the latest changes following our exploration of adversarial attacks. These updates aim to enhance the security of the protocol.
- Agda Specification for Hydra Protocol
Work has begun on writing an Agda specification for the Hydra protocol. You can follow the progress [here](https://github.com/cardano-scaling/hydra-formal-specification).
- Incremental Commit
We discussed various options for the incremental commit work. This includes potential designs for a hydra-ledger to improve system efficiency and security.
- Node Compatibility
The node has been successfully updated and is now compatible with cardano-node version 8.11-pre.
- Website
We updated our website tutorials, and documentation to enhance expressivity and ease of use.
- Committing Internal Wallet UTXOs
Breaking changes to the `hydra-node` API `/commit` endpoint [#1463](https://github.com/input-output-hk/hydra/pull/1463) to remove the check that prevented committing UTxOs from an internal `hydra-node` wallet.

We haven't planned how our next release will look like, so our roadmap did not change much. Our current focus is on incremental decommits and commits, and having our protocol specified in Agda.

![The roadmap with features and ideas](./img/2024-06-hydra-roadmap.png)
<small><center>The latest roadmap with features and ideas</center></small>

### Incremental decommit

Incremental decommit feature was just about to be released when we found a bug
while doing a demo. The bug was related to the way we were handling the
decommit snapshot in close/fanout.

Once you decide to decommit funds from the Head and everybody signs the
decommit snapshot the same snapshot was used to close/fanout. So if this
snapshot contains some utxo to decommit but you already decommitted funds from
the Head the fanout would distribute the decommit funds again. 

This was pretty nasty and allthough we have lots of tests around the decommit
feature so far we didn't have to check the user balances upon Head closure. 

We already implemented the fix for it which consists of adding 
versioned snapshots. This allows us to distinguish between the two cases: 
 - Decommit snapshot was signed but the decommit was never observed 
 - Decommit snapshot was signed and the decommit was also observed 

When we observe the decommit transaction locally we increment the version in
the local state which allows us to compare the snapshot version against the
expected local version on-chain.

We also had to keep some extra data in the `Close` redeemer just so we can
successfully check for valid snapshot signature while altering the close datum
to remove the utxo to decommit if the versions are not matching. In turn, this
makes the fanout behave nicely now since it is only concerned with the close
datum and the actual transaction outputs hashes.

Now the rest of the work consists of updating the specification with the
changes in the implementation and we should be ready to release this feature in
the following days.

## Community

## Subbit.xyz

Algy Wallis presented “Subbit,” an L2 solution focused on subscription-based services, aimed at addressing the complexities of building blockchain products. Subbit is designed to be easier to integrate and manage compared to L1 solutions, reducing latency and transaction fees. The system allows a provider to verify consumer IOU notes, facilitating periodic payments and withdrawals with minimal on-chain interactions. This model mirrors Bitcoin’s Lightning Network and aims to enhance scalability and interoperability for subscription services on Cardano.

## Hydrozoa

George Flerovsky introduced the Hydrazoa proposal, currently in Fund 12 for Catalyst. Hydrazoa aims to enhance the existing Hydra framework by adding dynamic capabilities for incremental commitments and decommits, along with the ability to add or remove participants in state channels while they are still open. The goal is to simplify L1 scripts and lower costs, with fallback mechanisms similar to Hydra’s in case of L2 consensus failure. George highlighted the differences and potential integrations with Hydra, emphasizing a more flexible and simplified approach for state channel management.

## Technical working groups

Reza Baram provided an update on the Hydra Working Group, which had its first meeting to discuss the group’s vision and collaborative processes. The primary goal is to create an environment for sharing knowledge and working towards scaling Cardano, not limited to Hydra alone. The group is currently focused on defining and delivering Hydra version one, prioritizing incremental commits and robustness improvements. Feedback from the community and working group members will be sought to refine and enhance the roadmap and ensure effective scaling solutions for Cardano applications. Hydra WG is open to new members and contributions from the community. More info can be found here: https://github.com/cardano-scaling/wg-hydra.

## Conclusion

The monthly review meeting for June 2024 was held on 2024-05-24 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

[slides]: https://docs.google.com/presentation/d/137n0SQ2tnWCrDfPieT3JSU8MDnJDTKuLE8ISSieRO4U/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://drive.google.com/file/d/1hIn4NWv6YRtwv_7RUGlXP8ObwpPbMNJy/view