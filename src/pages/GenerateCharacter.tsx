import { FC, useCallback, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ExportCharacterSheetDialog from "./generatedCharacter/ExportCharacterSheetDialog";
import { generateCharacter } from "../utils/roll";
import GeneratedCharacter from "./GeneratedCharacter";
import { Character } from "../types/character";
import { CharacterHistoryButton } from "../component/splitButton/CharacterHistoryButton";
import { getBackgroundName } from "../utils/background";

const GenerateCharacter: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [character, setCharacter] = useState(generateCharacter());
  const [previousCharacters, setPreviousCharacters] = useState<Character[]>([]);
  const [nextCharacters, setNextCharacters] = useState<Character[]>([]);

  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "F5") {
        event.preventDefault();
        setCharacter(generateCharacter());
      }
    },
    [setCharacter]
  );

  useEffect(() => {
    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleGenerateCharacter = useCallback(() => {
    const newCharacter = generateCharacter();
    setPreviousCharacters([
      ...previousCharacters,
      ...nextCharacters,
      character,
    ]);
    setNextCharacters([]);
    setCharacter(newCharacter);
  }, [
    character,
    previousCharacters,
    nextCharacters,
    setCharacter,
    setPreviousCharacters,
    setNextCharacters,
  ]);

  const onSelectPreviousCharacter = useCallback(
    (selectedCharacter: Character, selectedCharacterIndex: number) => {
      let charactersAfterSelectedIndex: Character[] = [];
      if (selectedCharacterIndex !== 0) {
        charactersAfterSelectedIndex = previousCharacters.slice(
          selectedCharacterIndex + 1
        );
      }
      setNextCharacters([
        ...nextCharacters,
        character,
        ...charactersAfterSelectedIndex,
      ]);
      setCharacter(selectedCharacter);
      setPreviousCharacters([
        ...previousCharacters.slice(0, selectedCharacterIndex),
      ]);
    },
    [previousCharacters, character, nextCharacters, setNextCharacters]
  );

  const onSelectNextCharacter = useCallback(
    (selectedCharacter: Character, selectedCharacterIndex: number) => {
      let charactersBeforeSelectedIndex: Character[] = [];
      if (selectedCharacterIndex !== 0) {
        charactersBeforeSelectedIndex = nextCharacters.slice(
          selectedCharacterIndex + 1
        );
      }
      setPreviousCharacters([
        ...previousCharacters,
        ...charactersBeforeSelectedIndex,
        character,
      ]);
      setCharacter(selectedCharacter);
      setNextCharacters([...nextCharacters.slice(0, selectedCharacterIndex)]);
    },
    [previousCharacters, character, nextCharacters, setPreviousCharacters]
  );

  const handlePreviousCharacter = useCallback(() => {
    const previousCharacter = previousCharacters[previousCharacters.length - 1];
    setNextCharacters([...nextCharacters, character]);
    setCharacter(previousCharacter);
    setPreviousCharacters([...previousCharacters.slice(0, -1)]);
  }, [previousCharacters, character, nextCharacters, setNextCharacters]);

  const handleNextCharacter = useCallback(() => {
    const nextCharacter = nextCharacters[nextCharacters.length - 1];
    setPreviousCharacters([...previousCharacters, character]);
    setCharacter(nextCharacter);
    setNextCharacters([...nextCharacters.slice(0, -1)]);
  }, [previousCharacters, character, nextCharacters, setPreviousCharacters]);

  return (
    <>
      <ExportCharacterSheetDialog
        open={open}
        handleClose={handleClose}
        character={character}
      />
      <Stack marginTop={4} gap={4}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="row" spacing={2}>
            <Box>
              <Button
                variant="contained"
                startIcon={<AutorenewIcon />}
                onClick={handleGenerateCharacter}
              >
                Generate
              </Button>
            </Box>

            <CharacterHistoryButton
              options={previousCharacters}
              onChange={onSelectPreviousCharacter}
              disabled={previousCharacters.length === 0}
            >
              <Button
                variant="outlined"
                startIcon={<ArrowBackIosIcon />}
                onClick={handlePreviousCharacter}
                disabled={previousCharacters.length === 0}
              >
                Prev
              </Button>
            </CharacterHistoryButton>
            <CharacterHistoryButton
              options={nextCharacters}
              onChange={onSelectNextCharacter}
              disabled={nextCharacters.length === 0}
              reversedIndexes={true}
            >
              <Button
                variant="outlined"
                startIcon={<ArrowForwardIosIcon />}
                onClick={handleNextCharacter}
                disabled={nextCharacters.length === 0}
              >
                Next
              </Button>
            </CharacterHistoryButton>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box>
              <Button
                variant="outlined"
                startIcon={<FileDownloadIcon />}
                onClick={handleClickOpen}
              >
                Export
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h2">
            {getBackgroundName(character.background.name)}
          </Typography>
          <GeneratedCharacter character={character} />
        </Stack>
      </Stack>
    </>
  );
};

export default GenerateCharacter;
