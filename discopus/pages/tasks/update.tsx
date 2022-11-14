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
  export type TaskModel = {
    task_id: string,
    task_title: string,
    task_description: string,
    task_tags: string[],
    task_importance: Importance,
    task_status: string,
    task_time_start: string,
    task_time_end: string,
    task_student_ids: string[],
    task_SLA: string,
  }
  
  const theme = createTheme();

  
  export default class SignUp extends React.Component<TaskModel, TaskModel> {
    constructor(props:TaskModel) {
      super(props)
      this.state = {
        task_id: "",
        task_title: "",
        task_description: "",
        task_tags: [],
        task_importance: 0,
        task_status: "",
        task_time_start: "",
        task_time_end: "",
        task_student_ids: [],
        task_SLA: "",
        }
    }
  
    onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
      this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
    }
    onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const objectDto: TaskModel = { 
            task_id: this.state.task_id,
        task_title: this.state.task_title,
        task_description:  this.state.task_description,
        task_tags: this.state.task_tags,
        task_importance:  this.state.task_importance,
        task_status:  this.state.task_status,
        task_time_start: this.state.task_time_start,
        task_time_end:  this.state.task_time_end,
        task_student_ids:  this.state.task_student_ids,
        task_SLA: this.state.task_SLA,}
  
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
                Изменение таска
              </Typography>
              <Box component="form" onSubmit={this.onRegClick} sx={{ mt: 1 }}>
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="taskID"
                  label="id таска, который вы хотите изменить"
                  name="task_id"
                  autoComplete="taskID"
                  autoFocus
                  onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e) }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  name="task_title"
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
                  name="task_description"
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
                  name="task_tags"
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
                  name="task_importance"
                  autoComplete="importance"
                  autoFocus
                  onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="status"
                  label="Статус"
                  type="text"
                  id="task_status"
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
                  id="task_time_start"
                  autoComplete="current-password"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="task_time_end"
                  label="дедлайн"
                  type="text"
                  id="endTime"
                  autoComplete="current-password"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="task_students_ids"
                  label="IDшки студентов"
                  type="text"
                  id="studentsIDs"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="task_SLA"
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
                  color="success"
                >
                Изменить
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