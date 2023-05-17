import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        auth: false,
        idInstance: null,
        apiTokenInstance: null,
        modal: false,
        contact: [],
        chat: [],
    },
    reducers: {
        authTrue(state, actions) {
            state.auth = true;
            state.apiTokenInstance = actions.payload.ApiTokenInstance;
            state.idInstance = actions.payload.IdInstance;
        },
        authFalse(state) {
            state.auth = false;
            state.apiTokenInstance = null;
            state.idInstance = null;
        },
        openModal(state) {
            state.modal = true
        },
        closeModal(state) {
            state.modal = false
        },
        newContact(state, action) {
            state.contact.push(action.payload) 
        },
        setHistory(state, action) {
            state.chat.push(action.payload) 
        },
        clearHistory(state) {
            state.chat = []
        }
    }
})

export default toolkitSlice.reducer
export const {
    authTrue, 
    openModal, 
    closeModal, 
    newContact, 
    setHistory, 
    clearHistory, 
    authFalse} = toolkitSlice.actions