---
title: July 2024
slug: 2024-07
authors: [ch1bo]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since June 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month the meeting was held on 2024-07-22 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in July](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-06-30..2024-07-31)

### Distributions

#### 2423.0

We have released the new Mithril distribution [`2428.0`](https://github.com/input-output-hk/mithril/releases/tag/2428.0). This distribution includes several critical updates and enhancements:
- Support for **Cardano node** `9.0.0`.
- Database cleanup and optimization once per epoch.
- Bug fixes and performance improvements.

#### Future distributions

![](img/2024-07-mithril-distributions.png)

We have planned to release two new distributions in August:
- `2430` (before the **Chang** hardfork):
  - Activation of the certification of **Cardano transactions** in the `release-preprod` network.
  - Support for **Cardano node** `9.1.0` on **all networks**.
- `2434` (after the **Chang** hardfork):
  - Activation of the certification of **Cardano transactions** in the `release-mainnet` network.


### Transaction verification in Nami

TODO
- demo created by Blockfrost
- make status clear; i.e. this is/was only an experiment
- serving certificates through blockfrost?
- include video (hosted on youtube, loom, ipfs?)

### Decentralized Message Queue CIP

TODO
- give updates on latest ideas about CIP for signature diffusion

## Hydra

[Issues and pull requests closed in July](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-06-30..2024-07-31)

TODO
- hydra roadmap notable updates

![The roadmap with features and ideas](./img/2024-07-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

### Incremental decommits completed

TODO 
- include video https://drive.google.com/drive/u/0/folders/1YespG5uangc9b9nKda9DZK6hZ0dni3SZ
- recap on cleanup / corner cases resolved this month 

### Repository moved

TODO
- https://github.com/input-output-hk/hydra -> https://github.com/cardano-scaling/hydra
- Most links redirected
- New docker images available under ghcr.io/cardano-scaling/hydra-node
- Roadmap project cannot be moved, copy of roadmap currently being filled 🗺 https://github.com/orgs/cardano-scaling/projects/7/views/1
- If you encounter broken links, just reach out on Discord or create an issue 🙏 https://github.com/cardano-scaling/hydra/issues/new/choose 

### Working group updates

TODO SN summarize findings of last two meetings on "What is Hydra Head V1"

- First work item of the working group https://github.com/cardano-scaling/wg-hydra
- Gathered valuable feedback from fellow layer 2 architects and Hydra users
- Goal: common understanding of what must be included in Hydra Head V1
- Next items:
  - When/how to audit Hydra Head V1?
  - CIP on standardizing interfaces to off-chain ledgers

## Conclusion

The monthly review meeting for June 2024 was held on 2024-05-24 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO SN summarize feedback received of monthly meeting and write conclusion

[slides]: https://docs.google.com/presentation/d/17T18tNIJZPTiEfc2Psb1C6GRxt04hRNj16E5BiAML_I
[recording]: https://drive.google.com/file/d/1sXYt1MZJtrq1jARha-MGLMWVORvSUjEv
