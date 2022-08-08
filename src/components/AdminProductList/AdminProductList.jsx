import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminProductItem from "../AdminProductItem/AdminProductItem";

// this should render products on to the admin page (just like homepage)
function AdminProductlist(){
const dispatch = useDispatch();

// ---product reducer---
const products = useSelector((store)=> store.productReducer)


return(
    // map thru products
    <div>
    {products.map((product) => (
            <AdminProductItem product={product} key={product.id} />
                ))}

    </div>
)

}
export default AdminProductlist;