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
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result){
          this.users$ = this.usersService.createUser$({
            id: Math.floor(Math.random() * 9000) + 1000,
            name: result.name,
            lastName: result.lastName,
            email: result.email,
            access: result.access,
            job: result.job,
          })
        }
      }
    });
  }

  onDeleteUser(userId: number): void{
    this.users$ = this.usersService.deleteUser$(userId)
  }

  onEditUser(userId: number): void{
    this.matDialog
    .open(UsersDialogComponent, {
      data: userId,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (!!result){
          this.users$ = this.usersService.editUser$(userId, result);
        }
      }
    });
  }
}
