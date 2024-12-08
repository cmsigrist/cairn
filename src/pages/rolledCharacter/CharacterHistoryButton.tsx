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
import { FC, PropsWithChildren, useRef, useState } from "react";
import { Character } from "../../types/character";
import { getBackgroundName } from "../../utils/background";

type CharacterHistoryButtonProps = {
  label: string;
  startIcon: JSX.Element;
  onClick: () => void;
  disabled: boolean;
  options: Character[];
  onChange: (character: Character, index: number) => void;
  reversedIndexes?: boolean;
};

export const CharacterHistoryButton: FC<
  PropsWithChildren<CharacterHistoryButtonProps>
> = ({
  label,
  startIcon,
  onClick,
  disabled,
  options,
  onChange,
  reversedIndexes = false
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setOpen(false)
    onClick()
  }

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
    onChange(options[index], index);
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
          startIcon={startIcon}
          onClick={handleClick}
          disabled={disabled}
        >
          {label}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          disabled={disabled}
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1, minWidth: 200 }}
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
                  {options.map((option, index) => {
                    const o = reversedIndexes
                      ? options[options.length - 1 - index]
                      : option;
                    return (
                      <MenuItem
                        key={JSON.stringify(o)}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index)}
                      >
                        {getBackgroundName(o.background.name)}
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
