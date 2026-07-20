import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // ✅ Correct default import

import loremReducer from './reducer';

const store = createStore(loremReducer, applyMiddleware(thunk));

export default store;