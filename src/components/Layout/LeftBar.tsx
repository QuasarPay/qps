import { Box, Text, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { IoGridOutline, IoCubeOutline, IoCardOutline } from "react-icons/io5";
import { RxDashboard, RxCounterClockwiseClock } from "react-icons/rx";
import { useRouter } from "next/router";

const LeftBar = () => {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      bg="#ffffff"
      minH="full"
      w="300px"
      pos="fixed"
      mx="auto"
      px={5}
      py={4}
      align="center"
      justify="start"
      zIndex={2}
    >
      <Image
        src="/qpsfull.svg"
        alt="qps_logo"
        minW="80px"
        pointerEvents="none"
      />

      <Flex
        direction="row"
        mt={10}
        w="full"
        py={2}
        px={4}
        align="center"
        role="group"
        _hover={{
          color: "#FFFFFF",
          bg: router.pathname === "/app" ? "#25002F" : "#400050",
        }}
        borderRadius="md"
        cursor="pointer"
        color={router.pathname === "/app" ? "#ffffff" : "#868686"}
        bg={router.pathname === "/app" ? "#400050" : "#none"}
        onClick={() => router.push("/app")}
      >
        <Icon as={RxDashboard} w={6} h={6} mr={2} />
        <Text fontSize={20} fontWeight="400">
          Dashboard{" "}
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={5}
        w="full"
        py={2}
        px={4}
        align="center"
        role="group"
        _hover={{
          color: "#FFFFFF",
          bg: router.pathname === "/app/loans" ? "#25002F" : "#400050",
        }}
        borderRadius="md"
        cursor="pointer"
        color={router.pathname === "/app/loans" ? "#ffffff" : "#868686"}
        bg={router.pathname === "/app/loans" ? "#400050" : "none"}
        onClick={() => router.push("/loans")}
      >
        <Icon as={IoCubeOutline} w={6} h={6} mr={2} />
        <Text fontSize={20} fontWeight="400">
          Loans
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={5}
        w="full"
        py={2}
        px={4}
        align="center"
        role="group"
        _hover={{
          color: "#FFFFFF",
          bg: router.pathname === "/app/cards" ? "#25002F" : "#400050",
        }}
        borderRadius="md"
        cursor="pointer"
        color={router.pathname === "/app/cards" ? "#ffffff" : "#868686"}
        bg={router.pathname === "/app/cards" ? "#400050" : "none"}
        onClick={() => router.push("/app/cards")}
      >
        <Icon as={IoCardOutline} w={6} h={6} mr={2} />
        <Text fontSize={20} fontWeight="400">
          Cards
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={5}
        w="full"
        py={2}
        px={4}
        align="center"
        role="group"
        _hover={{
          color: "#FFFFFF",
          bg: router.pathname === "/app/transactions" ? "#25002F" : "#400050",
        }}
        borderRadius="md"
        cursor="pointer"
        color={router.pathname === "/app/transactions" ? "#ffffff" : "#868686"}
        bg={router.pathname === "/app/transactions" ? "#400050" : 'none'}
        onClick={() => router.push("/app/transactions")}
      >
        <Icon as={RxCounterClockwiseClock} w={6} h={6} mr={2} />
        <Text fontSize={20} fontWeight="400">
          Transactions
        </Text>
      </Flex>


    </Flex>
  );
};

export default LeftBar;
