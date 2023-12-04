import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/students.model';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { UserRole } from '../../../users/models/models';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter();

  @Output()
  editStudent = new EventEmitter();

  displayedColumns = ['id', 'fullname', 'grade', 'teacher', 'email', 'actions'];

  userRole$: Observable<UserRole| undefined>;

  constructor(private router: Router, private store: Store){
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((u) => u?.access))
  }


  goToDetail(studentId: number): void{
    this.router.navigate(['dashboard', 'student', 'detail', studentId])
  }
}
