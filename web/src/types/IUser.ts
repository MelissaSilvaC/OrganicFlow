export default interface IUser {
    name?: string,
    email: string,
    password: string,
    photo?: string,
    company?: string,
    manager?: boolean,
    inspector?: boolean,
    cnpj?: string,
}