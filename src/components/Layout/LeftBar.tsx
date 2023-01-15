import {
  Button,
  Text,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import {
  IoSettingsOutline,
  IoCubeOutline,
  IoCardOutline,
  IoCalculatorOutline,
  IoEllipsisHorizontalCircle,
} from "react-icons/io5";
import {
  RxDashboard,
  RxCounterClockwiseClock,
  RxCaretRight,
  RxUpdate,
} from "react-icons/rx";
import { RiHandHeartLine } from "react-icons/ri";
import { TbMicrophone } from "react-icons/tb";
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
      zIndex={2}
      display={{ base: "none", md: "flex" }}
    >
      <Image
        src="/qpsfull.svg"
        alt="qps_logo"
        minW="80px"
        pointerEvents="none"
      />

      <Flex
        direction="row"
        mt={8}
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
        <Text fontSize={16} fontWeight="400">
          Dashboard{" "}
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={2}
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
        <Text fontSize={16} fontWeight="400">
          Loans
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={2}
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
        <Text fontSize={16} fontWeight="400">
          Cards
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={2}
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
        bg={router.pathname === "/app/transactions" ? "#400050" : "none"}
        onClick={() => router.push("/app/transactions")}
      >
        <Icon as={RxCounterClockwiseClock} w={6} h={6} mr={2} />
        <Text fontSize={16} fontWeight="400">
          Transactions
        </Text>
      </Flex>

      <Flex
        direction="row"
        mt={2}
        w="full"
        py={2}
        px={4}
        align="center"
        role="group"
        _hover={{
          color: "#FFFFFF",
          bg: router.pathname === "/app/settings" ? "#25002F" : "#400050",
        }}
        borderRadius="md"
        cursor="pointer"
        color={router.pathname === "/app/settings" ? "#ffffff" : "#868686"}
        bg={router.pathname === "/app/settings" ? "#400050" : "none"}
        onClick={() => router.push("/app/settings")}
      >
        <Icon as={IoSettingsOutline} w={6} h={6} mr={2} />
        <Text fontSize={16} fontWeight="400">
          Settings
        </Text>
      </Flex>

      <Menu>
        <MenuButton
          _hover={{
            color: "#FFFFFF",
            bg: "#400050",
          }}
          borderRadius="md"
          mt={2}
          w="full"
          py={2}
          px={4}
          role="group"
          color={"#868686"}
        >
          <Flex direction="row" bg={"none"}>
            <Icon as={IoEllipsisHorizontalCircle} w={6} h={6} mr={2} />
            <Text fontSize={16} fontWeight="400">
              More
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Flex
              direction="row"
              w="full"
              align="center"
              role="group"
              py={2}
              px={4}
              color="#10151D"
            >
              <Flex
                bg="#0CA612"
                align="center"
                justify="center"
                p={1}
                w="23px"
                h="23px"
                borderRadius="full"
              >
                <Text color="#fff" fontSize={16}>
                  $
                </Text>
              </Flex>
              <Text ml={2} fontSize={14} fontWeight="500">
                Send Money
              </Text>
              <Icon as={RxCaretRight} w={5} h={5} ml={9} />
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex
              direction="row"
              mt={2}
              w="full"
              py={2}
              px={4}
              align="center"
              role="group"
              color="#10151D"
            >
              <Flex
                bg="#0066FF"
                align="center"
                justify="center"
                p={1}
                w="23px"
                h="23px"
                borderRadius="full"
              >
                <Icon as={RiHandHeartLine} w={4} h={4} color="#fff" />
              </Flex>
              <Text ml={2} fontSize={14} fontWeight="500">
                Request Funds
              </Text>
              <Icon as={RxCaretRight} w={5} h={5} ml={6} />
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex
              direction="row"
              mt={2}
              w="full"
              py={2}
              px={4}
              align="center"
              role="group"
              color="#10151D"
            >
              <Flex
                bg="#ffd700"
                align="center"
                justify="center"
                p={1}
                w="23px"
                h="23px"
                borderRadius="full"
              >
                <Icon as={RxUpdate} w={4} h={4} color="#fff" />
              </Flex>
              <Text ml={2} fontSize={14} fontWeight="500">
                Subscriptions
              </Text>
              <Icon as={RxCaretRight} w={5} h={5} ml={8} />
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex
              direction="row"
              mt={2}
              w="full"
              py={2}
              px={4}
              align="center"
              role="group"
              color="#10151D"
            >
              <Flex
                bg="#FF7070"
                align="center"
                justify="center"
                p={1}
                w="23px"
                h="23px"
                borderRadius="full"
              >
                <Icon as={IoCalculatorOutline} w={4} h={4} color="#fff" />
              </Flex>
              <Text ml={2} fontSize={14} fontWeight="500">
                Credit Calculator
              </Text>
              <Icon as={RxCaretRight} w={5} h={5} ml={3} />
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex
        direction="column"
        mt={28}
        w="210px"
        h="200px"
        py={2}
        px={4}
        align="center"
        borderRadius="md"
        color={"#ffffff"}
        bgImg="/qpaibg.png"
      >
        <Flex
          bg="#56006B"
          w="40px"
          h="40px"
          mt="-30px"
          borderRadius="full"
          align="center"
          justify="center"
          borderWidth="10px"
          p={5}
          borderColor="white"
        >
          <Icon as={TbMicrophone} w={6} h={6} />
        </Flex>
        <Text fontSize={16} fontWeight="500" mt="5px">
          AI Chat Assistant
        </Text>

        <Text fontSize={14} fontWeight="400" textAlign="center">
          Having trouble using our payment system? Talk to our A.I Assistant
        </Text>
        <Button
          bg="#FFFFFF"
          color="#56006B"
          borderRadius={"md"}
          mt="20px"
          _hover={{ bg: "#56006B", color: "#FFFFFF" }}
        >
          Start Audio Chat
        </Button>
      </Flex>
    </Flex>
  );
};

export default LeftBar;
