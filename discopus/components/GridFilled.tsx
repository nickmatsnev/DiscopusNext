import { Grid, Typography } from '@mui/material';
import Product from './cards/Product';


export default function GridFilled(){
    return(
        <Grid container spacing={2}>
  <Grid item xs={4}>
    <Typography><Product/></Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography><Product/></Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography><Product/></Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography><Product/></Typography>
  </Grid>
</Grid>
    );

}