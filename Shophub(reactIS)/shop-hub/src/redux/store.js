import { createStore } from 'redux';
import rootReducers from './reducer/index2';

// const store = createStore(rootReducers);
// redux.js:426 Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.
const store   =   createStore(rootReducers({
   
   products: products,
}));
export default store;
