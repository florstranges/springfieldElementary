import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models';
import { Course } from '../../courses/models/courses.models';
import { Student } from '../../students/models/students.model';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  isLoading: boolean;
  inscriptions: Inscription[];
  error: unknown;

  isLoadingDialogOptions: boolean;
  courseOptions: Course[];
  studentOptions: Student[];
}

export const initialState: State = {
  isLoading: false,
  inscriptions: [],
  error: null,
  isLoadingDialogOptions: false,
  courseOptions: [],
  studentOptions: [],
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, state => ({...state, isLoading: true})),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, { data }) => ({...state, isLoading: false, inscriptions: data})),
  on(InscriptionsActions.loadInscriptionsFailure, (state, { error }) => ({...state, isLoading: false, error: error})),

  on(InscriptionsActions.loadInscriptionsDialogOptions, (state) => {
    return { ...state , isLoadingDialogOptions: true}
  }),
  on(InscriptionsActions.loadInscriptionsDialogOptionsSuccess, (state, action) => {
    return { ...state, courseOptions: action.courses, studentOptions: action.students, isLoadingDialogOptions: false}
  }),
  on(InscriptionsActions.loadInscriptionsDialogOptionsFailure, (state, action) => {
    return { ...state, error: action.error, isLoadingDialogOptions: false}
  })
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

