import React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

function TakeNoteOne(props) {
  const updateToggle = () => props.toggle();

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "30rem",
        height: "6vh",
        position: "relative",
        left: "300px",
        top: "1px",
        borderRadius: "10px",
        backgroundColor: "#f1f3f4",
        color: "rgba(0,0,0,0.702)",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onClick={updateToggle}
        placeholder="Take a note..."
      />
      <IconButton>
        <CheckBoxOutlinedIcon />
      </IconButton>
      <IconButton>
        <BrushOutlinedIcon />
      </IconButton>
      <IconButton>
        <PhotoOutlinedIcon />
      </IconButton>
    </Paper>
  );
}
export default TakeNoteOne;
