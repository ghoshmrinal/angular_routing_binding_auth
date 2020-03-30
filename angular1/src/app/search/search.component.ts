import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User=new User();
  users:any;

  constructor(private service:ServicesService) { }

  public searchName()
  {
    let resp=this.service.searchByName(this.user.name);
    resp.subscribe((data)=>this.users=data);
  }
  public delete(id:Number)
  {
    let resp=this.service.deleteByName(id);
    resp.subscribe((data)=>this.users=data);

  }

  ngOnInit():void{
    

  }

}
