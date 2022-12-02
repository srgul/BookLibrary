import { LoginTokenModel } from './../models/loginTokenModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:3000/login";

  async login(loginModel: LoginModel) {
    return await this.http.post<LoginTokenModel>(this.apiUrl, loginModel)
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false
    }
  }

}
