import { Component } from '@angular/core';
import { Course } from '../../models/courses.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent {
  courseId = 0;
  courseDetail: Course | undefined;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CoursesService, private router: Router){
    this.courseId = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.courseService.getCourseById$(this.courseId).subscribe({
      next: (c) => {
        if (c) {
          this.courseDetail =  c;
        }
      },
    });
  }

  volver() {
    this.router.navigate(['dashboard', 'course'])
  }
}
