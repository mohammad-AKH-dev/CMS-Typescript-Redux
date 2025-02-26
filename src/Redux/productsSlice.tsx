import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { Product, ProductInitialStateType } from "./types/productSlice.types";


export const fetchProducts = createAsyncThunk('products/get',async () => {
    const req = await fetch('http://localhost:3000/products')
    const data = await req.json()
    return data
})

export const removeProduct = createAsyncThunk('product/detele', async (id: string) => {
    const req = await fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE'
    })
    const res = req.json()
    return res
})

export const editProduct = createAsyncThunk('product/put',async (data: Product) => {
    const req = await fetch(`http://localhost:3000/products/${data.id}`,{
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body : JSON.stringify(data)
    })

    const res = await req.json()
    return res
})


const initialState:ProductInitialStateType = {
    products: [],
    error: false,
    loading: true
}


const productSlice:Slice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled,(state,action) => {
        state.products = action.payload
        state.loading = false
      })
      .addCase(fetchProducts.pending,(state) => {
        state.loading = true
      })
      .addCase(fetchProducts.rejected,(state) => {
        state.loading = false
        state.error = true
        state.products = []
      })
    }
})




export const productSliceReducer = productSlice.reducer