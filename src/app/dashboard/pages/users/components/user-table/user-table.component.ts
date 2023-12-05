import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserRole } from '../../models/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

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
  editUser = new EventEmitter<number>();

  displayedColumns = ['id', 'fullname', 'access', 'actions'];

  userRole$: Observable<UserRole | undefined>;

  constructor(private router: Router, private store: Store){
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((u) => u?.access))
  }

  goToDetail(userId: number): void{
    this.router.navigate(['dashboard', 'users', 'detail', userId])
  }
}
