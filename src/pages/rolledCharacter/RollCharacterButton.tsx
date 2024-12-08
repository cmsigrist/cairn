import { FC, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { rerollCharacter, rollCharacter } from "../../utils/roll";
import { Character } from "../../types/character";
import { BackgroundEnum } from "../../types/backgroundEnum";
import { getBackgroundName } from "../../utils/background";

type RollCharacterButtonProps = {
  onClick: (c: Character) => void
}
export const RollCharacterButton: FC<RollCharacterButtonProps> = ({onClick}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options: number[] = Object.keys(BackgroundEnum).filter(k => typeof BackgroundEnum[k as any] === 'string').map((item) => Number.parseInt(item));

  const handleClick = () => {
    setOpen(false);
    const newCharacter = rollCharacter();
    onClick(newCharacter)
  };
  const handleMenuItemClick = (option: BackgroundEnum, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
    const newCharacter = rerollCharacter(option);
    onClick(newCharacter)
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant={"contained"}
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button
          variant="contained"
          startIcon={<AutorenewIcon />}
          onClick={handleClick}
        >
          Roll New
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1, minWidth: 175 }}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper sx={{maxHeight: 400, overflow: "scroll"}}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => {
                    return (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(option, index)}
                      >
                        {getBackgroundName(option)}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
