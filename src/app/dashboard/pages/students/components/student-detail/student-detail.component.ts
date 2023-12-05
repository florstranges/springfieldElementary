import { Component } from '@angular/core';
import { Student } from '../../models/students.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  StudentId = 0;
  studentsDetail: Student | undefined;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentsService, private router: Router){
    this.StudentId = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.studentService.getStudentById$(this.StudentId).subscribe({
      next: (c) => {
        if (c) {
          this.studentsDetail =  c;
        }
      },
    });
  }

  volver() {
    this.router.navigate(['dashboard', 'student'])
  }

}
