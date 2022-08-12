// this is for the ProductDetails component

// const productDeets =(state= [], action) => {
//     switch (action.type) {
//         case 'SET_PRODUCT_DEETS':
//             return action.payload;
//             // return {
//             // name: action.payload.name,
//             // price: action.payload.price,
//             // image: action.payload.image,
//             // description: action.payload.description,
//             // }
//                 default: 
//                 return state;
//     }
// }

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