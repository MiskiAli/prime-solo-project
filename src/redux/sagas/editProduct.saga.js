import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* putProduct(action){
console.log('putProduct action.payload is:', action.payload);
const res = yield axios.put(`/api/product/${action.payload.id}`, action.payload);

yield put({
    type: 'FETCH_PRODUCT',
    payload: res.data,
})
};

function* editProductSaga(){
    yield takeEvery ('EDIT_PRODUCT', putProduct);
}

export default editProductSaga;