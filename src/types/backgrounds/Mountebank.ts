import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "How was your fraud exposed?",
  answers: [
    `Your “patients” kept reporting miraculous recoveries, despite your lack of
training. Start with Bandages (3 uses) and a knack for healing.`,
    `After seducing a wealthy patron, their family hired a criminal gang to
retrieve you. You got away and need to lay low. Start with Beauty Cream
(2 uses). Apply to appear irresistibly beautiful for the next 12 hours.`,
    `You were a peddler of fake prophesies, but when one turned out to be
true, it drew unwanted attention. Roll on the Omens (pg. 15) table, but
keep the result to yourself. Start with a concealable Knife (d6, petty).`,
    `Your latest stunt destroyed a priceless artifact and injured a dozen
bystanders. Start with a Captain’s Uniform (petty), a Ceremonial Sword
(harmless, 60gp), and a Bouquet of Flowers.`,
    `You were cursed by a hedgewitch for fooling some innocent village folk.
Magic acts unpredictably in your hands (WIL save to avoid disaster). If you
are the target of magic, the same applies to its wielder.`,
    `Your “seances” with the dead were in actuality a ruse involving a cleverly
hidden Spellbook of Auditory Illusion. Inevitably, a patron discovered your
secret. Start with the spellbook and a Bundle of Scarves.
Auditory Illusion: You create illusory sounds that seem to come from a
direction of your choice. Produces random and occasionally inopportune
sounds throughout the day`,
  ],
};
const table2 = {
  question: "What keepsake could always identify you?",
  answers: [
    {
      name: "Royal Crest",
      description: `Born into royalty, you chose a different life. The crest
grants you access, but also alerts your family of your
whereabouts.`,
    },

    {
      name: "Miracle Oil",
      description: `A smelly, slippery concoction (2 uses).`,
    },

    {
      name: "Surgeon’s Soap",
      description: `A lye and ash block that makes skin temporarily
transparent, revealing the anatomy within (4 uses).`,
    },

    {
      name: "Goat Powder",
      description: `Derived from the placenta of a baby goat. Temporarily
cures any affliction, but symptoms return within hours.`,
    },
    {
      name: "Cursed Sapphire",
      description: `Worth 200gp, it noticeably returns to your pocket shortly
after you spend it. You can’t seem to get rid of it.`,
    },

    {
      name: "Alchemical Tattoo",
      description: `A dog, cat, or bird that can leave your body on demand. It
follows your commands to the best of its abilities, and can
pass its injuries (as STR loss) back onto you (petty).`,
    },
  ],
};

export const MountebankBackground: BackgroundOptions = {
  name: BackgroundEnum.Mountebank,
  description: `Wits are your sharpest weapon, a facade your strongest shield. But when you do
lose, you lose badly.`,
  playerNames: [
    "Ambrose",
    "Lucius",
    "Beauregard",
    "Cornelius",
    "Aria",
    "Toph",
    "Indigo",
    "Delphine",
    "Solene",
    "Noa",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Cart (+4 slots, bulky when pulled)",
    "Playing Cards (tricked)",
    "Fancy Hat (petty)",
    "Cane Sword (d6)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "mountebank.png",
};
