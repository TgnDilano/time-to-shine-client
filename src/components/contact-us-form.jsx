import React from "react";
import {
  Input,
  FormControl,
  Box,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import LineTitle from "./line-title";

const ContactUsForm = ({ className }) => {
  return (
    <Box className={`w-[75%] lg:w-[45%] ${className}`}>
      <FormControl className="flex flex-col gap-y-8 px-12 py-10">
        <div className="flex items-center justify-left">
          <LineTitle title="Remplissez le formulaire" color="gold" />
        </div>
        <Box className="flex flex-col md:flex-row  gap-x-4">
          <Box className="w-full">
            <FormLabel>Noms</FormLabel>
            <Input borderRadius={0} size="lg" type="email" />
          </Box>
          <Box w="100%">
            <FormLabel>Prenoms</FormLabel>
            <Input borderRadius={0} size="lg" type="email" />
          </Box>
        </Box>
        <Box className="flex flex-col md:flex-row gap-x-4">
          <Box w="100%">
            <FormLabel>Addresse Email</FormLabel>
            <Input borderRadius={0} size="lg" type="email" />
          </Box>
          <Box w="100%">
            <FormLabel>Telephone</FormLabel>
            <Input borderRadius={0} size="lg" type="email" />
          </Box>
        </Box>
        <Box w="100%">
          <FormLabel>Message</FormLabel>
          <Textarea borderRadius={0} rows={6} size="lg" type="text" />
        </Box>
        <Button size="lg" borderRadius={0} backgroundColor="#ecaf52">
          Envoyer
        </Button>
      </FormControl>
    </Box>
  );
};

export default ContactUsForm;
