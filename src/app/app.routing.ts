import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DepartmentComponent } from './components/structure/department/department.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { CategoryComponent } from './components/structure/category/category.component';
import { SkillsComponent } from './components/structure/skills/skills.component';
import { DesignationComponent } from './components/structure/designation/designation.component';

const routes: Routes = [
  // Dashboard Section
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  // Authentication Section
  { path: 'authentication/login', component: LoginComponent },
  { path: 'authentication/register', component: RegisterComponent },
  // Structure Section
  { path: 'structure/department', component: DepartmentComponent },
  { path: 'structure/category', component: CategoryComponent },
  { path: 'structure/skills', component: SkillsComponent },
  { path: 'structure/designation', component: DesignationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }