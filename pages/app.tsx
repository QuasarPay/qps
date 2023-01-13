import React from "react";
import { Text, Center, Flex, Avatar, Box } from "@chakra-ui/react";
import Container from "../src/components/Layout/Container";
import Greetings from "../src/components/App/Greetings";

const MyApp = () => {
  const user = JSON.parse(window.localStorage.getItem("user")!);
  const data = JSON.parse(window.localStorage.getItem("profile")!);
  return (
   <Container>
        <Flex mt={20} textAlign="left" direction="column" >
          <Greetings />          
          </Flex>
   </Container>

  );
};

export default MyApp;
