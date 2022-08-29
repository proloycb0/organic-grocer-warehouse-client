import React from 'react';

const MyItem = ({ items, setDeleteItem }) => {
    const { name, image, description, price, quantity } = items;

    return (
        <div className="card bg-base-100 shadow-xl md:mr-4">
            <figure><img src={image} alt="" className='' /></figure>
            <div className="card-body">
                <h2 className="card-title text-accent text-xl font-bold">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity} KG</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setDeleteItem(items)} htmlFor="delete-confirm-modal" className='btn btn-accent text-white'>Delete</label>
                </div>
            </div>
        </div>
    );
};

export default MyItem;