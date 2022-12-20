import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const {register, handleSubmit} = useForm();
    const onSubmit = (data, event) => {
        fetch('https://organic-grocer-warehouse-server.onrender.com/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            toast.success('Add new item successfully');
        })
        event.target.reset();
    }
    return (
        <div className='lg:w-1/2 mx-auto mt-5 mb-5'>
            <h2 className='text-center  text-2xl font-bold mb-4'>Add New <span className='text-accent'>Item</span></h2>
            <form className='form-control mx-auto max-w-xs' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs mb-2' value={user.email} {...register("email")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Name' {...register("name", {required: true, maxLength: 20})} />
                <textarea className='input input-bordered w-full max-w-xs mb-2' placeholder='Description' {...register("description")} ></textarea>
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='input input-bordered w-full max-w-xs mb-2' value={user.displayName} {...register("supplier")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Photo Url' {...register("image")} />
                <input className='btn btn-accent text-white' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;