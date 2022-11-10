import React from 'react';
import useTitle from '../../hooks/useTittle';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;