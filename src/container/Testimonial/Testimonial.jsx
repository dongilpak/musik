import React from 'react';
import { data } from '../../constants';

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import './Testimonial.css';

const TestimonialItem = ({ item: { content, user } }) => (
    <div className='testimonial__item'>
        <div className='testimonial__item-box'>
            <div className='testimonial__item-content'>
                <div className='item-content__icon'>{ImQuotesLeft()}</div>
                <p className='main__regular'>{content}</p>
                <div className='item-content__icon item-content__icon--right '>
                    {ImQuotesRight()}
                </div>
            </div>

            <div className='testimonial-user'>
                <img src={user.img} alt='user' />
                <div className='user-info'>
                    <span className='head4'>{user.name}</span>
                    <a href={user.website} className='main__regular'>
                        {user.website}
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Testimonial = () => (
    <div className='app__wrapper app__testimonial'>
        <div className='testimonial'>
            <h2 className='head2'>Testimonials</h2>

            <div className='testimonial__contents'>
                {data.testimonials.map((item, index) => (
                    <TestimonialItem item={item} key={index} />
                ))}
            </div>
        </div>
    </div>
);

export default Testimonial;
