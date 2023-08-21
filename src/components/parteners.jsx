import React, { useState } from 'react';
import partner0 from '../assets/partners/partner_0.jpg'
import partner1 from '../assets/partners/partner_1.jpg'
import partner2 from '../assets/partners/partner_2.jpg'
import partner3 from '../assets/partners/partner_3.jpg'
import partner4 from '../assets/partners/partner_4.jpg'
import partner5 from '../assets/partners/partner_5.jpg'
import partner6 from '../assets/partners/partner_6.jpg'
import partner7 from '../assets/partners/partner_7.jpg'
import partner8 from '../assets/partners/partner_8.jpg'
import partner9 from '../assets/partners/partner_9.jpg'
import partner10 from '../assets/partners/partner_10.jpg'



const Partners = () => {
    const images = [
        partner0, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10,
    ]

    return (
        <section className='h-[30rem] w-screen bg-risenBlack flex flex-col items-center justify-center gap-y-14'>
            <h2 className='font-semibold text-white text-4xl'>Nos Partenaires</h2>
            <div className='flex gap-x-14'>

                <img src={partner0} className='rounded h-52 w-72' />
                <img src={partner1} className='rounded h-52 w-72' />
                <img src={partner2} className='rounded h-52 w-72' />
                <img src={partner3} className='rounded h-52 w-72' />
            </div>
        </section>
    );
}

export default Partners;
