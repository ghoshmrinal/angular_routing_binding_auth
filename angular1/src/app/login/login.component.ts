import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:User=new User();
users1:any;
  error: string;
  message: any;
  submitted=false;
  login: any;
  constructor(private service:ServicesService,private router:Router) { }
  onSubmit()
 {
    this.submitted = true;

}

  public loginpage()
  {
    this.service.login(this.user)
    .pipe(first())
    .subscribe(data=>
      {
        if(sessionStorage.getItem('currentUser')==null){
          this.error="Invalid User";
        }
        else{                
          let currentUser = JSON.parse(JSON.stringify(sessionStorage.getItem('currentUser')));
          //console.log("current user in login"+currentUser);
          this.router.navigate(['/principalhome']);
        }
      });
  
  }
  
  

}
