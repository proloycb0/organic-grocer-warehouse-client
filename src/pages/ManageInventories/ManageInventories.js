import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import InventoryDeleteConfirm from './InventoryDeleteConfirm';
import TableRow from './TableRow';

const ManageInventories = () => {
    const [deleteInventory, setDeleteInventory] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);
    const navigate = useNavigate();
    const { data: inventories, isLoading, refetch } = useQuery(['inventories', page, size], () => fetch(`https://organic-grocer-warehouse-server.onrender.com/inventory?page=${page}&size=${size}`)
        .then(res => res.json())
    );

    useEffect(() => {
        fetch('https://organic-grocer-warehouse-server.onrender.com/inventoryCount')
            .then(res => res.json())
            .then(data => {
                const count = data.result;
                const pages = Math.ceil(count / 4);
                setPageCount(pages);
            })
    }, [])


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold text-center mb-5'><span className='text-accent'>Manage</span> Inventories</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-3/4 mx-auto">
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
            <div className='mt-3 text-center'>
                {
                    [...Array(pageCount).keys()]
                        .map((number, index) => <button key={index} onClick={() => setPage(number)} className={page === number ? "btn btn-sm btn-primary mr-2" : "btn btn-sm btn-accent text-white mr-2"}>{number + 1}</button>)
                }
                
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