---
title: April 2024
slug: 2024-04
authors: [ch1bo]
tags: [monthly]
---

This is a monthly report of progress on 🐲 Hydra and 🛡 Mithril projects since March 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-04-30, using these [slides][slides] and [you can see the recording here][recording].

## Logo design work

Throughout the last month we were looking into refreshing the logos for both Hydra, Mithril and also create a dedicated one for common workstream of scaling cardano. Having a logo for the latter in particular is important as we hope to unite and learn from multiple projects trying to improve scalability of Cardano.

TODO sebastian (confirm with Alex first)

- add some logo draft previews
- ask for feedback

## Mithril

[Issues and pull requests closed in
April](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-03-31..2024-04-30)

TODO ?: update usage

![](img/2024-03-mithril-participation.png)

TODO ?: mention any releases

### Signer registration PoC

TODO jp

- give a quick summary of what the poc was about using libp2p 
- short-comings / problem statement
- next step: draft a cardano problem statement out of this and ask for any feedback (speaking to the reader)

## Hydra

[Issues and pull requests closed in
April](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-03-31..2024-04-30)

TODO sebastian: update this
![The roadmap with features and ideas](./img/2024-03-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

TODO sebastian: write out notable updates and link [roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7)

### Why is incremental commits/decommits hard? 

TODO sebastian

## Cardano Builder Fest

TODO sebastian

- quick recap that many of us attended
- exciting talks and discussions around zero knowledge, infrastructure projects, open source, building bridges (literally)
- roadmap session in which we had an open discussion on what could be interesting / important for Hydra & Mithril
- great feedback received

### IBC bridge

Cardano Foundation has started to work on an implementation of the Inter Blockchain Communication protocol ([IBC](https://github.com/cosmos/ibc)) to allow builders to connect other blockchains to the Cardano network that also implement IBC like e.g. [Cosmos SDK](https://docs.cosmos.network/) or [Substrate](https://docs.substrate.io/) based blockchains. Whereas IBC has many similarities with other communication protocols like e.g. TCP and is based on the pretty straight forward delivery of data packets from one blockchain to the other by so called Relayers the general security model is based on the assumption that the consensus of both blockchains to be connected can be trusted. The latter resolves in the challenge that so called Light Clients need to be implemented that allow one network to check the validity of the consensus of the other, to verify if a specific operation like e.g. the locking of certain assets has been done as communicated via IBC. This typically implies that a blockchain network is able to generate so called state proofs that can be presented to the Light Client which then is able to perform the validation.

Unfortunately, the Cardano blockchain does not generate such state proofs as the underlying architecture and Ouroboros consensus do not rely on such a primitive. This leads to the the challenge that implementing a Light Client purely based on available data from the consensus (e.g. block data) has several shortcomings with regards to security or if traded for it liveness of the client causing significant latency in the message delivery between both networks (as the Light Client would have to wait until a sequence of blocks is presented for validation), which is not a feasible option for a real world production deployment.

However, there are other networks out there with a similar setup in that specific regard that recently claimed to have implemented IBC like e.g. [Solana](https://docs.picasso.network/technology/ibc/solana/). Their approach is based on overlay networks that take care of collecting additional signatures from network validators for state proof data (like blocks, transactions, etc.) increasing the trustworthiness of those proofs. Fortunately, there is a similar solution currently under development in the Cardano ecosystem, which is Mithril.

The Cardano Foundation Engineering team has recently concluded the first phase of the IBC implementation demonstrating the technical feasibility of connecting Cardano to a Cosmos SDK based blockchain taking the disadvantages mentioned above into account. The work has been made public in a repository that can be found here: https://github.com/cardano-foundation/cardano-ibc-incubator

In a second phase that is scheduled to run from April till roughly beginning of July the team is working on replacing the existing supposedly weak Light Client implementation of the Ouroboros consensus on the Cosmos based blockchain with a Light Client that leverages the functionalities of Mithril. As a first approach we are intending to use specifically a recently introduced method that allows to check if a specific transaction is part of the global set of transactions of the network.

### Gummiworm

TODO pi

- summary on demo shown on buidler fest and at the review meeting
- ideally explaining how it would use hydra head

## Starmap update

TODO sebastian

- Give an update on the high level (priorities) as we did some quarterly planning
- Segway / connect with open governance / buidler fest:
  - Need to open this discussion up further and gather feedback like we did get on the cardano builder fest 

## Conclusion

The monthly review meeting for April 2024 was held on 2024-04-30 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

[slides]: https://docs.google.com/presentation/d/1GwABNDvdFFF7LlgIlycyLsQub0Btd9XvwpgEYPrGQ9I/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://
