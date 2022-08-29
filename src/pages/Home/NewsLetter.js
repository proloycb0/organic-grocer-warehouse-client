import React from 'react';

const NewsLetter = () => {
    return (
        <div className="hero py-5 mb-10 mt-16 bg-[url('https://i.ibb.co/803Tsw0/leo-shopioorganic-banner14-h1.webp')]" >
            <div className=""></div>
            <div className="mx-auto text-center text-neutral-content">
                <div className="lg:max-w-md md:max-w-sm text-white">
                    <h3 className='uppercase font-semibold mb-4'>New Customer Discount</h3>
                    <h1 className="max-w-md mx-auto text-3xl text-center font-bold">Join our newsletter and get $20 discount for your first order</h1>
                    <div className="form-control">
                        <div className="input-group mt-5 mb-7">
                            <input type="text" placeholder="Your E-mail" className="input input-bordered lg:w-96 ml-2 mr-2" />
                            <button className="btn btn-accent text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;