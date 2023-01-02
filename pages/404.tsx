import React from "react";
import { Text, Center, Flex, Button } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css"

const Custom404 = () => {
    const router = useRouter();
    return(
        <Center>
            <Flex direction="column">
                <Player autoplay loop src="/404.json" className={styles.lottie} />
                <Text textAlign='center' fontSize={{ base: 18, md: 32 }} fontWeight={500} mt={-20}>Oops...this page doesn&apos;t exist</Text>
                <Button mt={5} bg="#400050" color="white" _hover={{ bg: "#25002F", color: "white" }} onClick={() => router.push('/app')} >Go back home</Button>
            </Flex>
        </Center>
    )
}

export default Custom404;