import { FC, useCallback, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BackgroundEnum } from "../types/backgroundEnum";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import React from "react";
import ExportCharacterSheetDialog from "./generatedCharacter/ExportCharacterSheetDialog";
import { generateCharacter } from "../utils/roll";
import GeneratedCharacter from "./GeneratedCharacter";

const GenerateCharacter: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [character, setCharacter] = useState(generateCharacter());

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
    setCharacter(generateCharacter());
  }, [setCharacter]);

  return (
    <>
      <ExportCharacterSheetDialog
        open={open}
        handleClose={handleClose}
        character={character}
      />
      <Stack
        direction="row"
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignSelf={"center"}
      >
        <Stack marginY={4}>
          <Stack direction="row" justifyContent={"space-between"}>
            <Typography variant="h2">
              {BackgroundEnum[character.background.name].replace(
                "_",
                " "
              )}
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

          <GeneratedCharacter character={character} />
        </Stack>
      </Stack>
    </>
  );
};

export default GenerateCharacter;
