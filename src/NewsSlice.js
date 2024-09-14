import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[] ,
}

export const newsSlice = createSlice({
    name: 'newsData',
    initialState,
    reducers: {
        setData:(state,action)=>{
            state.data=action.payload;
        }
    },
  })

  export const {setData}=newsSlice.actions;
  export default newsSlice.reducer;
