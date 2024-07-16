// React
import { FC } from "react";
// MUI
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Stack
      alignItems={"center"}
      sx={{
        width: "100%",
        paddingY: 3,
        backgroundColor: theme.palette.primary.main,
        mt: "auto",
      }}
    >
      <Link
        href="https://cairnrpg.com/"
        target="_blank"
        color={theme.palette.secondary.main}
      >
        https://cairnrpg.com/
      </Link>
    </Stack>
  );
};

export default Footer;
