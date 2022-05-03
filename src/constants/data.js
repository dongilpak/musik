import { GiBagpipes, GiSaxophone, GiGuitar, GiTrumpet } from 'react-icons/gi';
import { BsMusicPlayerFill } from 'react-icons/bs';

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

const data = { categories };

export default data;
