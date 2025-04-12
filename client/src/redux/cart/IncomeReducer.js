import {createSlice, current} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


const initialState={
    currentIncome:[],//pt grafic, array cu toate valorile
    totalIncome:0,//doar pt total
    
    currentEconomy:[],//pt grafic, array cu toate valorile
    totalEconomy:0,//doar pt total

    
    loading:false,
    error:false
}


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

        stopIncome:(state,action)=>{
            state.loading=action.payload;;
        },

        updateIncome: (state, action) => {
            const { id, editIncome } = action.payload;
            console.log(id,editIncome);
        
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



        
       /* updateEconomy: (state, action) => {
            const { id, editEconomy } = action.payload;
            console.log(id,editEconomy);
        
            const indexToUpdate = state.currentEconomy.findIndex(item => item.id === id);
            if (indexToUpdate !== -1) {
                // Create an updated list of incomes using slice and spread operator
                const updatedEconomy = [
                    ...state.currentEconomy.slice(0, indexToUpdate), // Parts of the original list before the updated item
                    { ...state.currentEconomy[indexToUpdate], ...editEconomy }, // Updated object
                    ...state.currentEconomy.slice(indexToUpdate + 1) // Parts of the original list after the updated item
                ];
        
                // Recalculate the total income after updating the list
                const newTotalEconomy = updatedEconomy.reduce((total, item) => total + parseFloat(item.amount), 0);
        
                return {
                    ...state,
                    currentEconomy: updatedEconomy,
                    totalEconomy: newTotalEconomy // Update the total income in the state
                };
            } else {
                console.log("eroare reducer: Nu s-a găsit ID-ul specificat");
                return state; // Return the unmodified state if the specified ID was not found
            }
        },*/
        
        
    
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


        deleteEconomy: (state, action) => {
            console.log(state.currentEconomy);
            const { id } = action.payload;
            
            // Filtrare useri ramasi
            const updatedEconomy = state.currentEconomy.filter(item => item.id !== id);
        
            // Verificăm dacă updatedEconomy este un array valid înainte de a folosi reduce()
            const newUpdateEconomy = updatedEconomy.length > 0
                ? updatedEconomy.reduce((total, item) =>
                    total + (parseFloat(item.goals) || 0), 0)  // Folosim goals în loc de amount
                : 0;  // Dacă nu sunt elemente rămase, totalul este 0
            
            return {
                ...state,
                currentEconomy: updatedEconomy,
                totalEconomy: newUpdateEconomy
            };
        },
        

        totIncome:(state)=>{
            console.log("state curent Income",state.currentIncome);

            const TotalIncome=state.currentIncome.reduce((total,item)=>
            total + parseFloat(item.amount),0);

            return{
                ...state,
                totalIncome:TotalIncome
            }
        },

        totEconomy: (state) => {
        
            // Extragem doar câmpurile 'goals' din fiecare element al array-ului currentEconomy
            const goalsArray = state.currentEconomy.map(item => parseFloat(item.goals) || 0);
        
        
            // Calculăm totalul pentru 'goals'
            const TotalEconomy = goalsArray.reduce((total, goalsValue) => total + goalsValue, 0);
        
        
            return {
                ...state,
                totalEconomy: TotalEconomy,
                goals: goalsArray // Salvezi array-ul de goals în state dacă este nevoie
            };
        },

        EconomyGrafic: (state, action) => {
        
            // Asigură-te că ai o dată pentru fiecare obiect adăugat în currentEconomy
            const newGoal = {
                ...action.payload,
                goals: parseFloat(action.payload.goals) || 0, // Asigurăm că goals este un număr
                date: action.payload.date || new Date().toISOString().split('T')[0] // Setăm data fie din payload, fie folosim data curentă
            };
        
            // Adăugăm noul obiect în currentEconomy
            state.currentEconomy.push(newGoal);
        
            // Recalculăm totalul pentru goals
            state.totalEconomy = state.currentEconomy.reduce((total, item) => {
                return total + (parseFloat(item.goals) || 0); // Adunăm doar dacă există un număr valid
            }, 0);
        
            // console.log("Total Economy", state.totalEconomy);
            // console.log("currentEconomy array", state.currentEconomy);
        },
        
        
        
        IncomeGrafic: (state, action) => {
            console.log(action.payload);
            console.log(state.currentEconomy);
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
    
        
        failureUpdate:(state,action)=>{
            state.loading=false;
            state.error=action.payload //incarca cu mesajul erorii
        },
    }

})

export const {
    startIncome,
    stopIncome,
    failureIncome,
    IncomeGrafic,
    EconomyGrafic,
    deleteIncome,
    deleteEconomy,
    totIncome,
    totEconomy,
    updateIncome,
    failureUpdate,
    setLoading,
    resetState,
    
}=cartIncome.actions;

export default cartIncome.reducer;










