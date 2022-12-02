import axios from "axios";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export const getNotes = () => {
  let response = axios.get(
    "https://localhost:44347/api/Notes/GetAll",
    headerConfig
  );
  return response;
};
export const addNote = (noteModel) => {
  let response = axios.post(
    "https://localhost:44347/api/Notes/Create",
    noteModel,
    headerConfig
  );
  return response;
};

// https://localhost:44347/api/Notes/Archive
// https://localhost:44347/api/Notes/Update
// https://localhost:44347/api/Notes/GetAll
// https://localhost:44347/api/Notes/Read
// https://localhost:44347/api/Notes/Pin?NoteId=15
// https://localhost:44347/api/Notes/Trash?NotesId=15
// https://localhost:44347/api/Notes/Color?NoteId=15&addcolor=red
// https://localhost:44347/api/Notes/AddImage?noteId=15&filePath=http%3A%2F%2Fres.cloudinary.com%2Fdds31bhfh%2Fimage%2Fupload%2Fv1667908746%2F7_11_08-11-2022.jpg
// https://localhost:44347/api/User/Login
// https://localhost:44347/api/User/Register
