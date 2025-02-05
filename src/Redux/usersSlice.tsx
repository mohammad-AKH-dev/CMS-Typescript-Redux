import { createSlice, Slice } from "@reduxjs/toolkit";
import { userType } from "./types/userslice.types";

type initialStateTypes = {
    users : userType[] | [],
    error : boolean ,
    loading : boolean
}

const initialState:initialStateTypes = {
    error: false ,
    loading: true,
    users: []
}

const usersSlice:Slice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: () => {
        
    }
    
})

export default usersSlice.reducer