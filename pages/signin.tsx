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
    InputLeftAddon,
    InputGroup,
    Link,
    Divider,
  } from "@chakra-ui/react";
  import styles from "../styles/Signin.module.css";
  import { FcGoogle } from "react-icons/fc";
  import { Formik, Form, Field } from "formik";
  import NextLink from "next/link";
  import { Layout } from "../src/components/Registration/Layout";
  import LoginBar from "../src/components/Registration/LoginBar";
  import { useRouter } from "next/router";
  
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
  
    return (
      <Layout>
        <LoginBar />
        <div className={styles.wavy}>
          
          <Flex direction="row" w="full" align="center" px={40} zIndex={2}>
            <Flex
              direction="column"
              justify="center"
              bg="white"
              w='600px'
              py={5}
              px={10}
              borderRadius="md"
              mt={10}
            >
              <Image src="/grayfull.png" alt="grayfull" w={40} />
              <Text mt={2} fontSize={20} fontWeight={500}>
                Login to GrayBook
              </Text>
                <Button
                mt={10}
                  leftIcon={<FcGoogle size={20} />}
                  alignItems="center"
                  variant="outline"
                  colorScheme="gray"
                >
                  Login with Google
                </Button>
  
              
              <Flex direction="column" mt={10}>
  
                <Formik
                  initialValues={{ name: "" }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                    router.push("/");
                  }}
                >
                  {(props) => (
                    <Form>
                      <Field name="name" validate={validateEmail}>
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel>Email</FormLabel>
                            <Input
                              {...field}
                              placeholder="Email"
                              type="email"
                              variant="outline"
                              mb={2}
                            />
                            <FormErrorMessage>
                              {form.errors.name}
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
                              placeholder="Password"
                              type="password"
                              variant="outline"
                            />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Flex align='center'>
                        <Text
                          color="#F4B95F"
                          fontSize={12}
                          fontWeight={500}
                          mt={2}
                          mb={14}
                        >
                          Forgot Password?
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize={12}
                          fontWeight={500}
                          mt={2}
                          mb={14}
                          ml={6}
                        >
                          Don&apos;t have an account? {" "} 
                           <NextLink href='/register' passHref>
                            <Link color="#F4B95F">
                             Register Here 
                             </Link>
                           </NextLink>
                           </Text>
                           
                       
                      </Flex>
  
                      <Button
                        mt={4}
                        w="full"
                        bg="#F4B95F"
                        color="white"
                        _hover={{ bg: "#DAA65D" }}
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Flex>
            </Flex>
  
            <Flex justify='end'>
              <Image src="/grayart.png" alt="gray2art" w='70%' />
            </Flex>
          </Flex>
        </div>
      </Layout>
    );
  };
  
  export default Signin;