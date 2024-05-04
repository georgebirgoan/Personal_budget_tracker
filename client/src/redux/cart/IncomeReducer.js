import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';



const initialState={
    currentIncome:[],
    loading:false,
    error:false
}


console.log("state initial",initialState);

const cartIncome=createSlice({
    name:'income',
    initialState,
    reducers:{
    
        resetState:()=>initialState,

        startIncome:(state,action)=>{
            state.loading=true;
        },


        finalIncome: (state, action) => {
            const newItem = {
                ...action.payload,
                id: uuidv4() // Generăm un ID unic pentru fiecare obiect adăugat
            };
            return {
                ...state,
                currentIncome: [...state.currentIncome, newItem]
            };
        },
        
    
        failureIncome:(state,action)=>{
            state.loading=false;
            state.error=action.payload //incarca cu mesajul erorii
        },


        deleteIncome: (state, action) => {
            const { id } = action.payload;
            console.log("id reducer", id);
            const updatedIncome = state.currentIncome.filter(item => item.id !== id);
            return {
                ...state,
                currentIncome: updatedIncome
            };
        }
        
    }

})

export const {
    startIncome,
    finalIncome,
    failureIncome,
    deleteIncome,
    resetState
}=cartIncome.actions;

export default cartIncome.reducer;










