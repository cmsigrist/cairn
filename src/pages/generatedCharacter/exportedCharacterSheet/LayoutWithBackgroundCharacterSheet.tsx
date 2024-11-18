import { FC } from "react";
import { Character } from "../../../types/character";
import { Stack, Box, Paper, Typography } from "@mui/material";
import { pdfBorderColor } from "../../../styles/theme";
import TraitsCard from "../TraitsCard";
import inventory from "../../../resources/inventory.png";
import notes from "../../../resources/notes.png";
import crow from "../../../resources/crow_with_book.png";

export const LayoutWithBackgroundCharacterSheet: FC<{
  character: Character;
}> = ({ character }) => {
  return (
    <Stack direction="row" spacing={3} width={"80%"} height={"100%"}>
      <Stack justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <img src={inventory} alt="" style={{ maxWidth: 350 }} />
        </Box>
        <Box>
          <img src={notes} alt="" style={{ maxWidth: 270, maxHeight: 500 }} />
        </Box>
      </Stack>

      <Stack alignItems={"center"} paddingBottom={2}>
        <Box position={"absolute"}>
          <img src={crow} alt="" style={{ width: "572px", height: "215px" }} />
        </Box>

        <Stack
          spacing={2}
          justifyContent={"flex-end"}
          height={"100%"}
          position={"relative"}
        >
          <Stack direction={"row"} spacing={2}>
            <TraitsCard traits={character.traits} isExport />
            <Stack>
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
                  <Typography justifySelf={"center"}>
                    {character.bond}
                  </Typography>
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
                  <Typography justifySelf={"center"}>
                    {character.omen}
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Stack>

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
    </Stack>
  );
};
