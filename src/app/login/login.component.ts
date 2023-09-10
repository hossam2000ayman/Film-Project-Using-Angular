import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usernameText = '';
  passwordText = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.usernameText.trim().length === 0) {
      this.errorMessage = 'User Name is Required';
    } else if (this.passwordText.trim().length === 0) {
      this.errorMessage = 'Password is requried';
    } else {
      this.errorMessage = '';
      let res = this.authService.login(this.usernameText, this.passwordText);

      if (res === 200) {
        this.router.navigate(['home']);
      }
      if(res === 403){
        this.errorMessage = "Invalid  Credentials";
      }
    }
  }
}
