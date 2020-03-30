import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  user:User =new User();
  
  message:any;
  submitted = false;

onSubmit()
 { this.submitted = true;

}
 
 constructor(private service:ServicesService)
 {

 }
  
 public register()
 {
   console.log(this.user)
   this.service.doRegistration(this.user).subscribe((data)=>this.message=data);
   
 }

}
