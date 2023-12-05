import {baseApi} from "./baseApi.ts";
import {
    allMessages,
    dialogsWithFriendsParams,
    sendMessage,
    sendMessageResponce,
    startChatting
} from './../types/userTypes.ts';


const dialogsApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getDialogsById: build.mutation<startChatting, number>({
            query: userId => {
                return {
                    url: `/dialogs/${userId}`,
                    method: 'PUT',
                }
            },
            invalidatesTags: ['dialogs']
        }),
            getAllDialogs: build.query<allMessages[], unknown>({
                query: () => {
                    return {
                        url: `/dialogs`,
                    }
                },
                providesTags: ['dialogs']
            }),
            sendMessageMyFriend: build.mutation<sendMessageResponce, sendMessage>({
                query: (body)=> {
                    return {
                        url: `/dialogs/${body.userId}/messages`,
                        method: 'POST',
                        body: {body: body.text},
                    }
                },
                providesTags: ['dialogs']

            }),
            getDialogWithFriend: build.query<any, Partial<dialogsWithFriendsParams>>({
                query: (params) => {
                    return {
                        url: `/dialogs/${params.userId}/messages?page=1&count=10`,
                    }
                },
            }),
            dialogViewed: build.query<any, any>({
                query: (messageId) => {
                    return {
                        url: `/dialogs/messages/${messageId}/viewed`,
                    }
                },
            }),
            RemoveDialog: build.mutation<any, any>({
                query: (messageId) => {
                    return {
                        url: `/dialogs/messages/${messageId}`,
                        method: "DELETE"
                    }
                },
                providesTags: ['dialogs']
            }),
        }
    }
})
export const {useGetAllDialogsQuery,useSendMessageMyFriendMutation, useGetDialogsByIdMutation, useGetDialogWithFriendQuery, useDialogViewedQuery, useRemoveDialogMutation} = dialogsApi