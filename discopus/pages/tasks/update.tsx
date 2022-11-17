import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import Link from 'next/link'
import {TaskDto} from "./DTO";

type UpdateTaskDto = {
  taskId: string,
  taskDto: TaskDto
}

const theme = createTheme();


export default class SignUp extends React.Component<UpdateTaskDto, UpdateTaskDto> {
  constructor(props: UpdateTaskDto) {
    super(props)
    this.state = {
      taskId: "",
      taskDto: {
        title: "",
        description: "",
        tags: [],
        importance: 0,
        status: "",
        timeStart: "",
        timeEnd: "",
        studentIDs: [],
        dueDateBySLA: "",
      }
    }
  }

  onInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.value})
  }
  onRegClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: UpdateTaskDto = {
        taskId: this.state.taskId,
        taskDto: {
          title: this.state.taskDto.title,
          description: this.state.taskDto.description,
          tags: this.state.taskDto.tags,
          importance: this.state.taskDto.importance,
          status: this.state.taskDto.status,
          timeStart: this.state.taskDto.timeStart,
          timeEnd: this.state.taskDto.timeEnd,
          studentIDs: this.state.taskDto.studentIDs,
          dueDateBySLA: this.state.taskDto.dueDateBySLA,
        }
      }

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/tasks/delete', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(objectDto)
      })

      const data = await response.json();

      console.log(data.firstName)

    } catch (error) {
      console.error('error happened', error)
    }
  }

  render(): React.ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
              D
            </Avatar>
            <Typography component="h1" variant="h5">
              Изменение таска
            </Typography>
            <Box component="form" onSubmit={this.onRegClick} sx={{mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="taskID"
                label="id таска, который вы хотите изменить"
                name="task_id"
                autoComplete="taskID"
                autoFocus
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                sx={{mt: 3, mb: 2}}
                color="success"
              >
                Изменить
              </Button>

              <Link href="/" passHref>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt: 3, mb: 2}}
                  color="secondary"
                >
                  Go back
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{mt: 8, mb: 8}}>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}