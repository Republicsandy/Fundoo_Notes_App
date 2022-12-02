import "./App.css";
import SignIn from "./components/signIn/signIn";
import TakeNoteTwo from "./components/takeNoteTwo/takeNoteTwo";
import TakeNoteOne from "./components/takeNoteOne/takeNoteOne";
import TakeNoteThree from "./components/takeNoteThree/takeNoteThree";
import SignUp from "./components/signUp/signUp";
import Dashboard from "./components/dashBoard/dashBoard";

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      <Dashboard />
    </div>
  );
}

export default App;
