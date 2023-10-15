import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
