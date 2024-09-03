---
title: August 2024
slug: 2024-08
authors: [ch1bo, noonio, jpraynaud, v0d1ch, ffakenz]
tags: [monthly]
---

This is a monthly report on the progress of the 🐲 Hydra and 🛡 Mithril projects since July 2024. This document serves as both preparation for and a written summary of the monthly stakeholder review meeting, announced on our Discord channels and held on Google Meet. This month, the meeting took place on 2024-08-28, using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in August](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31)

### Roadmap

Here is an update on our current roadmap:
- **Cardano transactions signature/proving MVP** [#1457](https://github.com/input-output-hk/mithril/issues/1457): the feature is finalized and the last step to completion is to release on the `mainnet`.
- **Cardano Stake Distribution certification** [#955](https://github.com/input-output-hk/mithril/issues/955): the feature is finalized and the last step is to release on `preview`, `preprod` and `mainnet`.
- **Mithril signature diffusion with Cardano network layer PoC** [#1837](https://github.com/input-output-hk/mithril/issues/1837): the proof-of-concept is completed.
- **Decentralization of signature orchestration** [#1777](https://github.com/input-output-hk/mithril/issues/1777): we have started implementing the feature with some preliminary works.
- **CIP for Mithril signature diffusion through Cardano network** [#1775](https://github.com/input-output-hk/mithril/issues/1775): the draft CIP has been published on the Cardano foundation CIPs repository and is under review.

### Distributions

We have released the new Mithril distribution [`2430.0`](https://github.com/input-output-hk/mithril/releases/tag/2430.0). This distribution includes several critical updates and enhancements:
- Support for **Cardano node** `9.1.0`
- Support for **Cardano transactions** certification in `release-preprod` and `pre-release-preview`
- Bug fixes and performance improvements.

#### Future distributions

We plan to release new distributions in September following the **Chang** hard fork:
- `2436`:
  - Activation of the certification of **Cardano transactions** in the `release-mainnet` network
  - Activation of the certification of **Cardano stake distribution** in `pre-release-preview`, `release-preprod`, and `release-mainnet`.

### Protocol status

![](img/2024-08-mithril-protocol-status.png)
<small><center>Latest status of the Mithril protocol on Cardano `mainnet`</center></small>

### Cardano stake distribution certification

We have completed the implementation of the Cardano stake distribution certification with Mithril and are currently preparing for the rollout of this feature to production:

- We have implemented a new type of data certified for the latest snapshot of the Cardano stake distribution done by the Cardano node at the end of each epoch.
- Under the hood, we use a Merkle tree representation of the stake distribution and sign its Merkle root.
- The Mithril clients (library, CLI and WASM) have the capability to download and verify a snapshot of the Cardano stake distribution.
- We are preparing to activate the feature in the `release-preview`, `release-preprod`, and `release-mainnet` networks with the release of the next Mithril distribution.
- We have created documentation and some example code implementation for developers.

## Hydra

[Issues and pull requests closed in August](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31)


![The roadmap with features and ideas](./img/2024-08-hydra-roadmap.jpg)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month include:
- Incremental decommits, Conway support fixes, and more were released in [0.18.0](https://github.com/cardano-scaling/hydra/releases/tag/0.18.0)
- New landing page, SSL support, and bug fixes around transaction pruning were released in [0.18.1](https://github.com/cardano-scaling/hydra/releases/tag/0.18.1)
- Incremental commits (coming in a 0.19 release) have pivoted to a deposit-based scheme based on [open discussions](https://github.com/cardano-scaling/hydra/issues/199) (thanks [@GeorgeFlerovsky!](https://github.com/GeorgeFlerovsky))
- Ready to shift ledger to Conway when hardfork is complete [#1338](https://github.com/cardano-scaling/hydra/pull/1338)
- Settled on [Partial Fanout](https://github.com/cardano-scaling/hydra/issues/1468) as a good solution to [a few known problems](https://hydra.family/head-protocol/docs/known-issues#head-protocol-limits)
- Initial work on a suite of network-resiliance tests [#1552](https://github.com/cardano-scaling/hydra/pull/1552)
- The Hydra Doom demo yielded several ideas that need to be refined into features

### Hydra Doom

At the Rare Evo event in Las Vegas, we showcased the Hydra Doom demo, a technology demonstration of Hydra where users could play the 1993 id software game Doom and for each frame of the game, a smart contract transaction was submitted to a Hydra head which recorded game state, user inputs, and validated game state transitions (as a proof of concept, using only some minor logic pertaining to the movement of the player and dying in-game).

![At Rare Evo](https://github.com/user-attachments/assets/d897190d-ece6-4fa6-b0f0-ec214a58d0e2)

People could connect remotely via https://doom.hydra.family or in person on two custom-made arcade cabinets we had constructed for the occasion. Each game session contributed 35 transactions per second. In aggregate, we processed 106 million transactions with Hydra during the 78 hours of operation, which is more than the entire history of Cardano mainnet. The peak was around 7,200 tps.

![Last screen shot](https://github.com/user-attachments/assets/f0b1430a-1cdf-4c48-839d-b6d217c8279a)

The demo was very positively received on social media and seems to have rekindled the flames around the Hydra narrative both internally and externally, which hopefully bodes well for both future adoption interest among builders, as well as the prospects of securing funding for the continued development of Hydra from Intersect.

### Network tests with fault injection

We have set up a simple yet effective [workflow](https://github.com/cardano-scaling/hydra/blob/master/.github/workflows/network-test.yaml) capable of simulating a Hydra cluster under high transaction loads and packet loss network failures.

With this, we aim to consistently reproduce and resolve issues that are causing the head to become stuck, as outlined in [#1436](https://github.com/cardano-scaling/hydra/issues/1436).

The workflow specifies a set of high-load scenarios, each of which spins up the same Hydra cluster on `devnet` used during the [getting started](https://hydra.family/head-protocol/docs/getting-started) tutorial and injects network faults using [Pumba](https://github.com/alexei-led/pumba).

The idea is to allow and encourage everyone to experiment with this workflow and collect summary results, which contain details about the performance within the head. Because these tests are performed with the `hydra-node` being a 'black box,' it also allows us to explore alternative network stacks as a whole.

### New landing page

For the Rare Evo event with the public Hydra doom demo (see above), we also figured it would be a good idea to improve the first impression new visitors get from the https://hydra.family website.

The marketing team at IOG collaborated on creating new content and design for the landing page. In addition to highlighting the key features and explaining the importance of the Hydra Head protocol, the updated landing page also includes an analogy of how Hydra works, using a cargo plane as an example.

![](img/2024-08-hydra-landing-page.png)
<small><center>Screenshot of the new landing page</center></small>

The original design included an alternative color scheme using <span style={{color: "#12506C"}}>Teal</span> as the primary accent color and <span style={{color: "#721F41"}}>Plum</span> as the secondary. An example is included below. Do you think a new color scheme would be appealing or do you prefer the <span style={{color: "#6874e8"}}>Purple</span> main color as-is? Shoot us a message on Twitter (X) or [#ask-hydra on Discord](https://discord.com/invite/Qq5vNTg9PT) with your thoughts.

<details>
<summary>Alternative color scheme example</summary>

![](img/2024-08-hydra-other-color-scheme.png)

</details>

### Bug fix: layer 2 transactions during decommits

After releasing the decommit feature that enables users to transfer funds from layer 2 to layer 1 while the head is operational, we quickly identified a bug. When a decommit is pending ( funds have not yet been withdrawn from the head) and a user attempts to create a new layer 2 transaction, the hydra-node attempts to re-apply the pending decommit to the local ledger state, resulting in an error.

We promptly realized that any pending decommit needs to match with the decommit in the new snapshot and should be preserved in the next snapshot(s) until it is observed. Without this fix, our decommit feature would be extremely fragile, so we made sure to quickly draft a failing [test](https://github.com/cardano-scaling/hydra/pull/1540/files#diff-3479844ad82c0fd2f7af59c36f930cdb540876b9cf4201d67a41da83688500a9R440) and do a proper fix.

[This](https://github.com/cardano-scaling/hydra/pull/1540) is a pull request that fixes this bug and we also demonstrated this fix in one of our monthly meetings.

## Conclusion

The monthly review meeting for August 2024 was held on 2024-08-28 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

This month we saw demonstrations from both projects about new features and
improved testing capabilities. Optimization results and test results underline
the teams' commitment to evidence-based engineering. The Hydra Doom demo was a
great success and we received good feedback from users and use cases.

While roadmaps have not moved much over the last couple of months, but more
re-orientation is likely as plans for 2025 are coming together in the working
groups and other Intersect committees.

[slides]: https://docs.google.com/presentation/d/106NA1xtpuIcnC86HawBzpxY9VLexzOOxcfPD3dyoAg8
[recording]: https://drive.google.com/file/d/1Hi9AiI9cmIWXcN5xPTu3gl-KbyW-wm0K
