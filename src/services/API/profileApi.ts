import { ProfileResponse } from '@/assets/types/userTypes'
import { baseApi } from '@/services'

const profileApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getUserProfile: build.query<ProfileResponse, number>({
        query: userId => {
          return {
            method: 'GET',
            url: `/profile/${userId}`,
          }
        },
      }),
    }
  },
})

export const { useGetUserProfileQuery } = profileApi
