import * as reducers from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunkMiddleware from 'redux-thunk'

const todoAppReducer = combineReducers(reducers)

let middleware = [thunkMiddleware];

const store = createStore(todoAppReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;