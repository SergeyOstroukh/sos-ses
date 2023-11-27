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
                }
            }),
        }
    }
})
export const {useGetUserQuery} = usersApi