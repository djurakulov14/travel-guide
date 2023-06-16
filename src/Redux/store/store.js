import { configureStore } from "@reduxjs/toolkit";
import toursRU from "../features/toursRU/toursSlice";
import toursEN from "../features/toursEN/toursSlice";
import toursDeutch from "../features/toursDeutch/toursSlice";


export const store = configureStore({
    reducer: {
        toursRU: toursRU,
        toursEN: toursEN,
        toursDeutch: toursDeutch,
    }
})

export default store