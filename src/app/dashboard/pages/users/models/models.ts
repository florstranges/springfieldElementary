export type UserRole = 'Admin' | 'Empleado';

export interface User{
    token: string;
    id: number;
    name: string;
    lastName: string;
    email: string;
    access: UserRole ;
    job: string;
    password: string;
}