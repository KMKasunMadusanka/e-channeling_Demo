import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginTitle = 'Login';
  loginIcon = 'perm_identity';
  imageSRC;
  constructor(private loginService: LoginServiceService, private router: Router) {
    this.imageSRC = './../assets/user-avatar.svg';
  }

  ngOnInit() {
  }

  changeIcon() {
    if (this.loginService.getLoginStatus() === 'yes') {
      const data = this.loginService.getUserdata();
      this.imageSRC = data.imageLink;
      this.loginTitle = 'Logout';
      this.loginIcon = 'exit_to_app';
    }

  }

  doLogin() {
    if (this.loginTitle === 'Login') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/home-page']);
      location.reload();
    }
  }

  settingsPage() {
    if (this.loginService.getLoginStatus() === 'yes') {
      this.router.navigate(['/settings']);
    }
  }

}
