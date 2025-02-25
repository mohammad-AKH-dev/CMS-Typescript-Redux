import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";


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
    infos:  null,
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
    extraReducers: () => {}
})


export const authSliceReducer = authSlice.reducer
export const {setIsLogin , setInfos} = authSlice.actions