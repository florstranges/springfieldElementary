import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/courses.models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { map } from 'rxjs/operators';
import { UserRole } from '../../../users/models/models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];

  @Output()
  editCourse = new EventEmitter<number>();

  @Output()
  deleteCourse = new EventEmitter<number>();

  displayedColumns = ['id', 'name', 'startDate', 'endDate', 'actions'];

  userRole$: Observable<UserRole | undefined>;

  constructor(private router: Router, private store: Store){
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((u) => u?.access))
  }
  
    goToDetail(courseId: number): void{
      this.router.navigate(['dashboard', 'course', 'detail', courseId])
    }
}
