---
title: May 2024
slug: 2024-05
authors: [ch1bo]
tags: [monthly]
---

This is a monthly report of progress on 🐲 Hydra and 🛡 Mithril projects since April 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-05-28, using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in
May](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)

TODO
  - in/out SPOs dashboard
  - participation dashboard
  - general protocol status

TODO similar summary using new dashboard?
> As a part of our strategy to increase the participation in the Mithril protocol we have been reaching out to SPO's who don't yet run a Mithril signer, providing them with the support they need to set up and run their signer. We appreciate the SPO's such as Cardano Foundation who took the step in joining the protocol. As of epoch 481, the number of stake pools registered in the Mithril protocol as signers has reached 258. This represents approximately 5 billion ADA, which is approximately 22% of Cardano's active stake.

![](img/2024-04-mithril-participation.png)

TODO
  - any releases?
  - notable updates?

### Transaction signing on testing-mainnet

TODO

## Hydra

[Issues and pull requests closed in
May](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-04-30..2024-05-30)


TODO
  - release `0.17.0` summary
  - roadmap update

![The roadmap with features and ideas](./img/2024-05-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

### Horizon haskell

TODO dan
 - introduce as an on-going workflow improvement
 - why is this important for our users? for us?
 - how is this different than the status quo?

### Transaction trace testing

TODO sasha
 - introduce using incremental decommits scope
 - how to ensure certain properties about the on-chain code
 - find a link to mutation testing (past and still important technique)
 - give example for one property that can be better ensured using tx trace testing 
 - short paragraph about how it is done (stateful property based testing where performing actions = constructing, validating and observing transactions)

### Hydra-related catalyst proposals

TODO sebastian
- introduce: 30+ catalyst proposals in fund12 mention "hydra"; some of them directly inspired by Hydra and solve similar challenges, some quite different but also aiming to improve scalability of transaction processing (as side-chains); some are focusing on payments only and refreshingly simple
- highlight a few (especially the ones we interacted with)

## Technical working groups

TODO sebastian + jp?
 - age of voltaire gives rise to community alliances and member based organisations
 - governance of core cardano projects needs to open up
 - current strategy: form technical working groups to discuss project roadmaps and high-level backlog (link to last month) - both Mithril and Hydra!
 
 - Specifically for the hydra working group:
    - drafted a charter and first agenda items (links)
    - next: outreach, find interested members, start somewhere

## Conclusion

The monthly review meeting for May 2024 was held on 2024-05-28 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

- short month, great to see demos and progress on both projects still
- business as usual, but exciting times with fund12 coming in strong
- making Hydra and Mithril less IOG-driven, but more community owned projects through working groups and Intersect; maybe the right way, maybe not (and catalyst proposals is the way?); we fill find out

[slides]: https://docs.google.com/presentation/d/1ByOgQt6gEjOY9Wd-xOMzeSy4lfQmMn39KEtSB-VisVw/edit#slide=id.g21194f9c145_0_5
[recording]: https://drive.google.com/file/d/1Y_xa9JjQ62m98m5MC27NDbsSjVjspnsA/view
