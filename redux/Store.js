import { configureStore } from '@reduxjs/toolkit';
import counterslice from './Reducers';

const store = configureStore({
    reducer:counterslice
})

export default store