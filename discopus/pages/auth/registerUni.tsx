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

interface MyProps{
  name: string
}
interface RegState{
  token: any
  error: any
  name:string
}

const theme = createTheme();

const cookies = new Cookies()

export default class SignUp extends React.Component<MyProps, RegState> {
  constructor(props:MyProps) {
    super(props)
    this.state = {
      token: cookies.get('token') || null,
      error: '',
      name: ''
      }
  }

  onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
    this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
  }
  onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: MyProps = { 
        name: this.state.name}


      console.log(objectDto)


      const response = await fetch('http://localhost:4000/api/universities/register',{
        method:'POST',
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
                id="name"
                label="Имя"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
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
