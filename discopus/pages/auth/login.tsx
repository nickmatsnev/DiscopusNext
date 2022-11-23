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
import { Cookies } from 'react-cookie'

import { handleAuth, register } from '../utils/auth'

enum UserRoleID {
  admin = 1,
  student,
  companyRepresentative,
  universityRepresentative
}
interface MyProps{
  email: string
  //password: string
}
interface LoginState{
  token: any
  error: any
  email: string
  //password: string
}

const theme = createTheme();

const cookies = new Cookies();

export default class SignIn extends React.Component<MyProps, LoginState> {
  constructor(props:MyProps) {
    super(props)
    this.state = {
      token: cookies.get('token') || null,
      error: '',
      email: ''
      }
  }

  onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
    this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
  }
  onLoginClick = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: MyProps = { 
        email: this.state.email}


      console.log(objectDto)


      const response = await fetch('http://localhost:4000/api/users/login',{
        method:'POST',
        mode:'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectDto)
      })
      const data = await response.json();

      const { token } = data
      
      //console.log(data.firstName)
      
      await register({token})
      
      this.setState({
        token,
        error:''
      })
    } catch(error) {
      console.error('error happened', error)
      this.setState({error:error})
    }
      

  }
  render(): React.ReactNode {
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
            {!this.state.token && (<Box component="form" onSubmit={this.onLoginClick} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Электронная почта"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
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
                onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Sign In
              </Button>
                  <Link href="/auth/registerUser">
                    {"Нет аккаунта? Зарегистрируйтесь"}
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
            </Box>)}
          </Box>
          <Box sx={{ mt: 8, mb: 8 }}>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
