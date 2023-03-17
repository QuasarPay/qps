import React from "react";
import { Flex, Text, Image, Button, Icon } from "@chakra-ui/react";

const ExchangeRates = () => {
    return(
        <Flex direction="column" gap="2" py={2} px={4} justify="center" >
            <Text fontWeight={600}>Exchange Rates</Text>
            <Flex direction="column" w="200px">
            <Flex gap="2" fontWeight={500} align="center">
                <Image src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg" borderRadius="md" alt="us-flag" h="5" />
                <Text>USD</Text>
                <Text>0.0022</Text>
                <Text>NGN</Text>
                <Text>0.0023</Text>
                <Flex>
                    <Icon
                </Flex>
            </Flex>
            <Flex gap="2" fontWeight={500} align="center">
                <Image src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg" borderRadius="md" alt="gb-flag" h="5" />
                <Text>GBP</Text>
                <Text>0.0018</Text>
                <Text>NGN</Text>
                <Text>0.0015</Text>
            </Flex>
            <Flex gap="2" fontWeight={500} align="center">
                <Image src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/CA.svg" borderRadius="md" alt="ca-flag" h="5" />
                <Text>CAD</Text>
                <Text>0.0030</Text>
                <Text>NGN</Text>
                <Text>0.0032</Text>
            </Flex>
            <Flex gap="2" fontWeight={500} align="center">
                <Image src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/EU.svg" borderRadius="md" alt="eu-flag" h="5" />
                <Text>EUR</Text>
                <Text>0.0020</Text>
                <Text>NGN</Text>
                <Text>0.0018</Text>
            </Flex>

            </Flex>
        </Flex>
    )
}

export default ExchangeRates;