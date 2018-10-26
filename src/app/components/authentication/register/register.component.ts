import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/core/navigation/navigation.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegisterReq } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirmPassword');

  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  isLoading: Boolean = false;
  registerReq: RegisterReq;
  isForm: Boolean = true;
  password: String = '';
  authMsg: String = '';
  isDisabled: Boolean = true;

  get cpwd() {
    return this.rForm.get('confirmPassword');
  }

  constructor(public _nav: NavigationService, public auth: AuthService,
    public router: Router, public fb: FormBuilder, public app: AppComponent) {
    this.rForm = fb.group({
      'name': [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(32)
      ])],
      'domain': [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32)
      ])],
      'confirmPassword': [null, 
        Validators.compose([
          Validators.required,
          passwordConfirming,
          Validators.minLength(4),
          Validators.maxLength(32)
        ])]
    });
  }



  ngOnInit() {
    this._nav.hide();
    if (localStorage.getItem('loginStatus') == "true") {
      // Redirect to Home Page
      this.router.navigate(['']);
    }
  }

  onChange(data) {
    if (data == this.password) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;

    }
  }

  onSubmit(post) {
    console.log("registering...");
    this.authMsg = 'registering...';
    this.isForm = false;
    this.isLoading = true;

    this.registerReq = {
      name: post.name,
      email: post.email,
      domain: post.domain,
      password: post.password,
      deviceType: 'none',
      deviceToken: 'none'
    }

    this.auth.register(this.registerReq).subscribe(res => {
      if (res.status == 1) {
        console.log(res);
        this.isLoading = false;
        this.app.alerts.push({
          type: 'success',
          icon: 'done',
          msg: `${res.message}`,
          timeout: 5000
        });
        this.authMsg = `${res.data.companyName} is registered`;

        localStorage.setItem('loginStatus', "true");
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('companyID', res.data.companyId);
        localStorage.setItem('companyName', res.data.name);
        this.delay(1000).then(any => {
          this.app.company = res.data.name;
          this.router.navigate(['']);
        });
      } else {
        this.isLoading = false;
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
