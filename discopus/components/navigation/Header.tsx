// pages/index.tsx
import Link from 'next/link'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import DiscopusLogo from '../DiscopusLogo';
import mypic from './logo.png'
const Header = () => {
  return (
    <Container sx={{marginBottom:10}}>
       <AppBar position="fixed" color="inherit" enableColorOnDark>
        <Toolbar>            
          <DiscopusLogo/>
          <Image
         src={mypic}
         alt="Picture of the author"
        layout="fixed"
        height={50}
        width={50}
      />
      <Typography variant="h6" component="div">

      </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="/about" passHref><Button color="inherit">О нас</Button></Link>
        <Link href="/help/selectHelp" passHref><Button color="inherit">Помощь</Button></Link>
        <Link href="/projects/grid" passHref><Button color="inherit">грид</Button></Link>
        <Link href="/projects/table" passHref><Button color="inherit">таблица</Button></Link>
          </Typography>
        <Link href="/auth/login" passHref><Button color="inherit">Логин</Button></Link>
        <Link href="/auth/registerUser" passHref><Button color="inherit">Регистрация</Button></Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Header;