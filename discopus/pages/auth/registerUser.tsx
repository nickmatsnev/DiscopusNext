import * as React from 'react';
import { Cookies } from 'react-cookie'
import { register } from '../utils/auth'
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Link
} from "@chakra-ui/react";

enum UserRoleID {
  admin = 1,
  student,
  companyRepresentative,
  universityRepresentative
}
interface MyProps{
  firstName: string
  lastName: string
  email: string
  password: string
  role_id: UserRoleID
  username: string
  contacts?: Record<string, string>
  avatar_url?: string
}
interface RegState{
  token: any
  error: any
  firstName: string
  lastName: string
  email: string
  password: string
  rPassword: string
  role_id: UserRoleID
  username: string
  contacts?: Record<string, string>
  avatar_url?: string
}

// const theme = createTheme();

const cookies = new Cookies()

export default class SignUp extends React.Component<MyProps, RegState> {
  constructor(props:MyProps) {
    super(props)
    this.state = {
      token: cookies.get('token') || null,
      error: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rPassword:'',
      role_id: 2,
      username: '',
      contacts: undefined,
      avatar_url: ''
      }
  }

  onInputChange = (e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => { // should be Event 
    this.setState({...this.state, [e.currentTarget.name ] : e.currentTarget.value})
  }
  onRegClick = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const objectDto: MyProps = { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role_id: this.state.role_id,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password}

      console.log(objectDto)

      const response = await fetch('http://localhost:4000/api/users/register',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode:'cors',
        body: JSON.stringify(objectDto)
      })
      const data = await response.json();

      const { token } = data
      
      console.log(data.firstName)
      
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
          width={"25%"}
        >

          <Heading mb={6}>Регистрация</Heading>

          <Text fontSize='md' mb={3} >Имя:</Text>
          <Input
            placeholder="Имя"
            variant={"filled"}
            mb={3}
            name="firstName"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Text fontSize='md' mb={3} >Фамилия:</Text>
          <Input
            placeholder="Фамилия"
            variant={"filled"}
            mb={3}
            name="lastName"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Text fontSize='md' mb={3} >Имя пользователя:</Text>
          <Input
            placeholder="Username"
            variant={"filled"}
            mb={3}
            name="username"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Text fontSize='md' mb={3} >Электронная почта:</Text>
          <Input
            placeholder="Email"
            variant={"filled"}
            mb={3}
            type="email"
            name="email"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Text fontSize='md' mb={3} >Пароль:</Text>
          <Input
            placeholder="Пароль"
            variant={"filled"}
            mb={3}
            type="password"
            name="password"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Text fontSize='md' mb={3} >Повтор пароля:</Text>
          <Input
            placeholder="Повтор пароля"
            variant={"filled"}
            mb={3}
            type="password"
            name="password"
            onChange={(e:React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => this.onInputChange(e)}
          />

          <Button colorScheme={"teal"} type="submit" onClick={this.onLoginClick}>Зарегестрироваться</Button>

          <Link color='teal.500' href="/auth/login">
            {"Уже есть аккаунт? Войдите"}
          </Link>
        </Flex>
      </Flex>

    );
  }
}
