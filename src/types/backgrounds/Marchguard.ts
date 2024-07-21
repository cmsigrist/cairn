import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "Why did you take the Oath?",
  answers: [
    `Your family has a long tradition of serving, and you were trained from an
early age on how to survive in the wild. When taking the Supply (pg. 80)
action your yield increases by one step (e.g. 1d4 > 1d6).`,
    `As a convict, the Oath was simply a means of avoiding punishment. Take
Lockpicks, and the Key (petty) to a safehouse.`,
    `Noble-born, you joined to escape family trouble. Take a Goosefelt Tarp
(fits two) that you stole before leaving home.`,
    `When your family lost everything, you took the Oath to avoid becoming a
burden. Take extra Rations (3 uses) and Throwing Knives (d6).`,
    `Your life was saved by a member of the Marchguard, and you were
inspired to join their ranks. Take a Snare Trap and a Sketchbook filled
with detailed drawings.`,
    `You were in a dark place, and decided that your life needed a little
direction. You’re still not so sure it was the right choice. Take an Oilskin
Coat and Mapping Paper.`,
  ],
};
const table2 = {
  question: "What do you carry as proof of your Oath?",
  answers: [
    {
      name: "Impressive Pin",
      description: `A metal badge of honor from the Guard. It can open doors,
but leaves a trail (petty).`,
    },

    {
      name: "Oath Compass",
      description: `Points not towards North, but instead to the nearest
member of the Guard. It also lets you know when they’re
getting close.`,
    },

    {
      name: "Pullstones",
      description: `Two jet-black stones. When separated, the stones will
always roll in the direction of the other.`,
    },

    {
      name: "Fireflask",
      description: `Highly alcoholic, yet strangely delicious. When thrown
creates a wall of flames 10ft high that burns out after a few
minutes (1 use).`,
    },
    {
      name: "Pain Band",
      description: `Touch an injured creature to transfer their wounds to
you (exchange their lost STR with your own). Recharge:
Wear the ring while in perfect health. It will take 1 STR,
permanently (petty).`,
    },

    {
      name: "Poacher’s Woe",
      description: `Strongly-scented arrows (3 uses). The scent is powerful
enough to track with ease.`,
    },
  ],
};

export const MarchguardBackground: BackgroundOptions = {
  name: BackgroundEnum.Marchguard,
  description: `Bound by blood Oath to patrol the border and protect the realm. Once sworn, the
Oath cannot be broken. The Guard always finds their own.`,
  playerNames: [
   "Gann","Light","Saoirse","Frost","Thorn","Reed","Dirk","Ragnar","Brie","Aasim"
  ],
  startingGears: [
    "Rations (3 uses)",
    "Lantern",
    "Oil Can (6 uses)",
    "Long Sword (d10, bulky)",
    "Boiled Leather (1 Armor)"
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "marchguard.png"
};
