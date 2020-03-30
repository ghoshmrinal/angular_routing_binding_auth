import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:any;

  constructor(private service:ServicesService) { }

  public delete(id:Number)
  {
    console.log(name);
    let resp=this.service.deleteByName(id);
    resp.subscribe((data)=>this.user=data);

  }

  ngOnInit() {
    this.service.home().subscribe((data)=>this.user=data);
  }
  public logoutpa()
  {
    this.service.logout();
  }

}
