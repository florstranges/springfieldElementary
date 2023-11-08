import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: CoursesComponent
        },
        {
            path: 'detail/:id',
            component: CoursesDetailComponent
        }
    ])],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}
