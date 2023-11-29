import {baseApi} from "./baseApi.ts";
import {ProfileResponse} from "../types/userTypes.ts";


const profileApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getUserProfile: build.query<ProfileResponse, number>({
                query: userId => {
                    return {
                        url: `/profile/${userId}`,
                        method: 'GET',
                    }
                },
            })
        }
    }
})

export const {useGetUserProfileQuery} = profileApi