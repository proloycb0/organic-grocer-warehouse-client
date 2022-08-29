import React from 'react';
import AdBanner from './AdBanner';
import Banner from './Banner';
import Blogs from './Blogs';
import Inventories from './Inventories';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <AdBanner />
            <Blogs />
            <NewsLetter />
        </div>
    );
};

export default Home;