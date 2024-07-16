import { FC } from "react";
import { Character } from "../types/character";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { BackgroundEnum } from "../types/backgroundEnum";
import {
  Clothing,
  Face,
  Hair,
  Physique,
  Skin,
  Speech,
  Virtue,
  Vice,
} from "../types/traits";

const GeneratedCharacter: FC<{
  character: Character;
  // isGenerating: boolean;
}> = ({ character }) => {
  return (
    <Stack marginY={4}>
      <Typography variant="h2">
        {BackgroundEnum[character.background.name].replace("_", " ")}
      </Typography>

      <Stack marginTop={2} direction={"row"} spacing={8}>
        <Stack>
          <Typography sx={{ maxWidth: 500 }}>
            {character.background.description}
          </Typography>
          <Box>
            <img
              src={character.background.img}
              alt=""
              style={{ maxHeight: 700 }}
            />
          </Box>
        </Stack>

        <Stack>
          <Stack direction="row" marginBottom={2}>
            <Typography fontWeight="bold">Name:</Typography>
            <Typography marginLeft={1}>
              {character.background.playerName}
            </Typography>
            <Typography marginLeft={4} fontWeight="bold">
              Age:
            </Typography>
            <Typography marginLeft={1}>{character.age}</Typography>
          </Stack>

          <Grid container spacing={2}>
            <Grid item>
              <Paper elevation={3} sx={{ padding: 2, width: 50, height: 70 }}>
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    STR
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h4"
                  >
                    {character.attributes.strength}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} sx={{ padding: 2, width: 50, height: 70 }}>
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    DEX
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h4"
                  >
                    {character.attributes.dexterity}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} sx={{ padding: 2, width: 50, height: 70 }}>
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    WIL
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h4"
                  >
                    {character.attributes.willpower}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} sx={{ padding: 2, width: 50, height: 70 }}>
                <Stack height={"100%"} justifyContent={"space-between"}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    HP
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h4"
                  >
                    {character.hitProtection}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

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
                    {character.background.startingGears.map((item, i) => (
                      <Typography key={i}>• {item}</Typography>
                    ))}
                  </Box>
                </Box>

                <Stack direction="row" spacing={1} marginBottom={2}>
                  <Typography fontWeight="bold" variant="h6">
                    Gold:
                  </Typography>
                  <Typography variant="h6">
                    {character.background.startingGold}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
            <Paper
              elevation={3}
              sx={{ padding: 2, minWidth: 180, marginTop: 2 }}
            >
              <Stack height={"100%"}>
                <Typography
                  marginBottom={2}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Traits
                </Typography>
                <Stack spacing={1}>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Physique:</Typography>
                      <Typography>
                        {Physique[character.traits.physique]}
                      </Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Skin:</Typography>
                      <Typography>{Skin[character.traits.skin]}</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Hair:</Typography>
                      <Typography>{Skin[character.traits.hair]}</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Face:</Typography>
                      <Typography>{Face[character.traits.face]}</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Speech:</Typography>
                      <Typography>{Speech[character.traits.speech]}</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Clothing:</Typography>
                      <Typography>
                        {Clothing[character.traits.clothing]}
                      </Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Virtue:</Typography>
                      <Typography>{Virtue[character.traits.virtue]}</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <Box>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>Vice:</Typography>
                      <Typography>{Vice[character.traits.vice]}</Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
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
                  <Typography>{character.bond}</Typography>
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
                  <Typography>{character.omen}</Typography>
                </Stack>
              </Paper>
            </Stack>
          </Stack>

          <Stack>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
              <Stack justifyContent={"space-between"} spacing={1}>
                <Typography textAlign={"center"} fontWeight={"bold"}>
                  {character.background.tables[0].question}
                </Typography>
                <Typography>{character.background.tables[0].answer}</Typography>
              </Stack>
            </Paper>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
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

export default GeneratedCharacter;
