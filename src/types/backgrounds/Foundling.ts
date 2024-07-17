import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "Who took you in?",
  answers: [
    `An old hunter. You were both quite happy, until it all ended. Take a
Weathered Longbow (d8, bulky) and a Leather Jerkin (1 Armor).`,
    `A wizened apothecary, who taught you the healing arts but maintained a
clinical detachment. Take a Healing Unguent (restores d4 STR, 1 use).`,
    `A druid, who taught you the language of trees. When it came time to leave
you took with you only a Gnarled Staff (d8) and the promise that one day
you would return.`,
    `A gruff blacksmith from a sleepy river town. You were always kept at arm’s
length. Now the forge is cold, and you’ve moved on. Take a Smith’s Apron
(petty) and a set of oft-mended Chain Mail (2 Armor, bulky).`,
    `A troupe of traveling entertainers. For a time, they were like family to you.
One day you woke up and they were gone with no explanation. Take a
Storybook, a Dagger (d6), and some burning questions.`,
    `The monks of a secluded forest monastery. When their rules became too
strict, you snuck away. Take a Monk’s Habit (warm, petty) and a Spellbook
of Control Plants.
Control Plants: Nearby plants and trees obey you and gain the ability to
move at a slow pace. Leaves grow along the spine, and it smells faintly of
decay. Leaves grow along the spine, and it smells faintly of decay.`,
  ],
};
const table2 = {
  question: "What keeps away bad tidings?",
  answers: [
    {
      name: "Pipeweed",
      description: `Your good luck charm. Conversations tend to flow more
easily after a smoke (6 uses).`,
    },

    {
      name: "Stink Jar",
      description: `Shattering this jar releases an odor so foul all nearby must
make a STR save or immediately vomit (1 use).`,
    },

    {
      name: "Ivy Worm",
      description: `A green worm often mistaken for a weed. Swallowed
whole, it absorbs any toxins or rot in the body before
exiting through the usual way.`,
    },

    {
      name: "Dream Stone",
      description: `A smooth blue stone that helps recall dreams more clearly.
Overuse can cause dream-addiction.`,
    },
    {
      name: "Drowning Rod",
      description: `A finger-sized wooden stick that doubles in size each time
it is fully submerged in water. It doesn’t shrink back down.`,
    },

    {
      name: "Rabbit’s Foot",
      description: `You were wearing it when they found you. They say it is
the foot of she who left you, and that it protects you from
witch magic (petty).`,
    },
  ],
};

export const FoundlingBackground: BackgroundOptions = {
  name: BackgroundEnum.Foundling,
  description: `An odd birthmark, a strange smell: somehow, the touch of elsewhere still lingers.
You’ll never fit in, at least not where you’re at. Roll on the Omens table, but keep
the results private for now.`,
  playerNames: [
    "Faunus",
    "Snowdrop",
    "Wisp",
    "Silverdew",
    "Brim",
    "Solstice",
    "Steeleye",
    "Artea",
    "Gossamer",
    "Hazel",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Salt Pouch",
    "Heirloom Amulet (petty, glows in the presence of magic)",
    "Sling (d6)",
    "Dagger (d6)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/foundling.png",
};
