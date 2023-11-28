import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://social-network.samuraijs.com/api/1.0/',prepareHeaders: (headers) => {
            headers.set('API-KEY', 'bc4a3fed-ea47-4081-8153-ed2eeeb52455')
            return headers
        } }),
    tagTypes:['users'],
    endpoints: () => ({
    }),


})