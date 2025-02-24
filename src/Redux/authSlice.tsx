import { createSlice, Slice } from "@reduxjs/toolkit";


type userType = {
  id: string;
  name: string;
  password: number | string;
  token: string;
  email: string;
  role: string
};

type initialStateType = {
    infos : userType,
    isLogin: boolean,
    setIsLogin : () => void
}

const initialState:initialStateType = {
    infos:  {
        id: crypto.randomUUID(),
        name: "mohammad akhlaghi",
        password: "user1234",
        token: "login",
        email: "mohammadakhlaghi332@gmail.com",
        role: "admin",
        
      },
      isLogin: false,
      setIsLogin: () => {initialState.isLogin = !initialState.isLogin}
}

const authSlice:Slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: () => {}
})


export const authSliceReducer = authSlice.reducer