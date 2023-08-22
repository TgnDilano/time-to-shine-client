import {
  CircularProgress,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Input, FormControl, Box, FormLabel, Button } from "@chakra-ui/react";
import LineTitle from "./line-title";
import { BsPhone } from "react-icons/bs";

const Inscription = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        isCentered
        otionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inscription</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <Box className="flex flex-col items-center justify-center mb-6">
                <div className="relative flex items-center justify-center">
                  <CircularProgress
                    isIndeterminate
                    thickness="2px"
                    value={30}
                    size="190px"
                    color='blue.400'
                    className="absolute"
                  />
                  <BsPhone size={62} className="absolute"/>
                </div>
                <p className="mt-3">
                  Paiement en attente de confirmation au 698800604.
                </p>
              </Box>
            ) : (
              <FormControl className="flex flex-col gap-y-5 px-3 mb-8">
                <div className="flex items-center justify-center">
                  <LineTitle
                    showLine
                    title="Remplissez le Formulaire"
                    color="gold"
                  />
                </div>
                <Box className="flex flex-col md:flex-row  gap-x-4">
                  <Box className="w-full">
                    <FormLabel>Noms</FormLabel>
                    <Input borderRadius={0} size="lg" type="text" />
                  </Box>
                  <Box w="100%">
                    <FormLabel>Prenoms</FormLabel>
                    <Input borderRadius={0} size="lg" type="text" />
                  </Box>
                </Box>
                <Box className="flex flex-col md:flex-row gap-x-4">
                  <Box w="100%">
                    <FormLabel>Ville</FormLabel>
                    <Input borderRadius={0} size="lg" type="text" />
                  </Box>
                  <Box w="100%">
                    <FormLabel>Date de naissance</FormLabel>
                    <Input borderRadius={0} size="lg" type="date" />
                  </Box>
                </Box>
                <Box className="flex flex-col md:flex-row gap-x-4">
                  <Box w="100%">
                    <FormLabel>Telephone</FormLabel>
                    <Input borderRadius={0} size="lg" type="tel" />
                  </Box>
                  <Box w="100%">
                    <FormLabel>Genre</FormLabel>
                    <Input borderRadius={0} size="lg" type="text" />
                  </Box>
                </Box>
                <p>
                  Une somme de{" "}
                  <span className="text-green-400 font-bold">50 000frs</span>{" "}
                  sera débitée de votre compte pour que vous puissiez participer
                  au concours sans quoi votre compte ne sera pas créé.
                </p>
                <Button onClick={()=>setLoading(true)} size="lg" borderRadius={0} backgroundColor="#ecaf52">
                  Créer Mon Compte
                </Button>
              </FormControl>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Inscription;
