import React from 'react';
import { images } from '../../constants';
import { FiArrowRight } from 'react-icons/fi';

import './About.css';

const About = () => {
    return (
        <div className='app__wrapper about'>
            <div className='app__wrapper--img about-img'>
                <img
                    src={images.aboutBase}
                    alt='about base'
                    className='about-img__back'
                />
                <img
                    src={images.about}
                    alt='about'
                    className='about-img__front'
                />
            </div>

            <div className='app__wrapper--info about-info'>
                <div className='about-info__box'>
                    <div className='about__text'>
                        <h2 className='head2'>about music</h2>
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
                        className='button__basic button__blue head5 about-btn'
                    >
                        learn more&nbsp;
                        <FiArrowRight className='right-arrow' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
