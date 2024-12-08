import { FC } from "react";
import { Character } from "../../types/character";
import { Stack, Typography, Box, Paper } from "@mui/material";
import { BackgroundEnum } from "../../types/backgroundEnum";
import logo from "../../resources/Cairn-2e-Compatible.jpg";

import { Stats } from "./exportedCharacterSheet/Stats";
import { LayoutWithBackgroundCharacterSheet } from "./exportedCharacterSheet/LayoutWithBackgroundCharacterSheet";
import { SimpleLayoutCharacterSheet } from "./exportedCharacterSheet/SimpleLayoutCharacterSheet";

const ExportedCharacterSheet: FC<{
  character: Character;
  targetRef: React.MutableRefObject<any>;
  simpleLayout: boolean
}> = ({ character, targetRef, simpleLayout }) => {
  const a4Width = 296;
  const a4Height = 210; // 200
  const a4Padding = 5; // 5
  const ratio = 1.2;

  return (
    <Paper
      elevation={3}
      sx={{
        marginY: 4,
        padding: `${a4Padding * ratio}mm`,
        width: `${a4Width * ratio}mm`,
        height: `${a4Height * ratio}mm`,
      }}
    >
      <Stack
        direction={"row"}
        spacing={4}
        width={"100%"}
        height={"98%"}
        ref={targetRef}
      >
        <Stack width={"30%"} height={"100%"} justifyContent={"space-between"}>
          <Stack direction="row" width={"100%"} alignItems={"center"}>
            <Box>
              <img src={logo} alt="" style={{ width: 85 }} />
            </Box>

            <Typography variant="h4" marginLeft={3} fontWeight="bold">
              {BackgroundEnum[character.background.name].replace("_", " ")}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            marginTop={2}
            width={"100%"}
            alignItems={"center"}
          >
            <Box width={"60%"}>
              <Typography>{character.background.description}</Typography>
            </Box>

            <Box width={"40%"}>
              <img
                src={`${process.env.PUBLIC_URL}/backgrounds/no_blank_space/${character.background.img}`}
                alt=""
                style={{ maxWidth: "100%", maxHeight: 200 }}
              />
            </Box>
          </Stack>

          <Stack direction="row" marginTop={1}>
            <Typography fontWeight="bold">Name:</Typography>
            <Typography marginLeft={1}>
              {character.background.playerName}
            </Typography>
            <Typography marginLeft={4} fontWeight="bold">
              Age:
            </Typography>
            <Typography marginLeft={1}>{character.age}</Typography>
          </Stack>

          <Stats />
        </Stack>

        {!simpleLayout && <LayoutWithBackgroundCharacterSheet character={character} />}
        {simpleLayout && <SimpleLayoutCharacterSheet character={character} />}
      </Stack>
    </Paper>
  );
};

export default ExportedCharacterSheet;
