import React from 'react';

import './App.css';
import {
    About,
    Category,
    Footer,
    Header,
    Schedule,
    Shots,
    Singer,
    Sponsor,
    Testimonial,
    Tier,
} from './container';

const App = () => (
    <div>
        <Header />
        <Category />
        <About />
        <Singer />
        <Schedule />
        <Tier />
        <Sponsor />
        <Testimonial />
        <Shots />
        <Footer />
    </div>
);

export default App;
