import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

interface ContainterProprs {
  children: React.ReactNode;
}

const Container: React.FC<ContainterProprs> = ({ children }) => {
  return (
    <Center>
      <Box bg="gray.200" minH="100vh" w="full">
        <Header />
        <Flex justify="space-between">
          <LeftBar />
          <Flex justify="center" ml={{ lg: "330px" }}>
            {children}
          </Flex>
          <RightBar />
        </Flex>
      </Box>
    </Center>
  );
};

export default Container;
