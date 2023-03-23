import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';



export const store   =   configureStore({reducer:rootReducer,devTools:true});

