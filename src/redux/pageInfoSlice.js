import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
  titles: [
    'What is your product?',
    'What is your product\'s name?',
    'Who are your ideal users?',
    'What are the features of this product?',
    'What are the benefits of using this product?',
    'Please choose an engine', 'your result']
}

export const pageInfoSlice = createSlice({
  name: 'pageIndex',
  initialState,
  reducers: {
    increment: (state) => {
      state.index += 1
    },
    decrement: (state) => {
      state.index -= 1
    }
  },
})

export const { increment, decrement, incrementByAmount } = pageInfoSlice.actions

export default pageInfoSlice.reducer