// pages/about.tsx
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
      Discopus - About us
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Something about us.'}
      </Typography>
      <Typography variant="body1">We are a team of young people. I am nick. </Typography>
    </Container>
  );
}
