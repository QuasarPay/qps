import { Box, Text, Flex, Icon, Image, Divider } from "@chakra-ui/react";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const RightBar = () => {
    const user = JSON.parse(window.localStorage.getItem("user")!);
    const router = useRouter();
    return (
        <Flex
        direction="column"
        bg="#fff"
        minH="full"
        w="400px"
        pos="fixed"
        right={0}
        px={5}
        py={4}
        align="center"
        zIndex={0}
        display={{ base: "none", lg: "block" }}
        >
        <Flex
            direction="row"
            mt="75px"
            w="360px"
            h="160px"
            py={2}
            px={4}
            borderRadius="md"
            cursor="pointer"
            bgImg="/qpscard.png"
            color="#fff"
        >
            <Flex direction="column" justify="start">
            <Text fontSize={12} fontWeight="400">
                Balance
            </Text>
            <Text fontSize={30} fontWeight="600">
                &#8358;354,500
            </Text>
            <Text fontSize={18} fontWeight="500">
                4839 9403 2783 4592
            </Text>
            <Flex direction="row" mt={2}>
                <Text fontSize={12} fontWeight={300}>
                VALID THRU <Text fontWeight={600}>12/25</Text>
                </Text>

                <Text ml={4} fontSize={12} fontWeight={300}>
                CVV <Text fontWeight={600}>159</Text>
                </Text>
            </Flex>
            </Flex>

            <Flex direction="column" ml={20}>
            <Icon as={IoEyeOutline} ml={10} />
            <Image
                src="/visacard.png"
                w="full"
                alt="visa"
                mt="95px"
                pointerEvents="none"
            />
            </Flex>
        </Flex>
        <Text mt={2} fontWeight={500}>
            Card Details
        </Text>
        <Flex direction="column" mt={2}>
            <Text fontSize={12}>Card Holder
                <Text fontSize={16} fontWeight={500}>{user.firstname} {user.lastname}</Text>
            </Text>
        </Flex>

        <Flex
            direction="column"
            mt={5}
            w="full"
            py={2}
        >
            <Text fontSize={20} fontWeight="500" color="#400050">
            Transaction History
            </Text>
            <Flex direction="column" mt={2} ml={3}>
                <Text fontSize={12} mb={1} >
                    Upcoming Payments
                </Text>
                <Text fontSize={18} fontWeight="500" mb={1}>
                    Spotify
                </Text>
                <Text fontSize={12}>Due Date: Jan 25</Text>
            </Flex>
            <Divider mt={2} />

            <Flex direction="column" mt={2} ml={3}>
                <Flex direction="row"  justify="space-between">
                    <Flex direction="column">
                        <Text fontSize={12} mb={1} >
                            Jan 18th
                        </Text>
                    </Flex>

                    <Flex direction="column" justify="end">
                        <Text fontSize={12} mb={1} >
                            - 25,000 NGN
                        </Text>

                    </Flex>
                </Flex>

                <Flex direction="row" justify="space-between">
                    <Flex direction="column">
                        <Text fontSize={14} fontWeight="500" mb={1}>
                            Transfer to Samuel Chinedu
                        <Text fontSize={12}>
                            16:45
                        </Text>
                        </Text>
                    </Flex>

                    <Flex direction="column" justify="end">
                        <Text fontSize={14} fontWeight="500" mb={1} color="#B50000">
                            - 55,000 NGN
                        </Text>
                    </Flex>
                </Flex>

                <Flex direction="row" mt={2} justify="space-between">
                    <Flex direction="column">
                        <Text fontSize={14} fontWeight="500" mb={1} w="180px">
                            Loan Request accepted by Jennifer Garnt
                        <Text fontSize={12}>
                            12:33
                        </Text>
                        </Text>
                    </Flex>

                    <Flex direction="column" justify="end">
                        <Text fontSize={14} fontWeight="500" mb={1} color="#0CA612">
                            + 30,000 NGN
                        </Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>

    </Flex>
    );
};

export default RightBar;
