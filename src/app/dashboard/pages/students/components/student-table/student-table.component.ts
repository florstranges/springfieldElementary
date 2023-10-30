import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/students.model';
import { Router } from '@angular/router';

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

  displayedColumns = ['id', 'fullname', 'course', 'teacher', 'email', 'actions'];

  constructor(private router: Router){}

  goToDetail(studentId: number): void{
    this.router.navigate(['dashboard', 'student', 'detail', studentId])
  }
}
