import { Paper, Stack, Box, Typography, Divider } from "@mui/material";
import { FC } from "react";
import { pdfBorderColor } from "../../styles/theme";

const InventoryCard: FC<{ inventory: string[]; hideItems: boolean }> = ({
  inventory,
  hideItems,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        minWidth: "35%",
        marginTop: 2,
        border: `1px solid ${pdfBorderColor}`,
      }}
    >
      <Stack direction={"row"}>
        <Stack height={"100%"} justifyContent={"space-between"} flexGrow={1}>
          <Box>
            <Typography
              marginBottom={2}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Inventory
            </Typography>
            <Box>
              {Array.from(Array(10).keys()).map((i) => (
                <Stack key={i}>
                  <Stack direction="row" spacing={1}>
                    <Typography fontWeight={"bold"}>{i + 1}</Typography>
                    <Typography>
                      {i < inventory.length && !hideItems && `${inventory[i]}`}
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />
        <Stack
          direction="row"
          alignItems={"center"}
          marginRight={-2}
          flexGrow={0}
        >
          <Stack marginTop={5}>
            <Box>
              {Array.from(Array(10).keys()).map((i) => (
                <Stack key={i}>
                  <Typography>O</Typography>
                  <Divider />
                </Stack>
              ))}
            </Box>
          </Stack>
          <Typography sx={{ transform: "rotate(90deg)" }} fontWeight="bold">
            Fatigue
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default InventoryCard;
