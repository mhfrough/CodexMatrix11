import { Component, OnInit } from '@angular/core';
import { CatReq, CatPut, CatDel } from 'src/app/interfaces/cat';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatService } from 'src/app/services/cat/cat.service';
import { DeptService } from 'src/app/services/dept/dept.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catReq: CatReq;
  catPut: CatPut;
  catDel: CatDel;

  rForm: FormGroup;
  isLoading: Boolean = false;

  id: String = '';
  catName: String = '';
  button: String = 'Submit';
  isUpdate: boolean = false;
  temp:  any;

  constructor(private cat: CatService, private app: AppComponent,
    private dept: DeptService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'catName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32)
      ])],
      'deptName': [null, Validators.required]
    });

  }

  ngOnInit() {
    this.dept.getDept(localStorage.getItem('companyID'));
  }

  onChange(data) {
    this.temp = data;
    this.cat.getCat(data);
  }

  onSubmit(post) {
    this.isLoading = true;

    if (!this.isUpdate) {
      this.catReq = {
        name: post.catName,
        deptId: post.deptName,
      }

      console.log(post.deptName);

      this.cat.createCat(this.catReq).subscribe(res => {
        console.log(12);
        console.log(res);
        if (res.status == 1) {
          this.isLoading = false;
          console.log(res);
          this.app.alerts.push({
            type: 'success',
            icon: 'done',
            msg: `${res.message}`,
            timeout: 5000
          });
        } else {

          this.app.alerts.push({
            type: 'warning',
            icon: 'warning',
            msg: `${res.message}`,
            timeout: 5000
          });
        }
      })
    } else {
      this.catPut = {
        name: post.catName,
        categoryId: this.id,
      }

      this.cat.updateCat(this.catPut).subscribe(res => {
        if (res.status == 1) {
          this.isLoading = false;
          this.app.alerts.push({
            type: 'info',
            icon: 'priority_high',
            msg: `${res.message}`,
            timeout: 5000
          });
        } else {
          this.app.alerts.push({
            type: 'warning',
            icon: 'warning',
            msg: `${res.message}`,
            timeout: 5000
          });
        }
      })
    }

    this.rForm.reset();
    this.app.button = 'submit';
    this.app.action = 'Add';

  }

  onUpdate(id: String, catName: String) {
    this.id = id;
    this.catName = catName;
    this.isUpdate = true;

    this.app.action = 'Update';
    this.app.button = 'Update';
  }

  onDelete(id: String) {
    this.isLoading = true;
    console.log(id);
    this.catDel = {
      categoryId: id
    }
    this.cat.deleteCat(this.catDel).subscribe(res => {
      // Department Deleted
      this.isLoading = false;
      this.app.alerts.push({
        type: 'danger',
        icon: 'report',
        msg: `${res.message}`,
        timeout: 5000
      });

      console.log(this.temp + "   1");
      this.cat.getCat(this.temp);     
    });

  }

}
