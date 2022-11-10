import React from 'react';
import useTitle from '../../hooks/useTittle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeService from './HomeServic/HomeService';

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <About></About>
        </div>
    );
};

export default Home;