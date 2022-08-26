import React from 'react';

const Blog = ({blog}) => {
    const {_id, name, image, supplier, description} = blog
    return (
        <div className="card bg-base-100 shadow-xl md:mr-4">
            <figure><img src={image} alt="" className='' /></figure>
            <p className='font-bold'>{supplier}</p>
            <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                <p><small>{description}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;