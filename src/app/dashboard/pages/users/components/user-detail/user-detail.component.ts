import { Component } from '@angular/core';
import { User } from '../../models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId = 0;
  userDetail: User | undefined;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private router: Router){
    this.userId = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.userService.getUserById$(this.userId).subscribe({
      next: (c) => {
        if (c) {
          this.userDetail =  c;
        }
      },
    });
  }

  volver() {
    this.router.navigate(['dashboard', 'users'])
  }
}
