---
title: June 2023
slug: 2023-06
authors: [v0d1ch, ch1bo]
tags: [monthly]
---

This report summarizes the work on Hydra since May 2023. It serves as
preparation for the monthly review meeting (see [slides][slides] and
[recording][recording]), where the team updates project stakeholders on recent
developments to gather their feedback on proposed plans.

## Roadmap

While there was no release this month, the team implemented several notable
features, which will be released soon as version 0.11.0:

![The roadmap without idea items](./img/2023-06-roadmap-ex-ideas.png) <small><center>The roadmap without idea items</center></small>

#### Notable roadmap updates

- Realized [allowing commit txs with multiple UTxO
  #774](https://github.com/input-output-hk/hydra/pull/774) as a dedicated roadmap
  item separate from the related [commit from external wallet
  #215](https://github.com/input-output-hk/hydra/issues/215) (which grew too
  big).

- Revisited [off-chain performance by doing benchmarks
  #186](https://github.com/input-output-hk/hydra/issues/186). Identified a
  bottleneck, groomed and planned a follow-up performance improvement feature
  for [Event sourced persistence"
  #913](https://github.com/input-output-hk/hydra/issues/913)

- Plan to release 0.11.0 without [Authenticate network messages
  #727](https://github.com/input-output-hk/hydra/issues/727) to deliver enabling
  features earlier.

- API improvements and exploring batched transactions on L2 showed that [ReqSN
  only sends transaction IDs
  #728](https://github.com/input-output-hk/hydra/issues/728) is in demand,
  front-loads further API changes and is estimated to be a low-hanging fruit.

- Reprioritized items in `<= 1.0.0` column, to do items with on-chain protocol
  impact earlier and not much feedback has been received on snapshotting items. In
  fact, if [Support larger # of UTXO via split-fanout
  #190](https://github.com/input-output-hk/hydra/issues/190) is done slightly
  differently, that should avoid some of the problems of impossible to finalize
  snapshots.

![The latest roadmap with features and ideas](./img/2023-06-roadmap.png) <small><center>The latest roadmap with featuresand ideas</center></small>

## Development

[Issues and pull requests closed since last
report](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-05-24..2023-06-22)

This month, the team worked on the following:

#### Commits with multiple UTXO [#774](https://github.com/input-output-hk/hydra/pull/774)

One of the early adopting projects is exploring how to move scripts from layer 1
to layer 2. For that purpose, it was necessary to not only commit the actual
script UTXO, but also a "regular" UTXO holding only ada to be used as collateral
(the `cardano-ledger` always requires collateral although it would not be
necessary on a layer 2).

To enable this, the specification and on-chain protocol needed updating. Before
a protocol participant could commit zero or one UTXO, which changed now to a
list of UTXO. As the specification is now [part of the
repository](/monthly/2023-04#versioned-docs-and-specification), it could be kept
consistent within the same pull request.

Despite being a **breaking change**, leading to new Hydra script hashes to be
published and used starting with version 0.11.0, this change was surprisingly
easy to do and demonstrated the amenability of the Head protocol and the system
architecture.

#### Commits from external wallet [#215](https://github.com/input-output-hk/hydra/issues/215)

The team started to mark _fuel_ some time ago as it was an easy workaround to
distinguish UTXOs that can be committed into a head apart from regular outputs
holding ada to pay for fees - the so-called _fuel_. However, this required users
to "send funds" they want to commit first to the `hydra-node`s internal wallet
and involved additional steps in tagging such outputs with a special datum hash

To commit from external wallets, a new API endpoint was introduced for the
purpose of _drafting_ a commit transaction. The clients would request such draft
transaction by sending a POST request to `/commit` and the `hydra-node` would
respond with a transaction already authorized by the internal wallet. If the
commit involved user funds (empty commits are still possible), then the client
application would need to sign the transaction using the corresponding signing
key. Also, submitting this transaction has shifted from `hydra-node` to the
client.

This removes direct custody of `hydra-node` over user funds since clients can
now use whatever key they own, not known to the `hydra-node`, to do a commit
step and no single `hydra-node` has access to user funds used in the Head
protocol.

Within this work package, _marking fuel_ became deprecated and all UTXOs owned
by the internal wallet are considered fuel. Fuel marking will be completely
removed in the future. Furthermore, a good old HTTP-based API is now used
for the new query (so far it was only WebSocket-based), which prompts a
potential shift to using OpenAPI as API specification since AsyncAPI does not
describe synchronous requests well.

#### Benchmark performance of Hydra Head [#186](https://github.com/input-output-hk/hydra/issues/215)

Low confirmation time is a key feature of Hydra Head protocol and is
needed for some use cases. The existing end-to-end 
benchmarks have been revived and tailored for a _baseline scenario_, one with a
single hydra-node and a single client. While this scenario is not
representative of target deployments, it's interesting as it gives us
an upper bound on the performance of a Hydra Head network.

The results have been somewhat disappointing, and further investigations lead to a few insights:

- There was a misconfiguration in the RTS of the hydra-node executable
  which was therefore not taking advantage of parallelism
- We identified the main bottleneck to be persistence of the node's
  state, which is currently done by overwriting a single file with the
  JSON content of the _full_ state on _state change_ which is pretty
  inefficient. As a consequence, the team will work on improving the
  persistence strategy as described in [this
  ADR](https://github.com/input-output-hk/hydra/pull/940)
- More benchmarks:
  - The aforementioned [End-to-end benchmarks](https://hydra.family/head-protocol/benchmarks/end-to-end-benchmarks),
  - [Ledger Micro-benchmarks](https://hydra.family/head-protocol/benchmarks/ledger) as a comparison basis.

#### Operating hydra nodes

As a "dogfooding" exercise, the Hydra team is operating a Hydra Head
on mainnet on top of which is running our `hydraw` application. 
The Head protocol got stuck a couple of times and
post-mortem investigations lead to a few improvements in how to
operate a hydra-node and network:

- Better reporting on the version of executable `hydra-node` and
  `hydra-tui` which now report the Git SHA1 at which they were built
- Reduction in the volume of logs emitted by hydra-node by removing
  some chatty network-related logs and using ids to link `Begin/End`
  pairs
- Rework the
  [log-filter](https://github.com/input-output-hk/hydra/blob/35f2964ba6d4a780a5f8e669f1afce565a492cec/hydra-cluster/exe/log-filter/Main.hs#L34)
  tool to provide timings for various events and effects keyed by
  transactions

## Community

#### Hydra hackathon / workshop

The Hydra team is considering holding a workshop at/around Rare Evo at the end
of August and is in contact with the event teams at IOG and the Rare Evo
organizers. The concrete format, scope and agenda is still a bit unclear as we
are contemplating whether to do a workshop/tutorial style or rather a
introduction + challenge setting event. If it does not work out for Rare Evo, we
will find another event or do it ourselves.

If you are reading this and would be interested in joining such an event please
drop us a line on [discord](https://discord.gg/Qq5vNTg9PT) or DM
[@ch1bo](https://twitter.com/ch1bo_)! Ideally along with some thoughts on
preferred format or what you would be interested in.

#### Hydra for Auctions contributions and closing of project

One of the Hydra lighthouse projects is slowly coming to an end. The
collaboration project between IOG and MLabs on using Hydra for auctions is
currently finalizing documentation and creating demonstration running the whole
thing on a public testnet. Although the demo video was not available at the copy
deadline of this report, watch this space for more about this next
month.

The project yielded multiple github issues containing ideas and sparked great
discussions on improving Hydra like [reported last
month](/monthly/2023-05#hydrozoa-850). It is
also the first project which demonstrates how to move smart contracts from the
layer 1 (L1) to the layer 2 (L2)! Overall it is a great example of establishing
crucial state on L1 and achieving scalability through Hydra as L2.

The code is fully open source and available on Github
[hydra-auction](https://github.com/mlabs-haskell/hydra-auction/).

## Conclusion

The monthly review meeting for May was held on 2023-06-21 via Google Meet with
these [slides][slides] and here is the [recording][recording].

It was a fairly straight-forward month and consequently unexciting review meeting
this month. Unfortunately, we could not release 0.11.0 yet, but we wanted to get
the quite significant change of supporting commits from external wallets done
first. This feature in particular was more involved than expected, but as the
demonstration in the meeting showed, we are in the final stages of getting this
over the line.

Besides some nice findings to potential performance improvements for layer 2
transaction processing, there was not much to announce this time around. Behind
the scenes, however, there have been great progress on the Hydra for Payments
project and the next updates are going to be more interesting again.

Despite holiday season approaching, we will march on, steadily adding features
and enabling more and more use cases to scale through Hydra.

[slides]: https://docs.google.com/presentation/d/1TVzjaFKXBi9DAugSd2L8MSUSZGIU9EjTmwf6yccckPI
[recording]: https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view
