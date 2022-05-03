import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { savannahApi } from "../service/savannah";

export const store = configureStore({
	reducer: {
		[savannahApi.reducerPath]: savannahApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(savannahApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
