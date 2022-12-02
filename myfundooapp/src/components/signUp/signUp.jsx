import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { color } from "@mui/system";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper
          sx={{
            position: "relative",
            left: "50px",
            top: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "2px",
            borderColor: "red",
            borderRadius: "10px",
            borderBlock: "2px",
            width: "50rem",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Box sx={{ width: "30rem" }}>
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
            <Typography component="h1" variant="h4" sx={{ color: "#202124" }}>
              Create your Fundoo Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Show email."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="new-password"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="confirm password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8vw",
                  marginTop: "100px",
                }}
              >
                <Button>
                  <Grid item>
                    <Link href="#" variant="body2">
                      SIGN IN INSTEAD
                    </Link>
                  </Grid>
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "6vw", mt: 3, mb: 3 }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "20rem" }}>
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt=""
              width="260"
              height="260"
            />
            <p>One account. All of the Fundoo services working for you.</p>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
