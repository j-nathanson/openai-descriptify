import { configureStore } from '@reduxjs/toolkit';
import pageInfoReducer from './pageInfoSlice';
import formDataReducer from './formDataSlice';

export const store = configureStore({
    reducer: {
        pageInfo: pageInfoReducer,
        formData: formDataReducer,
    },
})