import { Attributes } from "../types/attributes";
import { BackgroundEnum } from "../types/backgroundEnum";
import {
  AllBackgrounds,
  Background,
  BackgroundOptions,
} from "../types/backgrounds";
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

export const rollBackground = (
  backgroundOptions: BackgroundOptions
): Background => {
  return{
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
};

export const rollAttributes = (): Attributes => {
  return ({
    strength: rollRand(Die.d6, 3),
    dexterity: rollRand(Die.d6, 3),
    willpower: rollRand(Die.d6, 3),
  })
}

export const rollTraits = (): Traits => {
  return ({
    physique: rand(Die.d10),
    skin: rand(Die.d10),
    hair: rand(Die.d10),
    face: rand(Die.d10),
    speech: rand(Die.d10),
    clothing: rand(Die.d10),
    virtue: rand(Die.d10),
    vice: rand(Die.d10),
  })
}

export const rollBond = () => {
  return Bonds[rand(Die.d20, true)]
}

export const rollOmen = () => {
  return Omens[rand(Die.d20, true)]
}

export const rollCharacter = () => {
  const backgroundOptions = AllBackgrounds[rand(Die.d20)];
  return rollCharacterFromBackground(backgroundOptions)
};

export const rerollCharacter = (backgroundName: BackgroundEnum) => {
  const backgroundOptions = AllBackgrounds[backgroundName];
  return rollCharacterFromBackground(backgroundOptions)
}

export const rollCharacterFromBackground = (backgroundOptions: BackgroundOptions) => {
  const background: Background = rollBackground(backgroundOptions);
  const attributes: Attributes = rollAttributes();
  const hitProtection = rand(Die.d6);
  const traits: Traits = rollTraits();
  const age = rand(Die.d20) + rand(Die.d20) + 10;
  const bond = rollBond();
  const omen = rollOmen() ;

  return new Character(
    background,
    attributes,
    hitProtection,
    traits,
    bond,
    age,
    omen
  );
}
