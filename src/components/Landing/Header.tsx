import { IconButton, Flex, Image, Box, Center, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Header({ onOpen, ...rest }: any) {
  const router = useRouter();
  const [label, setLabel] = React.useState("");
  const [route, setRoute] = React.useState("");
  return (
    <>
      <Head>
        <title>QPS - Audio Payment Processing</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
      </Head>
      <Flex
        display="flex"
        zIndex="3"
        px={{ base: 4, md: 4, lg: "40px" }}
        top="0"
        bg="white"
        w="full"
        position="fixed"
        h={16}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "space-between" }}
        boxShadow="md"
        {...rest}
      >
        <Flex
          justify="flex-start"
          onClick={() => router.push("/")}
          cursor="pointer"
        >
          <Image
            src="/qpsfull.svg"
            alt="qps logo"
            w={60}
            pointerEvents="none"
          />
        </Flex>

        <Flex justify="flex-end">
          <Button
            px={8}
            py={5}
            borderWidth={1}
            borderColor="#400050"
            bg="#F9E0FF"
            color="#400050"
            onClick={() => router.push("/signup")}
          >
            Try Demo Now
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
