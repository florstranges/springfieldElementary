import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectInscriptions } from '../../store/inscriptions.selectors';
import { Inscription } from '../../models';

@Component({
  selector: 'app-inscriptions-detail',
  templateUrl: './inscriptions-detail.component.html',
  styleUrls: ['./inscriptions-detail.component.scss']
})
export class InscriptionsDetailComponent {
  inscription$: Observable<Inscription[]>;

  constructor(private store: Store, private route: ActivatedRoute) {
      const inscriptionId = this.route.snapshot.paramMap.get('id');
      this.inscription$ = this.store.select(selectInscriptions);
  }

  
}
