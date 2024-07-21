import { BackgroundEnum } from "../backgroundEnum";
import { BackgroundOptions } from "../backgrounds";
import { Die } from "../die";

const table1 = {
  question: "What did you take from the dead?",
  answers: [
    `A Crow-Shaped Amulet. You can ask a question of the dead, but must add
a Fatigue each time.`,
    `A mortal wound from a freed revenant. You were healed, but the
disfigurement has made you a pariah. You require neither air nor
sustenance, but are still subject to pain and death. Trapped between, the
dead see you as one of their own.`,
    `A Blood Pail (bulky) from a local death-cult. Empty to raise a servant
built from items buried below (bones, rocks, pottery, etc) that obeys your
command. It has 6 HP, 1 Armor, 13 STR, 11 DEX, 4 WIL, shard fists (d8+d8),
and if destroyed, you permanently lose 1d4 STR. Recharge: Fill the bucket
with the blood of a dying warrior. Can raise only one servant at a time.`,
    `A Burial Wagon (+6 slots) from your last job. It came with a stubborn old
Donkey (+4 slots, only +2 slots if pulling wagon, slow).`,
    `The Detect Magic Spellbook, stolen from an ancient library. Your family
worked in service to an obscure underworld deity, but you lost your faith.
Though exiled, you continue to serve, even as an apostate.
Detect Magic: You can see or hear nearby magical auras. Becomes warm to
the touch when magic is used nearby. Becomes warm to the touch if magic is
used nearby.`,
    `A Plague Doctor’s Mask, after its owner succumbed to the disease that
wiped out everyone you once knew. They should have kept it on.`,
  ],
};
const table2 = {
  question: "What tool was invaluable in your work?",
  answers: [
    {
      name: "Manacles",
      description: `Though old, it’s still effective even against the very strong.
You don’t have the key.`,
    },

    {
      name: "Sponge",
      description: `Supposedly made from the remains of a rare sea creature.
It never seems to dry out.`,
    },

    {
      name: "Pulley",
      description: `Great for moving gravestones, rocks, or even bodies.`,
    },

    {
      name: "Incense",
      description: `Perfect for rituals, or to keep the flies at bay. Cools the
blood.`,
    },
    {
      name: "Crowbar",
      description: `d6 damage. Sometimes you just need to get the damn
thing open!`,
    },

    {
      name: "Repellent",
      description: `Powerful stuff. Its faded label makes it unclear what it is
actually meant to repel, though. Perhaps everything. 3
uses.`,
    },
  ],
};

export const BonekeeperBackground: BackgroundOptions = {
  name: BackgroundEnum.Bonekeeper,
  description: `You are a shepherd to the departed. You listen to the final whispers of the dead as
they descend into the cold, unyielding earth. You know that to fully celebrate the
gift of life, we must honor its finale as well.`,
  playerNames: [
    "Rook",
    "Ebon",
    "Moro",
    "Yew",
    "Pall",
    "Leth",
    "Lenore",
    "Barnaby",
    "Vesper",
    "Leder",
  ],
  startingGears: [
    "Rations (3 uses)",
    "Lantern",
    "Oil Can (6 uses)",
    "Stake (d6)",
    "Chains (10ft)",
  ],
  startingGold: { die: Die.d6, number: 3 },
  tables: [table1, table2],
  img: "bonekeeper.png",
};
