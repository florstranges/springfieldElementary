import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/user-dialog/user-dialog.component';
import { User } from './models/models';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog
  ) {
    this.users$ = this.usersService.getUsers$();
  };

  addUser():void{
    this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v){
          this.users$ = this.usersService.createUser$(v)
        }
      }
    });
  }

  onEditUser(user: number): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: user,
      }) 
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users$ = this.usersService.updateUser$(user, v)
          }
        },
      });
  }
  

  onDeleteUser(userId: number): void{
    if (confirm('Esta seguro?')) {
      this.users$ = this.usersService.deleteUser$(userId);
      // this.users = this.users.filter((u) => u.id !== userId);
    }
  }

  
}
