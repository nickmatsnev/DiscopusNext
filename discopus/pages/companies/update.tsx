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

type UpdateCompanyDto = {
  companyId: string,
  companyDto: CompanyDto
}

const theme = createTheme();


export default class SignUp extends React.Component<UpdateCompanyDto, UpdateCompanyDto> {
  constructor(props: UpdateCompanyDto) {
    super(props)
    this.state = {
      companyId: "",
      companyDto: {
        name: "",
        tags: [],
        cv_desc: "",
        contacts: {
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          zip: "",
          social_media: {
            linkedin: "",
            facebook: "",
            twitter: "",
            youtube: "",
            instagram: "",
            website: "",
          },
        },
      }
    }
  }

  onInputChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event
    this.setState({...this.state, [e.currentTarget.name]: e.currentTarget.value})
  }
  onRegClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: UpdateCompanyDto = {
        companyId: this.state.companyId,
        companyDto: {
          name: this.state.companyDto.name,
          tags: this.state.companyDto.tags,
          cv_desc: this.state.companyDto.cv_desc,
          contacts: {
            email:  this.state.companyDto.contacts.email,
            phone:  this.state.companyDto.contacts.phone,
            address:  this.state.companyDto.contacts.address,
            city:  this.state.companyDto.contacts.city,
            country:  this.state.companyDto.contacts.country,
            zip:  this.state.companyDto.contacts.zip,
            social_media: {
              linkedin:  this.state.companyDto.contacts.social_media?.linkedin,
              facebook:  this.state.companyDto.contacts.social_media?.facebook,
              twitter:  this.state.companyDto.contacts.social_media?.twitter,
              youtube:  this.state.companyDto.contacts.social_media?.youtube,
              instagram:  this.state.companyDto.contacts.social_media?.instagram,
              website:  this.state.companyDto.contacts.social_media?.website,
            },
          },
        }
      }

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/company/delete', {
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
              Изменение компании
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