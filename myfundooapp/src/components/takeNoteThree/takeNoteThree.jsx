import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorPopper from "../colorPopper/colorPopper";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
function TakeNoteThree(props) {
  const [noteObj, setNoteObj] = useState({
    color: "",
  });
  const inputColor = (selectedColor) => {
    setNoteObj({
      ...noteObj,
      color: selectedColor,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="sx"
        sx={{
          p: "2px 4px",
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          flexFlow: "column wrap",
          flexWrap: "wrap",
          marginRight: "5px",
          alignItems: "center",
          position: "relative",
          top: "100px",
          borderRadius: "10px",
          color: "rgba(0,0,0,0.702)",
        }}
      >
        <CssBaseline />
        <Paper
          component="div"
          sx={{
            p: "2px 4px",
            height: "auto",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            flexFlow: "column wrap",
            flexWrap: "wrap",
            marginRight: "5px",
            alignItems: "center",
            position: "relative",
            left: "200px",
            top: "100px",
            borderRadius: "10px",
            color: "rgba(0,0,0,0.702)",
          }}
        >
          <span>{props.note.title}</span>
          <span>{props.note.description}</span>
          <Container
            sx={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IconButton>
              <NotificationAddOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonAddAltOutlinedIcon />
            </IconButton>

            <IconButton>
              <ColorPopper inpuColor={inputColor} />
            </IconButton>

            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
            <IconButton>
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default TakeNoteThree;
