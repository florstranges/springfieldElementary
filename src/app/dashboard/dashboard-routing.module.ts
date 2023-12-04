import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
                children: [
                    {
                        path: 'home',
                        component: HomeComponent,
                    },
                    {
                        path:'course',
                        loadChildren: () => import('./pages/courses/courses.module').then((f) => f.CoursesModule),
                    },
                    {
                        path:'student',
                        loadChildren: () => import('./pages/students/students.module').then((f) => f.StudentsModule),
                    },
                    {
                        path:'users',
                        canActivate: [adminGuard],
                        loadChildren: () => import('./pages/users/users.module').then((f) => f.UsersModule),
                    },
                    {
                        path: 'inscriptions',
                        loadChildren: () => import('./pages/inscriptions/inscriptions.module').then((f) => f.InscriptionsModule)
                    },
                ]
            },

        ]),
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
