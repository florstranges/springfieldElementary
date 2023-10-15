import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/models';

@Component({
  selector: 'app-users-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UsersTableComponent {

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  displayedColumns = ['id', 'fullname', 'course', 'teacher', 'email', 'actions'];
}
