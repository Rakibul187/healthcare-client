import React from 'react';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;