import { FC } from "react";
import { Character } from "../../types/character";
import {
  Stack,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { BackgroundEnum } from "../../types/backgroundEnum";
import logo from "../../resources/Cairn-2e-Compatible.jpg";
import TraitsCard from "./TraitsCard";
import StatsCard from "./StatsCard";
import InventoryCard from "./InventoryCard";
import PettyItemsCard from "./PettyItemsCard";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { pdfBorderColor } from "../../styles/theme";

const ExportedCharacterSheet: FC<{
  character: Character;
  saveWithBlankItems: boolean;
  targetRef: React.MutableRefObject<any>;
}> = ({ character, saveWithBlankItems, targetRef }) => {
  const a4Width = 296;
  const a4Height = 210; // 200
  const a4Padding = 5; // 5
  const ratio = 1.2;
  const inventory = character.background.startingGears.filter(
    (item) => !item.includes("petty")
  );
  const pettyItems = character.background.startingGears.filter((item) =>
    item.includes("petty")
  );

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
        <Stack width={"50%"} height={"100%"} justifyContent={"space-between"}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logo} alt="" style={{ width: 85 }} />
          </Box>
          <Stack direction="row" marginTop={2}>
            <Typography fontWeight="bold">Background:</Typography>
            <Typography marginLeft={1}>
              {BackgroundEnum[character.background.name].replace("_", " ")}
            </Typography>
          </Stack>
          <Typography>{character.background.description}</Typography>
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
          <Box marginBottom={2}>
            <img
              src={character.background.img}
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <StatsCard
            attributes={character.attributes}
            hitProtection={character.hitProtection}
            isExport
          />
        </Stack>

        <Stack justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <PettyItemsCard
              pettyItems={pettyItems}
              goldPieces={character.background.startingGold}
              hideItems={saveWithBlankItems}
            />
            <InventoryCard
              inventory={inventory}
              hideItems={saveWithBlankItems}
            />
            <Stack minWidth={"35%"}>
              <Stack direction={"row"} marginBottom={2} spacing={1}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    width: "50%",
                    border: `1px solid ${pdfBorderColor}`,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent="space-evenly"
                  >
                    <Typography sx={{ marginTop: 0.6 }} fontWeight={"bold"}>
                      Deprived:
                    </Typography>
                    <CropSquareIcon />
                  </Stack>
                </Paper>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    width: "50%",
                    border: `1px solid ${pdfBorderColor}`,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent="space-evenly"
                  >
                    <Typography
                      sx={{ marginTop: 0.6, marginRight: 1 }}
                      fontWeight={"bold"}
                    >
                      Armor:
                    </Typography>
                    <Box width="100%" marginTop={2}>
                      <Divider />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  flexGrow: 1,
                  minWidth: "35%",
                  border: `1px solid ${pdfBorderColor}`,
                }}
              >
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography
                    marginBottom={2}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Notes
                  </Typography>
                  <Box>
                    {Array.from(Array(7).keys()).map((i) => (
                      <Stack key={i} marginTop={3}>
                        <Divider />
                      </Stack>
                    ))}
                  </Box>
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
                  flexGrow: 1,
                  border: `1px solid ${pdfBorderColor}`,
                }}
              >
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography
                    marginBottom={2}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Bond
                  </Typography>
                  <Typography>{character.bond}</Typography>
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
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography
                    marginBottom={2}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    Omen
                  </Typography>
                  <Typography>{character.omen}</Typography>
                </Stack>
              </Paper>
            </Stack>
          </Stack>
          <Stack>
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
    </Paper>
  );
};

export default ExportedCharacterSheet;
