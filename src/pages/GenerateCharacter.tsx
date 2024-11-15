import { FC, useCallback, useEffect, useState } from "react";
import { generateCharacter } from "../utils/roll";
import GeneratedCharacter from "./GeneratedCharacter";
import { Stack } from "@mui/material";

const GenerateCharacter: FC = () => {
  const [character, setCharacter] = useState(generateCharacter());

  const handleKeyDown = useCallback((event: any) => {
    if (event.key === "F5") {
      event.preventDefault();
      setCharacter(generateCharacter());
    }
  }, [setCharacter]);

  useEffect(() => {
    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Stack
      direction="row"
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      <GeneratedCharacter
        character={character}
        generateCharacter={generateCharacter}
      />
    </Stack>
  );
};

export default GenerateCharacter;
