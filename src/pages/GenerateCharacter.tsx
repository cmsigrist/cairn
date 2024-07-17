import { FC } from "react";
import { AllBackgrounds, Background } from "../types/backgrounds";
import { Bonds } from "../types/bonds";
import { Character } from "../types/character";
import { Die } from "../types/die";
import { Omens } from "../types/omens";
import { Traits } from "../types/traits";
import { rand, rollRand } from "../utils/roll";
import { Attributes } from "../types/attributes";
import GeneratedCharacter from "./GeneratedCharacter";
import { Stack } from "@mui/material";

const GenerateCharacter: FC = () => {
  const generateCharacter = () => {
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
      strength: rand(Die.d6),
      dexterity: rand(Die.d6),
      willpower: rand(Die.d6),
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

  const character = generateCharacter();

  return (
    <Stack
      direction="row"
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      <GeneratedCharacter character={character} />
    </Stack>
  );
};

export default GenerateCharacter;
