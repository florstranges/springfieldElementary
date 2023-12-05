import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Inscription } from '../../models';
import { selectInscriptions } from '../../store/inscriptions.selectors';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { Router } from '@angular/router';
import { UserRole } from '../../../users/models/models';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';


@Component({
  selector: 'app-inscriptions-table',
  templateUrl: './inscriptions-table.component.html',
  styleUrls: ['./inscriptions-table.component.scss']
})
export class InscriptionsTableComponent {

  displayedColumns = ['id', 'course', 'student', 'actions'];

  inscriptions$: Observable<Inscription[]>;

  userRole$: Observable<UserRole | undefined>;

  constructor(private store: Store, private router: Router,) {
    this.inscriptions$ = this.store.select(selectInscriptions)

    this.userRole$ = this.store.select(selectAuthUser).pipe(map((u) => u?.access))

    
  }

  onDelete(courseId: number): void {
    if (confirm('Esta seguro?')) {
      this.store.dispatch(InscriptionsActions.deleteInscription({
        payload: {
          courseId,
          id: 0,
          studentId: 0
        }
      }))
    }

  }

  onDetails(inscriptionId: number): void {
    this.router.navigate(['dashboard', 'inscriptions', 'detail', inscriptionId]);
  }



}
