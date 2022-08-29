import { IUser } from '../../@types/users'

export type AuthState = {
    userData: IUser | null
    token: string | null
}
