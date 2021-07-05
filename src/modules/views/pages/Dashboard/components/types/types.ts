export interface IUser {
    name: string
    lastName: string 
    email: string 
    id: string 
    createdAt: string 
    address: string 
    access: IAccess[] 
    [key: string]: string | IAccess[] 
}

interface IAccess {
    day: string
    times: number
}

export interface ISortConfig {
    key: string
    direction: string
    
}