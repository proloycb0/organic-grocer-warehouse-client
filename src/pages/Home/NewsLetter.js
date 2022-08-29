import React from 'react';

const NewsLetter = () => {
    return (
        <div class="hero py-5 mb-10 mt-16 bg-[url('https://i.ibb.co/803Tsw0/leo-shopioorganic-banner14-h1.webp')]" >
            <div class=""></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="lg:max-w-md md:max-w-sm text-white">
                    <h3 className='uppercase font-semibold mb-4'>New Customer Discount</h3>
                    <h1 class="max-w-md mx-auto text-3xl text-center font-bold">Join our newsletter and get $20 discount for your first order</h1>
                    <div class="form-control">
                        <div class="input-group mt-5 mb-7">
                            <input type="text" placeholder="Your E-mail" class="input input-bordered w-96 mr-2" />
                            <button class="btn btn-accent text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;