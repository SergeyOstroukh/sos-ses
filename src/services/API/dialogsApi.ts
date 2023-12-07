import {
  allMessages,
  dialogWithFriendResponce,
  dialogsWithFriendsParams,
  sendMessage,
  sendMessageResponce,
  startChatting,
} from '@/assets/types/userTypes'
import { baseApi } from '@/services'

const dialogsApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      RemoveDialog: build.mutation<any, any>({
        invalidatesTags: ['dialogs'],
        query: messageId => {
          return {
            method: 'DELETE',
            url: `/dialogs/messages/${messageId}`,
          }
        },
      }),
      dialogViewed: build.query<any, any>({
        query: messageId => {
          return {
            url: `/dialogs/messages/${messageId}/viewed`,
          }
        },
      }),
      getAllDialogs: build.query<allMessages[], unknown>({
        providesTags: ['dialogs'],
        query: () => {
          return {
            url: `/dialogs`,
          }
        },
      }),
      getDialogWithFriend: build.query<dialogWithFriendResponce, Partial<dialogsWithFriendsParams>>(
        {
          query: params => {
            return {
              url: `/dialogs/${params.userId}/messages?page=1&count=10`,
            }
          },
        }
      ),
      getDialogsById: build.mutation<startChatting, number>({
        invalidatesTags: ['dialogs'],
        query: userId => {
          return {
            method: 'PUT',
            url: `/dialogs/${userId}`,
          }
        },
      }),
      sendMessageMyFriend: build.mutation<sendMessageResponce, sendMessage>({
        invalidatesTags: ['dialogs'],
        query: body => {
          return {
            body: { body: body.text },
            method: 'POST',
            url: `/dialogs/${body.userId}/messages`,
          }
        },
      }),
    }
  },
})

export const {
  useDialogViewedQuery,
  useGetAllDialogsQuery,
  useGetDialogWithFriendQuery,
  useGetDialogsByIdMutation,
  useRemoveDialogMutation,
  useSendMessageMyFriendMutation,
} = dialogsApi
