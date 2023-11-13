import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    value: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increament(state){
            state.value++;
        },
        decreament(state){
            state.value--;
        },
        increase(state, action){
            state.value = state.value + action.payload; // Or we can use it like payload.amount
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
            // state.counter = 0;
        },
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice;