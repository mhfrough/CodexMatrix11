import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { FilterPipe } from './app.filter';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { LoadingComponent } from './components/core/loading/loading.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DepartmentComponent } from './components/structure/department/department.component';
import { DesignationComponent } from './components/structure/designation/designation.component';
import { CategoryComponent } from './components/structure/category/category.component';
import { SkillsComponent } from './components/structure/skills/skills.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { ErrorComponent } from './components/core/error/error.component';
import { UserprofileComponent } from './components/dashboard/profile/userprofile/userprofile.component';
import { CompanyprofileComponent } from './components/dashboard/profile/companyprofile/companyprofile.component';
import { NewEmployeeComponent } from './components/managment/employee/new-employee/new-employee.component';
import { ViewEmployeesComponent } from './components/managment/employee/view-employees/view-employees.component';
import { NewProjectComponent } from './components/managment/project/new-project/new-project.component';
import { AssignEmployeeComponent } from './components/managment/project/assign-employee/assign-employee.component';
import { AssignTaskComponent } from './components/managment/project/assign-task/assign-task.component';
import { NewTaskComponent } from './components/managment/task/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AnalyticsComponent,
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    DesignationComponent,
    CategoryComponent,
    SkillsComponent,
    MessagesComponent,
    ErrorComponent,
    UserprofileComponent,
    CompanyprofileComponent,
    NewEmployeeComponent,
    ViewEmployeesComponent,
    NewProjectComponent,
    AssignEmployeeComponent,
    AssignTaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FilterPipe,
  ],
})
export class AppModule { }
