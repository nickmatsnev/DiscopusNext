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
enum Importance {
    Low = 0,
    Medium = 1,
    High = 2
  }
export type TaskDto = {
    title: string,
    description: string,
    tags: string[],
    importance: Importance,
    status: string,
    timeStart: string,
    timeEnd: string,
    studentIDs: string[],
    SLA: string,
  }
  const theme = createTheme();

  
  export default class SignUp extends React.Component<TaskDto, TaskDto> {
    constructor(props:TaskDto) {
      super(props)
      this.state = {
        title: "",
        description: "",
        tags: [],
        importance: 0,
        status: "",
        timeStart: "",
        timeEnd: "",
        studentIDs: [],
        SLA: "",
        }
    }
  
    onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
      this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
    }
    onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const objectDto: TaskDto = { 
            title: this.state.title,
            description: this.state.description,
            tags: this.state.tags,
            importance: this.state.importance,
            status: this.state.status,
            timeStart: this.state.timeStart,
            timeEnd: this.state.timeEnd,
            studentIDs: this.state.studentIDs,
            SLA: this.state.SLA,}
  
        console.log(objectDto)
  
        const response = await fetch('http://localhost:4000/api/tasks/create',{
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
                Создание таска
              </Typography>
              <Box component="form" onSubmit={this.onRegClick} sx={{ mt: 1 }}>
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Описание"
                  name="description"
                  autoComplete="description"
                  autoFocus
                  onChange={ (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="tags"
                  label="тэги"
                  name="tags"
                  autoComplete="tags"
                  autoFocus
                  onChange={this.onInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="importance"
                  label="Важность"
                  name="importance"
                  autoComplete="importance"
                  autoFocus
                  onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="status"
                  label="СтатусНенужно"
                  type="text"
                  id="status"
                  autoComplete="current-password"
                  onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="startTime"
                  label="время старта"
                  type="text"
                  id="startTime"
                  autoComplete="current-password"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="endTime"
                  label="дедлайн"
                  type="text"
                  id="endTime"
                  autoComplete="current-password"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="studentsIDs"
                  label="IDшки студентов"
                  type="text"
                  id="studentsIDs"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="SLA"
                  label="SLA"
                  type="text"
                  id="SLA"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="primary"
                >
                Создать
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