import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cart/cartSlice"
import booksApi from './features/books/booksApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import ordersApi from './features/orders/ordersAPI'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath] : booksApi.reducer,
    [ordersApi.reducerPath] : ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware)
})

setupListeners(store.dispatch)