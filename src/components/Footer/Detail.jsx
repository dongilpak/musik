import React from 'react';
import './Detail.css';

const Detail = () => {
    return (
        <div className='app__detail'>
            <div className='detail__content'>
                <h3 className='head3'>Fill in your details</h3>
                <div className='detail__info-inputs'>
                    <div className='info-input'>
                        <label htmlFor='name' className='small__bold'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='main__regular'
                        />
                    </div>
                    <div className='info-input'>
                        <label htmlFor='email' className='small__bold'>
                            Email
                        </label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            className='main__regular'
                        />
                    </div>
                    <div className='info-input'>
                        <label htmlFor='message' className='small__bold'>
                            Message
                        </label>
                        <input
                            type='text'
                            id='message'
                            name='message'
                            className='main__regular'
                        />
                    </div>
                </div>
                <button
                    type='button'
                    className='head5 button__basic button__blue'
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Detail;
