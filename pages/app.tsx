import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import Container from "../src/components/Layout/Container";
import Greetings from "../src/components/App/Greetings";
import GuageChart from "../src/charts/GuageChart";
import RadialChart from "../src/charts/RadialChart";

const MyApp = () => {
  return (
    <Container>
      <Flex mt={20} textAlign="left" direction="column">
        <Greetings />
        <Flex
          mt={4}
          px={4}
          py={2}
          justify="space-between"
          w="760px"
          h="210px"
          bg="white"
          borderRadius="md"
        >
          <Flex direction="column" gap="2" w="360px">
            <Text fontSize={22} color="#400050" fontWeight={600}>
              A new and easy way to make transactions.
            </Text>
            <Text fontSize={14} color="#404040">
              Save, spend, send and borrow money from anyone in your contact
              list with minimal interest rates
            </Text>
            <Button bg="#400050" mt={2} color="white" w="140px" px={2} py={6} _hover={{ bg: "#25002F"}}>
              Get Started
            </Button>
          </Flex>
          <Flex direction="column" pointerEvents="none">
            <Image src="/qpspsps.png" h="200px"  alt="use-quasar-pay-image" />
          </Flex>
        </Flex>
        <Flex gap="5">
            <RadialChart />
          <Flex mt={4} w="420px" h="150px" bg="white" borderRadius="md"></Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MyApp;
