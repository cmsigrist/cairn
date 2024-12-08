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
import CasinoIcon from '@mui/icons-material/Casino';
import { rerollOptions, RerollOptionsEnum } from "./type";

type CharacterRerollButtonProps = {
  onReroll: (option: RerollOptionsEnum) => void
}

export const CharacterRerollButton: FC<CharacterRerollButtonProps> = ({onReroll}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setOpen(false)
    onReroll(RerollOptionsEnum.ALL);
  }
  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
    onReroll(rerollOptions[index])
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
        variant={"outlined"}
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button
          variant="outlined"
          startIcon={<CasinoIcon />}
          onClick={handleClick}
        >
          Re-roll
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
        sx={{ zIndex: 1, minWidth: 160 }}
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
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {rerollOptions.map((option, index) => {
                    return (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index)}
                      >
                        {option}
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
