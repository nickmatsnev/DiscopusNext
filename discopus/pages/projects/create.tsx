import * as React from 'react';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProjectDto from "./DTO";

const theme = createTheme();

export default class SignUp extends React.Component<ProjectDto, ProjectDto> {
  constructor(props: ProjectDto) {
    super(props);
    this.state = {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "",
      tags: [],
      ownerId: "",
      studentIDs: [],
      companyID: "",
      taskIDs: [],
    };
  }

  onInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event
    console.log("OK");
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.value})
  }

  onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: ProjectDto = {
        name: this.state.name,
        description: this.state.description,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        status: this.state.status,
        tags: this.state.tags,
        ownerId: this.state.ownerId,
        studentIDs: this.state.studentIDs,
        companyID: this.state.companyID,
        taskIDs: this.state.taskIDs,
      }

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/project/create',{
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
              M
            </Avatar>
            <Typography component="h1" variant="h5">
              Создание проекта
            </Typography>
            <Box component="form" onSubmit={this.onRegClick} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Название"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                id="description"
                label="Описание"
                name="description"
                autoComplete="description"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="startDate"
                label="Дата начала"
                name="startDate"
                autoComplete="startDate"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="endDate"
                label="Дата окончания"
                name="endDate"
                autoComplete="endDate"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="status"
                label="Статус"
                name="status"
                autoComplete="status"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="tags"
                label="Теги"
                name="tags"
                autoComplete="tags"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="ownerId"
                label="ID владельца"
                name="ownerId"
                autoComplete="ownerId"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="studentIDs"
                label="ID студентов"
                name="studentIDs"
                autoComplete="studentIDs"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="companyID"
                label="ID компании"
                name="companyID"
                autoComplete="companyID"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="taskIDs"
                label="ID задач"
                name="taskIDs"
                autoComplete="taskIDs"
                autoFocus
                onChange={this.onInputChange}
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