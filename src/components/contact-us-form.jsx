import React from 'react';
import { Input, FormControl, Box, FormLabel, Textarea, Button } from '@chakra-ui/react'

const ContactUsForm = () => {
    return (
        <Box className='w-[75%] lg:w-[45%] text-white bg-risenBlack rounded-md'>
            <FormControl className='flex flex-col gap-y-8 px-12 py-14'>
                <div className='flex items-center justify-left'><h3 className='font-semibold text-4xl'> Contactez-Nous</h3></div>
                <Box className='flex flex-col md:flex-row  gap-x-4'>
                    <Box className='w-full'>
                        <FormLabel>Noms</FormLabel>
                        <Input border="1px" size='lg' type='email' />
                    </Box>
                    <Box w='100%'>
                        <FormLabel>Prenoms</FormLabel>
                        <Input size='lg' type='email' />
                    </Box>
                </Box>
                <Box className='flex flex-col md:flex-row gap-x-4'>
                    <Box w='100%'>
                        <FormLabel>Addresse Email</FormLabel>
                        <Input size='lg' type='email' />
                    </Box>
                    <Box w='100%'>
                        <FormLabel>Telephone</FormLabel>
                        <Input size='lg' type='email' />
                    </Box>
                </Box>
                <Box w='100%'>
                    <FormLabel>Message</FormLabel>
                    <Textarea rows={6} size="lg" type='text' />
                </Box>
                <Button size='lg' w="100%">Envoyer</Button>
            </FormControl>
        </Box>
    );
}

export default ContactUsForm;
