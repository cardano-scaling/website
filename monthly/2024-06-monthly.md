---
title: June 2024
slug: 2024-06
authors: [jpraynaud]
tags: [monthly]
---

This is a monthly report on the progress of 🐲 Hydra and 🛡 Mithril projects since May 2024. This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month the meeting was held on 2024-06-24 using these [slides][slides] and [you can see the recording here][recording].

## Mithril

[Issues and pull requests closed in June](https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-05-31..2024-06-30)

TODO JP

### Transaction certification

TODO JP

### Mithril/Cardano integration

TODO JP

## Hydra

[Issues and pull requests closed in
June](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-05-31..2024-06-30)

TODO Franco

### Incremental decommit

Incremental decommit feature was just about to be released when we found a bug
while doing a demo. The bug was related to the way we were handling the
decommit snapshot in close/fanout.

Once you decide to decommit funds from the Head and everybody signs the
decommit snapshot the same snapshot was used to close/fanout. So if this
snapshot contains some utxo to decommit but you already decommitted funds from
the Head the fanout would distribute the decommit funds again. 

This was pretty nasty and allthough we have lots of tests around the decommit
feature so far we didn't have to check the user balances upon Head closure. 

We already implemented the fix for it which consists of adding 
versioned snapshots. This allows us to distinguish between the two cases: 
 - Decommit snapshot was signed but the decommit was never observed 
 - Decommit snapshot was signed and the decommit was also observed 

When we observe the decommit transaction locally we increment the version in
the local state which allows us to compare the snapshot version against the
expected local version on-chain.

We also had to keep some extra data in the `Close` redeemer just so we can
successfully check for valid snapshot signature while altering the close datum
to remove the utxo to decommit if the versions are not matching. In turn, this
makes the fanout behave nicely now since it is only concerned with the close
datum and the actual transaction outputs hashes.

Now the rest of the work consists of updating the specification with the
changes in the implementation and we should be ready to release this feature in
the following days.

### Hydra formal specification

TODO Daniel

## From the community

## Subbit.xyz

TODO Reza

## Hydrozoa

TODO Reza

## Technical working groups

TODO Reza

## Conclusion

The monthly review meeting for June 2024 was held on 2024-05-24 via Google Meet,
presenting these [slides][slides] and this [recording][recording].

TODO Reza

[slides]: https://docs.google.com/presentation/d/137n0SQ2tnWCrDfPieT3JSU8MDnJDTKuLE8ISSieRO4U/edit#slide=id.g1f87a7454a5_0_1392
[recording]: https://drive.google.com/file/d/1Y_xa9JjQ62m98m5MC27NDbsSjVjspnsA/view
TODO Update recording link / Reza
