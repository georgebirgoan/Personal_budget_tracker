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
            const { id, editExpense  } = action.payload;
            console.log("payload",action.payload);
            console.log("edit",editExpense );
            
            const indexToUpdate = state.currentExpense.findIndex(item => item.id === id);
            if (indexToUpdate !== -1) {
                // Creează o nouă listă de venituri actualizată folosind metoda slice și spread operator
                const updatedExpense = [
                    ...state.currentExpense.slice(0, indexToUpdate), // Părțile din lista originală înaintea elementului actualizat
                    { ...state.currentExpense[indexToUpdate], ...editExpense }, // Obiectul actualizat
                    ...state.currentExpense.slice(indexToUpdate + 1) // Părțile din lista originală după elementul actualizat
                ];
                return {
                    ...state,
                    currentExpense: updatedExpense
                };
            } else {
                console.log("eroare reducer: Nu s-a găsit ID-ul specificat");
                return state; // Returnați starea nemodificată dacă nu s-a găsit ID-ul specificat
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










