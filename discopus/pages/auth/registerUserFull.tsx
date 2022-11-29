import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'


const theme = createTheme();

export default function SignUpFull() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
              label="Имя"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Фамилия"
              name="surname"
              autoComplete="surname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Номер телефона"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="university"
              label="Университет"
              id="university"
              autoComplete="university"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="faculty"
              label="Факультет"
              id="faculty"
              autoComplete="faculty"
            />            
            <TextField
              margin="normal"
              required
              fullWidth
              name="teacherName"
              label="Имя преподавателя"
              id="teacherName"
              autoComplete="teacherName"
            />       
               <TextField
                id="outlined-multiline-flexible"
                label="Резюме опиши"
                multiline
                fullWidth
                maxRows={4}
                name="curriculumVitae"
                autoComplete="curriculumVitae"
              />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Сохранить
            </Button>
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