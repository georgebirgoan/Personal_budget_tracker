import {createSlice, current} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


const initialState={
    currentIncome:[],
    totalIncome:0,
    totalEconomy:0,
    economyChanges:[],
    balanceChanges:[],
    loading:false,
    error:false
}


console.log("state initial",initialState);


const cartIncome=createSlice({
    name:'income',
    initialState,
    reducers:{
    
       // resetState:()=>initialState,
        
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },

        startIncome:(state,action)=>{
            state.loading=true;
        },


        finalIncome: (state, action) => {
            const newItem = {
                ...action.payload,
                id: uuidv4(), // Generăm un ID unic pentru fiecare obiect adăugat
                type:"income",
                createdAt:Date.now()
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
            //filtrare useri ramasi
            const updatedIncome = state.currentIncome.filter(item => item.id !== id);

            //adunare doar pt useri ramasi
            const newTotalIncome = updatedIncome.reduce((total, item) =>
                total + parseFloat(item.amount), 0);
            
            return {
                ...state,
                currentIncome: updatedIncome,
                totalIncome: newTotalIncome
            };
        },


        totIncome:(state,action)=>{
            const TotalIncome=state.currentIncome.reduce((total,item)=>
            total + parseFloat(item.amount),0);
            console.log("total income",TotalIncome);

            return{
                ...state,
                totalIncome:TotalIncome
            }
        },


        totEconomy:(state,action)=>{
            const TotalEconomy=state.currentIncome.reduce((total,item)=>
                total + parseFloat(item.goals),0);
            console.log("totaleconomry",TotalEconomy);

    

            const newChange = {
                date: new Date(),
                amount: TotalEconomy 
            };
            console.log(newChange);
            console.log("state economy changes",state.economyChanges);

            return{
                ...state,
                totalEconomy:TotalEconomy,
                economyChanges:[...state.economyChanges,newChange]
            }
        },


        histBalance:(state,action)=>{
            const {amount,date}=action.payload;
            console.log(action.payload);
            console.log("payload",amount,date);
            const newChange = {
                date:date,
                amount: amount 
            };
            console.log(newChange);
            console.log(state.balanceChanges);
            
            return{
                ...state,
                balanceChanges:[...state.balanceChanges,newChange]
            }

        },


        updateIncome: (state, action) => {
            const { id, editIncome } = action.payload;
            console.log("payload", action.payload);
            console.log("edit", editIncome);
        
            const indexToUpdate = state.currentIncome.findIndex(item => item.id === id);
            if (indexToUpdate !== -1) {
                // Create an updated list of incomes using slice and spread operator
                const updatedIncome = [
                    ...state.currentIncome.slice(0, indexToUpdate), // Parts of the original list before the updated item
                    { ...state.currentIncome[indexToUpdate], ...editIncome }, // Updated object
                    ...state.currentIncome.slice(indexToUpdate + 1) // Parts of the original list after the updated item
                ];
        
                // Recalculate the total income after updating the list
                const newTotalIncome = updatedIncome.reduce((total, item) => total + parseFloat(item.amount), 0);
        
                return {
                    ...state,
                    currentIncome: updatedIncome,
                    totalIncome: newTotalIncome // Update the total income in the state
                };
            } else {
                console.log("eroare reducer: Nu s-a găsit ID-ul specificat");
                return state; // Return the unmodified state if the specified ID was not found
            }
        },
        



        failureUpdate:(state,action)=>{
            state.loading=false;
            state.error=action.payload //incarca cu mesajul erorii
        },
    




       





        
    }

})

export const {
    startIncome,
    finalIncome,
    failureIncome,
    deleteIncome,
    resetState,
    totIncome,
    totEconomy,
    updateIncome,
    failureUpdate,
    histBalance,
    setLoading
    
}=cartIncome.actions;

export default cartIncome.reducer;










