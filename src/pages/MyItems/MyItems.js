import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ItemDeleteConfirm from './ItemDeleteConfirm';
import MyItem from './MyItem';

const MyItems = () => {
    const { data: inventories, isLoading, refetch } = useQuery('inventories', () => fetch('http://localhost:5000/inventory')
        .then(res => res.json())
    );
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [deleteItem, setDeleteItem] = useState(null);

    useEffect(() => {
        if(user !== null) {
            const url = 'http://localhost:5000/myInventory';
            fetch(url, {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                },
            })
            .then(res => res.json())
            .then(data => setItems(data))
        }
    }, [user])

    if(loading || isLoading || error){
        return <Loading />
    }
    if(items.length === 0){
        return <Loading />
    }
    return (
        <div className='container h-screen'>
            <h2 className='text-center text-accent text-2xl mb-2'>My Items</h2>
            <div className='lg:flex items-center justify-center'>
                {
                    items.map(item => <MyItem
                        key={item._id}
                        item={item}
                        setDeleteItem={setDeleteItem}
                    />)
                }
            </div>
            {
                deleteItem && <ItemDeleteConfirm
                    deleteItem={deleteItem}
                    setDeleteItem={setDeleteItem}
                    setItems={setItems}
                    refetch={refetch}
                /> 
            }
        </div>
    );
};

export default MyItems;