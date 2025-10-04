import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask:{
        reducer:(state, action)=>{
            state.value.push(action.payload)
        },
        prepare:(text)=>{
            return{
                payload:{
                    id: nanoid(),
                    text,
                    completed: false,
                }
            }
        }
    },
    deleteTask:(state,action)=>{
        state.value = state.value.filter(target=>target.id != action.payload)
    },
    doneTask:(state,action)=>{
        const target = state.value.find(task=>task.id === action.payload)
        if (target) {
            target.completed = !target.completed   // toggle true/false
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, doneTask } = todoSlice.actions

export default todoSlice.reducer