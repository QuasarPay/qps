import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { format } from "date-fns";
import { RxExit, RxDownload, RxPlus } from "react-icons/rx";

const Greetings = () => {
  const user = JSON.parse(window.localStorage.getItem("user")!);
  return (
    <Box bg="#fff" borderRadius="md" h="220px" w="760px" py={2} px={4}>
      <Flex direction="row">
        <Flex justify="space-between" direction="column">
          <Text color="#400050" fontSize={24} fontWeight={600}>
            Hello, {user.firstname}👋 
            <Text fontSize={14} fontWeight={400} color="#404040">
              {" "}
              What would you like to do today?{" "}
            </Text>{" "}
          </Text>         
        </Flex>
          <Flex direction="column" ml="350px">
          <Text
              textAlign="right"
              color="#400050"
              fontSize={24}
              fontWeight={600}
            >
              {" "}
              {format(new Date(), "do MMM yyyy")}
              <Text fontSize={12} fontWeight={400} color="#404040">
              {format(new Date(), "H:mm, z ")}
              </Text>{" "}
            </Text>
          </Flex>
        
        </Flex>



        <Flex align="center" mt="80px">
        <Flex
            bg="rgba(0, 74, 3, 0.8)"
            w="190px"
            h="50px"
            px="2"
            align="center"
            color="#fff"
            borderRadius="md"
            mr="20px"
            cursor="pointer"
            >
            <Flex bg="#0CA612" align="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxExit} h={5} w={5} />
            </Flex>
            <Text ml={2}> Spend Money </Text>
            </Flex>

            <Flex
            bg="rgba(0, 32, 81, 0.8)"
            w="190px"
            h="50px"
            px="2"
            align="center"
            color="#fff"
            borderRadius="md"
            mr="20px"
            cursor="pointer"

            >
            <Flex bg="#0066FF" justify="center" align="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxDownload} h={5} w={5} />
            </Flex>
            <Text ml={2}> Save Money </Text>
            </Flex>

            <Flex
            bg="rgba(148, 125, 0, 0.8)"
            w="190px"
            h="50px"
            px="2"
            align="center"
            color="#fff"
            borderRadius="md"
            cursor="pointer"
            >
            <Flex bg="#FFD700" align="center" justify="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxPlus} h={5} w={5} />
            </Flex>
            <Text ml={2}> Borrow Money </Text>
            </Flex>

            </Flex>
            

           

    </Box>
    );
};

export default Greetings;
