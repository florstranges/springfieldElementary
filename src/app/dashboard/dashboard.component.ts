import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';
import { User } from './pages/users/models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  showSidebar = true;

  public authUser$: Observable<User | null>;

  constructor(private authService: AuthService){
    this.authUser$ = this.authService.authUser$;
  }

  logout(): void {
    this.authService.logout();
  }
}
