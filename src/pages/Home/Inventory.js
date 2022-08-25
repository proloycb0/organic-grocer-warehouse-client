import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, image, description, price, quantity, supplier } = inventory;
    const navigate = useNavigate();
    
    return (
        <div className="card bg-base-100 shadow-xl md:mr-4">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-secondary-focus">{name}</h2>
                <p><small>{description}</small></p>
                <p><small>Price: ${price}</small></p>
                <p><small>Quantity: {quantity} KG</small></p>
                <p><small>Supplier: {supplier}</small></p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/inventory/${_id}`)} className="btn btn-secondary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;