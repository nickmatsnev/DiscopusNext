import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Product() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Real Name s.r.o., INN: 12089121821273612
        </Typography>
        <Typography variant="h5" component="div">
          Project Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by team
        </Typography>
        <Typography variant="body2">
          Description of the project,
          <br />
          how many people were involved, 
          <br />
          what is the goal
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="/projects/oneProduct" passHref><Button color="primary" size="small">Projects</Button></Link>
      </CardActions>
    </Card>
  );
}
