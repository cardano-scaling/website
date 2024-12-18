---
title: November 2024
slug: 2024-11
authors: [jpraynaud, noonio, v0d1ch]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since October 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-12-09 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in November](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-11-01..2024-11-30)

### Roadmap

Here’s the latest on our roadmap:

- **Cardano stake distribution certification** [#955](https://github.com/input-output-hk/mithril/issues/955): the feature is pending activation on `mainnet`
- **Protocol usage metrics/statistics** [#2028](https://github.com/input-output-hk/mithril/issues/2028): the feature is completed and has been released in November
- **Explore signer registration solutions** [#2029](https://github.com/input-output-hk/mithril/issues/2029): we are exploring the signer registration options and preparing a document summarizing them
- **Cardano database incremental snapshots PoC** [#2047](https://github.com/input-output-hk/mithril/issues/2047): we have started working on a proof of concept for incremental snapshots of the Cardano database.

### Distributions

We released Mithril distribution [`2445.0`](https://github.com/input-output-hk/mithril/releases/tag/2445.0), which includes:

- 🔥 **Breaking changes in the Mithril client library, CLI, and WASM** with the removal of deprecated beacon in Mithril certificates
- Stable support for **Cardano node** `10.1.2` in the signer and the aggregator
- Stable support for **Cardano stake distribution client library, CLI, and WASM**
- Stable support for the **Prometheus metrics** endpoint in the aggregator
- Bug fixes and performance improvements.

#### Future distributions

We plan to release new distributions in December:

- `2450`:
  - Availability of NodeJS and bundler targets in the Mithril client WASM npm package
  - Stable support for **Cardano node** `10.1.3` in the signer and the aggregator
  - Execution rights of pre-built binaries in GitHub releases.

### Dev blog

We have published the following posts:

- [One line installer for Mithril binaries](https://mithril.network/doc/dev-blog/2024/11/25/one-line-binaries-installer)
- [New Protocol Insights Dashboard released](https://mithril.network/doc/dev-blog/2024/11/18/new-protocol-insights-dashboard)
- [Mithril aggregator Prometheus endpoint is available](https://mithril.network/doc/dev-blog/2024/11/07/mithril-aggregator-prometheus-endpoint).

### Protocol Insights Dashboard v2

We have created a new version of the Mithril Protocol Insights Dashboard, which is now available [here](https://lookerstudio.google.com/s/mbL23-8gibI). It provides a comprehensive view of the Mithril network and its performance metrics.

The Protocol Insights Dashboard is a valuable tool for monitoring the network and understanding its behavior:

- Participation metrics
- Usage metrics
- Health metrics
- Artifacts metrics
- Software metrics.

![](img/2024-11-mithril-protocol-dashboard.gif)
<small><center>The new Mithril Protocol Insights Dashboard on the Cardano `mainnet`</center></small>

### One line installer for Mithril binaries

To facilitate the installation and updating of Mithril binaries, we have created a one line installer that downloads and installs the Mithril binaries and supports Linux and macOS. It is available for the Mithril signer, Mithril aggregator, and Mithril CLI.

Here is an example command to download the **latest Mithril signer** binary in the current directory:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/input-output-hk/mithril/refs/heads/main/mithril-install.sh | sh -s -- -c mithril-signer -d latest -p $(pwd)
```

This will download the latest signer binary for the correct platform and architecture (if available) in the current directory:

```shell
Fetching release information from https://api.github.com/repos/input-output-hk/mithril/releases/latest...
Downloading mithril-signer to latest from https://github.com/input-output-hk/mithril/releases/download/2445.0/mithril-2445.0-linux-x64.tar.gz...
Congrats! mithril-signer has been upgraded to 0.2.209+67dc6e4 from distribution latest and installed at ./home/user!
```

### Client NPM package compatible with NodeJS

We have created a new version of the **npm package for the Mithril client WASM**, which is now compatible with NodeJS and bundler targets. This feature was requested by the community and will be released in the next `2550` distribution.

### New explorer status

We have enhanced the Mithril Explorer with a new status section that provides some key metrics and insights about the Mithril network. This new section is currently available on testing networks and will be generally available with the release of the next `2550` distribution.

![](img/2024-11-mithril-explorer-status.png)
<small><center>The new Mithril Explorer status section</center></small>

### Nightly and backward compatibility workflows

We have implemented nightly and backward compatibility workflows to ensure more reliable and consistent releases. The nightly workflow builds Mithril Docker images every night and runs the backward compatibility workflow, which checks the compatibility of the upcoming Mithril distribution with previous versions, summarizing the changes.

![](img/2024-11-mithril-backward-compatibility.png)
<small><center>The backward compatibility summary created by the workflow</center></small>

## Hydra

We continued working on incremental commits, began supporting multiple versions in the Hydra Explorer, and started moving the `hydra-explorer` out of the monorepo.

[Issues and pull requests closed in November](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-11-01..2024-11-30)

![The roadmap with features and ideas](./img/2024-11-hydra-roadmap.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month include:

- Progress on incremental commits [#199](https://github.com/cardano-scaling/hydra/issues/199)
- Hydra + Midnight support [#1727](https://github.com/cardano-scaling/hydra/issues/1727)
- Continued support of Hydra Doom, especially around the tournament!

### Hydra Explorer

The hydra-explorer has been [moved to its own repository](https://github.com/cardano-scaling/hydra-explorer/pull/5) with independent deployment. As a result, supporting multiple versions of the `hydra-node` in the explorer is now necessary, and we are [currently working on it](https://github.com/cardano-scaling/hydra/issues/1282).

### Hydra Doom

Following the success of Hydra Doom at Rare Evo and as an activation at various events organized by Input | Output (IO) **and others(!)**, the Hydra Doom project has taken a significant step forward with the launch of a tournament offering 100,000 USDM. The prize is intended to be distributed automatically to the winners based on the outcome of the game as measured in the Hydra heads used for the finale.

In launching the tournament, we reached several milestones and pushed Hydra to its very limits in many ways. This included testing the performance of individual Hydra heads, which supported a multi-player game where every frame of each participant’s game session submitted smart contract transactions. At its peak (on December 3), the system processed 1.04 million transactions per second. Over a 24-hour period, it handled more than 15.5 billion transactions in total. This was achieved with a mix of real player traffic from around the world and artificial load generated by bots running the game, contributing transactions to more than 14,000 Hydra Heads.

While more work remains, this marks an impressive milestone, and the overall reception has been positive.

https://github.com/user-attachments/assets/c9546d61-212b-490f-88b8-a3b15229aa15



### Incremental commits

Incremental commits feature is almost ready to be released. As the final step
we would like to present this feature to the community members so that any
interested builders gives it a test-drive. Our hope is to provide the best UX
and make sure there are no bugs so what is left is to improve upon the
documentation and testing as well as reflecting these protocol changes in our
specification.

### Hydra + Midnight

We’ve been collaborating with the Midnight team to explore how Hydra can align with their goals. As part of this effort, we’re developing a version of Hydra with a custom ledger to support arbitrary built-in operations that validators may need. [This work is ongoing.](https://github.com/cardano-scaling/hydra/issues/1727)


## Links

The monthly review meeting for November 2024 was held on 2024-12-09 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

[slides]: https://docs.google.com/presentation/d/1erEcuVNtYsCecJEX-QVXVtxzQMl8G6EVQbs98KPjxmI/edit?usp=sharing
[recording]: https://drive.google.com/file/d/1a9UOldEuNSg19GB2CXUbNIHITJodZOqr/view?usp=drive_link
