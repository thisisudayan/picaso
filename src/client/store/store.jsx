import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "../components/section/sectionSlice"

const store = configureStore({
    reducer: {
        section: sectionReducer
    }
})

export default store;