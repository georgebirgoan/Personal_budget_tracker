import { combineReducers,configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/IncomeReducer';
import cartExpense from './cart/ExpenseReducer'
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import  userReducer  from "./user/userSlice";


const persistConfig={
    key:'root',
    version:1,
    storage,
}

//we have more reducer
const rootReducer=combineReducers({
    income:cartReducer,
    expense:cartExpense,
    user:userReducer
});
const persistedReducer =persistReducer(persistConfig,rootReducer);

export const store= configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })

})


export const persistor=persistStore(store);

