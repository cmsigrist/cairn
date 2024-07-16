import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What experiment went horribly wrong?",
  answers: [
    `There was an explosion, and you lost your sense of smell. Well, almost:
you can sniff out gold as a pig does truffles. Take a Tin of Snuff (6 uses) to
dampen the impact. Use it every day or become deprived.`,
    `You dematerialized a beloved pet. Now it follows you around, invisible
but always present. Although it cannot interact with the physical realm,
you are able to share its senses (add a Fatigue each time). It follows basic
commands.`,
    `You were exposed to a long-acting truth serum whose effects have yet to
wear off. The disorder has its advantages: you cannot repeat lies you’ve
heard, either.`,
    `You were adept at creating fake gold, which is almost as good. Eventually,
your ruse was discovered and you had to make a hasty retreat. Take a
heavy Metal Ingot and Gold Powder (3 uses).`,
    `Your recipe worked, but a rival stole the blueprint before your claims
could be proven. Take a prototype Blunderbuss (d12, blast, bulky) that
takes one round to reload, and a taste for revenge.`,
    `Ridiculed for discovering how to turn gold into lead, you were a laughing
stock. Take a bottle of Universal Solvent (2 uses) that dissolves anything it
touches into its constituent parts.`,
  ],
};
const table2 = {
  question: "What alchemical marvel is the product of your latest ingenuity?",
  answers: [
    {
      name: "Pyrophoric Gel",
      description: `A sticky green fluid that catches fire when exposed to air,
then burns for 8 hours. Cannot be extinguished (1 use).`,
    },

    {
      name: "Blast Sphere",
      description: `A head-sized iron ball filled with explosive powder that
explodes on impact (d12, blast, bulky, 1 use).`,
    },

    {
      name: "Aqua Vita",
      description: `Purifies any liquid, converting it to pure water. Drinking it 
cures 1d6 STR (1 use).`,
    },

    {
      name: "Mimic Stone",
      description: `Records a short phrase that can later be played back.`,
    },
    {
      name: "Spark Dust",
      description: `Ignites easily and quickly. Useful for starting a fire or as an
incendiary device (3 uses).`,
    },

    {
      name: "Homunculus",
      description: `A miniature clay replica of yourself that follows your every
command. It hates being enthralled to you and complains bitterly whenever possible. Any damage done to the
homunculus is also done to you. 3 HP, 4 STR, 13 DEX, 5 WIL`,
    },
  ],
};

export const AurifexBackground: BackgroundOptions = {
  name: BackgroundEnum.Aurifex,
  description: `You are an artisan of the arcane, a smith of subtle forces. In the crucible of your
workshop, the laws that govern this world are warped to suit your needs.`,
  playerNames: [
    "Hestia",
    "Basil",
    "Rune",
    "Prism",
    "Ember",
    "Quintess",
    "Aludel",
    "Mordant",
    "Salaman",
    "Jazia",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Lantern",
    "Oil Can (6 uses)",
    "Needle-Knife (d6)",
    "Protective Gloves (petty)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/aurifex.png",
};
