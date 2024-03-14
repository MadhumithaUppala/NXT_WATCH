import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  saveList: [],
}
export const saveSlice = createSlice({
  name: 'save',
  initialState: initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.saveList.push(action.payload)
    },
  },
})
export const {saveTodo} = saveSlice.actions
// Exporting the reducer
export default saveSlice.reducer
