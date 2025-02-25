import { createAsyncThunk, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export const fetchAdmin = createAsyncThunk('admins/get',async () => {
   const req = await fetch('http://localhost:3000/admins')
   const data = await req.json()
   return data
})


type userType = {
  id: string;
  name: string;
  position: string
  password: number | string;
  token: string;
  email: string;
  role: string
};

type initialStateType = {
    infos : userType | null,
    isLogin: string | null
    
}

const initialState:initialStateType = {
    infos: null,
    isLogin: localStorage.getItem('isLogin')
      
}

const authSlice:Slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setIsLogin: (state,action: PayloadAction<boolean>) => {
        state.isLogin = action.payload
      },
      setInfos: (state,action: PayloadAction<userType | null>) => {
        state.infos = action.payload
      }
    },
    extraReducers: (builder) => {
       builder.addCase(fetchAdmin.fulfilled,(state,action) => {
          state.infos = action.payload
       })
    }
})


export const authSliceReducer = authSlice.reducer
export const {setIsLogin , setInfos} = authSlice.actions