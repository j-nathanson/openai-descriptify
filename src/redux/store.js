import { configureStore } from '@reduxjs/toolkit';
import pageInfoReducer from './pageInfoSlice';
import formDataReducer from './formDataSlice';
import responseSliceReducer from './responseSlice';

export const store = configureStore({
    reducer: {
        pageInfo: pageInfoReducer,
        formData: formDataReducer,
        responses: responseSliceReducer
    },
})