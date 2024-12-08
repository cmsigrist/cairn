import { Grid, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Attributes } from "../../types/attributes";
import { pdfBorderColor } from "../../styles/theme";

const StatsCard: FC<{
  attributes: Attributes;
  hitProtection: number;
  width?: number | string;
  height?: number | string;
}> = ({ attributes, hitProtection, width, height }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width,
            height,
          }}
        >
          <Stack height={"100%"} justifyContent={"space-between"}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              STR
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h4">
              {attributes.strength}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width,
            height,
          }}
        >
          <Stack height={"100%"} justifyContent={"space-between"}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              DEX
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h4">
              {attributes.dexterity}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width,
            height,
          }}
        >
          <Stack height={"100%"} justifyContent={"space-between"}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              WIL
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h4">
              {attributes.willpower}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width,
            height,
          }}
        >
          <Stack height={"100%"} justifyContent={"space-between"}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              HP
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"} variant="h4">
              {hitProtection}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatsCard;
