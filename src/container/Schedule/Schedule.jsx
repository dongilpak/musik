import React from 'react';
import { data } from '../../constants';
import './Schedule.css';

const Daytab = ({ head, day, active }) => (
    <div className={`schedule__day-tab ${active ? 'active' : ''}`}>
        <h3 className='head3'>{head}</h3>
        <p className='head5'>{day}</p>
        <div className='divider' />
    </div>
);

const ScheduleData = ({
    schedule: { time, content, speakers, status, icon },
}) => (
    <tr className='schedule__data'>
        <td className='main__regular schedule-time'>{time}</td>
        <td className='main__bold schedule-content-info'>{content}</td>
        <td className='schedule-speaker'>
            {speakers.map(speaker => (
                <div className='speaker-box' key={speaker.name}>
                    <div className='speaker-img'>
                        <img src={speaker.imgUrl} alt='speaker' />
                    </div>
                    <div className='speaker-info'>
                        <p className='main__bold'>{speaker.name}</p>
                        <p>
                            <span className='main__regular'>Booth:</span>
                            <span className='main__bold'>{speaker.booth}</span>
                        </p>
                    </div>
                </div>
            ))}
        </td>
        <td
            className={`head5 schedule-status ${
                status === 'Live' ? 'active' : ''
            }`}
        >
            <span>{status}</span>&nbsp;<span>{icon}</span>
        </td>
    </tr>
);

const Schedule = () => {
    return (
        <div className='app__schedule'>
            <div className='app__wrapper schedule-box'>
                <div className='schedule-tab'>
                    <h2 className='head2 schedule__title'>event schedule</h2>
                    <div className='schedule__day-tabs'>
                        <Daytab head='Day 01' day='16 August' active />
                        <Daytab head='Day 02' day='17 August' />
                        <Daytab head='Day 03' day='18 August' />
                    </div>
                </div>

                <div className='schedule-contents'>
                    <table>
                        <thead className='schedule-table__head'>
                            <tr>
                                <th scope='col' className='subtitle__bold'>
                                    Time
                                </th>
                                <th scope='col' className='subtitle__bold'>
                                    Content
                                </th>
                                <th scope='col' className='subtitle__bold'>
                                    Speakers
                                </th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.schedules.map((schedule, index) => (
                                <ScheduleData schedule={schedule} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
