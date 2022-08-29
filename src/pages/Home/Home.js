import React from 'react';
import AdBanner from './AdBanner';
import Banner from './Banner';
import Blogs from './Blogs';
import Inventories from './Inventories';
import NewsLetter from './NewsLetter';
import Provide from './Provide';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <AdBanner />
            <Blogs />
            <NewsLetter />
            <Provide />
        </div>
    );
};

export default Home;