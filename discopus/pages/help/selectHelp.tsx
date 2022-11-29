import * as React from 'react';
import {
  Button,
  Text,
  Link,
  Card,
  CardBody,
} from "@chakra-ui/react";


export default function SimpleAccordion() {
  return (
    
    <Card alignItems={"center"} justifyContent={"center"}>
      <CardBody>
        <Text textAlign={"center"} fontSize='4xl' m={5}>
          Поддержка
        </Text>
        <Link href="/help/describeHelp" m={5}><Button color="info">Написать сообщение</Button></Link>
        <Link href="/help/answers" m={5}><Button  color="info">Посмотреть ответы</Button></Link>
      </CardBody>
    </Card>
  );
}