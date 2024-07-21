import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "To which order do you belong?",
  answers: [
    `Order of the Crossroads. Take a Pocket Leyfinder. It points to nearby ley
lines and other sources of arcane power. If you lose it, the punishment is
death.`,
    `Order of the Bleeding Star. Take a Star-Iron mace (d8). It shines faintly in
darkness, and becomes very hot in the presence of witchcraft.`,
    `Order of the Glass Sigil. Take a Short Sword (d8) and Chainmail (2 Armor,
bulky). You have contacts in most towns (the more rural, the better)
willing to provide aid, food, or even weapons.`,
    `Order of the Blank Eye. Take a Voidglass Shard. Peer through it to see
invisible marks, creatures, and other magical effects. Lose the use of your
eye for an hour afterwards (you are deprived).`,
    `Order of Canaas. Once per day you can change into a wolf. Take a
Quicksilver Chain. Without it, you are unable to shift back.`,
    `Order of the Silent Veil. Take a Quell Stone (2 uses) wrapped in burlap.
Extinguishes any nearby flames once exposed to air.`,
  ],
};
const table2 = {
  question: "What was your vow?",
  answers: [
    {
      name: "Honesty",
      description: `Choose a weapon type (blunt, blade, etc). Attacks against
you of this type are impaired. If your vow is broken, you
lose d4 WIL.`,
    },

    {
      name: "Poverty",
      description: `You carry the Disassemble Spellbook. Only you can use it.
If your vow is broken, it explodes (d12 STR damage).
Disassemble: Any of your body parts may be detached and
reattached at will, without causing pain or damage. You can
still control them. Regenerates any torn or defaced pages.`,
    },

    {
      name: "Selflessness",
      description: `You are immune to magical effects such as charm, hatred,
frenzy, and so on. If you break this vow, you lose d6 WIL.`,
    },

    {
      name: "Mercy",
      description: `Choose a weapon type (blunt, blade, etc). Attacks with
this weapon are enhanced. If your vow is broken, you can
never use that weapon type again.`,
    },
    {
      name: "Charity",
      description: `Once per day you can shrug off a Fatigue. If your vow is
ever broken, you permanently lose one inventory slot.`,
    },

    {
      name: "Valor",
      description: `The first time you inflict Critical Damage you receive d4
HP, returning to the previous limit at the end of combat. If
your vow is broken, you die.`,
    },
  ],
};

export const HexenbaneBackground: BackgroundOptions = {
  name: BackgroundEnum.Hexenbane,
  description: `You are a mere digit on the unerring hand of justice. You go where others fear to
tread, unyielding and unbroken.`,
  playerNames: [
    "Percival",
    "Felix",
    "Isolde",
    "Wolfram",
    "Aldric",
    "Eira",
    "Oswin",
    "Ivor",
    "Brunhilda",
    "Beatrix",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Vestments of the Order (petty)",
    "Blessed Tinctures",
    "Silver Knife (d6)",
    "Crossbow (d8, bulky)"
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "hexenbane.png",
};
