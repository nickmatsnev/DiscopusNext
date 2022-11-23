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
import {CompanyDto} from "./DTO";
import { current } from '@reduxjs/toolkit';

const theme = createTheme();



export type Comp = {
  name: string,
  tags: string[],
  cv_desc: string,
  email: string,
  phone: string,
  address: string,
  city: string,
  country: string,
  zip: string,
  linkedin?: string,
  facebook?: string,
  twitter?: string,
  youtube?: string,
  instagram?: string,
  website?: string,

}

export default class SignUp extends React.Component<Comp, Comp> {
  constructor(props: Comp) {
    super(props)
    this.state = {
      name: "",
      tags: [],
      cv_desc: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      zip: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      youtube: "",
      instagram: "",
      website: "",
    }
  }

  onInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.value})
  }
  onRegClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: CompanyDto = {
        name: this.state.name,
        tags: this.state.tags,
        cv_desc: this.state.cv_desc,
        contacts: {
          email:  this.state.email,
          phone:  this.state.phone,
          address:  this.state.address,
          city:  this.state.city,
          country:  this.state.country,
          zip:  this.state.zip,
          social_media: {
            linkedin:  this.state.linkedin,
            facebook:  this.state.facebook,
            twitter:  this.state.twitter,
            youtube:  this.state.youtube,
            instagram:  this.state.instagram,
            website:  this.state.website,
          },
        },
      }

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/companies/create', {
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
              Создание компании
            </Typography>
            <Box component="form" onSubmit={this.onRegClick} sx={{mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Название компании"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={this.onInputChange}
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
                id="cv_desc"
                label="Описание"
                name="cv_desc"
                autoComplete="cv_desc"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Номер телефона"
                name="phone"
                autoComplete="phone"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Адрес"
                name="address"
                autoComplete="address"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                label="Город"
                name="city"
                autoComplete="city"
                autoFocus
                onChange={this.onInputChange}
              />              
              <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                label="Страна"
                name="country"
                autoComplete="country"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="zip"
                label="zip адрес"
                name="zip"
                autoComplete="zip"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="linkedin"
                label="LinkedIn"
                name="linkedin"
                autoComplete="linkedin"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="facebook"
                label="FaceBook"
                name="facebook"
                autoComplete="facebook"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="twitter"
                label="Twitter"
                name="twitter"
                autoComplete="twitter"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="youtube"
                label="YouTube"
                name="youtube"
                autoComplete="youtube"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="instagram"
                label="Instagram"
                name="instagram"
                autoComplete="instagram"
                autoFocus
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="website"
                label="website"
                name="website"
                autoComplete="website"
                autoFocus
                onChange={this.onInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
                color="primary"
              >
                Создать
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