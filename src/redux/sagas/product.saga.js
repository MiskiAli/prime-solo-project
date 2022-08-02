
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// ---GET---
function* fetchProduct(action){
    try{
        const response= yield axios.get('/homepage', action.payload); //change route thingy
        yield put({type:'RENDER_PRODUCT', payload: response.data});
    } catch(error){
        console.log('Error with fetchProduct', error);
    }
};



function* productSaga(){
    yield takeEvery ('FETCH_PRODUCT',fetchProduct);

};

export default productSaga;