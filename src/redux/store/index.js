import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index.js';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
