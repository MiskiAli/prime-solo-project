import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_WISHLIST_ITEMS' dispatch 
function* addToWishlist(action) {
    // const id = action.payload;
	try {
		//? Request the details from the server by ID
		const res = yield axios.get(`/api/wishlist`);
		yield console.log('res OF RETURN', res);
		//? After details come back send them to the reducer to update state
		yield put({ 
            type: 'SET_WISHLIST', 
            payload: res.data });
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

}

// delete from db 
function* deleteWishlist(action){
    try{
        yield axios.delete(`/api/wishlist/${action.payload}`);
    } catch{
        console.log('delete from db ', action.payload)

    }
    yield put({type:"ADD_WISHLIST_ITEMS"});
}


function* wishlistSaga() {
    yield takeLatest('ADD_WISHLIST_ITEMS', addToWishlist);
    yield takeLatest('ADD_WISHLIST_POST', wishlistPost);
    yield takeLatest('DELETE_WISHLIST', deleteWishlist);

}

export default wishlistSaga;