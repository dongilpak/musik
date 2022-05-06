import React from 'react';
import { images } from '../../constants';
import './Sponsor.css';

const Sponsor = () => {
    return (
        <div className='app__wrapper app__sponsor'>
            <div className='sponsor'>
                <h2 className='head2'>Our Sponsors</h2>

                <div className='sponsor-list'>
                    <div className='sponsor-list__top'>
                        <img src={images.google} alt='google' />
                        <img src={images.microsoft} alt='microsoft' />
                        <img src={images.airbnb} alt='airbnb' />
                        <img src={images.axure} alt='axure' />
                    </div>
                    <div className='sponsor-list__bottom'>
                        <img src={images.apple} alt='apple' />
                        <img src={images.facebook} alt='facebook' />
                        <img src={images.nokia} alt='nokia' />
                        <img src={images.oracle} alt='oracle' />
                    </div>
                </div>

                <button
                    type='button'
                    className='head5 button__basic button__blue'
                >
                    Become a Sponsor
                </button>
            </div>
        </div>
    );
};

export default Sponsor;
