export type UsersResponse = {
  error: null | string
  items: Users[]
  totalCount: number
}
export type Photos = {
  large: null | string
  small: null | string
}
export type Users = {
  followed: boolean
  id: number
  name: string
  photos: Photos
  status: null | string
  uniqueUrlName: null | string
}
export type UsersRequest = {
  count?: number
  page?: number
  term?: string
}

export type ProfileResponse = {
  aboutMe: string
  contacts: ContactsProfile
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotosProfile
  userId: number
}
export type ContactsProfile = {
  facebook: string
  github: string
  instagram: string
  mainLink: string
  twitter: string
  vk: string
  website: string
  youtube: string
}
export type PhotosProfile = {
  large: string
  small: string
}
export type authMeResponse = {
  data: authMeData
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
export type authMeData = {
  email: string
  id: number
  login: string
}
export type sendMessage = {
  text: string
  userId: number | string
}
export type sendMessageDataResponce = {
  message: {
    addedAt: Date
    body: string
    deletedByRecipient: boolean
    deletedBySender: boolean
    distributionId: null | string
    id: string
    isSpam: boolean
    recipientId: number
    recipientName: string
    senderId: number
    senderName: string
    translatedBody: null | number | string
    viewed: boolean
  }
}
export type sendMessageResponce = {
  data: sendMessageDataResponce
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
export type allMessages = {
  hasNewMessages: boolean
  id: number
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: Photos
  userName: string
}
export type startChatting = {
  data: unknown
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

export type dialogsWithFriendsParams = {
  count: number
  page: number
  userId: number
}

export type dialogWithFriendResponce = {
  error?: string[]
  items: Message[]
  totalCount: number
}
export type Message = {
  addedAt: string
  body: string
  id: string
  recipientId: number
  senderId: number
  senderName: string
  translatedBody?: null | string
  viewed: boolean
}
