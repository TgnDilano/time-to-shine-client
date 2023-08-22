import React from 'react';
import ContactUsSection from '../components/contact-us';
import Counter from '../components/counter';
import Partners from '../components/parteners';

const Home = () => {
    return (
        <>
            <Counter />
            <ContactUsSection />
            <Partners/>
        </>
    );
}

export default Home;
