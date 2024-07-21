import { FC } from "react";
import {
  Clothing,
  Face,
  Hair,
  Physique,
  Skin,
  Speech,
  Traits,
  Vice,
  Virtue,
} from "../../types/traits";
import { Paper, Stack, Typography, Box, Divider } from "@mui/material";
import { pdfBorderColor } from "../../styles/theme";

const TraitsCard: FC<{ traits: Traits; isExport?: boolean }> = ({
  traits,
  isExport = false,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        minWidth: 180,
        marginTop: 2,
        border: isExport ? `1px solid ${pdfBorderColor}` : undefined,
      }}
    >
      <Stack height={"100%"}>
        <Typography marginBottom={2} textAlign={"center"} fontWeight={"bold"}>
          Traits
        </Typography>
        <Stack spacing={1}>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Physique:</Typography>
              <Typography>{Physique[traits.physique]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Skin:</Typography>
              <Typography>{Skin[traits.skin]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Hair:</Typography>
              <Typography>{Hair[traits.hair]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Face:</Typography>
              <Typography>{Face[traits.face]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Speech:</Typography>
              <Typography>{Speech[traits.speech]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Clothing:</Typography>
              <Typography>{Clothing[traits.clothing]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Virtue:</Typography>
              <Typography>{Virtue[traits.virtue]}</Typography>
            </Stack>
            <Divider />
          </Box>
          <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Vice:</Typography>
              <Typography>{Vice[traits.vice]}</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default TraitsCard;
