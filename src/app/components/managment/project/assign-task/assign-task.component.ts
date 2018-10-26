import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssigTaskReq } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task/task.service';
import { EmpService } from 'src/app/services/emp/emp.service';
import { ProjService } from 'src/app/services/proj/proj.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  alerts: any[] = [];
  givenBy: String = '';
  isLoading: boolean = false;
  rForm: FormGroup;
  dismissible = true;
  assigTaskReq: AssigTaskReq;

  constructor(public task: TaskService, public emp: EmpService,
    public fb: FormBuilder, public proj: ProjService,
    public app: AppComponent) {
    this.rForm = fb.group({
      'taskId': [null, Validators.required],
      'givenTo': [null, Validators.required],
    });
  }

  ngOnInit() {
    this.emp.getAllEmp(localStorage.getItem('companyID'));
    this.givenBy = localStorage.getItem('companyName');
  }

  onChange(data) {
    this.task.getTask(data);
  }

  onSubmit(post) {
    this.isLoading = true;
    this.assigTaskReq = {
      taskId: post.taskId,
      givenBy: localStorage.getItem('userId'),
      givenTo: post.givenTo
    }

    this.task.assignTask(this.assigTaskReq).subscribe(res => {
      if (res.status == 1) {
        this.isLoading = false;
        this.alerts.push({
          type: 'success',
          msg: `${res.message}`,
          timeout: 5000
        });
      } else {
        this.isLoading = false;
        this.alerts.push({
          type: 'success',
          msg: `${res.message}`,
          timeout: 5000
        });
      }
    })
  }
}
