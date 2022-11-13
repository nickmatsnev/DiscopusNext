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
import { register } from '../utils/auth'

enum UserRoleID {
  admin = 1,
  student,
  companyRepresentative,
  universityRepresentative
}
interface MyProps{
  firstName: string
  lastName: string
  email: string
  password: string
  role_id: UserRoleID
  username: string
  contacts?: Record<string, string>
  avatar_url?: string
}
interface RegState{
  token: any
  error: any
  firstName: string
  lastName: string
  email: string
  password: string
  rPassword: string
  role_id: UserRoleID
  username: string
  contacts?: Record<string, string>
  avatar_url?: string
}

const theme = createTheme();

const cookies = new Cookies()

export default class SignUp extends React.Component<MyProps, RegState> {
  constructor(props:MyProps) {
    super(props)
    this.state = {
      token: cookies.get('token') || null,
      error: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rPassword:'',
      role_id: 2,
      username: '',
      contacts: undefined,
      avatar_url: ''
      }
  }

  onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
    this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
  }
  onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: MyProps = { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role_id: this.state.role_id,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password}

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/users/register',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode:'cors',
        body: JSON.stringify(objectDto)
      })
      const data = await response.json();

      const { token } = data
      
      console.log(data.firstName)
      
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
              Sign up
            </Typography>
            {!this.state.token && (<Box component="form" onSubmit={this.onRegClick} sx={{ mt: 1 }}>
               <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Имя"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                onChange={ (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Кличка"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={this.onInputChange}
              />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="rPassword"
                label="Повторите пароль"
                type="password"
                id="rPassword"
                autoComplete="current-password"
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
                  <Link href="/auth/login">
                    {"Уже есть аккаунт? Войдите"}
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
