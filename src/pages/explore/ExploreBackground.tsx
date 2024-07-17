import { FC, Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundEnum } from "../../types/backgroundEnum";
import { Stack, Typography, Box, Paper, Grid } from "@mui/material";
import { AllBackgrounds, BackgroundOptions } from "../../types/backgrounds";

const ExploreBackground: FC = () => {
  const { background } = useParams();
  const navigate = useNavigate();
  const [characterBackground, setCharacterBackground] = useState<
    BackgroundOptions | undefined
  >(undefined);

  useEffect(() => {
    const isValid =
      background !== undefined &&
      Number.parseInt(background) >= 1 &&
      Number.parseInt(background) <= 20;
    if (isValid) {
      setCharacterBackground(AllBackgrounds[Number.parseInt(background)]);
    } else {
      navigate("/404");
    }
  }, [background]);

  return (
    <>
      {characterBackground !== undefined && (
        <Stack marginY={4} width={"100%"}>
          <Typography variant="h2">
            {BackgroundEnum[characterBackground.name].replace("_", " ")}
          </Typography>

          <Stack marginTop={2} direction={"row"} spacing={8} width={"100%"}>
            <Stack>
              <Typography sx={{ maxWidth: 500 }}>
                {characterBackground.description}
              </Typography>
              <Box>
                <img
                  src={characterBackground.img}
                  alt=""
                  style={{ maxHeight: 700 }}
                />
              </Box>
              <Paper
                elevation={3}
                sx={{ padding: 2, maxWidth: 500, marginTop: 2 }}
              >
                <Typography
                  textAlign={"center"}
                  fontWeight="bold"
                  marginBottom={2}
                >
                  Names
                </Typography>
                <Stack
                  justifyContent={"center"}
                  direction="row"
                  marginBottom={2}
                  width={"100%"}
                  spacing={1}
                  flexWrap="wrap"
                >
                  {characterBackground.playerNames.map((name, i) => (
                    <Typography>{`${name}${
                      i !== characterBackground.playerNames.length - 1
                        ? ", "
                        : " "
                    }`}</Typography>
                  ))}
                </Stack>
                <Stack height={"100%"} spacing={2}>
                  <Box>
                    <Typography
                      marginBottom={2}
                      textAlign={"center"}
                      fontWeight={"bold"}
                    >
                      Starting Items
                    </Typography>
                    <Box>
                      {characterBackground.startingGears.map((item, i) => (
                        <Typography key={i}>• {item}</Typography>
                      ))}
                    </Box>
                  </Box>

                  <Stack direction="row" spacing={1} marginBottom={2}>
                    <Typography fontWeight="bold" variant="h6">
                      Gold:
                    </Typography>
                    <Typography variant="h6">{`${characterBackground.startingGold.number}d${characterBackground.startingGold.die}`}</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>

            <Stack>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Stack justifyContent={"space-between"} spacing={1}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    {characterBackground.tables[0].question} (d6)
                  </Typography>
                  <Grid container rowSpacing={1}>
                    {characterBackground.tables[0].answers.map((answer, i) => (
                      <Fragment key={i}>
                        <Grid item xs={1}>
                          <Typography fontWeight={"bold"}>{i + 1}</Typography>
                        </Grid>
                        <Grid item xs={11}>
                          <Typography>{answer}</Typography>
                        </Grid>
                      </Fragment>
                    ))}
                  </Grid>
                </Stack>
              </Paper>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                <Stack justifyContent={"space-between"} spacing={1}>
                  <Typography textAlign={"center"} fontWeight={"bold"}>
                    {characterBackground.tables[1].question} (d6)
                  </Typography>
                  <Grid container rowSpacing={1}>
                    {characterBackground.tables[1].answers.map((answer, i) => (
                      <Fragment key={i}>
                        <Grid item xs={1}>
                          <Typography fontWeight={"bold"}>{i + 1}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography fontWeight={"bold"}>
                            {answer.name}:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography>{answer.description}</Typography>
                        </Grid>
                      </Fragment>
                    ))}
                  </Grid>
                </Stack>
              </Paper>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ExploreBackground;
