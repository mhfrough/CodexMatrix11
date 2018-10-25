import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginReq, RegisterReq } from 'src/app/interfaces/auth';
import * as g from 'src/app/app.globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // Sending Register Post Request to Server
  register(data: RegisterReq) {
    return this.http.post<any>(g.apiURL + '/sign-up', data)
  }

  // Sending Login Post Request to Server
  login(data: LoginReq) {
    return this.http.post<any>(g.apiURL + '/sign-in', data)
  }

  // Logout
  logOut() {
    localStorage.clear();
    window.location.reload();
  }

}
