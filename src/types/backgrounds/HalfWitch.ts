import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What did you bring back from the unseelie court?",
  answers: [
    `A Black Rose Fiddle (bulky). Its music causes intense sadness and
immobility in nearby mortals (others are merely fascinated). You don’t
know how to play.`,
    `Paper Legs. You are extremely light, and can fall a few stories without
getting hurt. Try to avoid tearing them or getting them wet.`,
    `A Living Nightmare that dwells within you, but manifests whenever you
are in danger. It has your same Attributes and HP, and attacks with claws
(d8+d8). It disappears on Critical Damage (take 1d4 WIL damage), re-
appearing again on the next full moon.`,
    `A Raven Familiar [8 HP, 3 STR, 11 DEX, 13 WIL, beak (d6)]. It speaks as an
intelligent being and is entirely devoted to you.`,
    `A Briar Thorn. It can pierce any organic material (quite painfully) but
when removed leaves no trace of the intrusion.`,
    `A Fae creature’s True Name. Use it to summon its owner for an act of
great service, but only once. It could also fetch a hefty price, to the right
buyer.`,
  ],
};
const table2 = {
  question:
    "What concoction do you carry, and what rare ingredients did you gather to make it?",
  answers: [
    {
      name: "Rebirth Ash",
      description: `Remnants of a bark spirit. Sprinkle to reignite a fire that
has died, or return to life a creature that has died only
moments before (3 uses).`,
    },

    {
      name: "Glamour Feather",
      description: `Plume of a firebird. Can make any creature appear
convincingly as someone (or something) else (1 use).`,
    },

    {
      name: "Hawthorn Seed",
      description: `An acorn from the other side, gathered on the spring
equinox. When planted it sprouts a luxurious shelter,
collapsing at moonrise the next day (1 use).`,
    },

    {
      name: "Stonetree Sap",
      description: `Sap obtained in exchange for blood. Hardens when rubbed
on any surface (+1 Armor, 3 uses).`,
    },
    {
      name: "Nightdust Powder",
      description: `Made from the ritual burning of six owls. When tossed in
the air, day turns to night for a short while (2 uses).`,
    },

    {
      name: "Hex Stone",
      description: `Gathered from a river that flows from the other side.
Removed from its iron tin, it can absorb the effects of
an active magical effect. If destroyed, the magic is
released (1 use).`,
    },
  ],
};

export const HalfWitchBackground: BackgroundOptions = {
  name: BackgroundEnum.Half_Witch,
  description: `Born of both the mortal world and the unseen, a crossing of veils that makes you
an enigma to many. You are both a conduit and a caution of what happens when
two worlds collide.`,
  playerNames: [
    "Solena",
    "Veles",
    "Bryn",
    "Sabine",
    "Razvan",
    "Rowena",
    "Galen",
    "Nyx",
    "Vex",
    "Iwan",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    `Spellbook (Thicket: A thicket of trees and dense
brush up to 50ft wide suddenly sprouts up.
Wrapped in vines that must be destroyed again
with each use.)`,
    "Iron Dagger (d6)",
    "Herbs Pouch (restore 1 STR, 3 uses)",
    "Ghillie Suit",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/half_witch.png",
};
