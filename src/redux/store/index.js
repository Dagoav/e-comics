import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import comicsReducer from '../reducers/comicsReducer';
import admin from '../reducers/admin';
import shop_fav_rating from '../reducers/shop_fav_rating';

import params from '../reducers/params';
import reviews from '../reducers/reviews';

const reducer = combineReducers({
    comicsReducer,
    admin,
    shop_fav_rating,
    filters,
    params,
    reviews
})


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
