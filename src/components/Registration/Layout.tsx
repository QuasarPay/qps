import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Center>
      <Box minH="100vh" minW="full" bgImg="/qpbg.png">
        <Flex justify="center">{children}</Flex>
      </Box>
    </Center>
  );
};
