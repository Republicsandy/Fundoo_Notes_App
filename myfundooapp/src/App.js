import SignIn from "./components/signIn/signIn";
import TakeNoteTwo from "./components/takeNoteTwo/takeNoteTwo";
import TakeNoteOne from "./components/takeNoteOne/takeNoteOne";
import TakeNoteThree from "./components/takeNoteThree/takeNoteThree";
import SignUp from "./components/signUp/signUp";
import Dashboard from "./components/dashBoard/dashBoard";
import { Container } from "@mui/system";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <SignUp /> */}
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Dashboard />
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <SignIn /> */}
      </Container>
    </Container>
  );
}

export default App;
