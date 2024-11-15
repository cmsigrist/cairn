import { FC, useCallback, useState } from "react";
import { Character } from "../types/character";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { BackgroundEnum } from "../types/backgroundEnum";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import React from "react";
import TraitsCard from "./generatedCharacter/TraitsCard";
import StatsCard from "./generatedCharacter/StatsCard";
import ExportCharacterSheetDialog from "./generatedCharacter/ExportCharacterSheetDialog";

const GeneratedCharacter: FC<{
  character: Character;
  generateCharacter: () => Character;
}> = ({ character, generateCharacter }) => {
  const [open, setOpen] = React.useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(character)

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleGenerateCharacter = useCallback(() => {
    setCurrentCharacter(generateCharacter())
  }, [setCurrentCharacter])

  return (
    <>
      <ExportCharacterSheetDialog
        open={open}
        handleClose={handleClose}
        character={currentCharacter}
      />
      <Stack marginY={4}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="h2">
            {BackgroundEnum[currentCharacter.background.name].replace("_", " ")}
          </Typography>
          <Stack direction="row" spacing={2}>
          <Box>
              <Button
                variant="outlined"
                startIcon={<AutorenewIcon />}
                onClick={handleGenerateCharacter}
              >
                Generate
              </Button>
            </Box>
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

        <Stack marginTop={2} direction={"row"} spacing={8}>
          <Stack>
            <Typography sx={{ maxWidth: 500 }}>
              {currentCharacter.background.description}
            </Typography>
            <Box>
              <img
                src={`${process.env.PUBLIC_URL}/backgrounds/${currentCharacter.background.img}`}
                alt=""
                style={{ maxHeight: 700 }}
              />
            </Box>
          </Stack>

          <Stack>
            <Stack direction="row" marginBottom={2}>
              <Typography fontWeight="bold">Name:</Typography>
              <Typography marginLeft={1}>
                {currentCharacter.background.playerName}
              </Typography>
              <Typography marginLeft={4} fontWeight="bold">
                Age:
              </Typography>
              <Typography marginLeft={1}>{currentCharacter.age}</Typography>
            </Stack>

            <StatsCard
              attributes={currentCharacter.attributes}
              hitProtection={currentCharacter.hitProtection}
              width={50}
              height={70}
            />

            <Stack
              direction={"row"}
              spacing={2}
              marginTop={2}
              justifyContent={"space-between"}
            >
              <Paper
                elevation={3}
                sx={{ padding: 2, minWidth: 250, marginTop: 2 }}
              >
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Box>
                    <Typography
                      marginBottom={2}
                      textAlign={"center"}
                      fontWeight={"bold"}
                    >
                      Starting Items
                    </Typography>
                    <Box>
                      {currentCharacter.background.startingGears.map((item, i) => (
                        <Typography key={i}>• {item}</Typography>
                      ))}
                    </Box>
                  </Box>

                  <Stack direction="row" spacing={1} marginBottom={2}>
                    <Typography fontWeight="bold" variant="h6">
                      Gold Pieces:
                    </Typography>
                    <Typography variant="h6">
                      {currentCharacter.background.startingGold}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <TraitsCard traits={currentCharacter.traits} />
              <Stack>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Stack height={"100%"} justifyContent={"space-between"}>
                    <Typography
                      marginBottom={2}
                      textAlign={"center"}
                      fontWeight={"bold"}
                    >
                      Bond
                    </Typography>
                    <Typography>{currentCharacter.bond}</Typography>
                  </Stack>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                  <Stack height={"100%"} justifyContent={"space-between"}>
                    <Typography
                      marginBottom={2}
                      textAlign={"center"}
                      fontWeight={"bold"}
                    >
                      Omen
                    </Typography>
                    <Typography>{currentCharacter.omen}</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Stack>

            <Stack>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                <Stack justifyContent={"space-between"} spacing={1}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    {currentCharacter.background.tables[0].question}
                  </Typography>
                  <Typography>
                    {currentCharacter.background.tables[0].answer}
                  </Typography>
                </Stack>
              </Paper>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                <Stack justifyContent={"space-between"} spacing={1}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    {currentCharacter.background.tables[1].question}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography fontWeight={"bold"}>
                      {currentCharacter.background.tables[1].answer.name}:
                    </Typography>
                    <Typography>
                      {currentCharacter.background.tables[1].answer.description}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default GeneratedCharacter;
