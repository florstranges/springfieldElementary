import { Injectable } from "@angular/core";
import { of, Observable, concatMap } from 'rxjs';
import { User } from "./models/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.local";

@Injectable({ providedIn: 'root' })
export class UsersService {

    users: User[] = []

    constructor(private httpClient: HttpClient) { }

    getUsers$(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${environment.baseUrl}/users`);
    }

    
    getUserById$(id: number): Observable<User | undefined>{
        return this.httpClient.get<User>(`${environment.baseUrl}/users/${id}`);
    }

    createUser$(payload: User): Observable<User[]> {
        return this.httpClient.post<User>(`${environment.baseUrl}/users`, payload)
            .pipe(
                concatMap(() => this.getUsers$())
            );
    }

    updateUser$(id: number, payload: User): Observable<User[]> {
        return this.httpClient
        .put<User>(`${environment.baseUrl}/users/${id}`, payload)
        .pipe(concatMap(() => this.getUsers$()));
    }

    deleteUser$(userId: number): Observable<User[]> {
        return this.httpClient
            .delete<Object>(`${environment.baseUrl}/users/${userId}`)
            .pipe(
                concatMap(() => this.getUsers$())
            )
            ;
    }
    
}