import React from 'react';

import { Navbar } from './components';

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
        <Navbar />
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
