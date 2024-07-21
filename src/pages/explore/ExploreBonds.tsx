import { FC } from "react";
import DoubleTable from "./table/DoubleTable";
import { Bonds } from "../../types/bonds";
import { Die } from "../../types/die";
import { Stack, Typography } from "@mui/material";

const ExploreBonds: FC = () => {
  return (
    <Stack marginY={4}>
      <Typography textAlign={"center"} marginBottom={2} variant="h2">
        Bonds
      </Typography>
      <DoubleTable rows={Bonds} title="Bonds" split={Die.d20} />
    </Stack>
  );
};

export default ExploreBonds;
