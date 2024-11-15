import { Attributes } from "../types/attributes";
import { AllBackgrounds, Background } from "../types/backgrounds";
import { Bonds } from "../types/bonds";
import { Character } from "../types/character";
import { Die } from "../types/die";
import { Omens } from "../types/omens";
import { Traits } from "../types/traits";

export const rand = (die: Die, startAtZero?: boolean) => {
  if (startAtZero) {
    return Math.floor(Math.random() * (die - 1)) + 1;
  }
  return Math.floor(Math.random() * die) + 1;
};

export const rollRand = (die: Die, number: number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += rand(die);
  }

  return sum;
};

export const generateCharacter = () => {
  const backgroundOptions = AllBackgrounds[rand(Die.d20)];
  const background: Background = {
    name: backgroundOptions.name,
    description: backgroundOptions.description,
    playerName: backgroundOptions.playerNames[rand(Die.d10, true)],
    startingGears: backgroundOptions.startingGears,
    startingGold: rollRand(
      backgroundOptions.startingGold.die,
      backgroundOptions.startingGold.number
    ),
    tables: [
      {
        question: backgroundOptions.tables[0].question,
        answer: backgroundOptions.tables[0].answers[rand(Die.d6, true)],
      },
      {
        question: backgroundOptions.tables[1].question,
        answer: backgroundOptions.tables[1].answers[rand(Die.d6, true)],
      },
    ],
    img: backgroundOptions.img,
  };
  const attributes: Attributes = {
    strength: rollRand(Die.d6, 3),
    dexterity: rollRand(Die.d6, 3),
    willpower: rollRand(Die.d6, 3),
  };
  const hitProtection = rand(Die.d6);
  const traits: Traits = {
    physique: rand(Die.d10),
    skin: rand(Die.d10),
    hair: rand(Die.d10),
    face: rand(Die.d10),
    speech: rand(Die.d10),
    clothing: rand(Die.d10),
    virtue: rand(Die.d10),
    vice: rand(Die.d10),
  };
  const bond = Bonds[rand(Die.d20, true)];
  const age = rand(Die.d20) + rand(Die.d20) + 10;
  const omen = Omens[rand(Die.d20, true)];

  return new Character(
    background,
    attributes,
    hitProtection,
    traits,
    bond,
    age,
    omen
  );
};