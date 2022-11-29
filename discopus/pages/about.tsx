// pages/about.tsx
import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react'

export default function About() {
  return (

    <Flex
    direction={"column"}
    height={"100vh"}
    alignItems={"center"}
    justifyContent={"center"}>
      <Text fontSize='4xl'>
      Discopus - о нас
      </Text>
      <Text fontSize='xl'>
        {'Something about us.'}
      </Text>
    </Flex>

  );
}
