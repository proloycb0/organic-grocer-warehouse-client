import React from 'react';
import AdBanner from './AdBanner';
import Banner from './Banner';
import Blogs from './Blogs';
import Inventories from './Inventories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <AdBanner />
            <Blogs />
        </div>
    );
};

export default Home;