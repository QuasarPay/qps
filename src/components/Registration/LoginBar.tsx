import { IconButton, Flex, Image, Box, Center, Button  } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LoginBar({ onOpen, ...rest }: any) {
  const router = useRouter(); 
  return (
 
    <Flex
      display='flex'
      zIndex='3'
      px={{ base: 4, md: 4, lg: 20}}
      top="0"
      bg = "white"
      position="sticky"      
      h={14}
      alignItems="center"      
      justifyContent={{ base: "space-between", md: "space-between" }}
     
      {...rest}
    >
      <Flex justify='flex-start' onClick={() => router.push('/')} cursor='pointer'>
        <Image src="/qpsicon.png" alt="qps logo" w={20} />
      </Flex>
      
      <Flex justify='flex-end'>
        <Button>
          Create an Account
        </Button>
      </Flex>     

      </Flex>

  );
}