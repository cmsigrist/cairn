import { FC } from "react";
import { Character } from "../types/character";
import { Box, Paper, Stack, Typography } from "@mui/material";
import TraitsCard from "./rolledCharacter/TraitsCard";
import StatsCard from "./rolledCharacter/StatsCard";

const RolledCharacter: FC<{
  character: Character;
  showOmen: boolean;
}> = ({ character, showOmen }) => {
  return (
    <Stack marginTop={2} direction={"row"} spacing={8}>
      <Stack>
        <Typography sx={{ maxWidth: 500 }}>
          {character.background.description}
        </Typography>
        <Box>
          <img
            src={`${process.env.PUBLIC_URL}/backgrounds/${character.background.img}`}
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

        <StatsCard
          attributes={character.attributes}
          hitProtection={character.hitProtection}
          width={50}
          height={70}
        />

        <Stack
          direction={"row"}
          spacing={2}
          marginTop={2}
          justifyContent={"space-between"}
        >
          <Paper elevation={3} sx={{ padding: 2, minWidth: 250, marginTop: 2 }}>
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
                  Gold Pieces:
                </Typography>
                <Typography variant="h6">
                  {character.background.startingGold}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
          <TraitsCard traits={character.traits} />
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
            {showOmen && (
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
            )}
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
  );
};

export default RolledCharacter;
