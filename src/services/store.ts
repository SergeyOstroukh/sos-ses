import { baseApi } from '@/services/API'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),

  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})
