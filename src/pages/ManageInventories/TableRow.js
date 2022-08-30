import React from 'react';
import { MdAutoDelete } from 'react-icons/md';

const TableRow = ({inventory, setDeleteInventory}) => {
    const {name, image, price, quantity, supplier} = inventory;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-28 h-28">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl text-accent">{name}</div>
                    </div>
                </div>
            </td>
            <td>$ {price}</td>
            <td>{quantity} KG</td>
            <td>{supplier}</td>
            <td><label onClick={() => setDeleteInventory(inventory)} htmlFor="delete-confirm-modal" className='btn btn-sm btn-accent text-white'><MdAutoDelete className='w-6 h-6 mr-1' />Delete</label></td>
        </tr>
    );
};

export default TableRow;