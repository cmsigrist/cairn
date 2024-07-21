import { FC, useState } from "react";
import { Character } from "../../types/character";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import ExportedCharacterSheet from "./ExportedCharacterSheet";
import { Margin, usePDF } from "react-to-pdf";
import { BackgroundEnum } from "../../types/backgroundEnum";
import generatePDF from "react-to-pdf";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const ExportCharacterSheetDialog: FC<{
  open: boolean;
  handleClose: () => void;
  character: Character;
}> = ({ open, handleClose, character }) => {
  const [saveWithBlankItems, setSaveWithBlankItems] = useState(false);
  const [saving, setIsSaving] = useState(false);
  let dateTime = new Date();
  const { targetRef } = usePDF({
    filename: `${BackgroundEnum[character.background.name].replace(
      "_",
      " "
    )}_${dateTime}`,
    page: { orientation: "landscape", margin: Margin.SMALL },
  });

  const handleDownload = async () => {
    setIsSaving(true);
    await generatePDF(targetRef, {
      filename: `${BackgroundEnum[character.background.name].replace(
        "_",
        " "
      )}_${dateTime}`,
      page: { orientation: "landscape", margin: Margin.SMALL },
    });
    setIsSaving(false);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={"xl"}
    >
      <DialogTitle id="alert-dialog-title">Export Character Sheet</DialogTitle>
      <DialogContent>
        <FormGroup sx={{ marginLeft: 4 }}>
          <FormControlLabel
            control={
              <Switch
                checked={saveWithBlankItems}
                onChange={() => setSaveWithBlankItems(!saveWithBlankItems)}
              />
            }
            label="Export Without Inventory Items"
          />
        </FormGroup>
        <ExportedCharacterSheet
          targetRef={targetRef}
          character={character}
          saveWithBlankItems={saveWithBlankItems}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>

        <LoadingButton
          loading={saving}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
          onClick={handleDownload}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ExportCharacterSheetDialog;
