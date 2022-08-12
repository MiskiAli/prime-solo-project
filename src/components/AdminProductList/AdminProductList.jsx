import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminProductItem from "../AdminProductItem/AdminProductItem";
import ImageList from '@mui/material/ImageList';

// this should render products on to the admin page (just like homepage)
function AdminProductlist(){
const dispatch = useDispatch();

// ---product reducer---
const products = useSelector((store)=> store.productReducer)
console.log('adminProducts `products`', products)

return(
    // map thru products
    <div>
        <ImageList sx={{ width: 1300, height: 750 }} variant="woven" cols={4} gap={80}>
    {products.map((product) => (
            <AdminProductItem product={product} key={product.id} />
                ))}
</ImageList>
    </div>
)

}
export default AdminProductlist;