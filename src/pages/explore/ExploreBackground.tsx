import { FC, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Fade,
} from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import { AllBackgrounds } from "../../types/backgrounds";
import {
  getBackgroundEnumFromIndex,
  getBackgroundName,
} from "../../utils/background";
import { ROUTE_ROLL_BACKGROUND } from "../../utils/routes";

const ExploreBackground: FC = () => {
  const { background } = useParams();
  const navigate = useNavigate();

  const backgroundEnum = useMemo(() => {
    if (background) {
      return getBackgroundEnumFromIndex(Number.parseInt(background));
    }
  }, [background]);

  const characterBackground = useMemo(() => {
    if (backgroundEnum) {
      return AllBackgrounds[backgroundEnum];
    } else {
      navigate("/404");
    }
  }, [backgroundEnum, navigate]);

  const backgroundName = useMemo(() => {
    if (characterBackground) {
      return getBackgroundName(characterBackground.name);
    }
    return "";
  }, [characterBackground]);

  const handleClick = useCallback(() => {
    if (backgroundEnum) {
      navigate(ROUTE_ROLL_BACKGROUND(backgroundEnum));
    }
  }, [backgroundEnum, navigate]);

  return (
    <>
      {characterBackground !== undefined && (
        <Fade in>
          <Stack marginY={4} width={"100%"}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h2">{backgroundName}</Typography>
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<CasinoIcon />}
                  onClick={handleClick}
                >
                  {`Roll ${backgroundName}`}
                </Button>
              </Box>
            </Stack>

            <Stack marginTop={2} direction={"row"} spacing={8} width={"100%"}>
              <Stack>
                <Typography sx={{ maxWidth: 500 }}>
                  {characterBackground.description}
                </Typography>
                <Box>
                  <img
                    src={`${process.env.PUBLIC_URL}/backgrounds/${characterBackground.img}`}
                    alt=""
                    style={{ maxHeight: 700 }}
                  />
                </Box>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, maxWidth: 500, marginY: 2 }}
                >
                  <Stack direction="row">
                    <Stack height={"100%"} spacing={2} width={"50%"}>
                      <Box>
                        <Typography
                          marginBottom={2}
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          Starting Items
                        </Typography>
                        <Box>
                          <Typography>
                            {`• ${characterBackground.startingGold.number}d${characterBackground.startingGold.die} Gold Pieces`}{" "}
                          </Typography>
                          {characterBackground.startingGears.map((item, i) => (
                            <Typography key={i}>• {item}</Typography>
                          ))}
                        </Box>
                      </Box>
                    </Stack>
                    <Stack height={"100%"} spacing={2} width={"50%"}>
                      <Typography
                        textAlign={"center"}
                        fontWeight="bold"
                        marginBottom={2}
                      >
                        Names
                      </Typography>
                      <Stack direction="row" justifyContent={"space-evenly"}>
                        <Box>
                          {characterBackground.playerNames
                            .slice(0, 5)
                            .map((name, i) => (
                              <Typography key={i}>• {name}</Typography>
                            ))}
                        </Box>
                        <Box>
                          {characterBackground.playerNames
                            .slice(5, 10)
                            .map((name, i) => (
                              <Typography key={i}>• {name}</Typography>
                            ))}
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>

              <Stack spacing={4}>
                <Paper sx={{ width: "100%" }}>
                  <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left" colSpan={1}>
                            <Typography fontWeight={"bold"}>d6</Typography>
                          </TableCell>
                          <TableCell align="center" colSpan={2}>
                            <Typography fontWeight={"bold"}>
                              {characterBackground.tables[0].question}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {characterBackground.tables[0].answers.map(
                          (answer, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                <TableCell align={"left"}>
                                  <Typography fontWeight={"bold"}>
                                    {i + 1}
                                  </Typography>
                                </TableCell>
                                <TableCell align={"left"}>{answer}</TableCell>
                              </TableRow>
                            );
                          }
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>

                <Paper sx={{ width: "100%" }}>
                  <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left" colSpan={1}>
                            <Typography fontWeight={"bold"}>d6</Typography>
                          </TableCell>
                          <TableCell align="center" colSpan={2}>
                            <Typography fontWeight={"bold"}>
                              {characterBackground.tables[1].question}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {characterBackground.tables[1].answers.map(
                          ({ name, description }, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                <TableCell align={"left"}>
                                  <Typography fontWeight={"bold"}>
                                    {i + 1}
                                  </Typography>
                                </TableCell>
                                <TableCell align={"left"}>
                                  <Typography fontWeight={"bold"}>
                                    {name}
                                  </Typography>
                                </TableCell>
                                <TableCell align={"left"}>
                                  {description}
                                </TableCell>
                              </TableRow>
                            );
                          }
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Stack>
            </Stack>
          </Stack>
        </Fade>
      )}
    </>
  );
};

export default ExploreBackground;
