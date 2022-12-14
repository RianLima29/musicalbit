import {configureStore} from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import { cartReducer } from './slices/cartSlice'

export const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        'cart': cartReducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>