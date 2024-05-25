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
                id: uuidv4(),
                type:'expense',
                createdAt:Date.now()
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
        },

        updateExpense: (state, action) => {
            const { id, editExpense } = action.payload;
            console.log("payload", action.payload);
            console.log("edit", editExpense);

            const indexToUpdate = state.currentExpense.findIndex(item => item.id === id);
            if (indexToUpdate !== -1) {
                // Create an updated list of expenses using slice and spread operator
                const updatedExpense = [
                    ...state.currentExpense.slice(0, indexToUpdate), // Parts of the original list before the updated item
                    { ...state.currentExpense[indexToUpdate], ...editExpense }, // Updated object
                    ...state.currentExpense.slice(indexToUpdate + 1) // Parts of the original list after the updated item
                ];

                // Recalculate the total expense after updating the list
                const newTotalExpense = updatedExpense.reduce((total, item) => total + parseFloat(item.amount), 0);

                return {
                    ...state,
                    currentExpense: updatedExpense,
                    totalExpense: newTotalExpense // Update the total expense in the state
                };
            } else {
                console.log("eroare reducer: Nu s-a găsit ID-ul specificat");
                return state; // Return the unmodified state if the specified ID was not found
            }
        },
        



        failureUpdateEx:(state,action)=>{
            state.loading=false;
            state.error=action.payload //incarca cu mesajul erorii
        },
    

















    
    }
})

export const {
    startExpense,
    failureExpense,
    finalExpense,
    deleteExpense,
    totExpense,
    updateExpense,
    failureUpdateEx

}=cartExpense.actions;

export default cartExpense.reducer;










