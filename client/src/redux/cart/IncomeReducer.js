import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';



const initialState={
    currentIncome:[],
    totalIncome:0,
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


       





        
    }

})

export const {
    startIncome,
    finalIncome,
    failureIncome,
    deleteIncome,
    resetState,
    totIncome,
}=cartIncome.actions;

export default cartIncome.reducer;










