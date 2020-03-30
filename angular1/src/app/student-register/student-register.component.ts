import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  student:Student=new Student();
  message: any;
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }
  public studentRegister()
  {
    this.service.doStudentRegistration(this.student)
    .subscribe((data)=>this.message=data);
  }
  submitted = false;

onSubmit()
 { this.submitted = true;

}

}
