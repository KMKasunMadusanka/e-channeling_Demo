import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
 
  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.loginService.checkUser(this.username,this.password); 
    if(this.loginService.getLoginStatus() == 'yes'){
      this.router.navigate(['/home-page']);
    }
  }
}
