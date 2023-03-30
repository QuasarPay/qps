import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Image,
    Flex,
    Button,
} from '@chakra-ui/react'
import GuageChart from '../../charts/GuageChart';

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const EligibilityModal: React.FC<ModalProps> = ({isOpen, onClose}) => {
  return (
   <>
          <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
              <ModalOverlay />
              <ModalContent minW="50em" minH="60vh">
                <ModalHeader margin="auto">
                    <Image src="/qpsfull.svg" alt="qps_logo_full" w="48" />
                </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex direction="column" align="center" justify="center" mt={2}>
                        <Text fontSize={24} fontWeight={500}>
                            Your current loan rank
                        </Text>
                        <Text color="#400050" mt={4} mb={-5} fontSize={20} fontWeight={500}>
                            Medium Loan - Level 4
                        </Text>

                        <GuageChart />
                        <Text fontSize={20} fontWeight={500} mb={4}>
                            You are eligible for an upgrade🎉🎉
                        </Text>
                        <Flex gap={2}>
                        <Button
                          variant="filled"
                          bg="#400050"
                          _hover={{
                            color: "#FFFFFF",
                            bg: "#25002F",
                          }}
                          color="white"
                        >
                          Upgrade Now
                        </Button>
                        <Button
                          variant="link"
                          borderColor="#400050"
                          color="#400050"
                          _hover={{
                            color: "#25002F",
                            bg: "none",
                          }}
                          w="20"
                          onClick={onClose}
                        >
                          Skip
                        </Button>
                      </Flex>
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                  </ModalFooter>
              </ModalContent>
          </Modal>
   </>
  )
}

export default EligibilityModal