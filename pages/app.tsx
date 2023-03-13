import React from "react";
import { Flex } from "@chakra-ui/react";
import Container from "../src/components/Layout/Container";
import Greetings from "../src/components/App/Greetings";
import RadialChart from "../src/charts/RadialChart";
import GuageChart from "../src/charts/GuageChart";

const MyApp = () => {
  return (
   <Container>
        <Flex mt={20} textAlign="left" direction="column" >
          <Greetings />   
          <GuageChart />    
          </Flex>
   </Container>

  );
};

export default MyApp;
