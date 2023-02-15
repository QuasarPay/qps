import React from "react";
import { Flex } from "@chakra-ui/react";
import Container from "../src/components/Layout/Container";
import Greetings from "../src/components/App/Greetings";
import RadialChart from "../src/charts/RadialChart";

const MyApp = () => {
  return (
   <Container>
        <Flex mt={20} textAlign="left" direction="column" >
          <Greetings />   
          <RadialChart />       
          </Flex>
   </Container>

  );
};

export default MyApp;
