import React from 'react';
import { images } from '../../constants';
import './FooterNav.css';

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagramSquare,
} from 'react-icons/fa';

const FooterNav = () => {
    return (
        <div className='footerNav'>
            <div className='footer-logo'>
                <img src={images.Logo} alt='app logo' />
            </div>

            <div className='footerNav__content'>
                <ul className='footerNav-links'>
                    <li className='menutext'>
                        <a href='#home'>home</a>
                    </li>
                    <li className='menutext'>
                        <a href='#company'>company</a>
                    </li>
                    <li className='menutext'>
                        <a href='#blog'>blog</a>
                    </li>
                    <li className='menutext'>
                        <a href='#contactUs'>contact us</a>
                    </li>
                    <li className='menutext'>
                        <a href='#sitemap'>sitemap</a>
                    </li>
                </ul>

                <ul className='footerNav__socials'>
                    <li className='menutext'>
                        <a href='#facebook'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className='menutext'>
                        <a href='#twitter'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li className='menutext'>
                        <a href='#linkedin'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='menutext'>
                        <a href='#instagram'>
                            <FaInstagramSquare />
                        </a>
                    </li>
                </ul>

                <p className='small__regular footer__copyright'>
                    © musik.com, 2021{' '}
                </p>
            </div>
        </div>
    );
};

export default FooterNav;
