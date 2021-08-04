import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-angular';

  showHome: boolean = false;
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.showHome.subscribe(
      show => this.showHome = show
    )
  }
}
