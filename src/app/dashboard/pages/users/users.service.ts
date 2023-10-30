import { Injectable } from "@angular/core";
import { of, Observable } from 'rxjs';
import { User } from "./models/models";

@Injectable({providedIn: 'root'})
export class UsersService{
    users: User[] = [
        {
            id:1,
            name: 'Seymour',
            lastName: 'Skinner',
            email: 'seymour@mail.com',
            access: 'Administrador',
            job: 'Director'
        },
        {
            id:2,
            name: 'Gary',
            lastName: 'Charlmers',
            email: 'gary.c@mail.com',
            access: 'Administrador',
            job: 'Superintendente'
        }
    ]

    getUsers$(): Observable<User[]>{
        return of(this.users);
    }

    createUser$(payload: User): Observable<User[]>{
        this.users.push(payload);
        return of([...this.users]);
    }

    editUser$(id: number, payload: User): Observable<User[]>{
        return of(this.users.map((c) => c.id === id ? {...c, ...payload} : c));
    }

    deleteUser$(id:number): Observable<User[]>{
        this.users = this.users.filter((c) => c.id !== id)
        return of(this.users);
    }

    getUserById$(id: number): Observable<User | undefined>{
        return of(this.users.find((c) => c.id === id))
    }
}