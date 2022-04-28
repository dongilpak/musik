import React from 'react';
import { images } from '../../constants';
import { BiChevronDown } from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-box'>
                <div className='navbar-logo'>
                    <img src={images.Logo} alt='app logo' />
                </div>

                <ul className='navbar-links'>
                    <li className='menutext'>
                        <a href='#home'>home</a>
                    </li>
                    <li className='menutext'>
                        <a href='#speakers'>speakers</a>
                        <BiChevronDown />
                    </li>
                    <li className='menutext'>
                        <a href='#schedule'>schedule</a>

                        <BiChevronDown />
                    </li>
                    <li className='menutext'>
                        <a href='#contactUs'>contact us</a>
                    </li>

                    <button
                        className='button__basic button__light head5'
                        type='button'
                    >
                        get tickets
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
