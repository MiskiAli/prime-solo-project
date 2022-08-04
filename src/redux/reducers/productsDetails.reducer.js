// this is for the ProductDetails component

const productDeets =(state=[], action={}) => {
    switch (action.type) {
        case 'PRODUCT_DEETS':
            return actiion.payload;
            case "UPDATE_PRODUCT_DEETS":
                return{...state, ...action.payload}
                default: return state;
    }
}

export default productDeets;