import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basicDescription: '',
    productName: '',
    idealUsers: '',
    benefits: '',
    features: '',
    engine: 'text-curie-001'
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setBasicDescription: (state, action) => {
            state.basicDescription = action.payload;
        },
        setProductName: (state, action) => {
            state.productName = action.payload;
        },
        setIdealUsers: (state, action) => {
            state.idealUsers = action.payload;
        },
        setBenefits: (state, action) => {
            state.benefits = action.payload;
        },
        setFeatures: (state, action) => {
            state.features = action.payload;
        },
        setEngine: (state, action) => {
            state.engine = action.payload;
        },
        resetValues: (state) => {
            state = initialState;
        }
    },
})

export const { setBasicDescription, setProductName, setIdealUsers, setBenefits, setFeatures, setEngine, resetValues } = formDataSlice.actions;

export default formDataSlice.reducer;