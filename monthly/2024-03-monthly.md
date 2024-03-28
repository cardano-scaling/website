---
title: March 2024
slug: 2024-03
authors: [ch1bo]
tags: [monthly]
---

This is a monthly report of progress on 🐲 Hydra and 🛡 Mithril projects since
February 2024. These reports recently moved to
https://cardano-scaling.org/monthly (more details [here](./2024-02)).

This document serves as preparation and written summary of the monthly
stakeholder review meeting, which is announced on our discord channels and held
on Gooble Meet. This month the meeting was on 2024-03-27, using these
[slides][slides] and [this is the recording][recording].

## Mithril

[Issues and pull requests closed in
March](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31)

TODO reza on overall protocol status?

- include screenshot of signing stake and pools
- brief explanation and any notable change

TODO jp mention any releases?

### Transaction validation in frontend

TODO? denis?

- write about this?
- it's available on sanchonet
- could inspire wallet and DApp creators to "enhance security" / experiment with
  it

### Prometheus metrics

TODO jp?

- 1-2 sentences and maybe the same screenshot as in the slides?

### Pallas updates

TODO? jp?

- are there any updates regarding the TxPipe integration

## Hydra

[Issues and pull requests closed in
March](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31)

Hydra project
[roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7) did not
change much this month:

![The roadmap with features and ideas](./img/2024-03-hydra-roadmap.jpg)
<small><center>The latest roadmap with features and ideas</center></small>

#### Notable updates

TODO sebastian

### Conway support 

TODO daniel or sebastian

- mention modulo-p in text
- available on branch + modulo-p repository
- plan when to merge it
- explorer fixes / details about tx formats?

### Streaming plugins

TODO sebastian

- mention sundaelabs in text
- Plugin architecture for exfiltrating and infiltrating events
- Enables hygienic forks of Hydra which add different connections to the world
  (examples)
- Clear interface for new mainline persistence
- Maybe even refactor the existing API server as an EventSink

## Community

### Mithril office hours

TODO roy/reza/jp? .. or sebastian

- explain evolving alignment between TxPipe, PaloIT and IOG into a public office
  hour
- provide links to where and when

### Hydra governance walkthrough

TODO sebastian

- briefly mention that people asked how we use Github to run / govern the
  project
- embed video
- current snapshot view and excited to evolve this continuously into a more open
  process

### Hydra/Intersect working group

TODO sebastian

- basically what has been said in the meeting
- scope: where to start, what to include
- less brands, more variants
- explain potential of this
- condition on ratification of Intersect processes

## Conclusion

We held the monthly review meeting for March 2024 on 2024-03-27 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO sebastian

- mention that we had 2/4 guest demos
- transaction verification feedback
- explorer demo + mention integrating hydra explorer data into block explorers
- summarize trends of decentralizing governance on both projects
- maybe under a scaling umbrella, maybe not

[slides]: https://docs.google.com/presentation/d/1pxV7VTDHW-wtvJy1RDuei7H14gQvgrrUlqoiOco6j9E
[recording]: https://drive.google.com/file/d/1SL5Js8wBIoBeb87exCmZTWtHSQy7xF1W/view
