import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  EmpId: any;
  EmpName: any;
  EMail: any;
  EmpDOJ: any;
  RMName:any;

  constructor() { }

  ngOnInit() {
    this.EmpId = localStorage.getItem("EmpId");
    this.EmpName = localStorage.getItem("EmpName");
    this.EMail = localStorage.getItem("EMail");
    this.EmpDOJ = localStorage.getItem("EmpDOJ");
    this.RMName=localStorage.getItem("RMName");
    console.log("In Home", this.EmpId, this.EmpName, this.EMail, this.EmpDOJ)
  }
}