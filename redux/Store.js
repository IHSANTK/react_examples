import { configureStore } from '@reduxjs/toolkit';
import rootreducer from './Reducers';

const store = configureStore({
    reducer:rootreducer
})

export default store