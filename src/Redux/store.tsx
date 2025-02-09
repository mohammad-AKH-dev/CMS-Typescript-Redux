import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./usersSlice";
import themes from "./themeSlice";

const store = configureStore({
    reducer: {
        users: userSliceReducer,
        themes: themes
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store