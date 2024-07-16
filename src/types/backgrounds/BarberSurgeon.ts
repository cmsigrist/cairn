import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "How have you “improved” yourself?",
  answers: [
    `You have a replacement eye that can magnify objects, acts as a telescope,
and provides minimal night vision. You cannot wear anything metal on
your head, and strong magnets make you deprived.`,
    `One foot is mostly metal (kick, d6), and you treat some Tough Terrain
as Easy. Carry an Oil Can (6 uses). Without a daily application you are
deprived and noisy.`,
    `One of your fingers has been swapped, the bone replaced by gold and
iron. Take a Hook and a Screwdriver that can attach to the fingertip.`,
    `Both ears have been surgically enhanced, tripling your hearing. You can
focus on a specific sound at a great distance, such as a conversation. You
wear an ear flap to protect against sudden loud noises (WIL save to avoid
temporary paralysis).`,
    `Your chest is lined with alchemical sigils, toughening the skin (1 Armor).
Wearing other metallic armor nullifies the effect.`,
    `One arm is fully metal, and comes off at the shoulder. It can be used as a
weapon (d8, bulky when not attached) and can move independently if you
are within sight of it.`,
  ],
};
const table2 = {
  question: "What rare tool is essential to your work?",
  answers: [
    {
      name: "Regrowth Salve",
      description: `Regrows a body part over the course of a day (1 use).`,
    },

    {
      name: "Graftgrub",
      description: `A small worm that can fuse inanimate objects with parts
of the body (1 use).`,
    },

    {
      name: "Woundwax",
      description: `Heals wounds from fire or chemicals (restoring full STR),
but nothing else (2 uses).`,
    },

    {
      name: "Quicksilver",
      description: `A stimulant. Go first in combat, and automatically pass any
WIL saves for one hour. Addictive: Save STR or become deprived after 24 hours without it (4 uses).`,
    },
    {
      name: "Pneuma Pump",
      description: `Portable iron lungs (bulky). Enables life-saving surgery, or
underwater breathing.`,
    },

    {
      name: "Lodestone",
      description: `Draws out dangerous elements from the body, and acts as
a powerful magnetic force.`,
    },
  ],
};

export const BarberSurgeonBackground: BackgroundOptions = {
  name: BackgroundEnum.Barber_Surgeon,
  description: `You walk the line between healer and harrower, knowing the frailty of the flesh
but also the secrets that lay within. With the right tools, life and death are merely
words.`,
  playerNames: [
    "Wilmot",
    "Patch",
    "Lancet",
    "Sawbones",
    "Theo",
    "Cutwell",
    "Humor",
    "Landsford",
    "Goodeye",
    "Johanna",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Amputation Knife (d6)",
    "Bandages (3 uses)",
    "Leech (restores 1 STR, 3 uses)",
    "Stained Medical Finery (petty)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/barber_surgeon.png"
};
