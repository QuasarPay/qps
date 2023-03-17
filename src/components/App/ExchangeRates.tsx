import React from "react";
import { Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";

const ExchangeRates = () => {
  return (
    <Flex direction="column" gap="2" py={2} px={4}>
      <Text fontWeight={600}>Exchange Rates</Text>
      <Flex direction="column" w="200px" gap={2}>
        <Flex gap="2" fontWeight={500} align="center" justify="space-between">
          <Image
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
            borderRadius="md"
            alt="us-flag"
            h="5"
          />
          <Text minW={9}>USD</Text>
          <Text minW="50px">0.0022</Text>
          <Text>NGN</Text>
          <Text>0.0023</Text>
          <Flex align="center" gap={2} ml={10}>
            <Icon as={IoTrendingDown} h={4} w={4} color="red" />
            <Text> -2.08% </Text>
          </Flex>
        </Flex>
        <Flex gap="2" fontWeight={500} align="center">
          <Image
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
            borderRadius="md"
            alt="gb-flag"
            h="5"
          />
          <Text minW={9}>GBP</Text>
          <Text minW="50px">0.0018</Text>
          <Text>NGN</Text>
          <Text>0.0015</Text>
          <Flex align="center" gap={2} ml={10}>
            <Icon as={IoTrendingUp} h={4} w={4} color="green" />
            <Text> +2.01% </Text>
          </Flex>
        </Flex>
        <Flex gap={2} fontWeight={500} align="center">
          <Image
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/CA.svg"
            borderRadius="md"
            alt="ca-flag"
            h="5"
          />
          <Text minW={9}>CAD</Text>
          <Text minW="50px">0.0030</Text>
          <Text>NGN</Text>
          <Text>0.0032</Text>
          <Flex align="center" gap={2} ml={10}>
            <Icon as={IoTrendingDown} h={4} w={4} color="red" />
            <Text> -2.10% </Text>
          </Flex>
        </Flex>
        <Flex gap="2"  fontWeight={500} align="center">
          <Image
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/EU.svg"
            borderRadius="md"
            alt="eu-flag"
            h="5"
          />
          <Text minW={9}>EUR</Text>
          <Text minW="50px">0.0020</Text>
          <Text>NGN</Text>
          <Text>0.0018</Text>
          <Flex align="center" gap={2} ml={10}>
            <Icon as={IoTrendingUp} h={4} w={4} color="green" />
            <Text> +1.12% </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExchangeRates;
