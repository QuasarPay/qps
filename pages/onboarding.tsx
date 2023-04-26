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
  Avatar,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Form, Field } from "formik";
import Head from "next/head";
import { Layout } from "../src/components/Registration/Layout";
import LoginBar from "../src/components/Registration/LoginBar";
import { useRouter } from "next/router";
import { country } from "../fakedata";
import FileBase from "react-file-base64";
import { url } from "inspector";

const Onboarding = () => {
  function validateName(value: string) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  const router = useRouter();


  type State = {
    image: string;
  };

  const [data, setData] = React.useState<State>({
      image: "",
    });

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
          <Text fontSize={28} mt={2} fontWeight={500} textAlign="center">
            Create your Profile
          </Text>
          <Text mt={5} fontSize={14} textAlign="center">
            Please complete the onboarding process to ensure that your account
            is validated
          </Text>
          <Flex direction="column" mt={5}>
            <Formik
              initialValues={{
                profileImg: "",
                username: "",
                phoneNumber: "",
                gender: "",
                country: "",
              }}
              onSubmit={(values, actions) => {
                values.profileImg = data.image
                setTimeout(() => {
                  window.localStorage.setItem(
                    "profile",
                    JSON.stringify([values.profileImg, values.username, values.gender, values.phoneNumber, values.country])
                  );
                  actions.setSubmitting(false);
                }, 1000);
                router.push("/verification");
              }}
            >
              {(props) => (
                <Form>
                  <Field name="profileImg">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.profileImg && form.touched.profileImg
                        }
                      >
                        <Flex align="center" ml={6} mb={4}>
                                <Avatar src={data.image} size="lg" mr={5} />
                            <Flex direction="column">
                                <FormLabel>Upload a profile picture</FormLabel>
                                <FileBase
                                {...field}
                                type="file"
                                multiple={false}
                                accept="image/*"
                                onDone={({ base64 }: { base64: string }) =>
                                    setData({ ...data, image: base64 })
                                }
                                />
                            </Flex>

                        </Flex>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="username" validate={validateName}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.username && form.touched.username
                        }
                      >
                        <FormLabel>Username</FormLabel>
                        <Input
                          {...field}
                          focusBorderColor= '#400050'
                          placeholder="@username"
                          type="text"
                          variant="outline"
                          mb={2}
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>



                  <Flex direction="row">
                    <Field name="gender" validate={validateName}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.gender && form.touched.gender}
                        >
                          <FormLabel>Gender</FormLabel>
                          <Select
                            {...field}
                            focusBorderColor= '#400050'
                            placeholder="Select Gender"
                            name="gender"
                            mb={2}
                            w={40}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Undefined">Prefer not to say</option>
                          </Select>
                          <FormErrorMessage>
                            {form.errors.gender}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="country" validate={validateName}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.country && form.touched.country}
                        >
                          <FormLabel>Country</FormLabel>
                          <Select
                            {...field}
                            focusBorderColor= '#400050'
                            placeholder="Select Country"
                            name="country"
                            mb={2}
                            w={40}
                          >
                            {country.map((p, i) => (
                                <option value={p.code} key={i}>
                                  <Flex>
                                    {p.name}
                                  </Flex>
                                </option> 
                            ))}
                          </Select>
                          <FormErrorMessage>
                            {form.errors.gender}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
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

export default Onboarding;
