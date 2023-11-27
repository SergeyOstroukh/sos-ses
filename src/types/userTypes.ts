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

