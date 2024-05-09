import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialState={
    currentExpense:[],
    totalExpense:0,
    loading:false,
    error:false
}

console.log("current Expenses",initialState);

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
        },
    
    

        deleteExpense: (state, action) => {
            const { id } = action.payload;
            console.log("id reducer", id);
            const updateExpense = state.currentExpense.filter(item => item.id !== id);

            const newTotalExpense=updateExpense.reduce((total,item)=>
            total + parseFloat(item.amount),0)

            return {
                ...state,
                currentExpense: updateExpense,
                totalExpense:newTotalExpense
            };
        },

        totExpense:(state,action)=>{
            const TotalExpense=state.currentExpense.reduce((total,item)=>
            total + parseFloat(item.amount),0)
            
            return{
                ...state,
                totalExpense:TotalExpense
            }
        }



    
    }
})

export const {
    startExpense,
    failureExpense,
    finalExpense,
    deleteExpense,
    totExpense
}=cartExpense.actions;

export default cartExpense.reducer;










