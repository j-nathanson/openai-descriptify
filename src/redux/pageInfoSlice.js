import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
  progressPercent: 10,
  titles: [
    'What is your product?',
    'What is your product\'s name?',
    'Who are your ideal users?',
    'What are the features of this product?',
    'What are the benefits of using this product?',
    'Please choose from one of GPT-3\'s Models',
    'Your result']
}

export const pageInfoSlice = createSlice({
  name: 'pageIndex',
  initialState,
  reducers: {
    increment: (state) => {
      state.index += 1;
    },
    decrement: (state) => {
      state.index -= 1;
    },
    resetIndex: (state) => {
      state.index = 0;
    },
    setProgressPercent: (state, action) => {
      state.progressPercent = action.payload;
    }
  },
})

export const { increment, decrement, resetIndex, setProgressPercent } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;