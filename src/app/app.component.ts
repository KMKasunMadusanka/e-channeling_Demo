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
    this.imageSRC = 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=15a16c479a2be475fa1961faec9859203&authkey=ATpbnUbDXcnHyg1It_nvY0Y&expiration=2018-01-24T09%3A06%3A50.000Z&e=bca2d5b9b94d46a184f8bb2fee04e441';
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
