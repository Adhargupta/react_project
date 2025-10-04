import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../folder/todo/todoSlice'
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})