import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';


// GETs the wishlist info on to the admin page.
function* fetchWishlist() {
    console.log('in fetchWishlist function admin saga');
    try {
        const res = yield axios.get('/api/wishlist')
        console.log('Get all wishlist', res.data);
        yield put({
            type: 'SET_WISHLIST', //type is from wishlist reducer
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET wishlist request failed', error);
    }
};

// deletes the product info from the admin and client side hopefully
function deleteProduct(action){
    console.log('Delete product is admin saga', action);
    try{
        
        yield axios.delete(`/api/product/${action.payload}`);
        console.log('Delete product', action.payload);
    
        yield put({ type: 'SET_PRODUCT', payload: res.data }); // type is from product reducer
    }
        catch (error) {
            console.log('Error deleting product', error);
        }
    };

    // function* deleteProduct(action){
    //     try{
    //         yield axios.delete(`/api/product/${action.payload}`);
    //     } catch{
    //         console.log('delete from db ', action.payload)
    
    //     }
    //     yield put({type:"SET_PRODUCT"});
    // }


function* adminSaga(){
    yield takeLatest('FETCH_WISHLIST', fetchWishlist);
    yield takeLatest('DELETE_PRODUCT', deleteProduct);

}

export default adminSaga;