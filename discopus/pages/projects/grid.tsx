import * as React from 'react';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import {Container, Box} from '@mui/material';
import GridFilled from '../../components/GridFilled';

export default function ProjectGrid() {
  return (
    <Container>
    <Header />
    <Box mt={6}
        ml={3}
        mr={3}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
           <GridFilled/>
    </Box>
    <Footer/>
    </Container>
  );
}