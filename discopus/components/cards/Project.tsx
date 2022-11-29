import * as React from 'react';
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
          by company name
        </Typography>
        <Typography variant="h5">
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
      <Link href="/projects/oneProduct" passHref><Button color="primary" size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
