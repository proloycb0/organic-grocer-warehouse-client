import React from 'react';

const About = () => {
    return (
        <div className="hero bg-base-200 py-16 my-16">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl text-secondary font-bold">About Us</h1>
                    <p className="py-6">MANUFACTURER COMPUTER PARTS INDUSTRIES is an well established company manufacturing Computer hardware parts, we also manufacture special parts .</p>
                    <div className='grid grid-cols-2 gap-y-5 text-slate-500'>
                        <div className="form-control">
                            <label className="flex">
                                <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                <span className="label-text">ISO Certified Company</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex">
                                <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                <span className="label-text">Manufacturer & Exporter</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex">
                                <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                <span className="label-text">Provide Quality Products</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex">
                                <input type="checkbox" checked="checked" className="checkbox lg:mr-4 mr-1" readOnly />
                                <span className="label-text">Customer Relationship</span>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-5">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;