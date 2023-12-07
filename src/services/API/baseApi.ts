import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.set('API-KEY', 'bc4a3fed-ea47-4081-8153-ed2eeeb52455')

      return headers
    },
  }),

  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['users', 'authMe', 'dialogs'],
})
