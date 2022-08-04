import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllProductDetails(){
    try{
        const res = yield axios.get(`/api/product${action.payload}`)
        console.log('get product details', response.data);
        yield put({
            type: 'SET_PRODUCT_DEETS',
            payload: res.data,
        })
    } catch (error){
        console.log('get details error', error);
    }
}

function* productDetailSaga(){
    yield takeEvery("FETCH_PRODUCT_DEETS", fetchAllProductDetails)
}

export default productDetailSaga;