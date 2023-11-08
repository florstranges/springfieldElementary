import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
