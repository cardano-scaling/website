---
title: November 2024
slug: 2024-10
authors: [jpraynaud]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since October 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-12-09 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in November](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-11-01..2024-11-30)

### Roadmap

Here’s the latest on our roadmap:

- **Cardano stake distribution certification** [#955](https://github.com/input-output-hk/mithril/issues/955): the feature is pending activation on `mainnet`
- **Protocol usage metrics/statistics** [#2028](https://github.com/input-output-hk/mithril/issues/2028): the feature is completed and has been released in November.
- **Explore Signer Registration Solutions** [#2029](https://github.com/input-output-hk/mithril/issues/2029): we are exploring the signer registration options and preparing a document summarizing them.
- **Cardano Database Incremental Snapshots PoC** [#2047](https://github.com/input-output-hk/mithril/issues/2047): we have started working on a proof of concept for incremental snapshots of the Cardano database.

### Distributions

We released Mithril distribution [`2445.0`](https://github.com/input-output-hk/mithril/releases/tag/2445.0), which includes:

- 🔥 **Breaking changes in Mithril client library, CLI, and WASM** with removal of deprecated beacon in Mithril certificates.
- Stable support for **Cardano node** `10.1.2` in the signer and the aggregator.
- Stable support for **Cardano stake distribution client library, CLI and WASM**.
- Stable support for **Prometheus metrics** endpoint in aggregator.
- Bug fixes and performance improvements.

#### Future distributions

We plan to release new distributions in December:

- `2450`:
  - Availability of NodeJS and bundler targets in the Mithril client WASM npm package.
  - Stable support for **Cardano node** `10.1.3` in the signer and the aggregator.
  - Execution rights of pre-built binaries in the GitHub releases.

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
- Software metrics

![](img/2024-11-mithril-protocol-dashboard.gif)
<small><center>The new Mithril Protocol Insights Dashboard on the Cardano `mainnet`</center></small>

### One line installer for Mithril binaries

In order to facilitate the installation and update of Mithril binaries, we have created a one line installer that downloads and installs the Mithril binaries for you. This installer is available for Linux and MacOS, and for the Mithril signer, Mithril aggregator, and Mithril CLI.

Here is an example command to download the **latest Mithril signer** binary in the current directory:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/input-output-hk/mithril/refs/heads/main/mithril-install.sh | sh -s -- -c mithril-signer -d latest -p $(pwd)
```

Which will download the latest signer binary for the correct platform and architecture (if available) in the current directory:

```shell
Fetching release information from https://api.github.com/repos/input-output-hk/mithril/releases/latest...
Downloading mithril-signer to latest from https://github.com/input-output-hk/mithril/releases/download/2445.0/mithril-2445.0-linux-x64.tar.gz...
Congrats! mithril-signer has been upgraded to 0.2.209+67dc6e4 from distribution latest and installed at ./home/user!
```

### Client NPM package compatible with NodeJS

We have created a new version of the **npm package for the Mithril client WASM**, which is now compatible with NodeJS and bundler targets. This is feature that was requested by the community and which will be released in the next distribution `2550`.

### New Explorer Status

We have enhanced the Mithril Explorer with a new status section that provides some key metrics and insights about the Mithril network. This new section is currently available on testing networks and will be generally available with the release of the next distribution `2550`.

![](img/2024-11-mithril-explorer-status.png)
<small><center>The new staus section of the Mithril Explorer</center></small>

### Nightly and backward compatibility workflows

TODO: Update

## Hydra

TODO: Update

[Issues and pull requests closed in November](https://github.com/cardano-scaling/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-11-01..2024-11-30)

![The roadmap with features and ideas](./img/2024-10-hydra-roadmap.png)
<small><center>Snapshot of the new [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) with features and ideas</center></small>

Notable updates on our [roadmap](https://github.com/orgs/cardano-scaling/projects/7/views/1) this month include:

- Added the raw CBOR datum in transaction outputs [#1543](https://github.com/cardano-scaling/hydra/issues/1543)
- Used Aiken for commit validator [#1680](https://github.com/cardano-scaling/hydra/pull/1680)
- Updated to `cardano-api` 9.4 [#1706](https://github.com/cardano-scaling/hydra/pull/1706)
- Implemented the off-chain user journey for incremental commits [#1522](https://github.com/cardano-scaling/hydra/issues/1522) and made good progress on the on-chain validators
- Added Blockfrost mode to the hydra-chain-observer [#1631](https://github.com/cardano-scaling/hydra/pull/1631).

### Hydra maintenance

TODO: Update

### Hydra Doom

TODO: Update

### Incremental commits

TODO: Update

### Hydra + Midnight

TODO: Update

### Hydra working-group updates

TODO: Update

### Hydra roadmap update

TODO: Update

## Links

TODO: Update the recording link

The monthly review meeting for October 2024 was held on 2024-10-23 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

[slides]: https://docs.google.com/presentation/d/1erEcuVNtYsCecJEX-QVXVtxzQMl8G6EVQbs98KPjxmI
[recording]: https://drive.google.com/file/d/1ZM2Pcxw3U1OwHHLCC7b9EK3h-YqfG3zI/view

```

```
