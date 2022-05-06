import React from 'react';
import './Tier.css';

const TierItem = ({ tier, value, seat, color }) => (
    <div className={`tier tier--${tier}`}>
        <div className='tier__roof' />
        <div className='tier__info'>
            <div className='info__header'>
                <h3 className='head3'>{tier}</h3>
                <p className='head1__bold'>{`$${value}`}</p>
            </div>
            <div className='info__desc'>
                <p className='main__regular'>{seat} Seat Available</p>
                <p className='main__regular'>Access to Wifi Router</p>
                <p className='main__regular'>Free Food & Coffee</p>
            </div>
            <button
                className={`button__basic head5 ${
                    color === 'blue' ? 'button__blue' : 'button__light'
                }`}
                type='button'
            >
                Get Tickets
            </button>
        </div>
    </div>
);

const Tier = () => (
    <div className='tiers'>
        <div className='tiers-section'>
            <h2 className='tiers__title head2'>
                Choose a Tier that’s right for you
            </h2>

            <div className='tiers-contents'>
                <TierItem tier='basic' value='100' seat='1' color='black' />
                <TierItem tier='standard' value='150' seat='1' color='blue' />
                <TierItem tier='premium' value='200' seat='2' color='red' />
            </div>
        </div>
    </div>
);

export default Tier;
