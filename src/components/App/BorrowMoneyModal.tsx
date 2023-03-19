import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import MultiStageForm from './MultiStageForm'
import { BsArrowLeft } from 'react-icons/bs'

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const BorrowMoney: React.FC<ModalProps> = ({isOpen, onClose}) => {
  return (
   <>
          <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxW='56rem' maxH='46rem'>
                  <ModalHeader>
                    <Flex align={'center'}> 
                        <BsArrowLeft color='#400050'/>
                    <Box ml='24' w='60'>
                    <Image src='/logo.png' alt='logo' />
                    </Box>
                    </Flex>
                    </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <MultiStageForm />
                  </ModalBody>

                  <ModalFooter>
                      {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
              </ModalContent>
          </Modal>
   </>
  )
}

export default BorrowMoney