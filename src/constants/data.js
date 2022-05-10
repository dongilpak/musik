import { GiBagpipes, GiSaxophone, GiGuitar, GiTrumpet } from 'react-icons/gi';
import { BsMusicPlayerFill, BsPlayCircle, BsClock } from 'react-icons/bs';
import { BiCameraMovie } from 'react-icons/bi';
import { images } from '.';

const categories = [
    {
        name: 'pop',
        icon: <BsMusicPlayerFill />,
        text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    },
    {
        name: 'folk',
        icon: <GiBagpipes />,
        text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    },
    {
        name: 'instrumental',
        icon: <GiSaxophone />,
        text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    },
    {
        name: 'rock',
        icon: <GiGuitar />,
        text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    },
    {
        name: 'jazz',
        icon: <GiTrumpet />,
        text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    },
];

const schedules = [
    {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
            {
                imgUrl: images.Avatar01,
                name: 'Yui Ronald',
                booth: '2F12',
            },
        ],
        status: 'Preview',
        icon: <BsPlayCircle />,
    },
    {
        time: '12:00 PM to 03:00 PM',
        content:
            'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
        speakers: [
            {
                imgUrl: images.Avatar02,
                name: 'Bob John',
                booth: '3G12',
            },
            {
                imgUrl: images.Avatar01,
                name: 'Yui Ronald',
                booth: '2F12',
            },
            {
                imgUrl: images.Avatar03,
                name: 'Emma Satoshi',
                booth: '2A35',
            },
        ],
        status: 'Live',
        icon: <BiCameraMovie />,
    },
    {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
        speakers: [
            {
                imgUrl: images.Avatar05,
                name: 'Sasha Jackson',
                booth: '2F18',
            },
            {
                imgUrl: images.Avatar04,
                name: 'Diana Brock',
                booth: '2F24',
            },
        ],
        status: 'Upcoming',
        icon: <BsClock />,
    },
];

const testimonials = [
    {
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            img: images.testAvatar01,
            name: 'Ellie James',
            website: 'lorem.com',
        },
    },
    {
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            img: images.testAvatar02,
            name: 'Johnny Doe',
            website: 'ipsum.com',
        },
    },
    {
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user: {
            img: images.testAvatar03,
            name: 'Myne Barack',
            website: 'ipsum.com',
        },
    },
];

const data = { categories, schedules, testimonials };

export default data;
