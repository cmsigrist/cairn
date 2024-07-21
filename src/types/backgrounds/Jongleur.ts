import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What happened at your final performance?",
  answers: [
    `Despite your training in the deadly arts, an actor died and you were
blamed. Take a light-weight Rapier (d6) and a false identity.`,
    `The crowd loved your catchy tune about a noble and his romantic failings.
Take the Read Mind Spellbook and a warrant for your arrest.
Read Mind: You can hear the surface thoughts of nearby creatures. Long-
term possession can cause the reader to mistake the thoughts of others as
their own.`,

    `Your debut composition reduced the audience to a gibbering mess,
murmuring of bright creatures descending from the night sky. Later, you
noticed that the notes resembled stellar constellations. Take a Book on
Astronomy, and a lot of questions.`,
    `You mocked a forgotten trickster god, and were cursed for it. You speak
only in perfect rhyme. Ironically, this has only made you more popular
among your peers. Take a Thesaurus (20gp). Without it you are deprived.`,
    `You were scarred in an on-stage accident. The crowd cheered, thinking
it was part of the act. Take well-worn Stage Mail (1 Armor), a memorable
scar, and a fear of applause.`,
    `Your respectable puppeteering skills were matched only by your mimicry.
You were so good you were branded a witch (literally) and banished. Take
an Uncanny Hand-Puppet and a Rabbit Skull (petty) that protects against
charms.`,
  ],
};
const table2 = {
  question: "What trinket were you unable to leave behind?",
  answers: [
    {
      name: "False Cuffs",
      description: `Comfortable, realistic-looking cuffs. Only you know the
trick to get out of them.`,
    },

    {
      name: "Pocket Theatre",
      description: `A set of small puppets and folding stage. Good for quick
distractions.`,
    },

    {
      name: "Ghost Violin",
      description: `A dark gray violin that plays a haunting tune, mirrored by
an invisible, distant twin.`,
    },

    {
      name: "Tragic Tales",
      description: `Banned in proper company, it becomes less bawdy and
more harrowing towards the end. Worth 100gp.`,
    },
    {
      name: "Mythos Mask",
      description: `A plaster mask that allows one to take on a monster’s
countenance. Once it comes off, add a Fatigue.`,
    },

    {
      name: "Rebreak Glass",
      description: `A wine flute that can be broken multiple times, reforming
after 24 hours. Makes a really loud noise.`,
    },
  ],
};

export const JongleurBackground: BackgroundOptions = {
  name: BackgroundEnum.Jongleur,
  description: `What inspires the soul more than song, words, and spectacle? Why practice for
years to master the arcane when you’ve already got real magic inside?`,
  playerNames: [
    "Jax",
    "Selene",
    "Baladria",
    "Ada",
    "Mort",
    "Saylor",
    "Tripp",
    "Lantos",
    "Echo",
    "Jubilo",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Torch (3 uses)",
    "Costume",
    "Makeup",
    "Lucky Jerkin (+1 Armor)",
    "Prop Sword (looks real, no damage)"
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "jongleur.png",
};
