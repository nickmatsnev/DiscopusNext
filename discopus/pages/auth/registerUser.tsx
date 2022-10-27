import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'
import type { NextApiResponse } from 'next'


type UserRegister = {
  name: string
  surname: string
  email: string
  password: string
}

const theme = createTheme();

function registerHandler(
  res: NextApiResponse<UserRegister>,
  name: string,
  surname: string,
  email: string,
  password: string,
) {
  res.status(200).json({ name: name, surname: surname, email: email, password: password })
}

export default function SignUp(res: NextApiResponse<UserRegister>) {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);


  const handleChange = (fieldName: keyof UserRegister) => (e: React.ChangeEvent<HTMLInputElement>) => {
      //setEmail(e.currentTarget.value);
    switch (fieldName){
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'surname':
        setSurname(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        break;
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
    if (!email.includes("@") || 
    !email.includes(".") || 
    email.indexOf("@") > email.lastIndexOf(".") ||
    password.length < 8 || 
    password.toLowerCase() == password ||
    password != password1){
      alert(" you fucked up. again. ")
    }else{
    alert("this account is being registered: " + email);
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange("name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              autoComplete="surname"
              autoFocus
              onChange={handleChange("surname")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
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
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange("password")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="rPassword"
              label="Repeat Password"
              type="password"
              id="rPassword"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link href="/auth/registerUserFull" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Sign In
            </Button></Link>
                <Link href="/auth/login">
                  {"Already have an account? Sign In"}
                </Link>
            <Link href="/" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
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