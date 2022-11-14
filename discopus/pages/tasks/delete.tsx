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

export type TaskDto = {
    taskId:number
  }
  const theme = createTheme();

  
  export default class SignUp extends React.Component<TaskDto, TaskDto> {
    constructor(props:TaskDto) {
      super(props)
      this.state = {
        taskId:0
        }
    }
  
    onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
      this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
    }
    onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const objectDto: TaskDto = { 
            taskId:this.state.taskId}
  
        console.log(objectDto)
  
        const response = await fetch('http://localhost:4000/api/tasks/delete',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode:'cors',
          body: JSON.stringify(objectDto)
        })
        const data = await response.json();
  
        
        console.log(data.firstName)
        
    
      } catch(error) {
        console.error('error happened', error)
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
                Удаление таска
              </Typography>
              <Box component="form" onSubmit={this.onRegClick} sx={{ mt: 1 }}>
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="taskID"
                  label="id таска, который вы хотите удалить"
                  name="taskID"
                  autoComplete="taskID"
                  autoFocus
                  onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
                />
               
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="error"
                >
                Удалить
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
  }