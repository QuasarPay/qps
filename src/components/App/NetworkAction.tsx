import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { RxExit, RxDownload, RxPlus } from "react-icons/rx";

const NetworkAction = () => {
  const user = JSON.parse(window.localStorage.getItem("user")!);
  return (
        <Flex align="center" justify="center" bg="#fff" borderRadius="md" h="70px" w="760px" py={2} px={4}>
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
            _hover={{ transform: "scale(1.03 )" }}
            >
            <Flex bg="#0CA612" align="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxExit} h={5} w={5} />
            </Flex>
            <Text ml={2}> Send Money </Text>
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
            _hover={{ transform: "scale(1.03 )" }}

            >
            <Flex bg="#0066FF" justify="center" align="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxPlus} h={5} w={5} />
            </Flex>
            <Text ml={2}> Add Contact </Text>
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
            _hover={{ transform: "scale(1.03 )" }}
            >
            <Flex bg="#FFD700" align="center" justify="center" p={1} w="30px" h="30px" borderRadius="md">
                <Icon as={RxDownload} h={5} w={5} />
            </Flex>
            <Text ml={2}> Borrow Money </Text>
            </Flex>

            </Flex>
    );
};

export default NetworkAction;
