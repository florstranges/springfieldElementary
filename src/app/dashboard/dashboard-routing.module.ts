import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';

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
                        loadChildren: () => import('./pages/users/users.module').then((f) => f.UsersModule),
                    },
                ]
            },

        ]),
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
