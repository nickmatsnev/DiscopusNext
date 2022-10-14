// pages/index.tsx
import * as React from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import CssBaseline from '@mui/material/CssBaseline';

const Home: NextPage = () => {
  //  /**  <Header />  We would pass the type of the user to show different */
  // we need to put header, footer and the forming container in the _document to make it similar for everything
  return (
    <Container>
      <Header /> 
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
        Discopus
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Something about us.'}
        </Typography>
        <Typography variant="body1">Something about us Something about us Something about us Something about us Something about us Something about us.</Typography>
      </Container>
      
    </Box>
    <Footer />
    </Container>
  );
};

export default Home;