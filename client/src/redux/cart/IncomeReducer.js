import {createSlice, current} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


const initialState={
    currentIncome:[],
    totalIncome:0,
    totalEconomy:0,
    currentIstoric:[],
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

            return{
                ...state,
                totalEconomy:TotalEconomy
            }
        },


        updateIncome: (state, action) => {
            const { id, editIncome  } = action.payload;
            console.log("payload",action.payload);
            console.log("edit",editIncome );
            
            const indexToUpdate = state.currentIncome.findIndex(item => item.id === id);
            if (indexToUpdate !== -1) {
                // Creează o nouă listă de venituri actualizată folosind metoda slice și spread operator
                const updatedIncome = [
                    ...state.currentIncome.slice(0, indexToUpdate), // Părțile din lista originală înaintea elementului actualizat
                    { ...state.currentIncome[indexToUpdate], ...editIncome }, // Obiectul actualizat
                    ...state.currentIncome.slice(indexToUpdate + 1) // Părțile din lista originală după elementul actualizat
                ];
                return {
                    ...state,
                    currentIncome: updatedIncome
                };
            } else {
                console.log("eroare reducer: Nu s-a găsit ID-ul specificat");
                return state; // Returnați starea nemodificată dacă nu s-a găsit ID-ul specificat
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
    Istoric,
    totEconomy,
    updateIncome,
    failureUpdate

}=cartIncome.actions;

export default cartIncome.reducer;










