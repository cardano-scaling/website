---
title: March 2024
slug: 2024-03
authors: [ch1bo,jpraynaud]
tags: [monthly]
---

This is a monthly report of progress on 🐲 Hydra and 🛡 Mithril projects since February 2024. These reports have recently moved to https://cardano-scaling.org/monthly (more details [here](/monthly/2024-02)).

This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-03-27, using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in
March](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31)

This month, there has been a noticeable increase in SPOs joining the Mithril protocol. In particular, many new multi-pool operators have set up the Mithril signer in their infrastructure. At the end of epoch **#475**, there were **230** pools registered with **4.6B₳** stake involved representing approximately 20% of the total active stake. We will continue to provide regular updates to the community to encourage their participation in the protocol.

![](img/2024-03-mithril-participation.png)

We have released the new Mithril distribution [`2412.0`](https://github.com/input-output-hk/mithril/releases/tag/2412.0). This release includes several critical updates and enhancements, such as support for Prometheus metrics endpoint in signer, deprecation of the `snapshot` command in the client CLI, full Pallas based implementation of the chain observer, and support for Cardano node version `8.9.0`.
 
### Transaction signatures

We have developed a signing structure that enables quick proof generation while maintaining a light footprint on the signer for the `mainnet`. This is crucial as we need to handle a vast amount of transactions (100 million). To achieve this, we created a **block range Merkle tree**, which stores transactions in a Merkle tree and uses its root to create another Merkle tree. According to the our benchmark tests, a batch proof for `100` transactions can now be created in less than `250 ms`.

![](img/2024-03-mithril-block-range-mktree.jpg)

We have also completed the roadmap of the MVP that will be released on `mainnet`:

![](img/2024-03-mithril-cardano-tx-roadmap.png)

### Transaction verification in frontend

The [Mithril client WASM library](https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm) has been used to implement a Cardano transaction verifier inside the [Mithril explorer](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.testing-sanchonet.api.mithril.network%2Faggregator).
This feature is currently available only on the `testing-sanchonet` network and will be progressively rolled out to the other Mithril networks.
Wallet and DApp developers could leverage the client WASM library to implement a security layer that verifies transactions provided by a third party.

![](img/2024-03-mithril-explorer.png)

### Prometheus metrics

We have released a new Prometheus endpoint with the latest stable version of the signer. The feature can be easily activated by the SPOs as explained in this [developer blog post](https://mithril.network/doc/dev-blog/2024/03/26/mithril-signer-prometheus-endpoint).

Additionally, we created a Grafana template to easily set up a dashboard for this Prometheus endpoint: https://grafana.com/grafana/dashboards/20776-mithril-signer/

![](img/2024-03-mithril-prometheus-metrics.png)

### Pallas updates

The latest stable distribution now includes a fully implemented chain observer powered by the [`pallas`](https://crates.io/crates/pallas) crate. Additionally, we have been collaborating with TxPipe to implement the `chainsync` mini-protocol with Pallas. This will significantly reduce the latency of signatures for Cardano transactions.

### Deprecation warning

We have deprecated the `snapshot` command of the Mithril client CLI as explained in this [developer blog post](https://mithril.network/doc/dev-blog/2024/03/26/client-cli-deprecated-command).

We recommend using the replacement `cardano-db snapshot` command for users of the client CLI.

## Hydra

[Issues and pull requests closed in
March](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31)

Hydra project
[roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7) did not
change much this month:

![The roadmap with features and ideas](./img/2024-03-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

### Notable updates

* Evolved the user-requested [feature idea #1337](https://github.com/input-output-hk/hydra/discussions/1337) into a new feature on the roadmap to [revise POST /commit endpoint interface #1350](https://github.com/input-output-hk/hydra/issues/1350). This will allow committing into a head directly from advanced smart contracts. It remains unclear whether this will be part of the upcoming `0.16.0` release.

* Captured the new feature idea of [Directly open heads #1329](https://github.com/input-output-hk/hydra/issues/1329) as item on the roadmap. This requires further grooming and could supersede other ideas like [Always abortable head #699](https://github.com/input-output-hk/hydra/issues/699).

* Mostly completed [Drop support for JSON encoded transactions #1213](https://github.com/input-output-hk/hydra/issues/1213) and [Streaming plugins #1325](https://github.com/input-output-hk/hydra/issues/1325), which will be released soon as `0.16.0`.

* Made substantial progress on [Incremental decommit #1057](https://github.com/input-output-hk/hydra/issues/1057), however, this is unlikely to be released as part of `0.16.0`.

* Fully prepared [Switch L2 ledger to Conway #1178](https://github.com/input-output-hk/hydra/issues/1178), such that it can be released directly after the hard fork on the Cardano layer 1.

* As we improve our understanding of pivotal features such as incremental commits and decommits, the feature set required to address [known issues and limitations] (https://hydra.family/head-protocol/docs/known-issues/) is being narrowed down, and the scope for a convincing version `1.0.0` is becoming clearer.

### Conway support 

As mentioned in previous roadmap updates, we separated work to support the upcoming Conway era on Cardano in two:

  + [Conway support #1177](https://github.com/input-output-hk/hydra/issues/1177) will make the `hydra-node` support Conway and allow users to keep heads open across the hard fork.
  + [Drop Babbage support #1178](https://github.com/input-output-hk/hydra/issues/1178) will eventually drop support for the Babbage era and retain maintainability.

While the former was already merged and is currently released in version `0.15.0` onwards, the team prepared the latter this month.

Ideally switching the transaction format in the `hydra-node` is as simple as setting the type alias `type Era = Conway`. However, the code was `Babbage`-specific in several areas and work on this resulted in various pull requests making switching easier in several places: [#1326](https://github.com/input-output-hk/hydra/pull/1326), [#1327](https://github.com/input-output-hk/hydra/pull/1327), [#1328](https://github.com/input-output-hk/hydra/pull/1328), [#1334](https://github.com/input-output-hk/hydra/pull/1334), and [#1342](https://github.com/input-output-hk/hydra/pull/1342).

The result is a relatively simple switch in this [draft pull request](https://github.com/input-output-hk/hydra/pull/1338) and available on branch `lc/conway-support`, which we intend to bump and merge once the public Cardano networks hard fork.

Having full `Conway` era support, including `PlutusV3`, on the Hydra layer 2 already prepared on a branch allows early adopting users from the community to explore and use this already. Modulo-P has been on the forefront here by developing zero-knowledge hybrid DApps and wrapping the Hydra branch up in this [example repository](https://github.com/Modulo-P/hydra-node-plutusv3).

:::info
A full-on `Conway` `hydra-node` can be used on `SanchoNet` already and the Hydra protocol scripts did not change from `master` / the upcoming `0.16.0`. However, note that the [Hydra explorer](http://explorer.hydra.family) shows such `Conway`-built heads only as `Initializing`. More details about why can be found in this [pull request](https://github.com/input-output-hk/hydra/pull/1373).
:::

### Streaming plugins

SundaeLabs is working on a Hydra-based layer two protocol (`gummiworm`) that requires the usage of `hydra-node` components in a different way than the default setup. As part of this development, SundaeLabs submitted a Fund10 Catalyst proposal to enhance the Hydra node by adding features that would facilitate not only their work but also the work of everyone building on Hydra.

They have been working on a plugin architecture to enable the infiltration and exfiltration of events, which enables hygienic forks of Hydra that feature additional connections to the outside world. They are interested in consuming the Hydra event stream via Amazon Kinesis and storing transaction archives on S3 for later reference.

After an initial design phase resulting in [ADR29](https://hydra.family/head-protocol/adr/29/), they contributed the event source and sink abstractions, and refactored the Hydra node to use these new extension points together with core contributors. The `EventSource` and `EventSink` interfaces, along with the configurable list of `eventSinks` in the main `HydraNode` handle, allow to extend the `hydra-node` with any external system. It also paves the way for more scalable persistence methods on the mainline Hydra node, and might even allow refactoring the existing API server as an `EventSink`.

## Community

### Mithril office hours

As the Catalyst project of TxPipe on Mithril is completed, we want to build upon this initial maintenance work in a more open format. For this, we are transforming our alignment calls into a public weekly office hour where we invite the community to join and discuss concrete pull requests, issues and questions on Mithril. 

:point_right: Mithril office hours happen every Tuesday at 16:00 UTC on the [#mithril-live](https://discord.com/channels/826816523368005654/1146481948794032260) Discord channel.

### Hydra governance walkthrough

This month, the Hydra team has been asked to provide a walkthrough of how we use GitHub to run and govern the project. We have prepared a video that explains how we use Github issues, pull requests, discussions, and projects to manage the development of the Hydra project. However, it is important to note that this information represents only a current view and we are enthusiastic about continuously improving the processes to make them more transparent. 

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JGUeO7A6mMU?si=T5Dy4zuRb6NLReJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
<br/>

We are excited to announce that we are looking to establish a Hydra working group at Intersect. This group will aim to involve more community members in proposing feature backlogs, roadmaps, and RFPs. Initially, the focus of this working group will be on the concrete Hydra Head protocol (state channels). However, variations such as Hydrozoa, and combined scalability protocols like Gummiworm, Lightning-like payment channel networks, or the Hydra Tail protocol (~ rollups) will also require more community involvement. Stay tuned for more updates on this in the upcoming months.

## Conclusion

We held the monthly review meeting for March 2024 on 2024-03-27 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

This month we have made significant progress on Mithril transaction signatures, while the Hydra team has been busy working on the incremental commits/decommits features. Both projects are fully prepared for the upcoming Conway hard fork on Cardano and continuously demonstrate user experience improvements.

Besides the Hydra explorer user interface, the teams also showcased the Mithril transaction verification feature in the Mithril explorer frontend. This demonstrates that Cardano transactions can be additionally verified using Mithril certificates from within a web browser. Taking this even further, we believe that such a "Verified with Mithril" checkmark can provide additional level of confirmation for users of light wallets and Cardano DApps!

Besides these, Modulo-P showcased their early adoption of Hydra heads using `Conway` and `PlutusV3` for their quite involved zero-knowledge protocols. Briefly after the meeting they released a first look on their [zkMastermind DApp](https://zkmastermind.modulo-p.io/). Also, SundaeLabs presented their streaming plugins for Hydra. Both are examples of how the Hydra protocol can be extended and used in different ways, and we are excited to see more community contributions in the future. 

As a closing remark, we see the trend of decentralizing governance on both projects, Hydra and Mithril, while at large the overall 'age of Voltaire' is unfolding. Consequently, we anticipate moves, merges, or restructuring of repositories, projects, and working groups. What an exciting time to be a part of this big Cardano community!

[slides]: https://docs.google.com/presentation/d/1pxV7VTDHW-wtvJy1RDuei7H14gQvgrrUlqoiOco6j9E
[recording]: https://drive.google.com/file/d/1SL5Js8wBIoBeb87exCmZTWtHSQy7xF1W/view
