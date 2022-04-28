import React from 'react';
import { Navbar } from '../../components';
import { BsPlayCircle } from 'react-icons/bs';
import './Header.css';

const Header = () => (
    <div className='header'>
        <div className='header-box'>
            <Navbar />

            <div className='header__contents'>
                <p
                    className='head1__bold header__title'
                    style={{ fontSize: '7.2rem' }}
                >
                    The Best experience of <span>music</span> in 2021
                </p>
                <p className='subtitle__regular'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vitae ligula placerat, eleifend ex non, vehicula
                    libero. Suspendisse eget tellus lectus.
                </p>
                <div className='contents__buttons'>
                    <button
                        className='button__basic head5'
                        style={{
                            backgroundColor: 'var(--color-red)',
                            color: 'var(--color-light)',
                        }}
                    >
                        Get Started
                    </button>

                    <div className='play-video'>
                        <BsPlayCircle fontSize={58} />
                        <span className='head4'>watch video</span>
                    </div>
                </div>
            </div>

            <div className='header__count'>
                <p>
                    22d&nbsp;&nbsp;&nbsp;13h&nbsp;&nbsp;&nbsp;46m&nbsp;&nbsp;&nbsp;18s
                </p>
            </div>
        </div>
    </div>
);
export default Header;
