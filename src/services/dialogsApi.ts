import {baseApi} from "./baseApi.ts";
import {
    allMessages,
    dialogsWithFriendsParams, dialogWithFriendResponce,
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
                invalidatesTags: ['dialogs']

            }),
            getDialogWithFriend: build.query<dialogWithFriendResponce, Partial<dialogsWithFriendsParams>>({
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
                invalidatesTags: ['dialogs']
            }),
        }
    }
})
export const {useGetAllDialogsQuery,useSendMessageMyFriendMutation, useGetDialogsByIdMutation, useGetDialogWithFriendQuery, useDialogViewedQuery, useRemoveDialogMutation} = dialogsApi