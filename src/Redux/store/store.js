import { configureStore } from "@reduxjs/toolkit";
import tours from "../features/tours/toursSlice";


export const store = configureStore({
    reducer: {
        tours: tours
    }
})

export default store