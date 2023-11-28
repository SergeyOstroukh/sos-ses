import {baseApi} from "./baseApi.ts";
import {UsersRequest, UsersResponse} from "../types/userTypes.ts";

const usersApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getUser: build.query<UsersResponse, UsersRequest>({
                query: params => {
                    return {
                        url: `/users`,
                        method: 'GET',
                        params: params
                    }
                },
                providesTags:['users']
            }),
            followUser: build.mutation<any,any>({
                query: userId => {
                    return {
                        url: `/follow/${userId}`,
                        method: 'POST',
                    }
                },
                invalidatesTags:['users']
            }),
            unFollowUser: build.mutation<any,any>({
                query: userId => {
                    return {
                        url: `/follow/${userId}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags:['users']
            }),
        }
    }
})
export const {useGetUserQuery, useFollowUserMutation, useUnFollowUserMutation} = usersApi