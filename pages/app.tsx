import React from "react";
import { Text, Center, Flex, Avatar, Box } from "@chakra-ui/react";
import Container from "../src/components/Layout/Container";

const MyApp = () => {
  const user = JSON.parse(window.localStorage.getItem("user")!);
  const data = JSON.parse(window.localStorage.getItem("profile")!);
  return (
   <Container>
        <Flex mt={20} textAlign="left" direction="column" >
          <Text>Dashboard here</Text>
          <Flex mt={10}>
            <Avatar src={data.profileImg} size="lg" />
            <Flex direction="column" ml={4}>
              <Text fontWeight={500}>
                {" "}
                Welcome, {user.firstname} {user.lastname}{" "}
              </Text>
              <Text textAlign="left"> @{data.username} </Text>
            </Flex>
          </Flex>
        </Flex>
   </Container>

  );
};

export default MyApp;
