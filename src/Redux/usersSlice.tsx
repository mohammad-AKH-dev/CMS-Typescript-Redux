import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { initialStateTypes } from "./types/userslice.types";
import { UserColumnType } from "@/components/Tables/userstable/columns";

export const fetchUsers = createAsyncThunk('users/GET',async () => {
    const req = await fetch('http://localhost:3000/users/')
    const data = await req.json()
    return data
})

export const removeUser = createAsyncThunk('users/delete',async (id: string) => {
    const req = await fetch(`http://localhost:3000/users/${id}`,{
        method: 'DELETE',
    })
    const data = await req.json()
    return data
})

export const editUser = createAsyncThunk('users/put',async (data : UserColumnType ) => {
    const req = await fetch(`http://localhost:3000/users/${data.id}`,{
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body : JSON.stringify(data)
    })
    const res = req.json() 
    return res
})

const initialState:initialStateTypes = {
    error: false ,
    loading: true,
    users: []
}

const usersSlice:Slice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled,(state,action) => {
        state.loading = false
        state.users = action.payload
    }) 
    .addCase(fetchUsers.pending,(state) => {
        state.loading = true
        state.users = []
    })
    .addCase(fetchUsers.rejected,(state) => {
        state.loading = false
        state.error = true
        state.users = []
    })
    }
    
})

export default usersSlice.reducer