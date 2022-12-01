import * as React from 'react';
import { Cookies } from 'react-cookie'
import { handleAuth, register } from '../utils/auth'
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Link
} from "@chakra-ui/react";
import { useState } from "react";

enum UserRoleID {
  admin = 1,
  student,
  companyRepresentative,
  universityRepresentative
}
interface MyProps{
  email: string
  //password: string
}
interface LoginState{
  token: any
  error: any
  email: string
  //password: string
}

const cookies = new Cookies();

export default class SignIn extends React.Component<MyProps, LoginState> {
  constructor(props:MyProps) {
    super(props)
    this.state = {
      token: cookies.get('token') || null,
      error: '',
      email: ''
      }
  }

  onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
    this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
    console.log(e.currentTarget.name)
  }
  onLoginClick = async(e:React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    try {
      const objectDto: MyProps = { 
        email: this.state.email
      }


      console.log(objectDto)


      const response = await fetch('http://localhost:4000/api/users/login',{
        method:'POST',
        mode:'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectDto)
      })
      const data = await response.json();

      const { token } = data
      
      //console.log(data.firstName)
      
      await register({token})
      
      this.setState({
        token,
        error:''
      })
    } catch(error) {
      console.error('error happened', error)
      this.setState({error:error})
    }
      

  }
  render(): React.ReactNode {
       return (

        <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          background={"gray.200"}
          p={12}
          rounded={6}
          position={"relative"}
        >

          <Heading mb={6}>Вход</Heading>

          <Text fontSize='md' mb={3} >Ваша электронная почта:</Text>
          <Input
            placeholder="Email"
            variant={"filled"}
            mb={3}
            type="email"
            name="email"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />
  
          <Text fontSize='md' mb={3} >Ваш пароль:</Text>
          <Input
            placeholder="*************"
            variant={"filled"}
            mb={6}
            type="password"
            name="password"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />
  
          <Button colorScheme={"teal"} type="submit" onClick={this.onLoginClick}>Войти</Button> // TODO FIX BUTTON ONCLICK

          <Link color='teal.500' href="/auth/registerUser">
            {"Нет аккаунта? Зарегистрируйтесь"}
          </Link>
        </Flex>
      </Flex>

        );
       }
}
