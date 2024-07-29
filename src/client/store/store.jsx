import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "../components/section/sectionSlice"
import sidebarReducer from "../components/section/sidebar/sidebarSlice"
import AppReducer from "../AppSlice";


const store = configureStore({
    reducer: {
        section: sectionReducer,
        sidebar: sidebarReducer,
        app: AppReducer
    }
})

export default store;