import { Stack, Box, Paper, Typography } from "@mui/material";
import { pdfBorderColor } from "../../../styles/theme";
import TraitsCard from "../TraitsCard";
import { FC } from "react";
import { Character } from "../../../types/character";

import inventory from "../../../resources/inventory.png";
import notes from "../../../resources/notes.png";

export const SimpleLayoutCharacterSheet: FC<{
  character: Character;
}> = ({ character }) => {
  return (
    <Stack spacing={2} width={"80%"} height={"100%"}>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <img
            src={inventory}
            alt=""
            style={{ maxWidth: 350, maxHeight: 500 }}
          />
        </Box>
        <Box width={"30%"}>
          <img src={notes} alt="" style={{ maxWidth: 270, maxHeight: 500 }} />
        </Box>
        <Stack width="30%">
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              flexGrow: 1,
              border: `1px solid ${pdfBorderColor}`,
            }}
          >
            <Stack height={"100%"}>
              <Typography
                marginBottom={2}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Bond
              </Typography>
              <Typography justifySelf={"center"}>{character.bond}</Typography>
            </Stack>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              marginTop: 2,
              flexGrow: 1,
              border: `1px solid ${pdfBorderColor}`,
            }}
          >
            <Stack height={"100%"}>
              <Typography
                marginBottom={2}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Omen
              </Typography>
              <Typography justifySelf={"center"}>{character.omen}</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={2}
        marginTop={2}
        justifyContent={"space-between"}
      >
        <TraitsCard traits={character.traits} isExport />
        <Stack>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              border: `1px solid ${pdfBorderColor}`,
            }}
          >
            <Stack justifyContent={"space-between"} spacing={1}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {character.background.tables[0].question}
              </Typography>
              <Typography>{character.background.tables[0].answer}</Typography>
            </Stack>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              marginTop: 2,
              border: `1px solid ${pdfBorderColor}`,
            }}
          >
            <Stack justifyContent={"space-between"} spacing={1}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {character.background.tables[1].question}
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <Typography fontWeight={"bold"}>
                  {character.background.tables[1].answer.name}:
                </Typography>
                <Typography>
                  {character.background.tables[1].answer.description}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
};
