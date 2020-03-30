import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ServicesService } from './services.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {AuthGuard} from './auth.guard';
import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptorsService } from './jwt-interceptor.service';
import { PrincipalhomeComponent } from './principalhome/principalhome.component';
import { NewTeacherAddComponent } from './new-teacher-add/new-teacher-add.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { SearchStudentComponent } from './search-student/search-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ResetComponent,
    HomeComponent,
    SearchComponent,
    PrincipalhomeComponent,
    NewTeacherAddComponent,
    StudentRegisterComponent,
    SearchTeacherComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', redirectTo: 'login', pathMatch: 'full' },
                          {path: 'register',component: RegisterComponent},
                          {path: 'login',component: LoginComponent},
                           {path:'reset',component:ResetComponent},
                           {path:'principalhome',component:PrincipalhomeComponent,canActivate:[AuthGuard]},
                           {path:'studentregister',component:StudentRegisterComponent,canActivate:[AuthGuard]},
                           {path:'searchstudent',component:SearchStudentComponent,canActivate:[AuthGuard]},
                           {path:'searchTeacher',component:SearchTeacherComponent,canActivate:[AuthGuard]},
                           {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
                           {path:'NewTeacher',component:NewTeacherAddComponent,canActivate:[AuthGuard]},
                            {path:'search',component:SearchComponent,canActivate:[AuthGuard]}])
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorsService, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
               ServicesService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
