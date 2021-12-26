import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeReduser from './cake/cakeReduser';
import IceCreamReduser from './iceCream/iceCreamReduser';
import userReduser from './user/userReduser';
const rootReduser = combineReducers({
    cake:cakeReduser,
    iceCream: IceCreamReduser,
    user:userReduser
})

const store = createStore(rootReduser,composeWithDevTools(applyMiddleware(logger,thunk)) )

export default store;