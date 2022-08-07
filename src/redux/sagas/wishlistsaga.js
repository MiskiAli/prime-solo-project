import axios from 'axios';
import { post, put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_WISHLIST_ITEMS' dispatch 
function* addToWishlist(action) {
    const id = action.payload;
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


//     console.log('ADD_TO_WISHLIST ', action.payload);
//     const id= action.payload;
//     try {
//         const wishlist = yield axios.get(`/api/wishlist/${id}`)
//         yield console.log('show me wishlist pls', wishlist);
//         yield put({ 
//             type: 'ADD_TO_WISHLIST',
//             payload: wishlist.data[0],
//         })
//     }
//     catch (error) {
//         console.log('wishlist post failed', error);
//     }
// }


    
    //     try {
    //         yield axios.post('/api/wishlist', action.payload)
    //         console.log('Add dress action.payload', action.payload);
    //         // Fetch all cakes after adding new cake
    //         yield put({
    //             type: 'ADD_WISHLIST_ITEMS'
    //         })
    //     }
    //     catch (error) {
    //         console.log('Add to wishlist request failed', error);
    //     }
    // }
    




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
    yield takeLatest('ADD_WISHLIST_ITEMS', addToWishlist);
    yield takeLatest('ADD_WISHLIST_POST', wishlistPost);
    yield takeLatest('DELETE_WISHLIST', deleteWishlist);

}

export default wishlistSaga;