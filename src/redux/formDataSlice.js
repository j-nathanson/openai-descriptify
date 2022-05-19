import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basicDescription: '',
    productName: '',
    idealUsers: '',
    benefits: '',
    features: '',
    engine: ''
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
        setBenefit: (state, action) => {
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
    },
})

export const { setBasicDescription, setProductName, setIdealUsers, setBenefits, setFeatures } = formDataSlice.actions

export default formDataSlice.reducer