/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import {
    Text,
    Box,
    HStack,
    Image,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    NumberInput,
    NumberInputField,
    useRadio,
    useRadioGroup,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs'
import { useToast } from '@chakra-ui/react';

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [sliderValue, setSliderValue] = useState(50)
    const labelStyles = {
        mt: '6',
        ml: '-2.5',
        fontSize: 'sm',
        color: '#979797',
    }
    return (
        <>
            <Heading w="100%" textAlign={'start'} fontWeight="500" mb="2%" fontSize={'20'} mt={'2'}>
                Tell us about the loan requirements🤗
            </Heading>
            <Text>
            Based on your account type, Maximum Loan amount is<br></br>
                <span style={{ color:'#400050', fontWeight:'bold'}}>3,000,000 NGN</span>
            </Text>
            <Flex mt={'8'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        What is the purpose of the loan?
                    </FormLabel>
                    <Select placeholder='Select a purpose'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                    What is the amount you need?
                    </FormLabel>
                    <InputGroup>
                        <InputLeftAddon>NGN</InputLeftAddon>
                        <Input type='num' placeholder='Add amount' />
                    </InputGroup>
                </FormControl>
            </Flex>
            <Text mt={4} color={'#000000'}>How long do you want to loan for? <span>(in months)</span> </Text>          
            <Box pt={6} pb={2}>
                <Slider max={72} min={1} aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                    <SliderMark value={1} {...labelStyles}>
                        1 Month
                    </SliderMark>
                    <SliderMark value={64} {...labelStyles}>
                        72 Months
                    </SliderMark>
                    <SliderMark
                        value={sliderValue}
                        textAlign='center'
                        bg='#520067'
                        color='white'
                        mt='-12'
                        ml='-5'
                        w='8'
                    >
                        {sliderValue}
                    </SliderMark>
                    <SliderTrack h={'10'} bg='#D5B2DD' borderRadius={'4'} >
                        <SliderFilledTrack bg='#520067'/>
                    </SliderTrack>
                    <SliderThumb h={'12'} bg='#520067'/>
                </Slider>
            </Box>

            <Flex mt={'8'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        How do you intend to repay loan?
                    </FormLabel>
                    <Select placeholder='Select a repayment type'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                       Indicative interest rate
                    </FormLabel>
                    <Box height={'40px'} bg={'#D9D9D9'} borderRadius={'5px'} lineHeight={'40px'} px={'3'} fontWeight={'bold'}>3.5 - 4.5%</Box>
                </FormControl>
            </Flex>
        </>
    );
};

const Form2 = () => {
    const options = ['No', 'Yes']
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'No',
        onChange: console.log,
    })

    const group = getRootProps()

    const RadioCard = (props: any) => {
        const { getInputProps, getCheckboxProps } = useRadio(props)

        const input = getInputProps()
        const checkbox = getCheckboxProps()

        return (
            <Box as='label'>
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor='pointer'
                    borderWidth='1px'
                    bg={'#D9D9D9'}
                    _checked={{
                        bg: '#400050',
                        color: 'white',
                    }}
                    _focus={{
                        boxShadow: 'outline',
                    }}
                    px={5}
                    py={3}
                    mx={-1}
                    width={'100px'}
                    textAlign={'center'}
                >
                    {props.children}
                </Box>
            </Box>
        )
    }
    return (
        <>
            <Heading w="100%" textAlign={'start'} fontWeight="500" fontSize={'20'} mt={'2'}>
                Tell us more about your business🙃
            </Heading>
            <Text mb={'4%'}>
                You need &nbsp;
                <span style={{ color: '#400050', fontWeight: 'bold' }}>1,500,000 NGN</span> &nbsp;
                for your business
            </Text>

            <Flex mt={'6'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        Nigerian Business Registration Number
                    </FormLabel>
                    <NumberInput defaultValue={12345678}>
                        <NumberInputField />
                    </NumberInput>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                        What is the name of your business?
                    </FormLabel>
                    <InputGroup>
                        <Input type='text' placeholder='Cool Business Ltd' />
                    </InputGroup>
                </FormControl>
            </Flex>

            <Flex mt={'6'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        When was your business established?
                    </FormLabel>
                    <InputGroup>
                        <Input type='datetime-local' placeholder='12345678' />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                        Where is your business located?
                    </FormLabel>
                    <InputGroup>
                        <Input type='text' placeholder='Somewhere on planet earth' />
                    </InputGroup>
                </FormControl>
            </Flex>

            <Flex mt={'6'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                        Is your business still alive?
                    </FormLabel>
                    <Input type='text' placeholder='e get as e be' />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        What industry sector is your business?
                    </FormLabel>
                    <Select placeholder='Select sector'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
            </Flex>

            <FormControl mt={'6'}>
                <FormLabel htmlFor="first-name" fontWeight={'400'}>
                    Does your business own a property?
                </FormLabel>
            <HStack {...group} >
                {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio} >
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
            </FormControl>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'start'} fontWeight="500" fontSize={'20'} mt={'2'}>
                We just need a little bit more information😏
            </Heading>

            <Text mb={'4%'}>
                You wanted a personal loan of &nbsp;
                <span style={{ color: '#400050', fontWeight: 'bold' }}>450,000 NGN</span> &nbsp;
            </Text>

            <Flex mt={'8'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        What category can we place the loan in?
                    </FormLabel>
                    <Select placeholder='Select a category'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                        If you selected others please fill it out here
                    </FormLabel>
                    <InputGroup>
                        <Input type='text' placeholder='(Optional)' />
                    </InputGroup>
                </FormControl>
            </Flex>
            
            <Flex mt={'24'}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'400'}>
                        How do you intend to repay loan?
                    </FormLabel>
                    <Select placeholder='Select a repayment type'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'400'}>
                        Indicative interest rate
                    </FormLabel>
                    <Box height={'40px'} bg={'#D9D9D9'} borderRadius={'5px'} lineHeight={'40px'} px={'3'} fontWeight={'bold'}>3.5 - 4.5%</Box>
                </FormControl>
            </Flex>
        </>
    );
};

export default function MultiStageForm() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    return (
        <>
            <Box
                rounded="lg"
                // maxWidth={800}
                // p={6}
                m="10px auto"
                as="form">
                    
                <Box mb='4%'>
                    <HStack justify={'space-between'}>
                        <BsArrowLeft 
                        color='#400050' 
                        size={'20px'} 
                        onClick={() => {setStep(step - 1)}}
                        />
                        <Image src='/logo.png' alt='logo' htmlHeight={'100px'} htmlWidth={'250px'}/>
                        <Text></Text>
                    </HStack>
                </Box>

                <Text size={'18'} fontWeight={'500'} color={'#979797'}>STEP {step} of 3</Text>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="end">
                        <Flex>
                            <Button
                                w="14rem"
                                bg='#400050'
                                display={step === 3 ? 'none' : "" }
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                                colorScheme="none"
                                variant="solid">
                                Continue
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="14rem"
                                bg='#400050'
                                colorScheme="none"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: 'Loan application successful',
                                        description: "We'll get back to you with the status of your application",
                                        status: 'success',
                                        position: 'top-right',
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }}>
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
