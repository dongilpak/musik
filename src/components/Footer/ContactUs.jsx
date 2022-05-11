import React from 'react';
import './ContactUs.css';

import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';

const Contactus = () => {
    return (
        <div className='contactUs'>
            <div className='contactUs__title'>
                <h2 className='head2'>Contact us</h2>
                <p className='subtitle__regular'>
                    Have an inquiry? We’ll be happy to assist you
                </p>
            </div>
            <div className='contactUs__info'>
                <div>
                    <span className='contactUs__info-icon'>
                        <BsFillTelephoneFill />
                    </span>
                    <span className='head5'>+92 333 6527366</span>
                </div>
                <div>
                    <span className='contactUs__info-icon'>
                        <BsEnvelopeFill />
                    </span>
                    <span className='head5'>abuzer@greelogix.com</span>
                </div>
                <div>
                    <span className='contactUs__info-icon'>
                        <TiLocation />
                    </span>
                    <span className='head5'>
                        Plot 252, Block L Phase 2 Johar Town, Lahore, PK
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
