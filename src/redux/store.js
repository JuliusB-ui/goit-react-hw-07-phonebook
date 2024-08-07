import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contactSlice";
import {filterReducer} from "./filterSlice";

export const store=configureStore({
    reducer: {
        filter: filterReducer,
        contacts: contactsReducer,
    }
});