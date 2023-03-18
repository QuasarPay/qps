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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
} from "@chakra-ui/react";
import Container from "../../src/components/Layout/Container";
import Carousel from "../../src/components/App/Carousel";
import NetworkAction from "../../src/components/App/NetworkAction";
import { groups, invites } from "../../fakedata";

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
              <Tab fontWeight={600}>Invitations</Tab>
              <Tab fontWeight={600}>Notifications</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex direction="column" px={4} py={2}>
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
                      <Flex>
                        <StatGroup gap={4}>
                          <Stat>
                            <StatLabel>Deposited</StatLabel>
                            <StatNumber fontSize={20}>
                              &#8358;{res.deposit}
                            </StatNumber>
                            <StatHelpText>
                              <StatArrow type={res.depositType} />
                              {res.depositStat}
                            </StatHelpText>
                          </Stat>

                          <Stat>
                            <StatLabel>Received</StatLabel>
                            <StatNumber fontSize={20}>
                              &#8358;{res.received}
                            </StatNumber>
                            <StatHelpText>
                              <StatArrow type={res.receiveType} />
                              {res.receiveStat}
                            </StatHelpText>
                          </Stat>
                        </StatGroup>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
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
