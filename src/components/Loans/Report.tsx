import React from "react";
import EligibilityModal from "./EligibilityModal";
import { Box, Flex, Text, Icon, Progress, Badge, useDisclosure } from "@chakra-ui/react";
import { RxPlus, RxReset, RxCheck } from "react-icons/rx";

const Report = () => {
  const { isOpen: isCheckOpen, onOpen: onCheckOpen, onClose: onCheckClose } = useDisclosure();
  return (
    <Box bg="#fff" borderRadius="md" h="240px" w="760px" py={2} px="75px">
      <Flex direction="column">
        <Flex direction="row" justify="space-between">
          <Text fontSize={24} fontWeight={600} color="#400050">
            Loan Status Report
          </Text>
          <Box>
            <Badge variant="outline" colorScheme="red" borderRadius="md">
              Loan Rank: Medium
            </Badge>
          </Box>
        </Flex>
        <Flex direction="column" mt={2} >
          <Text fontSize={14}> You Owe </Text>
          <Text fontSize={28} fontWeight={600} mb={2}>
            &#8358;270,000<span style={{ fontSize:14, marginLeft: 2 }}>/ &#8358;450,000</span>
          </Text>
          <Progress
            value={60}
            colorScheme="purple"
            bg="purple.100"
            borderRadius="10px"
            mb={2}
          />
        </Flex>

        <Flex justify="center" align="center" mt="20px">
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
            <Flex
              bg="#0CA612"
              align="center"
              p={1}
              w="30px"
              h="30px"
              borderRadius="md"
            >
              <Icon as={RxReset} h={5} w={5} />
            </Flex>
            <Text ml={2}> Repay Loan </Text>
          </Flex>

          <Flex
            bg="#400050"
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
            <Flex
              bg="#9F00C7"
              justify="center"
              align="center"
              p={1}
              w="30px"
              h="30px"
              borderRadius="md"
            >
              <Icon as={RxPlus} h={5} w={5} />
            </Flex>
            <Text ml={2}> Quick Loans </Text>
          </Flex>

          <Flex
            bg="#141F30"
            w="190px"
            h="50px"
            px="2"
            align="center"
            color="#fff"
            borderRadius="md"
            cursor="pointer"
            _hover={{ transform: "scale(1.03 )" }}
            onClick={onCheckOpen}
          >
            <Flex
              bg="#1F4278"
              align="center"
              justify="center"
              p={1}
              w="30px"
              h="30px"
              borderRadius="md"
            >
              <Icon as={RxCheck} h={5} w={5} />
            </Flex>
            <Text ml={2}> Check Eligibility </Text>
          </Flex>
          <EligibilityModal isOpen={isCheckOpen} onClose={onCheckClose} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Report;
