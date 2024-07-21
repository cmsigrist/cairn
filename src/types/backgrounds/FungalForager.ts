import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What strange fungi did you discover?",
  answers: [
    `Shrieking Trumpet. When exposed to light it screams so loudly that all
nearby attacks (including your own) are impaired (2 uses).`,
    `Torch Fungus. When crushed it creates a cold blue light for a short while.
(2 uses).`,
    `Murderous Truffle. Pungent, highly toxic, and very rare (worth 50gp to
assassins). Illegal pretty much everywhere (1 use).`,
    `Hellcap. Exposure to its aroma causes intense nausea, even vomiting.
Either way, it clears the room. Bottled (1 use).`,
    `Sproutcup. Ingest to shrink down to the size of a mouse (your belongings
stay the same size). You return to normal size within the hour, often in fits
and starts (1 use).`,
    `Rootflower. A white fungus found only on corpses deep underground.
Ingest to restore d6 WIL. You will dream of the dead, and their stories
(1 use).`,
  ],
};
const table2 = {
  question: "What keeps you sane, even in utter darkness?",
  answers: [
    {
      name: "Glowsnail",
      description: `Casts a soft, bioluminescent light. Feeds on one ration
every two days.`,
    },

    {
      name: "Silk Moth Shawl",
      description: `A weatherproof blanket, it can also douse a fire without
being damaged.`,
    },

    {
      name: "Milkflower",
      description: `A gentle stimulant. Chewing makes you immune to panic
for the next hour (3 uses).`,
    },

    {
      name: "Luxcompass",
      description: `Hums softly as it moves closer to the Sun. Eventually, the
noise becomes unbearably loud.`,
    },
    {
      name: "Sloth-Tarp",
      description: `A tough and weatherproof fabric, useful for hanging off
trees. When inside, take +1 Armor.`,
    },

    {
      name: "Miner’s Grease",
      description: `Great for dislodging a gem, tool, or limb from a tight
crack. Highly explosive (3 uses).`,
    },
  ],
};

export const FungalForagerBackground: BackgroundOptions = {
  name: BackgroundEnum.Fungal_Forager,
  description: `You follow the whisperings of the deep earth, the rhythmic pulse of the mycelium
forest that grows beneath the surface. The dark holds no terror for you. Also, you
really love mushrooms.`,
  playerNames: [
    "Unther",
    "Woozy",
    "Hilda",
    "Current",
    "Leif",
    "Ratan",
    "Mourella",
    "Lal",
    "Per",
    "Madrigal",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Sharpened Trowel (d6)",
    "Candle Helmet (+1 Armor, dim, 6 uses)",
    "Rope (25ft)",
    "Metal Pail",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "fungal_forager.png",
};
