import { createSlice } from '@reduxjs/toolkit'

export const grocerySlice = createSlice({
  name: 'grocery',
  initialState: {
    value: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
    },
    deleteItem: (state,action) => {

    },
    updateItem: (state,action) => {
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = grocerySlice.actions

export default grocerySlice.reducer