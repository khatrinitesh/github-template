import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
// Drawer for mobile menu
import DrawerItem from "./DrawerItem";

// Styled Toolbar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// Styled List for desktop menu
const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// Menu items
const itemList = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "orange",
      }}
      elevation={0}
    >
      <StyledToolbar>
        {/* Logo / Brand */}
        <Typography variant="h6" component="h2">
          HBSales
        </Typography>

        {/* Mobile Drawer */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>

        {/* Desktop Menu */}
        <ListMenu>
          {itemList.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#1e2a5a",
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
