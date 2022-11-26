import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';
import Link from '../../components/navigation/Link';


export default function SimpleAccordion() {
  return (
    
       <Card sx={{
  alignItems:"center",
  justifyContent:"center"}} >
      <CardContent sx={{ mb: 5}}>
        <Typography style={{textAlign: "center"}} variant="h5" component="div">
          Поддержка
        </Typography>
        
      </CardContent>
      <CardActions sx={{
  alignItems:"center",
  justifyContent:"center"}} >
      <ButtonGroup variant="text" aria-label="outlined primary button group">
      <Link href="/help/describeHelp" passHref><Button color="primary" sx={{minWidth:'50%'}}>Написать сообщение</Button></Link>
      <Link href="/help/answers" passHref><Button  color="primary" sx={{minWidth:'50%'}}>Посмотреть ответы</Button></Link>
</ButtonGroup>
      </CardActions>
    </Card>
  );
}