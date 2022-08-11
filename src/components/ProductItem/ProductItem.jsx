import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './ProductItem.css';
import ImageListItemBar from '@mui/material/ImageListItemBar';




function ProductItem({product}){
    const history = useHistory();
    const dispatch = useDispatch();

    // const viewDetail = (id) =>{
    //     dispatch({
    //         type: 'FETCH_PRODUCT_DEETS',
    //         payload: details,
    //     })

    //     history.push(`/details/`)
    // }


    return(
        <div >
        <section className="product-item" >
            <Link to= {`/details/${product.id}`}>
            <div className="product-card">
                <img className="product-image" src={product.image} />
            <h2 className="product-name">{product.product_name}</h2>
            <div className="product-price">${product.price}</div>
            <span className="product-btns">
                {/* <button className="view-product">View This Item</button> */}
            </span>
            </div>
            </Link>
        </section>
        </div>
    )
}

export default ProductItem;