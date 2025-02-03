import { createSlice } from '@reduxjs/toolkit'

export const cartslice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addtocart : (state,action)=>{
        state =  state.value.push(action.payload)

    },
    removecart : (state,action)=>{
        state.value = state.value.filter((states)=>states.id !== action.payload)

        
    }
  }
})

// Action creators are generated for each case reducer function
export const { addtocart,removecart } = cartslice.actions

export default cartslice.reducer