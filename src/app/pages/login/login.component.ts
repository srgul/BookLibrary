import { LoginModel } from './../../models/loginModel';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  loginModelProperties: LoginModel = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) {}  

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loginModelProperties.email = this.loginForm.value.email || "" ; 
      this.loginModelProperties.password = this.loginForm.value.password || "";
      await (await this.authService.login(this.loginModelProperties)).subscribe(res => {
        console.log(res)
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken)
          localStorage.setItem('role', res.user.role)
          if (res.user.role == "admin") {
            this.router.navigateByUrl("admin")
          } 

          if (res.user.role == "user") {
            this.router.navigateByUrl("user")
          }
        }
      })
    }
  }

}
