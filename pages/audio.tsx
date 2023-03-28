/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text, Center, Flex, Image, Heading } from "@chakra-ui/react";
import Header from "../src/components/Landing/Header";

const Audio = () => {
  return (
    <Center>
      <Header />
      <Flex direction="column" mt={20}>
        <Flex px={20} direction="column" justify="center">
          <Flex mt="20px" pointerEvents="none">
            <Image
              src="/qpsaudio.png"
              alt="query system design."
              w="full"
              h="full"
            />
          </Flex>

          <Flex direction="column" textAlign="justify" align="start" mt="100px" pb={10} px={20} gap="64px">
            <Flex direction="column">
              <Heading fontSize="2rem" textStyle="text" color="#400050">
                Introducing an Audio-Based Payment System with Multilingual
                Support
              </Heading>
              <Text mt="18px" fontSize="1.2rem" textStyle="text">
                Our team of experts has developed an advanced, fully audio-based
                payment system designed to make transactions easier, faster, and
                more accessible. Using speech-to-text and advanced algorithms,
                we have created a system that is multilingual and capable of
                processing payments in different languages. This innovative
                solution allows anyone, regardless of their tech-savviness, to
                access technology and make payments effortlessly.
              </Text>
            </Flex>

            <Flex direction="column">
              <Heading fontSize="2rem" textStyle="text" color="#400050">
                Fault Tolerance and Fraud Classification for Secure Transactions
              </Heading>
              <Text mt="18px" fontSize="1.2rem" textStyle="text">
                We understand the importance of secure transactions, which is
                why we have implemented a fault-tolerant system to mitigate
                false positives caused by large datasets. Additionally, we have
                introduced Autoencoders for Fraud Classification and a
                Verification System, which ensures that all actions are verified
                before they are executed. With our system, you can make payments
                with peace of mind, knowing that your transactions are secure.
              </Text>
            </Flex>

            <Flex direction="column">
              <Heading fontSize="2rem" textStyle="text" color="#400050">
                Access Technology Easily and Make Payments Hassle-Free
              </Heading>
              <Text mt="18px" fontSize="1.2rem" textStyle="text">
                We believe that everyone should have access to technology,
                regardless of their background or level of experience. That's
                why we have developed a system that is user-friendly,
                multilingual, and hassle-free. Whether you're making payments
                for personal or business use, our audio-based payment system is
                designed to make your life easier. So why wait? Try it out today
                and experience the future of payment processing!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Audio;
