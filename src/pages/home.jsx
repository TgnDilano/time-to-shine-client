import React from 'react';
import ContactUs from '../components/contact-us';
import Counter from '../components/counter';
import Partners from '../components/parteners';

const Home = () => {
    return (
        <>
            <Counter />
            <Partners/>
            <ContactUs />
        </>
    );
}

export default Home;
