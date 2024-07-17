import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What work did you keep for yourself?",
  answers: [
    `The Wild Tongue. A bundle of leather-bound scrolls. A seminal work,
cataloging the hidden languages of beasts, and how to understand them.`,
    `The Silent Symphony. Bound in fluorescent wrap. Very rare, it chronicles
the subtle signs used by those employing invisibility magic.`,
    `A Treatise on the Abyss. A non-descript black book. An in-depth, largely
theoretical text describing The Roots, as well as information around the
location of a nearby Gate.`,
    `The Star Waltz. A comet-shaped clasp embracing a fine leather cover.
Detailed astronomical charts, celestial movements, and stellar festivals.
Highly valued (100gp) for its usefulness to travelers.`,
    `The Cathedral and the Canopy. Large-leaf binding over vellum. Nominally
a children’s storybook, the margins detail information about traveling,
eating, and sleeping in the cloud forests.`,
    `Garden of Glass. Bound in the cover of another book. A heretical work,
it describes the materials, procedures, and optimal locations required to
open a Gate.`,
  ],
};
const table2 = {
  question: "How do you transcribe sensitive information?",
  answers: [
    {
      name: "Fib Ink",
      description: `Glows when used to write true statements, but fades if
used to write false ones.`,
    },

    {
      name: "Cipher Stone",
      description: `A pair of sharp black stones. Decrypts any message
written by the other.`,
    },

    {
      name: "Everquill",
      description: `A quill that writes on any surface. You still need ink (petty).`,
    },

    {
      name: "Whisper Vial",
      description: `Whisper a message into the vial and it will play back to
whomever opens it next.`,
    },
    {
      name: "Voyeur’s Suringa",
      description: `Extracts blood from a target without their knowledge. A
stolen drop placed on the eye reveals memories from the
past day.`,
    },

    {
      name: "Echo Leaf",
      description: `A blank parchment. Whomever unfurls it sees their
actions of the day slowly revealed in a tight scrawl.`,
    },
  ],
};

export const ScrivenerBackground: BackgroundOptions = {
  name: BackgroundEnum.Scrivener,
  description: `You copy ancient texts and illuminate manuscripts, recording the voices of the
clever, the great, and the powerful. You will prove that the pen truly is mightier
than the sword.`,
  playerNames: [
    "Lazlo",
    "Stilo",
    "Akshara",
    "Pisa",
    "Ji-Yun",
    "Kalamos",
    "Hugo",
    "Shui",
    "Kalam",
    "Julius",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Quill & Ink",
    "Blank Book",
    "Awl (d6)",
    "Badge (petty)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "/backgrounds/scrivener.png",
};
