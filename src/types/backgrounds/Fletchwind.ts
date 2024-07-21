import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "How did you earn your bow?",
  answers: [
    `War. If you are first to attack, your bow gains the blast property for the
first round.`,
    `Falconry. You keep a falcon [3 hp, 5 STR, 16 DEX, 4 WIL, claws (d6+d6),
bite (d8)]. It only eats live game.`,
    `Hunting. When taking the Supply (pg. 80) action your ability to secure
Rations increases by one step (e.g. 1d4 becomes 1d6).`,
    `Tournaments. Attacks with your bow are enhanced if the target is
immobile.`,
    `Training. If you are the first to attack, melee attacks against you are
impaired until you take STR damage.`,
    `Scouting. When taking the Travel (pg. 80) action, your presence decreases
the chance of getting lost by one step (e.g. 4-in-6 becomes 3-in-6).`,
  ],
};
const table2 = {
  question: "What kind of wood is your bow made from?",
  answers: [
    {
      name: "Western Yew (d6, bulky)",
      description: `Can be wielded as a blunt weapon (d6). Noisy.`,
    },

    {
      name: "Sessile Oak (d8, bulky)",
      description: `Slams into targets. On Critical Damage, something
is torn off.`,
    },

    {
      name: "Stone Pine (d6, bulky)",
      description: `Produces one use of Sticky Sap per day. It is highly
explosive.`,
    },

    {
      name: "White Ash (d6, bulky)",
      description: `Can be used in place of a shield in melee combat (+1
Armor).`,
    },
    {
      name: "Striped Bamboo (d6)",
      description: `Collapsible, it only requires one slot (but still
requires both hands).`,
    },

    {
      name: "Wych Elm (d6, bulky)",
      description: `Protects the bearer from poisons and toxins, so
long as they are holding it.`,
    },
  ],
};

export const FletchwindBackground: BackgroundOptions = {
  name: BackgroundEnum.Fletchwind,
  description: `You strike from afar, but that does not make you a coward. You are a musician,
the song of your bowstring nought but a warning, singing the silent promise of a
quick death.`,
  playerNames: [
    "Flint",
    "Feather",
    "Crier",
    "Thunder",
    "Falcon",
    "Pluck",
    "Needle",
    "Warsong",
    "Hawk",
    "Cai",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Bow (see table)",
    "Serrated Knife (d6)",
    "Boiled Leather (1 Armor)",
    "Heartroot Salve (restores 1d4 STR, 1 use)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "fletchwind.png",
};
