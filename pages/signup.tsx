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
import { Formik, Form, Field } from "formik";
import Head from "next/head";
import { Layout } from "../src/components/Registration/Layout";
import LoginBar from "../src/components/Registration/LoginBar";
import { useRouter } from "next/router";
import React from "react";
const axios = require("axios");

const Signup = () => {
    function validateName(value: string) {
        let error;
        if (!value) {
          error = "This field is required";
        }
        return error;
      }

  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validatePass(value: string) {
    let error;
    if (!value) {
      error = "Password is required";
      return error
    }
    else if(value.length < 8){
      error = "Password should be 8 or more characters"
      return error
    }
    return error;
  }

  function validatePhoneNumber(value: string) {
    let error;
    if (!value) {
      error = "Phone Number is required";
      return error;
    } else if (value.length < 11) {
      error = "Phone Number is invalid";
      return error;
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
        <Flex
          direction="column"
          bg="white"
          w={{ lg: "600px" }}
          px="126px"
        >
          <Text fontSize={28} mt={2} fontWeight={500} textAlign="center">
            Create an Account
          </Text>
          <Text mt={5} fontSize={14} textAlign="center">
            Please complete the onboarding process to ensure that your account is validated
          </Text>
          <Flex direction="column" mt={5}>
            <Formik
              initialValues={{ firstname: "", lastname: "", email: "", phoneNumber: "", password: "" }}
              onSubmit={(values, actions) => {
                window.localStorage.setItem('user', JSON.stringify(values)); // remove this in prod
                
                // POST REQUEST TO ENDPOINT
                // axios({
                //   method: 'post',
                //   url: 'http://127.0.0.1:5000/users',
                //   data: values
                // }).then((response: any) =>{ 
                //   console.log(response.data);
                //   console.log(response)
                //   if(response.status === 200 ){
                //     toast({
                //       title: 'Account created.',
                //       description: `${response.data.message}`,
                //       status: 'success',
                //       variant: 'left-accent',
                //       position: 'top-right',
                //       duration: 5000,
                //       isClosable: true,
                //     })                    
                //   }
                // })

                // delete this also in prod.
                toast({
                        title: 'Account created.',
                        description: 'Your account has been created successfully',
                        status: 'success',
                        variant: 'left-accent',
                        position: 'top-right',
                        duration: 5000,
                        isClosable: true,
                      });     
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 1000);
                
                router.push("/app");
              }}
            >
              {(props) => (
                <Form>
                  <Field name="firstname" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.firstname && form.touched.firstname}
                        mb={2}
                      >
                        <FormLabel>First Name</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="Naruto"
                          type="text"
                          variant="outline"
                        />
                        <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastname" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.lastname && form.touched.lastname}
                        mb={2}
                      >
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="Uchiha"
                          type="text"
                          variant="outline"
                        />
                        <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email" validate={validateEmail}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                        mb={2}
                      >
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="example@gmail.com"
                          type="email"
                          variant="outline"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="phoneNumber" validate={validatePhoneNumber}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.phoneNumber && form.touched.phoneNumber
                        }
                      >
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400049'
                          placeholder="+233"
                          type="text"
                          variant="outline"
                          mb={1}
                        />
                        <FormErrorMessage>
                          {form.errors.phoneNumber}
                        </FormErrorMessage>
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

export default Signup;
