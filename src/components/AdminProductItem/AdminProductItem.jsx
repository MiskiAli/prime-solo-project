import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,} from "react-redux"; 
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import {  useSelector } from 'react-redux';



function AdminProductItem({product}){
    // const products = useSelector((store)=> store.productReducer)
    const user = useSelector((store)=> store.user);

const dispatch = useDispatch();
const history = useHistory();

const deleteInventory= () =>{
// add deleteInventory functionality
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.isConfirmed) {
        dispatch({
            type:"DELETE_PRODUCT",
            payload: product.id,
        })
    Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
    )
    }
})


}

const editInventory= () =>{

    dispatch({
        type:'SET_PRODUCT_DEETS',
        payload: product,
    })
    history.push('/edit')

}


    return(
<div>
{user.admin && user.id ===1 && 

<section className="product-item" >
            <div className="product-card">
                <img className="product-image" src={product.image} />
            </div>
            <h2 className="product-name">{product.product_name}</h2>
            <div className="product-price">${product.price}</div>
            <span className="product-btns">
                <button onClick={deleteInventory} className="delete-inventory">Delete This Item</button>
                <button value={product}
                onClick={editInventory} 
                className="edit-inventory">Edit This Item</button>
                
            </span>
        </section>
}
</div>

        
    )
        
}
export default AdminProductItem;