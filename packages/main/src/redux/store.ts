import { configureStore, combineReducers } from "@reduxjs/toolkit";
import eventReducer from "./slices/event";

const rootReducer = combineReducers({
    events: eventReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
