import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "../components/section/sectionSlice"
import sidebarReducer from "../components/section/sidebar/sidebarSlice"


const store = configureStore({
    reducer: {
        section: sectionReducer,
        sidebar: sidebarReducer
    }
})

export default store;