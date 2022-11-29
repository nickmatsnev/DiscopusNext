import * as React from 'react';
import {
    Button,
    Text,
    Link,
    Card,
    CardBody,
    Textarea,
    CardFooter
  } from "@chakra-ui/react";



export default function SimpleAccordion() {
    return (
                <Card alignItems={"center"} justifyContent={"center"}>
                    <CardBody>
                        <Text textAlign={"center"} fontSize='4xl' m={5}>
                            Опишите вашу проблему
                        </Text>
                        
                    </CardBody>
                    <CardFooter w={"25%"}>
                        <Textarea
                            aria-label="problem"
                            placeholder="Ваша проблема"
                        />
                    </CardFooter>
                    <CardFooter>
                    <Link href="/help/answers"><Button color="primary">Отправить</Button></Link>
                    </CardFooter>
                </Card>
    );
}