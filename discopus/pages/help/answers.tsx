import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Container } from '@mui/material';
export default function SimpleAccordion() {
  return (
  <Container>
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
      </Container>
  );
}