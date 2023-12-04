import { Injectable } from '@angular/core';
import { Student } from './models/students.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    
    students: Student[] = []

    constructor(private httpClient: HttpClient){}

    getStudents$(): Observable<Student[]>{
        return this.httpClient.get<Student[]>(`${environment.baseUrl}/students`);
    }

    getStudentById$(id: number): Observable<Student | undefined>{
        return this.httpClient.get<Student>(`${environment.baseUrl}/students/${id}`);
    }

    createStudent$(payload: Student): Observable<Student[]>{
        return this.httpClient.post<Student>(`${environment.baseUrl}/students`, payload)
        .pipe(
            concatMap(() => this.getStudents$())
        );
    }

    editStudent$(id: number, payload: Student): Observable<Student[]>{
        return this.httpClient.put<Student>(`${environment.baseUrl}/students/${id}`, payload)
        .pipe(
            concatMap(() => this.getStudents$())
        );
    }

    deleteStudent$(id:number): Observable<Student[]>{
        return this.httpClient.delete<Object>(`${environment.baseUrl}/students/${id}`)
        .pipe(
            concatMap(() => this.getStudents$())
        );
    }

    
}
