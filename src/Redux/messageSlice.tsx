import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messageSliceInitialStateType } from "./types/messageSlice.types";

export const fetchMessages = createAsyncThunk('messages/get',async () => {
     const req = await fetch('https://dashboard-api-vq7r.onrender.com/api/messages')
     const messages = await req.json()
     return messages
})


const initialState: messageSliceInitialStateType = {
    error: false,
    loading: true,
    messages: []
} 


const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMessages.fulfilled,(state,action) => {
            state.loading = false
            state.messages = action.payload
        })
        .addCase(fetchMessages.pending,(state) => {
            state.loading = true
        })
        .addCase(fetchMessages.rejected,(state) => {
            state.error = true
            state.loading = false
            state.messages = []
        })
    },
})


export const messageSliceReducer = messagesSlice.reducer