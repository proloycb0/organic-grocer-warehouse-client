import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [isReload, setIsReload] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://agile-bastion-22481.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [isReload])

    const { image, name, price, quantity, supplier, description } = inventory;
    const handleQuantity = () => {
        console.log(quantity)
        let newQuantity = parseInt(quantity);

        if (newQuantity > 0) {
            const updateQuantity = newQuantity - 1;

            const url = `https://agile-bastion-22481.herokuapp.com/updateQuantity/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ updateQuantity }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsReload(!isReload);
                    toast.success("Delivered successfully")
                });
        }
        else {
            toast('product sold out')
        }
    }
    const handleQuantityForm = (event) => {
        event.preventDefault();
        const oldQuantity = parseInt(quantity);
        const newQuantity = parseInt(event.target.newQuantity.value);

        if (newQuantity >= 0) {
            const updateQuantity = oldQuantity + newQuantity;

            fetch(`https://agile-bastion-22481.herokuapp.com/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ updateQuantity }),
            })
                .then(res => res.json())
                .then(data => {
                    setIsReload(!isReload);
                    toast.success("Restock successfully");
                    event.target.reset();
                })
        } else {
            toast.error("Negative/String Value Not Added")
        }
    }
    return (
        <div className='lg:max-w-lg mx-auto mt-3 mb-3 container'>
            <div className="card bg-base-100 shadow-2xl">
                <figure><img src={image} alt="" className='w-72 h-72' /></figure>
                <div className="card-body pt-0 pb-4">
                    <h2 className="card-title text-accent font-bold text-2xl">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p><small>Quantity: {quantity} KG</small></p>
                    <p><small>Supplier: {supplier}</small></p>
                </div>
                <button onClick={handleQuantity} className='btn bg-accent text-white ml-3 mr-3 mb-4'>{inventory.quantity === 0 ? "Sold Out" : "Delivered"}</button>
            </div>
            <form className='mb-2 mt-5 text-center' onSubmit={handleQuantityForm}>
                <h4 className='text-3xl font-semibold mb-2'><span className='text-accent'>Restock</span> The Item</h4>
                <input type="text" name="newQuantity" placeholder="Type here" className="input input-bordered shadow-xl w-1/4 ml-2 mr-2" />
                <input type="submit" className='btn bg-accent text-white border-0 text-light' value="Restock" />
            </form>
            <p className='text-center mt-6'><button onClick={() => navigate('/manage')} className="btn btn-accent text-white">Manage Inventories</button></p>
        </div>
    );
};

export default InventoryDetail;