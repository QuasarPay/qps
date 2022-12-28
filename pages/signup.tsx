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
  Divider,
} from "@chakra-ui/react";
import { Formik, Form, Field, validateYupSchema } from "formik";
import Head from "next/head";
import { Layout } from "../src/components/Registration/Layout";
import LoginBar from "../src/components/Registration/LoginBar";
import { useRouter } from "next/router";

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

  const router = useRouter();

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
              initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
              onSubmit={(values, actions) => {
                window.localStorage.setItem('user', JSON.stringify(values))
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
                router.push("/onboarding");
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
