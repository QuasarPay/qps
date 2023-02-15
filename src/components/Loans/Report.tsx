import React from "react";
import { Box, Flex, Text, Icon, Progress, Badge } from "@chakra-ui/react"
import { RxExit, RxDownload, RxPlus } from "react-icons/rx"

const Report = () => {
    return(
        <Box bg="#fff" borderRadius="md" h="300px" w="760px" py={2} px={4}>
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
                <Flex px={2} direction="column" mt={5}>
                    <Text fontSize={14}> You Owe </Text>
                    <Text fontSize={32} fontWeight={600} mb={2}>
                        &#8358;270,000
                    </Text>
                    <Progress value={60} colorScheme="purple" bg="purple.100" borderRadius="10px" mb={2} />
                   <Text fontSize={14}> &#8358;270,000.00 out of &#8358;450,000.00 </Text>
                </Flex>
                
            </Flex>
        </Box>
    )
}

export default Report;