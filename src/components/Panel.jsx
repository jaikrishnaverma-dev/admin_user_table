import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Badge, Button, MenuItem } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Menu from "@mui/material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import { panelChildren } from "../utils/utils.js";
import UserTable from "./pages/UserTable.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Panel() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = React.useState(!isMobile);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    isMobile && setOpen(false);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      sx={{top:"40px",minWidth:"300px"}}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        sx={{minWidth:150,py:1}}
        onClick={() => {
          handleMenuClose();
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <AccountBoxIcon color="primary"/>
          <p
            className="abs"
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            Profile
          </p>
        </div>
      </MenuItem>
      <MenuItem
        sx={{minWidth:150,py:1}}
        onClick={() => {
          handleMenuClose();
        }}
      >
     <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
     <InfoIcon color="info"/>
          <p
            className="abs"
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            About
          </p>
        </div>
      </MenuItem>
      <MenuItem
      sx={{minWidth:150,py:1}}
        onClick={() => {
          handleMenuClose();
        }}
      >
     <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
     <LogoutIcon color="error"/>
          <p
            className="abs"
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            Log Out
          </p>
        </div>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      <Button
              size="large"
              sx={{ marginLeft: 1 }}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Avatar alt={"jai_profile"} src={"/logo.jpg"} />
                <p
                  className="abs"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    display: "flex", alignItems: "center",
                    textTransform: "capitalize",
                    gap: "5px"
                  }}
                >
                  <div style={{ display: "flex",flexDirection:"column", alignItems: "center",justifyContent:"center",lineHeight:1.2 }}>
                  <p className="abs" >Jai Krishna</p>
                  <small style={{fontWeight:400,width:"100%",display:"block",textAlign:"start"}}>Admin</small>
                  </div>
                  <ArrowDropDownIcon />
                </p>
              </div>
            </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit" variant="outlined">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button
              size="large"
              sx={{ marginLeft: 1 }}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Avatar alt={"jai_pic"} src={"/logo192.png"} />
                <p
                  className="abs"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    display: "flex", alignItems: "center",
                    textTransform: "capitalize",
                    gap: "5px"
                  }}
                >
                  <div style={{ display: "flex",flexDirection:"column", alignItems: "center",justifyContent:"center",lineHeight:1.2 }}>
                  <p className="abs" >Jai Krishna</p>
                  <small style={{fontWeight:400,width:"100%",display:"block",textAlign:"start"}}>Admin</small>
                  </div>
                  <ArrowDropDownIcon />
                </p>
              </div>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img
            style={{ height: "60px", width: "80%", margin: "0px 10px",padding: "6px 0px" }}
            src={"/logo.jpg"}
            alt=""
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List sx={{ pb: 0 }}>
          <ListItem sx={{ mb: 0, pb: 0, pt: 1 }}>
            <Typography>User Management</Typography>
          </ListItem>
        </List>

        <List>
          {panelChildren
            .filter((item) => item.inNav)
            .map((item, index) => (
                <ListItem
                  key={item.path}
                  className={`${
                    index === 0
                      ? "sidenav_active sidebar_element"
                      : "sidebar_element"
                  }`}
                  disablePadding
                  onClick={() => {
                    isMobile && handleDrawerClose();
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                  </ListItemButton>
                </ListItem>
             
            ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <UserTable />
      </Main>
    </Box>
  );
}
