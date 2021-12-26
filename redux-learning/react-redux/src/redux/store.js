import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import cakeReduser from './cake/cakeReduser';
import IceCreamReduser from './iceCream/iceCreamReduser';

const rootReduser = combineReducers({
    cake:cakeReduser,
    iceCream: IceCreamReduser
})

const store = createStore(rootReduser,composeWithDevTools(applyMiddleware(logger)) )

export default store;