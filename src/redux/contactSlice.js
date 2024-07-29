import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contactsList: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => 
      builder 
      //fetchContacts
        .addCase(fetchContacts.pending, state=> {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.contactsList = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action)=> {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // addContacts
      .addCase(addContact.pending, state=> {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsList.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // deleteContacts
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
    });
    
    
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //              state.push(action.payload);
    //         },
    //         prepare: (name, number) => {
    //             return {
    //                 payload: {
    //                     id:nanoid(),
    //                     name: name.trim(),
    //                     number: number.trim(),
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact(state, action) {
    //         const index = state.findIndex(contact => contact.id === action.payload);
    //         state.splice(index, 1);
    //     },
    // },



export const contactsReducer = contactsSlice.reducer;