import { Injectable } from "@angular/core";
import { Course } from "./models/courses.models";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.local";
import { concatMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CoursesService{

    courses: Course[] = []

    constructor(private httpClient: HttpClient){}

    getCourses$(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
    }

    getCourseById$(id: number): Observable<Course | undefined>{
        return this.httpClient.get<Course>(`${environment.baseUrl}/courses/${id}`);
    }

    createCourse$(payload: Course): Observable<Course[]> {
        return this.httpClient.post<Course>(`${environment.baseUrl}/courses`, payload)
            .pipe(
                concatMap(() => this.getCourses$())
            );
    }

    updateCourse$(id: number, payload: Course): Observable<Course[]> {
        return this.httpClient
        .put<Course>(`${environment.baseUrl}/courses/${id}`, payload)
        .pipe(concatMap(() => this.getCourses$()));
    }

    deleteCourse$(courseId: number): Observable<Course[]> {
        return this.httpClient
            .delete<Object>(`${environment.baseUrl}/courses/${courseId}`)
            .pipe(
                concatMap(() => this.getCourses$())
            )
            ;
    }
}