import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DepartmentComponent } from './components/structure/department/department.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { CategoryComponent } from './components/structure/category/category.component';
import { SkillsComponent } from './components/structure/skills/skills.component';
import { DesignationComponent } from './components/structure/designation/designation.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { ErrorComponent } from './components/core/error/error.component';
import { AuthGuard } from './app.auth.guard';
import { NewEmployeeComponent } from './components/managment/employee/new-employee/new-employee.component';
import { ViewEmployeesComponent } from './components/managment/employee/view-employees/view-employees.component';
import { NewProjectComponent } from './components/managment/project/new-project/new-project.component';
import { AssignEmployeeComponent } from './components/managment/project/assign-employee/assign-employee.component';
import { AssignTaskComponent } from './components/managment/project/assign-task/assign-task.component';
import { NewTaskComponent } from './components/managment/task/new-task/new-task.component';

const routes: Routes = [
  // Dashboard Section
  { path: '', component: AnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  // Authentication Section
  { path: 'authentication/login', component: LoginComponent },
  { path: 'authentication/register', component: RegisterComponent },
  // Structure Section
  { path: 'structure/department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: 'structure/category', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'structure/skills', component: SkillsComponent, canActivate: [AuthGuard] },
  { path: 'structure/designation', component: DesignationComponent, canActivate: [AuthGuard] },
  // Management Section - update lath link
  { path: 'management/new-employee', component: NewEmployeeComponent },
  { path: 'management/view-employees', component: ViewEmployeesComponent },
  { path: 'management/new-project', component: NewProjectComponent },
  { path: 'management/assign-employee', component: AssignEmployeeComponent},
  { path: 'management/assign-task', component: AssignTaskComponent},
  { path: 'management/task/new-task', component: NewTaskComponent},
  
  //Error Section
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }