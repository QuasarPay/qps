import React from "react";
import { Flex } from "@chakra-ui/react";
import Container from "../../src/components/Layout/Container";
import Report from "../../src/components/Loans/Report";

const MyLoans = () => {
    return(
        <Container>
            <Flex mt={20} textAlign="left" direction="column">
                <Report />
            </Flex>
        </Container>
    )
}

export default MyLoans