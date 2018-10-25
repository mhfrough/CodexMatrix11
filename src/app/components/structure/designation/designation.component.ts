import { Component, OnInit } from '@angular/core';
import { DesigReq, DesigPut, DesigDel } from 'src/app/interfaces/desig';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesigService } from 'src/app/services/desig/desig.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  desigReq: DesigReq;
  desigPut: DesigPut;
  desigDel: DesigDel;

  rForm: FormGroup;
  dismissible = true;
  alerts: any[] = [];
  isLoading: Boolean = false;
  id: String = '';
  desigName: String = '';
  button: String = 'Submit';
  isUpdate: boolean = false;

  constructor(private _desig: DesigService, private fb: FormBuilder,
    private app: AppComponent) {
    this.rForm = fb.group({
      'desigName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32)
      ])]
    });
  }

  ngOnInit() {
    this.getAllDesig();
    console.log(this._desig.desigList)
  }

  getAllDesig() {
    this.isLoading = true;
    this._desig.getDesig(localStorage.getItem('companyID'));
    this.isLoading = false;
  }

  onSubmit(post) {
    this.isLoading = true;

    if (!this.isUpdate) {
      this.desigReq = {
        companyId: localStorage.getItem('companyID'),
        name: post.desigName,
      }

      this._desig.createDesig(this.desigReq).subscribe(res => {
        if (res.status == 1) {
          this.isLoading = false;
          console.log(res);
          this.alerts.push({
            type: 'success',
            msg: `${res.message}`,
            timeout: 5000
          });
          this.getAllDesig();
        } else {
          this.isLoading = false;
          console.log(res);
          this.alerts.push({
            type: 'warning',
            msg: `${res.message}`,
            timeout: 5000
          });
        }
      });
    } else {
      this.desigPut = {
        companyId: localStorage.getItem('companyID'),
        name: post.desigName,
      }

      this._desig.updateDesig(this.desigPut).subscribe(res => {
        if (res.status == 1) {
          this.isLoading = false;
          console.log(res);
          this.alerts.push({
            type: 'success',
            msg: `${res.message}`,
            timeout: 5000
          });
          this.getAllDesig();
        } else {
          this.isLoading = false;
          console.log(res);
          this.alerts.push({
            type: 'warning',
            msg: `${res.message}`,
            timeout: 5000
          });
        }
      });
    }
    this.rForm.reset();
    this.app.button = 'submit';
    this.app.action = 'Add';
  }

  onUpdate(id: String, name: String) {
    this.app.button = 'Update';
    this.app.action = 'Update';
    this.id = id;
    this.desigName = name;
    this.isUpdate = true;
  }

  onDelete(id: String) {
    this.isLoading = true;
    this.desigDel = {
      designationId: id
    }
    this._desig.deleteDesig(this.desigDel).subscribe(res => {
      this.isLoading = false;
      // Department Deleted

      this.alerts.push({
        type: 'danger',
        msg: `${res.message}`,
        timeout: 5000
      });
      this.getAllDesig();
    })
  }

}
