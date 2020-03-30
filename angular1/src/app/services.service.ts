import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { principal } from './principal';
import { map, tap, mapTo, catchError } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  headers:any;
  user:any;

  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public doRegistration(user)
  {
    return this.http.post("http://localhost:9000/Angular/register",user,
    {responseType:'text' as 'json'},
    );
  }
  public doStudentRegistration(student)
  {
    return this.http.post("http://localhost:9000/Angular/studentregister",student,
    {responseType:'text' as 'json'},
    );
  }
public home()
{
  return this.http.get("http://localhost:9000/Angular/home");
  
}
public searchByName(name):Observable<principal[]>
{
  return this.http.get<principal[]>("http://localhost:9000/Angular/search/"+name);
}
public deleteByName(name)
{
  return this.http.delete("http://localhost:9000/Angular/cancel/"+name);
}
public login(user)
{
  this.headers = new Headers({'Content-Type': 'application/json', Authorization: 'Basic ' + btoa(user.username+':'+user.password) });
  return this.http.post("http://localhost:9000/Angular/login",user,{headers:this.headers})
  .pipe(map(users => { 
    this.user=users;               
    if (this.user!=null) {
        sessionStorage.setItem('currentUser',this.user.username);
        sessionStorage.setItem('headers',JSON.stringify(this.headers));
        //console.log("currentuser is "+sessionStorage.getItem('currentUser'));
        //console.log(this.user);
        //console.log(JSON.stringify(this.user))
        //console.log(this.headers);
    }
    return user;
}));
  }
  logout() {
    sessionStorage.removeItem('currentUser');
}


}
