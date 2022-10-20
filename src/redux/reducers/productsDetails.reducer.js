// this is for the ProductDetails component

const productDeets = (state = [], action) => {
    switch (action.type) {
    case 'SET_PRODUCT_DEETS':
        return action.payload;
    case 'UPDATE_SET_PRODUCT_DEETS':
        // spread state and action.payload to bring over everything
        return { ...state, ...action.payload };
    default:
        return state;
}
}

export default productDeets;