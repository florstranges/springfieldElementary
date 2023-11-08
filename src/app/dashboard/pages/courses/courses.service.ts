import { Injectable } from "@angular/core";
import { Course } from "./models/courses.models";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class CoursesService{

    courses: Course[] = [
        {
            id: 1,
            name: 'Matemática',
            startDate: new Date('2023-11-10T12:00:00'),
            endDate: new Date('2023-12-10T12:00:00'),
        },
        {
            id: 2,
            name: 'Historia',
            startDate: new Date('2023-11-10T12:00:00'),
            endDate: new Date('2024-03-10T12:00:00'),
        }
    ];

    getCourses$(): Observable<Course[]>{
    return of(this.courses); 
    }

    createCourse$(payload: Course): Observable<Course[]>{
        this.courses.push(payload);
        return of([...this.courses]);
    }

    editCourse$(id: number, payload: Course): Observable<Course[]>{
        return of(this.courses.map((c) => c.id === id ? {...c, ...payload} : c));
    };

    deleteCourse$(id:number): Observable<Course[]>{
        this.courses = this.courses.filter((c) => c.id !== id)
        return of(this.courses);
    };

    getCourseById$(id:number): Observable<Course | undefined>{
        return of(this.courses.find((c) => c.id === id ))
    }
}