import { configureStore } from '@reduxjs/toolkit'
import grocerySlice from './slices/grocerySlice'

export default configureStore({
  reducer: {
    grocery: grocerySlice,
  },
})