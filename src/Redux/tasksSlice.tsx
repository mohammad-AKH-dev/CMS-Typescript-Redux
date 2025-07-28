import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { tasksSliceInitialState, taskType } from "./types/tasksSlice.type";


export const fetchTasks = createAsyncThunk('tasks/get',async () => {
    const req = await fetch('https://dashboard-api-vq7r.onrender.com/api/tasks')
    const tasks = await req.json()

    return tasks
})

export const removeTask = createAsyncThunk('tasks/delete', async (id:string) => {
    const req = await fetch(`https://dashboard-api-vq7r.onrender.com/api/tasks/${id}`,{
        method: 'DELETE'
    })
    const res = req.json()
    return res
})

export const editTask = createAsyncThunk('tasks/put',async (data: taskType) => {
    const req = await fetch(`https://dashboard-api-vq7r.onrender.com/api/tasks/${data.id}`,{
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    const res = await req.json()
    return res
})

export const addTask = createAsyncThunk('tasks/post',async (data : taskType) => {
    const req = await fetch(`https://dashboard-api-vq7r.onrender.com/api/tasks/`,{
        method: "POST",
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    const res = await req.json()
    return res
})


const initialState: tasksSliceInitialState = {
    error: false,
    loading: true,
    tasks: []
}


export const tasksSlice:Slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTasks.fulfilled,(state,action) => {
            state.loading = false
            state.tasks = action.payload
        })
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchTasks.rejected,state => {
            state.loading = false
            state.error = true
            state.tasks = []
        })
    },
})


export const tasksSliceReducer = tasksSlice.reducer