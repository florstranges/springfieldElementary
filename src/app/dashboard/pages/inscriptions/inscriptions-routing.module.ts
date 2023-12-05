import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsDetailComponent } from './components/inscriptions-detail/inscriptions-detail.component';

const routes: Routes = [
    {
        path: '',
        component: InscriptionsComponent
    },
    {
        path: 'detail/:id',
        component: InscriptionsDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InscriptionsRoutingModule {}
