import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';


// GETs the wishlist info on to the admin page.
function* fetchProduct() {
    console.log('in fetchProduct function admin saga');
    try {
        const res = yield axios.get('/api/product')
        console.log('Get all wishlist', res.data);
        yield put({
            type: 'SET_PRODUCT', //type is from product reducer
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET wishlist request failed', error);
    }
};

// deletes the product info from the admin and client side hopefully
// function deleteProduct(action){
//     console.log('Delete product is admin saga', action);
//     try{
        
//         yield axios.delete(`/api/product/${action.payload}`);
//         console.log('Delete product', action.payload);
    
//         yield put({ type: 'SET_PRODUCT', payload: res.data }); 
//         // type is from product reducer
//     }
//         catch (error) {
//             console.log('Error deleting product', error);
//         }
//     };

    function* deleteProduct(action){
        const id = action.payload;
        try{
            yield axios.delete(`/api/product/${id}`);
        } catch{
            console.log('delete from db ', id)
    
        }
        yield put({type:"FETCH_PRODUCT_ADMIN"});
    }


function* adminSaga(){

    yield takeLatest('FETCH_PRODUCT_ADMIN', fetchProduct);
    yield takeLatest('DELETE_PRODUCT', deleteProduct);

}

export default adminSaga;