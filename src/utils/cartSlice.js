import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //mutating the state here
        addItem:(state,action)=>{

            //Vanilla(Older) Redux: Don't Mutate the State and returning was mandatory
            //const newState = [...state]
            //newState.items.push(action.payload)
            //return newState

            //IMMER is a tiny package that allows you to work with an
            //immutable state in a more convenient way.

            
            //Redux Toolkit
            //We have to mutate the state
            state.items.push(action.payload)
        },

        removeItem: (state)=>{
            state.items.pop()
        },

        clearCart: (state)=>{
            state.items.length=0  //[]
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default  cartSlice.reducer;
