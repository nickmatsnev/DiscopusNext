import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/navigation/Footer';
import { Box, Container } from '@mui/material';
import Header from '../../components/navigation/Header';
export default function SimpleAccordion() {
  return (
  <Container>
    <Header /> 
      <Box  mt={6}
      ml={3}
      mr={3}
       sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
      }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ответ 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Проблема была в том, что куда-то пропали 1,5 млн хороших скриптов
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ответ 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Проблема была в том, что куда-то пропали 1,5 млн хороших скриптов   
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Footer/>
      </Container>
  );
}