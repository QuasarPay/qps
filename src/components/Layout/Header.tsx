import { IconButton, Flex, Image, Box, Center, Button  } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import UserProfile from "./UserProfile";

export default function Header() {
  const router = useRouter(); 
  const [label, setLabel] = React.useState("");
  const [route, setRoute] = React.useState("");
  return (
 
    <Flex
      top="0"
      right={0}
      bg = "white"
      zIndex={1}
      position="fixed"      
      h={16}
      w="full"
      boxShadow="md"
      align="center" 
      justify="right" 
      px={10}
    >      
      <Flex>
       <UserProfile />
      </Flex>     

      </Flex>

  );
}