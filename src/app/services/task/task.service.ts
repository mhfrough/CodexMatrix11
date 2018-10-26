import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as g from 'src/app/app.globals';
import { TaskReq, TaskPut, TaskDel, AssigTaskReq } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: String[] = [];
  constructor(private http: HttpClient,
    private router: Router) { }

  getTask(data: String) {
    this.taskList = [];
    return this.http.get<any>(g.apiURL + '/get-all-tasks-by-project?projId=' + data
    ).subscribe(res => {
      res.data.forEach(element => {
        this.taskList.push(element);
      });
    })
  }

  createTask(data: TaskReq) {
    console.log(data);
    return this.http.post<any>(g.apiURL + '/create-task', data);
  }

  updateTask(data: TaskPut) {
    return this.http.post<any>(g.apiURL + '/update-department', data);
  }

  deleteTask(data: TaskDel) {
    return this.http.post<any>(g.apiURL + '/delete-task', data);
  }

  assignTask(data: AssigTaskReq) {
    return this.http.post<any>(g.apiURL + '/assign-task-manually', data);
  }

}
