import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function ProductItem({product}){
    const history = useHistory();
    const dispatch = useDispatch();

    
    return(
        <div>
        <Link className="product-item" to={`/products/${product.id}`}>
            <div className="product-card">
                <img className="product-image" src={product.image} />
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-description">${product.price}</div>
            <span className="product-btns">
                <button className="view-product">View This Item</button>
            </span>
        </Link>
        </div>
    )
}

export default ProductItem;