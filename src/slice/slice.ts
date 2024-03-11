import { createSlice, current } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        favArray: [],
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        addToFav(state: any, { payload }: { payload: any }) {
            state.favArray.push(payload)
            console.log(current(state.favArray))
        }
    },

})

export const { increment, decrement, incrementByAmount, addToFav } = counterSlice.actions

export default counterSlice.reducer
