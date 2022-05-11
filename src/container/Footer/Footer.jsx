import React from 'react';
import { Detail, ContactUs, FooterNav } from '../../components';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='app__wrapper app__footer'>
            <div className='footer-top'>
                <ContactUs />
                <Detail />
            </div>
            <div className='footer-bottom'>
                <FooterNav />
            </div>
        </footer>
    );
};

export default Footer;
