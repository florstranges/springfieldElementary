import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { TituloGrandeDirective } from '../shared/directives/titulo-grande.directive';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';



@NgModule({
  declarations: [
    DashboardComponent,
    TituloGrandeDirective,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CoursesModule,
    MatListModule,
    RouterModule,
    StudentsModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
