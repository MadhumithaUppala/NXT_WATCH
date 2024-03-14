import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  filter: '',
}
export const filterSlice = createSlice({
  name: 'filterhome',
  initialState: initialState,
  reducers: {
    filtering: (state, action) => {
      state.filter(action.payload)
    },
  },
})
export const {filtering} = filterSlice.actions
// Exporting the reducer
export default filterSlice.reducer
