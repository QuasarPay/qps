import React from "react";
import { Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import { currencyData } from "../../../fakedata";

const ExchangeRates = () => {
  return (
    <Flex direction="column" gap="2" py={2} px={4}>
        <Flex justify="space-between" w="350px" align="center">
            <Text fontWeight={600}>Exchange Rates</Text>
            <Button variant="link" fontWeight={600} color="#400050">See more</Button>
        </Flex>
      <Flex direction="column" w="200px" gap={2}>
        {currencyData.map((currency, index) => (
          <Flex key={index} gap="2" fontWeight={500} align="center" justify="space-between">
            <Image
              src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${currency.country}.svg`}
              borderRadius="md"
              alt={`${currency.name}-flag`}
              h="5"
            />
            <Text minW={9}>{currency.name}</Text>
            <Text minW="50px">{currency.value}</Text>
            <Text>{currency.code}</Text>
            <Text>{currency.codeValue}</Text>
            <Flex align="center" gap={2} ml={10}>
              <Icon as={currency.trend === "up" ? IoTrendingUp : IoTrendingDown} h={4} w={4} color={currency.trend === "up" ? "green" : "red"} />
              <Text>{currency.trendValue}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ExchangeRates;
