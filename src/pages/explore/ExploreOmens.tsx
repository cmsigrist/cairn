import { FC } from "react";
import { Omens } from "../../types/omens";
import DoubleTable from "./table/DoubleTable";
import { Die } from "../../types/die";
import { Stack, Typography } from "@mui/material";

const ExploreOmens: FC = () => {
  return (
    <Stack marginY={4}>
      <Typography textAlign={"center"} marginBottom={2} variant="h2">
        Omens
      </Typography>
      <DoubleTable rows={Omens} title="Omens" split={Die.d20} />
    </Stack>
  );
};

export default ExploreOmens;
