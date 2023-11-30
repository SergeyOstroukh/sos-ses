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