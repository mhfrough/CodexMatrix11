import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/core/navigation/navigation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { LoginReq } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  loginReq: LoginReq;
  isForm: Boolean = true;
  isLoading: Boolean = false;
  authMsg: String = '';

  constructor(public nav: NavigationService, public router: Router,
    public _auth: AuthService, public fb: FormBuilder, public app: AppComponent) {
    this.rForm = fb.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])]
    });
  }

  ngOnInit() {
    this.nav.hide();
    if (localStorage.getItem('loginStatus') == 'true') {
      // Redirect to Home Page
      this.router.navigate(['']);
    }
  }

  onSubmit(post) {
    console.log("authenticating...");
    this.authMsg = 'Authenticating...';
    this.isForm = false;
    this.isLoading = true;

    this.loginReq = {
      email: post.email,
      password: post.password,
      deviceType: 'none',
      deviceToken: 'none'
    }

    console.log(this.loginReq);
    this._auth.login(this.loginReq).subscribe(res => {
      if (res.status == 1) {
        this.isLoading = false;
        this.app.alerts.push({
          type: 'success',
          icon: 'done',
          msg: `${res.message}`,
          timeout: 5000
        });
        this.authMsg = `Welcome to ${res.data.companyName}`;
        console.log(res);
        localStorage.setItem('loginStatus', "true");
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('companyID', res.data.companyId);
        localStorage.setItem('companyName', res.data.companyName);
        this.delay(1000).then(any => {
          this.app.company = res.data.companyName;
          this.router.navigate(['']);
        });
      } else {
        this.isLoading = false;
        this.isForm = true;
        this.app.alerts.push({
          type: 'warning',
          icon: 'warning',
          msg: `${res.message}`,
          timeout: 5000
        });
        this.authMsg = '';
        console.log(res.message);
      }
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

}
