import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { InscriptionsActions } from './inscriptions.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { CreateInscriptionPayload, Inscription } from '../models';
import { Course } from '../../courses/models/courses.models';
import { Student } from '../../students/models/students.model';


@Injectable()
export class InscriptionsEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionsActions.loadInscriptions),
      concatMap(() =>
        this.getInscriptions().pipe(
          map(data => InscriptionsActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error }))))
      )
    );
  });

  loadInscriptionDialogOptions$ = createEffect(() => this.actions$.pipe(
    ofType(InscriptionsActions.loadInscriptionsDialogOptions),
    concatMap(() => this.getInscriptionDialonOptions().pipe(
      map((resp) => InscriptionsActions.loadInscriptionsDialogOptionsSuccess(resp))
    )),
    catchError((err) => of (InscriptionsActions.loadInscriptionsDialogOptionsFailure({error: err})))
  ))


  createInscription$ = createEffect(() => this.actions$.pipe(
    ofType(InscriptionsActions.createInscription), 
    concatMap((action) => {
      return this.createInscription(action.payload).pipe(
        map(data => InscriptionsActions.loadInscriptions()),
        catchError((error) => of(InscriptionsActions.createInscriptionFailure({error})))
      )
    })
  ));

  deleteInscription$ = createEffect(() => this.actions$.pipe(
    ofType(InscriptionsActions.deleteInscription),
    concatMap((action) => {
      return this.deleteInscription(action.payload.courseId).pipe(
        map(() => InscriptionsActions.loadInscriptions()),
        catchError((error) => of(InscriptionsActions.deleteInscriptionFailure({ error })))
      );
    })
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  deleteInscription(id: number): Observable<Inscription>{
    return this.httpClient.delete<Inscription>(`${environment.baseUrl}/inscriptions/${id}`)
  }

  createInscription(payload: CreateInscriptionPayload): Observable<Inscription>{
    return this.httpClient.post<Inscription>(`${environment.baseUrl}/inscriptions`, payload)
  }

  getInscriptionDialonOptions(): Observable<{courses: Course[], students: Student[]}>{
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`), 
      this.httpClient.get<Student[]>(`${environment.baseUrl}/students`)])
      .pipe(
        map(([courses, students]) => {
      return {
        courses,
        students
      }
    }))
    
  };

  getInscriptions(): Observable<Inscription[]>{
    return this.httpClient.get<Inscription[]>(`${environment.baseUrl}/inscriptions?_expand=course&_expand=student`)
  }

  


}
