import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  currentIncome: [],
  totalIncome: 0,

  currentEconomy: [],
  totalEconomy: 0,

  loading: false,
  error: false
};

const cartIncome = createSlice({
  name: 'income',
  initialState,
  reducers: {

    resetState:()=>initialState,

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    startIncome: (state) => {
      state.loading = true;
    },

    stopIncome: (state) => {
      state.loading = false;
    },

    failureIncome: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    failureUpdate: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // ✅ Add new income
    addIncome: (state, action) => {
      const newIncome = {
        ...action.payload,
        id: uuidv4(),
        type: 'income',
        createdAt: Date.now()
      };
      state.currentIncome.push(newIncome);
      state.totalIncome = state.currentIncome.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    },

    // ✅ Add new economy
    addEconomy: (state, action) => {
      const newEconomy = {
        ...action.payload,
        id: uuidv4(),
        type: 'economy',
        date: action.payload.date || new Date().toISOString().split('T')[0],
        goals: parseFloat(action.payload.goals) || 0
      };
      console.log("add economy",newEconomy);
      state.currentEconomy.push(newEconomy);
      state.totalEconomy = state.currentEconomy.reduce((sum, item) => sum + (parseFloat(item.goals) || 0), 0);
      console.log("total Economy:",state.totalEconomy);
    },

    // ✅ Update income
    updateIncome: (state, action) => {
      const { id, editIncome } = action.payload;
      const index = state.currentIncome.findIndex(item => item.id === id);
      if (index !== -1) {
        state.currentIncome[index] = { ...state.currentIncome[index], ...editIncome };
        state.totalIncome = state.currentIncome.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
      }
    },

    // ✅ Update economy
    updateEconomy: (state, action) => {
      const { id, editEconomy } = action.payload;
      const index = state.currentEconomy.findIndex(item => item.id === id);
      if (index !== -1) {
        state.currentEconomy[index] = { ...state.currentEconomy[index], ...editEconomy };
        state.totalEconomy = state.currentEconomy.reduce((sum, item) => sum + parseFloat(item.goals || 0), 0);
      }
    },

    // ✅ Delete income
    deleteIncome: (state, action) => {
        const { id } = action.payload;
      
        // Find the income to be deleted
        const deletedIncome = state.currentIncome.find(item => item.id === id);
        const deletedEconomy = state.currentEconomy.find(item => item.id === id);
      
        // Filter out the deleted income and economy item
        state.currentIncome = state.currentIncome.filter(item => item.id !== id);
        state.currentEconomy = state.currentEconomy.filter(item => item.id !== id);
        
        console.log("id",id);
        console.log("dcurrent economy",deletedEconomy);
        // Update totalIncome
        if (deletedIncome) {
          state.totalIncome -= parseFloat(deletedIncome.amount || 0);
        }
        
        // Subtract the deleted economy goal from totalEconomy
        if (deletedEconomy) {
          state.totalEconomy -= parseFloat(deletedEconomy.goals || 0);
        }
        console.log("total economy",state.totalEconomy);
    },      
    // ✅ Delete economy
    deleteEconomy: (state, action) => {
      const { id } = action.payload;
      state.currentEconomy = state.currentEconomy.filter(item => item.id !== id);
      state.totalEconomy = state.currentEconomy.reduce((sum, item) => sum + parseFloat(item.goals || 0), 0);
    },

  }
});

export const {
  setLoading,
  startIncome,
  stopIncome,
  failureIncome,
  failureUpdate,
  addIncome,
  addEconomy,
  updateIncome,
  updateEconomy,
  deleteIncome,
  deleteEconomy,
  resetState
} = cartIncome.actions;

export default cartIncome.reducer;
