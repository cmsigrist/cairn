import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What is your trade?",
  answers: [
    `You build small contraptions for local guilds (and don’t ask too many
questions). Take an extra 40gp and a wanted poster with your face on it.
Given time and materials, you can open almost any door or vault.`,
    `You deal in home goods and tools, hawking your wares to townspeople
across the lands. Take 20gp of items from the gear table. You are fluent in
the Traveller’s Cant.`,
    `You were a military smelter, before peace destroyed your livelihood. Take
a Smelting Hammer (d10, bulky) and a Tin Helm (+1 Armor). Given time
and adequate materials, you can repair armor.`,
    `You sell rare and quality items to monasteries and nobles alike. Take a
Spyglass, a Necklace (petty) worth 20gp, and a Scroll of Mirrorwalk (petty).
Mirrorwalk: A mirror becomes a gateway to another mirror that you looked
into today.`,
    `You offer protection as a service, quietly watching for threats as money
exchanges hands. You start with +d4 HP, and carry a Long Sword (d10,
bulky) and a Brigandine (1 Armor, bulky).`,
    `You scavenge raw tin and iron from battlefields, pulling teeth from still-
twitching corpses. Start with a young Donkey (+4 slots, slow), a Crossbow
(d8 damage, bulky), and a Saw (d6).`,
  ],
};
const table2 = {
  question: "What never fails to get you out of trouble?",
  answers: [
    {
      name: "Fire Eggs",
      description: `Six small pellets made of sea salt, wood, and crockery-
dust. They explode at low heat (d8, blast) but dissipate
quickly.`,
    },

    {
      name: "Black Tar",
      description: `Versatile: both sticky and highly flammable (3 uses).`,
    },

    {
      name: "Spiked Boots",
      description: `Cracks heads (d8) as easily as it does ice and muck. Travel
is also a bit slower, but easier.`,
    },

    {
      name: "Tinker’s Paste",
      description: `Seals shut any fist-sized opening (3 uses).`,
    },
    {
      name: "Fireworks",
      description: `A dazzling, albeit dangerous display. Enough explosive
material to blow off a finger or three (2 uses remain).`,
    },

    {
      name: "Carrion Cat",
      description: `A clever pet, small enough to hide in your pack (bulky)
strong enough to scare off smaller predators. Requires
one Ration a day, and it must be meat.`,
    },
  ],
};

export const KettlewrightBackground: BackgroundOptions = {
  name: BackgroundEnum.Kettlewright,
  description: `You are known by the smell of molten metal and the jingle of tin. You are not a
mere merchant, but an artisan of fire and metal.`,
  playerNames: [
    "Fergus",
    "Eon",
    "Bram",
    "Idris",
    "Hester",
    "Darragh",
    "Seren",
    "Rónán",
    "Berek",
    "Lorenz",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Pincers",
    "Roll of Tin",
    "Gloves (petty)",
    "Hammer (d6)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/kettlewright.png",
};
