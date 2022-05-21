import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 6,
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
    nextPage: (state) => {
      state.index += 1;
      state.percent += state.step;
    },
    previousPage: (state) => {
      state.index -= 1;
      state.percent -= state.step;
    },
    resetIndexAndPercent: (state) => {
      state.index = 0;
      state.percent = 0;
    }
  },
})

export const { nextPage, previousPage, resetIndexAndPercent } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;