import armor from "../../../resources/armor.png";
import deprived from "../../../resources/deprived.png";
import dex from "../../../resources/dex.png";
import wil from "../../../resources/wil.png";
import str from "../../../resources/str.png";
import hp from "../../../resources/hp.png";
import gold from "../../../resources/gold.png";
import { Box, Stack } from "@mui/material";

export const Stats = () => {
  return (
    <Stack alignItems={"center"}>
      <Stack direction={"row"}>
        <img src={str} alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
        <img src={dex} alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
        <img src={wil} alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
      </Stack>
      <Stack direction={"row"}>
        <img src={armor} alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
        <img src={hp} alt="" style={{ maxWidth: "100%", maxHeight: 200 }} />
        <img
          src={deprived}
          alt=""
          style={{ maxWidth: "100%", maxHeight: 200 }}
        />
      </Stack>
      <Box>
        <img src={gold} alt="" style={{ maxWidth: "100%", maxHeight: 150 }} />
      </Box>
    </Stack>
  );
};
