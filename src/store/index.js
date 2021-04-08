import * as reducers from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

const todoAppReducer = combineReducers(reducers);
const store = createStore(todoAppReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;