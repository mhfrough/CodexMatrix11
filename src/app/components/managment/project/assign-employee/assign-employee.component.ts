import { Component, OnInit } from '@angular/core';
import { EmpProjReq } from 'src/app/interfaces/proj';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjService } from 'src/app/services/proj/proj.service';
import { DeptService } from 'src/app/services/dept/dept.service';
import { DesigService } from 'src/app/services/desig/desig.service';
import { AppComponent } from 'src/app/app.component';
import { EmpService } from 'src/app/services/emp/emp.service';

@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.css']
})
export class AssignEmployeeComponent implements OnInit {

  empProjReq: EmpProjReq;
  rForm: FormGroup;
  dismissible = true;

  isUpdate: boolean = false;

  alerts: any[] = [];
  isLoading: boolean = false;
  isDisabled: boolean = true;

  constructor(public proj: ProjService, public dept: DeptService,
    public emp: EmpService, public desig: DesigService,
    public fb: FormBuilder, public app: AppComponent) {
    this.rForm = fb.group({
      'deptId': [null, Validators.required],
      'projId': [null, Validators.required],
      'empId': [null, Validators.required],
      'desigId': [null, Validators.required],
    });
  }

  ngOnInit() {
    this.dept.getDept(localStorage.getItem('companyID'));
    this.desig.getDesig(localStorage.getItem('companyID'));
    console.log(this.dept.deptList);
  }


  onChange(data) {
    console.log(data);
    this.emp.getEmp(data, false);
    this.proj.getProj(data);
  }


  onSubmit(post) {
    this.isLoading = true;

    this.empProjReq = {
      userId: post.empId,
      designationId: post.desigId,
      projId: post.projId,
    }

    this.proj.assignEmp(this.empProjReq).subscribe(res => {
      console.log(res);
      if (res.status == 1) {
        this.isLoading = false;
        // Department Creation Successful
        this.alerts.push({
          type: 'success',
          msg: `${res.message}`,
          timeout: 5000
        });
      } else {
        this.isLoading = false;
        this.alerts.push({
          type: 'warning',
          msg: `${res.message}`,
          timeout: 5000
        });
      }
    })
  }

}
