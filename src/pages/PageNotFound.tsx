import { Stack, Typography, Divider, Box, Button } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { width, theme } from "../styles/theme";
import { ROUTE_HOME } from "../utils/routes";
import lost from "../resources/cairn.svg"
const PageNotFound: FC = () => {
  return (
    <Stack
      width={width}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img src={lost} alt="" style={{ width: 400 }} />

      <Stack direction={"column"} marginLeft={4}>
        <Typography variant="h3" fontWeight={"bold"}>
          Page not found
        </Typography>
        <Typography color={theme.palette.grey[700]} marginBottom={5}>
          The page you are looking for does not exist.
        </Typography>
        <NavLink to={ROUTE_HOME} style={{ textDecoration: "none" }}>
          <Button variant="contained">Go Home</Button>
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default PageNotFound;
