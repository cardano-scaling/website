---
title: April 2024
slug: 2024-04
authors: [ch1bo, quantumplation, cleanerm5]
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

As a part of our strategy to increase the participation in the Mithril protocol we have been reaching out to SPO's who don't yet run a Mithril signer, providing them with the support they need to set up and run their signer. We appreciate the SPO's such as Cardano Foundation who took the step in joining the protocol. As of epoch 481, the number of stake pools registered in the Mithril protocol as signers has reached 258 representing ~50 billion ADA which is ~22% of the Cardano's active stake.

![](img/2024-04-mithril-participation.png)

TODO jp: mention any releases and point to important release notes

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

Gummiworm is a low-divergence fork of the Hydra node being built by Sundae Labs, which teases apart execution and custody; By sacrificing some control over the opening and closing of heads, it dramatically strengthens the security model specifically in the case when non-head participants are transacting in the head.

At Buidler-fest, we demo'd a very early, duct-tape and bubble-gum demo of depositing into a smart contract, minting those funds in the hydra head, and achieving auditability of the transactions in the head.

We also spoke about our longer term plans, such as changes to the ledger to accomodate a better user experience, and making the custody model "plug and play", so you could provide different mechanisms for different use cases.

![image](https://github.com/SundaeSwap-finance/cardano-scaling-website/assets/49870/0b2907e4-43f1-4e6d-8f54-f18eeb648b8b)

## Starmap update

TODO sebastian

- Give an update on the high level (priorities) as we did some quarterly planning
- Segway / connect with open governance / buidler fest:
  - Need to open this discussion up further and gather feedback like we did get on the cardano builder fest 

## Conclusion

The monthly review meeting for April 2024 was held on 2024-04-30 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

- some demos, but cardano buidler fest was the real highlight this month
- great talks, connections and bridges being built (literally)
- as can be seen already from the sections contributed above by Pi (SundaeLabs) and Sebastian (CF)

- in the meeting we used the chance to also highlight longer term plans (next couple of months)
- and to show first steps into creating a Hydra / Cardano Scaling working group
- Sneak peek of new paper on fresh scalability tech (Ouroboros Leios)
- conversation on games and great ways to show off Hydra V1 at rare evo - "Can it run doom?" 

[slides]: https://docs.google.com/presentation/d/1GwABNDvdFFF7LlgIlycyLsQub0Btd9XvwpgEYPrGQ9I/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://
