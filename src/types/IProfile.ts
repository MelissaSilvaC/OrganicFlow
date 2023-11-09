export default interface IProfile {
    photo?: string,
    userName: string,
    email: string,
    adress?: string
    children: React.ReactNode;
}