import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionsEffects } from './store/inscriptions.effects';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { StoreModule } from '@ngrx/store';
import { inscriptionsFeature } from './store/inscriptions.reducer';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsTableComponent } from './components/inscriptions-table/inscriptions-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';



@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsTableComponent,
    InscriptionsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscriptionsRoutingModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ]
})
export class InscriptionsModule { }
