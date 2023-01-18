import { configureStore } from "@reduxjs/toolkit";
import toursRU from "../features/toursRU/toursSlice";
import toursEN from "../features/toursEN/toursSlice";


export const store = configureStore({
    reducer: {
        toursRU: toursRU,
        toursEN: toursEN,
    }
})

export default store