import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [isReload, setIsReload] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[isReload])
 
    const { image, name, price, quantity, supplier, description } = inventory;
    const handleQuantity = () => {
        console.log(quantity)
        let newQuantity = parseInt(quantity);

        if(newQuantity > 0) {
            const updateQuantity = newQuantity - 1;
            
            const url = `http://localhost:5000/updateQuantity/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({updateQuantity}),
            })   
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsReload(!isReload);
                });
        }
        else{
            toast('product sold out')
        }
    }
    const handleQuantityForm = (event) => {
        event.preventDefault();
        const oldQuantity = parseInt(quantity);
        const newQuantity = parseInt(event.target.newQuantity.value);

        if(newQuantity >= 0) {
            const updateQuantity = oldQuantity + newQuantity;

            fetch(`http://localhost:5000/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({updateQuantity}),
            })
            .then(res => res.json())
            .then(data => {
                setIsReload(!isReload);
                event.target.reset();
            })
        }else {
            toast.error ("Negative/String Value Not Added")
        }
    }
    return (
        <div style={{ width: '32rem' }} className='mx-auto mt-3 mb-3 container'>
            <div className="card bg-base-100 shadow-2xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent text-xl">{name}</h2>
                    <p><small>{description}</small></p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity} KG</small></p>
                    <p><small>Supplier: {supplier}</small></p>
                </div>
                <button onClick={handleQuantity} className='btn bg-accent text-white ml-3 w-1/2 mb-3'>{inventory.quantity === 0 ? "Sold Out" : "Delivered"}</button>
                <form className='mb-2' onSubmit={handleQuantityForm}>
                    <input type="text" name="newQuantity" placeholder="Type here" class="input input-bordered w-1/4 ml-2 mr-2" />
                    <input type="submit" className='btn bg-accent text-white border-0 text-light' value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default InventoryDetail;