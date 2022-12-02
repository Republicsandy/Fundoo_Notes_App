import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginApi } from "../../services/userServices";
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
export default function SignIn() {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });
  const [regexObj, setRegexObj] = useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });

  const takeUserName = (event) => {
    setSignInObj((previousState) => ({
      ...previousState,
      email: event.target.value,
    }));
  };

  const takePassword = (event) => {
    setSignInObj((previousState) => ({
      ...previousState,
      password: event.target.value,
    }));
  };
  console.log(signInObj, "sign in object");

  const onSubmit = () => {
    let emailTest = emailRegex.test(signInObj.email);
    let passwordTest = passwordRegex.test(signInObj.password);
    if (!emailTest) {
      setRegexObj((previousState) => ({
        ...previousState,
        emailBorder: true,
        emailHelper: "Please enter valid email",
      }));
    } else if (emailTest) {
      setRegexObj((previousState) => ({
        ...previousState,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (!passwordTest) {
      setRegexObj((previousState) => ({
        ...previousState,
        passwordBorder: true,
        passwordHelper: "Please enter valid password",
      }));
    } else if (passwordTest) {
      setRegexObj((previousState) => ({
        ...previousState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    if (emailTest && passwordTest) {
      loginApi(signInObj)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30rem",
            border: "2px",
            borderColor: "red",
            borderRadius: "10px",
            borderBlock: "2px",
            position: "relative",
            top: "100px",
          }}
        >
          <Typography component="h1" variant="h5">
            <h1>
              <span style={{ color: "#0F52BA" }}>F</span>
              <span style={{ color: "#FF2626" }}>U</span>
              <span style={{ color: "#FFD523" }}>N</span>
              <span style={{ color: "#00C1D4" }}>D</span>
              <span style={{ color: "#66CC66" }}>O</span>
              <span style={{ color: "#66CC66" }}>O</span>
                        
            </h1>
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="userName"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={takeUserName}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={takePassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper}
            />

            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "8vw",
                marginTop: "10px",
              }}
            >
              <Grid item xs>
                Forgot Email
              </Grid>
              <Grid item xs>
                Forgot password
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8vw" }}>
              <Button>
                <Grid item>
                  <Link href="#" variant="body2">
                    Create Account
                  </Link>
                </Grid>
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 10, mb: 10 }}
                onClick={onSubmit}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
