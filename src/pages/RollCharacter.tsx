import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Fade,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PrintIcon from "@mui/icons-material/Print";
import PrintCharacterSheetDialog from "./rolledCharacter/PrintCharacterSheetDialog";
import {
  rerollCharacter,
  rollAttributes,
  rollBackground as rollBackgroundDetails,
  rollBond,
  rollCharacter,
  rollOmen,
  rollTraits,
} from "../utils/roll";
import RolledCharacter from "./RolledCharacter";
import { Character } from "../types/character";
import { CharacterHistoryButton } from "./rolledCharacter/CharacterHistoryButton";
import {
  getBackgroundEnumFromIndex,
  getBackgroundName,
} from "../utils/background";
import { RerollCharacterButton } from "./rolledCharacter/RerollCharacterButton";
import { RerollOptionsEnum } from "./rolledCharacter/type";
import { AllBackgrounds } from "../types/backgrounds";
import { RollCharacterButton } from "./rolledCharacter/RollCharacterButton";
import { useParams } from "react-router-dom";

const RollCharacter: FC = () => {
  const { background } = useParams();

  const characterBackground = useMemo(() => {
    if (background) {
      return getBackgroundEnumFromIndex(Number.parseInt(background));
    }
  }, [background]);

  const [openPrint, setOpenPrint] = useState(false);
  const [rollWithOmen, setRollWithOmen] = useState(true);
  const [character, setCharacter] = useState(
    characterBackground ? rerollCharacter(characterBackground) : rollCharacter()
  );

  const [previousCharacters, setPreviousCharacters] = useState<Character[]>([]);
  const [nextCharacters, setNextCharacters] = useState<Character[]>([]);

  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "F5") {
        event.preventDefault();
        setCharacter(rollCharacter());
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

  const handleOpenPrint = useCallback(() => {
    setOpenPrint(true);
  }, [setOpenPrint]);

  const handleClosePrint = useCallback(() => {
    setOpenPrint(false);
  }, [setOpenPrint]);

  const handleRollWithOmen = useCallback(() => {
    setRollWithOmen(!rollWithOmen);
  }, [rollWithOmen, setRollWithOmen]);

  const handleRollCharacter = useCallback(
    (newCharacter: Character) => {
      setPreviousCharacters([
        ...previousCharacters,
        ...nextCharacters,
        character,
      ]);
      setNextCharacters([]);
      setCharacter(newCharacter);
    },
    [
      previousCharacters,
      nextCharacters,
      setCharacter,
      setPreviousCharacters,
      setNextCharacters,
    ]
  );

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

  const handleRerollCharacter = useCallback(
    (option: RerollOptionsEnum) => {
      let rerolledCharacter: Character;
      switch (option) {
        case "All":
          rerolledCharacter = {
            ...rerollCharacter(character.background.name),
          };
          break;
        case "Attributes":
          rerolledCharacter = { ...character, attributes: rollAttributes() };
          break;
        case "Background details":
          rerolledCharacter = {
            ...character,
            background: rollBackgroundDetails(
              AllBackgrounds[character.background.name]
            ),
          };
          break;
        case "Traits":
          rerolledCharacter = { ...character, traits: rollTraits() };
          break;
        case "Bond":
          rerolledCharacter = { ...character, bond: rollBond() };
          break;
        case "Omen":
          rerolledCharacter = { ...character, omen: rollOmen() };
          break;
        default:
          rerolledCharacter = { ...character };
      }

      setCharacter(rerolledCharacter);
    },
    [character, setCharacter]
  );

  return (
    <>
      <PrintCharacterSheetDialog
        open={openPrint}
        handleClose={handleClosePrint}
        character={character}
      />
      <Stack marginTop={4} gap={5}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="row" spacing={2}>
            <RollCharacterButton onClick={handleRollCharacter} />

            <CharacterHistoryButton
              label="Prev"
              startIcon={<ArrowBackIosIcon />}
              onClick={handlePreviousCharacter}
              options={previousCharacters}
              onChange={onSelectPreviousCharacter}
              disabled={previousCharacters.length === 0}
            />
            <CharacterHistoryButton
              label="Next"
              startIcon={<ArrowForwardIosIcon />}
              onClick={handleNextCharacter}
              options={nextCharacters}
              onChange={onSelectNextCharacter}
              disabled={nextCharacters.length === 0}
              reversedIndexes={true}
            />
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <RerollCharacterButton onReroll={handleRerollCharacter} />
            <FormControlLabel
              control={
                <Switch
                  checked={rollWithOmen}
                  onClick={handleRollWithOmen}
                  defaultChecked
                />
              }
              label="Roll With Omen"
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box>
              <Button
                variant="outlined"
                startIcon={<PrintIcon />}
                onClick={handleOpenPrint}
              >
                Print
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Fade in>
          <Stack>
            <Typography variant="h2">
              {getBackgroundName(character.background.name)}
            </Typography>
            <RolledCharacter character={character} showOmen={rollWithOmen} />
          </Stack>
        </Fade>
      </Stack>
    </>
  );
};

export default RollCharacter;
