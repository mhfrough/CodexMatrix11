import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as g from 'src/app/app.globals';
import { ProjReq, ProjPut, ProjDel, EmpProjReq, EmpProjDel } from 'src/app/interfaces/proj';

@Injectable({
  providedIn: 'root'
})
export class ProjService {

  projList: String[] = [];
  constructor(private http: HttpClient,
    private router: Router) { }

    // Create Project
    getProj(data: String) {
      this.projList = [];
      return this.http.get<any>(g.apiURL + '/get-projects-by-department?deptId=' + data
      ).subscribe(res => {
        res.data.forEach(element => {
          this.projList.push(element);
        });
      })
    }
  
    createDept(data: ProjReq) {
      console.log(data);
      return this.http.post<any>(g.apiURL + '/create-project', data);
    }
    
    updateDept(data: ProjPut) {
      return this.http.post<any>(g.apiURL + '/update-project', data);
    }
    
    deleteDept(data: ProjDel) {
      return this.http.post<any>(g.apiURL + '/delete-project', data);
    }

    // Assign Employee
    assignEmp(data: EmpProjReq) {
      console.log(data);
      return this.http.post<any>(g.apiURL + '/assign-emp-to-project', data);
    }

    deleteEmp(data: EmpProjDel) {
      return this.http.post<any>(g.apiURL + '/delete-emp-from-project', data);
    }
}
