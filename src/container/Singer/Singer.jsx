import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { images } from '../../constants';

import './Singer.css';

const Singer = () => {
    return (
        <div className='app__wrapper singer'>
            <div className='singer-info'>
                <div className='singer-info__box'>
                    <div className='singer__text'>
                        <h2 className='head2'>Singers</h2>
                        <p className='main__regular'>
                            Fusce justo mi, vehicula id arcu et, dapibus
                            tristique lectus. Vivamus a elit sodales, tincidunt
                            nunc non, maximus lacus. Fusce a augue sed dolor
                            auctor iaculis vitae id mauris. Integer ut lectus
                            non neque suscipit luctus. Mauris et erat id ipsum
                            condimentum cursus. Sed tempus enim non massa mattis
                            iaculis. In quis massa risus
                        </p>
                    </div>
                    <button
                        type='button'
                        className='button__basic button__blue head5 singer-btn'
                    >
                        view all singers&nbsp;
                        <FiArrowRight className='right-arrow' />
                    </button>
                </div>
            </div>

            <div className='app__wrapper--img singer__imgs'>
                <div className='singer__img'>
                    <img
                        src={images.singer04}
                        alt='singer'
                        className='singer-horizon singer04'
                    />
                    <img
                        src={images.singer04}
                        alt='singer shadow'
                        className='singer-shadow'
                    />
                </div>
                <div className='singer__img'>
                    <img
                        src={images.singer02}
                        alt='singer'
                        className='singer-vertical singer02'
                    />
                    <img
                        src={images.singer02}
                        alt='singe shadowr'
                        className='singer-shadow'
                    />
                </div>
                <div className='singer__img'>
                    <img
                        src={images.singer01}
                        alt='singer'
                        className='singer-vertical singer01'
                    />
                    <img
                        src={images.singer01}
                        alt='singer shadow'
                        className='singer-shadow'
                    />
                </div>
                <div className='singer__img'>
                    <img
                        src={images.singer03}
                        alt='singer'
                        className='singer-horizon singer03'
                    />
                    <img
                        src={images.singer03}
                        alt='singer shadow'
                        className='singer-shadow'
                    />
                </div>
            </div>
        </div>
    );
};

export default Singer;
