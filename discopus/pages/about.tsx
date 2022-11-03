// pages/about.tsx
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
      Discopus - о нас
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Something about us.'}
      </Typography>
      <Typography variant="body1">Мы - сообщество юнош и девушек. а я ник.</Typography>
    </Container>
  );
}
