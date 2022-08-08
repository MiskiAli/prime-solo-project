import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllProductDetails(action) {
	const id = action.payload;
	try {
		//? Request the details from the server by ID
		const details = yield axios.get(`/api/product/details/${id}`);
		yield console.log('DETAILS OF RETURN', details);
		//? After details come back send them to the reducer to update state
		yield put({ 
            type: 'SET_PRODUCT_DEETS', 
            payload: details.data });
	} catch (error) {
		console.log('get details error', error);
	}
}



function* productDetailSaga(){
    yield takeEvery("FETCH_PRODUCT_DEETS", fetchAllProductDetails)
}

export default productDetailSaga;