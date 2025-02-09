import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"


type themeSliceTypes = {
    default: string,
    themes : string[]
}


const themeInitialState: themeSliceTypes = {
    default: '#081028',
    themes: ['#081028','#ff6666','#00264c','#687478']
}

const themeSlice:Slice = createSlice({
    name: 'theme',
    initialState: themeInitialState,
    reducers: {
        changeTheme: (state,action: PayloadAction<string>) => {
            state.default = action.payload
        }
    }
})


const themes = themeSlice.reducer
export const { changeTheme } = themeSlice.actions

export default themes