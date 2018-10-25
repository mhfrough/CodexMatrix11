import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { FilterPipe } from './app.filter';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { LoadingComponent } from './components/core/loading/loading.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DepartmentComponent } from './components/structure/department/department.component';
import { DesignationComponent } from './components/structure/designation/designation.component';
import { CategoryComponent } from './components/structure/category/category.component';
import { SkillsComponent } from './components/structure/skills/skills.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AnalyticsComponent,
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    DesignationComponent,
    CategoryComponent,
    SkillsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FilterPipe,
  ],
})
export class AppModule { }
