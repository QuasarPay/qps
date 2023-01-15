import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Button,
  PinInput,
  PinInputField,
  InputGroup,
  Link,
  Avatar,
  Select,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { Formik, Form, Field } from "formik";
import Head from "next/head";
import NextLink from "next/link";
import { Layout } from "../src/components/Registration/Layout";
import LoginBar from "../src/components/Registration/LoginBar";
import { useRouter } from "next/router";

const Verification = () => {
  function validateName(value: string) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  const router = useRouter();
  const toast = useToast();

  return (
    <Layout>
      <Head>
        <title>Create an Account</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
      </Head>

      <LoginBar />
      <Flex
        direction="row"
        h="full"
        justify="center"
        pos="fixed"
        zIndex={2}
        top={16}
      >
        <Flex direction="column" bg="white" w={{ lg: "600px" }} px="126px">
          <Text fontSize={28} mt={20} fontWeight={500} textAlign="center">
            Account Verification
          </Text>
          <Text mt={5} fontSize={14} textAlign="center">
            Your account is almost ready, just input the correct code we sent to your
            phone number to complete this process
          </Text>

          <Flex direction="column" mt={10} align="center">
            <Formik
              initialValues={{
                otp: "",
              }}
              onSubmit={(values, actions) => {
                toast({
                    title: "Congratulations🎉🎉",
                    description: "Your account has been created",
                    status: "success",
                    variant: "left-accent",
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right'
                  });
                  actions.setSubmitting(false)
                  setTimeout(() => {
                    router.push("/app");
                  }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name="otp" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.otp && form.touched.otp}
                      >
                        <HStack>
                          <PinInput placeholder="" otp focusBorderColor= '#400050'>
                            <PinInputField {...field} h="70px" w="50px" />
                            <PinInputField {...field} h="70px" w="50px" />
                            <PinInputField {...field} h="70px" w="50px" />
                            <PinInputField {...field} h="70px" w="50px" />
                            <PinInputField {...field} h="70px" w="50px" />
                            <PinInputField {...field} h="70px" w="50px" />
                          </PinInput>
                        </HStack>
                        <FormErrorMessage>{form.errors.otp}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Flex align="center" mt={10}>
                    <Text
                      color="gray.500"
                      fontSize={12}
                      fontWeight={500}
                    >
                      Did not receive the pin?{" "}
                      <NextLink href="#" passHref>
                        <Link color="#400050">
                          <strong>Resend Pin</strong>
                        </Link>
                      </NextLink>
                    </Text>
                  </Flex>

                  <Button
                    mt={4}
                    w="full"
                    bg="#400050"
                    color="white"
                    _hover={{ bg: "#25002F" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Continue
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Verification;
