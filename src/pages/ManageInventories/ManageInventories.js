import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import InventoryDeleteConfirm from './InventoryDeleteConfirm';
import TableRow from './TableRow';

const ManageInventories = () => {
    const { data: inventories, isLoading, refetch } = useQuery('inventories', () => fetch('http://localhost:5000/inventory')
        .then(res => res.json())
    );
    const [deleteInventory, setDeleteInventory] = useState(null)
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-bold text-center mb-5'><span className='text-accent'>Manage</span> Inventories</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories?.map(inventory => <TableRow 
                                key={inventory._id}
                                inventory={inventory}
                                setDeleteInventory={setDeleteInventory}
                            />)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteInventory && <InventoryDeleteConfirm 
                    deleteInventory={deleteInventory}
                    setDeleteInventory={setDeleteInventory}
                    refetch={refetch}
                /> 
            }
            <p className='text-center mt-4 mb-5'><button onClick={() => navigate('/addNewItem')} className="btn btn-accent text-white">Add New Item</button></p>
        </div>
    );
};

export default ManageInventories;