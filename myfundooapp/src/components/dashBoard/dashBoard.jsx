import React, { useEffect, useState } from "react";
import { getNotes } from "../../services/dataServices";
import Header from "../header/header";
import MiniDrawer from "../miniDrawar/miniDrawar";
import TakeNoteOne from "../takeNoteOne/takeNoteOne";
import TakeNoteThree from "../takeNoteThree/takeNoteThree";
import TakeNoteTwo from "../takeNoteTwo/takeNoteTwo";

function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [selectedItem, setselected] = useState("Notes");

  const updateToggle = () => setToggle(!toggle);

  useEffect(() => {
    getNotes()
      .then((response) => {
        console.log(response);
        setNoteList(response.data.data);
        console.log(noteList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const listenToHeader = () => {
    setDrawerToggle(!drawerToggle);
  };

  return (
    <div>
      <Header listenToHeader={listenToHeader} />
      <MiniDrawer drawerToggle={drawerToggle} />
      {toggle ? (
        <TakeNoteTwo toggle={updateToggle} />
      ) : (
        <TakeNoteOne toggle={updateToggle} />
      )}

      <div
        style={{
          display: "flex",
          position: "relative",
          left: "150px",
          top: "100px",
        }}
      >
        {noteList.map((note) => (
          <div>
            <TakeNoteThree note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
