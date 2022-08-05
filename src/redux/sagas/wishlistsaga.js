import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_WISHLIST_ITEMS' dispatch 
function* addToWishlist(action) {
    console.log('ADD_TO_WISHLIST ', action.payload);
    const id= action.payload;
    try {
        const wishlist = yield axios.get(`/api/wishlist/wishlist/${id}`)
        yield console.log('show me wishlist pls', wishlist);
        yield put({ 
            type: 'ADD_TO_WISHLIST',
            payload: wishlist.data[0],
        })
    }
    catch (error) {
        console.log('wishlist post failed', error);
    }
}



// function* fetchAllProductDetails(action) {
//     console.log('in the fetchAllProductDetails does it work?');
// 	const id = action.payload;
// 	try {
// 		//? Request the details from the server by ID
// 		const details = yield axios.get(`/api/product/details/${id}`);
// 		yield console.log('DETAILS OF RETURN', details);
// 		//? After details come back send them to the reducer to update state
// 		yield put({ 
//             type: 'SET_PRODUCT_DEETS', 
//             payload: details.data });
// 	} catch (error) {
// 		console.log('get details error', error);
// 	}
// }

function* wishlistSaga() {
    yield takeLatest('ADD_WISHLIST_ITEMS', addToWishlist)
}

export default wishlistSaga;