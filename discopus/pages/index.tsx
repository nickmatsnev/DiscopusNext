// pages/index.tsx
import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleAuth } from './utils/auth'

const Home: NextPage = (res: any) => {
  
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  
  //  /**  <Header />  We would pass the type of the user to show different */
  // we need to put header, footer and the forming container in the _document to make it similar for everything
  return (
    
      <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
        Discopus
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom>
        Hello,  
        </Typography>
        <div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      
    </div>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Что то о нас.'}
        </Typography>
        <Typography variant="body1">Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас Что то о нас .</Typography>
      </Container>
      
  );
};
Home.getInitialProps = async (ctx: any) => {
  const res = await handleAuth(ctx)
  return{ log: 'waiting', response:res}
}

export default Home;