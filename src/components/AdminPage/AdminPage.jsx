import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import AddNewItem from '../AddNewItem/AddNewItem';
import AdminProductlist from '../AdminProductList/AdminProductList';




function AdminPage(){
const user = useSelector((store)=> store.user);
const wishlist = useSelector((store)=> store.wishlistReducer); 
const products = useSelector((store)=> store.productReducer)// fix this!!
const dispatch = useDispatch();

console.log('admin page `products`', products)

useEffect(()=> {
    dispatch({
        type: 'FETCH_PRODUCT'
    })
},[]);

// useEffect(()=>{
// dispatch({ 
//     type: '' 
// })
// },[]);

    return(
    <>
    <h1>Admin</h1>

{user.admin && user.id ===1 && 
<div>
<AdminProductlist />
</div>
}
    </>
    )
}

export default AdminPage;