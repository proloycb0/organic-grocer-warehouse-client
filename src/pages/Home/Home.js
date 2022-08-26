import React from 'react';
import AdBanner from './AdBanner';
import Banner from './Banner';
import Inventories from './Inventories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <AdBanner />
        </div>
    );
};

export default Home;