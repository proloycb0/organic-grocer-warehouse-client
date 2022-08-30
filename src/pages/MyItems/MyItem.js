import React from 'react';
import { MdAutoDelete } from 'react-icons/md';

const MyItem = ({ item, setDeleteItem }) => {
    const { name, image, description, price, quantity } = item;

    return (
        <div className="card bg-base-100 shadow-2xl md:mr-4 mb-5">
            <figure><img src={image} alt="" className='max-w-sm' /></figure>
            <div className="card-body">
                <h2 className="card-title text-accent text-xl font-bold">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity} KG</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setDeleteItem(item)} htmlFor="delete-confirm-modal" className='btn btn-accent text-white'><MdAutoDelete className='w-6 h-6 mr-1' />Delete</label>
                </div>
            </div>
        </div>
    );
};

export default MyItem;