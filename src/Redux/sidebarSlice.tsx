import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type sidebarSliceTypes = {
    isOpen: boolean,
    
}


const initialState: sidebarSliceTypes = {
    isOpen: false
}


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setIsOpen: (state , action: PayloadAction<boolean>) => {
          state.isOpen = action.payload
        }
    }
})

const sidebar = sidebarSlice.reducer

export const { setIsOpen } = sidebarSlice.actions

export default sidebar