import * as React from "react";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { optionsSplit } from "../../coansta/consta"; // Make sure this is an array of { name: string, path?: string }
import { useNavigate } from "react-router-dom";
import { Icon } from "@mui/material";

export default function SplitButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const selectedOption = optionsSplit[selectedIndex];
    if (selectedOption?.path) {
      navigate(selectedOption.path);
    } else {
      console.info(`You clicked: ${selectedOption?.name}`);
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    const selectedOption = optionsSplit[index];
    if (selectedOption?.path) {
      navigate(selectedOption.path);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup color="#673ab7" ref={anchorRef} aria-label="split button">
        <Button
          onClick={handleClick}
          sx={{
            transition: "all 0.3s ease-in-out",
            ":hover": {
              backgroundColor: "#5e35b1",
            },
            ":focus": {
              backgroundColor: "#5e35b1",
            },
          }}
        >
          {optionsSplit[selectedIndex]?.name}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select option"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{
            transition: "all 0.3s ease-in-out",
            ":hover": {
              backgroundColor: "#5e35b1",
            },
            ":focus": {
              backgroundColor: "#5e35b1",
            },
          }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ zIndex: 1300 }}
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
                  {optionsSplit.map((option, index) => (
                    <MenuItem
                      key={option.name}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2,
                        py: 1,
                        "&.Mui-selected": {
                          backgroundColor: "#ede7f6",
                          fontWeight: 600,
                        },
                        "&:hover": {
                          backgroundColor: "#d1c4e9",
                        },
                      }}
                    >
                      <Icon
                        sx={{
                          color: "gray",
                          fontSize: 16,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "20px",
                        }} >
                        {option.icon}
                      </Icon>

                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
