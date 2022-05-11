import React from 'react';
import { data } from '../../constants';
import './Shots.css';

const Shot = ({ shot: { img, like, comment, user, hashtag } }) => (
    <div className='shot'>
        <div className='shot__img'>
            <img src={img} alt='shot' />
        </div>
        <div className='shot__info'>
            <div className='shot__info__shorts'>
                <div className='shot__info-like'>
                    <span className='info-icon'>{like.icon}</span>
                    <span className='info-value head5'>{like.value}</span>
                </div>
                <div className='shot__info-comment'>
                    <span className='info-icon'>{comment.icon}</span>
                    <span className='info-value head5'>{comment.value}</span>
                </div>
            </div>
            <div className='shot__info-user'>
                <span className='main__regular'>{user}</span>
            </div>
            <div className='shot__info-hashtag'>
                <span className='main__regular'>{hashtag}</span>
            </div>
        </div>
    </div>
);

const Shots = () => (
    <div className='app__wrapper app__shots'>
        <div className='shots'>
            <h2 className='head2 shots__title'>See our Best Shots</h2>

            <div className='shots__contents'>
                {data.shots.map((shot, index) => (
                    <Shot shot={shot} key={index} />
                ))}
            </div>
        </div>
    </div>
);

export default Shots;
