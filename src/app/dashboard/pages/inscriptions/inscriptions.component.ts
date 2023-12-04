import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from './store/inscriptions.actions';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent {
  constructor(private store: Store, private dialog: MatDialog){
    this.store.dispatch(InscriptionsActions.loadInscriptions())
  }

  addInscription(): void{
    this.dialog.open(InscriptionsDialogComponent)
  }
}
