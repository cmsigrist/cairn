import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What was your last big job?",
  answers: [
    `A noble’s summer home. The place was full of fancy wine (+20gp) but not
much else. Take Fence Cutters.`,
    `A bank (you were caught). You bear a brand only visible by firelight, and
anyone that sees the mark can ask you for a beer. Take Retractable Wires.`,
    `A guild warehouse. Take a Ladder (bulky, 10ft) and Blinding Powder (1
use).`,
    `Moneylender. Someone beat you to the job, but left behind a Scroll of
Arcane Eye (petty).
Arcane Eye: You can see through a magical floating eyeball that flies around
at your command.`,
    `Constable’s quarters. You escaped, but left some friends behind. Take
Strong Silk Rope and a queasy feeling.`,
    `A university. You were seen, but not pursued. You still don’t know why.
Take Smoke Pellets (3 uses).`,
  ],
};
const table2 = {
  question: "What helps you steal?",
  answers: [
    {
      name: "Catring",
      description: `2 charges. Climb up walls and fall safely. Recharge: Place
the ring on a stray cat’s tail.`,
    },

    {
      name: "Gildfinger",
      description: `1 charge. A finger glove that mimics any mundane key.
Recharge: Bundle it with at least 100gp for a night.`,
    },

    {
      name: "Glimpse Glass",
      description: `3 charges. A monocle that lets you see through walls or
other obstructions. It shatters after the last use.`,
    },

    {
      name: "Sweetwhistle",
      description: `1 charge. Listeners hear a soft, familiar voice in the
distance that they cannot resist following. Recharge: Lose
a dear memory (describe it).`,
    },
    {
      name: "Vagrant’s Veil",
      description: `1 charge. Wear it to blend seamlessly into crowds,
appearing as a simple pauper. Recharge: Donate all the
day’s winnings to the poor (Petty).`,
    },

    {
      name: "Reverse Teetotum",
      description: `1 use. When spun, time skips backwards 30 seconds.
Everyone remembers what happened.`,
    },
  ],
};

export const CutpurseBackground: BackgroundOptions = {
  name: BackgroundEnum.Cutpurse,
  description: `You live in the grey space between those who have power and
those who don’t. You find opportunity where others see
only chaos. With nimble fingers, you unburden both the
richest merchant and the lowliest guard.`,
  playerNames: [
    "Arlo",
    "Lyra",
    "Eamon",
    "Salina",
    "Elara",
    "Freya",
    "Bull",
    "Sparrow",
    "Ivy",
    "Silas",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Twin Daggers (d6+d6, bulky)",
    "Padded Leather (1 Armor)",
    "Lockpicks",
    "Black Outfit (petty)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "cutpurse.png",
};
