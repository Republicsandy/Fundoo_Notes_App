import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Container } from "@mui/system";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  marginTop: 65,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  marginTop: 65,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  //   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerToggle}>
        <List>
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Container
                sx={{
                  backgroundColor: "#f1f3f4",
                }}
              >
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </Container>
              <Container
                sx={{
                  backgroundColor: "#f1f3f4",
                }}
              >
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <NotificationsNoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
              </Container>
              <Container
                sx={{
                  backgroundColor: "#f1f3f4",
                }}
              >
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <EditOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Edit labels" />
              </Container>
              <Container
                sx={{
                  backgroundColor: "#f1f3f4",
                }}
              >
                >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </Container>
              <Container
                sx={{
                  backgroundColor: "#f1f3f4",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    backgroundColor: "#f1f3f4",
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Trush" />
              </Container>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
