import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name:'ui',
    initialState:{
        isDateModalOpen: false
    },
    reducers:{
        onOpenDateModal: (state, /*Actions*/ ) => {
            state.isDateModalOpen = true;
        },
         onCloseDateModal: (state, /*Actions*/ ) => {
            state.isDateModalOpen = false;
        },
    }
});

export const {onOpenDateModal, onCloseDateModal} = uiSlice.actions;