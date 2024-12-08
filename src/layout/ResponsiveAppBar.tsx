// React
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// MUI
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Components
// Hooks
// Utils

// Types
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { ROUTE_EXPLORE, ROUTE_ROLL, ROUTE_HOME } from "../utils/routes";

import logo from "../resources/cairn_logo_black_white_border.png";

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={ROUTE_HOME} style={{ textDecoration: "none" }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <img src={logo} alt="" style={{ width: 70 }} />
              </Box>
            </NavLink>

            <Box
              sx={{
                flexGrow: 1,
                witdh: "100%",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Popover
                open={anchorElNav !== null}
                anchorEl={anchorElNav}
                onClose={handleCloseNavMenu}
                slotProps={{
                  paper: {
                    sx: {
                      width: "100%",
                    },
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack
                  direction="column"
                  sx={{ paddingY: 2, paddingX: 2 }}
                  spacing={1}
                  justifyContent={"center"}
                >
                  <Stack direction={"row"} justifyContent="space-between">
                    <IconButton onClick={handleCloseNavMenu}>
                      <CloseIcon />
                    </IconButton>
                    <IconButton onClick={handleCloseNavMenu}>
                      <SearchIcon />
                    </IconButton>
                  </Stack>
                  <NavLink to={ROUTE_ROLL}>
                    <Button
                      key="roll"
                      color="white"
                      onClick={handleCloseNavMenu}
                    >
                      Roll
                    </Button>
                  </NavLink>
                  <NavLink to={ROUTE_EXPLORE}>
                    <Button key="explore" onClick={handleCloseNavMenu}>
                      Explore
                    </Button>
                  </NavLink>
                </Stack>
              </Popover>
            </Box>
            <NavLink to={ROUTE_HOME} style={{ textDecoration: "none" }}>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <img src={logo} alt="" style={{ width: 70 }} />
              </Box>
            </NavLink>
            <Box
              sx={{
                flexGrow: 1,
                paddingTop: 0.5,
                marginLeft: 3,
                display: { xs: "none", md: "flex" },
              }}
            >
              <NavLink to={ROUTE_ROLL}>
                <Button
                  key="roll"
                  color="white"
                  onClick={handleCloseNavMenu}
                >
                  Roll
                </Button>
              </NavLink>
              <NavLink to={ROUTE_EXPLORE}>
                <Button
                  key="explore"
                  color="white"
                  onClick={handleCloseNavMenu}
                >
                  Explore
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
