import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'
import type { NextApiResponse } from 'next'
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState } from '../../store/authSlice';
const theme = createTheme();

type UserLogin = {
  email: string
  password: string
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
// data should be from usermodel of backend

function loginHandler(
  res: NextApiResponse<UserLogin>,
  email:string,
  password:string
) {
  res.status(200).json({ email: email, password: password })
}

export default function SignIn(res: NextApiResponse<UserLogin>) {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false)

  const handleChange = (fieldName: keyof UserLogin) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fieldName == 'email'){
      setEmail(e.currentTarget.value);
    }else if(fieldName == 'password'){
      setPassword(e.currentTarget.value);
    }
  };

  React.useEffect(() => {
    setLoading(true)
    fetch('/express/api')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")){
      alert(" you fucked up. again. ")
    }else{
    alert("this email was sent: " + email);
    // here we send data to express
    e.preventDefault;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            D
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Электронная почта"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange("password")}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <div>{authState ? "Logged in" : "Not Logged In"}</div>
    
            <Button
            onClick={() =>
              (authState && email != "" && password != "")
                ? dispatch(setAuthState(false))
                : dispatch(setAuthState(true))
            }
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
            
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/registerUser">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Link href="/" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary">
              Go back
            </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ mt: 8, mb: 8 }}>
        </Box>
      </Container>
    </ThemeProvider>
  );
}