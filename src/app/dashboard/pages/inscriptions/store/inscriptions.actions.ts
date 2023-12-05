import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscriptionPayload, Inscription } from '../models';
import { Course } from '../../courses/models/courses.models';
import { Student } from '../../students/models/students.model';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    
    'Load Inscriptions Dialog Options': emptyProps(),
    'Load Inscriptions Dialog Options Success': props<{courses: Course[], students: Student[]}>(),
    'Load Inscriptions Dialog Options Failure': props<{ error: unknown}>(),
    
    'Create Inscription': props<{ payload: CreateInscriptionPayload }>(),
    'Create Inscription Failure': props<{ error: unknown}>(),
    
    'Delete Inscription': props<{ payload: Inscription }>(),
    'Delete Inscription Failure': props<{ error: unknown}>(),
  }
});
