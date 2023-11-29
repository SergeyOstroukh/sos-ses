import {baseApi} from "../baseApi.ts";

const authApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getAuthMe: build.query<any, any>({
                query: () => {
                    return {
                        url: `/auth/me`,
                    }
                },
            })
        }
    }
})
export const {useGetAuthMeQuery} = authApi