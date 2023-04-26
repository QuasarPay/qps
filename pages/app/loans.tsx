import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import Container from "../../src/components/Layout/Container";
import Report from "../../src/components/Loans/Report";
import { groups, approvedLoans, requestsLoans, sentLoans } from "../../fakedata";

const MyLoans = () => {
  return (
    <Container>
      <Flex mt={20} textAlign="left" direction="column" gap={2}>
        <Report />
        <Flex bg="#FFF" borderRadius="md" w="760px" py={2} px={4}>
          <Tabs isFitted colorScheme="purple" w="full">
            <TabList>
              <Tab fontWeight={600}>Approved</Tab>
              <Tab fontWeight={600}>Sent</Tab>
              <Tab fontWeight={600}>
                Received{" "}
                <Tag ml={1} colorScheme="purple">
                  4
                </Tag>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex direction="column" gap={2} px={4} py={2}>
                  {approvedLoans.map((iv) => (
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
                        <Flex direction="column">
                        <Text fontSize="16" fontWeight={500} w="120px">
                          {iv.name}
                        </Text>
                        <Text fontSize="14" color="#5A5A5A" fontWeight={500}>
                            {iv.time}
                        </Text>
                        </Flex>
                      </Flex>
                      <Badge colorScheme="purple">{iv.tag}</Badge>
                        <Text fontSize="16" fontWeight={500}>
                          &#8358;{iv.amount}
                        </Text>
                      <Flex gap={2}>
                        <Button
                          variant="filled"
                          bg="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#25002F",
                          }}
                          color="white"
                        >
                          Say Thanks
                        </Button>
                        <Button
                          variant="outline"
                          borderColor="#400050"
                          color="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#400050",
                            borderColor: "none",
                          }}
                        >
                          Refund
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                   <Flex
                      gap={2}
                      align="center"
                      px={2}
                      borderRadius="10px"
                      justify="space-between"
                    >
                      <Flex align="center" gap="2" cursor="pointer">
                        <Avatar src="https://i.imgur.com/mJqC8j2.jpg" borderRadius="md" size="md" />
                        <Flex direction="column">
                        <Text fontSize="16" fontWeight={500} w="120px">
                          John Udoumoh
                        </Text>
                        <Text fontSize="14" color="#5A5A5A" fontWeight={500}>
                            4 days ago
                        </Text>
                        </Flex>
                      </Flex>
                      <Badge colorScheme="purple">Mid Term Loan</Badge>
                        <Text fontSize="16" fontWeight={500}>
                          &#8358;335,000
                        </Text>
                      <Flex gap={2}>
                        <Button
                          variant="filled"
                          bg="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#25002F",
                          }}
                          color="white"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          borderColor="#400050"
                          color="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#400050",
                            borderColor: "none",
                          }}
                        >
                          Refund
                        </Button>
                      </Flex>
                    </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
              <Flex direction="column" gap={2} px={4} py={2}>
                  {sentLoans.map((iv) => (
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
                        <Flex direction="column">
                        <Text fontSize="16" fontWeight={500} w="120px">
                          {iv.name}
                        </Text>
                        <Text fontSize="14" color="#5A5A5A" fontWeight={500}>
                            {iv.time}
                        </Text>
                        </Flex>
                      </Flex>
                      <Badge colorScheme="purple">{iv.tag}</Badge>
                        <Text fontSize="16" fontWeight={500}>
                          &#8358;{iv.amount}
                        </Text>
                      <Flex>
                        <Button
                          variant="outline"
                          borderColor="#400050"
                          color="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#400050",
                            borderColor: "none",
                          }}
                        >
                          Cancel Request
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
              <Flex direction="column" gap={2} px={4} py={2}>
                  {requestsLoans.map((iv) => (
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
                        <Flex direction="column">
                        <Text fontSize="16" fontWeight={500} w="120px">
                          {iv.name}
                        </Text>
                        <Text fontSize="14" color="#5A5A5A" fontWeight={500}>
                            {iv.time}
                        </Text>
                        </Flex>
                      </Flex>
                      <Badge colorScheme="purple">{iv.tag}</Badge>
                        <Text fontSize="16" fontWeight={500}>
                          &#8358;{iv.amount}
                        </Text>
                      <Flex gap={2}>
                        <Button
                          variant="filled"
                          bg="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#25002F",
                          }}
                          color="white"
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          borderColor="#400050"
                          color="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#400050",
                            borderColor: "none",
                          }}
                        >
                          Reject
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MyLoans;
