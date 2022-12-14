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

const theme = createTheme();


export default class SignUp extends React.Component<TaskDto, TaskDto> {
  constructor(props: TaskDto) {
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
      dueDateBySLA: "",
    }
  }

  onInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.value})
  }
  onRegClick = async (e: React.FormEvent<HTMLFormElement>) => {
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
        dueDateBySLA: this.state.dueDateBySLA,
      }

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/tasks/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(objectDto)
      })
      const data = await response.json();

      const {token} = data

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
              ???????????????? ??????????
            </Typography>
            <Box component="form" onSubmit={this.onRegClick} sx={{mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="??????"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="????????????????"
                name="description"
                autoComplete="description"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="tags"
                label="????????"
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
                label="????????????????"
                name="importance"
                autoComplete="importance"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="status"
                label="??????????????????????????"
                type="text"
                id="status"
                autoComplete="current-password"
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="startTime"
                label="?????????? ????????????"
                type="text"
                id="startTime"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="endTime"
                label="??????????????"
                type="text"
                id="endTime"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="studentsIDs"
                label="ID?????? ??????????????????"
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
                sx={{mt: 3, mb: 2}}
                color="primary"
              >
                ??????????????
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