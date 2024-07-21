import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What did you last hunt?",
  answers: [
    `A mock firefly, baiting water carriers with its lure. Take an Alchemical
Limb (d8, petty when worn) and an Oil Can (6 uses) to replace the one it
tore off. It is immune to heat and poison. Needs to be oiled daily.`,
    `An ice nettle, trapping and draining sheep. You lost your commission when
the fungus you introduced killed half the flock. Take a Rime Seed (1 use).
It freezes any body of water, no matter the size. Don’t eat it.`,
    `A silver marsh crawler that killed someone close to you. You now carry
its Tooth (petty) on a chain around your neck as a warning to others of its
kind. The tooth hums softly when something is stalking you.`,
    `A malicious forest spirit that poisoned a homestead. You saved a
Heartseed from the roots of a dying tree (plant to create a a new forest).
Also, take Iron Bracers (+1 Armor, bulky).`,
    `A hollow wolf that had been frightening travellers. You took pity on the
half-starved creature, and nursed it back to health. Now it is loyal to you
unto death. It is also a great tunneler. 5 HP, 11 STR, 13 DEX, 8 WIL, teeth
(d6).`,
    `An azure warbler. The gametes attract a sizeable profit, if properly
extracted. You succeeded, but left its nest to the wolves. Take a Paring
Knife (d6), an extra 20gp, and a pang of regret.`,
  ],
};
const table2 = {
  question: "What tool is always in your pack?",
  answers: [
    {
      name: "Fermented Spirits",
      description: `Keeps you warm at the best of times, and can be used as
an explosive at the worst (3 Uses).`,
    },

    {
      name: "Trail Shaker",
      description: `A noisy instrument that reveals nearby trails, even when
deeply hidden.`,
    },

    {
      name: "Drowse Balm",
      description: `A wax bar. If boiled in water, the steam acts as a soporific
agent.`,
    },

    {
      name: "Spike and Cord",
      description: `For traversing or securing difficult terrains, or for creating
makeshift traps and structures.`,
    },
    {
      name: "Iron Rattle",
      description: `A noisemaker for distracting or scaring your quarry.
Sounds convincingly like a snake.`,
    },

    {
      name: "Hardening Glue",
      description: `Makes any flat material (cloth, leather, sand) as hard as
stone. Expensive (20gp a bottle, 3 uses).`,
    },
  ],
};

export const ProwlerBackground: BackgroundOptions = {
  name: BackgroundEnum.Prowler,
  description: `You are a specter in the night, a fleeting shadow that slips by its prey, unseen.
Each kill a test of cunning and animal determination, a contest between life and
death. You know that one day you will lose. You look forward to it.`,
  playerNames: [
    "Winda",
    "Brielle",
    "Theron",
    "Chayse",
    "Nuja",
    "Dev",
    "Raven",
    "Baruani",
    "Arawan",
    "Sable",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Tarp (shelters 1)",
    "Boiled Leather (1 Armor)",
    "Short Sword (d6)",
    "Spring-Loaded Trap (4 STR damage)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "prowler.png",
};
