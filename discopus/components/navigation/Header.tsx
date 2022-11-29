// pages/index.tsx
import * as React from 'react';
import Image from 'next/image';
import DiscopusLogo from '../DiscopusLogo';
import mypic from './logo.png'
import {
  Flex,
  Button,
  Link,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';


const Header = () => {

  return (

    <Flex>
      <Flex>
      
        <NextLink href="/about" passHref>
          <Button
          as="a"
          variant="link"
          my={5}
          w="100%">
            О нас
          </Button>
        </NextLink>

        <NextLink href="/help/selectHelp" passHref>
          <Button
          as="a"
          variant="link"
          my={5}
          w="100%">
            Помощь
          </Button>
        </NextLink>

        {/* <NextLink href="/projects/grid" passHref>
          <Button
          as="a"
          variant="ghost"
          aria-label="Home"
          my={5}
          w="100%">
            О нас
          </Button>
        </NextLink> */}

        <NextLink href="/projects/table" passHref>
          <Button
          as="a"
          variant="link"
          aria-label="Home"
          my={5}
          w="100%">
            Таблица проектов
          </Button>
        </NextLink>

        <NextLink href="/tasks/all" passHref>
          <Button
          as="a"
          variant="link"
          aria-label="Home"
          my={5}
          w="100%">
            Задачи
          </Button>
        </NextLink>

        <NextLink href="/unis/all" passHref>
          <Button
          as="a"
          variant="link"
          aria-label="Home"
          my={5}
          w="100%">
            Университеты
          </Button>
        </NextLink>

        <NextLink href="/companies/all" passHref>
          <Button
          as="a"
          variant="link"
          aria-label="Home"
          my={5}
          w="100%">
            Компании
          </Button>
        </NextLink>

      </Flex>
    </Flex>


    // <Container sx={{marginBottom:10}}>
    //    <AppBar position="fixed" color="inherit" enableColorOnDark>
    //     <Toolbar>            
    //       <DiscopusLogo/>
    //       <Image
    //      src={mypic}
    //      alt="Picture of the author"
    //     layout="fixed"
    //     height={50}
    //     width={50}
    //   />
    //   <Typography variant="h6" component="div">

    //   </Typography>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //     <Link href="/about" passHref><Button color="inherit">О нас</Button></Link>
    //     <Link href="/help/selectHelp" passHref><Button color="inherit">Помощь</Button></Link>
    //     <Link href="/projects/grid" passHref><Button color="inherit">грид проектов</Button></Link>
    //     <Link href="/projects/table" passHref><Button color="inherit">таблица проектов</Button></Link>
    //     <Link href="/tasks/all" passHref><Button color="inherit">таски</Button></Link>
    //     <Link href="/unis/all" passHref><Button color="inherit">универы</Button></Link>
    //     <Link href="/companies/all" passHref><Button color="inherit">компании</Button></Link>
       
    //       </Typography>
    //     <Link href="/auth/login" passHref><Button color="inherit">Логин</Button></Link>
    //     <Link href="/auth/registerUser" passHref><Button color="inherit">Регистрация</Button></Link>
    //     </Toolbar>
    //   </AppBar>
    // </Container>
  );
};
export default Header;