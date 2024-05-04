import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialState={
    currentExpense:[],
    loading:false,
    error:false
}


const cartExpense=createSlice({
    name:'expense',
    initialState,
    reducers:{

        startExpense:(state)=>{
            state.loading=true;
        },


        finalExpense: (state, action) => {
            const newItem = {
                ...action.payload,
                id: uuidv4() // Generăm un ID unic pentru fiecare obiect adăugat
            };
            return {
                ...state,
                currentExpense: [...state.currentExpense, newItem]
            };
        },
        

        failureExpense:(state,action)=>{
            state.loading=false;
            state.error=action.payload //incarca cu mesajul erori
        }
    
    },

    deleteExpense: (state, action) => {
        const { id } = action.payload;
        console.log("id reducer", id);
        const updateExpense = state.currentExpense.filter(item => item.id !== id);
        return {
            ...state,
            currentExpense: updateExpense
        };
    }

})

export const {
    startExpense,
    failureExpense,
    finalExpense,
    deleteExpense
}=cartExpense.actions;

export default cartExpense.reducer;










