// pages/index.tsx
import Link from 'next/link'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'By me 2023 © '}
        <Link color="inherit" href="https://discopus.live">
          Discopus
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const Footer = () => {
  return (
   
<Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            <FacebookIcon/>
            <TelegramIcon/>
            <GitHubIcon/> 
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
};
export default Footer;