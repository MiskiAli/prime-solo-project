// adds the product to the wishlist
const wishlistReducer = (state=[], action)=>{
    // console.log('in the wishlist reducer');
    switch(action.type) {
        case 'SET_WISHLIST':
            return action.payload;
        default:
            return state;
    }
}
export default wishlistReducer;