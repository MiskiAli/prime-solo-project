import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function AdminPage(){

const wishlist = useSelector((store)=> store.wishlistReducer); // fix this!!
const dispatch = useDispatch();


    return(
    <>
    <h1>Admin</h1>


    </>
    )
}

export default AdminPage;