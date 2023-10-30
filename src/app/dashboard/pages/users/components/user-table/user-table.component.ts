import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UsersTableComponent {

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  displayedColumns = ['id', 'fullname', 'email', 'job', 'access', 'actions'];

  constructor(private router: Router){}

  goToDetail(userId: number): void{
    this.router.navigate(['dashboard', 'users', 'detail', userId])
  }
}
