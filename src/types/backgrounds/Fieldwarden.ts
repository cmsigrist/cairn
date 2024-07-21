import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What got the better of you?",
  answers: [
    `A voracious swarm of pests that swallowed crops and animals alike. With
nothing to defend, you left. Take Gale Seed Extract (3 uses). Ingesting one
lets you sprint with a speed four times your regular rate. Afterward you
add two Fatigue.`,
    `A crop spirit, angered by a poor tithing. The fires consumed nearly
everything, and afterwards you were able to gather a pouch of Fireseeds
(d8, blast, 4 uses).`,
    `An antlered, toothy demon that nearly ended you. Take a blood-stained
bone knife (d6). On Critical Damage, its next attack becomes enhanced
from contact with blood.`,
    `The Withering, a type of stem rot from The Roots. Take a Diseased Crop
(6 uses) that decays any plant it touches.`,
    `Wolves, or so you thought. You are now a Werewolf [8 HP, 15 STR, 14 DEX,
claws (d6+d6) or bite (d8)]. Your WIL remains the same. You can turn at
will (once per day) but must make a WIL save to revert. Anyone left alive
from your attacks must make a WIL save to avoid infection.`,
    `Crop thieves. Not all of them survived, but you were outnumbered. Take a
+d4 HP and a Hilted Broadsword (d8, bulky).`,
  ],
};
const table2 = {
  question: "What tool saved your life?",
  answers: [
    {
      name: "Bloodvine Whip",
      description: `d8 damage. On Critical Damage it drains the target’s
blood, granting the weapon’s next attack the blast quality.`,
    },

    {
      name: "Clatter Keeper",
      description: `A hand-cranked device that emits a loud noise, frightening
away most creatures.`,
    },

    {
      name: "Sun Stick",
      description: `Provides ample warmth and light for up to one hour (1
use). Recharge: Leave in heavy sunlight for a full day.`,
    },

    {
      name: "Root Tether",
      description: `When thrown, binds up to a wolf-sized creature to the soil
for a short time.`,
    },
    {
      name: "Greenwhistle",
      description: `A small flute that calms plants, making passage through
areas heavy with plant life a bit easier.`,
    },

    {
      name: "Everbloom Band",
      description: `A circlet adorned with flowers that never wilt. On taking
Critical Damage the flowers dissolve into dust, but you
act as if your save succeeded (STR loss still occurs).`,
    },
  ],
};

export const FieldwardenBackground: BackgroundOptions = {
  name: BackgroundEnum.Fieldwarden,
  description: `Protectors of the harvest, defense against pests, thieves, and beasts. A position of
great honor, while it lasts: many guardians do not live out their natural lives.
Roll a second time on the Bonds table.`,
  playerNames: [
    "Seed",
    "Thresh",
    "Dibber",
    "Sow",
    "Stalk",
    "Harrow",
    "Cobb",
    "Flax",
    "Briar",
    "Rye",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Brigandine (1 Armor, bulky)",
    "Sling (d6)",
    "Hand Axe (d6)",
    "Repellent (Pick the type, 3 uses)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "fieldwarden.png",
};
