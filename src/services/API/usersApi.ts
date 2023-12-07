import { UsersRequest, UsersResponse } from '@/assets/types/userTypes'
import { baseApi } from '@/services'

const usersApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      followUser: build.mutation<any, any>({
        invalidatesTags: ['users'],
        query: userId => {
          return {
            method: 'POST',
            url: `/follow/${userId}`,
          }
        },
      }),
      getUser: build.query<UsersResponse, UsersRequest>({
        providesTags: ['users'],
        query: params => {
          return {
            method: 'GET',
            params: params,
            url: `/users`,
          }
        },
      }),
      unFollowUser: build.mutation<any, any>({
        invalidatesTags: ['users'],
        query: userId => {
          return {
            method: 'DELETE',
            url: `/follow/${userId}`,
          }
        },
      }),
    }
  },
})

export const { useFollowUserMutation, useGetUserQuery, useUnFollowUserMutation } = usersApi
