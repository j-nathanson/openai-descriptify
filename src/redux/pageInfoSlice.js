import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
  percent: 0,
  step: (100 / 6),
  titles: [
    'What is your product?',
    'What is your product\'s name?',
    'Who are your ideal users?',
    'What are the features of this product?',
    'What are the benefits of using this product?',
    'Choose AI Engine Capability',
    'Your result']
}

export const pageInfoSlice = createSlice({
  name: 'pageIndex',
  initialState,
  reducers: {
    incrementIndex: (state) => {
      state.index += 1;
    },
    decrementIndex: (state) => {
      state.index -= 1;
    },
    resetIndex: (state) => {
      state.index = 0;
    },
    incrementPercent: (state, action) => {
      state.percent += action.payload;
    },
    decrementPercent: (state, action) => {
      state.percent -= action.payload;
    },
  },
})

export const { incrementIndex, decrementIndex, resetIndex, incrementPercent, decrementPercent } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;