import React from "react";
import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Badge,
  Box,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import Container from "../../src/components/Layout/Container";
import Carousel from "../../src/components/App/Carousel";
import NetworkAction from "../../src/components/App/NetworkAction";
import { groups, invites, subscriptions } from "../../fakedata";
import { IoCaretDown, IoCaretUp, IoEllipsisVertical } from "react-icons/io5";

const MyNetwork = () => {
  return (
    <Container>
      <Flex mt={20} gap={2} direction="column">
        <Carousel />
        <NetworkAction />
        <Flex bg="#FFF" borderRadius="md" w="760px" py={2} px={4}>
          <Tabs isFitted colorScheme="purple" w="full">
            <TabList>
              <Tab fontWeight={600}>Contributions</Tab>
              <Tab fontWeight={600}>Subscriptions</Tab>
              <Tab fontWeight={600}>Invitations</Tab>
              <Tab fontWeight={600}>Notifications</Tab>
            </TabList>
            <TabPanels>
              <TabPanel h="40vh" overflowY="auto">
                <Flex direction="column" px={4} py={2} gap={4}>
                  {groups.map((res) => (
                    <Flex
                      gap={2}
                      align="center"
                      px={2}
                      _hover={{ bg: "#E6E6E6" }}
                      key={res.id}
                      cursor="pointer"
                      borderRadius="10px"
                      justify="space-between"
                    >
                      <Flex align="center" gap="2">
                        <Avatar
                          src={res.imageUrl}
                          borderRadius="md"
                          size="md"
                        />
                        <Text fontSize="18" fontWeight={500}>
                          {res.name}
                        </Text>
                      </Flex>
                      <Flex gap={2} align="center">
                        <Flex h={10} px={1} py={1} direction="column" w="130px" bg="rgba(148, 125, 1, 0.9)" color="white" borderRadius="4px" justify="center">
                          <Text fontSize={12}>Deposited</Text>
                          <Flex align="center" gap={1}>
                          <Text fontSize={14}>&#8358;{res.deposit}</Text>
                          <Icon as={res.depositType === "increase" ? IoCaretUp : IoCaretDown} w="4" h="4" />
                          <Text fontSize={11}>{res.depositStat}</Text>
                          </Flex>
                        </Flex>
                        <Flex h={10} px={1} py={1} direction="column"  w="130px" bg="green" color="white" borderRadius="4px" justify="center">
                        <Text fontSize={12}>Withdrawn</Text>
                          <Flex align="center" gap={1}>
                          <Text fontSize={14}>&#8358;{res.received}</Text>
                          <Icon as={res.receiveType === "increase" ? IoCaretUp : IoCaretDown} w="4" h="4" />
                          <Text fontSize={11}>{res.receiveStat}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel h="40vh" overflowY="auto">
              <Flex direction="column" px={4} py={2} gap={4}>
                  {subscriptions.map((res) => (
                    <Flex
                      gap={2}
                      align="center"
                      px={2}
                      key={res.id}
                      borderRadius="10px"
                      justify="space-between"
                    >
                      <Flex align="center" gap="2">
                        <Avatar
                          src={res.imageUrl}
                          borderRadius="md"
                          size="md"
                        />
                        <Text fontSize="18" fontWeight={500}>
                          {res.name}
                        </Text>
                      </Flex>
                      <Flex gap={2} align="center">
                        <Flex h={10} px={1} py={1} direction="column" w="130px" bg="rgba(0, 32, 81, 0.9)" color="white" borderRadius="4px" justify="center">
                          <Text fontSize={12}>Monthly Amount</Text>
                          <Flex align="center" gap={1}>
                          <Text fontSize={14}>&#8358;{res.deposit}</Text>
                          <Icon as={res.depositType === "increase" ? IoCaretUp : IoCaretDown} w="4" h="4" />
                          <Text fontSize={11}>{res.depositStat}</Text>
                          </Flex>
                        </Flex>
                        <IconButton aria-label="actions" icon={<IoEllipsisVertical />} />
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel h="40vh" overflowY="auto">
                <Flex direction="column" gap={2} px={4} py={2}>
                  {invites.map((iv) => (
                    <Flex
                      gap={2}
                      align="center"
                      px={2}
                      key={iv.id}
                      borderRadius="10px"
                      justify="space-between"
                    >
                      <Flex align="center" gap="2" cursor="pointer">
                        <Avatar src={iv.imageUrl} borderRadius="md" size="md" />
                        <Text fontSize="18" fontWeight={500}>
                          {iv.name}
                        </Text>
                      </Flex>
                      <Flex>
                        <Button variant="ghost" colorScheme="purple">Accept</Button>
                        <Button variant="ghost" colorScheme="red">Ignore</Button>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justify="center">
                    <Text color="#400050" fontWeight={500} fontSize={20}>
                        No notifications yet, we&apos;ll keep you posted
                    </Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MyNetwork;
