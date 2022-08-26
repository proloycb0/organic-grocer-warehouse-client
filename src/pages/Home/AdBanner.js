import React from 'react';

const AdBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
            <div>
                <img className='md:w-screen' src="https://i.ibb.co/585XnXN/1-2.webp" alt="" />
            </div>
            <div>
                <img className='md:w-screen' src="https://i.ibb.co/C80nMRH/2-2.webp" alt="" />
            </div>
        </div>
    );
};

export default AdBanner;