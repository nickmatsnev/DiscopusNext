import { Component, useState, useEffect, FormEvent, ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import {useNavigate} from 'react-router-dom';
import type { NextPage } from 'next';
import { Cookies } from 'react-cookie'
import { register } from '../utils/auth'
import { Home } from '../index'

interface MyProps{
  email: string
  password: string
  //password: string
}
interface LoginState{
  token: any
  error: any
  email: string
  password: string
  //password: string
}

const theme = createTheme();

const cookies = new Cookies();
export default function Login() {
  const [user,setUser] = useState({});
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [token,setToken] = useState('');
  const [error,setError] = useState('');
  const onLoginClick = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("user email: " +  email)
      const objectDto: MyProps = { 
        email: email,
        password: password
      }


      console.log(objectDto)


      const response = await fetch('http://localhost:4000/api/users/login',{
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
      console.log("data: " + data)
      //console.log(data.firstName)
      
      await register({token})
      
      setToken(token)
      setError('')
    } catch(error) {
      console.error('error happened', error)
      setError(error)
    }
  }
  if(!token){
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
              Логин
            </Typography>
            {!token && (<Box component="form" onSubmit={onLoginClick} sx={{ mt: 1 }}>
              <TextField
               margin="normal"
               required
               fullWidth
               name="email"
               label="email"
               type="email"
               id="email"
               autoComplete="email  "
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Войти
              </Button>
                  <Link href="/auth/registerUser">
                    {"Нет аккаунта? Зарегистрируйтесь"}
                  </Link>
              <Link href={{
                pathname:'/',
              }} passHref>
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
            </Box>)}
          </Box>
          <Box sx={{ mt: 8, mb: 8 }}>
          </Box>
        </Container>
      </ThemeProvider>
    );
  } else{
    <Home email={{email}} />
  }

}