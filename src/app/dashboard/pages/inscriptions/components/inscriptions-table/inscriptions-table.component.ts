import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscription } from '../../models';
import { selectInscriptions } from '../../store/inscriptions.selectors';
import { InscriptionsActions } from '../../store/inscriptions.actions';

@Component({
  selector: 'app-inscriptions-table',
  templateUrl: './inscriptions-table.component.html',
  styleUrls: ['./inscriptions-table.component.scss']
})
export class InscriptionsTableComponent {

  displayedColumns = ['id', 'course', 'student', 'actions'];

  inscriptions$: Observable<Inscription[]>;

  constructor(private store: Store){
    this.inscriptions$ = this.store.select(selectInscriptions)
  }

  onDelete(courseId: number): void{
    if(confirm('Esta seguro?')){
      this.store.dispatch(InscriptionsActions.deleteInscription({payload: {
        courseId,
        id: 0,
        studentId: 0
      }}))
    }
    
  }
}
