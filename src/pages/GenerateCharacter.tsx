import { FC, useEffect, useState } from "react";
import { generateCharacter } from "../utils/roll";
import GeneratedCharacter from "./GeneratedCharacter";
import { Stack } from "@mui/material";

const GenerateCharacter: FC = () => {
  const [character, setCharacter] = useState(generateCharacter());
  const handleKeyDown = (event: any) => {
    if (event.key === "F5") {
      event.preventDefault();
      setCharacter(generateCharacter())
    }
  };

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
      <GeneratedCharacter character={character} />
    </Stack>
  );
};

export default GenerateCharacter;
