import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-3xl text-accent text-center mt-5 mb-5'>About Us</h2>
            <div class="hero px-12">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/8MJtdVc/about.webp" class="lg:max-w-md rounded-lg" />
                    <div className='max-w-lg lg:pl-12'>
                        <h1 class="text-3xl text-accent text-left font-bold">Save more with GO! We give you the lowest prices on all your grocery needs.</h1>
                        <h5 className='mt-8 text-xl font-semibold'>Our Vision</h5>
                        <p class="py-3 text-gray-500"><small>Our vision is to create a better everyday life for many people. That's aspirational, short and to the point. More than that, it sets the tone for the company and makes it clear that they're in the market to offer low-priced organic grocery that suit everyone's health.</small></p>
                        <h5 className='text-xl font-semibold'>Our Goal</h5>
                        <p class="py-3 text-gray-500"><small>I recently set both personal and company goals for 2022 and I’m determined to hit every one of them.  I was very much inspired by watching the OKR video from Google (Warning: its 1h 29m long with the last 20 being QA), if 1 hour is too much of a commitment here is another rather extensive resource from re: Work that speaks to OKR (Objective and Key Results – Goals) setting and grading.</small></p>
                    </div>
                </div>
            </div>

            <div className="hero bg-gray-100 py-16 my-16">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-semibold">What We Provide?</h1>
                        <p className="py-6">Our Organic Grocer is an well established company for warehousing grocery fruits&vegetable, We also provide organic fruits&vegetable .</p>
                        <div className='grid grid-cols-2 gap-y-5 text-slate-500'>
                            <div className="form-control">
                                <label className="flex">
                                    <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                    <span className="label-text">Best Prices & Offers</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex">
                                    <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                    <span className="label-text">Wide Assortment</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex">
                                    <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                    <span className="label-text">Provide Organic Food</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex">
                                    <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                    <span className="label-text">Customer Relationship</span>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-accent text-white mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;