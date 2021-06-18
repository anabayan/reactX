import { Action, configureStore } from "@reduxjs/toolkit";

import { ThunkAction } from "redux-thunk";
import { todoSlice } from "./features";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
