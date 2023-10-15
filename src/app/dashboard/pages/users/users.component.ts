import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/user-dialog/user-dialog.component';
import { User } from './models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName= '';

  users: User[] = [
  {
    id:1,
    name: 'Bart',
    lastName: 'Simpson',
    course: '4to grado',
    teacher: 'Edna Krabappel',
    email: 'bart@mail.com',
  },
  {
    id:2,
    name: 'Lisa',
    lastName: 'Simpson',
    course: '2to grado',
    teacher: 'Elizabeth Hoover',
    email: 'lisa@mail.com',
  }
]

  constructor(
    private matDialog: MatDialog
  ) {};

  openUsersDialog(): void{
    this.matDialog.open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
          this.users = [
            ...this.users,
            {
              ...v,
              id: Math.floor(Math.random() * 9000) + 1000,
            }
          ]
        }
      },
    });
  }

  onEditUser(user: User): void{
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          this.users = this.users.map((u) => u.id === user.id ? ({...u, ...v}) : u)
        }
      }
    })
    
  }

  onDeleteUser(userId:number): void{
    this.users = this.users.filter((u) => u.id !== userId)
  }
}
