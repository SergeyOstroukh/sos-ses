import {baseApi} from "../baseApi.ts";
import {authMeResponse} from "../../types/userTypes.ts";

const authApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getAuthMe: build.query<authMeResponse, _>({
                query: () => {
                    return {
                        url: `/auth/me`,
                    }
                },
                providesTags:['authMe']
            }),
            login: build.mutation<any, any>({
                query: (params) => {
                    return {
                        url: `auth/login`,
                        method:"POST",
                        body: params
                    }
                },
                invalidatesTags:['authMe']
            }),
            logOut: build.mutation<any, any>({
                query: () => {
                    return {
                        url: `auth/logout`,
                        method:"POST",
                    }
                },
                invalidatesTags:['authMe']
            }),
        }
    }
})
export const {useGetAuthMeQuery, useLoginMutation, useLogOutMutation} = authApi