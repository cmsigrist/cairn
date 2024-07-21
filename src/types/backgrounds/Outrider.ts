import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What personal code or principle do you uphold?",
  answers: [
    `No innocent blood: No bystanders will come to harm on your watch. Take
a Steadymade Buckler (+1 Armor). While holding this shield you cannot be
moved so long as both feet are planted on firm ground.`,
    `Revere the tools of death: Weapons are to be respected and maintained.
Take a Wyrmbone Whetstone. Following a half hour ritual sharpening,
attacks with the weapon are enhanced until STR damage is dealt.`,
    `To the death, always: You never back down from a fight, no matter the
odds. Take a Death-Whistle, 1 charge. Its scream frightens away all who
hear it (save WIL or flee). Recharge: Capture the final breath of a dying
warrior.`,
    `Revere the Dead: Death is a journey we all take, and it deserves respect.
Take an extra 30gp. You always place two gold pieces on the eyelids of a
slain foe. Somehow, you always find the coin.`,
    `Loyalty to the work: Your word is your bond. Once you’ve accepted a job,
you see it through to the end. Take a weathered Tally Stick. Once a vow is
marked unto its face, the stick hardens (d8) until it is complete. The stick
will snap in half if the vow is ever broken.`,
    `Always pay your debts: You always repay what you owe, whether in coin
or in kind. You expect nothing less from all others. Take a blacked-out
ledger, then roll a second time on the Bonds (pg. 15) table.`,
  ],
};
const table2 = {
  question: "What breed is your horse?",
  answers: [
    {
      name: "Heavy Destrier",
      description: `A beast built for war; an imposing creature. 8 HP, 1 Armor,
hooves (d10+d10), +2 slots.`,
    },

    {
      name: "Blacklegged Dandy",
      description: `Hardy and adaptable, Tough or Perilous terrain (pg. 76) are
one step easier. 6 HP. +4 slots.`,
    },

    {
      name: "Rivertooth",
      description: `Impressively strong, capable of carrying heavy loads. 4 HP.
+6 slots (only +2 slots if carrying two people).`,
    },

    {
      name: "Piebald Cob",
      description: `Intelligent, it can understand simple commands, and even
has an instinct for danger. 6 HP. +4 slots.`,
    },
    {
      name: "Linden White",
      description: `Highly trained and agile, it can perform intricate
maneuvers in a time of need (no DEX save to flee). +3 slots.`,
    },

    {
      name: "Stray Fogger",
      description: `Wild, but very fast, even in Tough terrain (pg. 76). Rides
light. 4 HP. +2 slots.`,
    },
  ],
};

export const OutriderBackground: BackgroundOptions = {
  name: BackgroundEnum.Outrider,
  description: `Your coin comes from escorting caravans, tracking fugitives, or lending your
blade to a cause. You’ve been a savior, an executioner, a hero, and even a villain.
Yours is not a solitary path, however: you’ll always have your horse.`,
  playerNames: [
    "Drake",
    "Cyra",
    "Keir",
    "Darius",
    "Valen",
    "Rorik",
    "Yara",
    "Rui",
    "Talon",
    "Jory",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Long Sword (d10, bulky)",
    "Leather Jerkin (1 Armor)",
    "Crossbow (d8, bulky)",
    "Spyglass",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "outrider.png",
};
