import { configureStore } from "@reduxjs/toolkit";
import notesReduser from './notesSlice';


const store = configureStore({
    reducer: {
        notes: notesReduser, 
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;