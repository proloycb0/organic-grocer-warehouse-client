import React from 'react';

const Provide = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
            <div className="card lg:card-side bg-orange-100 shadow-xl">
                <figure><img className='mt-5 lg:ml-4' src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_shopioorganic_banner18_h1.png" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">100% Natural</h2>
                    <p>Eat local, consume local, closer to nature.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-slate-200 shadow-xl">
                <figure><img className='mt-5 lg:ml-4' src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_shopioorganic_banner15_h1.png" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Alway Fresh</h2>
                    <p>Made with passion by 300+ curators.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-zinc-200 shadow-xl">
                <figure><img className='mt-5 lg:ml-4' src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_shopioorganic_banner16_h1.png" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Modern Farm</h2>
                    <p>Eat local, consume local, closer to nature.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-yellow-100 shadow-xl">
                <figure><img className='mt-5 lg:ml-4' src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_shopioorganic_banner17_h1.png" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Handmade</h2>
                    <p>Made with passion by 300+ curators.</p>
                </div>
            </div>
        </div>
    );
};

export default Provide;