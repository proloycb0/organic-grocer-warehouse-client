import React from 'react';
import Inventory from '../Home/Inventory';

const TableRow = ({inventory, setDeleteInventory}) => {
    const {name, image, price, quantity, supplier} = inventory;
    return (
        <tr>
            <td className='w-72'>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-32 h-32">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold text-xl text-accent">{name}</div>
                    </div>
                </div>
            </td>
            <td>$ {price}</td>
            <td>{quantity} KG</td>
            <td>{supplier}</td>
            <td><label onClick={() => setDeleteInventory(inventory)} htmlFor="delete-confirm-modal" className='btn btn-sm btn-accent text-white'>Delete</label></td>
        </tr>
    );
};

export default TableRow;