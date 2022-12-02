import React from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Divider from "@mui/material/Divider";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/system";

export default function Header(props) {
  const openDrawer = () => {
    props.listenToHeader();
  };
  return (
    <Container
      sx={{
        width: "auto",
        height: "4rem",
        display: "flex",
        justifyContent: "space-around",
      }}
      fullWidth
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          color: "#5f6368",
        }}
      >
        <IconButton>
          <MenuOutlinedIcon onClick={openDrawer} />
        </IconButton>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
        <p>Keep</p>
      </Container>
      <Container
        sx={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "40rem",
            backgroundColor: "#f1f3f4",
            borderRadius: "8px",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="clear">
            <ClearIcon />
          </IconButton>
        </Paper>
      </Container>
      <Container
        sx={{
          display: "flex",
          gap: "1rem",
          color: "#5f6368",
          alignItems: "center",
        }}
      >
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <ViewStreamIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Container>
      <Container
        sx={{
          display: "flex",
          gap: "1rem",
          color: "#5f6368",
          alignItems: "center",
        }}
      >
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Container>
    </Container>
  );
}
