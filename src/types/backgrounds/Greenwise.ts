import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "How has The Wood failed you?",
  answers: [
    `An ill-tempered forest spirit cursed you for stealing, marking you as an
enemy of their kind. Take a Bezoar Stone. Ingesting it cures any poison
(1 use, unless retrieved).`,
    `A close friend, swallowed whole. Now you see their face in any tea you
brew. Take a Soporific Concoction (3 uses).`,
    `You were poisoned, losing your sense of taste and smell. You can now
withstand noxious fumes, and always carry Antitoxin (2 uses).`,
    `Your radical experiments turned your skin green, and you now gain
nourishment as a plant. You don’t need rations, but a day without
sufficient sunlight and water leaves you deprived.`,
    `Your impressive corpseflower won a local contest then promptly killed a
judge. You fled, but not without the Prize Money (100gp) and a warrant
for your arrest.`,
    `You created a restorative tincture that also caused accidental infertility.
Take a Healing Potion that completely restores STR. Only you know of its
unintended side-effects.`,
  ],
};
const table2 = {
  question: "What keeps you safe while in The Wood?",
  answers: [
    {
      name: "Amadou",
      description: `A vermillion fungus that catches fire quite easily (3 uses).`,
    },

    {
      name: "Delphinium",
      description: `Breathe water for up to one hour (1 use, but can be divided
into fractional doses).`,
    },

    {
      name: "Tacky Stalk",
      description: `A woody reed that hardens into a permanent adhesive
when chewed (2 uses).`,
    },

    {
      name: "Wisp Lantern",
      description: `Caged in wrought iron, provides a dim light so long as the
wisp is able to feed on nearby pain and fear.`,
    },
    {
      name: "Seed Bomb",
      description: `A canvas sack filled with seeds that explodes on impact.
d6 damage (blast, 3 uses).`,
    },

    {
      name: "Briarvine",
      description: `Entangles any creature up to horse size (STR to break
free, reusable).`,
    },
  ],
};

export const GreenwiseBackground: BackgroundOptions = {
  name: BackgroundEnum.Greenwise,
  description: `You delve deep into The Wood, prying its secrets from between rough boughs
and whispering leaves. In this verdant kingdom, you are no mere scholar, but its
confidant as well.`,
  playerNames: [
    "Gunther",
    "Moss",
    "Fern",
    "Lichen",
    "Root",
    "Willow",
    "Sage",
    "Yarrow",
    "Rowan",
    "Ash",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Iron Pot",
    "Root Knife (d6)",
    "Healing Salve (restores 1d4 STR, 1 use)",
    `Twine Bauble (petty, Ward
once per day)
Ward: A silver circle 50ft
across appears on the ground.
How has The Wood failed you?
Choose one species that cannot
cross it.`,
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/greenwise.png",
};
