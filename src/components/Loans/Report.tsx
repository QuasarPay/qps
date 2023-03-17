import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Box, Flex, Text, Icon, Progress, Badge } from "@chakra-ui/react"
import { RxExit, RxDownload, RxPlus } from "react-icons/rx"

interface AnimatedProgressProps{
    targetValue: number,
    colorScheme: string, 
    bg: string,
    borderRadius: string,
    mb: number
}

const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ targetValue, colorScheme, bg, borderRadius, mb }) => {
    const shouldReduceMotion = useReducedMotion();
    const [value, setValue] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
        if (!shouldReduceMotion) {
          intervalRef.current = setInterval(() => {
            setValue((v) => (v < targetValue ? v + 1 : v));
          }, 20);
        }
    
        return () => clearInterval(intervalRef.current);
      }, [shouldReduceMotion, targetValue]);
    
      useEffect(() => {
        if (value === targetValue && intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      }, [value, targetValue]);
  
    return (
      <Progress
        value={shouldReduceMotion ? targetValue : value}
        colorScheme={colorScheme}
        bg={bg}
        borderRadius={borderRadius}
        mb={mb}
      />
    );
  };
  

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
                    <AnimatedProgress targetValue={60} colorScheme="purple" bg="purple.100" borderRadius="10px" mb={2} />
                   <Text fontSize={14}> &#8358;270,000.00 out of &#8358;450,000.00 </Text>
                </Flex>
                
            </Flex>
        </Box>
    )
}

export default Report;