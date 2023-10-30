import { Injectable } from '@angular/core';
import { Student } from './models/students.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    students: Student[] = [
        {
            id: 1,
            name: 'Bart',
            lastName: 'Simpson',
            course: 'Historia',
            teacher: 'Edna Krabappel',
            email: 'bart@mail.com',
        },
        {
            id:2,
            name: 'Lisa',
            lastName: 'Simpson',
            course: 'Matemática',
            teacher: 'Elizabeth Hoover',
            email: 'lisa@mail.com',
        }
    ];

    getStudents$(): Observable<Student[]>{
        return of(this.students);
    }

    createStudent$(payload: Student): Observable<Student[]>{
        this.students.push(payload);
        return of([...this.students]);
    }

    editStudent$(id: number, payload: Student): Observable<Student[]>{
        return of(this.students.map((c) => c.id === id ? {...c, ...payload} : c));
    }

    deleteStudent$(id:number): Observable<Student[]>{
        this.students = this.students.filter((c) => c.id !== id)
        return of(this.students);
    }

    getStudentById$(id: number): Observable<Student | undefined>{
        return of(this.students.find((c) => c.id === id))
    }
}
