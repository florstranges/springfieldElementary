import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/courses.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];

  @Output()
  editCourse = new EventEmitter();

  @Output()
  deleteCourse = new EventEmitter();

  displayedColumns = ['id', 'name', 'startDate', 'endDate', 'actions'];

  constructor(private router: Router){}
  
    goToDetail(courseId: number): void{
      this.router.navigate(['dashboard', 'course', 'detail', courseId])
    }
}
