---
title: August 2024
slug: 2024-08
authors: [ch1bo, noonio]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since July 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-08-28 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in August](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31)

### Distributions

TODO @jpraynaud: any updates on releases?

### Protocol status

TODO @rezabaram/@jpraynaud: provide an update here (or do a roadmap / epic update?)
![](img/2024-07-mithril-protocol-status.png)
<small><center>Latest status of the Mithril protocol on Cardano `mainnet`</center></small>

### Cardano stake distribution certification

TODO @jpraynaud (et al): write about this

## Hydra

[Issues and pull requests closed in August](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-07-31..2024-08-31)


![The roadmap with features and ideas](./img/2024-08-hydra-roadmap.jpg)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month are:
- Incremental decommits, Conway support fixes, and more were released in [0.18.0](https://github.com/cardano-scaling/hydra/releases/tag/0.18.0)
- New landing page, SSL support, and bugixes around transaction pruning release in [0.18.1](https://github.com/cardano-scaling/hydra/releases/tag/0.18.1)
- Incremental commits (coming in a 0.19 release) have pivoted to a deposit-based scheme based on [open discussions](https://github.com/cardano-scaling/hydra/issues/199) (thanks [@GeorgeFlerovsky!](https://github.com/GeorgeFlerovsky))
- Ready to shift ledger to Conway when hardfork is complete [#1338](https://github.com/cardano-scaling/hydra/pull/1338)
- Settled on [Partial Fanout](https://github.com/cardano-scaling/hydra/issues/1468) as a good solution to [a few known problems](https://hydra.family/head-protocol/docs/known-issues#head-protocol-limits)
- Initial work on a suite of network-resiliance tests [#1552](https://github.com/cardano-scaling/hydra/pull/1552)
- The Hydra Doom demo yielded several ideas that need to be refined into features

### Hydra Doom

TODO @trym: include some media and write 2-3 paragraphs about Hydra Doom

### Network tests with fault injection

TODO @ffakenz: write about the new network tests with pumba

### New landing page

For the Rare Evo event with the public Hydra doom demo (see above), we also figured it would be a good idea to improve the first impression new visitors get from the https://hydra.family website.

Together with the marketing team of IOG, new landing page content and design was put together. Besides mentioning the key features and why the Hydra head protocol is needed, the new landing page also sports an explanation of how Hydra works using the analogy of a cargo plane.

![](img/2024-08-hydra-landing-page.png)
<small><center>Screenshot of the new landing page</center></small>

The original design included an alternative color scheme using <span style={{color: "#12506C"}}>Teal</span> as the primary accent color and <span style={{color: "#721F41"}}>Plum</span> as the secondary and an example is included below. Do you, dear reader, think a new color scheme would be good or do you like the <span style={{color: "#6874e8"}}>Purple</span> main color as-is? Shoot us a message on twitter or [#ask-hydra on Discord](https://discord.com/invite/Qq5vNTg9PT) with your thoughts.

<details>
<summary>Alternative color scheme example</summary>

![](img/2024-08-hydra-other-color-scheme.png)

</details>

## Conclusion

The monthly review meeting for August 2024 was held on 2024-08-28 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO @ch1bo: write conclusion (after other parts and reference)
- demos from both teams on new features and improved testing
- optimizations and test results
- evidence based engineering
- hydra doom demo, 100M transactions over couple days, well received
- new learnings and good feedback from users and use cases
- roadmaps have not moved much over the last couple months, but more re-orientation likely as plans for 2025 are coming together in the working groups and other Intersect committees

[slides]: https://docs.google.com/presentation/d/106NA1xtpuIcnC86HawBzpxY9VLexzOOxcfPD3dyoAg8
[recording]: TODO
