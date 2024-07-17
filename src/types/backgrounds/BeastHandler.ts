import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What do creatures of the wild understand that your kind do not?",
  answers: [
    `There is far more to the world than meets the eye. With quiet
concentration, you can borrow the senses of a nearby creature of your
specialty.`,
    `The behavior of beasts is a language in itself. When observing beasts of
your specialty, you gain insight into weather patterns and impending
disasters.`,
    `The pulse of the hunt is a powerful impulse. You have a sense for when
predators, even those not of your specialty, are near.`,
    `You know some lands intimately. Your chance of becoming lost in a
terrain dominated by the beasts of your specialty is reduced by one step
(e.g. 4-in-6 becomes 3-in-6).`,
    `Nature’s symphony can be heard if you attune to its rhythm. When
surrounded by creatures of your specialty they can alert you to
approaching danger before it arrives.`,
    `Survival is about adaptability. Once per day, you may take on a simple
feature from a creature of your speciality (webbed fingers, night vision,
etc.). Add a Fatigue each time.`,
  ],
};
const table2 = {
  question: "What creature is your specialty?",
  answers: [
    {
      name: "Arachnids",
      description: `Take a Quick-Flame Rod and an Oil Can (6 uses). It can
destroy a large spider nest in seconds.`,
    },

    {
      name: "Felines",
      description: `Take a sack of Whiskerwort. Its odor can calm and
control even the largest of cats.`,
    },

    {
      name: "Canines",
      description: `Take a wreath of Wolfsbane and a Large Net. Also
effective against werewolves!`,
    },

    {
      name: "Birds",
      description: `Take a Warble-Whistle (3 charges). It can imitate any
bird call, and can even be used to send simple messages.
Recharge: Feed a baby bird as its mother would, then
blow.`,
    },
    {
      name: "Rodents",
      description: `Take a Windpipe that emits a high-pitched sound that
only rodents can hear. So long as you play, they will
follow. Even to their deaths.`,
    },

    {
      name: "Serpents",
      description: `Take a Warming Stone that generates an irresistible heat,
and a vial of Antitoxin (2 uses).`,
    },
  ],
};

export const BeastHandlerBackground: BackgroundOptions = {
  name: BackgroundEnum.Beast_Handler,
  description: `You alone can walk among the creatures of the wild, fearless and in control. You
share a connection with animals that others can only dream of...so long as you
don’t become their snack.`,
  playerNames: [
    "Amara",
    "Wulf",
    "Mireille",
    "Soren",
    "Freki",
    "Aster",
    "Gerrik",
    "Boreas",
    "Veda",
    "Matheus",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Leather Whip (d6)",
    "Soporific Darts (STR save or fall asleep, 6 uses)",
    "Lure",
    "Rope (25ft)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/beast_handler.png",
};
