import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  Link,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { Formik, Form, Field } from "formik";
import NextLink from "next/link";
import { Layout } from "../src/components/Registration/Layout";
import LoginBar from "../src/components/Registration/LoginBar";
import { useRouter } from "next/router";
import React from "react";

const Signin = () => {
  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validatePass(value: any) {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  }

  const router = useRouter();
  const toast = useToast();

  return (
    <Layout>
        <Head>
        <title>Sign In to Quasar Pay</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
        </Head>
      <LoginBar />
      <Flex
        direction="row"
        h="full"
        justify="right"
        pos="fixed"
        zIndex={2}
        right={0}
        top={16}
      >
        <Flex
          direction="column"
          justify="right"
          bg="white"
          w={{ lg: "600px" }}
          py={5}
          px="126px"
        >
          <Text mt={10} fontSize={28} fontWeight={500}>
            Sign In to Quasar Pay
          </Text>
          <Flex direction="column" mt={10}>
            <Formik
              initialValues={{ name: "" }}
              onSubmit={(values, actions) => {
                window.localStorage.setItem('user', JSON.stringify(values))
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                // }, 1000);
                actions.setSubmitting(false);
                const data = JSON.parse(window.localStorage.getItem('user'.toString())!)
                toast({
                  title: "Congratulations🎉🎉",
                  description: `Welcome back, ${data.name}`,
                  status: "success",
                  variant: "left-accent",
                  duration: 5000,
                  isClosable: true,
                  position: 'top-right'
                });
              //   setTimeout(() => {
              //     router.push("/app");
              //   }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name="name" validate={validateEmail}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="example@gmail.com"
                          type="email"
                          variant="outline"
                          mb={2}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password" validate={validatePass}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="********"
                          type="password"
                          variant="outline"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Flex align="center">
                    <Text
                      color="gray.500"
                      fontSize={12}
                      fontWeight={500}
                      mt={2}
                      mb={14}
                    >
                      Forgot password?{" "}
                      <NextLink href="/register" passHref>
                        <Link color="#400050">
                          <strong>Reset it</strong>
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
                    Sign In
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

export default Signin;
