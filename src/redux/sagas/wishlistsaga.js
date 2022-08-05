import axios from 'axios';
import { post, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_ORDER_ITEMS' dispatch 
function* addToWishlist(action) {
    console.log('ADD_TO_WISHLIST ', action.payload);
    try {
        yield axios.get('/api/wishlist', action.payload)
    }
    catch (error) {
        console.log('Checkout post failed', error);
    }
}

function* checkoutSaga() {
    yield takeLatest('ADD_WISHLIST_ITEMS', addToWishlist)
}

export default checkoutSaga;