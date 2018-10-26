import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { NavigationService } from './services/core/navigation/navigation.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchString: string;

  title = 'codexmatrix';
  company: String = "";

  action: String = 'Create';
  button: String = 'Submit';

  alerts: any[] = [];
  dismissible = true;

  // start: number = 0;
  end: number = 10;
  // temp: number = 0;

  // pre: Boolean = true;
  // nxt: Boolean = false;

  value: number = 0;


  // prevData(data: number) {
  //   this.start -= this.temp;
  //   this.end -= this.temp;

  //   this.filterChecking(data);
  // }

  // nextData(data: number) {
  //   this.start += this.temp;
  //   this.end += this.temp;

  //   this.filterChecking(data);
  // }

  // filterChecking(data) {
  //   if (this.end <= data) {
  //     this.nxt = true;
  //   } else {
  //     this.nxt = false;
  //   }

  //   if (this.start <= 0) {
  //     this.pre = true;
  //   } else {
  //     this.pre = false;
  //   }
  // }

  filterRange(data: string) {
    this.value = parseInt(data, 10);
    // this.start = 0;
    this.end = this.value;
    // this.temp = this.end;
  }

  constructor(private router: Router, private nav: NavigationService) {

  }

  ngOnInit() {
    this.company = localStorage.getItem('companyName');

    this.end = 10;
    // this.temp = this.end;
  }

  reset() {
    this.action = 'Create';
    this.button = 'submit';
  }

}
