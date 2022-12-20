import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const ItemDeleteConfirm = ({ deleteItem, setDeleteItem, refetch, setItems, isReload, setIsReload}) => {
    const {_id, name } = deleteItem;

    const handleDelete= () => {
        fetch(`https://organic-grocer-warehouse-server.onrender.com/inventory/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`${name} is deleted`)
                setDeleteItem(null);
                refetch();
                setIsReload(!isReload);
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p className="py-4">You've been selected for a product for delete click delete button . You want not cancel button click.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-accent">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemDeleteConfirm;