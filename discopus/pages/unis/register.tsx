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

export default function SignUpUni(res: NextApiResponse<UserRegister>) {
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  const handleChange = (fieldName: keyof UserRegister) => (e: React.ChangeEvent<HTMLInputElement>) => {
      //setEmail(e.currentTarget.value);
    switch (fieldName){
      case 'name':
        setName(e.currentTarget.value);
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Имя"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange("name")}
            />
            <Link href="/auth/registerUserFull" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Логин
            </Button></Link>
            
            <Link href="/" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Назад
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