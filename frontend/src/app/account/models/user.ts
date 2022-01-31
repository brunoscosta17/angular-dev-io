export interface User {
    id: string;
    name?: string;
    CPF?: string;
    email?: string;
    password: string;
    passwordConfirm: string;
}