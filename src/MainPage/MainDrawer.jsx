import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import SplitButton from "../components/SplitButton";
import { logo1, logo2, logo3 } from "../assets/images";

const drawerWidth = 240;

const ManuData = [
  {
    name: "Dashboard",
    link: "/dashboard",
    id: 1,
  },
  {
    name: "Product",
    link: "/product",
    id: 2,
  },
];

function MainDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar >
        <Box sx={{width:'40px' ,height:"40px", overflow:"hidden" , borderRadius:'50%'}}>
          <img src={logo1} width="100%" height="100%" alt="" />
        </Box>
        <Typography sx={{fontWeight :"600" , paddingLeft:"5px"}}>
          Riya Art Infotech
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ padding: 0 }}>
        {ManuData.map((text, index) => (
          <NavLink
            to={text.link}
            key={text.id}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: "inherit",
            })} >
            <ListItem
              disablePadding
              sx={{ borderBottom: "1px solid lightgray" }} >
              <ListItemButton
                className="font-primary font-size-xl"
                sx={({ palette }) => ({
                  position: "relative",
                  px: 2,
                  py: 1,
                  transition: "all 0.3s ease",
                  color: "text.primary",
                  bgcolor: ({ isActive }) =>
                    isActive ? "#edf4ff" : "transparent",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 8,
                    bottom: 8,
                    width: 4,
                    borderRadius: "0 4px 4px 0",
                    backgroundColor: ({ isActive }) =>
                      isActive ? "#1976d2" : "transparent",
                    transition: "background-color 0.3s ease",
                  },
                  "&:hover": {
                    bgcolor: "#f5faff",
                    transform: "translateX(3px)",
                  },
                })}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: "inherit",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon fontSize="small" />
                  ) : (
                    <MailIcon fontSize="small" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              boxShadow: "none",
            }} >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{display:'flex' , flexGrow: 1 , flexDirection:'row' , justifyContent:"space-between"}}>
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
              <SplitButton />
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              slotProps={{
                root: {
                  keepMounted: true, // Better open performance on mobile.
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: "65px",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Box className="main-Box">{props.children}</Box>
          </Box>
        </Box>
  );
}

MainDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MainDrawer;
