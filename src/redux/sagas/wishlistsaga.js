import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_WISHLIST_ITEMS' dispatch 
function* fetchWishList() {
	try {
		//Request the details from the server by ID
		const response = yield axios.get(`/api/wishlist`);

		console.log('res OF RETURN', response.data);
		//After details come back send them to the reducer to update state
		yield put({ 
            type: 'SET_WISHLIST', 
            payload: response.data });
	} catch (error) {
		console.log('get wishlist error', error);
	}
}

// post into db 
function* wishlistPost(action){
    yield axios({
        method: "POST", 
        url:`/api/wishlist`, 
        data: action.payload
    })
yield put({ type:'FETCH_WISHLIST_ITEMS'})
}

// delete from db 
function* deleteWishlist(action){
    try{
        yield axios.delete(`/api/wishlist/${action.payload}`);
    } catch{
        console.log('delete from db ', action.payload)

    }
    yield put({type:"FETCH_WISHLIST_ITEMS"});
}


function* wishlistSaga() {
    yield takeLatest('FETCH_WISHLIST_ITEMS', fetchWishList);
    yield takeLatest('ADD_WISHLIST_POST', wishlistPost);
    yield takeLatest('DELETE_WISHLIST', deleteWishlist);

}

export default wishlistSaga;