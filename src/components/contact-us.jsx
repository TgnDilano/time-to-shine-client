import React from 'react';
import ContactUsForm from './contact-us-form';
import contact from "../assets/contact.png"
import { Box } from '@chakra-ui/react';

const ContactUs = () => {
    return (
        <section className='bg-white h-[52rem] w-screen flex justify-between items-center overflow-hidden pr-20 lg:pr-32'>
            <Box className='relative w-1/2 h-full'>
                <img src={contact} className='absolute -top-4 -left-16 opacity-20 scale-150' />
                <img src={contact} className='absolute top-0 left-72 scale-105' />
            </Box>
            <ContactUsForm />
        </section>
    );
}

export default ContactUs;
