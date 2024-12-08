import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Die } from "../../types/die";
import DoubleTable from "./table/DoubleTable";
import {
  Clothing,
  Face,
  Hair,
  Physique,
  Skin,
  Speech,
  Vice,
  Virtue,
} from "../../types/traits";

const ExploreTraits: FC = () => {
  return (
    <Stack marginY={4} width={"100%"}>
      <Typography textAlign={"center"} marginBottom={2} variant="h2">
        Traits
      </Typography>

      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Stack spacing={4}>
          <DoubleTable
            rows={
              Object.values(Physique).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Physique"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Skin).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Skin"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Hair).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Hair"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Face).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Face"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
        </Stack>
        <Stack spacing={4}>
          <DoubleTable
            rows={
              Object.values(Speech).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Speech"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Clothing).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Clothing"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Virtue).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Virtue"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
          <DoubleTable
            rows={
              Object.values(Vice).filter(
                (value) => typeof value === "string"
              ) as string[]
            }
            title="Vice"
            split={Die.d10}
            divideTable={false}
            minWidth={600}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExploreTraits;
