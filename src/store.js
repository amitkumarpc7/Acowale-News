import { configureStore } from "@reduxjs/toolkit";
import  newsSlice  from "./NewsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
