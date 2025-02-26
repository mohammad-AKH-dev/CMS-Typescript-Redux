export type userType = {
    id: number | string,
    name: string ,
    username: string ,
    role : string ,
    email: string ,
    token: string ,
    password: string ,
}


export type UserTableType = userType[]


export type initialStateTypes = {
    users : UserTableType | [],
    error : boolean ,
    loading : boolean
}