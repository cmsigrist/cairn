import { Box, ButtonBase, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import character_creation from "../resources/character_creation.png";
import explore_characters from "../resources/explore.png";

import { useNavigate } from "react-router-dom";
import { ROUTE_EXPLORE, ROUTE_GENERATE } from "../utils/routes";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.25,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "70%",
        }}
      >
        <ImageButton
          focusRipple
          style={{
            width: "100%",
          }}
          onClick={() => navigate(ROUTE_GENERATE)}
        >
          <ImageSrc style={{ backgroundImage: `url(${character_creation})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Generate Character
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "30%",
        }}
      >
        <ImageButton
          focusRipple
          style={{
            width: "100%",
          }}
          onClick={() => navigate(ROUTE_EXPLORE)}
        >
          <ImageSrc style={{ backgroundImage: `url(${explore_characters})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Explore Cairn
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
    </Stack>
  );
};

export default Home;
