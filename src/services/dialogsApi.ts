import {baseApi} from "./baseApi.ts";


const dialogsApi = baseApi.injectEndpoints({
    endpoints: build => {
        return {
            getDialogsById: build.mutation<any, any>({
                query: userId => {
                    return {
                        url: `/dialogs/${userId}`,
                        method: 'PUT',
                    }
                },
            }),
            getAllDialogs: build.query<any, any>({
                query: () => {
                    return {
                        url: `/dialogs`,
                        method: 'GET',
                    }
                },
            }),
            sendMessageMyFriend: build.mutation<any, any>({
                query: ({userId, ...data})=> {
                    return {
                        url: `/dialogs/${userId}/messages`,
                        method: 'POST',
                        body: data
                    }
                },
            }),
        }
    }
})