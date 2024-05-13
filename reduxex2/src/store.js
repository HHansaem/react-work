import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';  //session에 저장
// import storage from 'redux-persist/lib/storage';  //localstorage에 저장
import { rootReducer } from './reducer';

const persistConfig = {
    key:'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({reducer:{persistedReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})}
)
// const store = configureStore({reducer:rootReducer})

export default store;