import React from 'react'
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
                  {/* <ModalCloseButton /> */}
                  <ModalBody px={'8'}>
                    <MultiStageForm />
                  </ModalBody>

                  <ModalFooter>
                  </ModalFooter>
              </ModalContent>
          </Modal>
   </>
  )
}

export default BorrowMoney