import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState:{
        items: [],
        filters: 'all',
    },
    reducers:{
        addItem: {
            reducer: (state, action)=>{
                state.items.push(action.payload)                            // state mai jo items (i.e., empity array []) usme push krdo action.payload i.e., user's payload/value/input
            },
            prepare: (text)=>{                                              // Ek item/todo ki properties kya kya rahegi
                return{
                    payload:{
                        id: nanoid(),                                               // nanoid :- give unique id's
                        text,
                        completed: false
                    }
                }
            }
        },
        toggle: {                                               // Done and Undo
            reducer:(state, action)=>{
                const target =  state.items.find(t=>t.id===action.payload)                   // target is that todo/item whose id is equal to action.payload (user's ki input)
                if (target) target.completed =! target.completed
            }
        },
        removeItem: (state, action)=> {
            state.items = state.items.filter(t=>t.id !== action.payload)                        // Filter out krdo jiska t.id action.payload ke equalna ho usko
        },
        setFilter: {                                            // setFilter:- for All and completed task
            reducer:(state, action)=>{
                state.filters = action.payload
            }
        }
    }
})

export const {addItem,removeItem,toggle,setFilter} = taskSlice.actions

export default taskSlice.reducer

