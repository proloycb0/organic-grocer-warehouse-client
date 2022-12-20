import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ItemDeleteConfirm from './ItemDeleteConfirm';
import MyItem from './MyItem';

const MyItems = () => {
    const { data: inventories, isLoading, refetch } = useQuery('inventories', () => fetch('https://organic-grocer-warehouse-server.onrender.com/inventory')
        .then(res => res.json())
    );
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [deleteItem, setDeleteItem] = useState(null);
    const [isReload, setIsReload] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        if(user !== null) {
            const url = 'https://organic-grocer-warehouse-server.onrender.com/myInventory';
            fetch(url, {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                },
            })
            .then(res => {
                console.log(res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json();
            })
            .then(data => setItems(data))
        }
    }, [user, isReload])

    if(loading || isLoading || error){
        return <Loading />
    }
    if(items?.length === 0){
        return <Loading />
    }
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center text-accent text-3xl mb-4'>My Items</h2>
            <div className='lg:flex items-center justify-center gap-y-5'>
                {
                    items?.map(item => <MyItem
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
                    isReload={isReload}
                    setIsReload={setIsReload}
                    refetch={refetch}
                /> 
            }
        </div>
    );
};

export default MyItems;