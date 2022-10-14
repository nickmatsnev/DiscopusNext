import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from '../../components/navigation/Footer';
import { Box, Container } from '@mui/material';
import Header from '../../components/navigation/Header';
import { ButtonGroup } from '@mui/material';
import Link from '../../components/navigation/Link';


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
        minHeight: '100vh',
      }}>
       <Card sx={{
  alignItems:"center",
  justifyContent:"center"}} >
      <CardContent >
        <Typography  variant="h5" component="div">
          Поддержка
        </Typography>
        
      </CardContent>
      <CardActions sx={{
  alignItems:"center",
  justifyContent:"center"}} >
      <ButtonGroup variant="text" aria-label="outlined primary button group">
      <Link href="/help/describeHelp" passHref><Button color="secondary" sx={{minWidth:'50%'}}>написать сообщение</Button></Link>
      <Link href="/help/answers" passHref><Button  color="secondary" sx={{minWidth:'50%'}}>посмотреть ответы</Button></Link>
</ButtonGroup>
      </CardActions>
    </Card>
      </Box>
      <Footer/>
      </Container>
  );
}