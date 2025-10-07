import React, { useState } from "react";
import {
  styled,
  useTheme,
  Drawer,
  Divider,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

// icons
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

// styled header for the drawer
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

// navigation list items
interface DrawerItemType {
  text: string;
  icon: React.ReactNode;
  to: string;
}

const itemList: DrawerItemType[] = [
  {
    text: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    to: "/about",
  },
  {
    text: "Contact",
    icon: <EmailIcon />,
    to: "/contact",
  },
];

const DrawerItem: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      {/* Menu Icon Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* Navigation Links */}
        <List>
          {itemList.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.to}
              sx={{
                color: "#414141",
                "&:hover": {
                  backgroundColor: "#e9e5e5",
                  color: "#1c2859",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#1c2859",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerItem;
