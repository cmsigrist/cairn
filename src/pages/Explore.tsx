import { FC } from "react";
import cairn from "../resources/cairn.svg";
import { Box, Button, Fade, Grid, Stack, Typography } from "@mui/material";
import { width } from "../styles/theme";
import { BackgroundEnum } from "../types/backgroundEnum";
import { Link } from "react-router-dom";
import {
  ROUTE_EXPLORE_BACKGROUND,
  ROUTE_EXPLORE_BONDS,
  ROUTE_EXPLORE_OMENS,
  ROUTE_EXPLORE_TRAITS,
} from "../utils/routes";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Explore: FC = () => {
  const backgrounds = Object.values(BackgroundEnum).filter(
    (value) => typeof value === "string"
  ) as string[];
  return (
    <Fade in>
      <Stack direction={"row"} width={width} marginTop={10}>
        <Box justifySelf="flex-start">
          <img src={cairn} alt="" style={{ width: 430 }} />
        </Box>
        <Stack marginLeft={10}>
          <Typography variant="h5" marginBottom={1}>
            Explore Backgrounds:
          </Typography>
          <Grid marginLeft={2} container direction="column" height={"50%"}>
            {backgrounds.map((background, i) => (
              <Grid item key={i} xs={1}>
                <Link
                  to={ROUTE_EXPLORE_BACKGROUND(i + 1)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button startIcon={<ArrowForwardIosIcon />}>
                    {background.replace("_", " ")}
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Stack marginTop={4}>
            <Link
              to={ROUTE_EXPLORE_BONDS}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                startIcon={<ArrowForwardIosIcon />}
                sx={{ textTransform: "none" }}
              >
                <Typography variant="h5">Explore Bonds</Typography>
              </Button>
            </Link>
            <Link
              to={ROUTE_EXPLORE_OMENS}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                startIcon={<ArrowForwardIosIcon />}
                sx={{ textTransform: "none" }}
              >
                <Typography variant="h5">Explore Omens</Typography>
              </Button>
            </Link>
            <Link
              to={ROUTE_EXPLORE_TRAITS}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                startIcon={<ArrowForwardIosIcon />}
                sx={{ textTransform: "none" }}
              >
                <Typography variant="h5">Explore Traits</Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
};

export default Explore;
