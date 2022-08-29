import { IUser } from './../@types/users'

export class User implements IUser {
    public login: string
    public email: string

    constructor({ login, email }: { login: string; email: string }) {
        this.login = login
        this.email = email
    }
}
