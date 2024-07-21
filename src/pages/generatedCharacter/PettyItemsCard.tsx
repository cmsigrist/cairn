import { Paper, Stack, Box, Typography, Divider } from "@mui/material";
import { FC } from "react";
import { pdfBorderColor } from "../../styles/theme";

const PettyItemsCard: FC<{
  pettyItems: string[];
  goldPieces: number;
  hideItems: boolean;
}> = ({ pettyItems, goldPieces, hideItems }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        width: "25%",
        marginTop: 2,
        border: `1px solid ${pdfBorderColor}`,
      }}
    >
      <Stack height={"100%"} justifyContent={"space-between"}>
        <Box>
          <Typography marginBottom={2} textAlign={"center"} fontWeight={"bold"}>
            Petty Items
          </Typography>
          <Box>
            {Array.from(Array(7).keys()).map((i) => (
              <Stack key={i}>
                <Stack direction="row" spacing={1}>
                  <Typography fontWeight={"bold"}>{i + 1}</Typography>
                  <Typography>
                    {i < pettyItems.length && !hideItems && `${pettyItems[i]}`}
                  </Typography>
                </Stack>
                <Divider />
              </Stack>
            ))}
          </Box>
        </Box>

        <Stack direction="row" marginTop={2} alignItems={"center"}>
          <Typography
            fontWeight="bold"
            variant="h6"
            flexShrink={0}
            sx={{ marginRight: 1 }}
          >
            Gold:
          </Typography>
          {!hideItems && <Typography variant="h6">{goldPieces}</Typography>}
          {hideItems && (
            <Stack width={"50%"} marginTop={1}>
              <Divider />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PettyItemsCard;
