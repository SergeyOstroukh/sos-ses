export type UsersResponse = {
    items: Users[]
    totalCount: number
    error: null | string
}
export type Photos = {
    small:null|string
    large:null|string
}
export type Users = {
    "name": string,
    "id": number,
    "uniqueUrlName": null|string
    "photos": Photos
    "status": null|string
    "followed": boolean
}
export type UsersRequest = {
    count?:number
    page?:number
    term?:string
}


export type ProfileResponse = {
	aboutMe: string;
	contacts: ContactsProfile;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: PhotosProfile;
}
export type ContactsProfile = {
	facebook: string;
	website: string;
	vk: string;
	twitter: string;
	instagram: string;
	youtube: string;
	github: string;
	mainLink: string;
}
export type PhotosProfile = {
	small: string;
	large: string;
}
export type authMeResponse = {
	data: authMeData;
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
}
export type authMeData = {
	id: number;
	login: string;
	email: string;
}
export type sendMessage = {
	userId: number
	text: string
}
export type sendMessageDataResponce = {
	message: {
		addedAt: Date
		body: string
		deletedByRecipient: boolean
		deletedBySender: boolean
		distributionId: string|null
		id: string
		isSpam: boolean
		recipientId: number
		recipientName: string
		senderId: number
		senderName: string
		translatedBody: string | number | null
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
	id: number;
	userName: string;
	hasNewMessages: boolean;
	lastDialogActivityDate: string;
	lastUserActivityDate: string;
	newMessagesCount: number;
	photos: Photos;
}
export type startChatting = {
	data: unknown
	fieldsErrors: string[]
	messages: string[]
	resultCode: number
}

export type dialogsWithFriendsParams = {
	userId: number
	page: number
	count: number
}