import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoapi";
import { cryptoDetailsApi } from "../services/cryptodetailsapi";
import { cryptoExchanges } from "../services/cryptoexchanges";

import { coinHistoryApi } from "../services/cryptohistory";

import { cryptoNewsApi } from "../services/newsapi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoDetailsApi.reducerPath]: cryptoDetailsApi.reducer,
    [coinHistoryApi.reducerPath]: coinHistoryApi.reducer,
    [cryptoExchanges.reducerPath]: cryptoExchanges.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
