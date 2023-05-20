import { configureStore } from "@reduxjs/toolkit";
import homeSlice  from "./homeSlice";
export const store= configureStore({
    reducer: {
        home: homeSlice, //? did we called it home because the name is home in the slice
    },
})

//? Where to use {package} and where to use package with importing


