import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    totalResponses: []
}

export const responseSlice = createSlice({
    name: 'responses',
    initialState,
    reducers: {
        pushNewResponse: (state, action) => {
            state.totalResponses.push(action.payload);
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
})

export const { pushNewResponse, setIsLoading } = responseSlice.actions;

export default responseSlice.reducer;