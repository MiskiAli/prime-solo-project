import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';



function ProductItem({product}){
    const history = useHistory();
    const dispatch = useDispatch();

    
    return(
        <div>
            <Link className="product-item-link" to= {`/details/${product.id}`}>
        <section className="product-item" >
            <div className="product-card">
                <img className="product-image" src={product.image} />
            </div>
            <h2 className="product-name">{product.product_name}</h2>
            <div className="product-price">${product.price}</div>
            <span className="product-btns">
                <button className="view-product">View This Item</button>
            </span>
        </section>
        </Link>
        </div>
    )
}

export default ProductItem;