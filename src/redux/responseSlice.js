import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    totalResponses: [
        {
            response: 'The Donner Dub-1 acoustic electric bass ukelele is perfect for musicians, hobbyists, and bass players. It has a mahogany finish and built-in tuner, making it easy to play. The weight of 3 lbs makes it portable and compact, while the rubber strings provide great sound.',
            prompt: {
                basicDescription: 'A bass ukelele',
                productName: 'Donner DUB-1 30 inch Acoustic Electric Bass Ukulele',
                idealUsers: 'Musicians, hobbyists, bass players',
                features: 'built-in tuner, built-in pick-up, mahogany finish, weight 3 lbs, rubber strings',
                benefits: 'portable, compact size, affordable, easy to play, and unique, great sound',
                engine: 'text-curie-001'

            }
        }
    ]
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