import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './config';
import { loadNotes } from './config/notes';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// Load all my todos from server after creating stores
store.dispatch(loadNotes());

export default store;
