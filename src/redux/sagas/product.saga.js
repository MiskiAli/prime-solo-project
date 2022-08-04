
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ---GET---
function* fetchProduct(){
    try{
        const response= yield axios.get('/api/product'); 
        yield put({
            type:'RENDER_PRODUCT', 
            payload: response.data
        });
    } catch(error){
        console.log('Error with fetchProduct', error);
    }
};

// ---POST---
function* addProduct(action){
    console.log('In addCake saga');
    try{
        yield axios.post('/api/product', action.payload)
        console.log('Add product in action.payload', action.payload);
        yield put({
            type:'FETCH_PRODUCT'
        });
    } catch (error){
        console.log ('Add cake request failed', error);
    }
}

function* productSaga(){
    yield takeEvery ('FETCH_PRODUCT',fetchProduct);
    yield takeEvery ('ADD_PRODUCT',addProduct);
};

export default productSaga;