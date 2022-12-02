import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ColorPopper from "../colorPopper/colorPopper";
import { addNote } from "../../services/dataServices";

export default function TakeNoteTwo(props) {
  const [noteObj, setNoteObj] = useState({
    title: "",
    description: "",
    color: "",
  });

  const userInput = (field, value) => {
    setNoteObj({
      ...noteObj,
      [field]: value,
    });
  };

  const updateToggle = () => {
    props.toggle();
    if (noteObj.title !== "" || noteObj.description !== "") {
      addNote(noteObj)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  const inputColor = (selectColor) => {
    setNoteObj({
      ...noteObj,
      color: selectColor,
    });
  };

  return (
    <Paper
      component="div"
      sx={{
        p: "2px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "33rem",
        height: "15vh",
        position: "relative",
        left: "400px",
        backgroundColor: "#f1f3f4",
        top: "1px",
        borderRadius: "10px",
        color: "rgba(0,0,0,0.702)",
      }}
    >
      <Container
        component="div"
        fullWidth
        sx={{
          display: "flex",
          height: "5vh",
          borderRadius: "10px",
          flexDirection: "row",
          alignItems: "start",
          color: "rgba(0,0,0,0.702)",
        }}
      >
        <InputBase
          sx={{
            flex: 3,
            borderRadius: "10px",
            height: "5vh",
          }}
          placeholder="Title"
          fullWidth
          onChange={(e) => userInput("title", e.target.value)}
        />
        <IconButton>
          <PushPinOutlinedIcon />
        </IconButton>
      </Container>
      <Container sx={{}}>
        <InputBase
          sx={{ flex: 3, height: "6vh" }}
          placeholder="Take a note..."
          fullWidth
          multiline
          onChange={(e) => userInput("description", e.target.value)}
        />

        <Container
          sx={{
            display: "flex",
            height: "4vh",
            flex: 1,
            flexDirection: "row",
          }}
        >
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
            <IconButton>
              <UndoOutlinedIcon />
            </IconButton>
            <IconButton>
              <RedoOutlinedIcon />
            </IconButton>
          </Container>
          <Container
            sx={{
              justifyContent: "flex-end",
              display: "flex",
              width: "10vw",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "grey",
                textTransform: "none",
                fontWeight: "bold",
              }}
              onClick={updateToggle}
            >
              Close
            </Button>
          </Container>
        </Container>
      </Container>
    </Paper>
  );
}
