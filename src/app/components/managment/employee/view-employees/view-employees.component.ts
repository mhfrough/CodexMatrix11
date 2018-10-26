import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp/emp.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  public searchString: string;
  isLoading: Boolean = false;
  constructor(public emp: EmpService, public app: AppComponent) { }

  ngOnInit() {
    this.emp.getAllEmp(localStorage.getItem('companyID'));
  }

}
