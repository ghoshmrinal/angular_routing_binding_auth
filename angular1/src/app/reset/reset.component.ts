import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  log(x)
  {
    console.log(x);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
