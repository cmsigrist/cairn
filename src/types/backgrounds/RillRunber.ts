import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What songs are you best known for?",
  answers: [
    `The Tinker’s Two-Step. A humorous fairy tale about a gift-giving traveler.
Start with a Reed Whistle. Anyone in earshot must pass a WIL save to
perform an act of violence.`,
    `The Sylph and Her Lover. A bawdy tale of lost love. Start with a Breeze
Knot (3 charges). Creates a strong breeze. Recharge: Tie it to a mast
during a storm.`,
    `Harper’s Devotion. A sad, short tale about a musician that falls in love with
a star. Start with a Celestial Lute. Reveals the constellations above, no
matter the weather.`,
    `The Reed Fisher. A celebrated song about a massive carp that always seems
to get away. Begin with a spool of River Twine (5 uses). Each dip into the
river guarantees a catch, though it might not be pleasant.`,
    `Song of the Silver Stream. A wordless lullaby that mimics flowing water.
Take a Stone Flute that can calm almost any river.`,
    `The Thrush and the Meadow. A moody tale told in alternating chorus. Start
with a Feather Quill (1 use, petty). A map drawn with this quill reveals the
most expedient course between any two points.`,
  ],
};
const table2 = {
  question: "What pays your way across the land?",
  answers: [
    {
      name: "Performance",
      description: `Performing at taverns always yields both room and board.
Sometimes you even get tips! Start with an extra d6 gold.`,
    },

    {
      name: "Bodyguard",
      description: `You are a protector for those afraid to travel alone. Start
with a rapier (d8).`,
    },

    {
      name: "Wares",
      description: `You buy low and sell high, always making just enough to
get by. Take a Single Item worth 20gp or less from the
equipment table.`,
    },

    {
      name: "Transport",
      description: `You deliver “delicate” packages throughout the lands. You
have at least one contact in any major town.`,
    },
    {
      name: "Sailor’s Friend",
      description: `Whether water, wind, or sail, your aid brings ships to their
destination. For you, passage is always free.`,
    },

    {
      name: "Guide",
      description: `You shepherd caravans and travelers across water-soaked
lands. Start with a Map relevant to your next journey.`,
    },
  ],
};

export const RillRunnerBackground: BackgroundOptions = {
  name: BackgroundEnum.Rill_Runner,
  description: `You sing the stories of rivers and lakes, your talents soothing friends and the
elements alike. You’ve seen more than most, but somehow it never seems to
be enough.`,
  playerNames: [
    "Gale",
    "Piper",
    "Brook",
    "Adair",
    "Stone",
    "Dale",
    "Wren",
    "Cliff",
    "Rain",
    "Robin",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Water Shoes",
    "Brigandine (1 Armor, bulky)",
    "Compass",
    "Dagger (d6)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "rill_runner.png",
};
