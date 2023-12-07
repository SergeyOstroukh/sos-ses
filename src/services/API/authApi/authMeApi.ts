import { authMeResponse } from '@/assets/types/userTypes'
import { baseApi } from '@/services'

const authApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getAuthMe: build.query<authMeResponse, unknown>({
        providesTags: ['authMe'],
        query: () => {
          return {
            url: `/auth/me`,
          }
        },
      }),
      logOut: build.mutation<any, any>({
        invalidatesTags: ['authMe'],
        query: () => {
          return {
            method: 'POST',
            url: `auth/logout`,
          }
        },
      }),
      login: build.mutation<any, any>({
        invalidatesTags: ['authMe'],
        query: params => {
          return {
            body: params,
            method: 'POST',
            url: `auth/login`,
          }
        },
      }),
    }
  },
})

export const { useGetAuthMeQuery, useLogOutMutation, useLoginMutation } = authApi
